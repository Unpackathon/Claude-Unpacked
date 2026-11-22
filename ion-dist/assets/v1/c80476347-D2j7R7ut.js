import{n as e}from"./preload-helper-sR4dxpO6.js";import{Ii as t}from"./shared-0-D23kmOCB.js";import{U as n,q as r}from"./shared-25-DapkFWlH.js";import{DS as i,vy as a}from"./shared-107-D8fgcL1q.js";import{zg as o}from"./shared-174-Uzjlgfhw.js";import{mu as s}from"./shared-39-DbjNCFD5.js";import{t as c}from"./c36273108-n0KIC37I.js";async function l(e,n=1e3){for(let r=0;e.readyState==="loading"&&r<n;r+=50)await t(50);let r=e.querySelectorAll('link[rel="stylesheet"]');if(r.length===0)return;let i=Array.from(r).map(e=>new Promise(t=>{if(e.sheet){t();return}e.addEventListener("load",()=>t()),e.addEventListener("error",()=>t())}));await Promise.race([Promise.all(i),t(n)])}async function u(e,n=1e3){e.body.getBoundingClientRect(),await Promise.race([e.fonts?.ready.catch(()=>void 0),t(n)])}function d(e){let t=[e,...e.querySelectorAll("*")],n=e.cloneNode(!0),r=[n,...n.querySelectorAll("*")];return t.forEach((e,t)=>{let n=r[t];e.shadowRoot&&n&&!e.hasChildNodes()&&(n.innerHTML=e.shadowRoot.innerHTML),e.localName==="details"&&n?.setAttribute("open",""),e.hasAttribute("data-code-text")&&n?.setAttribute("data-code-text",s(e))}),n.outerHTML}var f=new WeakMap;function p(e,t){let n=Symbol("print"),r=f.get(e)?.original??e.title;f.set(e,{original:r,owner:n}),e.title=t;let i=e.title;return()=>{f.get(e)?.owner===n&&(f.delete(e),e.title===i&&(e.title=r))}}async function m({title:t,element:n,doc:i=document,landscape:o=!1,signal:s}){return new Promise((f,m)=>{try{if(s?.aborted){f();return}let h=i.head.innerHTML,g=Array.from(i.body.querySelectorAll('link[rel="stylesheet"]'),e=>e.outerHTML).join(`
`),_=i.createElement("iframe");_.style.position="fixed",_.style.right="0",_.style.bottom="0",_.style.width="210mm",_.style.height="0",_.style.border="0",_.setAttribute("sandbox","allow-same-origin allow-modals"),_.setAttribute("csp","");let v=!1;_.onload=()=>{v=!0},i.body.appendChild(_);let y=_.contentDocument||_.contentWindow?.document;if(!y){i.body.removeChild(_),m(e(Error("Could not access iframe document"),"Could not access iframe document","literal"));return}y.write(`
        <!DOCTYPE html>
        <html>
          <head>
            <title>${c(t)}</title>
            ${h}
            <style>
              /* Remove browser-added headers and footers */
              @page {
                size: ${o?"landscape":"auto"};
                margin: 0; /* Keep at 0 to remove datetime, page count, website, etc */
                padding: 12mm 0; /* Per-page top/bottom inset; Chromium-only. Sides come from body. */
              }
              @media print {
                body {
                  margin: 0;
                  padding: 0 15mm;
                }
                /* The panels' on-screen side inset and reading width; on paper
                   the body padding above stands in for both. */
                #markdown-artifact, #wiggle-file-content {
                  max-width: none;
                  margin-inline: 0;
                  padding-inline: 0;
                }
                html, body, pre, code {
                  -webkit-print-color-adjust: exact !important;
                  color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              
                /* Smart page breaks */
                h1, h2, h3 {
                  page-break-after: avoid !important;
                }
                /* globals.body.css keeps code blocks whole and lets long tables split, so no !important. */
                img, table, tr {
                  page-break-inside: avoid;
                }
              }
            </style>
          </head>
          <body>
            ${d(n)}
            ${g}
          </body>
        </html>
      `),y.close();for(let e of["lang","data-cjk-order","data-theme",...a,"data-cds-fizzy-lake","data-reply-face","data-cds-windows","data-cds-linux"]){let t=i.documentElement.getAttribute(e);t!==null&&y.documentElement.setAttribute(e,t)}let b=i.documentElement.style.getPropertyValue("--font-claude-response");b&&y.documentElement.style.setProperty("--font-claude-response",b),i.documentElement.classList.contains("cds-root")&&y.documentElement.classList.add("cds-root"),y.documentElement.setAttribute("data-print-document",n.closest("[data-mode]")?.getAttribute("data-mode")??"");let x=r(i),S,C=!1,w,T=()=>{if(!C)try{S=p(i,t),_.contentWindow?.addEventListener("afterprint",()=>{x.setTimeout(E,100)});try{_.contentWindow?.print()}catch{_.contentDocument?.execCommand("print")}x.setTimeout(f,100),w=x.setTimeout(E,6e4)}catch(e){E(),m(e)}},E=()=>{if(!C){C=!0,x.clearTimeout(w),s?.removeEventListener("abort",D);try{S?.(),i.body.removeChild(_)}catch{}}},D=()=>{E(),f()};s?.addEventListener("abort",D,{once:!0}),(async()=>{try{v||await new Promise((e,t)=>{_.onload=()=>e(),_.onerror=e=>t(e)}),await l(y),await u(y),T()}catch(e){E(),m(e)}})()}catch(e){m(e)}})}async function h(t,n=document){if(t.type!==o.Markdown)throw e(Error("Only markdown artifacts can be saved as PDF"),"Only markdown artifacts can be saved as PDF","literal");let r=n.getElementById("markdown-artifact");if(!r)throw e(Error("Markdown artifact element not found"),"Markdown artifact element not found","literal");return m({title:t?.title||"Artifact",element:r,doc:n})}function g(e){let t=document.createElement("pre");return t.style.whiteSpace="pre-wrap",t.style.wordBreak="break-word",t.textContent=e,t}async function _(t,r,a=document){let o=i(t.path),s=n(a);if(r!==void 0)return m({title:o,element:g(r),doc:s});let c=a.querySelector("#wiggle-file-content");if(!c)throw e(Error("File content element not found"),"File content element not found","literal");return m({title:o,element:c,doc:s})}export{h as n,_ as r,m as t};