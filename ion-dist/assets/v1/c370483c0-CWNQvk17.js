import{Rg as e}from"./shared-73-DfCPGdCT.js";var t=RegExp(`^[	
\v\f\r -\u0085\u00A0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]*`),n=256e3;function r(r){let i=+!!r.startsWith("\uFEFF"),a=i+t.exec(r.slice(i))[0].length,o=r.lastIndexOf(`
`,a-1)+1||i;if(!r.startsWith("---",o))return null;let s=r.indexOf(`
---
`,o+3),c=s+5;if(s===-1&&(s=r.indexOf(`
---\r
`,o+3),c=s+6),s===-1)return null;let l=o+((r.codePointAt(o+3)??0)>65535?5:4);return{header:r.slice(l,Math.max(l,s)),tooLong:s-o>n&&e(r.slice(o,s))>n,headerStart:l,bodyStart:c}}var i=/(\r\n|[\n\r\u0085\u2028\u2029])/,a=new RegExp(i,"g");function o(e){return e.replace(a,`
`)}var s=/^([ \t]*)-(?=--)/;function c(e,t,n){let r=t.headerStart,a=r+t.header.length;e[r-1]==="\r"&&e[r]===`
`&&(r+=1),e[a-1]==="\r"&&e[a]===`
`&&--a,a=Math.max(r,a);let o=e.slice(r,a).split(i).map((e,t)=>t%2==0?n(e).replace(s,"$1\\x2d"):e.includes(`
`)?`
`:`${n(e)}\n`).join("");return{start:r,text:o,end:a}}export{o as n,r,c as t};