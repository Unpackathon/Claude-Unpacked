"use strict";try{(function(){var e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="51d4c67e-5d7b-4257-99d4-aebf050447dd",e._sentryDebugIdIdentifier="sentry-dbid-51d4c67e-5d7b-4257-99d4-aebf050447dd")})()}catch{}const e=require("./index.chunk-CMoS3SOQ.js"),t=require("./index.chunk-CCkEi--u.js");var n=e=>(URL.parse(URL.parse(e)?.origin??"")?.hostname??"").replace(/\.+$/,""),r=e=>e.split(".").slice(-2).join(".");function i(e,t){let[i,a]=[n(e),n(t)];return!i.includes(".")||!a.includes(".")||r(i)===r(a)}var a=e.r({secretBoxRefusal:()=>z}),o="This tab's page can't be read or acted on while a password or code box on it may hold a value, or while the page can't be checked. That ends once the tab shows a page with no such value: navigate it to another site or close it, or ask the person to finish what they are doing in it themselves.",s="password-manager-page-look",c=5e3,l=3e3,u=1,d=2,f=4,p=8,m=16,h=32,g=64,_=128,v=256,y=512,b=1024,x=2048,S=`function(origin, guard) {
  const KEY = "passwordBoxMemory";
  // An element with this id shows as globalThis[KEY] too, but not as its own.
  if (!Object.hasOwn(globalThis, KEY)) {
    const were = new WeakSet();
    const note = (records) => {
      for (const record of records) {
        if ((record.oldValue || "").toLowerCase() === "password") were.add(record.target);
      }
    };
    Object.defineProperty(globalThis, KEY, {
      value: { were, note, watched: new WeakSet(), observer: new MutationObserver(note), blankSince: new WeakMap(), taken: new Set(), values: new Set(), marked: new Set() },
      configurable: true,
    });
  }
  const memory = globalThis[KEY];
  memory.note(memory.observer.takeRecords());
  // Empty the noted names and values at every switch, off as well as on: the values are the person's secrets.
  if (guard !== undefined) Object.assign(memory, { guard, taken: new Set(), values: new Set(), marked: new Set() });
  if (guard) memory.stopped = memory.byMark = memory.byForm = false;
  // Where the guards that may read the top window share the names and values, each beside its own memory: the top window's memory, since the values are taken where the form
  // is and the navigate event comes in the window that is moved. By run on Electron 45.2.1 one world by name serves all frames of one origin in a process, so that a frame
  // finds that memory there; the page's own world sees none of it. Only the top document's own switch empties it. A frame that does not reach it has its own alone.
  const store = () => {
    try {
      // A guard's memory and nothing else: on a window that may not be read a frame's name shows as the window's own property too, and gives that frame's window.
      const found = Object.hasOwn(top, KEY) && top[KEY];
      for (const kind of ["taken", "values", "marked"]) Set.prototype.has.call(found[kind], "");
      return found;
    } catch {
      // Its own, below.
    }
    return memory;
  };

  const TEXT_TYPES = ["text", "password", "email", "tel", "number", "search", "url"];
  const PASSWORD_WORDS = /password|passwd|passcode|passphrase|pwd|passwort|kennwort|contrase\u00f1a|senha|mot.?de.?passe|(^|[^a-z])(pass|pw|mdp)([^a-z]|$)/i;
  const SIGN_IN_CODE_WORDS = /otp([^a-z]|$)|2fa|mfa([^a-z]|$)|two.?factor|one.?time|(verif|authent|secur|sms|log.?in|sign.?in)[a-z]*.?code/i;
  const ANY_CODE_WORDS = /code([^a-z]|$)|(^|[^a-z])pin([^a-z]|$)|token([^a-z]|$)/i;
  const USER_WORDS = /user|log.?in|sign.?in|e.?mail/i;
  const MAILING_WORDS = /newsletter|subscri/i;

  const hintsOf = (el) => (el.getAttribute("autocomplete") || "").toLowerCase().split(/\\s+/);
  const saidOf = (el) => {
    const said = [el.getAttribute("name"), el.getAttribute("id"), el.getAttribute("aria-label"), el.getAttribute("placeholder")]
      .concat(Array.from(el.labels || [], (label) => label.textContent)).join(" ");
    // Over 2,000 characters count as a password box's, so that padding can't push a telling word out.
    return said.length > 2000 ? "password" : said.replace(/([a-z0-9])([A-Z])/g, "$1 $2");
  };
  const drawnAsDots = (el) => {
    const style = getComputedStyle(el);
    const dots = style.getPropertyValue("-webkit-text-security");
    return (dots !== "" && dots !== "none") || style.getPropertyValue("font-family").toLowerCase().includes("text-security");
  };
  const takesPassword = (el, hints, said) =>
    el.type === "password" || memory.were.has(el) || hints.some((hint) => hint.endsWith("password")) ||
    PASSWORD_WORDS.test(said) || drawnAsDots(el);
  const takesSignInCode = (hints, said) => hints.includes("one-time-code") || SIGN_IN_CODE_WORDS.test(said);
  const mayTakeCode = (el, said) => {
    const digits = (el.getAttribute("inputmode") || "").toLowerCase() === "numeric" || el.type === "tel" || el.type === "number" ||
      /\\\\d|0-9/.test(el.getAttribute("pattern") || "");
    return ANY_CODE_WORDS.test(said) || el.maxLength === 1 || (digits && el.maxLength > 1 && el.maxLength <= 8);
  };
  const takesUserName = (el, hints, said) =>
    ["text", "email"].includes(el.type) && !MAILING_WORDS.test(said) &&
    (el.type === "email" || hints.includes("username") || hints.includes("email") || USER_WORDS.test(said));
  // For the guard on sends alone: six to eight digits may be a one-time code, whatever the box says of itself. Not by USER_WORDS: code pages say "login" and "sign in" too.
  const namedForUser = (el) =>
    el.type === "email" || hintsOf(el).some((hint) => hint === "username" || hint === "email") ||
    /^(user|username|userid|login|loginname|email)$/i.test(el.getAttribute("name") || "");
  const codeLike = (el) => /^\\d{6,8}$/.test(el.value) && !namedForUser(el);
  const shown = (el) =>
    !el.matches(":disabled") && !el.readOnly && el.checkVisibility({ opacityProperty: true, visibilityProperty: true });

  let bits = self.origin === origin ? ${u} : 0;
  const secretForms = new Set();
  const searchForms = new Set();
  const senders = [];
  const secrets = [];
  const isBox = (node) =>
    (node instanceof HTMLInputElement && (TEXT_TYPES.includes(node.type) || memory.were.has(node))) || node instanceof HTMLTextAreaElement;
  const holds = (el) => el.value !== "" || el.validity.badInput;
  const marksOf = (el) => {
    const hints = hintsOf(el);
    const said = saidOf(el);
    const forSignIn = takesPassword(el, hints, said) || takesSignInCode(hints, said);
    return { hints, said, forSignIn, secret: forSignIn || mayTakeCode(el, said) };
  };
  const lookAt = (el) => {
    if (el.type === "password") memory.were.add(el);
    const { hints, said, forSignIn, secret } = marksOf(el);
    const forCard = hints.some((hint) => hint.startsWith("cc-"));
    const forOtherUse = forCard || hints.includes("new-password");
    if (!forOtherUse && (forSignIn || takesUserName(el, hints, said)) && shown(el)) bits |= ${d};
    // Whatever card hint it has: a frame writes its own hints.
    if (forSignIn) bits |= ${f};
    // A site's search, whose box may speak of passwords, is left to the guard wherever the guard would hear of its send.
    const ofSearch = el.form !== null && (el.type === "search" || written(el.form, "role") === "search");
    if (forSignIn && el.form !== null) (ofSearch ? searchForms : secretForms).add(el.form);
    if (holds(el)) bits |= ${p};
    if (holds(el) && secret) bits |= ${m};
    if (holds(el) && (secret || codeLike(el))) secrets.push(el);
  };

  // Read through the prototypes, so that a form field, or a form on the document,
  // named like one of these is not read instead.
  const read = (proto, name) => {
    const get = Object.getOwnPropertyDescriptor(proto, name).get;
    return (node) => get.call(node);
  };
  const shadowOf = read(Element.prototype, "shadowRoot");
  const attributesOf = read(Element.prototype, "attributes");
  const nameOf = read(Node.prototype, "nodeName");
  const written = (el, name) => Element.prototype.getAttribute.call(el, name);
  // by: the submit control that sends the form, or null; its formmethod overrides the form's method.
  const methodSaid = (form, by) => (by && written(by, "formmethod")) ?? written(form, "method");
  // A browser sends by GET unless the method is post or dialog, in any case of letters.
  const isGet = (said) => !["post", "dialog"].includes(said.toLowerCase());
  const isSender = (node) =>
    (node instanceof HTMLButtonElement || node instanceof HTMLInputElement) && ["submit", "image"].includes(node.type);
  const base = Document.prototype.querySelector.call(document, "base[target]");
  // As Chromium takes them: a control's formtarget, written, even empty, goes before the form's target, and where that leaves none the base's decides.
  const targetSaid = (form, by) =>
    ((by && written(by, "formtarget")) ?? written(form, "target")) || (base && written(base, "target")) || "";
  // Undefined for a node of another kind. Not instanceof, which goes by realm: a form in a frame of this origin can send into this window.
  const got = (proto, name, node) => {
    try {
      return read(proto, name)(node);
    } catch {
      return undefined;
    }
  };
  const ownedBy = (form) => got(HTMLFormElement.prototype, "elements", form);
  const typeAs = (proto, node) => got(proto, "type", node);
  const isSecret = (el) =>
    (["textarea", ...TEXT_TYPES].includes(typeAs(HTMLInputElement.prototype, el) ?? typeAs(HTMLTextAreaElement.prototype, el)) || memory.were.has(el)) &&
    (marksOf(el).secret || codeLike(el));
  if (guard && !memory.listens) {
    memory.listens = true;
    // The navigation starts in a later task, after the page may have changed the boxes, method or button: note now the names and values that would carry a secret.
    const noteTaken = (event) => {
      if (!memory.guard) return;
      memory.note(memory.observer.takeRecords());
      walk();
      // Into its own memory too: a frame may be parted from the top window between a taking and a move of its own window.
      const both = new Set([memory, store()]);
      for (const { taken, values } of both) {
        for (const el of secrets) {
          if (el.name !== "") taken.add(el.name);
          // A shorter one, as a digit of a code split over boxes, is too likely to stand in an address for something else.
          if (el.value.length > 3) values.add(el.value);
        }
        for (const [name, value] of event.formData) if (values.has(value)) taken.add(name);
      }
      // For the log alone: which of the noted names and values came from boxes with a mark, to tell them from digits in a box with none.
      for (const { marked } of both) {
        for (const el of secrets) if (marksOf(el).secret) marked.add(el.name).add(el.value.length > 3 ? el.value : el.name);
        for (const [name, value] of event.formData) if (marked.has(value)) marked.add(name);
      }
    };
    // Before the page's listeners on the form, which may empty the boxes, and after them, since they may add or rename entries.
    const listen = () => {
      addEventListener("formdata", noteTaken, true);
      addEventListener("formdata", noteTaken);
    };
    listen();
    // document.open() takes the window's listeners away, these two among them, as it takes the document's children: set them again then. One that is still there is not added twice.
    memory.rewritten = new MutationObserver(listen);
    memory.rewritten.observe(document, { childList: true });
    // The navigate event, not submit: it comes after the page's submit handlers
    // have run, and also for form.submit(), which fires no submit event.
    navigation.addEventListener("navigate", (event) => {
      memory.note(memory.observer.takeRecords());
      const shared = store();
      const noted = (kind, what) => memory[kind].has(what) || shared[kind].has(what);
      const by = event.sourceElement;
      const sender = typeAs(HTMLButtonElement.prototype, by) ?? typeAs(HTMLInputElement.prototype, by);
      const form = ownedBy(by) ? by : sender && by.form;
      // By the name where a form sends. By the value whoever begins it, a script of the page's too, where it reads the same in the address.
      // Not a pair that this window's address has already, as a POST to the page's own address keeps: that puts nothing new there.
      const here = new URL(location.href).searchParams;
      const carried = Array.from(new URL(event.destination.url).searchParams).some(
        ([name, value]) =>
          value !== "" && !here.getAll(name).includes(value) && (((form || sender) && noted("taken", name)) || noted("values", value)),
      );
      // For a form whose formdata event this window did not get: one in a shadow root, or in a frame that sends into this window.
      const held = () => isGet(methodSaid(form, by === form ? null : by) ?? "") && Array.from(ownedBy(form)).some((el) => isSecret(el) && holds(el));
      if (!memory.guard || (!carried && !(form && held()))) return;
      event.preventDefault();
      memory.stopped = true;
      // For the log alone, over all stops since the switch-on: whether a box with a mark had a part in one, and whether one was of a form's send.
      const byMark = ([name, value]) =>
        value !== "" &&
        (((form || sender) && noted("taken", name) && noted("marked", name)) || (noted("values", value) && noted("marked", value))) &&
        !here.getAll(name).includes(value);
      memory.byMark ||= Array.from(new URL(event.destination.url).searchParams).some(byMark) ||
        Boolean(form && held() && Array.from(ownedBy(form)).some((el) => isSecret(el) && marksOf(el).secret && holds(el)));
      memory.byForm ||= Boolean(form || sender);
    });
  }
  // What DevTools' searches for "input>" and "textarea>" find, and never more:
  // an element whose name ends so, or text, a comment or an attribute with it.
  let found = 0;
  const searches = [[/input$/i, /input>/i], [/textarea$/i, /textarea>/i]];
  const count = (node) => {
    for (const [named, spelt] of searches) {
      const hit = node instanceof Element
        ? named.test(nameOf(node)) ||
          Array.from(attributesOf(node)).some((attr) => spelt.test(attr.localName) || spelt.test(attr.value))
        : spelt.test(node.data);
      if (hit) found++;
    }
  };
  // Until a frame's first page comes it shows a blank one, which reads as
  // complete. A page that never comes must not count for ever.
  const awaitFirstPage = (frame) => {
    const address = (frame.getAttribute("src") || frame.getAttribute("data") || "").trim();
    const inner = frame.contentDocument;
    const blank = inner !== null && read(Document.prototype, "URL")(inner) === "about:blank";
    if (!blank || address === "" || /^(about|javascript):/i.test(address)) return;
    // A lazy frame may never begin, and once it does the tab reads as loading.
    if (frame.localName === "iframe" && (frame.getAttribute("loading") || "").toLowerCase() === "lazy") return;
    if (!memory.blankSince.has(frame)) memory.blankSince.set(frame, performance.now());
    if (performance.now() - memory.blankSince.get(frame) < ${c}) bits |= ${h};
  };
  const watch = (root) => {
    if (memory.watched.has(root)) return;
    memory.watched.add(root);
    memory.observer.observe(root, { subtree: true, attributeFilter: ["type"], attributeOldValue: true });
  };
  const visit = (root, top) => {
    watch(root);
    const show = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_CDATA_SECTION;
    const walker = Document.prototype.createTreeWalker.call(document, top, show);
    for (let node = top === root ? walker.nextNode() : top; node !== null; node = walker.nextNode()) {
      count(node);
      if (!(node instanceof Element)) continue;
      if (isBox(node)) lookAt(node);
      if (isSender(node)) senders.push(node);
      if (node instanceof HTMLIFrameElement || node instanceof HTMLFrameElement || node instanceof HTMLObjectElement) awaitFirstPage(node);
      const shadow = shadowOf(node);
      if (shadow !== null) visit(shadow, shadow);
    }
  };
  // An image or frame that never comes must not count as loading for ever.
  const state = read(Document.prototype, "readyState")(document);
  const [timing] = performance.getEntriesByType("navigation");
  const parsed = timing === undefined ? 0 : timing.domInteractive;
  if (state === "loading" || (state !== "complete" && performance.now() - parsed < ${c})) bits |= ${h};
  const walk = () => {
    secrets.length = senders.length = 0;
    secretForms.clear();
    searchForms.clear();
    const html = read(Document.prototype, "documentElement")(document);
    // Watch the document itself too: the script that runs as a document starts finds no root element yet.
    watch(document);
    if (html !== null) visit(document, html);
  };
  walk();
  for (const form of new Set([...secretForms, ...searchForms])) {
    const ways = [null, ...senders.filter((by) => by.form === form)];
    const refused = (by) => {
      const said = methodSaid(form, by);
      // No guard hears of a send from a frame's first, blank document, and none may of one into a window or frame that is named, which may be blank or of another process.
      const unheard = navigation.currentEntry === null || !["", "_self", "_parent", "_top", "_blank"].includes(targetSaid(form, by).toLowerCase());
      return isGet(said ?? "") && (unheard || (said !== null && secretForms.has(form)));
    };
    if (ways.some(refused)) bits |= ${g};
  }
  if (memory.guard && top !== window && store() === memory) bits |= ${x};
  if (memory.stopped) bits |= ${_};
  if (memory.stopped && !memory.byMark) bits |= ${v} | (memory.byForm ? ${y} : 0) | (memory.marked.size + store().marked.size > 0 ? ${b} : 0);
  return [bits, found];
}`;t.U$(S);async function C(e,t){let{frameTree:n}=await e("Page.getFrameTree",{},t),r=[],i=[n];for(let e=i.shift();e!==void 0;e=i.shift()){let{id:t,loaderId:n,securityOrigin:a}=e.frame??{};if(typeof t!="string"||typeof n!="string")return null;r.push({id:t,loaderId:n,origin:String(a)}),i.push(...e.childFrames??[])}return r.length===0?null:r}async function w(e,t,n){let{searchId:r,resultCount:i}=await e("DOM.performSearch",{query:`${t}>`},n);return e("DOM.discardSearchResults",{searchId:r},n).catch(()=>void 0),typeof i=="number"?i:NaN}var T=e=>typeof e=="number"&&Number.isInteger(e)&&e>=0,E="chrome-extension://";function D(e){return e.mainFrame.framesInSubtree.filter(e=>!e.origin.startsWith(E))}var O=5,k=8;async function A(e,n,r){if(r===O)return[];let{send:i,reported:a}=e;await i("Target.setAutoAttach",{autoAttach:!1,waitForDebuggerOnStart:!1},n),await i("Target.setAutoAttach",{autoAttach:!0,waitForDebuggerOnStart:!1,flatten:!0},n);let o=new Map(a.filter(({to:e})=>e===n).map(({targetId:e,url:t})=>[e,t])),s=async([a,o])=>{let s;try{s=(await i("Target.attachToTarget",{targetId:a,flatten:!0},n)).sessionId}catch(e){if(e instanceof t.z$)return[];throw e}return typeof s=="string"?String(o).startsWith(E)?A(e,s,r+1):j(e,s,r+1):null},c=[];for(let e=0;e<o.size;e+=k){let t=[...o].slice(e,e+k);if(c.push(...await Promise.all(t.map(s))),c.includes(null))return null}return c.flatMap(e=>e??[])}async function j(e,t,n){let{origin:r,guard:a,send:o}=e,c=await C(o,t);if(c===null)return null;await o("DOM.enable",{},t);let[l,u,d,...f]=await Promise.all([w(o,"input",t),w(o,"textarea",t),A(e,t,n),...c.map(async e=>{let{executionContextId:n}=await o("Page.createIsolatedWorld",{frameId:e.id,worldName:s},t);if(typeof n!="number")return null;let i=await o("Runtime.callFunctionOn",{functionDeclaration:S,executionContextId:n,arguments:t===void 0&&a!==void 0?[{value:r},{value:a}]:[{value:r}],returnByValue:!0,silent:!0},t),{value:c}=i.result??{},[l,u,...d]=Array.isArray(c)?c:[];return i.exceptionDetails===void 0&&T(l)&&l<2*x&&T(u)&&d.length===0?{bits:l,found:u}:null})]),p=await C(o,t),m=0,h=[];for(let e of f){if(e===null)return null;m+=e.found,h.push(n===0?e.bits:e.bits&-2)}if(d===null||JSON.stringify(p)!==JSON.stringify(c))return null;let g=l+u-m,_=n>0&&c.every(e=>!i(e.origin,r));return g===0||g>0&&_?[...h,...d]:null}var M=new WeakMap,N=new WeakSet;function P(e){if(!e.isLoading())return M.delete(e),!1;let t=`${e.mainFrame.frameToken} ${e.mainFrame.url}`,n=M.get(e);return n?.page===t?performance.now()-n.at<c:(M.set(e,{page:t,at:performance.now()}),N.has(e)||(N.add(e),e.once("did-stop-loading",()=>{N.delete(e),M.delete(e)})),!0)}async function F(e,n,r,i){let a=!1,o=new Map,s=new Set,c=(n,r)=>{s.has(r)||t.H$(e,"Target.detachFromTarget",{sessionId:n},r).catch(()=>void 0)},l=async(n,r,i)=>{if(a)throw Error("the look is over");let s=await t.H$(e,n,r,i),l=n==="Target.attachToTarget"?s.sessionId:null;if(typeof l=="string"){if(a)throw c(l,i),Error("the look is over");o.set(l,i)}return s},u=[],d=(e,t,n,r)=>{if(t==="Target.detachedFromTarget"&&(o.delete(String(n.sessionId)),s.add(n.sessionId)),t!=="Target.attachedToTarget")return;let i=r||void 0,{targetId:a,url:c,type:l}=n.targetInfo??{};l==="iframe"&&u.push({targetId:a,url:c,to:i}),typeof n.sessionId=="string"&&o.set(n.sessionId,i)},f=()=>D(e).map(e=>e.frameToken).join(),p=f();e.debugger.on("message",d);try{let a=await t.NUt(j({origin:n,guard:i,send:l,reported:u},void 0,0),r-performance.now(),null);if(a===null||f()!==p)return null;let o=a.length!==D(e).length;return a[0]|=P(e)?h:0,{bits:a,unreached:o,loading:e.isLoading()}}finally{a=!0,e.debugger.off("message",d);for(let[e,t]of[...o].toReversed())c(e,t);t.H$(e,"Target.setAutoAttach",{autoAttach:!1,waitForDebuggerOnStart:!1}).catch(()=>void 0)}}async function I(e,n,r,i){try{let a=await t.ky(e.serverId,e.tabId);return a===null||t.aR(a)?null:await t.V$(a,async()=>performance.now()<r?F(a,n,r,i):null)}catch{return null}}function L(e,n="",r=l,i){let a=Math.min(r,l),o=I(e,n,performance.now()+a,i);return t.NUt(o,a,null)}async function R(e,t){let n=await L(e);return n===null||n.unreached||n.bits.some(e=>(e&t)!==0)}async function z(e){return await R(e,m)?o:null}Promise.resolve(),Object.defineProperty(exports,"n",{enumerable:!0,get:function(){return z}}),Object.defineProperty(exports,"r",{enumerable:!0,get:function(){return i}}),Object.defineProperty(exports,"t",{enumerable:!0,get:function(){return a}});
//# sourceMappingURL=index.chunk-C_T6p8uq.js.map