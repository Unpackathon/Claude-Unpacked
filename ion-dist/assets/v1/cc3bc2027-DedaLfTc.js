var e={padBlock:"8px",linePadStart:"4px",linePadEnd:"12px",numberPadStart:"18px",numberPadStartWithChangeMarks:"24px",addChipLeft:1,addChipLeftWithChangeMarks:4,changeMarksLane:10,foldColumnWidth:"12px"};function t(e){return e?{minWidth:"2rem",padEnd:"0px"}:{minWidth:"2.5rem",padEnd:"8px"}}function n(n,r,i){let a=t(n),{minWidth:o}=a,s=i?`${e.changeMarksLane}px`:a.padEnd,c=i?e.numberPadStartWithChangeMarks:e.numberPadStart,l=n?`calc(${s} + ${e.foldColumnWidth})`:s;return`:host{--diffs-gap-block:${e.padBlock};--diffs-gap-style:none}[data-column-number]{padding-left:${c};padding-right:${l}}[data-line-number-content]{min-width:max(calc(${o} - ${c} - ${s}),${r}ch)}[data-line],[data-no-newline]{padding-left:${e.linePadStart};padding-right:${e.linePadEnd}}[data-overflow="wrap"] [data-line]{white-space:break-spaces;overflow-wrap:anywhere}`}function r(e,t){return e===t?!0:!e.includes("\r")&&!t.includes("\r")?!1:e.replace(/\r\n?/g,`
`)===t.replace(/\r\n?/g,`
`)}function i(e){let t=0,n=e.indexOf(`\r
`);for(;n!==-1;)t+=1,n=e.indexOf(`\r
`,n+2);return e.length-t}function a(e,t){return e.replace(/\r\n|\r|\n/g,t)}function o(e){if(!e.includes("\r"))return{text:e,lineBreak:`
`};let t=0,n=0,r=0;for(let i=0;i<e.length;i+=1){let a=e.charCodeAt(i);a===13?e.charCodeAt(i+1)===10?(r+=1,i+=1):t+=1:a===10&&(n+=1)}let i=t+r>(t+n+r)/2?`\r
`:`
`;return{text:(i===`\r
`?t+n===0:t+r===0)?e:a(e,i),lineBreak:i}}export{e as a,a as i,i as n,t as o,o as r,n as s,r as t};