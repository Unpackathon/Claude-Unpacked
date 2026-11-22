import{E as e,N as t,P as n,b as r,d as i,j as a}from"./vendor-zod-Ddu6wnrm.js";import{So as o,Va as s,bo as c,fo as l,po as u,xo as d}from"./vendor-frame-Dy-urf5a.js";import{$d as J9,Gd as I5,Jd as J2,Kd as J0,Ud as I3,Vd as I1,Vu as f,Xd as J4,Yd as J3,Zd as J5,af as K5,cf as Z3,ef as K0,if as K4,nf as K2,of as Z1,qd as J1,rf as K3,tf as K1,uf as Z5}from"./shared-frame-DeSSgTpM.js";import{Mr as p,a_ as m,wg as h}from"./shared-0-D23kmOCB.js";import{Ol as g,_i as _,ml as v,pl as y,yl as b}from"./shared-25-DapkFWlH.js";import{es as x,rh as S,sd as C,wm as w}from"./shared-73-DfCPGdCT.js";import{Hp as T,Ki as E,Qa as D,Up as O,Wp as k,Yl as A,_4o as j,ea as M,ig as N,mn as P,ps as F,uu as I,vw as L,ys as ee,za as R}from"./shared-141-K5japEQk.js";import{Mf as te,dp as z,pp as ne,rm as re}from"./shared-206-DmJmFrn0.js";import{Bx as ie,Jw as B,Px as ae,Vx as oe,gv as V,jC as H,zx as se}from"./shared-107-D8fgcL1q.js";import{p as ce,s as le}from"./vendor-query-DjWagZkY.js";import{jt as ue}from"./vendor-all-1-BocQA2O8.js";import{gn as de,mn as fe}from"./shared-37-BxNtUyNK.js";import{Eu as U,Fo as pe,Lu as me,Mu as he,_u as ge,go as _e,yu as ve}from"./shared-238-CGzDEQRA.js";import{mf as ye}from"./shared-4-Dbvi5M5d.js";import{Dd as W}from"./shared-29-GrkLL17E.js";import{r as G}from"./shared-9-BGHwpAny.js";import{xt as K}from"./frame-shell-header-C0GSlRrX.js";import{_EA as be,_OK as xe,_ot as Se,n as Ce,r as we,s as q,t as Te}from"./c363f4872-DekPuKQ7.js";import{c as Ee,l as De,s as Oe}from"./ca350eb85-Dv_3iYPq.js";import{_ as ke,f as Ae,g as je,o as J,v as Me}from"./c3517073d-B0XefeGk.js";import{_Qb as Ne}from"./cc3b18185-YBqUke7a.js";import{_gv as Pe}from"./cd9d212c0-BbbLmpCu.js";function Fe(){return F(B(j))}function Ie(e){let t=xe(e);return t!==""&&!be(t)?t:""}function Le(e){return Se.find(t=>t===e)??"other"}function Re(e){return e!==""&&q(e)===e}function ze(e,t){return Re(e)?K(e,t):""}var Be={partnerList:"docs",format:"md",rebuild:{variant:"doc_rebuild_in_partner",compose:ze},pageRowsFirst:!0,readsWithDocsTools:!0};function Ve(e){return{rules:e,routes:{importToolName:e.importToolName,mayRebuild:e.rebuild!==void 0,list:e.partnerList,format:e.format}}}var He=Ve(Be);function Ue(e,t){let $=J9(3),n=e.typeSlug??e.namedTypeSlug,r=t&&n!==void 0?Pe(n,!0,void 0):void 0,i=r==="other",a=fe(),o=de(),s;bb0:{if(r==="pages"){s=He;break bb0}if(!i){s=void 0;break bb0}if(a===null){s=o?"withheld":void 0;break bb0}let e;if(J2($,0,a,n)){let t=a.sendToTypeRules(n);e=t===void 0?void 0:Ve(t),K2($,0,a,n,e)}else e=$[2];s=e}return s}function We(e){let $=J9(2),{state:t}=e;return J1($,0,t)?K1($,0,t,t==="withheld"?s(G,{}):null):$[1]}var Ge={"eb9240f2-e1c1-43c1-828f-0fda40c22e4c":"canva"};function Ke(e,t=Date.now()){if(e===void 0||Number.isNaN(e.getTime()))return 10;let n=Math.round((e.getTime()-t)/6e4);return n>=1&&n<=10?n:10}function qe(e){try{let t=new URL(e),n=[...t.searchParams.keys()];return t.href!==e||t.hash!==""||n.length!==1||n[0]!=="t"?e:(t.search="",t.href)}catch{return e}}function Je(e){let{source:t,...n}=e,r=e.destination.handoffTokenParam!==void 0&&e.token!==void 0,i=t===void 0?"":Ye(n,{url:r?qe(t.url):t.url,...r&&t.token!==void 0&&{token:t.token}});return i===""?Ye(n,void 0):i}function Ye({destination:e,url:t,expiresAt:n,token:r,importTool:i,statusTool:a},o){let s=e.handoffTokenParam,c=s!==void 0&&r!==void 0;if(i!==void 0)return Te({destination:q(e.name),url:c?qe(t):t,minutes:Ke(n),format:"other",importTool:i,...a===void 0?{}:{statusTool:a},...c?{token:{param:s,value:r}}:{}});let l=Le(e.format);return Te({destination:q(e.name),url:c?qe(t):t,minutes:Ke(n),format:l,hint:l==="mp4"?void 0:e.hint??Ge[e.id],...c?{token:{param:s,value:r}}:{},...o===void 0?{}:{source:o}})}function Xe(){return Je}var Ze=w(()=>0);function Qe(){Ze.set(Date.now())}function $e(){return Date.now()-Ze.read()<9e5}var et=/[\p{Cc}\u2028\u2029]/gu;function Y(e){return[...e.replace(et," ").trim()].slice(0,200).join("").trim()}function tt(e){return{sendTo:Y(e.sendTo),destinations:Y(e.destinations),connectMore:Y(e.connectMore),more:Y(e.more),connect:Y(e.connect),newTab:Y(e.newTab)}}function nt(e,t){return t?V(e):e}function rt({offered:e,destinations:t,busy:n,desktop:r,copy:i,unavailable:a,pageFirst:o=!1,appsOff:s=!1}){if(!i||a===void 0&&(!t?.length||!e))return null;let c=[];for(let e of t??[]){let t=J(e.label??e.name);if(t==="")continue;let n={id:e.id,name:t,...e.iconUrl===void 0?{}:{icon:e.iconUrl}};e.status===void 0?e.connected?c.push({...n,state:"connected"}):a?.listUnconnected!=="listed"&&e.connectUrl!==void 0?c.push({...n,state:"connect",href:nt(e.connectUrl,r)}):a!==void 0&&c.push({...n,state:"listed"}):c.push({...n,state:"listed",note:Y(i.statusNotes[e.status])})}let l={...o?{pageFirst:!0}:{},...s?{appsOff:!0}:{}};return a===void 0?{mode:"live",destinations:c,copy:tt(i),...n?{busy:!0}:{},...l}:{mode:"unavailable",destinations:c,copy:tt(i),unavailable:it(a),...l}}function it(e){return{reason:st.test(e.reason)?e.reason:"unavailable",...e.note===void 0?{}:{note:Y(e.note)},...e.action===void 0?{}:{action:{kind:e.action.kind,label:Y(e.action.label)}}}}function at(e,t,n){let r=e?.contentWindow;if(!r)return!1;let i={__frame_chrome:!0,cmd:"send_to",uuid:t,offer:n};return r.postMessage(i,location.origin),!0}var ot=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,st=/^[A-Za-z0-9_-]{1,64}$/,ct=new Set(["send","connect","browse","retry"]);function lt(e,t){if(typeof e!="object"||!e)return null;let n=e;return n.__frame_chrome_state!==!0||n.state!=="send_to"||typeof n.uuid!="string"||!ot.test(n.uuid)||n.uuid.toLowerCase()!==t.toLowerCase()||typeof n.action!="string"||!ct.has(n.action)?null:n.action==="send"||n.action==="connect"?typeof n.destination=="string"&&st.test(n.destination)?{action:n.action,destination:n.destination}:null:n.destination===void 0?{action:n.action}:null}function ut(e,t){return e===t||JSON.stringify(e)===JSON.stringify(t)}function dt(e,t){let $=J9(24),{uuid:n,offer:r,resetKey:i,onRequest:a}=t,o=f()??window,s=c(a),d,p;J1($,0,a)?(d=()=>{s.current=a},p=[a],K2($,0,a,d,p)):(d=$[1],p=$[2]),l(d,p);let m=S(r,ut),h=J1($,3,i)?K1($,3,i,{key:i,sent:!1}):$[4],g=c(h),_,v;J5($,5,o,e,i,m,n)?(_=()=>{if(!n)return;g.current.key!==i&&(g.current={key:i,sent:!1});let t=()=>{m===null&&!g.current.sent||at(e.current,n,m)&&(g.current.sent=m!==null||g.current.sent)};t();let r=n=>{let r=e.current?.contentWindow,i=n.data;r&&n.source===r&&n.origin===location.origin&&typeof i=="object"&&i&&i.__frame_chrome_state===!0&&(i.state==="comment_mode"||i.state==="version")&&t()};return o.addEventListener("message",r),()=>o.removeEventListener("message",r)},v=[e,n,m,i,o],K5($,5,o,e,i,m,n,_,v)):(_=$[10],v=$[11]),l(_,v);let y=J1($,12,n)?K1($,12,n,e=>{n&&g.current.sent&&at(e.current,n,null)}):$[13],b=u(y),x=J2($,14,e,b)?K2($,14,e,b,()=>()=>{b(e)}):$[16],C=J1($,17,e)?K1($,17,e,[e]):$[18];l(x,C);let w,T;J3($,19,o,e,n)?(T=()=>{if(!n)return;let t=t=>{let r=e.current?.contentWindow;if(!r||t.source!==r||t.origin!==location.origin)return;let i=lt(t.data,n);i!==null&&(i.action==="connect"&&Qe(),s.current(i))};return o.addEventListener("message",t),()=>o.removeEventListener("message",t)},w=[e,n,o],K4($,19,o,e,n,w,T)):(w=$[22],T=$[23]),l(T,w)}var ft="#faf9f5",pt=`<svg viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><rect width="1920" height="1080" fill="${ft}"/></svg>`,mt=/<script\s+type\s*=\s*["']?__bundler\/manifest["'\s>]/i,ht=/<script\s+type\s*=\s*["']?__bundler\/template["'\s>]/i,gt=/data:([\w.+-]+\/[\w.+-]+);base64,([A-Za-z0-9+/]+={0,2})/g,_t=/^(font[/]|application[/](x-)?font-|application[/]vnd\.ms-fontobject)/i;function vt(e){let t=e.length%4==0?e.replace(/={1,2}$/,""):e;return t.length%4!=1&&!t.includes("=")}function yt(e,t){let n={};return{template:e.replace(gt,(e,r,i)=>{if(!t.test(r)||i.length<1024||!vt(i))return e;let a=crypto.randomUUID();return n[a]={mime:r,compressed:!1,data:i},a}),manifest:n}}function bt(e){return e.replace(/</g,"\\u003c")}function xt(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function St(e){return mt.test(e)&&ht.test(e)}function Ct(e,{title:t,keepInlineFonts:n=!1}){let{template:r,manifest:i}=n?{template:e,manifest:{}}:yt(e,_t);return`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${xt(t)}</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: ${ft}; display: flex; align-items: center; justify-content: center; min-height: 100vh; font-family: -apple-system, BlinkMacSystemFont, sans-serif; }
    #__bundler_loading { position: fixed; bottom: 20px; right: 20px; font: 13px/1.4 -apple-system, BlinkMacSystemFont, sans-serif; color: #666; background: #fff; padding: 8px 14px; border-radius: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.12); z-index: 10000; }
    #__bundler_thumbnail { position: fixed; inset: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background: ${ft}; z-index: 9999; }
    #__bundler_thumbnail svg { width: 100%; height: 100%; object-fit: contain; }
    #__bundler_placeholder { color: #999; font-size: 14px; }
  </style>
  <noscript>
    <style>#__bundler_loading { display: none; }</style>
    <div style="position:fixed;bottom:12px;left:12px;font:13px/1.4 -apple-system,BlinkMacSystemFont,sans-serif;color:#999;background:rgba(255,255,255,0.9);padding:6px 12px;border-radius:6px;box-shadow:0 1px 4px rgba(0,0,0,0.08);z-index:10000;">
      This page requires JavaScript to display.
    </div>
  </noscript>
</head>
<body>
  <div id="__bundler_thumbnail">${pt}</div>
  <div id="__bundler_loading">Unpacking...</div>

  <script>
    
document.addEventListener('DOMContentLoaded', async function() {
  const loading = document.getElementById('__bundler_loading');
  function setStatus(msg) { if (loading) loading.textContent = msg; }

  const FONT_MIME = /^(font[/]|application[/](x-)?font-|application[/]vnd\\.ms-fontobject)/i;
  const MIME_TOKEN = /^[\\w.+-]+[/][\\w.+-]+\$/;
  function toBase64(bytes) {
    let bin = '';
    for (let i = 0; i < bytes.length; i += 0x8000) {
      bin += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
    }
    return btoa(bin);
  }

  // Error sink persists across replaceWith since it's on window, not the DOM.
  window.addEventListener('error', function(e) {
    // Failed resource loads (CSP-blocked links, scripts, images) fire plain
    // events at the element \u2014 warn only; real JS errors carry message/error.
    if (!e.message && !e.error && e.target && e.target !== window) {
      console.warn('[bundle] resource failed to load:',
        e.target.tagName, String(e.target.src || e.target.href || ''));
      return;
    }
    var p = document.body || document.documentElement;
    var d = document.getElementById('__bundler_err') || p.appendChild(document.createElement('div'));
    d.id = '__bundler_err';
    d.style.cssText = 'position:fixed;bottom:12px;left:12px;right:12px;font:12px/1.4 ui-monospace,monospace;background:#2a1215;color:#ff8a80;padding:10px 14px;border-radius:8px;border:1px solid #5c2b2e;z-index:99999;white-space:pre-wrap;max-height:40vh;overflow:auto';
    d.textContent = (d.textContent ? d.textContent + String.fromCharCode(10) : '') +
      '[bundle] ' + (e.message || e.type) +
      (e.filename ? ' (' + e.filename.slice(0, 60) + ':' + e.lineno + ')' : '');
  }, true);

  try {
    const manifestEl = document.querySelector('script[type="__bundler/manifest"]');
    const templateEl = document.querySelector('script[type="__bundler/template"]');
    if (!manifestEl || !templateEl) {
      setStatus('Error: missing bundle data');
      console.error('[bundler] Missing script tags \u2014 manifestEl:', !!manifestEl, 'templateEl:', !!templateEl);
      return;
    }

    const manifest = JSON.parse(manifestEl.textContent);
    let template = JSON.parse(templateEl.textContent);

    // Nested page bundles (iframe targets). Each ships ONCE, in the ROOT
    // document's manifest; frame srcs carry an about:blank#<uuid> marker
    // instead of a substitutable uuid. Every document mints the blobs for
    // its OWN frames \u2014 from local text at the root, or text obtained from
    // its DIRECT parent over the relay protocol below \u2014 so each frame
    // navigation stays same-origin with its initiator and a deduped page
    // loads at any depth on any host, including a file:// download's
    // opaque origins (where a blob minted by one document cannot be
    // navigated to by another).
    const pageOrderEl = document.querySelector('script[type="__bundler/page_order"]');
    const pageOrder = pageOrderEl ? JSON.parse(pageOrderEl.textContent) : [];
    const pageSet = new Set(pageOrder);
    const pageTexts = {};

    // \u2500\u2500 Nested-page text protocol (parent-chain relay) \u2500\u2500
    // Page bundles ship once, in the ROOT document's manifest. Every
    // document mints the blobs for its OWN frames, obtaining page text
    // through a strict parent-chain relay: a document only ever SENDS to
    // its direct parent (which, for every document the publisher's own
    // runtime minted, is another publisher document) and only ACCEPTS
    // text from that direct parent; requests from below are honored only
    // for the document's own child frames, and the ROOT never sends
    // upward at all. That last rule is load-bearing: the artifact host's
    // frame-ancestors allows claude.ai (and friends) to frame an
    // artifact, so window.top can be a FOREIGN document \u2014 a top-addressed
    // protocol would hand page uuids to that ancestor and accept forged
    // "page text" from it, minting attacker HTML as an artifact-origin
    // blob document. The chain never touches the ancestor: requests stop
    // at the root, replies are origin-addressed per hop (never '*' when
    // an origin exists), and both directions are origin-gated (on https
    // a foreign sender's origin can never equal this document's; in
    // opaque contexts \u2014 file:// \u2014 everything serializes as 'null', where
    // an embedded EXTERNAL frame still fails the gate by carrying its
    // own real origin, and a sandboxed child of such a frame is excluded
    // by the own-child-frames check plus uuid unguessability). Shape is
    // deny-by-default: one request form, one reply form, no error
    // replies.
    // window.origin is the SERIALIZED SECURITY origin ('null' in opaque
    // contexts such as a sandboxed preview iframe) \u2014 location.origin is
    // computed from the URL and stays 'https://\u2026' even when the document
    // is sandboxed, which would misgate every opaque chain.
    const OWN_TARGET = /^https?:[/][/]/.test(window.origin || '')
      ? window.origin
      : '*';
    function trustedOrigin(e) {
      if (e.origin === window.origin) return true; // https chains; opaque==opaque
      // file:// trees: Chrome serializes the file document's origin as
      // 'file://' while the blob: documents it mints serialize as 'null',
      // so the two legitimate shapes can never string-match \u2014 accept the
      // pair in both directions. https origins never serialize as either,
      // and sender identity (own child frame / direct parent) is checked
      // separately.
      return (
        (e.origin === 'null' &&
          (window.origin === 'file://' ||
            window.location.protocol === 'file:')) ||
        (/^file:/.test(e.origin) && window.origin === 'null')
      );
    }
    // Non-empty only in the root document (nested bundles ship an empty
    // island), so it doubles as the root marker: the root answers from
    // local text and treats a miss as authoritative \u2014 never relaying to
    // its (possibly foreign) parent.
    const isPageRoot = pageOrder.length > 0;
    const blobUrls = {};
    const resourceBlobs = {};
    const UUID_SHAPE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\$/;
    const pendingFrames = {}; // uuid -> [{el, frag}] awaiting text for own frames
    const pendingRelays = {}; // uuid -> [childWindow] awaiting text to pass down
    function mountPage(el, frag, text) {
      const pageBlob = new Blob([text], { type: 'text/html' });
      const u = URL.createObjectURL(pageBlob);
      resourceBlobs[u] = pageBlob;
      el.src = u + frag;
    }
    function deliverPage(uuid, text) {
      const frames = pendingFrames[uuid];
      delete pendingFrames[uuid];
      if (frames) for (const f of frames) mountPage(f.el, f.frag, text);
      const relays = pendingRelays[uuid];
      delete pendingRelays[uuid];
      if (relays) {
        for (const cw of relays) {
          try { cw.postMessage({ __bundler_page: uuid, __bundler_text: text }, OWN_TARGET); } catch (err) { /* gone */ }
        }
      }
    }
    function ownFrameWindows() {
      const out = [];
      for (const f of Array.from(document.querySelectorAll('iframe'))) {
        try { if (f.contentWindow) out.push(f.contentWindow); } catch (err) { /* detached */ }
      }
      return out;
    }
    window.addEventListener('message', function (e) {
      const d = e.data;
      if (!d || typeof d !== 'object' || !e.source) return;
      // Origin gate first; the structural checks below (own-child-frames
      // for requests, direct-parent + solicited-uuid for replies, the
      // root's never-relay rule) are what hold in fully opaque chains
      // where origin strings can't discriminate \u2014 a sandboxed root's
      // FOREIGN wrapper still fails all three even though both serialize
      // as real-vs-'null' rather than matching.
      if (!trustedOrigin(e)) return;
      if (typeof d.__bundler_need === 'string' && UUID_SHAPE.test(d.__bundler_need)) {
        // Requests are honored only for this document's own child frames.
        if (ownFrameWindows().indexOf(e.source) < 0) return;
        const uuid = d.__bundler_need;
        const text = pageTexts[uuid];
        if (typeof text === 'string') {
          try { e.source.postMessage({ __bundler_page: uuid, __bundler_text: text }, OWN_TARGET); } catch (err) { /* gone */ }
          return;
        }
        if (isPageRoot || window.parent === window) return; // authoritative miss
        const waiting = pendingRelays[uuid];
        if (waiting) {
          if (waiting.indexOf(e.source) < 0) waiting.push(e.source);
          return;
        }
        // Never-answered uuids would otherwise accumulate forever under a
        // request spray; past the cap (far above any real page count) new
        // relays are dropped rather than remembered.
        if (Object.keys(pendingRelays).length >= 128) return;
        pendingRelays[uuid] = [e.source];
        window.parent.postMessage({ __bundler_need: uuid }, OWN_TARGET);
      } else if (
        typeof d.__bundler_page === 'string' &&
        UUID_SHAPE.test(d.__bundler_page) &&
        typeof d.__bundler_text === 'string'
      ) {
        // The shape test is load-bearing beyond tidiness: the solicited
        // check below uses the in operator, which matches prototype keys
        // ('__proto__', 'constructor') \u2014 an unshaped key would reach
        // deliverPage and throw, painting the error banner.
        // Text is accepted only from the direct parent \u2014 the document
        // that minted this one.
        if (e.source !== window.parent || window.parent === window) return;
        if (!(d.__bundler_page in pendingFrames) && !(d.__bundler_page in pendingRelays)) return;
        deliverPage(d.__bundler_page, d.__bundler_text);
      }
    });

    const uuids = Object.keys(manifest);
    setStatus('Unpacking ' + uuids.length + ' assets...');

    await Promise.all(uuids.map(async (uuid) => {
      const entry = manifest[uuid];
      try {
        const binaryStr = atob(entry.data);
        const bytes = new Uint8Array(binaryStr.length);
        for (let i = 0; i < binaryStr.length; i++) bytes[i] = binaryStr.charCodeAt(i);

        let finalBytes = bytes;
        if (entry.compressed) {
          if (typeof DecompressionStream !== 'undefined') {
            const ds = new DecompressionStream('gzip');
            const writer = ds.writable.getWriter();
            const reader = ds.readable.getReader();
            writer.write(bytes);
            writer.close();
            const chunks = [];
            let totalLen = 0;
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              chunks.push(value);
              totalLen += value.length;
            }
            finalBytes = new Uint8Array(totalLen);
            let offset = 0;
            for (const chunk of chunks) { finalBytes.set(chunk, offset); offset += chunk.length; }
          } else {
            console.warn('DecompressionStream not available, asset ' + uuid + ' may not render');
          }
        }

        if (pageSet.has(uuid)) {
          pageTexts[uuid] = new TextDecoder().decode(finalBytes);
          return;
        }
        if (FONT_MIME.test(entry.mime) && MIME_TOKEN.test(entry.mime)) {
          // Strict artifact hosts allow font-src data: but not blob:.
          blobUrls[uuid] = 'data:' + entry.mime + ';base64,' +
            (entry.compressed ? toBase64(finalBytes) : entry.data);
        } else {
          const blob = new Blob([finalBytes], { type: entry.mime });
          blobUrls[uuid] = URL.createObjectURL(blob);
          resourceBlobs[blobUrls[uuid]] = blob;
        }
      } catch (err) {
        console.error('Failed to decode asset ' + uuid + ':', err);
        const blob = new Blob([], { type: entry.mime });
        blobUrls[uuid] = URL.createObjectURL(blob);
        resourceBlobs[blobUrls[uuid]] = blob;
      }
    }));

    const extResEl = document.querySelector('script[type="__bundler/ext_resources"]');
    const extResources = extResEl ? JSON.parse(extResEl.textContent) : [];
    const resourceMap = {};
    for (const entry of extResources) {
      if (blobUrls[entry.uuid]) resourceMap[entry.id] = blobUrls[entry.uuid];
    }

    // Artifact-host CSP (connect-src 'self') refuses fetch() of blob: URLs \u2014
    // consumers read these Blobs directly. Survives the swap like the error sink.
    window.__resourceBlobs = resourceBlobs;

    setStatus('Rendering...');
    // Page uuids have no blob here \u2014 they ride inside about:blank#<uuid>
    // frame markers the pass below resolves after the swap.
    for (const uuid of uuids) {
      if (pageSet.has(uuid)) continue;
      template = template.split(uuid).join(blobUrls[uuid]);
    }

    // Strip integrity + crossorigin \u2014 blob URLs from a file:// document inherit
    // a null origin, so crossorigin forces a CORS fetch that SRI then rejects.
    // The manifest bytes are ours; SRI protects against CDN compromise, not this.
    // appifacts: only on tags now pointing at OUR blob: URLs. A reference the
    // bundler left live-fetched (an absolute x-import, a runtime dependency it
    // could not embed, an authored external script) keeps the pin it was
    // written with: that fetch is exactly what SRI protects. (A crossorigin
    // on a parent whose child carries the blob \u2014 <video crossorigin><source>
    // \u2014 is left alone too; the attribute is then the author's to drop.)
    template = template.replace(/<[a-z][^>]*>/gi, (tag) => /\\s(?:src|href|srcset|poster|data|xlink:href)="blob:/i.test(tag) ? tag.replace(/\\s+integrity="[^"]*"/gi, '').replace(/\\s+crossorigin="[^"]*"/gi, '') : tag);

    const resourceScript = '<script>window.__resources = ' +
      JSON.stringify(resourceMap).replace(/<\\//g, '<\\\\/') +
      ';</' + 'script>';
    // Inject after <head> so the DOCTYPE stays first; prepending the script
    // would push the parser into quirks mode. DOMParser always emits a <head>
    // (synthesizing one if the source HTML omitted it) but may carry
    // attributes through, so match the full opening tag. slice() rather than
    // replace() keeps us clear of \$-pattern substitution in resourceScript.
    const headOpen = template.match(/<head[^>]*>/i);
    if (headOpen) {
      const i = headOpen.index + headOpen[0].length;
      template = template.slice(0, i) + resourceScript + template.slice(i);
    }

    // Parse the template and swap the root element. Scripts inserted via
    // DOMParser/replaceWith are inert per spec \u2014 re-create each with
    // createElement so they execute, awaiting onload for src scripts to
    // preserve ordering (React before ReactDOM before Babel before text/babel).
    const doc = new DOMParser().parseFromString(template, 'text/html');
    document.documentElement.replaceWith(doc.documentElement);

    // Resolve page-frame markers: mint this document's own blob for each
    // framed page \u2014 from local text when this is the root, otherwise by
    // asking the direct parent over the relay protocol above. An
    // unanswered request leaves the frame on about:blank, the same
    // degraded state as a refused embed.
    {
      const MARKER = /^about:blank#([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})(#.*)?\$/;
      const needed = [];
      for (const el of Array.from(document.querySelectorAll('iframe'))) {
        const m = MARKER.exec(el.getAttribute('src') || '');
        if (!m) continue;
        const text = pageTexts[m[1]];
        if (typeof text === 'string') {
          mountPage(el, m[2] || '', text);
        } else if (window.parent !== window && !isPageRoot) {
          const had = pendingFrames[m[1]];
          (pendingFrames[m[1]] = had || []).push({ el: el, frag: m[2] || '' });
          if (!had) needed.push(m[1]);
        }
      }
      for (const uuid of needed) {
        window.parent.postMessage({ __bundler_need: uuid }, OWN_TARGET);
      }
    }

    const dead = Array.from(document.scripts);
    for (const old of dead) {
      const s = document.createElement('script');
      for (const a of old.attributes) s.setAttribute(a.name, a.value);
      s.textContent = old.textContent;
      // text/babel scripts with a src: read and inline. transformScriptTags
      // does XHR against the src, but blob:null/ from a file:// origin is
      // silently dropped. Inlining makes it a plain inline babel script,
      // which transformScriptTags handles unconditionally.
      if ((s.type === 'text/babel' || s.type === 'text/jsx') && s.src) {
        const pre = resourceBlobs[s.src.split('#')[0]];
        s.textContent = pre ? await pre.text() : await (await fetch(s.src)).text();
        s.removeAttribute('src');
      }
      const p = s.src ? new Promise(function(r) { s.onload = s.onerror = r; }) : null;
      old.replaceWith(s);
      if (p) await p;
    }
    // Babel standalone auto-transforms type=text/babel on DOMContentLoaded,
    // which fired before we swapped the document. Trigger manually if present.
    if (window.Babel && typeof window.Babel.transformScriptTags === 'function') {
      window.Babel.transformScriptTags();
    }
  } catch (err) {
    setStatus('Error unpacking: ' + err.message);
    console.error('Bundle unpack error:', err);
  }
});

  <\/script>

  <script type="__bundler/manifest">
${bt(JSON.stringify(i))}
  <\/script>

  <script type="__bundler/ext_resources">
[]
  <\/script>

  <script type="__bundler/page_order">
[]
  <\/script>

  <script type="__bundler/template">
${bt(JSON.stringify(r))}
  <\/script>
</body>
</html>`}function wt(e,t){let n=new TextDecoder().decode(e);if(St(n))return e;let r=new TextEncoder().encode(Ct(n,t));return r.byteOffset===0&&r.byteLength===r.buffer.byteLength?r.buffer:r.slice().buffer}var Tt=/[\p{Cc}\p{Cf}\u2028\u2029]/gu;function Et(e){return typeof e=="string"?[...e.replace(Tt," ").replace(/\s+/g," ").trim()].slice(0,80).join("").trim():""}function Dt(e){if(!(typeof e!="string"||e.length>2048))try{let t=new URL(e);return t.protocol==="https:"?t.href:void 0}catch{return}}function Ot(e){let t=Dt(e);if(t===void 0)return;let n=new URL(t).hostname,r=typeof window>"u"?null:window.location.hostname;if(h(n,r)===null&&n!==r)return t}function kt(e,t,n){let r=I(e.iconUrl??t,e.url,e.verifiedTier);if(r.iconType==="external")return r.iconSrc;if(!(!n||r.iconSrc===void 0||At(r.iconSrc)))return ae(r.iconSrc,32)}function At(e){try{let t=new URL(e).hostname;return h(t,null)!==null||t==="anthropic.com"||t.endsWith(".anthropic.com")}catch{return!0}}var jt=/^\/(?![/\\])/;function Mt(e){if(!(typeof e!="string"||e.length>2048||!jt.test(e)))try{let t=new URL(e,location.origin);if(t.origin!==location.origin)return;let n=t.pathname+t.search+t.hash;return jt.test(n)||n==="/"?n:void 0}catch{return}}function Nt(e){let t=Mt(e);return t!==void 0&&Pt.test(t)?t:void 0}var Pt=/^\/directory\/[A-Za-z0-9][A-Za-z0-9._~-]*(?:[?#]|$)/,Ft=/^[A-Za-z0-9][A-Za-z0-9._~-]*$/,It=new Set(["22854937-9510-4b57-9230-62c820102d8f"]),Lt=/[\p{L}\p{N}]+/gu;function Rt(e){Lt.lastIndex=0;let t=0;for(;Lt.exec(e)!==null;)t++;return t}var zt=r(()=>i(n())),Bt=r(()=>t([a(),e({id:a()}).passthrough()])),Vt=new Map([["html",new Set(["import-claude-design-from-url","import-design-from-url"])],["mp4",new Set(["import-claude-motion-from-url"])]]),Ht=new Map([["import-design-from-url","canva"]]),Ut=new Map([["html","text/html"],["json","application/json"],["mp4","video/mp4"]]),Wt=["html"],Gt=new Map,Kt=new Map,qt=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,Jt=[],Yt=r(()=>i(a()));function Xt(e){if(e===void 0)return;let t=new Set;for(let n of Array.isArray(e)?e:[])typeof n=="string"&&t.add(n.trim().toLowerCase());return[...Ut.keys()].filter(e=>t.has(e))}var Zt=["licensed","none"],Qt="json";function $t(e){if(typeof e!="object"||!e||!("fonts"in e))return;let t=new Set;for(let n of Array.isArray(e.fonts)?e.fonts:[])typeof n=="string"&&t.add(n.trim().toLowerCase());let n=Zt.filter(e=>t.has(e));if(n.length===0)return;let r="edition"in e?e.edition:1;return typeof r=="number"&&Number.isSafeInteger(r)&&r>=1?{format:Qt,fonts:n,edition:r}:void 0}var en=["coming_soon"];function tn(e){let t=Et(e);return t!==""&&q(t)===t&&J(t)===t?t:void 0}function nn(e){let t=Bt.safeParse(e);if(!t.success)return;if(typeof t.data=="string")return{id:t.data.trim().toLowerCase(),show:!1,accepts:void 0,tokenParam:void 0,source:void 0,label:void 0,status:void 0};let n=t.data.status,r=typeof n=="string"?n.trim().toLowerCase():n,i=t.data.handoff_token_param;return{id:t.data.id.trim().toLowerCase(),show:t.data.show===!0,accepts:Xt(t.data.accepts),tokenParam:Ce(i)?i:void 0,source:$t(t.data.code_file),label:tn(t.data.label),status:r==null||r===""?void 0:en.find(e=>e===r)??"unknown"}}function rn(e,t=[],n=Gt){let r=zt.safeParse(e);if(!r.success)return[];let i=new Set(It),a=new Set;for(let e of t){let t=nn(e);t!==void 0&&(t.show&&t.status!=="unknown"?a:i).add(t.id)}for(let e of a)i.delete(e);let o=[],s=new Set;for(let e of r.data){let t=nn(e);if(t===void 0||s.has(t.id))continue;let{id:r}=t;if(s.add(r),t.status!=="unknown"&&qt.test(r)&&!i.has(r)&&n.get(r)?.length!==0&&o.push(r),o.length>=64)break}return o}var an=new Map,on=new Map,sn=new Map,cn=new Map;function X(e,t){let n=new Map,r=zt.safeParse(e);if(!r.success)return n;let i=new Set;for(let e of r.data){let r=nn(e);if(r===void 0||i.has(r.id))continue;i.add(r.id);let a=t(r);a!==void 0&&n.set(r.id,a)}return n}function ln(e){return X(e,e=>e.tokenParam)}function un(e){return X(e,e=>e.source)}function dn(e){return X(e,e=>e.label)}function fn(e){return X(e,({status:e})=>e==="unknown"?void 0:e)}function pn(e){return X(e,e=>e.accepts)}var mn={type:"__gb__2111295379",second_gated_type:"__gb__3505610607",docs:"__gb__462357012",tidal:"__gb__3627912425"};function hn(e,t){let n=M(e.uuid,t)?.uuid??pe(t,[e]).get(e.uuid)?.[0],r=n===void 0?void 0:t.remoteServers[n];if(n===void 0||r===void 0||k(r))return;let i=t.remoteConnectionStates[n];return{connection:{isConnected:i?.isConnected??!1,connectionState:i?.connectionState,authStatus:i?.authStatus,connectionError:i?.connectionError},tools:[...t.remoteTools[n]??[],...t.remoteAppOnlyTools[n]??[]],toolsListed:n in t.remoteTools,iconUrl:t.remoteIconUrls[n]}}function gn(e,t,n,r,i,a=an,o=Gt,s,c=on,l=sn,u=cn){let d=e=>s===void 0?Vt.get(e):new Set(s.importToolName===void 0?[]:[s.importToolName]),f=s?.list==="shared",p=[];for(let m of e){let e=t.get(m);if(e===void 0)continue;let h=s===void 0?(o.get(m)??Wt).filter(e=>e!==Qt):f?(o.get(m)??[]).filter(e=>e===s.format):o.get(m)??[s.format],g=Et(e.name);if(!g||q(g)===""||Ie(g)===""&&J(g)!==g)continue;let _=hn(e,n),v=s?.importToolName===void 0?void 0:_?.tools.find(e=>e.name===s.importToolName),y=f?v===void 0?void 0:_n(v):a.get(m),b=s===void 0?c.get(m):void 0,x=l.get(m),S=u.get(m),C={...x===void 0?{}:{label:x},...S===void 0?{}:{status:S},...y===void 0?{}:{handoffTokenParam:y},...b===void 0?{}:{source:b}},w=S===void 0&&_!==void 0&&r&&A(_.connection),E=Ot(kt(e,_?.iconUrl,i)),D=h.filter(e=>_?.tools.some(t=>d(e)?.has(t.name)===!0&&!T(t))!==!0);if(D.length!==0){if(_!==void 0&&w){let e;if(s!==void 0&&v===void 0){if(!s.mayRebuild||!_.toolsListed)continue;e="rebuild"}p.push({id:m,name:g,iconUrl:E,accepts:D,connected:!0,connectUrl:void 0,...C,...e===void 0?{}:{route:e}});continue}p.push({id:m,name:g,iconUrl:E,accepts:D,connected:!1,connectUrl:S===void 0?Nt(`/directory/${e.slug!==void 0&&Ft.test(e.slug)?e.slug:m}`):void 0,...C})}}return p}function _n(e){let t=e.inputSchema,n=typeof t=="object"&&t&&"properties"in t?t.properties:void 0;if(!(typeof n!="object"||!n))return Object.hasOwn(n,"download_token")?"download_token":void 0}function vn(e,t,n,r){if(!n)return[];let i=r===void 0?Vt:r.importToolName===void 0?new Map:new Map([[r.format,new Set([r.importToolName])]]),a=[...e.values()],o=new Set([...pe(t,a).values()].flat()),s=e=>Ie(e).normalize("NFKD").replace(/\p{M}/gu,"").toLowerCase(),c=new Set(a.map(e=>s(Et(e.name)))),l=[],u=Object.entries(t.remoteServers).sort(([,e],[,t])=>(e?.name??"").localeCompare(t?.name??""));for(let[e,n]of u){if(l.length>=64)break;let a=t.remoteConnectionStates[e],u=Et(n.name),d=Ie(u),f=s(u);if(n.mcp_directory_server_uuid!==null&&a?.isDirectoryServer!==!1||o.has(e)||k(n)||typeof n.mcp_directory_server_uuid=="string"||a===void 0||a.isDirectoryServer===!0||typeof a.directoryEntryUuid=="string"||O({uuid:e,isDirectoryServer:a.isDirectoryServer})||!A(a)||!u||J(u)!==u||d===""||Rt(d)>5||c.has(f))continue;let p=t.remoteTools[e]??[],m=[];for(let[e,t]of i)for(let n of t){let t=p.find(e=>e.name===n&&T(e));if(t!==void 0){m.push([e,t]);break}}if(m.length===0)continue;let h=m.every(([,e])=>_n(e)!==void 0)?"download_token":void 0,g=r===void 0?m.map(([,e])=>Ht.get(e.name)).find(e=>e!==void 0):void 0;c.add(f),l.push({id:"custom-"+e.toLowerCase(),name:u,iconUrl:void 0,accepts:m.map(([e])=>e),connected:!0,connectUrl:void 0,...h===void 0?{}:{handoffTokenParam:h},...g===void 0?{}:{hint:g}})}return l}function yn(e,t,n,r,i,a){return t?[...e,...vn(n,r,i,a)].slice(0,64):[...e]}function bn(e,t){let n=(t??[]).map(e=>e.format),r=(t??[]).filter(e=>e.disabled!==!0).map(e=>e.format),i=[];for(let t of e){if(!t.connected&&t.connectUrl===void 0&&t.status===void 0)continue;let e=e=>t.accepts.includes(e),a=t.connected&&t.route!=="rebuild",o=r.find(e)??(a?void 0:n.find(e));if(o===void 0)continue;let{source:s,...c}=t,l=s!==void 0&&o==="mp4"&&r.includes(s.format);i.push({...c,format:o,...l?{source:s}:{}})}return i}function xn(e,t){let n=e.filter(e=>e.status===void 0),r=(t??[]).filter(e=>e.disabled!==!0);return r.some(e=>e.format==="webm")&&bn(n,r).length===0&&bn(n,[{format:"mp4"}]).length>0}function Sn(e,t){let $=J9(22),n=J0($,0)?K0($,0,[]):$[0],r=v(t===void 0||t==="shared"?"omelette_send_to_partner_ids":mn[t],n,zt,e),i=J0($,1)?K0($,1,[]):$[1],a=v("cai_glistening_moon",i,zt,e),o=g("__gb__1196304285",e),s,c;J2($,2,a,r)?(s=pn(r),c=rn(r,a,s),K3($,2,a,r,s,c)):(s=$[4],c=$[5]);let l=J1($,6,r)?K1($,6,r,ln(r)):$[7],u=J1($,8,r)?K1($,8,r,un(r)):$[9],d=J1($,10,r)?K1($,10,r,dn(r)):$[11],f=J1($,12,r)?K1($,12,r,fn(r)):$[13];return J5($,14,s,c,l,u,d,f,o)?K5($,14,s,c,l,u,d,f,o,{ids:c,tokenParams:l,sources:u,labels:d,statuses:f,accepts:s,testConnectors:o}):$[21]}function Cn(e){let $=J9(74),{enabled:t,orgUuid:n,exports:r,routes:i}=e,a=(J1($,0,r)?K1($,0,r,r??[]):$[1]).length>0,s=L("mcp_artifacts"),c=t&&!!n&&a,u=c&&s.isAvailable,{ids:f,tokenParams:p,sources:m,labels:h,statuses:g,accepts:_,testConnectors:v}=Sn(u,i?.list),b=y("conditional_mcp_directory_servers","visibility",Jt,Yt,u),x=J1($,2,f)?K1($,2,f,f.join(",")):$[3],S=f.length>0&&b.length>0,C=S||v,w=u&&C,T=J1($,4,b)?K1($,4,b,b.join(",")):$[5],E=J2($,6,x,T)?K2($,6,x,T,["artifact-handoff-directory",x,T]):$[8],D=J2($,9,x,b)?K2($,9,x,b,async()=>{let e=await _e({ids:x,visibility:b.join(","),verified_tier:"anthropic,partner,community"}),t=new Map;for(let n of e.servers)n.type==="remote"&&qt.test(n.uuid)&&t.set(n.uuid.toLowerCase(),n);return t}):$[11],O=u&&S,k=J0($,12)?K0($,12,{noToast:!0}):$[12],A=J3($,13,E,D,O)?K3($,13,E,D,O,{queryKey:E,queryFn:D,enabled:O,staleTime:3e5,refetchOnWindowFocus:!0,retry:1,meta:k}):$[16],j=le(A),M=Fe(),N=o(oe,se,Dn),P,I;J2($,17,N,w)?(I=()=>{w&&!N&&ie()},P=[w,N],K3($,17,N,w,P,I)):(P=$[19],I=$[20]),l(I,P);let R=ve(),te=J1($,21,u)?K1($,21,u,{enabled:u}):$[22],z=ge(te),ne=F(En),re=me(),B=ee()||u&&z&&!R&&!ne&&!re,ae=F(Tn),V=u?j.data:void 0;kn(J4($,23,V,n,w,z)?K4($,23,V,n,w,z,{live:w,orgUuid:n,listings:V,statesKnown:z}):$[27]);let H=u&&V===void 0&&!j.isError&&(j.isFetching||j.isPaused),[ce,ue]=d(!1),[de,fe]=d(H);H!==de&&(fe(H),H||ue(!1));let[U,pe]=d(0),he=J1($,28,H)?K1($,28,H,()=>{if(!H)return;let e=setTimeout(()=>ue(!0),12e3);return()=>clearTimeout(e)}):$[29],ye=J2($,30,U,H)?K2($,30,U,H,[H,U]):$[32];l(he,ye);let W=u&&V===void 0&&(j.isError||H&&ce),G=j.refetch,K=J4($,33,W,G,ae,B)?K4($,33,W,G,ae,B,()=>{B&&ae(),W&&(ue(!1),pe(wn),G())}):$[37],be;bb0:{let e=!S||V!==void 0,t=J5($,38,s.status,C,W,z,B,e,c)?I5($,38,jn({wanted:c,connectorsFeature:s.status,configured:C,storeUnknown:B,directoryFailed:W,listingsLoaded:e,statesKnown:z}),s.status,C,W,z,B,e,c):$[45];if(t!=="ready"||!C){let e=J1($,46,t)?K1($,46,t,t==="ready"?[]:void 0):$[47];be=J3($,48,K,t,e)?K3($,48,K,t,e,{status:t,destinations:e,needsMp4:!1,retry:K}):$[51];break bb0}let n=V??Kt,a,o,l;if(J5($,52,_,r,h,M,f,N,n,i,m,z,t,g,v,p)){let e=yn(gn(f,n,M,z,N,p,_,i,m,h,g),v,n,M,z,i),s=bn(e,r);a=t,o=s,l=xn(e,r),K5($,52,_,r,h,M,f,N,n,i,m,z,t,g,v,p,a,o,l)}else a=$[66],o=$[67],l=$[68];be=J4($,69,K,a,o,l)?K4($,69,K,a,o,l,{status:a,destinations:o,needsMp4:l,retry:K}):$[73]}return be}function wn(e){return e+1}function Tn(e){return e.retryRemoteBootstrap}function En(e){return e.remoteHasBootstrapped}function Dn(){return!1}function On(e,t,n){e.add(n),z(t,{serverUuid:n,onTerminal:()=>e.delete(n)})}function kn(e){let $=J9(29),{live:t,orgUuid:n,listings:r,statesKnown:i}=e,a=ce(),o=ne(),s=_().activeOrganization?.uuid,u=J3($,0,s,t,n)?K3($,0,s,t,n,t&&n!==void 0&&n===s?.toLowerCase()?s:void 0):$[3],d=b("claudeai_mcp_servers_with_connection"),f=u!==void 0&&d,p=J1($,4,f)?K1($,4,f,{enabled:f,refetchOnMount:"always",refetchOnWindowFocus:An}):$[5],m=he(u,p),h=J1($,6,r)?K1($,6,r,r===void 0?void 0:[...r.values()]):$[7],g=J0($,8)?K0($,8,new Set):$[8],v=c(g),y=J0($,9)?K0($,9,new Set):$[9],x=c(y),S=J3($,10,h,u,a)||J3($,13,m.data,i,o)?I3($,13,Z3($,10,()=>{if(u===void 0||!i||h===void 0||m.data===void 0)return;let e=E.getState(),t={};for(let e of m.data)t[e.uuid]=e;let n=pe({remoteServers:t,remoteDirectories:e.remoteDirectories,remoteConnectionStates:e.remoteConnectionStates},h),r=!1;for(let i of n.values())for(let n of i){let i=t[n],a=`${n}@${i?.state_changed_at??""}|${i?.last_connected_at??""}`,s=e.remoteConnectionStates[n],c=e.remoteServers[n]!==void 0;i?.connection_state!=="connected"||v.current.has(n)||x.current.has(a)||k(e.remoteServers[n])||o&&s?.isConnecting===!0||c&&n in e.remoteTools&&A({isConnected:s?.isConnected??!1,connectionState:s?.connectionState,authStatus:s?.authStatus,connectionError:s?.connectionError})||(x.current.add(a),o?On(v.current,u,n):c?s!==void 0&&!s.isConnected&&(s.isConnecting||te(n)?R(n):D(n)):r=!0)}r&&a.invalidateQueries({queryKey:["mcp-remote-servers",u]})},h,u,a),m.data,i,o):$[16],C=J3($,17,h,u,a)||J1($,20,m.data)||J3($,21,m.dataUpdatedAt,i,o)?I3($,21,Z1($,20,Z3($,17,[u,i,h,m.data,m.dataUpdatedAt,o,a],h,u,a),m.data),m.dataUpdatedAt,i,o):$[24];l(S,C);let w,T;J2($,25,u,a)?(T=()=>{if(u===void 0||typeof BroadcastChannel>"u")return;let e=new BroadcastChannel("mcp-auth-channel");return e.onmessage=e=>{let t=e.data;typeof t!="object"||!t||t.type!=="mcp-auth-complete"||t.step!=="success"||typeof t.serverId!="string"||!qt.test(t.serverId)||(P(t.clientAttemptId)&&N(),a.invalidateQueries({queryKey:U(u)}))},()=>e.close()},w=[u,a],K3($,25,u,a,w,T)):(w=$[27],T=$[28]),l(T,w)}function An(){return!$e()||"always"}function jn(e){return e.wanted?e.connectorsFeature==="available"?e.configured?e.storeUnknown?"store_error":e.directoryFailed?"directory_error":!e.listingsLoaded||!e.statesKnown?"loading":"ready":"ready":e.connectorsFeature==="blocked_by_org_admin"?"admin_off":"off":"off"}var Z={phase:"idle"},Mn={invalid_request:"unsupported",too_large:"too_large",rate_limited:"rate_limited",not_found:"unsupported",not_permitted:"not_permitted",org_disabled:"org_disabled",unavailable:"unavailable",internal:"network"};function Nn(e,t){return`/api/frame/handoff/${encodeURIComponent(e)}?org=${encodeURIComponent(t)}`}var Pn=new Set(["rate_limited","unavailable"]);function Fn(e,t){let n=Q(t)&&Q(t.error)?t.error:void 0,r=n&&typeof n.code=="string"?n.code:void 0;if(r!==void 0&&Mn[r]!==void 0)return Mn[r];switch(e){case 413:return"too_large";case 429:return"rate_limited";case 403:return r===void 0&&!Q(t)?"refused":"not_permitted";case 404:return n?.type==="not_found_error"&&r===void 0?"network":"unsupported";case 400:case 415:return"unsupported";case 503:return"unavailable";default:return e>=500||e===0?"network":"unsupported"}}function Q(e){return typeof e=="object"&&!!e&&!Array.isArray(e)}var In=/^\.frame\.(?:staging\.)?claudeusercontent\.com$/;function Ln(e,t){let n=Dt(e);if(n===void 0||!t)return;let r=new URL(n);if(r.username!==""||r.password!==""||r.port!=="")return;let i=t.toLowerCase();return r.hostname.startsWith(`${i}.`)&&In.test(r.hostname.slice(i.length))&&r.pathname.startsWith("/_handoff/")?r.href:void 0}function Rn(e,t){let n=new URL(t).searchParams.get("t");return n===null?we(e)?e:void 0:we(n)?n:void 0}function zn(e,t){if(!Q(e))return null;let n=Ln(e.url,t);if(n===void 0)return null;let r;if(typeof e.expires_at=="string"){let t=new Date(e.expires_at);r=Number.isNaN(t.getTime())?void 0:t}let i=Rn(e.token,n);return{url:n,expiresAt:r,...i===void 0?{}:{token:i}}}async function Bn({orgUuid:e,artifactUuid:t,handoffToken:n,filename:r,destinationId:i,bytes:a,contentType:o,surface:s}){let c=await p(Nn(t,e),{method:"POST",headers:{...x(s),"Content-Type":o,"X-Frame-Handoff-Token":n,"X-Frame-Handoff-Filename":encodeURIComponent(r),"X-Frame-Handoff-Destination":i},body:a}),l=await c.json().catch(()=>void 0);if(c.ok)return{ok:!0,body:l};let u=Q(l)&&Q(l.error)?l.error.code:void 0,d=(c.status===429||c.status===503)&&typeof u=="string"&&Pn.has(u),f={ok:!1,error:Fn(c.status,l),stale:c.status===403&&!Q(l)};if(!d)return f;let m=Number(c.headers.get("Retry-After"));return{...f,retryAfterMs:Number.isFinite(m)?Math.max(1,m)*1e3:1e3}}function Vn(e,t){return new Promise(n=>{if(t.aborted){n();return}let r=()=>{clearTimeout(i),t.removeEventListener("abort",r),n()},i=setTimeout(r,e);t.addEventListener("abort",r,{once:!0})})}async function Hn(e,t,n,r){let i=Date.now(),a=e,o=!1,s=0;for(;;){let e=await Bn(a);if(!e.ok&&e.stale&&!o){o=!0;let i=await r(a.handoffToken,t);if(t.aborted||!n())return"abandoned";if(i===void 0)return e;a={...a,handoffToken:i};continue}if(s+=1,e.ok||e.retryAfterMs===void 0||s>=3)return e;let c=e.retryAfterMs+Math.random()*1e3;if(t.aborted||!n())return"abandoned";if(Date.now()-i+c>6e4)return e;if(await Vn(c,t),t.aborted||!n())return"abandoned"}}function Un(e){return e.replace(/\.html?$/i,"")||e}var Wn=new Set(["22854937-9510-4b57-9230-62c820102d8f"]);function Gn(e,t){return e.format==="html"?wt(e.bytes,{title:Un(e.filename),keepInlineFonts:Wn.has(t)}):e.bytes}function Kn(e,t){let n;try{n=JSON.parse(new TextDecoder().decode(e))}catch{return!1}if(!Q(n))return!1;let{format:r,edition:i,fontsRule:a}=n;return r==="claude-motion-source"&&typeof i=="number"&&Number.isSafeInteger(i)&&i>=t.edition&&t.fonts.some(e=>e===a)}async function qn({rule:e,destination:t,requestExport:n,signal:r,assistant:i}){if(r.aborted)return{ok:!1,reason:"unbound"};let a=new AbortController,o=()=>a.abort(),s=!1;r.addEventListener("abort",o,{once:!0});let c=i?setTimeout(()=>{s=!0,o()},2e4):void 0,l;try{l=await n({format:e.format,destination:t,signal:a.signal,...i&&{assistant:!0}})}catch{l={ok:!1,reason:"failed"}}finally{clearTimeout(c),r.removeEventListener("abort",o)}return l.ok?l.bytes.byteLength>16777216?{ok:!1,reason:"too_large"}:Kn(l.bytes,e)?{ok:!0,filename:l.filename,bytes:l.bytes}:{ok:!1,reason:"rule_unmet"}:{ok:!1,reason:s?"timeout":l.reason}}async function Jn(e,t){try{let n=await Bn(e);return n.ok?zn(n.body,t)??"link_failed":n.error}catch{return"network"}}function Yn(e){return e<262144?"lt_256k":e<1048576?"lt_1m":e<4194304?"lt_4m":e<=16777216?"lt_16m":"gt_16m"}async function Xn({destination:e,orgUuid:t,artifactUuid:n,handoffToken:r,renewToken:i,requestExport:a,composePrompt:o,importTool:s,statusTool:c,surface:l,signal:u,assistant:d,live:f,onUploading:p,onSource:m}){let h=Ut.get(e.format);if(h===void 0)return{kind:"error",error:"unsupported"};De(h)&&Oe(t);let g=e.source===void 0?void 0:Ut.get(e.source.format),_,v=e.source!==void 0&&g!==void 0;if(e.source!==void 0&&g!==void 0){let t=await qn({rule:e.source,destination:e.label??e.name,requestExport:a,signal:u,assistant:d});if(t.ok)_=t;else if(m(t.reason),t.reason==="unbound")return{kind:"abandoned"};if(await Vn(300,u),!f())return{kind:"abandoned"}}let y,b=Date.now(),x=!1,S=!1;for(;;){try{y=await a({format:e.format,destination:e.label??e.name,signal:u,...d&&{assistant:!0}})}catch{y={ok:!1,reason:"failed"}}if(!(v&&!y.ok&&(y.reason==="unsupported"||y.reason==="failed"&&!x)&&Date.now()-b<1e4))break;if(!y.ok&&y.reason==="failed"&&(x=!0),S=!0,await Vn(1e3,u),!f())return{kind:"abandoned"}}if(!y.ok)return y.reason==="declined"||y.reason==="expired"||y.reason==="page_cancelled"?{kind:y.reason}:y.reason==="unbound"?{kind:"abandoned"}:{kind:"error",error:y.reason};if(S&&_!==void 0&&(m("replaced"),_=void 0),y.bytes.byteLength>16777216)return{kind:"error",error:"too_large",size:Yn(y.bytes.byteLength)};let C;try{C=Gn(y,e.id)}catch{return{kind:"error",error:"failed",size:Yn(y.bytes.byteLength)}}let w=Yn(C.byteLength);if(C.byteLength>16777216)return{kind:"error",error:"too_large",size:w};if(!f())return{kind:"abandoned",size:w};if(p(),De(h)){let e=new Blob([C],{type:h}),n=await Ee("frame_send_to",t,e,{maxSignedBytes:16777216,stillWanted:f});if(n!==e){let e=C;C=await n.arrayBuffer().catch(()=>e)}if(!f())return{kind:"abandoned",size:w}}let T;try{let a=await Hn({orgUuid:t,artifactUuid:n,handoffToken:r,filename:y.filename,destinationId:e.id,bytes:C,contentType:h,surface:l},u,f,i);if(a==="abandoned")return{kind:"abandoned",size:w};if(!a.ok)return{kind:"error",error:a.error,size:w};T=zn(a.body,n)}catch{return{kind:"error",error:"network",size:w}}if(T===null)return{kind:"error",error:"link_failed",size:w};if(!f())return{kind:"abandoned",size:w};let E=null;if(_!==void 0&&g!==void 0){let i=new AbortController,a=()=>i.abort();u.addEventListener("abort",a,{once:!0});let o=await Promise.race([Jn({orgUuid:t,artifactUuid:n,handoffToken:r,filename:_.filename,destinationId:e.id,bytes:_.bytes,contentType:g,surface:l},n),Vn(5e3+(d?0:_.bytes.byteLength/1e3),i.signal).then(()=>"timeout")]);if(i.abort(),u.removeEventListener("abort",a),!f())return{kind:"abandoned",size:w};typeof o=="string"?m(o):E=o}let D={destination:e,url:T.url,expiresAt:T.expiresAt,...T.token===void 0?{}:{token:T.token},...s===void 0?{}:{importTool:s},...c===void 0?{}:{statusTool:c}},O=o(E===null?D:{...D,source:{url:E.url,...E.token===void 0?{}:{token:E.token}}});return O===""?{kind:"error",error:"unsupported",size:w}:(E!==null&&m(O===o(D)?"unsupported":"attached"),{kind:"link",prompt:O,size:w})}function Zn(e,t,n){let r=t.compose(q(e.name),`${window.location.origin}${H(n)}`);return r===""?{kind:"error",error:"unsupported"}:{kind:"link",prompt:r}}function Qn(e){let $=J9(46),{orgUuid:t,artifactUuid:n,handoffToken:r,refreshBoot:i,conversationUuid:a,laneKey:o,deliver:s,requestExport:u,composePrompt:f,typeRules:p,mayRebuild:h}=e,g=o===void 0?a:o,_=h!==void 0&&h,v=C(),y=W(),[b,x]=d(Z),S=c(0),w=c(null),T=c(null),E=J0($,0)?K0($,0,()=>{S.current+=1,T.current?.abort(),x(Z)}):$[0],D=J0($,1)?K0($,1,()=>E):$[1],O=J3($,2,n,g,t)?K3($,2,n,g,t,[t,n,g,E]):$[5];l(D,O);let k=E,A=c(r),j=J0($,6)?K0($,6,new Set):$[6],M=c(j),N,P;J1($,7,r)?(N=()=>{A.current=r;for(let e of M.current)e()},P=[r],K2($,7,r,N,P)):(N=$[8],P=$[9]),l(N,P);let F=J1($,10,i)?K1($,10,i,(e,t)=>A.current===e?!i||t.aborted?Promise.resolve(void 0):(i(),new Promise(n=>{let r=M.current,i=()=>{clearTimeout(o),r.delete(a),t.removeEventListener("abort",i),n(A.current===e?void 0:A.current)},a=()=>{A.current!==e&&i()},o=setTimeout(i,1e4);r.add(a),t.addEventListener("abort",i,{once:!0})})):Promise.resolve(A.current)):$[11],I=m(F),L=J1($,12,v)||J1($,13,b.phase)?I1($,13,Z1($,12,(e,t)=>{if(b.phase==="confirming"||b.phase==="uploading"||w.current===S.current)return null;let n=S.current+=1;w.current=n;let r=new AbortController;T.current=r;let i=Date.now(),a={destination_id:e.id,format:e.format,...t==="tool"?{via:t}:{},...e.route===void 0?{}:{route:e.route}};return x({phase:"confirming",destination:e}),v.track({event_key:"claudeai.jolly_candle.requested",...a}),{live:()=>S.current===n,signal:r.signal,settle:(e,t,o)=>{w.current===n&&(w.current=null),T.current===r&&(T.current=null),v.track({event_key:"claudeai.jolly_candle.settled",...a,outcome:e,duration_ms:Date.now()-i,...t===void 0?{}:{size_bucket:t},...o===void 0?{}:{source:o}})}}},v),b.phase):$[14],ee=J5($,15,n,L,f,s,r,g,_,t,I,u,y)||J1($,26,p?.importToolName)||J1($,27,p?.rebuild)||J1($,28,p?.statusToolName)?I1($,28,Z1($,27,Z1($,26,Z5($,15,e=>{if(!t||!n||!r||!g||!u||!e.connected)return;let i=e.route==="rebuild",a=i&&_?p?.rebuild:void 0;if(i&&a===void 0)return;let o=L(e,"row");if(o===null)return;let{live:c}=o,l,d=(e,t)=>o.settle(e,t,l);(async()=>{let i=a===void 0?await Xn({destination:e,orgUuid:t,artifactUuid:n,handoffToken:r,renewToken:I,requestExport:u,composePrompt:f,importTool:p?.importToolName,statusTool:p?.statusToolName,surface:y,signal:o.signal,assistant:!1,live:c,onUploading:()=>x({phase:"uploading",destination:e}),onSource:e=>{l=e}}):Zn(e,a,n);if(i.kind==="error"){d(i.error,i.size),c()&&x({phase:"error",destination:e,error:i.error});return}if(i.kind!=="link"){d(i.kind,i.kind==="abandoned"?i.size:void 0),c()&&x(i.kind==="page_cancelled"?{phase:"cancelled"}:Z);return}let m;try{m=a===void 0?await s(i.prompt):await s(i.prompt,a.variant)}catch{d("network",i.size),c()&&x({phase:"error",destination:e,error:"network"});return}d(m===!1?"send_rejected":"handed",i.size),c()&&x(Z)})()},n,L,f,s,r,g,_,t,I,u,y),p?.importToolName),p?.rebuild),p?.statusToolName):$[29],R=J5($,30,n,L,f,r,g,t,I,u,y)||J1($,39,p?.importToolName)||J1($,40,p?.statusToolName)?I1($,40,Z1($,39,Z5($,30,async(e,i)=>{if(!t||!n||!r||!g||!u||!e.connected||e.route==="rebuild")return{kind:"unavailable"};if(i?.aborted)return{kind:"cancelled"};let a=L(e,"tool");if(a===null)return{kind:"in_progress"};let{live:o,settle:s}=a,c,l=()=>{o()&&E()};i?.addEventListener("abort",l,{once:!0});let d=!0,m=!1,h=setTimeout(()=>{d&&o()&&(m=!0,E())},2e5),_=await Xn({destination:e,orgUuid:t,artifactUuid:n,handoffToken:r,renewToken:I,requestExport:u,composePrompt:f,importTool:p?.importToolName,statusTool:p?.statusToolName,surface:y,signal:a.signal,assistant:!0,live:o,onUploading:()=>{d=!1,x({phase:"uploading",destination:e})},onSource:e=>{c=e}});switch(clearTimeout(h),i?.removeEventListener("abort",l),s(_.kind==="error"?_.error:_.kind==="link"?"linked":_.kind==="abandoned"&&m?"timed_out":_.kind,"size"in _?_.size:void 0,c),o()&&x(Z),_.kind){case"link":return{kind:"link",prompt:_.prompt};case"error":return{kind:"error",error:_.error};case"declined":return{kind:"declined"};case"expired":return{kind:"expired"};case"page_cancelled":return{kind:"cancelled"};case"abandoned":return{kind:m?"timed_out":"cancelled"}}},n,L,f,r,g,t,I,u,y),p?.importToolName),p?.statusToolName):$[41];return J3($,42,R,ee,b)?K3($,42,R,ee,b,{state:b,send:ee,runForTool:R,dismiss:k}):$[45]}function $n(e){let $=J9(32),{showable:t,boot:n,sendToAppsAdminOff:r,destinations:i,conversationPending:a,blockedHere:o,usageLimitResetsAt:s,host:u,src:f}=e,p=a!==void 0&&a,m=s===void 0?null:s,h=ue(),g=C(),_=J3($,0,o,n,p)||J1($,3,i.destinations?.length)||J1($,4,i.needsMp4)||J3($,5,i.status,r,t)?I3($,5,Z1($,4,Z1($,3,Z3($,0,t?ke({bootStatus:n.status,orgIsActive:n.orgIsActive,hasHandoffToken:n.handoffToken!==void 0,handoffWithheld:n.handoffWithheld,labelRestricted:n.artifactLabelRestricted===!0,connectorsAdminOff:i.status==="admin_off",sendToAppsAdminOff:r,connectorsStoreFailed:i.status==="store_error",directoryFailed:i.status==="directory_error",browserCannotMakeMp4:i.needsMp4,conversationPending:p,sendBlocked:o!==void 0&&o!=="usage_limit",blockedHere:i.status==="ready"&&(i.destinations?.length??0)>0?o:void 0}):null,o,n,p),i.destinations?.length),i.needsMp4),i.status,r,t):$[8],[v,y]=d(null),b=i.status==="loading"||i.status==="store_error"||i.status==="directory_error",x=_==="connectors_unavailable"||_==="directory_unavailable"||_==="conversation_pending"?_:_===null&&t&&b?v:null;x!==v&&y(x);let S=_??x,w=S==="handoff_fenced"?n.handoffWithheldNote:void 0,T=S==="usage_limit"?m:null,E=re(),D=J4($,9,w,h,T,E)?K4($,9,w,h,T,E,T===null?w:ye(h,T,E)):$[13],O=J3($,14,h,S,D)?K3($,14,h,S,D,Ae(h,S,void 0,D)):$[17],k=c(null),A=O?.reason,j=J1($,18,A)?K1($,18,A,A===void 0?void 0:Me(A)):$[19],M,N;J4($,20,g,u,j,f)?(M=()=>{let e=j===void 0?null:`${f}|${j}`;e!==null&&e!==k.current&&(k.current=e,g.track({event_key:"claudeai.jolly_candle.unavailable",reason:j,host:u}))},N=[j,f,u,g],K5($,20,g,u,j,f,M,N)):(M=$[24],N=$[25]),l(M,N);let P=i.retry,F=J2($,26,P,S)?K2($,26,P,S,()=>{S!==null&&je[S]==="retry"&&P()}):$[28];return J2($,29,F,O)?K2($,29,F,O,{unavailable:O,retry:F}):$[31]}function er(e,t,n){return e&&(!t.orgIsActive||t.handoffToken===void 0||n.sendToAppsAdminOff||n.conversationPending===!0||n.blockedHere!==void 0)}function tr(e){return Ne(e)}export{We as l,rt as o,er as n,Qn as i,Cn as a,Ue as u,dt as s,Xe as c,$n as r,tr as t};