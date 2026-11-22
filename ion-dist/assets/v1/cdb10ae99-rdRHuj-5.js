import{_H5 as e,_ft as t}from"./shared-174-Uzjlgfhw.js";import{r as n,t as r}from"./c370483c0-CWNQvk17.js";import{ti as i}from"./shared-107-D8fgcL1q.js";function a(n){return e(n.replace(/\r\n/g,`
`)).replace(i(),e=>e===`
`||e==="	"?e:t(e)).replace(/\p{Zs}|\u2800/gu,e=>e===" "?e:t(e))}function o(e,t=a){let i=n(e);if(!i)return t(e);let o=r(e,i,a),s=t(e.slice(0,o.start));return s+(s.endsWith(`
`)||o.text===""||o.text.startsWith(`
`)?"":`
`)+o.text+t(e.slice(o.end))}export{a as _FA,o as t};