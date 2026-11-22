import{Ba as e,Ka as t,Ra as n,mo as r,to as i,za as a}from"./shared-206-DmJmFrn0.js";var o=/\r\n|[\r\n\u0085\u2028\u2029]/g,s=new RegExp(n.source,"g"),c=/[\s\p{Zs}]+/gu;function l(e){return f(e).replace(c," ").trim()}function u(e){return i(r(e))}function d(e){return l(u(e))}function f(n){return t(n.replace(o,`
`)).replace(s,e).split(`
`).map(e=>a().test(e)?"":e).join(`
`).replace(/\n{2,}/g,`
`).trim()}export{d as a,u as i,l as n,f as r,o as t};