#!/bin/sh
//usr/bin/true; for URL do :; done; [ -n "$URL" ] || exit 0
//usr/bin/true; case "$URL" in http://*|https://*) NODE="$(command -v node 2>/dev/null)"; if [ -n "$NODE" ] && [ -n "$CLAUDE_BROWSER_BRIDGE" ]; then "$NODE" "$0" "$@"; RC=$?; [ "$RC" = 0 ] && exit 0; [ "$RC" = 4 ] && exit 1; fi;; esac
//usr/bin/true; unset BROWSER CLAUDE_BROWSER_BRIDGE; if [ "$(uname)" = Darwin ]; then /usr/bin/open "$URL"; else xdg-open "$URL"; fi; exit $?
//
// ^ sh/JS polyglot prologue, run when a tool execs `<shim> <url>` directly
// (gh, Python's webbrowser, xdg-open); `node <shim> ... <url>` (vite, CRA)
// sees comments. Keep each of those lines starting with `//`. Node runs
// without exec: a node that can't run the body falls through to the OS opener
// (BROWSER cleared so xdg-open's generic mode can't loop back); exit 4 means
// the body already ran the opener and it failed, so sh doesn't run it twice.
//
// $BROWSER shim for Claude desktop Code sessions: asks the app over the unix
// socket in CLAUDE_BROWSER_BRIDGE ({socket, key}) to show the URL in the
// session's Browser pane, and opens the OS browser itself on any answer but
// "pane". No dependencies, and no syntax newer than Node 14 (no `??`, `?.`)
// so an older node parses it and exits on the version check.
"use strict";

const MIN_NODE_MAJOR = 14;
/** How long the app may take to answer before we open the OS browser. */
const REPLY_TIMEOUT_MS = 3000;
/** The app refuses a longer request line. */
const MAX_REQUEST_BYTES = 8 * 1024;
const MAX_REPLY_BYTES = 1024;
/** How long an OS opener may run before we take it as launched. */
const OPENER_SETTLE_MS = 3000;
/** Exit status telling the sh prologue the opener already ran (see top). */
const OPENER_FAILED = 4;

if (parseInt(process.versions.node, 10) < MIN_NODE_MAJOR) {
  process.exit(3);
}

const target = process.argv[process.argv.length - 1];
if (process.argv.length < 3 || !target) {
  process.exit(0);
}

function parseBridgeConfig(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (
      parsed &&
      typeof parsed.socket === "string" &&
      parsed.socket.length > 0 &&
      typeof parsed.key === "string" &&
      /^[0-9a-f]{64}$/.test(parsed.key)
    ) {
      return parsed;
    }
  } catch (e) {
    // fall through
  }
  return null;
}

// Only what the pane could ever take is worth asking about: an absolute
// http(s) URL with no userinfo. Everything else (file://, bare paths from
// `cargo doc --open` / `man -H`, user:pw@ URLs) goes straight to the OS.
function isRelayable(url) {
  if (!/^https?:\/\//i.test(url)) {
    return false;
  }
  try {
    const parsed = new URL(url);
    return parsed.username === "" && parsed.password === "";
  } catch (e) {
    return false;
  }
}

function systemOpenCommand(url) {
  return process.platform === "darwin"
    ? ["/usr/bin/open", url]
    : ["xdg-open", url];
}

// The opener must not inherit the bridge: xdg-open's generic mode would
// run $BROWSER (this file) again in a loop.
const childEnv = Object.assign({}, process.env);
delete childEnv.BROWSER;
delete childEnv.CLAUDE_BROWSER_BRIDGE;

// "pane", "declined", or null when the app could not be asked or gave no
// usable answer.
function askApp(net, config, url) {
  const request = JSON.stringify({ v: 1, key: config.key, url: url }) + "\n";
  if (Buffer.byteLength(request) > MAX_REQUEST_BYTES) {
    return Promise.resolve(null);
  }
  return new Promise((resolve) => {
    let reply = "";
    let settled = false;
    let socket;
    const finish = (result) => {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        if (socket) {
          socket.destroy();
        }
        resolve(result);
      }
    };
    const timer = setTimeout(() => finish(null), REPLY_TIMEOUT_MS);
    try {
      socket = net.createConnection(config.socket);
    } catch (e) {
      finish(null);
      return;
    }
    socket.setEncoding("utf8");
    socket.once("connect", () => socket.write(request));
    socket.on("data", (chunk) => {
      reply += chunk;
      const newline = reply.indexOf("\n");
      if (newline !== -1) {
        let answer = null;
        try {
          const parsed = JSON.parse(reply.slice(0, newline));
          if (parsed && parsed.result === "pane") {
            answer = "pane";
          } else if (parsed && parsed.result === "declined") {
            answer = "declined";
          }
        } catch (e) {
          // malformed: no answer
        }
        finish(answer);
      } else if (reply.length > MAX_REPLY_BYTES) {
        finish(null);
      }
    });
    socket.once("error", () => finish(null));
    socket.once("close", () => finish(null));
  });
}

// Resolves true once the opener exited 0, or is still running after
// OPENER_SETTLE_MS; false if it failed to start or exited non-zero.
function openWithOs(spawn, argv) {
  if (process.env.CLAUDE_BROWSER_BRIDGE_PRINT === "1") {
    // Test hook: report the opener instead of running it.
    process.stdout.write(
      JSON.stringify({
        opened: argv,
        envKeepsBridge:
          "BROWSER" in childEnv || "CLAUDE_BROWSER_BRIDGE" in childEnv,
      }),
    );
    return Promise.resolve(true);
  }
  return new Promise((resolve) => {
    let child;
    try {
      child = spawn(argv[0], argv.slice(1), {
        detached: true,
        stdio: "ignore",
        env: childEnv,
      });
    } catch (e) {
      resolve(false);
      return;
    }
    // The timer stays ref'd so we live long enough to see a fast non-zero
    // exit; the child is unref'd so nothing else waits on it.
    const settle = setTimeout(() => resolve(true), OPENER_SETTLE_MS);
    child.unref();
    child.once("error", () => {
      clearTimeout(settle);
      resolve(false);
    });
    child.once("exit", (code) => {
      clearTimeout(settle);
      resolve(code === 0);
    });
  });
}

Promise.all([import("net"), import("child_process")])
  .then(async (modules) => {
    const net = modules[0];
    const spawn = modules[1].spawn;
    const config = isRelayable(target)
      ? parseBridgeConfig(process.env.CLAUDE_BROWSER_BRIDGE)
      : null;
    const answer = config ? await askApp(net, config, target) : null;
    if (answer === "pane") {
      if (process.env.CLAUDE_BROWSER_BRIDGE_PRINT === "1") {
        process.stdout.write(JSON.stringify({ opened: "pane" }));
      }
      return 0;
    }
    return (await openWithOs(spawn, systemOpenCommand(target)))
      ? 0
      : OPENER_FAILED;
  })
  .then(
    (code) => process.exit(code),
    () => process.exit(1),
  );
