# Claude Desktop for Windows 6.28899.6

Claude Desktop is Anthropic’s desktop app for using Claude. Alongside chat, Anthropic documents support for Cowork and Claude Code. On supported plans, the desktop app can connect those workflows to local files, apps, and development tools. [Anthropic’s Claude Desktop documentation](https://support.claude.com/en/articles/14128542-let-claude-use-your-computer-in-cowork)

This snapshot comes from the installed Windows x64 package **6.28899.6.0**. The Electron package itself reports version **6.28899.6**.

## Where to start

| Path | Role |
| --- | --- |
| [app/package.json](app/package.json) | Desktop package metadata and the declared Electron entry point. |
| [app/.vite/build/launcher.js](app/.vite/build/launcher.js) | The packaged desktop launcher. |
| [app/.vite/build/](app/.vite/build/) | Compiled desktop JavaScript. |
| [app/.vite/renderer/](app/.vite/renderer/) | Renderer resources shipped in the desktop archive. |
| [app/resources/](app/resources/) | Bundled skills, localization, and integration resources. |
| [ion-dist/index.html](ion-dist/index.html) | Entry page for the separately packaged web interface. |
| [ion-dist/assets/](ion-dist/assets/) | Compiled interface assets. |
| [ion-dist/third-party-notices.txt](ion-dist/third-party-notices.txt) | Third-party notices for that interface. |

## Archive verification

| Source archive | Extracted files | SHA-256 |
| --- | ---: | --- |
| `app.asar` and its registered companions | 1,251 | `1165371d698a7e247475cd7bfbf2ea52b06846a1a514bdf5727c135cdfdd3b66` |
| `ion-dist.asar` | 6,848 | `f0a85d25778a59c4ee8018c6c00500ed4a687a85ec5ca61f129b54265afe86d4` |

Each extracted file was checked against the bytes read from the installed package. Six native files were stored alongside `app.asar` and differed from the archive’s declared SHA-256 hashes. This snapshot preserves the installed bytes and records both hashes in [archive-verification.json](archive-verification.json). The inspection was static and covered installation files.
