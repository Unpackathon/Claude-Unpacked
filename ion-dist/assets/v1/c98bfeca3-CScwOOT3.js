var e=[["image/png",e=>e.startsWith(`\u0089PNG\r

`)],["image/jpeg",e=>e.startsWith("\u00FF\u00D8\u00FF")],["image/gif",e=>e.startsWith("GIF87a")||e.startsWith("GIF89a")],["image/webp",e=>e.startsWith("RIFF")&&e.slice(8,12)==="WEBP"]];function t(t){let n=t.slice(0,16);return e.find(([,e])=>e(n))?.[0]}export{t};