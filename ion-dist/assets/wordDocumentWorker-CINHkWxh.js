var e=class extends Error{code;detail;constructor(e,t,n){super(t),this.name="OoxmlError",this.code=e,n!==void 0&&(this.detail=n.slice(0,80).replace(/\p{Cc}/gu,""))}};const t=Object.freeze({fuel:6e7,xmlElements:5e5,slides:1e3,slideBytes:33554432,decorationParseBytes:16777216,diagramBytes:16777216,shapes:1e5,tableCells:2e4,chartPoints:2e5,documentItems:1e6,vmlElements:15e4,transcodeWork:4e6,svgParseWork:16777216,transcodePixels:24e6,transcodeSvgBytes:16777216,dashes:1e5,mediaBytes:201326592,slidePicturePixels:48e6,slidePictureWork:4e6,slidePaint:2e6,slideInlineBytes:33554432,slideAutofitBodies:200,slideAutofitText:2e4,slideColumnText:1e6,markupBytes:33554432,slideMarkupBytes:8388608,layoutWork:75e5,slideLayoutWork:1e6});function n(e,t){let n={...e};for(let e of Object.keys(n)){let r=t[e];typeof r=="number"&&Number.isFinite(r)&&r>=0&&(n[e]=Math.min(n[e],r))}return n}function r(e={}){return n(t,e)}function i(e,t,n){return f(n,t),!(n>=0)||e[t]<n?!1:(e[t]-=n,!0)}let a,o,s=!1,c,l=0,u=0;const d="the conversion was stopped by the caller's stop hook";function f(t,n){if(s)throw new e("stopped",d);if(!(!o||--l>0&&!((u+=t)>=65536))){l=64,u=0;try{s=o()}catch(e){c={error:e},s=!0}if(s)throw new e("stopped",d)}}function p(e=0){f(e)}function m(){if(s)throw new e("stopped",d)}function h(e){return s||e.fuel<=0}function g(t,n,r){let i=a===void 0,u=_(t);i&&(o=r,l=1);try{let t=n();if(i&&c)throw new e("stopped",d);return t}catch(e){throw i&&c?c.error:e}finally{u(),i&&(o=void 0,s=!1,c=void 0)}}function _(e){let t=a;return a=e,()=>{a=t}}function v(){if(!a)throw TypeError("no budgets in force: wrap the call in withBudgets()");return a}function y(t,n=v()){if(f(t,"fuel"),!(t>=0)||(n.fuel-=t)<0)throw n.fuel=0,new e("too-big","the file takes more work to read than is allowed")}const b={"part-over-cap":{loss:!1,words:"part over the size limit, not read"},"part-unreadable":{loss:!1,words:"part cannot be unpacked, not read"},"part-malformed":{loss:!1,words:"part is not well-formed XML, not read"},"part-too-big":{loss:!1,words:"part not read: it, or the file up to it, holds more elements than are read, or nests too deep"},"relationship-refused":{loss:!1,words:"relationship that points outside the package, ignored"},"relationships-lost":{loss:!0,words:"a part's list of relationships cannot be read, so the parts, pictures and links it names are not shown"},"notes-cut":{loss:!0,words:"speaker notes cut short"},"notes-unreadable":{loss:!0,words:"speaker notes cannot be read"},"slides-over-cap":{loss:!0,words:"slides left out: over the limit on slides in a deck"},"slide-over-allowance":{loss:!0,words:"this slide and all after it left out: the slides together are too large"},"slide-not-in-file":{loss:!0,words:"slide left out: the file lists it and does not hold it"},"inherited-part-unreadable":{loss:!0,words:"layout, master, theme or table styles cannot be read; what the slide takes from them is missing"},"slide-unreadable":{loss:!0,words:"slide cannot be read"},"slide-failed":{loss:!0,words:"slide could not be drawn"},"slide-too-big":{loss:!0,words:"slide not drawn: over a limit on size, on work or on what it may hold or cost to paint"},"slide-stopped":{loss:!0,words:"slide not read or not drawn: the program that shows it stopped the work, at a limit of its own on time or memory"},"pages-over-cap":{loss:!1,words:"the document has more than 5,000 page breaks; what follows them is shown on the last page, or that page is left blank if it is too much for one"},"page-failed":{loss:!0,words:"a page could not be drawn"},"page-too-big":{loss:!0,words:"a page was not drawn because it, or the whole document, is too large"},"page-stopped":{loss:!0,words:"a page was not drawn: the program that shows it stopped the work, at a limit of its own on time or memory"},"page-number-unknown":{loss:!1,words:"a page or section number is shown as a dash because the file does not say reliably where its pages end"},"drawing-left-out":{loss:!0,words:"drawing of shapes, left out of the text"},"embedded-document-left-out":{loss:!0,words:"another document that this one pulls in is not shown"},"number-format-approximated":{loss:!0,words:"a list, note or page number uses an unknown number format and is shown in digits"},"picture-bullet-replaced":{loss:!0,words:"a picture used as a list bullet is shown as a round bullet"},"field-without-result":{loss:!0,words:"a field shows nothing or a dash: it has no stored result, such as an index that was never built, or its result holds for one page only"},"contents-built":{loss:!1,words:"the table of contents was never built, so it is built from the headings, without page numbers"},"part-lost":{loss:!0,words:"a part of the file cannot be read, so what it held (styles, list numbers, notes or a header) is not shown"},"layout-approximated":{loss:!1,words:"part of the layout is simplified"},"content-unread":{loss:!0,words:"text is not shown because it stands where this reader does not look"},"field-unclosed":{loss:!1,words:"a field that is never closed is ignored, and the text after it is shown"},"text-nested-too-deep":{loss:!0,words:"a text box, table or note is nested too deeply and is not shown"},"note-left-out":{loss:!0,words:"a note referenced from another note, or a note or comment from a header or a footer, is not shown"},"ruby-flattened":{loss:!1,words:"a reading above text (ruby) is shown in brackets after the text, because it stands inside another or there are too many"},"vml-approximated":{loss:!0,words:"part of a legacy drawing is drawn in a simpler form"},"master-shapes-left-out":{loss:!0,words:"shapes of the master and layouts left out: over the limit for reading them"},"builds-by-shape":{loss:!1,words:"animations by paragraph are shown for the whole shape"},"pattern-drawn-flat":{loss:!1,words:"pattern drawn as one flat color: its kind is not drawn, or the slide has too many gradients and patterns or costs too much to paint"},"gradient-drawn-flat":{loss:!1,words:"gradient drawn as one flat color: it fills a run of text that is long or may not fit on one line, or the slide has too many gradients and patterns or costs too much to paint"},"effect-not-drawn":{loss:!1,words:"shadow or other effect not drawn: the slide has too many, or already costs too much to paint"},"tile-stretched":{loss:!0,words:"tiled picture fill drawn as one stretched picture"},"columns-not-drawn":{loss:!0,words:"text set in one column: the columns are too narrow or too full, or the slide is over its limit on text in columns"},"faces-over-allowance":{loss:!1,words:"the file names more typefaces or sizes of letters than are kept; the rest are shown in one that was kept"},"languages-over-allowance":{loss:!1,words:"the document marks text as being in more than 512 languages; the rest is taken to be in the language of the text around it"},"text-not-fitted":{loss:!0,words:"text not shrunk to fit: over the limit on text to be fitted on one slide"},"dashes-drawn-solid":{loss:!0,words:"dashed line drawn solid: too many dashes or dashed borders, a slide that costs too much to paint, or dashes in an SVG that cannot be measured"},"line-drawn-thinner":{loss:!1,words:"wide line drawn thinner: the slide's wide lines have too many corners"},"outline-over-allowance":{loss:!1,words:"shape drawn as a rectangle: its outline, or the slide's outlines together, have too many segments"},"preset-as-rectangle":{loss:!0,words:"shape drawn as a rectangle: its kind is not known, or its outline cannot be drawn"},"object-unsupported":{loss:!1,words:"object of a kind that cannot be drawn"},"diagram-over-allowance":{loss:!1,words:"diagram not read: over the limit for reading diagrams"},"picture-not-in-file":{loss:!1,words:"picture is linked from outside the file, its relationship is gone, or it names no picture"},"shape-without-place":{loss:!0,words:"shape left out: it has no position of its own and none to inherit"},"shapes-over-allowance":{loss:!0,words:"shapes left out: over the limit on shapes in a deck"},"equation-flattened":{loss:!0,words:"part of an equation is of an unknown kind; its contents are written in a row"},"symbols-unknown":{loss:!0,words:"characters of a symbol font (such as Wingdings) with no known equivalent, or symbols that name no character, shown as boxes"},"link-dropped":{loss:!1,words:"link removed, its text kept: its address is missing or too long, or is no web, mail or slide link"},"table-columns-cut":{loss:!0,words:"table columns left out: over the limit on table cells in a deck"},"table-text-covered":{loss:!0,words:"text of a table cell under another cell's span left out"},"table-rows-cut":{loss:!0,words:"table rows left out: over the limit on table cells in a deck"},"chart-unreadable":{loss:!1,words:"chart cannot be read"},"chart-over-allowance":{loss:!1,words:"chart left out: the deck's charts hold more points than are read, or the slide holds too much or costs too much to paint"},"chart-series-cut":{loss:!0,words:"chart series left out: over the limit for one chart"},"chart-points-cut":{loss:!0,words:"chart points left out: over the limit for one series or for all the charts of a deck"},"chart-marks-cut":{loss:!0,words:"chart bars, markers or labels left out: over the limit for one chart"},"chart-lines-cut":{loss:!0,words:"chart lines or areas left out: more corners than one chart may have"},"chart-plots-left-out":{loss:!0,words:"part of a combined chart not drawn"},"chart-legend-cut":{loss:!0,words:"legend entries left out: no room"},"chart-labels-left-out":{loss:!0,words:"chart titles or labels left out: no room"},"chart-category-levels-cut":{loss:!0,words:"outer category levels left out"},"chart-label-text-left-out":{loss:!0,words:"label text that cannot be worked out from the chart not shown"},"chart-trendline-left-out":{loss:!0,words:"trendline not drawn"},"chart-trendline-label-left-out":{loss:!0,words:"equation or R squared of a trendline not shown"},"chart-error-bars-left-out":{loss:!0,words:"error bars not drawn"},"chart-guide-lines-left-out":{loss:!0,words:"drop lines, high-low lines, series lines or up-down bars not drawn"},"chart-data-table-left-out":{loss:!0,words:"data table under the chart not drawn"},"chart-drawings-left-out":{loss:!0,words:"shapes drawn on the chart not shown"},"chart-points-off-scale":{loss:!0,words:"chart points not drawn: they have no place on an axis"},"media-not-played":{loss:!1,words:"a movie or sound is shown by its picture and is not played"},"picture-missing":{loss:!1,words:"media part is not in the package"},"picture-unreadable":{loss:!1,words:"media part cannot be read"},"picture-type-refused":{loss:!1,words:"media of a type that is not shown"},"picture-not-converted":{loss:!1,words:"picture could not be converted"},"picture-over-cap":{loss:!1,words:"media file over the cap for one file"},"picture-url-refused":{loss:!1,words:"pictureUrl threw, or gave something other than a blob: or data: URL"},"pictures-over-allowance":{loss:!1,words:"media left out: over a limit for media on the slide or in the deck, cut to an outline of too many segments, or the slide costs too much to paint"},"picture-lost":{loss:!0,words:"picture not drawn"},"chart-lost":{loss:!0,words:"chart not drawn"},"video-lost":{loss:!0,words:"movie not drawn: no picture to show for it"},"audio-lost":{loss:!0,words:"sound not drawn: no picture to show for it"},"object-lost":{loss:!0,words:"object not drawn"},"diagram-lost":{loss:!0,words:"diagram not drawn"}},x=/[\p{Cc}\p{Cs}]/gu;var S=class{slide;records=new Map;add(e,t,n=1){let r=e+" "+(this.slide??""),i=this.records.get(r);if(i){i.count+=n;return}let a={code:e,loss:b[e].loss,count:n};this.slide!==void 0&&(a.slide=this.slide),t!==void 0&&(a.detail=String(t).slice(0,80).replace(x,"")),this.records.set(r,a)}forget(e){for(let t of Object.keys(b))this.records.delete(t+" "+e)}pour(e){for(let t of this.records.values())e?.add(t.code,t.detail,t.count);this.records.clear()}list(){return Array.from(this.records.values(),e=>({...e}))}};const C=new Set(["descr","title","alt","string"]),w=new Set(["path","points"]);function T(e){return Object.assign(Object.create(null),e)}const E=T({amp:"&",lt:"<",gt:">",quot:'"',apos:"'"});function D(e,t=v()){let n=e.indexOf("&");if(n<0)return e;let r=[],i=0;for(;n>=0;){y(32,t);let a=n+1,o=Math.min(e.length,a+16);for(;a<o&&/[#0-9a-zA-Z]/.test(e[a]);)a++;let s=e.slice(n+1,a);e[a]===";"&&/^(?:#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*)$/.test(s)&&(r.push(e.slice(i,n),O(s)),i=a+1),n=e.indexOf("&",a)}return r.push(e.slice(i)),r.join("")}function O(t){if(t.startsWith("#")){let n=t[1]==="x",r=parseInt(t.slice(n?2:1),n?16:10),i=r===9||r===10||r===13||r>=32&&r<=55295||r>=57344&&r<=65533||r>=65536&&r<=1114111;if(!Number.isFinite(r)||r>1114111)throw new e("invalid","bad character reference");return i?String.fromCodePoint(r):""}let n=E[t];if(n===void 0)throw new e("invalid","unsupported entity");return n}const k=e=>e===32||e===10||e===9||e===13,A=e=>k(e)||e===47||e===62;function j(e){let t=e.indexOf(":");return t<0?e:e.slice(t+1)}function ee(t,n=v(),r=2048){let i=typeof t=="string"?t:new TextDecoder().decode(t);y((i.length>>4)+1,n);let a=0,o=i.length,s=null,c=[],l=new Map,u=(t,n="invalid")=>{throw new e(n,t+" at offset "+a)},d=0,f=!1,p=e=>{f&&e.text!==""&&!(++d&3)&&--n.xmlElements<0&&u("too many elements","too-big")},m=(e,t)=>{if(t<=e)return;let r=c[c.length-1];r&&(p(r),r.text+=D(i.slice(e,t),n))},h=0;for(;a<o;){let e=i.indexOf("<",a);if(e<0)break;if(m(h,e),a=e,f=i.charCodeAt(a+1)===63||i.charCodeAt(a+1)===33,i.startsWith("<?",a)){let e=i.indexOf("?>",a+2);e<0&&u("unterminated processing instruction"),a=e+2}else if(i.startsWith("<!--",a)){let e=i.indexOf("-->",a+4);e<0&&u("unterminated comment"),a=e+3}else if(i.startsWith("<![CDATA[",a)){let e=i.indexOf("]]>",a+9);e<0&&u("unterminated CDATA");let t=c[c.length-1];t&&(p(t),t.text+=i.slice(a+9,e)),a=e+3}else if(i.startsWith("<!",a))u("DOCTYPE and other declarations are not allowed");else if(i.startsWith("</",a)){let e=i.indexOf(">",a);e<0&&u("unterminated closing tag");let t=j(i.slice(a+2,e).trim()),n=c.pop();!n||n.name!==t?u("mismatched closing tag"):n.children.length>0&&/^[ \t\r\n]*$/.test(n.text)&&(n.text=""),a=e+1}else{let e=a+1;for(;e<o&&!A(i.charCodeAt(e));)e++;--n.xmlElements<0&&u("too many elements","too-big"),c.length>=512&&u("nesting too deep","too-big"),e-a-1>64&&u("name too long");let t=i.slice(a+1,e),d=l.get(t);d===void 0&&l.set(t,d=j(t));let f={name:d,attrs:Object.create(null),children:[],text:""},p=!1,m=0;for(;;){for(;e<o&&k(i.charCodeAt(e));)e++;e>=o&&u("unterminated tag");let t=i[e];if(t===">"){e++;break}if(t==="/"){i[e+1]!==">"&&u("stray / in tag"),p=!0,e+=2;break}let a=e;for(;a<o&&i[a]!=="="&&!A(i.charCodeAt(a));)a++;let s=i.slice(e,a),c=i.charCodeAt(e);for((c>=48&&c<=57||c===45||c===46)&&u("attribute name begins with a digit, - or .");a<o&&k(i.charCodeAt(a));)a++;for(i[a]!=="="&&u("attribute without value"),a++;a<o&&k(i.charCodeAt(a));)a++;let l=i[a];l!=='"'&&l!=="'"&&u("unquoted attribute value");let d=i.indexOf(l,a+1);d<0&&u("unterminated attribute value");let h=i.slice(a+1,d);h.includes("<")&&u("< in an attribute value");let g=h.length>r,_=g?j(s):"";if(++m<=64&&s.length<=64&&(!g||C.has(_)||w.has(_))){let e=D(h,n);f.attrs[s]=C.has(_)?e.slice(0,r).replace(/[\ud800-\udbff]$/,""):e}e=d+1}y(m,n),(n.xmlElements-=m>>2)<0&&u("too many elements","too-big");let h=c[c.length-1];h?h.children.push(f):s?u("multiple root elements"):s=f,p||c.push(f),a=e}h=a}if(c.length>0)throw new e("invalid","unclosed element");if(!s)throw new e("invalid","no root element");return s}function M(e,t){return y(e.children.length+1),e.children.filter(e=>e.name===t)}function N(e){return y(e.children.length+1),e.children}function P(e,t){let n=e.children;for(let e=0;e<n.length;e++)if(n[e].name===t)return y(e+1),n[e];y(n.length+1)}function F(e,t){let n=[],r=[e];for(;r.length>0;){let i=r.pop();y(1);for(let e=i.children.length-1;e>=0;e--)r.push(i.children[e]);i!==e&&i.name===t&&n.push(i)}return n}function I(e,t){let n=[e],r=[0];for(;n.length>0;){let e=n.length-1,i=n[e].children,a=r[e];if(a>=i.length){n.pop(),r.pop();continue}r[e]=a+1;let o=i[a];if(y(1),o.name===t)return o;o.children.length>0&&(n.push(o),r.push(0))}}function te(e){return e.length>64&&y(e.length>>4),e}function L(e,t){let n=e.attrs[t];if(n!==void 0)return te(n);let r=1;for(let n in e.attrs){r++;let i=n.indexOf(":");if(i>=0&&n.slice(i+1)===t)return y(r),te(e.attrs[n])}y(r)}function R(e,t){let n=L(e,t);if(n===void 0||n.length>40)return;let r=/^([+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)(%?)$/.exec(n);if(!r)return;let i=Number(r[1]);if(Math.abs(i)<=0x38d7ea4c68000)return r[2]?Math.round(i*1e3):Math.trunc(i)}function ne(e,t){let n=L(e,t);if(n!==void 0)return n==="1"||n==="true"}function re(e){return e/9525}function ie(e){return e/6e4}function ae(e){return e/1e5}function oe(e){return Math.round(e*100)/100}const se=T({windowText:"000000",window:"FFFFFF",btnText:"000000",btnFace:"F0F0F0",menuText:"000000",menu:"F0F0F0",grayText:"6D6D6D",highlight:"0078D7",highlightText:"FFFFFF",infoText:"000000",infoBk:"FFFFE1",captionText:"000000",windowFrame:"646464"}),ce=T(Object.fromEntries("aliceblue f0f8ff antiquewhite faebd7 aqua 00ffff aquamarine 7fffd4 azure f0ffff beige f5f5dc bisque ffe4c4 black 000000 blanchedalmond ffebcd blue 0000ff blueviolet 8a2be2 brown a52a2a burlywood deb887 cadetblue 5f9ea0 chartreuse 7fff00 chocolate d2691e coral ff7f50 cornflowerblue 6495ed cornsilk fff8dc crimson dc143c cyan 00ffff darkblue 00008b darkcyan 008b8b darkgoldenrod b8860b darkgray a9a9a9 darkgreen 006400 darkgrey a9a9a9 darkkhaki bdb76b darkmagenta 8b008b darkolivegreen 556b2f darkorange ff8c00 darkorchid 9932cc darkred 8b0000 darksalmon e9967a darkseagreen 8fbc8f darkslateblue 483d8b darkslategray 2f4f4f darkslategrey 2f4f4f darkturquoise 00ced1 darkviolet 9400d3 deeppink ff1493 deepskyblue 00bfff dimgray 696969 dimgrey 696969 dodgerblue 1e90ff firebrick b22222 floralwhite fffaf0 forestgreen 228b22 fuchsia ff00ff gainsboro dcdcdc ghostwhite f8f8ff gold ffd700 goldenrod daa520 gray 808080 green 008000 greenyellow adff2f grey 808080 honeydew f0fff0 hotpink ff69b4 indianred cd5c5c indigo 4b0082 ivory fffff0 khaki f0e68c lavender e6e6fa lavenderblush fff0f5 lawngreen 7cfc00 lemonchiffon fffacd lightblue add8e6 lightcoral f08080 lightcyan e0ffff lightgoldenrodyellow fafad2 lightgray d3d3d3 lightgreen 90ee90 lightgrey d3d3d3 lightpink ffb6c1 lightsalmon ffa07a lightseagreen 20b2aa lightskyblue 87cefa lightslategray 778899 lightslategrey 778899 lightsteelblue b0c4de lightyellow ffffe0 lime 00ff00 limegreen 32cd32 linen faf0e6 magenta ff00ff maroon 800000 mediumaquamarine 66cdaa mediumblue 0000cd mediumorchid ba55d3 mediumpurple 9370db mediumseagreen 3cb371 mediumslateblue 7b68ee mediumspringgreen 00fa9a mediumturquoise 48d1cc mediumvioletred c71585 midnightblue 191970 mintcream f5fffa mistyrose ffe4e1 moccasin ffe4b5 navajowhite ffdead navy 000080 oldlace fdf5e6 olive 808000 olivedrab 6b8e23 orange ffa500 orangered ff4500 orchid da70d6 palegoldenrod eee8aa palegreen 98fb98 paleturquoise afeeee palevioletred db7093 papayawhip ffefd5 peachpuff ffdab9 peru cd853f pink ffc0cb plum dda0dd powderblue b0e0e6 purple 800080 red ff0000 rosybrown bc8f8f royalblue 4169e1 saddlebrown 8b4513 salmon fa8072 sandybrown f4a460 seagreen 2e8b57 seashell fff5ee sienna a0522d silver c0c0c0 skyblue 87ceeb slateblue 6a5acd slategray 708090 slategrey 708090 snow fffafa springgreen 00ff7f steelblue 4682b4 tan d2b48c teal 008080 thistle d8bfd8 tomato ff6347 turquoise 40e0d0 violet ee82ee wheat f5deb3 white ffffff whitesmoke f5f5f5 yellow ffff00 yellowgreen 9acd32".split(" ").reduce((e,t,n,r)=>(n%2==0&&e.push([t,"#"+r[n+1]]),e),[])));function le(e){if(!(e.length>24))return ce[e.replace(/^dk(?=[A-Z])/,"dark").replace(/^lt(?=[A-Z])/,"light").replace(/^med(?=[A-Z])/,"medium").toLowerCase()]}function ue(e){let t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:1}}function de(e){return Math.max(0,Math.min(255,Math.round(e)))}function fe(e){if(e.a>=1){let t=e=>de(e).toString(16).padStart(2,"0");return"#"+t(e.r)+t(e.g)+t(e.b)}return"rgba("+de(e.r)+", "+de(e.g)+", "+de(e.b)+", "+Math.round(e.a*1e3)/1e3+")"}function pe(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2;if(i===a)return{h:0,s:0,l:o};let s=i-a,c=o>.5?s/(2-i-a):s/(i+a),l;return l=i===t?((n-r)/s+(n<r?6:0))/6:i===n?((r-t)/s+2)/6:((t-n)/s+4)/6,{h:l,s:c,l:o}}function me(e,t,n,r){let i=(e,t,n)=>{let r=n;return r<0&&(r+=1),r>1&&--r,r<1/6?e+(t-e)*6*r:r<1/2?t:r<2/3?e+(t-e)*(2/3-r)*6:e};if(t===0){let e=n*255;return{r:e,g:e,b:e,a:r}}let a=n<.5?n*(1+t):n+t-n*t,o=2*n-a;return{r:i(o,a,e+1/3)*255,g:i(o,a,e)*255,b:i(o,a,e-1/3)*255,a:r}}function he(e){let t=e/255;return t<=.04045?t/12.92:((t+.055)/1.055)**2.4}function ge(e){let t=Math.max(0,Math.min(1,e));return 255*(t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055)}function _e(e,t){let n=R(t,"val");if(n===void 0&&!["comp","inv","gray"].includes(t.name))return e;let r=ae(n??0),i=e=>Math.max(0,Math.min(1,e)),a=t=>{let n=pe(e),r={...n,...t(n)};return me((r.h%1+1)%1,i(r.s),i(r.l),e.a)},o=(t,n)=>({...e,[t]:ge(i(n(he(e[t]))))});switch(t.name){case"hue":return a(()=>({h:(n??0)/216e5}));case"hueOff":return a(({h:e})=>({h:e+(n??0)/216e5}));case"sat":return a(()=>({s:r}));case"satOff":return a(({s:e})=>({s:e+r}));case"lum":return a(()=>({l:r}));case"red":return o("r",()=>r);case"redMod":return o("r",e=>e*r);case"redOff":return o("r",e=>e+r);case"green":return o("g",()=>r);case"greenMod":return o("g",e=>e*r);case"greenOff":return o("g",e=>e+r);case"blue":return o("b",()=>r);case"blueMod":return o("b",e=>e*r);case"blueOff":return o("b",e=>e+r);case"alpha":return{...e,a:i(r)};case"alphaMod":return{...e,a:i(e.a*r)};case"alphaOff":return{...e,a:i(e.a+r)};case"tint":{let t=e=>ge(he(e)*r+(1-r));return{r:t(e.r),g:t(e.g),b:t(e.b),a:e.a}}case"shade":{let t=e=>ge(he(e)*r);return{r:t(e.r),g:t(e.g),b:t(e.b),a:e.a}}case"lumMod":{let{h:t,s:n,l:a}=pe(e);return me(t,n,i(a*r),e.a)}case"lumOff":{let{h:t,s:n,l:i}=pe(e);return me(t,n,Math.max(0,Math.min(1,i+r)),e.a)}case"satMod":{let{h:t,s:n,l:i}=pe(e);return me(t,Math.max(0,Math.min(1,n*r)),i,e.a)}case"hueMod":{let{h:t,s:n,l:i}=pe(e);return me(t*r%1,n,i,e.a)}case"comp":{let{h:t,s:n,l:r}=pe(e);return me((t+.5)%1,n,r,e.a)}case"inv":return{r:255-e.r,g:255-e.g,b:255-e.b,a:e.a};case"gray":{let t=.299*e.r+.587*e.g+.114*e.b;return{r:t,g:t,b:t,a:e.a}}default:return e}}function ve(e,t){y(32);let n;switch(e.name){case"srgbClr":{let t=L(e,"val");t&&/^[0-9a-fA-F]{6}$/.test(t)&&(n=ue(t));break}case"sysClr":{let t=/^[0-9a-fA-F]{6}$/,r=L(e,"lastClr"),i=r&&t.test(r)?r:se[L(e,"val")??""];i&&t.test(i)&&(n=ue(i));break}case"schemeClr":{let r=L(e,"val");if(!r)break;let i=t.map[r]??r,a=t.scheme[i];a?n=ue(a):r==="phClr"&&(n=ue("#808080"));break}case"prstClr":{let t=L(e,"val"),r=t?le(t):void 0;r&&(n=ue(r));break}case"hslClr":{let t=R(e,"hue"),r=R(e,"sat"),i=R(e,"lum");if(t!==void 0&&r!==void 0&&i!==void 0){let e=e=>Math.max(0,Math.min(1,e));n=me((t/216e5%1+1)%1,e(ae(r)),e(ae(i)),1)}break}case"scrgbClr":{let t=R(e,"r"),r=R(e,"g"),i=R(e,"b");t!==void 0&&r!==void 0&&i!==void 0&&(n={r:ge(ae(t)),g:ge(ae(r)),b:ge(ae(i)),a:1});break}default:return}if(!(!n||e.children.length>16)){y(32*e.children.length);for(let t of N(e))n=_e(n,t);return fe(n)}}function ye(e,t){for(let n of N(e)){let e=ve(n,t);if(e!==void 0)return e}}T({bg1:"lt1",tx1:"dk1",bg2:"lt2",tx2:"dk2"});const be=T({}),xe=new Set(["dk1","lt1","dk2","lt2","accent1","accent2","accent3","accent4","accent5","accent6","hlink","folHlink"]);function Se(e){let t=Object.create(null),n,r,i=[],a=[],o=[],s=[];if(e){let c=I(e,"clrScheme");if(c)for(let e of N(c)){if(!xe.has(e.name))continue;let n=ye(e,{scheme:be,map:be});n&&/^#[0-9a-fA-F]{6}$/.test(n)&&(t[e.name]=n)}let l=I(e,"majorFont"),u=I(e,"minorFont"),d=e=>{let t=e?P(e,"latin"):void 0;return(t?L(t,"typeface"):void 0)?.slice(0,128)||void 0};n=d(l),r=d(u);let f=I(e,"effectStyleLst");f&&(i=M(f,"effectStyle"));let p=I(e,"fillStyleLst");p&&(a=p.children);let m=I(e,"bgFillStyleLst");m&&(o=m.children);let h=I(e,"lnStyleLst");h&&(s=M(h,"ln"))}return{scheme:t,major:n,minor:r,effectStyles:i,fillStyles:a,bgFillStyles:o,lineStyles:s}}
/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
function Ce(e){let t=e.length;for(;--t>=0;)e[t]=0}const we=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Te=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),Ee=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),De=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Oe=Array(576);Ce(Oe);const ke=Array(60);Ce(ke);const Ae=Array(512);Ce(Ae);const je=Array(256);Ce(je);const Me=Array(29);Ce(Me);const Ne=Array(30);Ce(Ne);function Pe(e,t,n,r,i){this.static_tree=e,this.extra_bits=t,this.extra_base=n,this.elems=r,this.max_length=i,this.has_stree=e&&e.length}let Fe,Ie,Le;function Re(e,t){this.dyn_tree=e,this.max_code=0,this.stat_desc=t}const ze=e=>e<256?Ae[e]:Ae[256+(e>>>7)],Be=(e,t)=>{e.pending_buf[e.pending++]=t&255,e.pending_buf[e.pending++]=t>>>8&255},Ve=(e,t,n)=>{e.bi_valid>16-n?(e.bi_buf|=t<<e.bi_valid&65535,Be(e,e.bi_buf),e.bi_buf=t>>16-e.bi_valid,e.bi_valid+=n-16):(e.bi_buf|=t<<e.bi_valid&65535,e.bi_valid+=n)},He=(e,t,n)=>{Ve(e,n[t*2],n[t*2+1])},Ue=(e,t)=>{let n=0;do n|=e&1,e>>>=1,n<<=1;while(--t>0);return n>>>1},We=e=>{e.bi_valid===16?(Be(e,e.bi_buf),e.bi_buf=0,e.bi_valid=0):e.bi_valid>=8&&(e.pending_buf[e.pending++]=e.bi_buf&255,e.bi_buf>>=8,e.bi_valid-=8)},Ge=(e,t)=>{let n=t.dyn_tree,r=t.max_code,i=t.stat_desc.static_tree,a=t.stat_desc.has_stree,o=t.stat_desc.extra_bits,s=t.stat_desc.extra_base,c=t.stat_desc.max_length,l,u,d,f,p,m,h=0;for(f=0;f<=15;f++)e.bl_count[f]=0;for(n[e.heap[e.heap_max]*2+1]=0,l=e.heap_max+1;l<573;l++)u=e.heap[l],f=n[n[u*2+1]*2+1]+1,f>c&&(f=c,h++),n[u*2+1]=f,!(u>r)&&(e.bl_count[f]++,p=0,u>=s&&(p=o[u-s]),m=n[u*2],e.opt_len+=m*(f+p),a&&(e.static_len+=m*(i[u*2+1]+p)));if(h!==0){do{for(f=c-1;e.bl_count[f]===0;)f--;e.bl_count[f]--,e.bl_count[f+1]+=2,e.bl_count[c]--,h-=2}while(h>0);for(f=c;f!==0;f--)for(u=e.bl_count[f];u!==0;)d=e.heap[--l],!(d>r)&&(n[d*2+1]!==f&&(e.opt_len+=(f-n[d*2+1])*n[d*2],n[d*2+1]=f),u--)}},Ke=(e,t,n)=>{let r=Array(16),i=0,a,o;for(a=1;a<=15;a++)i=i+n[a-1]<<1,r[a]=i;for(o=0;o<=t;o++){let t=e[o*2+1];t!==0&&(e[o*2]=Ue(r[t]++,t))}},qe=()=>{let e,t,n,r,i,a=Array(16);for(n=0,r=0;r<28;r++)for(Me[r]=n,e=0;e<1<<we[r];e++)je[n++]=r;for(je[n-1]=r,i=0,r=0;r<16;r++)for(Ne[r]=i,e=0;e<1<<Te[r];e++)Ae[i++]=r;for(i>>=7;r<30;r++)for(Ne[r]=i<<7,e=0;e<1<<Te[r]-7;e++)Ae[256+i++]=r;for(t=0;t<=15;t++)a[t]=0;for(e=0;e<=143;)Oe[e*2+1]=8,e++,a[8]++;for(;e<=255;)Oe[e*2+1]=9,e++,a[9]++;for(;e<=279;)Oe[e*2+1]=7,e++,a[7]++;for(;e<=287;)Oe[e*2+1]=8,e++,a[8]++;for(Ke(Oe,287,a),e=0;e<30;e++)ke[e*2+1]=5,ke[e*2]=Ue(e,5);Fe=new Pe(Oe,we,257,286,15),Ie=new Pe(ke,Te,0,30,15),Le=new Pe([],Ee,0,19,7)},Je=e=>{let t;for(t=0;t<286;t++)e.dyn_ltree[t*2]=0;for(t=0;t<30;t++)e.dyn_dtree[t*2]=0;for(t=0;t<19;t++)e.bl_tree[t*2]=0;e.dyn_ltree[512]=1,e.opt_len=e.static_len=0,e.sym_next=e.matches=0},Ye=e=>{e.bi_valid>8?Be(e,e.bi_buf):e.bi_valid>0&&(e.pending_buf[e.pending++]=e.bi_buf),e.bi_buf=0,e.bi_valid=0},Xe=(e,t,n,r)=>{let i=t*2,a=n*2;return e[i]<e[a]||e[i]===e[a]&&r[t]<=r[n]},Ze=(e,t,n)=>{let r=e.heap[n],i=n<<1;for(;i<=e.heap_len&&(i<e.heap_len&&Xe(t,e.heap[i+1],e.heap[i],e.depth)&&i++,!Xe(t,r,e.heap[i],e.depth));)e.heap[n]=e.heap[i],n=i,i<<=1;e.heap[n]=r},Qe=(e,t,n)=>{let r,i,a=0,o,s;if(e.sym_next!==0)do r=e.pending_buf[e.sym_buf+a++]&255,r+=(e.pending_buf[e.sym_buf+a++]&255)<<8,i=e.pending_buf[e.sym_buf+a++],r===0?He(e,i,t):(o=je[i],He(e,o+256+1,t),s=we[o],s!==0&&(i-=Me[o],Ve(e,i,s)),r--,o=ze(r),He(e,o,n),s=Te[o],s!==0&&(r-=Ne[o],Ve(e,r,s)));while(a<e.sym_next);He(e,256,t)},$e=(e,t)=>{let n=t.dyn_tree,r=t.stat_desc.static_tree,i=t.stat_desc.has_stree,a=t.stat_desc.elems,o,s,c=-1,l;for(e.heap_len=0,e.heap_max=573,o=0;o<a;o++)n[o*2]===0?n[o*2+1]=0:(e.heap[++e.heap_len]=c=o,e.depth[o]=0);for(;e.heap_len<2;)l=e.heap[++e.heap_len]=c<2?++c:0,n[l*2]=1,e.depth[l]=0,e.opt_len--,i&&(e.static_len-=r[l*2+1]);for(t.max_code=c,o=e.heap_len>>1;o>=1;o--)Ze(e,n,o);l=a;do o=e.heap[1],e.heap[1]=e.heap[e.heap_len--],Ze(e,n,1),s=e.heap[1],e.heap[--e.heap_max]=o,e.heap[--e.heap_max]=s,n[l*2]=n[o*2]+n[s*2],e.depth[l]=(e.depth[o]>=e.depth[s]?e.depth[o]:e.depth[s])+1,n[o*2+1]=n[s*2+1]=l,e.heap[1]=l++,Ze(e,n,1);while(e.heap_len>=2);e.heap[--e.heap_max]=e.heap[1],Ge(e,t),Ke(n,c,e.bl_count)},et=(e,t,n)=>{let r,i=-1,a,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),t[(n+1)*2+1]=65535,r=0;r<=n;r++)a=o,o=t[(r+1)*2+1],!(++s<c&&a===o)&&(s<l?e.bl_tree[a*2]+=s:a===0?s<=10?e.bl_tree[34]++:e.bl_tree[36]++:(a!==i&&e.bl_tree[a*2]++,e.bl_tree[32]++),s=0,i=a,o===0?(c=138,l=3):a===o?(c=6,l=3):(c=7,l=4))},tt=(e,t,n)=>{let r,i=-1,a,o=t[1],s=0,c=7,l=4;for(o===0&&(c=138,l=3),r=0;r<=n;r++)if(a=o,o=t[(r+1)*2+1],!(++s<c&&a===o)){if(s<l)do He(e,a,e.bl_tree);while(--s!==0);else a===0?s<=10?(He(e,17,e.bl_tree),Ve(e,s-3,3)):(He(e,18,e.bl_tree),Ve(e,s-11,7)):(a!==i&&(He(e,a,e.bl_tree),s--),He(e,16,e.bl_tree),Ve(e,s-3,2));s=0,i=a,o===0?(c=138,l=3):a===o?(c=6,l=3):(c=7,l=4)}},nt=e=>{let t;for(et(e,e.dyn_ltree,e.l_desc.max_code),et(e,e.dyn_dtree,e.d_desc.max_code),$e(e,e.bl_desc),t=18;t>=3&&e.bl_tree[De[t]*2+1]===0;t--);return e.opt_len+=3*(t+1)+5+5+4,t},rt=(e,t,n,r)=>{let i;for(Ve(e,t-257,5),Ve(e,n-1,5),Ve(e,r-4,4),i=0;i<r;i++)Ve(e,e.bl_tree[De[i]*2+1],3);tt(e,e.dyn_ltree,t-1),tt(e,e.dyn_dtree,n-1)},it=e=>{let t=4093624447,n;for(n=0;n<=31;n++,t>>>=1)if(t&1&&e.dyn_ltree[n*2]!==0)return 0;if(e.dyn_ltree[18]!==0||e.dyn_ltree[20]!==0||e.dyn_ltree[26]!==0)return 1;for(n=32;n<256;n++)if(e.dyn_ltree[n*2]!==0)return 1;return 0};let at=!1;const ot=e=>{at||=(qe(),!0),e.l_desc=new Re(e.dyn_ltree,Fe),e.d_desc=new Re(e.dyn_dtree,Ie),e.bl_desc=new Re(e.bl_tree,Le),e.bi_buf=0,e.bi_valid=0,Je(e)},st=(e,t,n,r)=>{Ve(e,0+ +!!r,3),Ye(e),Be(e,n),Be(e,~n),n&&e.pending_buf.set(e.window.subarray(t,t+n),e.pending),e.pending+=n};var ct={_tr_init:ot,_tr_stored_block:st,_tr_flush_block:(e,t,n,r)=>{let i,a,o=0;e.level>0?(e.strm.data_type===2&&(e.strm.data_type=it(e)),$e(e,e.l_desc),$e(e,e.d_desc),o=nt(e),i=e.opt_len+3+7>>>3,a=e.static_len+3+7>>>3,a<=i&&(i=a)):i=a=n+5,n+4<=i&&t!==-1?st(e,t,n,r):e.strategy===4||a===i?(Ve(e,2+ +!!r,3),Qe(e,Oe,ke)):(Ve(e,4+ +!!r,3),rt(e,e.l_desc.max_code+1,e.d_desc.max_code+1,o+1),Qe(e,e.dyn_ltree,e.dyn_dtree)),Je(e),r&&Ye(e)},_tr_tally:(e,t,n)=>(e.pending_buf[e.sym_buf+e.sym_next++]=t,e.pending_buf[e.sym_buf+e.sym_next++]=t>>8,e.pending_buf[e.sym_buf+e.sym_next++]=n,t===0?e.dyn_ltree[n*2]++:(e.matches++,t--,e.dyn_ltree[(je[n]+256+1)*2]++,e.dyn_dtree[ze(t)*2]++),e.sym_next===e.sym_end),_tr_align:e=>{Ve(e,2,3),He(e,256,Oe),We(e)}},lt=(e,t,n,r)=>{let i=e&65535|0,a=e>>>16&65535|0,o=0;for(;n!==0;){o=n>2e3?2e3:n,n-=o;do i=i+t[r++]|0,a=a+i|0;while(--o);i%=65521,a%=65521}return i|a<<16|0};const ut=new Uint32Array((()=>{let e,t=[];for(var n=0;n<256;n++){e=n;for(var r=0;r<8;r++)e=e&1?3988292384^e>>>1:e>>>1;t[n]=e}return t})());var dt=(e,t,n,r)=>{let i=ut,a=r+n;e^=-1;for(let n=r;n<a;n++)e=e>>>8^i[(e^t[n])&255];return e^-1},ft={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},pt={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:mt,_tr_stored_block:ht,_tr_flush_block:gt,_tr_tally:_t,_tr_align:vt}=ct,{Z_NO_FLUSH:yt,Z_PARTIAL_FLUSH:bt,Z_FULL_FLUSH:xt,Z_FINISH:St,Z_BLOCK:Ct,Z_OK:wt,Z_STREAM_END:Tt,Z_STREAM_ERROR:Et,Z_DATA_ERROR:Dt,Z_BUF_ERROR:Ot,Z_DEFAULT_COMPRESSION:kt,Z_FILTERED:At,Z_HUFFMAN_ONLY:jt,Z_RLE:Mt,Z_FIXED:Nt,Z_DEFAULT_STRATEGY:Pt,Z_UNKNOWN:Ft,Z_DEFLATED:It}=pt,Lt=(e,t)=>(e.msg=ft[t],t),Rt=e=>e*2-(e>4?9:0),zt=e=>{let t=e.length;for(;--t>=0;)e[t]=0},Bt=e=>{let t,n,r,i=e.w_size;t=e.hash_size,r=t;do n=e.head[--r],e.head[r]=n>=i?n-i:0;while(--t);t=i,r=t;do n=e.prev[--r],e.prev[r]=n>=i?n-i:0;while(--t)};let Vt=(e,t,n)=>(t<<e.hash_shift^n)&e.hash_mask;const Ht=(e,t)=>{let n;if(e.legacy_hash)n=e.ins_h=Vt(e,e.ins_h,e.window[t+3-1]);else{let r=e.window,i=r[t]|r[t+1]<<8|r[t+2]<<16|r[t+3]<<24;n=e.ins_h=Math.imul(i,66521)+66521>>>16&e.hash_mask}let r=e.prev[t&e.w_mask]=e.head[n];return e.head[n]=t,r},Ut=e=>{let t=e.state,n=t.pending;n>e.avail_out&&(n=e.avail_out),n!==0&&(e.output.set(t.pending_buf.subarray(t.pending_out,t.pending_out+n),e.next_out),e.next_out+=n,t.pending_out+=n,e.total_out+=n,e.avail_out-=n,t.pending-=n,t.pending===0&&(t.pending_out=0))},Wt=(e,t)=>{gt(e,e.block_start>=0?e.block_start:-1,e.strstart-e.block_start,t),e.block_start=e.strstart,Ut(e.strm)},z=(e,t)=>{e.pending_buf[e.pending++]=t},Gt=(e,t)=>{e.pending_buf[e.pending++]=t>>>8&255,e.pending_buf[e.pending++]=t&255},Kt=(e,t,n,r)=>{let i=e.avail_in;return i>r&&(i=r),i===0?0:(e.avail_in-=i,t.set(e.input.subarray(e.next_in,e.next_in+i),n),e.state.wrap===1?e.adler=lt(e.adler,t,i,n):e.state.wrap===2&&(e.adler=dt(e.adler,t,i,n)),e.next_in+=i,e.total_in+=i,i)},qt=(e,t)=>{let n=e.max_chain_length,r=e.strstart,i,a,o=e.prev_length,s=e.nice_match,c=e.strstart>e.w_size-262?e.strstart-(e.w_size-262):0,l=e.window,u=e.w_mask,d=e.prev,f=e.strstart+258,p=l[r+o-1],m=l[r+o];e.prev_length>=e.good_match&&(n>>=2),s>e.lookahead&&(s=e.lookahead);do if(i=t,l[i+o]===m&&l[i+o-1]===p&&l[i]===l[r]&&l[++i]===l[r+1]){r+=2,i++;do;while(l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&l[++r]===l[++i]&&r<f);if(a=258-(f-r),r=f-258,a>o){if(e.match_start=t,o=a,a>=s)break;p=l[r+o-1],m=l[r+o]}}while((t=d[t&u])>c&&--n!==0);return o<=e.lookahead?o:e.lookahead},Jt=e=>{let t=e.w_size,n,r,i;do{if(r=e.window_size-e.lookahead-e.strstart,e.strstart>=t+(t-262)&&(e.window.set(e.window.subarray(t,t+t-r),0),e.match_start-=t,e.strstart-=t,e.block_start-=t,e.insert>e.strstart&&(e.insert=e.strstart),Bt(e),r+=t),e.strm.avail_in===0)break;if(n=Kt(e.strm,e.window,e.strstart+e.lookahead,r),e.lookahead+=n,!e.legacy_hash){if(e.lookahead+e.insert>3)for(i=e.strstart-e.insert;e.insert&&(Ht(e,i),i++,e.insert--,!(e.lookahead+e.insert<=3)););}else if(e.lookahead+e.insert>=3)for(i=e.strstart-e.insert,e.ins_h=e.window[i],e.ins_h=Vt(e,e.ins_h,e.window[i+1]);e.insert&&(Ht(e,i),i++,e.insert--,!(e.lookahead+e.insert<3)););}while(e.lookahead<262&&e.strm.avail_in!==0)},Yt=(e,t)=>{let n=e.pending_buf_size-5>e.w_size?e.w_size:e.pending_buf_size-5,r,i,a,o=0,s=e.strm.avail_in;do{if(r=65535,a=e.bi_valid+42>>3,e.strm.avail_out<a||(a=e.strm.avail_out-a,i=e.strstart-e.block_start,r>i+e.strm.avail_in&&(r=i+e.strm.avail_in),r>a&&(r=a),r<n&&(r===0&&t!==St||t===yt||r!==i+e.strm.avail_in)))break;o=+(t===St&&r===i+e.strm.avail_in),ht(e,0,0,o),e.pending_buf[e.pending-4]=r,e.pending_buf[e.pending-3]=r>>8,e.pending_buf[e.pending-2]=~r,e.pending_buf[e.pending-1]=~r>>8,Ut(e.strm),i&&(i>r&&(i=r),e.strm.output.set(e.window.subarray(e.block_start,e.block_start+i),e.strm.next_out),e.strm.next_out+=i,e.strm.avail_out-=i,e.strm.total_out+=i,e.block_start+=i,r-=i),r&&(Kt(e.strm,e.strm.output,e.strm.next_out,r),e.strm.next_out+=r,e.strm.avail_out-=r,e.strm.total_out+=r)}while(o===0);return s-=e.strm.avail_in,s&&(s>=e.w_size?(e.matches=2,e.window.set(e.strm.input.subarray(e.strm.next_in-e.w_size,e.strm.next_in),0),e.strstart=e.w_size,e.insert=e.strstart):(e.window_size-e.strstart<=s&&(e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,e.insert>e.strstart&&(e.insert=e.strstart)),e.window.set(e.strm.input.subarray(e.strm.next_in-s,e.strm.next_in),e.strstart),e.strstart+=s,e.insert+=s>e.w_size-e.insert?e.w_size-e.insert:s),e.block_start=e.strstart),e.high_water<e.strstart&&(e.high_water=e.strstart),o?4:t!==yt&&t!==St&&e.strm.avail_in===0&&e.strstart===e.block_start?2:(a=e.window_size-e.strstart,e.strm.avail_in>a&&e.block_start>=e.w_size&&(e.block_start-=e.w_size,e.strstart-=e.w_size,e.window.set(e.window.subarray(e.w_size,e.w_size+e.strstart),0),e.matches<2&&e.matches++,a+=e.w_size,e.insert>e.strstart&&(e.insert=e.strstart)),a>e.strm.avail_in&&(a=e.strm.avail_in),a&&(Kt(e.strm,e.window,e.strstart,a),e.strstart+=a,e.insert+=a>e.w_size-e.insert?e.w_size-e.insert:a),e.high_water<e.strstart&&(e.high_water=e.strstart),a=e.bi_valid+42>>3,a=e.pending_buf_size-a>65535?65535:e.pending_buf_size-a,n=a>e.w_size?e.w_size:a,i=e.strstart-e.block_start,(i>=n||(i||t===St)&&t!==yt&&e.strm.avail_in===0&&i<=a)&&(r=i>a?a:i,o=+(t===St&&e.strm.avail_in===0&&r===i),ht(e,e.block_start,r,o),e.block_start+=r,Ut(e.strm)),o?3:1)},Xt=(e,t)=>{let n,r;for(;;){if(e.lookahead<262){if(Jt(e),e.lookahead<262&&t===yt)return 1;if(e.lookahead===0)break}if(n=0,e.lookahead>=3&&(n=Ht(e,e.strstart)),n!==0&&e.strstart-n<=e.w_size-262&&(e.match_length=qt(e,n)),e.match_length>=3){if(r=_t(e,e.strstart-e.match_start,e.match_length-3),e.lookahead-=e.match_length,e.match_length<=e.max_lazy_match&&e.lookahead>=3){e.match_length--;do e.strstart++,n=Ht(e,e.strstart);while(--e.match_length!==0);e.strstart++}else e.strstart+=e.match_length,e.match_length=0,e.legacy_hash&&(e.ins_h=e.window[e.strstart],e.ins_h=Vt(e,e.ins_h,e.window[e.strstart+1]))}else r=_t(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++;if(r&&(Wt(e,!1),e.strm.avail_out===0))return 1}return e.insert=e.strstart<2?e.strstart:2,t===St?(Wt(e,!0),e.strm.avail_out===0?3:4):e.sym_next&&(Wt(e,!1),e.strm.avail_out===0)?1:2},Zt=(e,t)=>{let n,r,i;for(;;){if(e.lookahead<262){if(Jt(e),e.lookahead<262&&t===yt)return 1;if(e.lookahead===0)break}if(n=0,e.lookahead>=3&&(n=Ht(e,e.strstart)),e.prev_length=e.match_length,e.prev_match=e.match_start,e.match_length=2,n!==0&&e.prev_length<e.max_lazy_match&&e.strstart-n<=e.w_size-262&&(e.match_length=qt(e,n),e.match_length<=5&&(e.strategy===At||e.match_length===3&&e.strstart-e.match_start>4096)&&(e.match_length=2)),e.prev_length>=3&&e.match_length<=e.prev_length){i=e.strstart+e.lookahead-3,r=_t(e,e.strstart-1-e.prev_match,e.prev_length-3),e.lookahead-=e.prev_length-1,e.prev_length-=2;do++e.strstart<=i&&(n=Ht(e,e.strstart));while(--e.prev_length!==0);if(e.match_available=0,e.match_length=2,e.strstart++,r&&(Wt(e,!1),e.strm.avail_out===0))return 1}else if(e.match_available){if(r=_t(e,0,e.window[e.strstart-1]),r&&Wt(e,!1),e.strstart++,e.lookahead--,e.strm.avail_out===0)return 1}else e.match_available=1,e.strstart++,e.lookahead--}return e.match_available&&=(r=_t(e,0,e.window[e.strstart-1]),0),e.insert=e.strstart<2?e.strstart:2,t===St?(Wt(e,!0),e.strm.avail_out===0?3:4):e.sym_next&&(Wt(e,!1),e.strm.avail_out===0)?1:2},Qt=(e,t)=>{let n,r,i,a,o=e.window;for(;;){if(e.lookahead<=258){if(Jt(e),e.lookahead<=258&&t===yt)return 1;if(e.lookahead===0)break}if(e.match_length=0,e.lookahead>=3&&e.strstart>0&&(i=e.strstart-1,r=o[i],r===o[++i]&&r===o[++i]&&r===o[++i])){a=e.strstart+258;do;while(r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&r===o[++i]&&i<a);e.match_length=258-(a-i),e.match_length>e.lookahead&&(e.match_length=e.lookahead)}if(e.match_length>=3?(n=_t(e,1,e.match_length-3),e.lookahead-=e.match_length,e.strstart+=e.match_length,e.match_length=0):(n=_t(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++),n&&(Wt(e,!1),e.strm.avail_out===0))return 1}return e.insert=0,t===St?(Wt(e,!0),e.strm.avail_out===0?3:4):e.sym_next&&(Wt(e,!1),e.strm.avail_out===0)?1:2},$t=(e,t)=>{let n;for(;;){if(e.lookahead===0&&(Jt(e),e.lookahead===0)){if(t===yt)return 1;break}if(e.match_length=0,n=_t(e,0,e.window[e.strstart]),e.lookahead--,e.strstart++,n&&(Wt(e,!1),e.strm.avail_out===0))return 1}return e.insert=0,t===St?(Wt(e,!0),e.strm.avail_out===0?3:4):e.sym_next&&(Wt(e,!1),e.strm.avail_out===0)?1:2};function en(e,t,n,r,i){this.good_length=e,this.max_lazy=t,this.nice_length=n,this.max_chain=r,this.func=i}const tn=[new en(0,0,0,0,Yt),new en(4,4,8,4,Xt),new en(4,5,16,8,Xt),new en(4,6,32,32,Xt),new en(4,4,16,16,Zt),new en(8,16,32,32,Zt),new en(8,16,128,128,Zt),new en(8,32,128,256,Zt),new en(32,128,258,1024,Zt),new en(32,258,258,4096,Zt)],nn=e=>{e.window_size=2*e.w_size,zt(e.head),e.max_lazy_match=tn[e.level].max_lazy,e.good_match=tn[e.level].good_length,e.nice_match=tn[e.level].nice_length,e.max_chain_length=tn[e.level].max_chain,e.strstart=0,e.block_start=0,e.lookahead=0,e.insert=0,e.match_length=e.prev_length=2,e.match_available=0,e.ins_h=0};function rn(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=It,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(1146),this.dyn_dtree=new Uint16Array(122),this.bl_tree=new Uint16Array(78),zt(this.dyn_ltree),zt(this.dyn_dtree),zt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(16),this.heap=new Uint16Array(573),zt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(573),zt(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const an=e=>{if(!e)return 1;let t=e.state;return+(!t||t.strm!==e||t.status!==42&&t.status!==57&&t.status!==69&&t.status!==73&&t.status!==91&&t.status!==103&&t.status!==113&&t.status!==666)},on=e=>{if(an(e))return Lt(e,Et);e.total_in=e.total_out=0,e.data_type=Ft;let t=e.state;return t.pending=0,t.pending_out=0,t.wrap<0&&(t.wrap=-t.wrap),t.status=t.wrap===2?57:t.wrap?42:113,e.adler=t.wrap===2?0:1,t.last_flush=-2,mt(t),wt},sn=e=>{let t=on(e);return t===wt&&nn(e.state),t},cn=(e,t)=>an(e)||e.state.wrap!==2?Et:(e.state.gzhead=t,wt),ln=(e,t,n,r,i,a,o)=>{if(!e)return Et;let s=1;if(t===kt&&(t=6),r<0?(s=0,r=-r):r>15&&(s=2,r-=16),i<1||i>9||n!==It||r<8||r>15||t<0||t>9||a<0||a>Nt||r===8&&s!==1)return Lt(e,Et);r===8&&(r=9);let c=new rn;return e.state=c,c.strm=e,c.status=42,c.wrap=s,c.gzhead=null,c.w_bits=r,c.w_size=1<<c.w_bits,c.w_mask=c.w_size-1,c.legacy_hash=+!!o,c.hash_bits=i+7,!c.legacy_hash&&c.hash_bits<15&&(c.hash_bits=15),c.hash_size=1<<c.hash_bits,c.hash_mask=c.hash_size-1,c.hash_shift=~~((c.hash_bits+3-1)/3),c.window=new Uint8Array(c.w_size*2),c.head=new Uint16Array(c.hash_size),c.prev=new Uint16Array(c.w_size),c.lit_bufsize=1<<i+6,c.pending_buf_size=c.lit_bufsize*4,c.pending_buf=new Uint8Array(c.pending_buf_size),c.sym_buf=c.lit_bufsize,c.sym_end=(c.lit_bufsize-1)*3,c.level=t,c.strategy=a,c.method=n,sn(e)};var un={deflateInit:(e,t)=>ln(e,t,It,15,8,Pt),deflateInit2:ln,deflateReset:sn,deflateResetKeep:on,deflateSetHeader:cn,deflate:(e,t)=>{if(an(e)||t>Ct||t<0)return e?Lt(e,Et):Et;let n=e.state;if(!e.output||e.avail_in!==0&&!e.input||n.status===666&&t!==St)return Lt(e,e.avail_out===0?Ot:Et);let r=n.last_flush;if(n.last_flush=t,n.pending!==0){if(Ut(e),e.avail_out===0)return n.last_flush=-1,wt}else if(e.avail_in===0&&Rt(t)<=Rt(r)&&t!==St)return Lt(e,Ot);if(n.status===666&&e.avail_in!==0)return Lt(e,Ot);if(n.status===42&&n.wrap===0&&(n.status=113),n.status===42){let t=It+(n.w_bits-8<<4)<<8,r=-1;if(r=n.strategy>=jt||n.level<2?0:n.level<6?1:n.level===6?2:3,t|=r<<6,n.strstart!==0&&(t|=32),t+=31-t%31,Gt(n,t),n.strstart!==0&&(Gt(n,e.adler>>>16),Gt(n,e.adler&65535)),e.adler=1,n.status=113,Ut(e),n.pending!==0)return n.last_flush=-1,wt}if(n.status===57){if(e.adler=0,z(n,31),z(n,139),z(n,8),n.gzhead)z(n,+!!n.gzhead.text+(n.gzhead.hcrc?2:0)+(n.gzhead.extra?4:0)+(n.gzhead.name?8:0)+(n.gzhead.comment?16:0)),z(n,n.gzhead.time&255),z(n,n.gzhead.time>>8&255),z(n,n.gzhead.time>>16&255),z(n,n.gzhead.time>>24&255),z(n,n.level===9?2:n.strategy>=jt||n.level<2?4:0),z(n,n.gzhead.os&255),n.gzhead.extra&&n.gzhead.extra.length&&(z(n,n.gzhead.extra.length&255),z(n,n.gzhead.extra.length>>8&255)),n.gzhead.hcrc&&(e.adler=dt(e.adler,n.pending_buf,n.pending,0)),n.gzindex=0,n.status=69;else if(z(n,0),z(n,0),z(n,0),z(n,0),z(n,0),z(n,n.level===9?2:n.strategy>=jt||n.level<2?4:0),z(n,3),n.status=113,Ut(e),n.pending!==0)return n.last_flush=-1,wt}if(n.status===69){if(n.gzhead.extra){let t=n.pending,r=(n.gzhead.extra.length&65535)-n.gzindex;for(;n.pending+r>n.pending_buf_size;){let i=n.pending_buf_size-n.pending;if(n.pending_buf.set(n.gzhead.extra.subarray(n.gzindex,n.gzindex+i),n.pending),n.pending=n.pending_buf_size,n.gzhead.hcrc&&n.pending>t&&(e.adler=dt(e.adler,n.pending_buf,n.pending-t,t)),n.gzindex+=i,Ut(e),n.pending!==0)return n.last_flush=-1,wt;t=0,r-=i}let i=new Uint8Array(n.gzhead.extra);n.pending_buf.set(i.subarray(n.gzindex,n.gzindex+r),n.pending),n.pending+=r,n.gzhead.hcrc&&n.pending>t&&(e.adler=dt(e.adler,n.pending_buf,n.pending-t,t)),n.gzindex=0}n.status=73}if(n.status===73){if(n.gzhead.name){let t=n.pending,r;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>t&&(e.adler=dt(e.adler,n.pending_buf,n.pending-t,t)),Ut(e),n.pending!==0)return n.last_flush=-1,wt;t=0}r=n.gzindex<n.gzhead.name.length?n.gzhead.name.charCodeAt(n.gzindex++)&255:0,z(n,r)}while(r!==0);n.gzhead.hcrc&&n.pending>t&&(e.adler=dt(e.adler,n.pending_buf,n.pending-t,t)),n.gzindex=0}n.status=91}if(n.status===91){if(n.gzhead.comment){let t=n.pending,r;do{if(n.pending===n.pending_buf_size){if(n.gzhead.hcrc&&n.pending>t&&(e.adler=dt(e.adler,n.pending_buf,n.pending-t,t)),Ut(e),n.pending!==0)return n.last_flush=-1,wt;t=0}r=n.gzindex<n.gzhead.comment.length?n.gzhead.comment.charCodeAt(n.gzindex++)&255:0,z(n,r)}while(r!==0);n.gzhead.hcrc&&n.pending>t&&(e.adler=dt(e.adler,n.pending_buf,n.pending-t,t))}n.status=103}if(n.status===103){if(n.gzhead.hcrc){if(n.pending+2>n.pending_buf_size&&(Ut(e),n.pending!==0))return n.last_flush=-1,wt;z(n,e.adler&255),z(n,e.adler>>8&255),e.adler=0}if(n.status=113,Ut(e),n.pending!==0)return n.last_flush=-1,wt}if(e.avail_in!==0||n.lookahead!==0||t!==yt&&n.status!==666){let r=n.level===0?Yt(n,t):n.strategy===jt?$t(n,t):n.strategy===Mt?Qt(n,t):tn[n.level].func(n,t);if((r===3||r===4)&&(n.status=666),r===1||r===3)return e.avail_out===0&&(n.last_flush=-1),wt;if(r===2&&(t===bt?vt(n):t!==Ct&&(ht(n,0,0,!1),t===xt&&(zt(n.head),n.lookahead===0&&(n.strstart=0,n.block_start=0,n.insert=0))),Ut(e),e.avail_out===0))return n.last_flush=-1,wt}return t===St?n.wrap<=0?Tt:(n.wrap===2?(z(n,e.adler&255),z(n,e.adler>>8&255),z(n,e.adler>>16&255),z(n,e.adler>>24&255),z(n,e.total_in&255),z(n,e.total_in>>8&255),z(n,e.total_in>>16&255),z(n,e.total_in>>24&255)):(Gt(n,e.adler>>>16),Gt(n,e.adler&65535)),Ut(e),n.wrap>0&&(n.wrap=-n.wrap),n.pending===0?Tt:wt):wt},deflateEnd:e=>{if(an(e))return Et;let t=e.state.status;return e.state=null,t===113?Lt(e,Dt):wt},deflateSetDictionary:(e,t)=>{let n=t.length;if(an(e))return Et;let r=e.state,i=r.wrap;if(i===2||i===1&&r.status!==42||r.lookahead)return Et;if(i===1&&(e.adler=lt(e.adler,t,n,0)),r.wrap=0,n>=r.w_size){i===0&&(zt(r.head),r.strstart=0,r.block_start=0,r.insert=0);let e=new Uint8Array(r.w_size);e.set(t.subarray(n-r.w_size,n),0),t=e,n=r.w_size}let a=e.avail_in,o=e.next_in,s=e.input;for(e.avail_in=n,e.next_in=0,e.input=t,Jt(r);r.lookahead>=3;){let e=r.strstart,t=r.lookahead-2;do Ht(r,e),e++;while(--t);r.strstart=e,r.lookahead=2,Jt(r)}return r.strstart+=r.lookahead,r.block_start=r.strstart,r.insert=r.lookahead,r.lookahead=0,r.match_length=r.prev_length=2,r.match_available=0,e.next_in=o,e.input=s,e.avail_in=a,r.wrap=i,wt},deflateInfo:"pako deflate (from Nodeca project)"};const dn=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var fn={assign:function(e){let t=Array.prototype.slice.call(arguments,1);for(;t.length;){let n=t.shift();if(n){if(typeof n!="object")throw TypeError(n+"must be non-object");for(let t in n)dn(n,t)&&(e[t]=n[t])}}return e},flattenChunks:e=>{let t=0;for(let n=0,r=e.length;n<r;n++)t+=e[n].length;let n=new Uint8Array(t);for(let t=0,r=0,i=e.length;t<i;t++){let i=e[t];n.set(i,r),r+=i.length}return n}};let pn=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{pn=!1}const mn=new Uint8Array(256);for(let e=0;e<256;e++)mn[e]=e>=252?6:e>=248?5:e>=240?4:e>=224?3:e>=192?2:1;mn[254]=mn[255]=1;var hn=e=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(e);let t,n,r,i,a,o=e.length,s=0;for(i=0;i<o;i++)n=e.charCodeAt(i),(n&64512)==55296&&i+1<o&&(r=e.charCodeAt(i+1),(r&64512)==56320&&(n=65536+(n-55296<<10)+(r-56320),i++)),s+=n<128?1:n<2048?2:n<65536?3:4;for(t=new Uint8Array(s),a=0,i=0;a<s;i++)n=e.charCodeAt(i),(n&64512)==55296&&i+1<o&&(r=e.charCodeAt(i+1),(r&64512)==56320&&(n=65536+(n-55296<<10)+(r-56320),i++)),n<128?t[a++]=n:n<2048?(t[a++]=192|n>>>6,t[a++]=128|n&63):n<65536?(t[a++]=224|n>>>12,t[a++]=128|n>>>6&63,t[a++]=128|n&63):(t[a++]=240|n>>>18,t[a++]=128|n>>>12&63,t[a++]=128|n>>>6&63,t[a++]=128|n&63);return t};const gn=(e,t)=>{if(t<65534&&e.subarray&&pn)return String.fromCharCode.apply(null,e.length===t?e:e.subarray(0,t));let n="";for(let r=0;r<t;r++)n+=String.fromCharCode(e[r]);return n};var _n={string2buf:hn,buf2string:(e,t)=>{let n=t||e.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(e.subarray(0,t));let r,i,a=Array(n*2);for(i=0,r=0;r<n;){let t=e[r++];if(t<128){a[i++]=t;continue}let o=mn[t];if(o>4){a[i++]=65533,r+=o-1;continue}for(t&=o===2?31:o===3?15:7;o>1&&r<n;)t=t<<6|e[r++]&63,o--;if(o>1){a[i++]=65533;continue}t<65536?a[i++]=t:(t-=65536,a[i++]=55296|t>>10&1023,a[i++]=56320|t&1023)}return gn(a,i)},utf8border:(e,t)=>{t||=e.length,t>e.length&&(t=e.length);let n=t-1;for(;n>=0&&(e[n]&192)==128;)n--;return n<0||n===0?t:n+mn[e[n]]>t?n:t}};function vn(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var yn=vn;const bn=Object.prototype.toString,{Z_NO_FLUSH:xn,Z_SYNC_FLUSH:Sn,Z_FULL_FLUSH:Cn,Z_FINISH:wn,Z_OK:Tn,Z_STREAM_END:En,Z_DEFAULT_COMPRESSION:Dn,Z_DEFAULT_STRATEGY:On,Z_DEFLATED:kn}=pt,An={level:Dn,method:kn,chunkSize:16384,windowBits:15,memLevel:8,strategy:On,legacyHash:!0};function jn(e){this.options=fn.assign({},An,e||{});let t=this.options;t.raw&&t.windowBits>0?t.windowBits=-t.windowBits:t.gzip&&t.windowBits>0&&t.windowBits<16&&(t.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new yn,this.strm.avail_out=0;let n=un.deflateInit2(this.strm,t.level,t.method,t.windowBits,t.memLevel,t.strategy,t.legacyHash);if(n!==Tn)throw Error(ft[n]);if(t.header&&un.deflateSetHeader(this.strm,t.header),t.dictionary){let e;if(e=typeof t.dictionary=="string"?_n.string2buf(t.dictionary):bn.call(t.dictionary)==="[object ArrayBuffer]"?new Uint8Array(t.dictionary):t.dictionary,n=un.deflateSetDictionary(this.strm,e),n!==Tn)throw Error(ft[n]);this._dict_set=!0}}jn.prototype.push=function(e,t){let n=this.strm,r=this.options.chunkSize,i,a;if(this.ended)return!1;for(a=t===~~t?t:t===!0?wn:xn,n.input=typeof e=="string"?_n.string2buf(e):bn.call(e)==="[object ArrayBuffer]"?new Uint8Array(e):e,n.next_in=0,n.avail_in=n.input.length;;){if(n.avail_out===0&&(n.output=new Uint8Array(r),n.next_out=0,n.avail_out=r),(a===Sn||a===Cn)&&n.avail_out<=6){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(i=un.deflate(n,a),i===En)return n.next_out>0&&this.onData(n.output.subarray(0,n.next_out)),i=un.deflateEnd(this.strm),this.onEnd(i),this.ended=!0,i===Tn;if(n.avail_out===0){this.onData(n.output);continue}if(a>0&&n.next_out>0){this.onData(n.output.subarray(0,n.next_out)),n.avail_out=0;continue}if(n.avail_in===0)break}return!0},jn.prototype.onData=function(e){this.chunks.push(e)},jn.prototype.onEnd=function(e){e===Tn&&(this.result=fn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function Mn(e,t){let n=new jn(t);if(n.push(e,!0),n.err)throw n.msg||ft[n.err];return n.result}function Nn(e,t){return t||={},t.raw=!0,Mn(e,t)}function Pn(e,t){return t||={},t.gzip=!0,Mn(e,t)}var Fn={Deflate:jn,deflate:Mn,deflateRaw:Nn,gzip:Pn,constants:pt};const In=16209;var Ln=function(e,t){let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E=e.state;n=e.next_in,w=e.input,r=n+(e.avail_in-5),i=e.next_out,T=e.output,a=i-(t-e.avail_out),o=i+(e.avail_out-257),s=E.dmax,c=E.wsize,l=E.whave,u=E.wnext,d=E.window,f=E.hold,p=E.bits,m=E.lencode,h=E.distcode,g=(1<<E.lenbits)-1,_=(1<<E.distbits)-1;top:do{p<15&&(f+=w[n++]<<p,p+=8,f+=w[n++]<<p,p+=8),v=m[f&g];dolen:for(;;){if(y=v>>>24,f>>>=y,p-=y,y=v>>>16&255,y===0)T[i++]=v&65535;else if(y&16){b=v&65535,y&=15,y&&(p<y&&(f+=w[n++]<<p,p+=8),b+=f&(1<<y)-1,f>>>=y,p-=y),p<15&&(f+=w[n++]<<p,p+=8,f+=w[n++]<<p,p+=8),v=h[f&_];dodist:for(;;){if(y=v>>>24,f>>>=y,p-=y,y=v>>>16&255,y&16){if(x=v&65535,y&=15,p<y&&(f+=w[n++]<<p,p+=8,p<y&&(f+=w[n++]<<p,p+=8)),x+=f&(1<<y)-1,x>s){e.msg="invalid distance too far back",E.mode=In;break top}if(f>>>=y,p-=y,y=i-a,x>y){if(y=x-y,y>l&&E.sane){e.msg="invalid distance too far back",E.mode=In;break top}if(S=0,C=d,u===0){if(S+=c-y,y<b){b-=y;do T[i++]=d[S++];while(--y);S=i-x,C=T}}else if(u<y){if(S+=c+u-y,y-=u,y<b){b-=y;do T[i++]=d[S++];while(--y);if(S=0,u<b){y=u,b-=y;do T[i++]=d[S++];while(--y);S=i-x,C=T}}}else if(S+=u-y,y<b){b-=y;do T[i++]=d[S++];while(--y);S=i-x,C=T}for(;b>2;)T[i++]=C[S++],T[i++]=C[S++],T[i++]=C[S++],b-=3;b&&(T[i++]=C[S++],b>1&&(T[i++]=C[S++]))}else{S=i-x;do T[i++]=T[S++],T[i++]=T[S++],T[i++]=T[S++],b-=3;while(b>2);b&&(T[i++]=T[S++],b>1&&(T[i++]=T[S++]))}}else if(y&64){e.msg="invalid distance code",E.mode=In;break top}else{v=h[(v&65535)+(f&(1<<y)-1)];continue dodist}break}}else if(!(y&64)){v=m[(v&65535)+(f&(1<<y)-1)];continue dolen}else if(y&32){E.mode=16191;break top}else{e.msg="invalid literal/length code",E.mode=In;break top}break}}while(n<r&&i<o);b=p>>3,n-=b,p-=b<<3,f&=(1<<p)-1,e.next_in=n,e.next_out=i,e.avail_in=n<r?5+(r-n):5-(n-r),e.avail_out=i<o?257+(o-i):257-(i-o),E.hold=f,E.bits=p};const Rn=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),zn=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),Bn=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),Vn=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]);var Hn=(e,t,n,r,i,a,o,s)=>{let c=s.bits,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y,b,x,S,C,w=null,T,E=new Uint16Array(16),D=new Uint16Array(16),O=null,k,A,j;for(l=0;l<=15;l++)E[l]=0;for(u=0;u<r;u++)E[t[n+u]]++;for(p=c,f=15;f>=1&&E[f]===0;f--);if(p>f&&(p=f),f===0)return i[a++]=20971520,i[a++]=20971520,s.bits=1,0;for(d=1;d<f&&E[d]===0;d++);for(p<d&&(p=d),g=1,l=1;l<=15;l++)if(g<<=1,g-=E[l],g<0)return-1;if(g>0&&(e===0||f!==1))return-1;for(D[1]=0,l=1;l<15;l++)D[l+1]=D[l]+E[l];for(u=0;u<r;u++)t[n+u]!==0&&(o[D[t[n+u]]++]=u);if(e===0?(w=O=o,T=20):e===1?(w=Rn,O=zn,T=257):(w=Bn,O=Vn,T=0),v=0,u=0,l=d,C=a,m=p,h=0,x=-1,_=1<<p,S=_-1,e===1&&_>852||e===2&&_>592)return 1;for(;;){k=l-h,o[u]+1<T?(A=0,j=o[u]):o[u]>=T?(A=O[o[u]-T],j=w[o[u]-T]):(A=96,j=0),y=1<<l-h,b=1<<m,d=b;do b-=y,i[C+(v>>h)+b]=k<<24|A<<16|j|0;while(b!==0);for(y=1<<l-1;v&y;)y>>=1;if(y===0?v=0:(v&=y-1,v+=y),u++,--E[l]===0){if(l===f)break;l=t[n+o[u]]}if(l>p&&(v&S)!==x){for(h===0&&(h=p),C+=d,m=l-h,g=1<<m;m+h<f&&(g-=E[m+h],!(g<=0));)m++,g<<=1;if(_+=1<<m,e===1&&_>852||e===2&&_>592)return 1;x=v&S,i[x]=p<<24|m<<16|C-a|0}}return v!==0&&(i[C+v]=l-h<<24|4194304),s.bits=p,0};const{Z_FINISH:Un,Z_BLOCK:Wn,Z_TREES:Gn,Z_OK:Kn,Z_STREAM_END:qn,Z_NEED_DICT:Jn,Z_STREAM_ERROR:Yn,Z_DATA_ERROR:Xn,Z_MEM_ERROR:Zn,Z_BUF_ERROR:Qn,Z_DEFLATED:$n}=pt,er=16180,tr=16181,nr=16182,rr=16183,ir=16184,ar=16185,or=16186,sr=16187,cr=16188,lr=16189,ur=16190,dr=16191,fr=16192,pr=16193,mr=16194,hr=16195,gr=16196,_r=16197,vr=16198,yr=16199,br=16200,xr=16201,Sr=16202,Cr=16203,wr=16204,Tr=16205,Er=16206,Dr=16207,Or=16208,B=16209,kr=16210,Ar=16211,jr=e=>(e>>>24&255)+(e>>>8&65280)+((e&65280)<<8)+((e&255)<<24);function Mr(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const Nr=e=>{if(!e)return 1;let t=e.state;return+(!t||t.strm!==e||t.mode<er||t.mode>Ar)},Pr=e=>{if(Nr(e))return Yn;let t=e.state;return e.total_in=e.total_out=t.total=0,e.msg="",t.wrap&&(e.adler=t.wrap&1),t.mode=er,t.last=0,t.havedict=0,t.flags=-1,t.dmax=32768,t.head=null,t.hold=0,t.bits=0,t.lencode=t.lendyn=new Int32Array(852),t.distcode=t.distdyn=new Int32Array(592),t.sane=1,t.back=-1,Kn},Fr=e=>{if(Nr(e))return Yn;let t=e.state;return t.wsize=0,t.whave=0,t.wnext=0,Pr(e)},Ir=(e,t)=>{let n;if(Nr(e))return Yn;let r=e.state;return t<0?(n=0,t=-t):(n=(t>>4)+5,t<48&&(t&=15)),t&&(t<8||t>15)?Yn:(r.window!==null&&r.wbits!==t&&(r.window=null),r.wrap=n,r.wbits=t,Fr(e))},Lr=(e,t)=>{if(!e)return Yn;let n=new Mr;e.state=n,n.strm=e,n.window=null,n.mode=er;let r=Ir(e,t);return r!==Kn&&(e.state=null),r},Rr=e=>Lr(e,15);let zr=!0,Br,Vr;const Hr=e=>{if(zr){Br=new Int32Array(512),Vr=new Int32Array(32);let t=0;for(;t<144;)e.lens[t++]=8;for(;t<256;)e.lens[t++]=9;for(;t<280;)e.lens[t++]=7;for(;t<288;)e.lens[t++]=8;for(Hn(1,e.lens,0,288,Br,0,e.work,{bits:9}),t=0;t<32;)e.lens[t++]=5;Hn(2,e.lens,0,32,Vr,0,e.work,{bits:5}),zr=!1}e.lencode=Br,e.lenbits=9,e.distcode=Vr,e.distbits=5},Ur=(e,t,n,r)=>{let i,a=e.state;return a.window===null&&(a.window=new Uint8Array(1<<a.wbits)),a.wsize===0&&(a.wsize=1<<a.wbits,a.wnext=0,a.whave=0),r>=a.wsize?(a.window.set(t.subarray(n-a.wsize,n),0),a.wnext=0,a.whave=a.wsize):(i=a.wsize-a.wnext,i>r&&(i=r),a.window.set(t.subarray(n-r,n-r+i),a.wnext),r-=i,r?(a.window.set(t.subarray(n-r,n),0),a.wnext=r,a.whave=a.wsize):(a.wnext+=i,a.wnext===a.wsize&&(a.wnext=0),a.whave<a.wsize&&(a.whave+=i))),0};var Wr={inflateReset:Fr,inflateReset2:Ir,inflateResetKeep:Pr,inflateInit:Rr,inflateInit2:Lr,inflate:(e,t)=>{let n,r,i,a,o,s,c,l,u,d,f,p,m,h,g=0,_,v,y,b,x,S,C,w,T=new Uint8Array(4),E,D,O=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(Nr(e)||!e.output||!e.input&&e.avail_in!==0)return Yn;n=e.state,n.mode===dr&&(n.mode=fr),o=e.next_out,i=e.output,c=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,l=n.hold,u=n.bits,d=s,f=c,w=Kn;inf_leave:for(;;)switch(n.mode){case er:if(n.wrap===0){n.mode=fr;break}for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.wrap&2&&l===35615){n.wbits===0&&(n.wbits=15),n.check=0,T[0]=l&255,T[1]=l>>>8&255,n.check=dt(n.check,T,2,0),l=0,u=0,n.mode=tr;break}if(n.head&&(n.head.done=!1),!(n.wrap&1)||(((l&255)<<8)+(l>>8))%31){e.msg="incorrect header check",n.mode=B;break}if((l&15)!==$n){e.msg="unknown compression method",n.mode=B;break}if(l>>>=4,u-=4,C=(l&15)+8,n.wbits===0&&(n.wbits=C),C>15||C>n.wbits){e.msg="invalid window size",n.mode=B;break}n.dmax=1<<n.wbits,n.flags=0,e.adler=n.check=1,n.mode=l&512?lr:dr,l=0,u=0;break;case tr:for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.flags=l,(n.flags&255)!==$n){e.msg="unknown compression method",n.mode=B;break}if(n.flags&57344){e.msg="unknown header flags set",n.mode=B;break}n.head&&(n.head.text=l>>8&1),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,n.check=dt(n.check,T,2,0)),l=0,u=0,n.mode=nr;case nr:for(;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.head&&(n.head.time=l),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,T[2]=l>>>16&255,T[3]=l>>>24&255,n.check=dt(n.check,T,4,0)),l=0,u=0,n.mode=rr;case rr:for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.head&&(n.head.xflags=l&255,n.head.os=l>>8),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,n.check=dt(n.check,T,2,0)),l=0,u=0,n.mode=ir;case ir:if(n.flags&1024){for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.length=l,n.head&&(n.head.extra_len=l),n.flags&512&&n.wrap&4&&(T[0]=l&255,T[1]=l>>>8&255,n.check=dt(n.check,T,2,0)),l=0,u=0}else n.head&&(n.head.extra=null);n.mode=ar;case ar:if(n.flags&1024&&(p=n.length,p>s&&(p=s),p&&(n.head&&(C=n.head.extra_len-n.length,n.head.extra||(n.head.extra=new Uint8Array(n.head.extra_len)),n.head.extra.set(r.subarray(a,a+p),C)),n.flags&512&&n.wrap&4&&(n.check=dt(n.check,r,p,a)),s-=p,a+=p,n.length-=p),n.length))break inf_leave;n.length=0,n.mode=or;case or:if(n.flags&2048){if(s===0)break inf_leave;p=0;do C=r[a+p++],n.head&&C&&n.length<65536&&(n.head.name+=String.fromCharCode(C));while(C&&p<s);if(n.flags&512&&n.wrap&4&&(n.check=dt(n.check,r,p,a)),s-=p,a+=p,C)break inf_leave}else n.head&&(n.head.name=null);n.length=0,n.mode=sr;case sr:if(n.flags&4096){if(s===0)break inf_leave;p=0;do C=r[a+p++],n.head&&C&&n.length<65536&&(n.head.comment+=String.fromCharCode(C));while(C&&p<s);if(n.flags&512&&n.wrap&4&&(n.check=dt(n.check,r,p,a)),s-=p,a+=p,C)break inf_leave}else n.head&&(n.head.comment=null);n.mode=cr;case cr:if(n.flags&512){for(;u<16;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.wrap&4&&l!==(n.check&65535)){e.msg="header crc mismatch",n.mode=B;break}l=0,u=0}n.head&&(n.head.hcrc=n.flags>>9&1,n.head.done=!0),e.adler=n.check=0,n.mode=dr;break;case lr:for(;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}e.adler=n.check=jr(l),l=0,u=0,n.mode=ur;case ur:if(n.havedict===0)return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=l,n.bits=u,Jn;e.adler=n.check=1,n.mode=dr;case dr:if(t===Wn||t===Gn)break inf_leave;case fr:if(n.last){l>>>=u&7,u-=u&7,n.mode=Er;break}for(;u<3;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}switch(n.last=l&1,l>>>=1,--u,l&3){case 0:n.mode=pr;break;case 1:if(Hr(n),n.mode=yr,t===Gn){l>>>=2,u-=2;break inf_leave}break;case 2:n.mode=gr;break;case 3:e.msg="invalid block type",n.mode=B}l>>>=2,u-=2;break;case pr:for(l>>>=u&7,u-=u&7;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if((l&65535)!=(l>>>16^65535)){e.msg="invalid stored block lengths",n.mode=B;break}if(n.length=l&65535,l=0,u=0,n.mode=mr,t===Gn)break inf_leave;case mr:n.mode=hr;case hr:if(p=n.length,p){if(p>s&&(p=s),p>c&&(p=c),p===0)break inf_leave;i.set(r.subarray(a,a+p),o),s-=p,a+=p,c-=p,o+=p,n.length-=p;break}n.mode=dr;break;case gr:for(;u<14;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.nlen=(l&31)+257,l>>>=5,u-=5,n.ndist=(l&31)+1,l>>>=5,u-=5,n.ncode=(l&15)+4,l>>>=4,u-=4,n.nlen>286||n.ndist>30){e.msg="too many length or distance symbols",n.mode=B;break}n.have=0,n.mode=_r;case _r:for(;n.have<n.ncode;){for(;u<3;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.lens[O[n.have++]]=l&7,l>>>=3,u-=3}for(;n.have<19;)n.lens[O[n.have++]]=0;if(n.lencode=n.lendyn,n.lenbits=7,E={bits:n.lenbits},w=Hn(0,n.lens,0,19,n.lencode,0,n.work,E),n.lenbits=E.bits,w){e.msg="invalid code lengths set",n.mode=B;break}n.have=0,n.mode=vr;case vr:for(;n.have<n.nlen+n.ndist;){for(;g=n.lencode[l&(1<<n.lenbits)-1],_=g>>>24,v=g>>>16&255,y=g&65535,!(_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(y<16)l>>>=_,u-=_,n.lens[n.have++]=y;else{if(y===16){for(D=_+2;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(l>>>=_,u-=_,n.have===0){e.msg="invalid bit length repeat",n.mode=B;break}C=n.lens[n.have-1],p=3+(l&3),l>>>=2,u-=2}else if(y===17){for(D=_+3;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=_,u-=_,C=0,p=3+(l&7),l>>>=3,u-=3}else{for(D=_+7;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=_,u-=_,C=0,p=11+(l&127),l>>>=7,u-=7}if(n.have+p>n.nlen+n.ndist){e.msg="invalid bit length repeat",n.mode=B;break}for(;p--;)n.lens[n.have++]=C}}if(n.mode===B)break;if(n.lens[256]===0){e.msg="invalid code -- missing end-of-block",n.mode=B;break}if(n.lenbits=9,E={bits:n.lenbits},w=Hn(1,n.lens,0,n.nlen,n.lencode,0,n.work,E),n.lenbits=E.bits,w){e.msg="invalid literal/lengths set",n.mode=B;break}if(n.distbits=6,n.distcode=n.distdyn,E={bits:n.distbits},w=Hn(2,n.lens,n.nlen,n.ndist,n.distcode,0,n.work,E),n.distbits=E.bits,w){e.msg="invalid distances set",n.mode=B;break}if(n.mode=yr,t===Gn)break inf_leave;case yr:n.mode=br;case br:if(s>=6&&c>=258){e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=l,n.bits=u,Ln(e,f),o=e.next_out,i=e.output,c=e.avail_out,a=e.next_in,r=e.input,s=e.avail_in,l=n.hold,u=n.bits,n.mode===dr&&(n.back=-1);break}for(n.back=0;g=n.lencode[l&(1<<n.lenbits)-1],_=g>>>24,v=g>>>16&255,y=g&65535,!(_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(v&&!(v&240)){for(b=_,x=v,S=y;g=n.lencode[S+((l&(1<<b+x)-1)>>b)],_=g>>>24,v=g>>>16&255,y=g&65535,!(b+_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=_,u-=_,n.back+=_,n.length=y,v===0){n.mode=Tr;break}if(v&32){n.back=-1,n.mode=dr;break}if(v&64){e.msg="invalid literal/length code",n.mode=B;break}n.extra=v&15,n.mode=xr;case xr:if(n.extra){for(D=n.extra;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.length+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}n.was=n.length,n.mode=Sr;case Sr:for(;g=n.distcode[l&(1<<n.distbits)-1],_=g>>>24,v=g>>>16&255,y=g&65535,!(_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(!(v&240)){for(b=_,x=v,S=y;g=n.distcode[S+((l&(1<<b+x)-1)>>b)],_=g>>>24,v=g>>>16&255,y=g&65535,!(b+_<=u);){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}l>>>=b,u-=b,n.back+=b}if(l>>>=_,u-=_,n.back+=_,v&64){e.msg="invalid distance code",n.mode=B;break}n.offset=y,n.extra=v&15,n.mode=Cr;case Cr:if(n.extra){for(D=n.extra;u<D;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}n.offset+=l&(1<<n.extra)-1,l>>>=n.extra,u-=n.extra,n.back+=n.extra}if(n.offset>n.dmax){e.msg="invalid distance too far back",n.mode=B;break}n.mode=wr;case wr:if(c===0)break inf_leave;if(p=f-c,n.offset>p){if(p=n.offset-p,p>n.whave&&n.sane){e.msg="invalid distance too far back",n.mode=B;break}p>n.wnext?(p-=n.wnext,m=n.wsize-p):m=n.wnext-p,p>n.length&&(p=n.length),h=n.window}else h=i,m=o-n.offset,p=n.length;p>c&&(p=c),c-=p,n.length-=p;do i[o++]=h[m++];while(--p);n.length===0&&(n.mode=br);break;case Tr:if(c===0)break inf_leave;i[o++]=n.length,c--,n.mode=br;break;case Er:if(n.wrap){for(;u<32;){if(s===0)break inf_leave;s--,l|=r[a++]<<u,u+=8}if(f-=c,e.total_out+=f,n.total+=f,n.wrap&4&&f&&(e.adler=n.check=n.flags?dt(n.check,i,f,o-f):lt(n.check,i,f,o-f)),f=c,n.wrap&4&&(n.flags?l:jr(l))!==n.check){e.msg="incorrect data check",n.mode=B;break}l=0,u=0}n.mode=Dr;case Dr:if(n.wrap&&n.flags){for(;u<32;){if(s===0)break inf_leave;s--,l+=r[a++]<<u,u+=8}if(n.wrap&4&&l!==(n.total&4294967295)){e.msg="incorrect length check",n.mode=B;break}l=0,u=0}n.mode=Or;case Or:w=qn;break inf_leave;case B:w=Xn;break inf_leave;case kr:return Zn;case Ar:default:return Yn}return e.next_out=o,e.avail_out=c,e.next_in=a,e.avail_in=s,n.hold=l,n.bits=u,(n.wsize||f!==e.avail_out&&n.mode<B&&(n.mode<Er||t!==Un))&&Ur(e,e.output,e.next_out,f-e.avail_out),d-=e.avail_in,f-=e.avail_out,e.total_in+=d,e.total_out+=f,n.total+=f,n.wrap&4&&f&&(e.adler=n.check=n.flags?dt(n.check,i,f,e.next_out-f):lt(n.check,i,f,e.next_out-f)),e.data_type=n.bits+(n.last?64:0)+(n.mode===dr?128:0)+(n.mode===yr||n.mode===mr?256:0),(d===0&&f===0||t===Un)&&w===Kn&&(w=Qn),w},inflateEnd:e=>{if(Nr(e))return Yn;let t=e.state;return t.window&&=null,e.state=null,Kn},inflateGetHeader:(e,t)=>{if(Nr(e))return Yn;let n=e.state;return n.wrap&2?(n.head=t,t.done=!1,Kn):Yn},inflateSetDictionary:(e,t)=>{let n=t.length,r,i,a;return Nr(e)||(r=e.state,r.wrap!==0&&r.mode!==ur)?Yn:r.mode===ur&&(i=1,i=lt(i,t,n,0),i!==r.check)?Xn:(a=Ur(e,t,n,n),a?(r.mode=kr,Zn):(r.havedict=1,Kn))},inflateInfo:"pako inflate (from Nodeca project)"};function Gr(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Kr=Gr;const qr=Object.prototype.toString,{Z_NO_FLUSH:Jr,Z_FINISH:Yr,Z_OK:Xr,Z_STREAM_END:Zr,Z_NEED_DICT:Qr,Z_STREAM_ERROR:$r,Z_DATA_ERROR:ei,Z_MEM_ERROR:ti,Z_BUF_ERROR:ni}=pt,ri={chunkSize:65536,windowBits:15,to:""};function ii(e){this.options=fn.assign({},ri,e||{});let t=this.options;t.raw&&t.windowBits>=0&&t.windowBits<16&&(t.windowBits=-t.windowBits,t.windowBits===0&&(t.windowBits=-15)),t.windowBits>=0&&t.windowBits<16&&!(e&&e.windowBits)&&(t.windowBits+=32),t.windowBits>15&&t.windowBits<48&&(t.windowBits&15||(t.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new yn,this.strm.avail_out=0;let n=Wr.inflateInit2(this.strm,t.windowBits);if(n!==Xr||(this.header=new Kr,Wr.inflateGetHeader(this.strm,this.header),t.dictionary&&(typeof t.dictionary=="string"?t.dictionary=_n.string2buf(t.dictionary):qr.call(t.dictionary)==="[object ArrayBuffer]"&&(t.dictionary=new Uint8Array(t.dictionary)),t.raw&&(n=Wr.inflateSetDictionary(this.strm,t.dictionary),n!==Xr))))throw Error(ft[n])}ii.prototype.push=function(e,t){let n=this.strm,r=this.options.chunkSize,i=this.options.dictionary,a,o,s;if(this.ended)return!1;for(o=t===~~t?t:t===!0?Yr:Jr,n.input=qr.call(e)==="[object ArrayBuffer]"?new Uint8Array(e):e,n.next_in=0,n.avail_in=n.input.length;;){for(n.avail_out===0&&(n.output=new Uint8Array(r),n.next_out=0,n.avail_out=r),a=Wr.inflate(n,o),a===Qr&&i&&(a=Wr.inflateSetDictionary(n,i),a===Xr?a=Wr.inflate(n,o):a===ei&&(a=Qr));n.avail_in>0&&a===Zr&&n.state.wrap&2&&n.state.flags!==0&&n.input[n.next_in]!==0;)Wr.inflateReset(n),a=Wr.inflate(n,o);switch(a){case $r:case ei:case Qr:case ti:return this.onEnd(a),this.ended=!0,!1}if(s=n.avail_out,n.next_out&&(n.avail_out===0||a===Zr||o>0)){if(this.options.to==="string"){let e=_n.utf8border(n.output,n.next_out),t=n.next_out-e,i=_n.buf2string(n.output,e);n.next_out=t,n.avail_out=r-t,t&&n.output.set(n.output.subarray(e,e+t),0),this.onData(i)}else this.onData(n.output.length===n.next_out?n.output:n.output.subarray(0,n.next_out)),n.avail_out=0,n.next_out=0}if(a!==Xr&&a!==ni||s!==0){if(a===Zr)return a=Wr.inflateEnd(this.strm),this.onEnd(a),this.ended=!0,!0;if(n.avail_in===0){if(o===Yr)return a=Wr.inflateEnd(this.strm),this.onEnd(a===Xr?ni:a),this.ended=!0,!1;break}}}return!0},ii.prototype.onData=function(e){this.chunks.push(e)},ii.prototype.onEnd=function(e){e===Xr&&(this.result=this.options.to==="string"?this.chunks.join(""):fn.flattenChunks(this.chunks)),this.chunks=[],this.err=e,this.msg=this.strm.msg};function ai(e,t){let n=new ii(t);if(n.push(e,!0),n.err)throw n.msg||ft[n.err];return n.result}function oi(e,t){return t||={},t.raw=!0,ai(e,t)}var si={Inflate:ii,inflate:ai,inflateRaw:oi,ungzip:ai,constants:pt};const{Deflate:ci,deflate:li,deflateRaw:ui,gzip:di}=Fn,{Inflate:fi,inflate:pi,inflateRaw:mi,ungzip:hi}=si;var gi=fi;const _i=16384,vi=(e,t)=>e[t]|e[t+1]<<8,yi=(e,t)=>(vi(e,t)|vi(e,t+2)<<16)>>>0;function bi(t,n){let r=-1,i=Math.max(0,t.length-65557);for(let e=t.length-22;e>=i;e--)if(yi(t,e)===101010256&&e+22+vi(t,e+20)===t.length){r=e;break}if(r<0)throw new e("invalid","not a zip archive");let a=vi(t,r+10),o=yi(t,r+16);if(a===65535||o===4294967295)throw new e("invalid","ZIP64 archives are not supported");let s=new TextDecoder,c=[],l=o;for(;l+46<=r&&yi(t,l)===33639248;){if(c.length>=n)throw new e("too-big","too many archive entries");let i=vi(t,l+28);if(i>1024)throw new e("invalid","a name in the zip directory is too long");let a=l+46+i+vi(t,l+30)+vi(t,l+32);if(a>r)throw new e("invalid","corrupt zip directory");let o=yi(t,l+20),u=yi(t,l+24),d=yi(t,l+42);if(o===4294967295||u===4294967295||d===4294967295)throw new e("invalid","ZIP64 archives are not supported");c.push({name:s.decode(t.subarray(l+46,l+46+i)),method:vi(t,l+10),compressedSize:o,originalSize:u,headerOffset:d,encrypted:(vi(t,l+8)&1)==1}),l=a}if(c.length!==a)throw new e("invalid","corrupt zip directory");let u=[...c].sort((e,t)=>e.headerOffset-t.headerOffset);for(let n=0;n<u.length;n++){let r=u[n],i=n+1<u.length?u[n+1].headerOffset:o,a=r.headerOffset;if((a+30<=t.length?a+30+vi(t,a+26)+vi(t,a+28):1/0)+r.compressedSize>i)throw new e("invalid","corrupt zip directory")}return c}function xi(t,n,r=v()){let i=n.headerOffset;if(i+30>t.length||yi(t,i)!==67324752)throw new e("invalid","corrupt zip entry",n.name);let a=i+30+vi(t,i+26)+vi(t,i+28),o=a+n.compressedSize;if(o>t.length)throw new e("invalid","corrupt zip entry",n.name);if(n.encrypted)throw new e("invalid","encrypted zip entry",n.name);if(n.method===0){if(n.compressedSize!==n.originalSize)throw new e("invalid","zip entry size mismatch",n.name);return y((n.originalSize>>3)+1,r),t.slice(a,o)}if(n.method!==8)throw new e("invalid","unsupported zip compression",n.name);let s=new Uint8Array(n.originalSize),c=0,l=new gi({raw:!0,chunkSize:65536});l.onData=t=>{if(c+t.length>s.length)throw new e("invalid","zip entry size mismatch",n.name);s.set(t,c),c+=t.length,y((t.length>>3)+1,r)};for(let e=a,n=!0;n&&e<o;e+=_i){let i=Math.min(e+_i,o);y(1,r),p(i-e),n=l.push(t.subarray(e,i),i===o)}if(l.err!==0)throw new e("invalid","corrupt zip entry",n.name);if(c!==s.length)throw new e("invalid","zip entry size mismatch",n.name);return s}const Si=Object.freeze({entries:8192,xmlPartBytes:16777216,mediaPartBytes:67108864,totalXmlBytes:33554432,totalBytes:536870912});function Ci(e){let t=e.lastIndexOf("/");return t<0?"":e.slice(0,t)}function wi(e){let t=[];for(let n of e.split("/"))if(n!==""&&n!=="."){if(n===".."){if(t.length===0)return;t.pop()}else t.push(n)}return t.join("/")}function Ti(t){let n=decodeURIComponent(t.replace(/%(2f|5c)/gi,"%00"));if(/\p{Cc}/u.test(n))throw new e("invalid","relationship target");return n}var Ei=class{zip;entries=new Map;xmlCache=new Map;relsCache=new Map;contentTypes=null;failures=new Map;xmlParts=new Set;relsByKind=new Map;relsById=new Map;budgets;sink;constructor(t,r,i,a,o){this.budgets=i,this.sink=a;let s=n(Si,r);this.zip=t;let c=0,l=0;for(let n of bi(t,s.entries)){let t=n.name,r=o.xml(t),i=!r&&o.media(t);if(!(!r&&!i)){if(n.originalSize>(r?s.xmlPartBytes:s.mediaPartBytes)){this.failures.set(t,"too-big"),this.sink.add("part-over-cap",t);continue}if(r&&(l+=n.originalSize,l>s.totalXmlBytes))throw new e("too-big","archive exceeds total XML cap");if(c+=n.originalSize,c>s.totalBytes)throw new e("too-big","archive exceeds total decompression cap");this.entries.set(t,n),r&&this.xmlParts.add(t)}}}failureOf(e){return this.failures.get(e)??"invalid"}has(e){return this.entries.has(e)||this.failures.has(e)}sizeOf(e){return this.entries.get(e)?.originalSize??0}bytes(t){let n=this.maybeBytes(t);if(!n)throw new e("invalid","missing part",t);return n}maybeBytes(e){let t=this.entries.get(e);if(!(!t||this.failures.has(e)))try{return xi(this.zip,t,this.budgets)}catch(t){if(h(this.budgets))throw t;this.failures.set(e,"invalid"),this.sink.add("part-unreadable",e);return}}elements=new Map;readings=new Set;mayRead(e){return this.readings.has(e)?this.readAgain(e):(this.readings.add(e),!0)}readAgain(e){return i(this.budgets,"xmlElements",this.elements.get(e)??0)}xml(t){let n=this.xmlCache.get(t);if(n)return n;if(this.entries.has(t)&&!this.xmlParts.has(t))throw new e("invalid","not an XML part",t);let r=this.bytes(t),i=this.budgets.xmlElements,a=ee(r,this.budgets);return this.elements.set(t,i-this.budgets.xmlElements),this.xmlCache.set(t,a),a}forgetXml(e){this.xmlCache.delete(e)}forgetAllXml(){this.xmlCache.clear()}maybeXml(t){if(!(!this.entries.has(t)||this.failures.has(t)))try{return this.xml(t)}catch(n){if(h(this.budgets))throw n;if(this.failures.has(t))return;this.failures.set(t,n instanceof e?n.code:"invalid"),this.sink.add(n instanceof e&&n.code==="too-big"?"part-too-big":"part-malformed",t);return}}rels(e){let t=this.relsCache.get(e);if(t)return t;let n=Ci(e),r=(n?n+"/":"")+"_rels/"+e.slice(n?n.length+1:0)+".rels",i=[],a=0,o=this.maybeXml(r);if(o)for(let e of N(o)){if(e.name!=="Relationship")continue;let t=e.attrs.Id,r=e.attrs.Type,o=e.attrs.Target;if(e.attrs.TargetMode==="External"&&t&&r){i.push({id:t,type:r,target:o??"",external:!0});continue}if(!(!t||!r||!o)){if(/^[a-z][a-z0-9+.-]*:/i.test(o)){a++;continue}try{let e=e=>wi(e.startsWith("/")?e:n+"/"+e),s=e(o);if(s!==void 0&&!this.has(s)&&o.includes("%")){let t=/%(?![0-9a-f]{2})/i.test(o)?void 0:e(Ti(o));s=t===void 0||this.has(t)?t:s}if(s===void 0){a++;continue}i.push({id:t,type:r,target:s,external:!1})}catch{y(64,this.budgets),a++}}}return a>0&&this.sink.add("relationship-refused",void 0,a),!o&&this.has(r)&&this.sink.add("relationships-lost",r),this.relsCache.set(e,i),i}relById(e,t){let n=this.relsById.get(e);if(!n){n=new Map;for(let t of this.rels(e))n.has(t.id)||n.set(t.id,t);this.relsById.set(e,n)}return n.get(t)}relsOfKind(e,t){let n=t+`
`+e,r=this.relsByKind.get(n);return r||(r=this.rels(e).filter(e=>!e.external&&e.type.endsWith("/"+t)),this.relsByKind.set(n,r)),r}contentTypeOf(e){if(!this.contentTypes){let e=new Map,t=new Map,n=this.maybeXml("[Content_Types].xml");if(n){for(let r of N(n))if(r.name==="Default"){let t=r.attrs.Extension,n=r.attrs.ContentType;t&&n&&e.set(t.toLowerCase(),n)}else if(r.name==="Override"){let e=r.attrs.PartName,n=r.attrs.ContentType;if(e&&n&&(t.set(e.replace(/^\//,""),n),e.includes("%")&&!/%(?![0-9a-f]{2})/i.test(e)))try{t.set(Ti(e).replace(/^\//,""),n)}catch{y(64,this.budgets)}}}this.contentTypes={defaults:e,overrides:t}}let t=this.contentTypes.overrides.get(e);if(t)return t;let n=e.lastIndexOf(".");if(!(n<0))return this.contentTypes.defaults.get(e.slice(n+1).toLowerCase())}};const Di=(e,t=-32e3,n=32e3)=>Math.max(t,Math.min(n,e)),Oi=e=>Math.round(e*100)/100;function V(e){if(!(e===void 0||e.length>24||!/^[+-]?(\d+\.?\d*|\.\d+)$/.test(e)))return Number(e)}function H(e){if(e===void 0)return;let t=V(e);if(t!==void 0)return Oi(Di(t/15));let n=e.length<=24?/^([+-]?(?:\d+\.?\d*|\.\d+))(mm|cm|in|pt|pc|pi)$/.exec(e):null;if(!n)return;let r={mm:96/25.4,cm:96/2.54,in:96,pt:96/72,pc:16,pi:16}[n[2]];return Oi(Di(Number(n[1])*r))}const ki=e=>{let t=V(e);return t===void 0?void 0:Oi(Di(t/9525))},U=e=>e?L(e,"val"):void 0;function Ai(e){if(e===void 0)return;let t=V(e.replace(/%$/,""));return t===void 0?void 0:e.endsWith("%")?t/100:t/1e5}function W(e){if(!e)return;let t=L(e,"val");return t!=="0"&&t!=="false"&&t!=="off"}const ji=e=>e==="1"||e==="true"||e==="on",Mi=e=>e!==void 0&&/^[0-9a-fA-F]{6}$/.test(e)?"#"+e.toLowerCase():void 0,Ni=T({dark1:"dk1",light1:"lt1",dark2:"dk2",light2:"lt2",accent1:"accent1",accent2:"accent2",accent3:"accent3",accent4:"accent4",accent5:"accent5",accent6:"accent6",hyperlink:"hlink",followedHyperlink:"folHlink",background1:"bg1",text1:"t1",background2:"bg2",text2:"t2"}),Pi=T({bg1:"lt1",t1:"dk1",bg2:"lt2",t2:"dk2"});function Fi(e,t,n){let r=Ni[L(e,n.color)??""];if(!r)return;let i=t.scheme[t.map[r]??Pi[r]??r];if(!i)return;let a=e=>e!==void 0&&/^[0-9a-fA-F]{1,2}$/.test(e)?parseInt(e,16)/255:void 0,o=a(L(e,n.tint)),s=a(L(e,n.shade));if(o===void 0&&s===void 0)return i;let[c,l,u]=Ii(i);return s!==void 0&&(u*=s),o!==void 0&&(u=u*o+(1-o)),Li(c,l,u)}function Ii(e){let t=parseInt(e.slice(1,3),16)/255,n=parseInt(e.slice(3,5),16)/255,r=parseInt(e.slice(5,7),16)/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s=i-a;if(s===0)return[0,0,o];let c=s/(1-Math.abs(2*o-1));return[(i===t?((n-r)/s+6)%6:i===n?(r-t)/s+2:(t-n)/s+4)/6,c,o]}function Li(e,t,n){let r=(1-Math.abs(2*n-1))*t,i=r*(1-Math.abs(e*6%2-1)),a=n-r/2,o=Math.floor(e*6)%6;return"#"+[[r,i,0],[i,r,0],[0,r,i],[0,i,r],[i,0,r],[r,0,i]][o].map(e=>Math.round(Di((e+a)*255,0,255)).toString(16).padStart(2,"0")).join("")}function Ri(e,t,n="val"){let r=Fi(e,t,{color:"themeColor",tint:"themeTint",shade:"themeShade"});if(r)return r;let i=L(e,n);return i==="auto"?"auto":Mi(i)}const zi=T({clear:0,nil:0,solid:1,horzStripe:.5,vertStripe:.5,reverseDiagStripe:.5,diagStripe:.5,horzCross:.75,diagCross:.75,thinHorzStripe:.25,thinVertStripe:.25,thinReverseDiagStripe:.25,thinDiagStripe:.25,thinHorzCross:.4,thinDiagCross:.4});function Bi(e,t){if(!e)return;let n=Fi(e,t,{color:"themeFill",tint:"themeFillTint",shade:"themeFillShade"})??Mi(L(e,"fill")),r=L(e,"val")??"clear",i=/^pct(\d{1,2})$/.exec(r),a=i?Number(i[1])/100:zi[r]??0;if(a===0)return n??"none";let o=Ri(e,t,"color"),s=o===void 0||o==="auto"?"#000000":o,c=n??"#ffffff",l=e=>Math.round(parseInt(s.slice(e,e+2),16)*a+parseInt(c.slice(e,e+2),16)*(1-a)).toString(16).padStart(2,"0");return"#"+l(1)+l(3)+l(5)}const Vi={xml:e=>/\.(xml|rels|vml)$/i.test(e),media:e=>/\.(png|jpe?g|jfif|gif|bmp|dib|tiff?|emf|wmf|svg)$/i.test(e)},Hi=e=>e[0]?.target,Ui=T({ja:"Jpan",ko:"Hang","zh-cn":"Hans","zh-sg":"Hans","zh-hans":"Hans","zh-tw":"Hant","zh-hk":"Hant","zh-mo":"Hant","zh-hant":"Hant",ar:"Arab",fa:"Arab",ur:"Arab",he:"Hebr",th:"Thai"});function Wi(e,t,n){let r=e&&P(e,t),i=(n??"").toLowerCase(),a=Ui[i]??Ui[i.split("-")[0]??""],o=r&&L(r,"typeface")||e&&a&&M(e,"font").find(e=>L(e,"script")===a)?.attrs.typeface;return o?o.slice(0,64):void 0}function Gi(e,t){let n={start:1,restart:"continuous",...t};if(!e)return n;let r=U(P(e,"numFmt")),i=V(U(P(e,"numStart"))),a=U(P(e,"numRestart"));return r!==void 0&&(n.format=r),i!==void 0&&(n.start=Math.max(0,Math.min(1e5,Math.trunc(i)))),(a==="eachSect"||a==="eachPage"||a==="continuous")&&(n.restart=a),n}var Ki=class{archive;main;document;palette;theme;themePath;settings;storedPages;storedCharacters;background;sink;constructor(t,n,r,i){this.sink=i,this.archive=new Ei(t,n,r,i,Vi);let a=Hi(this.archive.relsOfKind("","officeDocument"));if(a===void 0)throw new e("invalid","the file is not a Word document");let o=this.archive.maybeXml(a);if(!o)throw new e(this.archive.failureOf(a),"the document's text cannot be read");if(o.name!=="document")throw new e("invalid","the file is not a Word document");this.main=a,this.document=o,this.themePath=this.partOf("theme");let s=this.xmlOf("theme");this.theme=Se(s);let c=this.xmlOf("settings"),l=T({}),u=c&&P(c,"clrSchemeMapping");if(u){let e=T({light1:"lt1",dark1:"dk1",light2:"lt2",dark2:"dk2",accent1:"accent1",accent2:"accent2",accent3:"accent3",accent4:"accent4",accent5:"accent5",accent6:"accent6",hyperlink:"hlink",followedHyperlink:"folHlink"});for(let t of["bg1","t1","bg2","t2"]){let n=e[L(u,t)??""];n&&(l[t]=n)}}this.palette={scheme:this.theme.scheme,map:l},this.theme.major&&(this.palette.majorFont=this.theme.major),this.theme.minor&&(this.palette.minorFont=this.theme.minor);let d=c&&P(c,"themeFontLang");for(let e of["major","minor"]){let t=s&&I(s,e+"Font"),n=Wi(t,"ea",d&&L(d,"eastAsia")),r=Wi(t,"cs",d&&L(d,"bidi"));n&&(this.palette[`${e}EastAsia`]=n),r&&(this.palette[`${e}Complex`]=r)}let f=c&&P(c,"compat");this.settings={evenAndOdd:W(c&&P(c,"evenAndOddHeaders"))??!1,defaultTab:Math.max(4,H(U(c&&P(c,"defaultTabStop")))??48),footnotes:Gi(c&&P(c,"footnotePr")),endnotes:Gi(c&&P(c,"endnotePr")),gutterAtTop:W(c&&P(c,"gutterAtTop"))??!1,mirrorMargins:W(c&&P(c,"mirrorMargins"))??!1,hangIsStop:!(W(f&&P(f,"noTabHangInd"))??!1),markAfterBreak:W(f&&P(f,"splitPgBreakAndParaMark"))??!1,noSpaceAfterBreak:W(f&&P(f,"suppressSpBfAfterPgBrk"))??!1,spacesAdd:W(f&&P(f,"doNotUseHTMLParagraphAutoSpacing"))??!1,mode:12,endnotesBySection:!1};let p=c&&P(c,"endnotePr");if(this.settings.endnotesBySection=U(p&&P(p,"pos"))==="sectEnd",f)for(let e of N(f))e.name==="compatSetting"&&L(e,"name")==="compatibilityMode"&&(this.settings.mode=V(U(e))??12);let m=P(o,"background");this.background=m&&W(c&&P(c,"displayBackgroundShape"))?Fi(m,this.palette,{color:"themeColor",tint:"themeTint",shade:"themeShade"})??Mi(L(m,"color")):void 0;let h=Hi(this.archive.relsOfKind("","extended-properties"))??Hi(this.archive.relsOfKind("","extendedProperties")),g=h===void 0?void 0:this.archive.maybeXml(h),_=V(g&&P(g,"Pages")?.text.trim());this.storedPages=_!==void 0&&_>=1?Math.trunc(_):void 0;let v=V(g&&P(g,"Characters")?.text.trim());this.storedCharacters=v!==void 0&&v>=1?Math.trunc(v):void 0}partOf(e){return Hi(this.archive.relsOfKind(this.main,e))}xmlOf(e){let t=this.partOf(e);return t===void 0?void 0:this.read(t)}read(e){let t=this.archive.maybeXml(e);return!t&&!this.lost.has(e)&&(this.lost.add(e),this.sink.add("part-lost",e)),t}lost=new Set;byId(e,t){let n=new Map,r=this.xmlOf(e);if(r)for(let e of N(r)){let r=L(e,"id");e.name===t&&r!==void 0&&!n.has(r)&&n.set(r,e)}return n}};const qi=Array.from(" !\u2200#\u2203%&\u220B()\u2217+,\u2212./0123456789:;<=>?\u2245\u0391\u0392\u03A7\u0394\u0395\u03A6\u0393\u0397\u0399\u03D1\u039A\u039B\u039C\u039D\u039F\u03A0\u0398\u03A1\u03A3\u03A4\u03A5\u03C2\u03A9\u039E\u03A8\u0396[\u2234]\u22A5_\u203E\u03B1\u03B2\u03C7\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03D5\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03B8\u03C1\u03C3\u03C4\u03C5\u03D6\u03C9\u03BE\u03C8\u03B6{|}\u223C"),Ji=Array.from("\u20AC\u03D2\u2032\u2264\u2044\u221E\u0192\u2663\u2666\u2665\u2660\u2194\u2190\u2191\u2192\u2193\u00B0\u00B1\u2033\u2265\u00D7\u221D\u2202\u2022\u00F7\u2260\u2261\u2248\u2026\u2502\u2500\u21B5\u2135\u2111\u211C\u2118\u2297\u2295\u2205\u2229\u222A\u2283\u2287\u2284\u2282\u2286\u2208\u2209\u2220\u2207\u00AE\u00A9\u2122\u220F\u221A\u22C5\u00AC\u2227\u2228\u21D4\u21D0\u21D1\u21D2\u21D3\u25CA\u3008\u00AE\u00A9\u2122\u2211\u239B\u239C\u239D\u23A1\u23A2\u23A3\u23A7\u23A8\u23A9\u23AA \u3009\u222B\u2320\u23AE\u2321\u239E\u239F\u23A0\u23A4\u23A5\u23A6\u23AB\u23AC\u23AD"),Yi={33:"\u270F",34:"\u2702",40:"\u260E",42:"\u2709",54:"\u231B",63:"\u270D",65:"\u270C",67:"\uD83D\uDC4D",68:"\uD83D\uDC4E",69:"\u261C",70:"\u261E",71:"\u261D",72:"\u261F",74:"\u263A",75:"\uD83D\uDE10",76:"\u2639",78:"\u2620",79:"\u2690",82:"\u263C",84:"\u2744",88:"\u2720",108:"\u25CF",109:"\u274D",110:"\u25A0",111:"\u25A1",113:"\u2751",114:"\u2752",115:"\u2B27",116:"\u29EB",117:"\u25C6",118:"\u2756",119:"\u2B25",120:"\u2327",123:"\u2740",158:"\u00B7",159:"\u2022",160:"\u25AA",161:"\u25CB",164:"\u25C9",167:"\u25AA",168:"\u25FB",170:"\u2726",171:"\u2605",172:"\u2736",173:"\u2734",174:"\u2739",181:"\u272A",182:"\u2730",213:"\u232B",214:"\u2326",216:"\u27A2",220:"\u27B2",223:"\u2190",224:"\u2192",225:"\u2191",226:"\u2193",227:"\u2196",228:"\u2197",229:"\u2199",230:"\u2198",231:"\uD83E\uDC50",232:"\u2794",233:"\uD83E\uDC51",234:"\uD83E\uDC53",239:"\u21E6",240:"\u21E8",241:"\u21E7",242:"\u21E9",243:"\u2B04",244:"\u21F3",251:"\u2718",252:"\u2714",253:"\u2612",254:"\u2611"},Xi={79:"\u2717",80:"\u2713",81:"\u2612",82:"\u2611",151:"\u25CF",152:"\u25CF"},Zi={112:"\u25B2",113:"\u25BC",114:"\u25B3",115:"\u25BD",116:"\u25C0",117:"\u25B6",118:"\u25C1",119:"\u25B7",125:"\u25B6"};function Qi(e){if(!(!e||e.length>32))switch(e.trim().toLowerCase()){case"symbol":return"symbol";case"wingdings":return"wingdings";case"wingdings 2":return"wingdings2";case"wingdings 3":return"wingdings3";case"webdings":case"monotype sorts":case"zapfdingbats":case"zapf dingbats":case"mt extra":case"marlett":return"untabled";default:return}}function $i(e,t){if(e==="wingdings")return Yi[t];if(e==="wingdings2")return Xi[t];if(e==="wingdings3")return Zi[t];if(e==="untabled")return;let n=t>=32&&t<=126?qi[t-32]:t>=160&&t<=254?Ji[t-160]:void 0;return n===" "?void 0:n}function ea(e,t,n){y((e.length>>1)+1);let r=e=>{let r=e.codePointAt(0),i=r>=61472&&r<=61695?r-61440:n&&r<=255?r:-1;return i>32?$i(t,i)??"\u25AF":i===32?" ":e},i=[];for(let t=0;t<e.length;t+=ta){let n=e.slice(t,t+ta);i.push(Array.from(n,r).join("")),p(n.length)}return i.join("")}const ta=4096;function G(t){if(y(t),!i(v(),"documentItems",t))throw new e("too-big","the document holds more than is kept")}const na=T({single:"solid",thick:"solid",double:"double",dotted:"dotted",dashed:"dashed",dotDash:"dashed",dotDotDash:"dashed",dashSmallGap:"dashed",dashDotStroked:"dashed",triple:"double",thinThickSmallGap:"double",thickThinSmallGap:"double",thinThickThinSmallGap:"double",thinThickMediumGap:"double",thickThinMediumGap:"double",thinThickThinMediumGap:"double",thinThickLargeGap:"double",thickThinLargeGap:"double",thinThickThinLargeGap:"double",wave:"solid",doubleWave:"double",threeDEmboss:"ridge",threeDEngrave:"groove",outset:"outset",inset:"inset"});function ra(e,t){let n=L(e,"val"),r=n===void 0||n==="nil"||n==="none"?"none":na[n]??"solid",i=Di((V(L(e,"sz"))??4)/8,.25,12)*(96/72)*(r==="double"?3:1);return{width:r==="none"?0:Oi(Math.max(i,.5)),style:r,color:Ri(e,t,"color")??"auto",space:Oi(Di(V(L(e,"space"))??0,0,31)*(96/72))}}function ia(e,t){if(!e)return;let n={};for(let r of N(e)){let e=r.name==="start"?"left":r.name==="end"?"right":r.name;switch(e){case"top":case"left":case"bottom":case"right":case"insideH":case"insideV":case"between":case"bar":case"tl2br":case"tr2bl":n[e]=ra(r,t)}}return n}const aa=T({left:"left",start:"start",center:"center",right:"right",end:"end",both:"justify",distribute:"distribute",mediumKashida:"justify",highKashida:"justify",lowKashida:"justify",thaiDistribute:"justify",numTab:"left"}),oa=T({left:"left",start:"left",center:"center",right:"right",end:"right",decimal:"decimal",bar:"bar",clear:"clear",num:"left"}),sa=T({none:"none",dot:"dot",hyphen:"hyphen",underscore:"underscore",heavy:"heavy",middleDot:"middleDot"}),ca=e=>sa[e??""]??"none";function la(e,t){let n={};if(!e)return n;for(let r of N(e))switch(r.name){case"pStyle":n.style=U(r);break;case"jc":{let e=aa[U(r)??""];e&&(n.align=e);break}case"ind":{let e=H(L(r,"start")??L(r,"left")),t=H(L(r,"end")??L(r,"right")),i=H(L(r,"hanging")),a=H(L(r,"firstLine"));e!==void 0&&(n.start=e),t!==void 0&&(n.end=t),i===void 0?a!==void 0&&(n.first=a):n.first=-i;break}case"spacing":{let e=H(L(r,"before")),t=H(L(r,"after"));e!==void 0&&(n.before=Math.max(0,e)),t!==void 0&&(n.after=Math.max(0,t));let i=L(r,"beforeAutospacing"),a=L(r,"afterAutospacing");i!==void 0&&(n.beforeAuto=ji(i)),a!==void 0&&(n.afterAuto=ji(a));let o=V(L(r,"line"));if(o!==void 0&&o!==0){let e=L(r,"lineRule");n.lineRule=e==="exact"||e==="atLeast"?e:"auto",n.line=n.lineRule==="auto"?Di(o,24,2400):Oi(Di(Math.abs(o)/15,1,2e3))}break}case"contextualSpacing":n.contextual=W(r);break;case"pageBreakBefore":n.pageBreakBefore=W(r);break;case"bidi":n.rtl=W(r);break;case"shd":n.shade=Bi(r,t);break;case"pBdr":n.borders=ia(r,t);break;case"outlineLvl":{let e=V(U(r));e!==void 0&&(n.outline=Di(Math.trunc(e),0,9));break}case"numPr":{let e=U(P(r,"numId")),t=V(U(P(r,"ilvl")));e!==void 0&&(n.numId=e),t!==void 0&&(n.level=Di(Math.trunc(t),0,8));break}case"tabs":n.tabs=[];for(let e of N(r)){let t=H(L(e,"pos"));e.name!=="tab"||t===void 0||n.tabs.length>=64||n.tabs.push({pos:t,kind:oa[U(e)??""]??"left",leader:ca(L(e,"leader"))})}break;case"snapToGrid":n.offGrid=W(r)===!1;break;case"framePr":{let e={},t=L(r,"dropCap");(t==="drop"||t==="margin")&&(e.dropCap=t);let i=V(L(r,"lines"));i&&(e.lines=Di(Math.trunc(i),1,10)),e.width=H(L(r,"w")),e.height=H(L(r,"h")),e.x=H(L(r,"x")),e.y=H(L(r,"y")),e.hSpace=H(L(r,"hSpace"));let a=L(r,"xAlign");(a==="left"||a==="center"||a==="right"||a==="inside"||a==="outside")&&(e.xAlign=a),e.wrap=L(r,"wrap")!=="none"&&L(r,"wrap")!=="notBeside",n.frame=e;break}}return n}function ua(...e){let t=e.length,n=0,r={};for(let i of e)if(i)for(let e in i){t++;let a=i[e];if(a===void 0)continue;let o=r[e];n+=+(o===void 0),r[e]=(e==="borders"||e==="margins")&&o?{...o,...a}:e==="tabs"&&o?fa(o,a):a}return y(t),G(n>>3),{...r}}const da=new WeakMap;function fa(e,t){let n=da.get(e);n||da.set(e,n=new WeakMap);let r=n.get(t);if(!r){y(e.length+t.length);let i=new Map;for(let t of e)i.set(t.pos,t);for(let e of t)i.set(e.pos,e);r=[...i.values()].slice(0,128),G(1+(r.length>>4)),n.set(t,r)}return r}const pa=/^[A-Za-z]{2,3}(?:-[A-Za-z0-9]{1,8}){0,4}$/,ma=[["val","lang"],["eastAsia","langEast"],["bidi","langComplex"]],ha=["bold","boldComplex","italic","italicComplex","caps","smallCaps","strike","hidden","outline","shadow","emboss","imprint"],ga=T({black:"#000000",blue:"#0000ff",cyan:"#00ffff",green:"#00ff00",magenta:"#ff00ff",red:"#ff0000",yellow:"#ffff00",white:"#ffffff",darkBlue:"#000080",darkCyan:"#008080",darkGreen:"#008000",darkMagenta:"#800080",darkRed:"#800000",darkYellow:"#808000",darkGray:"#808080",lightGray:"#c0c0c0",none:"none"}),_a=T({none:"none",single:"solid",words:"solid",thick:"solid",double:"double",dotted:"dotted",dottedHeavy:"dotted",dash:"dashed",dashedHeavy:"dashed",dashLong:"dashed",dashLongHeavy:"dashed",dotDash:"dashed",dashDotHeavy:"dashed",dotDotDash:"dashed",dashDotDotHeavy:"dashed",wave:"wavy",wavyHeavy:"wavy",wavyDouble:"wavy"});function va(e,t){switch(e){case"majorAscii":case"majorHAnsi":return t.majorFont;case"minorAscii":case"minorHAnsi":return t.minorFont;case"majorEastAsia":return t.majorEastAsia;case"minorEastAsia":return t.minorEastAsia;case"majorBidi":return t.majorComplex;case"minorBidi":return t.minorComplex;default:return}}function ya(e,t){let n=n=>(e[n]?.size??0)+1+ +(n===t);return n("faces")*n("sizes")<=512}function ba(e,t){let n=t.sizes??=new Set;if(n.has(e))return e;if(ya(t,"sizes"))return n.add(e),e;y(n.size),t.facesOver=!0;let r;for(let t of n)(r===void 0||Math.abs(t-e)<Math.abs(r-e))&&(r=t);return r}const xa=(e,t)=>{let n=V(U(e));return n!==void 0&&n>=2&&n<=3276?ba(Math.round(n)/2,t):void 0};function Sa(e,t,n=!1){let r=t.faces??=new Set;if(e)return n&&Qi(e)?e.trim().toLowerCase():r.has(e)?e:r.size<64&&ya(t,"faces")?(r.add(e),e):(t.facesOver=!0,r.values().next().value)}function Ca(e,t){let n=t.languages??=new Set;return!n.has(e)&&n.size>=512?(t.languagesOver=!0,!1):(n.add(e),!0)}function wa(e,t){let n={};if(!e)return n;for(let r of N(e))switch(r.name){case"rStyle":n.style=U(r);break;case"rFonts":{let e=(e,n,i=!1)=>Sa(va(L(r,e),t)||L(r,n),t,i),i=e("asciiTheme","ascii",!0),a=e("hAnsiTheme","hAnsi",!0),o=e("eastAsiaTheme","eastAsia"),s=e("cstheme","cs");i&&(n.ascii=i),a&&(n.hAnsi=a),o&&(n.eastAsia=o),s&&(n.complex=s);break}case"b":n.bold=W(r);break;case"bCs":n.boldComplex=W(r);break;case"i":n.italic=W(r);break;case"iCs":n.italicComplex=W(r);break;case"caps":n.caps=W(r);break;case"smallCaps":n.smallCaps=W(r);break;case"strike":n.strike=W(r);break;case"dstrike":n.doubleStrike=W(r);break;case"outline":n.outline=W(r);break;case"shadow":n.shadow=W(r);break;case"emboss":n.emboss=W(r);break;case"imprint":n.imprint=W(r);break;case"vanish":n.hidden=W(r);break;case"rtl":n.rtl=W(r);break;case"lang":for(let[e,i]of ma){let a=L(r,e);a!==void 0&&pa.test(a)&&Ca(a,t)&&(n[i]=a)}break;case"cs":n.complexScript=W(r);break;case"color":{let e=Ri(r,t);e&&(n.color=e);break}case"sz":{let e=xa(r,t);e&&(n.size=e);break}case"szCs":{let e=xa(r,t);e&&(n.sizeComplex=e);break}case"u":{n.underline=_a[U(r)??"single"]??"solid",n.underlineWords=U(r)==="words";let e=Ri(r,t,"color");e&&(n.underlineColor=e);break}case"highlight":{let e=ga[U(r)??""];e&&(n.highlight=e);break}case"shd":n.shade=Bi(r,t);break;case"spacing":{let e=H(U(r));n.spacing=e===void 0?e:Di(e,-2112,2112);break}case"w":{let e=V(U(r)?.replace(/%$/,""));e&&e>=1&&e<=600&&(n.scale=e);break}case"position":{let e=V(U(r));e!==void 0&&(n.position=Oi(Di(e/2,-200,200)*(96/72)));break}case"vertAlign":{let e=U(r);n.vertical=e==="superscript"?"super":e==="subscript"?"sub":"baseline";break}case"bdr":n.border=ra(r,t);break;case"em":{let e=U(r);(e==="none"||e==="dot"||e==="comma"||e==="circle"||e==="underDot")&&(n.emphasis=e);break}}return n}function Ta(e){if(!e)return;let t=L(e,"type")??"dxa",n=L(e,"w");if(t==="pct"){let e=n?.endsWith("%")?V(n.slice(0,-1)):(V(n)??0)/50;return e!==void 0&&e>0?{kind:"pct",value:Oi(Di(e,0,400))}:void 0}if(t==="dxa"){let e=H(n);return e===void 0?void 0:{kind:"px",value:e}}return{kind:"auto",value:0}}function Ea(e){if(!e)return;let t={};for(let n of N(e)){let e=n.name==="start"?"left":n.name==="end"?"right":n.name,r=Ta(n);(e==="top"||e==="left"||e==="bottom"||e==="right")&&r?.kind==="px"&&(t[e]=Math.max(0,r.value))}return t}function Da(e){switch(e){case"tbRl":case"tbRlV":case"rl":case"rlV":return"down";case"tbLrV":case"lrV":return"downFromLeft";case"btLr":case"lr":return"up";default:return"across"}}function Oa(e,t){let n={};if(!e)return n;for(let r of N(e))switch(r.name){case"shd":n.shade=Bi(r,t);break;case"tcBorders":n.borders=ia(r,t);break;case"tcMar":n.margins=Ea(r);break;case"tcW":n.width=Ta(r);break;case"vAlign":{let e=U(r);n.valign=e==="center"||e==="bottom"?e:e==="both"?"center":"top";break}case"gridSpan":{let e=V(U(r));e&&(n.span=Di(Math.trunc(e),1,63));break}case"vMerge":n.vMerge=U(r)==="restart"?"restart":"continue";break;case"hMerge":n.hMerge=U(r)==="restart"?"restart":"continue";break;case"noWrap":n.noWrap=W(r);break;case"textDirection":n.direction=Da(U(r));break;case"cellIns":n.change="ins";break;case"cellDel":n.change="del"}return n}function ka(e,t){let n={};if(!e)return n;for(let r of N(e))switch(r.name){case"tblStyle":n.style=U(r);break;case"tblW":n.width=Ta(r);break;case"jc":{let e=U(r);n.align=e==="center"?"center":e==="right"||e==="end"?"right":"left";break}case"tblInd":{let e=Ta(r);e?.kind==="px"&&(n.indent=e.value);break}case"tblBorders":n.borders=ia(r,t);break;case"shd":n.shade=Bi(r,t);break;case"tblCellMar":n.margins=Ea(r);break;case"tblCellSpacing":{let e=Ta(r);e?.kind==="px"&&(n.spacing=Di(e.value,0,100));break}case"tblLayout":n.fixed=L(r,"type")==="fixed";break;case"bidiVisual":n.rtl=W(r);break;case"tblStyleRowBandSize":{let e=V(U(r));e!==void 0&&(n.rowBand=Di(Math.trunc(e),0,100));break}case"tblStyleColBandSize":{let e=V(U(r));e!==void 0&&(n.columnBand=Di(Math.trunc(e),0,100));break}case"tblLook":{let e=U(r),t=e!==void 0&&/^[0-9a-fA-F]{1,4}$/.test(e)?parseInt(e,16):0,i=(e,n)=>{let i=L(r,e);return i===void 0?(t&n)!==0:ji(i)};n.look={firstRow:i("firstRow",32),lastRow:i("lastRow",64),firstColumn:i("firstColumn",128),lastColumn:i("lastColumn",256),bandRows:!i("noHBand",512),bandColumns:!i("noVBand",1024)};break}case"tblpPr":{let e=L(r,"tblpXSpec");n.float={x:H(L(r,"tblpX")),y:H(L(r,"tblpY")),fromPage:L(r,"horzAnchor")==="page",fromParagraph:L(r,"vertAnchor")==="text",...e==="left"||e==="center"||e==="right"?{xAlign:e}:{},left:H(L(r,"leftFromText"))??0,right:H(L(r,"rightFromText"))??0,top:H(L(r,"topFromText"))??0,bottom:H(L(r,"bottomFromText"))??0};break}}return n}function Aa(e){let t={};if(!e)return t;for(let n of N(e))switch(n.name){case"trHeight":{let e=H(U(n)),r=L(n,"hRule");e!==void 0&&r!=="auto"&&(t.height=Math.max(0,e)),t.exact=r==="exact";break}case"tblHeader":t.header=W(n);break;case"gridBefore":{let e=V(U(n));e&&(t.before=Di(Math.trunc(e),0,63));break}case"gridAfter":{let e=V(U(n));e&&(t.after=Di(Math.trunc(e),0,63));break}case"hidden":t.hidden=W(n);break;case"ins":t.change="ins";break;case"del":t.change="del"}return t}const ja=new Set(["wholeTable","band1Vert","band2Vert","band1Horz","band2Horz","firstRow","lastRow","firstCol","lastCol","neCell","nwCell","seCell","swCell"]);function Ma(e,t){return{para:la(P(e,"pPr"),t),run:wa(P(e,"rPr"),t),cell:Oa(P(e,"tcPr"),t)}}const Na=(e,t)=>!e||Pa(e)?t??{}:!t||Pa(t)?e:(G(1),ua(e,t)),Pa=e=>{for(let t in e)return!1;return!0},Fa=(e,t)=>({para:Na(e?.para,t?.para),run:Na(e?.run,t?.run),cell:Na(e?.cell,t?.cell)});var Ia=class{source=new Map;raw=new Map;folded=new Map;defaultRun={};defaultPara={};defaultParagraphStyle;defaultTableStyle;pal;constructor(e,t){if(this.pal=t,e)for(let n of N(e)){if(n.name==="docDefaults"){let e=P(n,"rPrDefault"),r=P(n,"pPrDefault");Object.assign(this.defaultRun,wa(e&&P(e,"rPr"),t)),Object.assign(this.defaultPara,la(r&&P(r,"pPr"),t))}if(n.name!=="style")continue;let e=L(n,"styleId"),r=L(n,"type")??"paragraph";e!==void 0&&(r==="paragraph"||r==="character"||r==="table"||r==="numbering")&&(this.source.set(e,n),ji(L(n,"default"))&&(r==="paragraph"&&(this.defaultParagraphStyle??=e),r==="table"&&(this.defaultTableStyle??=e)))}}rawOf(e){if(this.raw.has(e))return this.raw.get(e);let t=this.source.get(e),n;if(t){n={id:e,type:L(t,"type")??"paragraph",regions:{},table:ka(P(t,"tblPr"),this.pal),...Ma(t,this.pal)};let r=U(P(t,"basedOn")),i=U(P(t,"name"));r!==void 0&&(n.basedOn=r),i!==void 0&&(n.name=i.slice(0,64));for(let e of n.type==="table"?N(t):[]){let t=e.name==="tblStylePr"?L(e,"type"):void 0;t!==void 0&&ja.has(t)&&(n.regions[t]=Ma(e,this.pal))}}return this.raw.set(e,n),n}get(e){if(e===void 0)return;let t=this.folded.get(e);if(t)return t;let n=[],r=new Set,i=this.rawOf(e);for(;i&&!r.has(i.id)&&!this.folded.has(i.id);){y(1),n.push(i),r.add(i.id);let e=i.basedOn===void 0?void 0:this.rawOf(i.basedOn);i=e&&e.type===i.type?e:void 0}let a=i&&!r.has(i.id)?this.folded.get(i.id):void 0;for(let e=n.length-1;e>=0;e--){let t=n[e];G(1),y(ja.size);let r={};for(let e of ja){let n=e,i=a?.regions[n],o=t.regions[n];i&&o?r[n]=Fa(i,o):(i||o)&&(r[n]=i??o)}a={...t,...Fa(a,t),table:Na(a?.table,t.table),regions:r},this.folded.set(t.id,a)}return a}idOf(e){if(!this.byName){this.byName=new Map;for(let[e,t]of this.source){let n=U(P(t,"name"))?.slice(0,64).toLowerCase();n!==void 0&&!this.byName.has(n)&&this.byName.set(n,e)}}return this.byName.get(e.slice(0,64).toLowerCase())??(this.source.has(e)?e:void 0)}byName;names(){let e=new Map;for(let[t,n]of this.source){y(1);let r=U(P(n,"name"))?.slice(0,64).toLowerCase();r!==void 0&&e.set(t,r)}return e}paragraphStyle(e){let t=this.get(e);return t?.type==="paragraph"?t:this.get(this.defaultParagraphStyle)}};function La(e,t,...n){let r=ua(...t);for(let e of ha){let n=!1,i=!1;for(let r of t)r?.[e]!==void 0&&(i=!0,r[e]&&(n=!n));i&&(r[e]=n)}return ua(e,r,...n)}function Ra(e,t,n){if(!n.has(e)){n.add(e),y(e.length+1);for(let r of e)if(r.kind==="table"){y(r.rows.length);for(let e of r.rows){y(e.cells.length);for(let r of e.cells)Ra(r.blocks,t,n)}}else r.heading===void 0?r.continued&&t.at(-1)?.at(-1)?.cut&&t.at(-1)?.push(r):t.push([r])}}function za(e){let t=[],n=e[0]?.label?e[0].label.text+" ":"",r,i=1e3,a=10,o=!1,s=(e,c)=>{for(let l of e)if(y(1),l.change?.kind!=="del"){if(l.kind==="text"){let e=l.text.slice(0,i);o||=e.length<l.text.length,i-=e.length,n+=e,e.trim()!==""&&(r??=c)}else l.kind==="tab"||l.kind==="ptab"||l.kind==="break"?(o||=i===0,n+=i-->0?" ":""):l.kind==="ruby"?s(l.base,c):l.kind==="math"&&(o||=a===0,a-->0&&(t.push(n,l),n="",r??=c));if(o)return!1}return!0};for(let t of e)if(!s(t.inlines,t))break;return t.push(n+(o&&r?"\u2026":"")),{pieces:t,aim:r??e[0]}}function Ba(e,t){let n=t.styles.get("TOC"+e);return{props:ua(t.styles.defaultPara,n?.type==="paragraph"?n.para:{start:(e-1)*14.67,after:6.67}),base:La(t.base,[n?.type==="paragraph"?n.run:void 0])}}function Va(e,t,n){let r=[],i=new Set;for(let t of e)for(let e of t.parts)Ra(e.blocks,r,i);t.length>4&&n.sink.add("field-without-result","TOC",t.length-4);let a=[];for(let e of t.slice(0,4)){y(2*e.list.length+r.length);let t=e.list.indexOf(e.after);if(t<0){n.sink.add("field-without-result","TOC");continue}let i=[];for(let t of r){let r=t[0]?.heading;if(r<e.from||r>e.to)continue;let{pieces:o,aim:s}=za(t);if(o.every(e=>typeof e=="string"&&e.trim()===""))continue;y(s.inlines.length);let c=n.newBookmark();s.inlines.unshift({kind:"bookmark",id:c,props:s.base});let{props:l,base:u}=a[r]??=Ba(r,n),d=o.filter(e=>e!=="").map(e=>{let t={props:u,link:{to:c}};return typeof e=="string"?{kind:"text",text:e,...t}:{kind:"math",el:e.el,display:!1,...e.full?{full:!0}:{},...t}});for(let e of d){let t=e.kind==="text"?e.text.length:0;y(t+1),G(Math.ceil(t/64))}G(2+d.length),i.push({kind:"p",props:l,base:u,inlines:d})}let o=e.list.splice(t+1);for(let t of i)e.list.push(t);for(let t of o)e.list.push(t);n.sink.add(i.length>0?"contents-built":"field-without-result","TOC")}}const Ha={ox:0,oy:0,sx:1,sy:1};function Ua(e){return Math.abs((ie(e)%180+180)%180-90)<45}function Wa(e,t=Ha){let n=(t,n)=>{let r=P(e,t);return r?R(r,n):void 0},r=(e,t)=>{let r=n("chExt",e),i=r?t*(n("ext",e)??0)/r:t;return Number.isFinite(i)?i:1},i=Ua(R(e,"rot")??0);return{ox:n("chOff","x")??n("off","x")??0,oy:n("chOff","y")??n("off","y")??0,sx:r("cx",i?t.sy:t.sx),sy:r("cy",i?t.sx:t.sy)}}function Ga(e,t=Ha){if(!e)return;let n=P(e,"off"),r=P(e,"ext");if(!n||!r)return;let i=R(e,"rot"),a=R(r,"cx")??0,o=R(r,"cy")??0,[s,c]=[Math.abs(a),Math.abs(o)],l=(R(n,"x")??0)+Math.min(a,0),u=(R(n,"y")??0)+Math.min(o,0),d=i?ie(i):0,[f,p]=Ua(i??0)?[t.sy,t.sx]:[t.sx,t.sy],m=(l+s/2-t.ox)*t.sx,h=(u+c/2-t.oy)*t.sy,g=e=>oe(re(Math.max(-5e9,Math.min(5e9,Number.isFinite(e)?e:0)))),_=Math.min(1,5e9/Math.max(s*f,c*p,1)),[v,y]=[s*f*_,c*p*_],b={x:g(m-v/2),y:g(h-y/2),w:g(v),h:g(y)};return i&&(b.rot=oe(d)),(ne(e,"flipH")??!1)!==a<0&&(b.flipH=!0),(ne(e,"flipV")??!1)!==o<0&&(b.flipV=!0),b}T({solid:"solid",dash:"dashed",dashDot:"dashed",lgDash:"dashed",lgDashDot:"dashed",lgDashDotDot:"dashed",sysDash:"dashed",sysDashDot:"dashed",sysDashDotDot:"dashed",dot:"dotted",sysDot:"dotted"}),T({dot:[1,3],dash:[4,3],lgDash:[8,3],dashDot:[4,3,1,3],lgDashDot:[8,3,1,3],lgDashDotDot:[8,3,1,3,1,3],sysDot:[1,1],sysDash:[3,1],sysDashDot:[3,1,1,1],sysDashDotDot:[3,1,1,1,1,1]}),T({sm:2,med:3,lg:5}),T({"sans-serif":["'Arial'","'Helvetica'"],serif:["'Times New Roman'","'Times'"],monospace:["'Courier New'"]});const Ka=e=>e.rtl===!0||e.complexScript===!0,qa=e=>Ka(e)?e.sizeComplex??e.size:e.size,Ja=e=>(qa(e)??10)*(e.vertical==="super"||e.vertical==="sub"?.65:1),Ya=e=>Ja(e)>75,Xa={bentArrow:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 43750",gd:`a2 pin 0 adj2 50000
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      a3 pin 0 adj3 50000
      th */ ss a1 100000
      aw2 */ ss a2 100000
      th2 */ th 1 2
      dh2 +- aw2 0 th2
      ah */ ss a3 100000
      bw +- r 0 ah
      bh +- b 0 dh2
      bs min bw bh
      maxAdj4 */ 100000 bs ss
      a4 pin 0 adj4 maxAdj4
      bd */ ss a4 100000
      bd3 +- bd 0 th
      bd2 max bd3 0
      x3 +- th bd2 0
      x4 +- r 0 ah
      y3 +- dh2 th 0
      y4 +- y3 dh2 0
      y5 +- dh2 bd 0`,paths:["M l b L l y5 A bd bd cd2 cd4 L x4 dh2 L x4 t L r aw2 L x4 y4 L x4 y3 L x3 y3 A bd2 bd2 3cd4 -5400000 L th b Z"]},bentUpArrow:{av:"adj1 25000; adj2 25000; adj3 25000",gd:`a1 pin 0 adj1 50000
      a2 pin 0 adj2 50000
      a3 pin 0 adj3 50000
      y1 */ ss a3 100000
      dx1 */ ss a2 50000
      x1 +- r 0 dx1
      dx3 */ ss a2 100000
      x3 +- r 0 dx3
      dx2 */ ss a1 200000
      x2 +- x3 0 dx2
      x4 +- x3 dx2 0
      dy2 */ ss a1 100000
      y2 +- b 0 dy2`,rect:"l y2 x4 b",paths:["M l y2 L x2 y2 L x2 y1 L x1 y1 L x3 t L r y1 L x4 y1 L x4 b L l b Z"]},leftUpArrow:{av:"adj1 25000; adj2 25000; adj3 25000",gd:`a2 pin 0 adj2 50000
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 +- 100000 0 maxAdj1
      a3 pin 0 adj3 maxAdj3
      x1 */ ss a3 100000
      dx2 */ ss a2 50000
      x2 +- r 0 dx2
      y2 +- b 0 dx2
      dx4 */ ss a2 100000
      x4 +- r 0 dx4
      y4 +- b 0 dx4
      dx3 */ ss a1 200000
      x3 +- x4 0 dx3
      x5 +- x4 dx3 0
      y3 +- y4 0 dx3
      y5 +- y4 dx3 0
      il */ dx3 x1 dx4`,rect:"il y3 x4 y5",paths:["M l y4 L x1 y2 L x1 y3 L x3 y3 L x3 x1 L x2 x1 L x4 t L r x1 L x5 x1 L x5 y5 L x1 y5 L x1 b Z"]},leftRightUpArrow:{av:"adj1 25000; adj2 25000; adj3 25000",gd:`a2 pin 0 adj2 50000
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      q1 +- 100000 0 maxAdj1
      maxAdj3 */ q1 1 2
      a3 pin 0 adj3 maxAdj3
      x1 */ ss a3 100000
      dx2 */ ss a2 100000
      x2 +- hc 0 dx2
      x5 +- hc dx2 0
      dx3 */ ss a1 200000
      x3 +- hc 0 dx3
      x4 +- hc dx3 0
      x6 +- r 0 x1
      dy2 */ ss a2 50000
      y2 +- b 0 dy2
      y4 +- b 0 dx2
      y3 +- y4 0 dx3
      y5 +- y4 dx3 0
      il */ dx3 x1 dx2
      ir +- r 0 il`,rect:"il y3 ir y5",paths:["M l y4 L x1 y2 L x1 y3 L x3 y3 L x3 x1 L x2 x1 L hc t L x5 x1 L x4 x1 L x4 y3 L x6 y3 L x6 y2 L r y4 L x6 b L x6 y5 L x1 y5 L x1 b Z"]},quadArrow:{av:"adj1 22500; adj2 22500; adj3 22500",gd:`a2 pin 0 adj2 50000
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      q1 +- 100000 0 maxAdj1
      maxAdj3 */ q1 1 2
      a3 pin 0 adj3 maxAdj3
      x1 */ ss a3 100000
      dx2 */ ss a2 100000
      x2 +- hc 0 dx2
      x5 +- hc dx2 0
      dx3 */ ss a1 200000
      x3 +- hc 0 dx3
      x4 +- hc dx3 0
      x6 +- r 0 x1
      y2 +- vc 0 dx2
      y5 +- vc dx2 0
      y3 +- vc 0 dx3
      y4 +- vc dx3 0
      y6 +- b 0 x1
      il */ dx3 x1 dx2
      ir +- r 0 il`,rect:"il y3 ir y4",paths:["M l vc L x1 y2 L x1 y3 L x3 y3 L x3 x1 L x2 x1 L hc t L x5 x1 L x4 x1 L x4 y3 L x6 y3 L x6 y2 L r vc L x6 y5 L x6 y4 L x4 y4 L x4 y6 L x5 y6 L hc b L x2 y6 L x3 y6 L x3 y4 L x1 y4 L x1 y5 Z"]},circularArrow:{av:"adj1 12500; adj2 1142319; adj3 20457681; adj4 10800000; adj5 12500",gd:`a5 pin 0 adj5 25000
      maxAdj1 */ a5 2 1
      a1 pin 0 adj1 maxAdj1
      enAng pin 1 adj3 21599999
      stAng pin 0 adj4 21599999
      th */ ss a1 100000
      thh */ ss a5 100000
      th2 */ th 1 2
      rw1 +- wd2 th2 thh
      rh1 +- hd2 th2 thh
      rw2 +- rw1 0 th
      rh2 +- rh1 0 th
      rw3 +- rw2 th2 0
      rh3 +- rh2 th2 0
      wtH sin rw3 enAng
      htH cos rh3 enAng
      dxH cat2 rw3 htH wtH
      dyH sat2 rh3 htH wtH
      xH +- hc dxH 0
      yH +- vc dyH 0
      rI min rw2 rh2
      u1 */ dxH dxH 1
      u2 */ dyH dyH 1
      u3 */ rI rI 1
      u4 +- u1 0 u3
      u5 +- u2 0 u3
      u6 */ u4 u5 u1
      u7 */ u6 1 u2
      u8 +- 1 0 u7
      u9 sqrt u8
      u10 */ u4 1 dxH
      u11 */ u10 1 dyH
      u12 +/ 1 u9 u11
      u13 at2 1 u12
      u14 +- u13 21600000 0
      u15 ?: u13 u13 u14
      u16 +- u15 0 enAng
      u17 +- u16 21600000 0
      u18 ?: u16 u16 u17
      u19 +- u18 0 cd2
      u20 +- u18 0 21600000
      u21 ?: u19 u20 u18
      maxAng abs u21
      aAng pin 0 adj2 maxAng
      ptAng +- enAng aAng 0
      wtA sin rw3 ptAng
      htA cos rh3 ptAng
      dxA cat2 rw3 htA wtA
      dyA sat2 rh3 htA wtA
      xA +- hc dxA 0
      yA +- vc dyA 0
      wtE sin rw1 stAng
      htE cos rh1 stAng
      dxE cat2 rw1 htE wtE
      dyE sat2 rh1 htE wtE
      xE +- hc dxE 0
      yE +- vc dyE 0
      dxG cos thh ptAng
      dyG sin thh ptAng
      xG +- xH dxG 0
      yG +- yH dyG 0
      dxB cos thh ptAng
      dyB sin thh ptAng
      xB +- xH 0 dxB
      yB +- yH 0 dyB
      sx1 +- xB 0 hc
      sy1 +- yB 0 vc
      sx2 +- xG 0 hc
      sy2 +- yG 0 vc
      rO min rw1 rh1
      x1O */ sx1 rO rw1
      y1O */ sy1 rO rh1
      x2O */ sx2 rO rw1
      y2O */ sy2 rO rh1
      dxO +- x2O 0 x1O
      dyO +- y2O 0 y1O
      dO mod dxO dyO 0
      q1 */ x1O y2O 1
      q2 */ x2O y1O 1
      DO +- q1 0 q2
      q3 */ rO rO 1
      q4 */ dO dO 1
      q5 */ q3 q4 1
      q6 */ DO DO 1
      q7 +- q5 0 q6
      q8 max q7 0
      sdelO sqrt q8
      ndyO */ dyO -1 1
      sdyO ?: ndyO -1 1
      q9 */ sdyO dxO 1
      q10 */ q9 sdelO 1
      q11 */ DO dyO 1
      dxF1 +/ q11 q10 q4
      q12 +- q11 0 q10
      dxF2 */ q12 1 q4
      adyO abs dyO
      q13 */ adyO sdelO 1
      q14 */ DO dxO -1
      dyF1 +/ q14 q13 q4
      q15 +- q14 0 q13
      dyF2 */ q15 1 q4
      q16 +- x2O 0 dxF1
      q17 +- x2O 0 dxF2
      q18 +- y2O 0 dyF1
      q19 +- y2O 0 dyF2
      q20 mod q16 q18 0
      q21 mod q17 q19 0
      q22 +- q21 0 q20
      dxF ?: q22 dxF1 dxF2
      dyF ?: q22 dyF1 dyF2
      sdxF */ dxF rw1 rO
      sdyF */ dyF rh1 rO
      xF +- hc sdxF 0
      yF +- vc sdyF 0
      x1I */ sx1 rI rw2
      y1I */ sy1 rI rh2
      x2I */ sx2 rI rw2
      y2I */ sy2 rI rh2
      dxI +- x2I 0 x1I
      dyI +- y2I 0 y1I
      dI mod dxI dyI 0
      v1 */ x1I y2I 1
      v2 */ x2I y1I 1
      DI +- v1 0 v2
      v3 */ rI rI 1
      v4 */ dI dI 1
      v5 */ v3 v4 1
      v6 */ DI DI 1
      v7 +- v5 0 v6
      v8 max v7 0
      sdelI sqrt v8
      v9 */ sdyO dxI 1
      v10 */ v9 sdelI 1
      v11 */ DI dyI 1
      dxC1 +/ v11 v10 v4
      v12 +- v11 0 v10
      dxC2 */ v12 1 v4
      adyI abs dyI
      v13 */ adyI sdelI 1
      v14 */ DI dxI -1
      dyC1 +/ v14 v13 v4
      v15 +- v14 0 v13
      dyC2 */ v15 1 v4
      v16 +- x1I 0 dxC1
      v17 +- x1I 0 dxC2
      v18 +- y1I 0 dyC1
      v19 +- y1I 0 dyC2
      v20 mod v16 v18 0
      v21 mod v17 v19 0
      v22 +- v21 0 v20
      dxC ?: v22 dxC1 dxC2
      dyC ?: v22 dyC1 dyC2
      sdxC */ dxC rw2 rI
      sdyC */ dyC rh2 rI
      xC +- hc sdxC 0
      yC +- vc sdyC 0
      ist0 at2 sdxC sdyC
      ist1 +- ist0 21600000 0
      istAng ?: ist0 ist0 ist1
      isw1 +- stAng 0 istAng
      isw2 +- isw1 0 21600000
      iswAng ?: isw1 isw2 isw1
      p1 +- xF 0 xC
      p2 +- yF 0 yC
      p3 mod p1 p2 0
      p4 */ p3 1 2
      p5 +- p4 0 thh
      xGp ?: p5 xF xG
      yGp ?: p5 yF yG
      xBp ?: p5 xC xB
      yBp ?: p5 yC yB
      en0 at2 sdxF sdyF
      en1 +- en0 21600000 0
      en2 ?: en0 en0 en1
      sw0 +- en2 0 stAng
      sw1 +- sw0 21600000 0
      swAng ?: sw0 sw0 sw1
      idx cos rw1 2700000
      idy sin rh1 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M xE yE A rw1 rh1 stAng swAng L xGp yGp L xA yA L xBp yBp L xC yC A rw2 rh2 istAng iswAng Z"]},leftCircularArrow:{av:"adj1 12500; adj2 -1142319; adj3 1142319; adj4 10800000; adj5 12500",gd:`a5 pin 0 adj5 25000
      maxAdj1 */ a5 2 1
      a1 pin 0 adj1 maxAdj1
      enAng pin 1 adj3 21599999
      stAng pin 0 adj4 21599999
      th */ ss a1 100000
      thh */ ss a5 100000
      th2 */ th 1 2
      rw1 +- wd2 th2 thh
      rh1 +- hd2 th2 thh
      rw2 +- rw1 0 th
      rh2 +- rh1 0 th
      rw3 +- rw2 th2 0
      rh3 +- rh2 th2 0
      wtH sin rw3 enAng
      htH cos rh3 enAng
      dxH cat2 rw3 htH wtH
      dyH sat2 rh3 htH wtH
      xH +- hc dxH 0
      yH +- vc dyH 0
      rI min rw2 rh2
      u1 */ dxH dxH 1
      u2 */ dyH dyH 1
      u3 */ rI rI 1
      u4 +- u1 0 u3
      u5 +- u2 0 u3
      u6 */ u4 u5 u1
      u7 */ u6 1 u2
      u8 +- 1 0 u7
      u9 sqrt u8
      u10 */ u4 1 dxH
      u11 */ u10 1 dyH
      u12 +/ 1 u9 u11
      u13 at2 1 u12
      u14 +- u13 21600000 0
      u15 ?: u13 u13 u14
      u16 +- u15 0 enAng
      u17 +- u16 21600000 0
      u18 ?: u16 u16 u17
      u19 +- u18 0 cd2
      u20 +- u18 0 21600000
      u21 ?: u19 u20 u18
      u22 abs u21
      minAng */ u22 -1 1
      u23 abs adj2
      a2 */ u23 -1 1
      aAng pin minAng a2 0
      ptAng +- enAng aAng 0
      wtA sin rw3 ptAng
      htA cos rh3 ptAng
      dxA cat2 rw3 htA wtA
      dyA sat2 rh3 htA wtA
      xA +- hc dxA 0
      yA +- vc dyA 0
      wtE sin rw1 stAng
      htE cos rh1 stAng
      dxE cat2 rw1 htE wtE
      dyE sat2 rh1 htE wtE
      xE +- hc dxE 0
      yE +- vc dyE 0
      wtD sin rw2 stAng
      htD cos rh2 stAng
      dxD cat2 rw2 htD wtD
      dyD sat2 rh2 htD wtD
      xD +- hc dxD 0
      yD +- vc dyD 0
      dxG cos thh ptAng
      dyG sin thh ptAng
      xG +- xH dxG 0
      yG +- yH dyG 0
      dxB cos thh ptAng
      dyB sin thh ptAng
      xB +- xH 0 dxB
      yB +- yH 0 dyB
      sx1 +- xB 0 hc
      sy1 +- yB 0 vc
      sx2 +- xG 0 hc
      sy2 +- yG 0 vc
      rO min rw1 rh1
      x1O */ sx1 rO rw1
      y1O */ sy1 rO rh1
      x2O */ sx2 rO rw1
      y2O */ sy2 rO rh1
      dxO +- x2O 0 x1O
      dyO +- y2O 0 y1O
      dO mod dxO dyO 0
      q1 */ x1O y2O 1
      q2 */ x2O y1O 1
      DO +- q1 0 q2
      q3 */ rO rO 1
      q4 */ dO dO 1
      q5 */ q3 q4 1
      q6 */ DO DO 1
      q7 +- q5 0 q6
      q8 max q7 0
      sdelO sqrt q8
      ndyO */ dyO -1 1
      sdyO ?: ndyO -1 1
      q9 */ sdyO dxO 1
      q10 */ q9 sdelO 1
      q11 */ DO dyO 1
      dxF1 +/ q11 q10 q4
      q12 +- q11 0 q10
      dxF2 */ q12 1 q4
      adyO abs dyO
      q13 */ adyO sdelO 1
      q14 */ DO dxO -1
      dyF1 +/ q14 q13 q4
      q15 +- q14 0 q13
      dyF2 */ q15 1 q4
      q16 +- x2O 0 dxF1
      q17 +- x2O 0 dxF2
      q18 +- y2O 0 dyF1
      q19 +- y2O 0 dyF2
      q20 mod q16 q18 0
      q21 mod q17 q19 0
      q22 +- q21 0 q20
      dxF ?: q22 dxF1 dxF2
      dyF ?: q22 dyF1 dyF2
      sdxF */ dxF rw1 rO
      sdyF */ dyF rh1 rO
      xF +- hc sdxF 0
      yF +- vc sdyF 0
      x1I */ sx1 rI rw2
      y1I */ sy1 rI rh2
      x2I */ sx2 rI rw2
      y2I */ sy2 rI rh2
      dxI +- x2I 0 x1I
      dyI +- y2I 0 y1I
      dI mod dxI dyI 0
      v1 */ x1I y2I 1
      v2 */ x2I y1I 1
      DI +- v1 0 v2
      v3 */ rI rI 1
      v4 */ dI dI 1
      v5 */ v3 v4 1
      v6 */ DI DI 1
      v7 +- v5 0 v6
      v8 max v7 0
      sdelI sqrt v8
      v9 */ sdyO dxI 1
      v10 */ v9 sdelI 1
      v11 */ DI dyI 1
      dxC1 +/ v11 v10 v4
      v12 +- v11 0 v10
      dxC2 */ v12 1 v4
      adyI abs dyI
      v13 */ adyI sdelI 1
      v14 */ DI dxI -1
      dyC1 +/ v14 v13 v4
      v15 +- v14 0 v13
      dyC2 */ v15 1 v4
      v16 +- x1I 0 dxC1
      v17 +- x1I 0 dxC2
      v18 +- y1I 0 dyC1
      v19 +- y1I 0 dyC2
      v20 mod v16 v18 0
      v21 mod v17 v19 0
      v22 +- v21 0 v20
      dxC ?: v22 dxC1 dxC2
      dyC ?: v22 dyC1 dyC2
      sdxC */ dxC rw2 rI
      sdyC */ dyC rh2 rI
      xC +- hc sdxC 0
      yC +- vc sdyC 0
      ist0 at2 sdxC sdyC
      ist1 +- ist0 21600000 0
      istAng0 ?: ist0 ist0 ist1
      isw1 +- stAng 0 istAng0
      isw2 +- isw1 21600000 0
      iswAng0 ?: isw1 isw1 isw2
      istAng +- istAng0 iswAng0 0
      iswAng +- 0 0 iswAng0
      p1 +- xF 0 xC
      p2 +- yF 0 yC
      p3 mod p1 p2 0
      p4 */ p3 1 2
      p5 +- p4 0 thh
      xGp ?: p5 xF xG
      yGp ?: p5 yF yG
      xBp ?: p5 xC xB
      yBp ?: p5 yC yB
      en0 at2 sdxF sdyF
      en1 +- en0 21600000 0
      en2 ?: en0 en0 en1
      sw0 +- en2 0 stAng
      sw1 +- sw0 0 21600000
      swAng ?: sw0 sw1 sw0
      stAng0 +- stAng swAng 0
      swAng0 +- 0 0 swAng
      idx cos rw1 2700000
      idy sin rh1 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M xE yE L xD yD A rw2 rh2 istAng iswAng L xBp yBp L xA yA L xGp yGp L xF yF A rw1 rh1 stAng0 swAng0 Z"]},leftRightCircularArrow:{av:"adj1 12500; adj2 1142319; adj3 20457681; adj4 11942319; adj5 12500",gd:`a5 pin 0 adj5 25000
      maxAdj1 */ a5 2 1
      a1 pin 0 adj1 maxAdj1
      enAng pin 1 adj3 21599999
      stAng pin 0 adj4 21599999
      th */ ss a1 100000
      thh */ ss a5 100000
      th2 */ th 1 2
      rw1 +- wd2 th2 thh
      rh1 +- hd2 th2 thh
      rw2 +- rw1 0 th
      rh2 +- rh1 0 th
      rw3 +- rw2 th2 0
      rh3 +- rh2 th2 0
      wtH sin rw3 enAng
      htH cos rh3 enAng
      dxH cat2 rw3 htH wtH
      dyH sat2 rh3 htH wtH
      xH +- hc dxH 0
      yH +- vc dyH 0
      rI min rw2 rh2
      u1 */ dxH dxH 1
      u2 */ dyH dyH 1
      u3 */ rI rI 1
      u4 +- u1 0 u3
      u5 +- u2 0 u3
      u6 */ u4 u5 u1
      u7 */ u6 1 u2
      u8 +- 1 0 u7
      u9 sqrt u8
      u10 */ u4 1 dxH
      u11 */ u10 1 dyH
      u12 +/ 1 u9 u11
      u13 at2 1 u12
      u14 +- u13 21600000 0
      u15 ?: u13 u13 u14
      u16 +- u15 0 enAng
      u17 +- u16 21600000 0
      u18 ?: u16 u16 u17
      u19 +- u18 0 cd2
      u20 +- u18 0 21600000
      u21 ?: u19 u20 u18
      maxAng abs u21
      aAng pin 0 adj2 maxAng
      ptAng +- enAng aAng 0
      wtA sin rw3 ptAng
      htA cos rh3 ptAng
      dxA cat2 rw3 htA wtA
      dyA sat2 rh3 htA wtA
      xA +- hc dxA 0
      yA +- vc dyA 0
      dxG cos thh ptAng
      dyG sin thh ptAng
      xG +- xH dxG 0
      yG +- yH dyG 0
      dxB cos thh ptAng
      dyB sin thh ptAng
      xB +- xH 0 dxB
      yB +- yH 0 dyB
      sx1 +- xB 0 hc
      sy1 +- yB 0 vc
      sx2 +- xG 0 hc
      sy2 +- yG 0 vc
      rO min rw1 rh1
      x1O */ sx1 rO rw1
      y1O */ sy1 rO rh1
      x2O */ sx2 rO rw1
      y2O */ sy2 rO rh1
      dxO +- x2O 0 x1O
      dyO +- y2O 0 y1O
      dO mod dxO dyO 0
      q1 */ x1O y2O 1
      q2 */ x2O y1O 1
      DO +- q1 0 q2
      q3 */ rO rO 1
      q4 */ dO dO 1
      q5 */ q3 q4 1
      q6 */ DO DO 1
      q7 +- q5 0 q6
      q8 max q7 0
      sdelO sqrt q8
      ndyO */ dyO -1 1
      sdyO ?: ndyO -1 1
      q9 */ sdyO dxO 1
      q10 */ q9 sdelO 1
      q11 */ DO dyO 1
      dxF1 +/ q11 q10 q4
      q12 +- q11 0 q10
      dxF2 */ q12 1 q4
      adyO abs dyO
      q13 */ adyO sdelO 1
      q14 */ DO dxO -1
      dyF1 +/ q14 q13 q4
      q15 +- q14 0 q13
      dyF2 */ q15 1 q4
      q16 +- x2O 0 dxF1
      q17 +- x2O 0 dxF2
      q18 +- y2O 0 dyF1
      q19 +- y2O 0 dyF2
      q20 mod q16 q18 0
      q21 mod q17 q19 0
      q22 +- q21 0 q20
      dxF ?: q22 dxF1 dxF2
      dyF ?: q22 dyF1 dyF2
      sdxF */ dxF rw1 rO
      sdyF */ dyF rh1 rO
      xF +- hc sdxF 0
      yF +- vc sdyF 0
      x1I */ sx1 rI rw2
      y1I */ sy1 rI rh2
      x2I */ sx2 rI rw2
      y2I */ sy2 rI rh2
      dxI +- x2I 0 x1I
      dyI +- y2I 0 y1I
      dI mod dxI dyI 0
      v1 */ x1I y2I 1
      v2 */ x2I y1I 1
      DI +- v1 0 v2
      v3 */ rI rI 1
      v4 */ dI dI 1
      v5 */ v3 v4 1
      v6 */ DI DI 1
      v7 +- v5 0 v6
      v8 max v7 0
      sdelI sqrt v8
      v9 */ sdyO dxI 1
      v10 */ v9 sdelI 1
      v11 */ DI dyI 1
      dxC1 +/ v11 v10 v4
      v12 +- v11 0 v10
      dxC2 */ v12 1 v4
      adyI abs dyI
      v13 */ adyI sdelI 1
      v14 */ DI dxI -1
      dyC1 +/ v14 v13 v4
      v15 +- v14 0 v13
      dyC2 */ v15 1 v4
      v16 +- x1I 0 dxC1
      v17 +- x1I 0 dxC2
      v18 +- y1I 0 dyC1
      v19 +- y1I 0 dyC2
      v20 mod v16 v18 0
      v21 mod v17 v19 0
      v22 +- v21 0 v20
      dxC ?: v22 dxC1 dxC2
      dyC ?: v22 dyC1 dyC2
      sdxC */ dxC rw2 rI
      sdyC */ dyC rh2 rI
      xC +- hc sdxC 0
      yC +- vc sdyC 0
      ist0 at2 sdxC sdyC
      ist1 +- ist0 21600000 0
      istAng ?: ist0 ist0 ist1
      p1 +- xF 0 xC
      p2 +- yF 0 yC
      p3 mod p1 p2 0
      p4 */ p3 1 2
      p5 +- p4 0 thh
      xGp ?: p5 xF xG
      yGp ?: p5 yF yG
      xBp ?: p5 xC xB
      yBp ?: p5 yC yB
      en0 at2 sdxF sdyF
      en1 +- en0 21600000 0
      en2 ?: en0 en0 en1
      od0 +- en2 0 enAng
      od1 +- od0 21600000 0
      od2 ?: od0 od0 od1
      st0 +- stAng 0 od2
      st1 +- st0 21600000 0
      st2 ?: st0 st0 st1
      sw0 +- en2 0 st2
      sw1 +- sw0 21600000 0
      swAng ?: sw0 sw0 sw1
      id0 +- istAng 0 enAng
      id1 +- id0 0 21600000
      id2 ?: id0 id1 id0
      ien0 +- stAng 0 id2
      ien1 +- ien0 0 21600000
      ien2 ?: ien1 ien1 ien0
      isw1 +- ien2 0 istAng
      isw2 +- isw1 0 21600000
      iswAng ?: isw1 isw2 isw1
      wtE sin rw1 st2
      htE cos rh1 st2
      dxE cat2 rw1 htE wtE
      dyE sat2 rh1 htE wtE
      xE +- hc dxE 0
      yE +- vc dyE 0
      wtD sin rw2 ien2
      htD cos rh2 ien2
      dxD cat2 rw2 htD wtD
      dyD sat2 rh2 htD wtD
      xD +- hc dxD 0
      yD +- vc dyD 0
      wtI sin rw3 stAng
      htI cos rh3 stAng
      dxI2 cat2 rw3 htI wtI
      dyI2 sat2 rh3 htI wtI
      xI +- hc dxI2 0
      yI +- vc dyI2 0
      aL +- stAng 0 aAng
      wtL sin rw3 aL
      htL cos rh3 aL
      dxL cat2 rw3 htL wtL
      dyL sat2 rh3 htL wtL
      xL +- hc dxL 0
      yL +- vc dyL 0
      dxK cos thh aL
      dyK sin thh aL
      xK +- xI dxK 0
      yK +- yI dyK 0
      xJ +- xI 0 dxK
      yJ +- yI 0 dyK
      xKp ?: p5 xE xK
      yKp ?: p5 yE yK
      xJp ?: p5 xD xJ
      yJp ?: p5 yD yJ
      idx cos rw1 2700000
      idy sin rh1 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M xL yL L xKp yKp L xE yE A rw1 rh1 st2 swAng L xGp yGp L xA yA L xBp yBp L xC yC A rw2 rh2 istAng iswAng L xJp yJp Z"]},stripedRightArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 84375 w ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      x4 */ ss 5 32
      dx5 */ ss a2 100000
      x5 +- r 0 dx5
      dy1 */ h a1 200000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      dx6 */ dy1 dx5 hd2
      x6 +- r 0 dx6`,rect:"x4 y1 x6 y2",paths:["M l y1 L ssd32 y1 L ssd32 y2 L l y2 Z M ssd16 y1 L ssd8 y1 L ssd8 y2 L ssd16 y2 Z M x4 y1 L x5 y1 L x5 t L r vc L x5 b L x5 y2 L x4 y2 Z"]},swooshArrow:{av:"adj1 25000; adj2 16667",gd:`a1 pin 1 adj1 75000
      maxAdj2 */ 70000 w ss
      a2 pin 0 adj2 maxAdj2
      ad1 */ h a1 100000
      ad2 */ ss a2 100000
      xB +- r 0 ad2
      yB +- t ssd8 0
      alfa */ cd4 1 14
      dx0 tan ssd8 alfa
      xC +- xB 0 dx0
      dx1 tan ad1 alfa
      yF +- yB ad1 0
      xF +- xB dx1 0
      xE +- xF dx0 0
      yE +- yF ssd8 0
      dy2 */ yE 1 2
      dy3 */ h 1 20
      yD +- t dy2 dy3
      dy4 */ hd6 1 1
      yP1 +- hd6 dy4 0
      xP1 val wd6
      dy5 */ hd6 1 2
      yP2 +- yF dy5 0
      xP2 val wd4`,paths:["M l b Q xP1 yP1 xB yB L xC t L r yD L xE yE L xF yF Q xP2 yP2 l b Z"]},mathDivide:{av:"adj1 23520; adj2 5880; adj3 11760",gd:`a1 pin 1000 adj1 36745
      ma1 +- 0 0 a1
      ma3h +/ 73490 ma1 4
      ma3w */ 36745 w h
      maxAdj3 min ma3h ma3w
      a3 pin 1000 adj3 maxAdj3
      m4a3 */ -4 a3 1
      maxAdj2 +- 73490 m4a3 a1
      a2 pin 0 adj2 maxAdj2
      dy1 */ h a1 200000
      yg */ h a2 100000
      rad */ h a3 100000
      dx1 */ w 73490 200000
      y3 +- vc 0 dy1
      y4 +- vc dy1 0
      a +- yg rad 0
      y2 +- y3 0 a
      y1 +- y2 0 rad
      y5 +- b 0 y1
      x1 +- hc 0 dx1
      x3 +- hc dx1 0`,rect:"x1 y3 x3 y4",paths:["M hc y1 A rad rad 3cd4 21600000 Z M hc y5 A rad rad cd4 21600000 Z M x1 y3 L x3 y3 L x3 y4 L x1 y4 Z"]},mathEqual:{av:"adj1 23520; adj2 11760",gd:`a1 pin 0 adj1 36745
      2a1 */ a1 2 1
      mAdj2 +- 100000 0 2a1
      a2 pin 0 adj2 mAdj2
      dy1 */ h a1 100000
      dy2 */ h a2 200000
      dx1 */ w 73490 200000
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y1 +- y2 0 dy1
      y4 +- y3 dy1 0
      x1 +- hc 0 dx1
      x2 +- hc dx1 0`,rect:"x1 y1 x2 y4",paths:["M x1 y1 L x2 y1 L x2 y2 L x1 y2 Z M x1 y3 L x2 y3 L x2 y4 L x1 y4 Z"]},mathMultiply:{av:"adj1 23520",gd:`a1 pin 0 adj1 51965
      th */ ss a1 100000
      a at2 w h
      sa sin 1 a
      ca cos 1 a
      ta tan 1 a
      dl mod w h 0
      rw */ dl 51965 100000
      lM +- dl 0 rw
      xM */ ca lM 2
      yM */ sa lM 2
      dxAM */ sa th 2
      dyAM */ ca th 2
      xA +- xM 0 dxAM
      yA +- yM dyAM 0
      xB +- xM dxAM 0
      yB +- yM 0 dyAM
      xBC +- hc 0 xB
      yBC */ xBC ta 1
      yC +- yBC yB 0
      xD +- r 0 xB
      xE +- r 0 xA
      yFE +- vc 0 yA
      xFE */ yFE 1 ta
      xF +- xE 0 xFE
      xL +- xA xFE 0
      yG +- b 0 yA
      yH +- b 0 yB
      yI +- b 0 yC`,rect:"xA yB xE yH",paths:["M xA yA L xB yB L hc yC L xD yB L xE yA L xF vc L xE yG L xD yH L hc yI L xB yH L xA yG L xL vc Z"]},mathNotEqual:{av:"adj1 23520; adj2 6600000; adj3 11760",gd:`a1 pin 0 adj1 50000
      crAng pin 4200000 adj2 6600000
      2a1 */ a1 2 1
      maxAdj3 +- 100000 0 2a1
      a3 pin 0 adj3 maxAdj3
      dy1 */ h a1 100000
      dy2 */ h a3 200000
      dx1 */ w 73490 200000
      x1 +- hc 0 dx1
      x8 +- hc dx1 0
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y1 +- y2 0 dy1
      y4 +- y3 dy1 0
      cadj2 +- crAng 0 cd4
      xadj2 tan hd2 cadj2
      len mod xadj2 hd2 0
      bhw */ len dy1 hd2
      bhw2 */ bhw 1 2
      x7 +- hc xadj2 bhw2
      dx67 */ xadj2 y1 hd2
      x6 +- x7 0 dx67
      dx57 */ xadj2 y2 hd2
      x5 +- x7 0 dx57
      dx47 */ xadj2 y3 hd2
      x4 +- x7 0 dx47
      dx37 */ xadj2 y4 hd2
      x3 +- x7 0 dx37
      rx7 +- x7 bhw 0
      rx6 +- x6 bhw 0
      rx5 +- x5 bhw 0
      rx4 +- x4 bhw 0
      rx3 +- x3 bhw 0
      dx7 */ dy1 hd2 len
      rxt +- x7 dx7 0
      lxt +- rx7 0 dx7
      rx ?: cadj2 rxt rx7
      lx ?: cadj2 x7 lxt
      dy3 */ dy1 xadj2 len
      dy4 +- 0 0 dy3
      ry ?: cadj2 dy3 t
      ly ?: cadj2 t dy4
      dlx +- w 0 rx
      drx +- w 0 lx
      dly +- h 0 ry
      dry +- h 0 ly`,rect:"x1 y1 x8 y4",paths:["M x1 y1 L x6 y1 L lx ly L rx ry L rx6 y1 L x8 y1 L x8 y2 L rx5 y2 L rx4 y3 L x8 y3 L x8 y4 L rx3 y4 L drx dry L dlx dly L x3 y4 L x1 y4 L x1 y3 L x4 y3 L x5 y2 L x1 y2 Z"]},corner:{av:"adj1 50000; adj2 50000",gd:`maxAdj1 */ 100000 h ss
      maxAdj2 */ 100000 w ss
      a1 pin 0 adj1 maxAdj1
      a2 pin 0 adj2 maxAdj2
      x1 */ ss a2 100000
      dy1 */ ss a1 100000
      y1 +- b 0 dy1
      d +- w 0 h
      it ?: d y1 t
      ir ?: d r x1`,rect:"l it ir b",paths:["M l t L x1 t L x1 y1 L r y1 L r b L l b Z"]},halfFrame:{av:"adj1 33333; adj2 33333",gd:`maxAdj2 */ 100000 w ss
      a2 pin 0 adj2 maxAdj2
      x1 */ ss a2 100000
      g1 */ h x1 w
      g2 +- h 0 g1
      maxAdj1 */ 100000 g2 ss
      a1 pin 0 adj1 maxAdj1
      y1 */ ss a1 100000
      dx2 */ y1 w h
      x2 +- r 0 dx2
      dy2 */ x1 h w
      y2 +- b 0 dy2`,paths:["M l t L r t L x2 y1 L x1 y1 L x1 y2 L l b Z"]},diagStripe:{av:"adj 50000",gd:`a pin 0 adj 100000
      x2 */ w a 100000
      x3 +/ x2 r 2
      y2 */ h a 100000
      y3 +/ y2 b 2`,rect:"l t x3 y3",paths:["M l y2 L x2 t L r t L l b Z"]},nonIsoscelesTrapezoid:{av:"adj1 25000; adj2 25000",gd:`maxAdj */ 50000 w ss
      a1 pin 0 adj1 maxAdj
      a2 pin 0 adj2 maxAdj
      x2 */ ss a1 100000
      dx3 */ ss a2 100000
      x3 +- r 0 dx3
      il */ wd3 a1 maxAdj
      adjm max a1 a2
      it */ hd3 adjm maxAdj
      irt */ wd3 a2 maxAdj
      ir +- r 0 irt`,rect:"il it ir b",paths:["M l b L x2 t L x3 t L r b Z"]},pieWedge:{gd:`g1 cos w 13500000
      g2 sin h 13500000
      x1 +- r g1 0
      y1 +- b g2 0`,rect:"x1 y1 r b",paths:["M l b A w h cd2 cd4 L r b Z"]}},Za={triangle:{av:"adj 50000",gd:`a pin 0 adj 100000
      x1 */ w a 200000
      x2 */ w a 100000
      x3 +- x1 wd2 0`,rect:"x1 vc x3 b",paths:["M l b L x2 t L r b Z"]},rtTriangle:{gd:`it */ h 7 12
      ir */ w 7 12
      ib */ h 11 12`,rect:"wd12 it ir ib",paths:["M l b L l t L r b Z"]},parallelogram:{av:"adj 25000",gd:`maxAdj */ 100000 w ss
      a pin 0 adj maxAdj
      x1 */ ss a 200000
      x2 */ ss a 100000
      x6 +- r 0 x1
      x5 +- r 0 x2
      x3 */ x5 1 2
      x4 +- r 0 x3
      q1 */ 5 a maxAdj
      q2 +/ 1 q1 12
      il */ q2 w 1
      it */ q2 h 1
      ir +- r 0 il
      ib +- b 0 it
      q3 */ h hc x2
      y1 pin 0 q3 h
      y2 +- b 0 y1`,rect:"il it ir ib",paths:["M l b L x2 t L r t L x5 b Z"]},trapezoid:{av:"adj 25000",gd:`maxAdj */ 50000 w ss
      a pin 0 adj maxAdj
      x1 */ ss a 200000
      x2 */ ss a 100000
      x3 +- r 0 x2
      x4 +- r 0 x1
      il */ wd3 a maxAdj
      it */ hd3 a maxAdj
      ir +- r 0 il`,rect:"il it ir b",paths:["M l b L x2 t L x3 t L r b Z"]},diamond:{gd:`ir */ w 3 4
      ib */ h 3 4`,rect:"wd4 hd4 ir ib",paths:["M l vc L hc t L r vc L hc b Z"]},pentagon:{av:"hf 105146; vf 110557",gd:`swd2 */ wd2 hf 100000
      shd2 */ hd2 vf 100000
      svc */ vc vf 100000
      dx1 cos swd2 1080000
      dx2 cos swd2 18360000
      dy1 sin shd2 1080000
      dy2 sin shd2 18360000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      y1 +- svc 0 dy1
      y2 +- svc 0 dy2
      it */ y1 dx2 dx1`,rect:"x2 it x3 y2",paths:["M x1 y1 L hc t L x4 y1 L x3 y2 L x2 y2 Z"]},hexagon:{av:"adj 25000; vf 115470",gd:`maxAdj */ 50000 w ss
      a pin 0 adj maxAdj
      shd2 */ hd2 vf 100000
      x1 */ ss a 100000
      x2 +- r 0 x1
      dy1 sin shd2 3600000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      q1 */ maxAdj -1 2
      q2 +- a q1 0
      q3 ?: q2 4 2
      q4 ?: q2 3 2
      q5 ?: q2 q1 0
      q6 +/ a q5 q1
      q7 */ q6 q4 -1
      q8 +- q3 q7 0
      il */ w q8 24
      it */ h q8 24
      ir +- r 0 il
      ib +- b 0 it`,rect:"il it ir ib",paths:["M l vc L x1 y1 L x2 y1 L r vc L x2 y2 L x1 y2 Z"]},heptagon:{av:"hf 102572; vf 105210",gd:`swd2 */ wd2 hf 100000
      shd2 */ hd2 vf 100000
      svc */ vc vf 100000
      dx1 */ swd2 97493 100000
      dx2 */ swd2 78183 100000
      dx3 */ swd2 43388 100000
      dy1 */ shd2 62349 100000
      dy2 */ shd2 22252 100000
      dy3 */ shd2 90097 100000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc 0 dx3
      x4 +- hc dx3 0
      x5 +- hc dx2 0
      x6 +- hc dx1 0
      y1 +- svc 0 dy1
      y2 +- svc dy2 0
      y3 +- svc dy3 0
      ib +- b 0 y1`,rect:"x2 y1 x5 ib",paths:["M x1 y2 L x2 y1 L hc t L x5 y1 L x6 y2 L x4 y3 L x3 y3 Z"]},octagon:{av:"adj 29289",gd:`a pin 0 adj 50000
      x1 */ ss a 100000
      x2 +- r 0 x1
      y2 +- b 0 x1
      il */ x1 1 2
      ir +- r 0 il
      ib +- b 0 il`,rect:"il il ir ib",paths:["M l x1 L x1 t L x2 t L r x1 L r y2 L x2 b L x1 b L l y2 Z"]},decagon:{av:"vf 105146",gd:`shd2 */ hd2 vf 100000
      dx1 cos wd2 2160000
      dx2 cos wd2 4320000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      dy1 sin shd2 4320000
      dy2 sin shd2 2160000
      y1 +- vc 0 dy1
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y4 +- vc dy1 0`,rect:"x1 y2 x4 y3",paths:["M l vc L x1 y2 L x2 y1 L x3 y1 L x4 y2 L r vc L x4 y3 L x3 y4 L x2 y4 L x1 y3 Z"]},dodecagon:{gd:`x1 */ w 2894 21600
      x2 */ w 7906 21600
      x3 */ w 13694 21600
      x4 */ w 18706 21600
      y1 */ h 2894 21600
      y2 */ h 7906 21600
      y3 */ h 13694 21600
      y4 */ h 18706 21600`,rect:"x1 y1 x4 y4",paths:["M l y2 L x1 y1 L x2 t L x3 t L x4 y1 L r y2 L r y3 L x4 y4 L x3 b L x2 b L x1 y4 L l y3 Z"]},plus:{av:"adj 25000",gd:`a pin 0 adj 50000
      x1 */ ss a 100000
      x2 +- r 0 x1
      y2 +- b 0 x1
      d +- w 0 h
      il ?: d l x1
      ir ?: d r x2
      it ?: d x1 t
      ib ?: d y2 b`,rect:"il it ir ib",paths:["M l x1 L x1 x1 L x1 t L x2 t L x2 x1 L r x1 L r y2 L x2 y2 L x2 b L x1 b L x1 y2 L l y2 Z"]},snip1Rect:{av:"adj 16667",gd:`a pin 0 adj 50000
      dx1 */ ss a 100000
      x1 +- r 0 dx1
      it */ dx1 1 2
      ir +/ x1 r 2`,rect:"l it ir b",paths:["M l t L x1 t L r dx1 L r b L l b Z"]},snip2DiagRect:{av:"adj1 0; adj2 16667",gd:`a1 pin 0 adj1 50000
      a2 pin 0 adj2 50000
      lx1 */ ss a1 100000
      lx2 +- r 0 lx1
      ly1 +- b 0 lx1
      rx1 */ ss a2 100000
      rx2 +- r 0 rx1
      ry1 +- b 0 rx1
      d +- lx1 0 rx1
      dx ?: d lx1 rx1
      il */ dx 1 2
      ir +- r 0 il
      ib +- b 0 il`,rect:"il il ir ib",paths:["M lx1 t L rx2 t L r rx1 L r ly1 L lx2 b L rx1 b L l ry1 L l lx1 Z"]},snip2SameRect:{av:"adj1 16667; adj2 0",gd:`a1 pin 0 adj1 50000
      a2 pin 0 adj2 50000
      tx1 */ ss a1 100000
      tx2 +- r 0 tx1
      bx1 */ ss a2 100000
      bx2 +- r 0 bx1
      by1 +- b 0 bx1
      d +- tx1 0 bx1
      dx ?: d tx1 bx1
      il */ dx 1 2
      ir +- r 0 il
      it */ tx1 1 2
      ib +/ by1 b 2`,rect:"il it ir ib",paths:["M tx1 t L tx2 t L r tx1 L r by1 L bx2 b L bx1 b L l by1 L l tx1 Z"]},snipRoundRect:{av:"adj1 16667; adj2 16667",gd:`a1 pin 0 adj1 50000
      a2 pin 0 adj2 50000
      x1 */ ss a1 100000
      dx2 */ ss a2 100000
      x2 +- r 0 dx2
      il */ x1 29289 100000
      ir +/ x2 r 2`,rect:"il il ir b",paths:["M x1 t L x2 t L r dx2 L r b L l b L l x1 A x1 x1 cd2 cd4 Z"]},round1Rect:{av:"adj 16667",gd:`a pin 0 adj 50000
      dx1 */ ss a 100000
      x1 +- r 0 dx1
      idx */ dx1 29289 100000
      ir +- r 0 idx`,rect:"l t ir b",paths:["M l t L x1 t A dx1 dx1 3cd4 cd4 L r b L l b Z"]},round2DiagRect:{av:"adj1 16667; adj2 0",gd:`a1 pin 0 adj1 50000
      a2 pin 0 adj2 50000
      x1 */ ss a1 100000
      y1 +- b 0 x1
      a */ ss a2 100000
      x2 +- r 0 a
      y2 +- b 0 a
      dx1 */ x1 29289 100000
      dx2 */ a 29289 100000
      d +- dx1 0 dx2
      dx ?: d dx1 dx2
      ir +- r 0 dx
      ib +- b 0 dx`,rect:"dx dx ir ib",paths:["M x1 t L x2 t A a a 3cd4 cd4 L r y1 A x1 x1 0 cd4 L a b A a a cd4 cd4 L l x1 A x1 x1 cd2 cd4 Z"]},round2SameRect:{av:"adj1 16667; adj2 0",gd:`a1 pin 0 adj1 50000
      a2 pin 0 adj2 50000
      tx1 */ ss a1 100000
      tx2 +- r 0 tx1
      bx1 */ ss a2 100000
      bx2 +- r 0 bx1
      by1 +- b 0 bx1
      d +- tx1 0 bx1
      tdx */ tx1 29289 100000
      bdx */ bx1 29289 100000
      il ?: d tdx bdx
      ir +- r 0 il
      ib +- b 0 bdx`,rect:"il tdx ir ib",paths:["M tx1 t L tx2 t A tx1 tx1 3cd4 cd4 L r by1 A bx1 bx1 0 cd4 L bx1 b A bx1 bx1 cd4 cd4 L l tx1 A tx1 tx1 cd2 cd4 Z"]},pie:{av:"adj1 0; adj2 16200000",gd:`stAng pin 0 adj1 21599999
      enAng pin 0 adj2 21599999
      sw1 +- enAng 0 stAng
      sw2 +- sw1 21600000 0
      swAng ?: sw1 sw1 sw2
      wt1 sin wd2 stAng
      ht1 cos hd2 stAng
      dx1 cat2 wd2 ht1 wt1
      dy1 sat2 hd2 ht1 wt1
      x1 +- hc dx1 0
      y1 +- vc dy1 0
      wt2 sin wd2 enAng
      ht2 cos hd2 enAng
      dx2 cat2 wd2 ht2 wt2
      dy2 sat2 hd2 ht2 wt2
      x2 +- hc dx2 0
      y2 +- vc dy2 0
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,paths:["M x1 y1 A wd2 hd2 stAng swAng L hc vc Z"]},arc:{av:"adj1 16200000; adj2 0",gd:`stAng pin 0 adj1 21599999
      enAng pin 0 adj2 21599999
      sw11 +- enAng 0 stAng
      sw12 +- sw11 21600000 0
      swAng ?: sw11 sw11 sw12
      wt1 sin wd2 stAng
      ht1 cos hd2 stAng
      dx1 cat2 wd2 ht1 wt1
      dy1 sat2 hd2 ht1 wt1
      x1 +- hc dx1 0
      y1 +- vc dy1 0
      wt2 sin wd2 enAng
      ht2 cos hd2 enAng
      dx2 cat2 wd2 ht2 wt2
      dy2 sat2 hd2 ht2 wt2
      x2 +- hc dx2 0
      y2 +- vc dy2 0
      sw0 +- 21600000 0 stAng
      da1 +- swAng 0 sw0
      g1 max x1 x2
      ir ?: da1 r g1
      sw1 +- cd4 0 stAng
      sw2 +- 27000000 0 stAng
      sw3 ?: sw1 sw1 sw2
      da2 +- swAng 0 sw3
      g5 max y1 y2
      ib ?: da2 b g5
      sw4 +- cd2 0 stAng
      sw5 +- 32400000 0 stAng
      sw6 ?: sw4 sw4 sw5
      da3 +- swAng 0 sw6
      g9 min x1 x2
      il ?: da3 l g9
      sw7 +- 3cd4 0 stAng
      sw8 +- 37800000 0 stAng
      sw9 ?: sw7 sw7 sw8
      da4 +- swAng 0 sw9
      g13 min y1 y2
      it ?: da4 t g13`,rect:"il it ir ib",paths:["stroke=0 M x1 y1 A wd2 hd2 stAng swAng L hc vc Z","fill=none M x1 y1 A wd2 hd2 stAng swAng"]},chord:{av:"adj1 2700000; adj2 16200000",gd:`stAng pin 0 adj1 21599999
      enAng pin 0 adj2 21599999
      sw1 +- enAng 0 stAng
      sw2 +- sw1 21600000 0
      swAng ?: sw1 sw1 sw2
      wt1 sin wd2 stAng
      ht1 cos hd2 stAng
      dx1 cat2 wd2 ht1 wt1
      dy1 sat2 hd2 ht1 wt1
      x1 +- hc dx1 0
      y1 +- vc dy1 0
      wt2 sin wd2 enAng
      ht2 cos hd2 enAng
      dx2 cat2 wd2 ht2 wt2
      dy2 sat2 hd2 ht2 wt2
      x2 +- hc dx2 0
      y2 +- vc dy2 0
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M x1 y1 A wd2 hd2 stAng swAng Z"]},blockArc:{av:"adj1 10800000; adj2 0; adj3 25000",gd:`stAng pin 0 adj1 21599999
      istAng pin 0 adj2 21599999
      a3 pin 0 adj3 50000
      sw11 +- istAng 0 stAng
      sw12 +- sw11 21600000 0
      swAng ?: sw11 sw11 sw12
      iswAng +- 0 0 swAng
      wt1 sin wd2 stAng
      ht1 cos hd2 stAng
      wt3 sin wd2 istAng
      ht3 cos hd2 istAng
      dx1 cat2 wd2 ht1 wt1
      dy1 sat2 hd2 ht1 wt1
      dx3 cat2 wd2 ht3 wt3
      dy3 sat2 hd2 ht3 wt3
      x1 +- hc dx1 0
      y1 +- vc dy1 0
      x3 +- hc dx3 0
      y3 +- vc dy3 0
      dr */ ss a3 100000
      iwd2 +- wd2 0 dr
      ihd2 +- hd2 0 dr
      wt2 sin iwd2 istAng
      ht2 cos ihd2 istAng
      wt4 sin iwd2 stAng
      ht4 cos ihd2 stAng
      dx2 cat2 iwd2 ht2 wt2
      dy2 sat2 ihd2 ht2 wt2
      dx4 cat2 iwd2 ht4 wt4
      dy4 sat2 ihd2 ht4 wt4
      x2 +- hc dx2 0
      y2 +- vc dy2 0
      x4 +- hc dx4 0
      y4 +- vc dy4 0
      sw0 +- 21600000 0 stAng
      da1 +- swAng 0 sw0
      g1 max x1 x2
      g2 max x3 x4
      g3 max g1 g2
      ir ?: da1 r g3
      sw1 +- cd4 0 stAng
      sw2 +- 27000000 0 stAng
      sw3 ?: sw1 sw1 sw2
      da2 +- swAng 0 sw3
      g5 max y1 y2
      g6 max y3 y4
      g7 max g5 g6
      ib ?: da2 b g7
      sw4 +- cd2 0 stAng
      sw5 +- 32400000 0 stAng
      sw6 ?: sw4 sw4 sw5
      da3 +- swAng 0 sw6
      g9 min x1 x2
      g10 min x3 x4
      g11 min g9 g10
      il ?: da3 l g11
      sw7 +- 3cd4 0 stAng
      sw8 +- 37800000 0 stAng
      sw9 ?: sw7 sw7 sw8
      da4 +- swAng 0 sw9
      g13 min y1 y2
      g14 min y3 y4
      g15 min g13 g14
      it ?: da4 t g15`,rect:"il it ir ib",paths:["M x1 y1 A wd2 hd2 stAng swAng L x2 y2 A iwd2 ihd2 istAng iswAng Z"]}},Qa={borderCallout1:{av:"adj1 18750; adj2 -8333; adj3 112500; adj4 -38333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000`,rect:"l t r b",paths:["M l t L r t L r b L l b Z","fill=none M x1 y1 L x2 y2"]},accentCallout1:{av:"adj1 18750; adj2 -8333; adj3 112500; adj4 -38333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000`,rect:"l t r b",paths:["stroke=0 M l t L r t L r b L l b Z","fill=none M x1 t Z L x1 b","fill=none M x1 y1 L x2 y2"]},callout1:{av:"adj1 18750; adj2 -8333; adj3 112500; adj4 -38333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000`,rect:"l t r b",paths:["stroke=0 M l t L r t L r b L l b Z","fill=none M x1 y1 L x2 y2"]},accentBorderCallout1:{av:"adj1 18750; adj2 -8333; adj3 112500; adj4 -38333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000`,rect:"l t r b",paths:["M l t L r t L r b L l b Z","fill=none M x1 t Z L x1 b","fill=none M x1 y1 L x2 y2"]},borderCallout2:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 112500; adj6 -46667",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000`,rect:"l t r b",paths:["M l t L r t L r b L l b Z","fill=none M x1 y1 L x2 y2 L x3 y3"]},accentCallout2:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 112500; adj6 -46667",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000`,rect:"l t r b",paths:["stroke=0 M l t L r t L r b L l b Z","fill=none M x1 t Z L x1 b","fill=none M x1 y1 L x2 y2 L x3 y3"]},callout2:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 112500; adj6 -46667",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000`,rect:"l t r b",paths:["stroke=0 M l t L r t L r b L l b Z","fill=none M x1 y1 L x2 y2 L x3 y3"]},accentBorderCallout2:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 112500; adj6 -46667",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000`,rect:"l t r b",paths:["M l t L r t L r b L l b Z","fill=none M x1 t Z L x1 b","fill=none M x1 y1 L x2 y2 L x3 y3"]},borderCallout3:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 100000; adj6 -16667; adj7 112963; adj8 -8333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000
      y4 */ h adj7 100000
      x4 */ w adj8 100000`,rect:"l t r b",paths:["M l t L r t L r b L l b Z","fill=none M x1 y1 L x2 y2 L x3 y3 L x4 y4"]},accentCallout3:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 100000; adj6 -16667; adj7 112963; adj8 -8333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000
      y4 */ h adj7 100000
      x4 */ w adj8 100000`,rect:"l t r b",paths:["stroke=0 M l t L r t L r b L l b Z","fill=none M x1 t Z L x1 b","fill=none M x1 y1 L x2 y2 L x3 y3 L x4 y4"]},callout3:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 100000; adj6 -16667; adj7 112963; adj8 -8333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000
      y4 */ h adj7 100000
      x4 */ w adj8 100000`,rect:"l t r b",paths:["stroke=0 M l t L r t L r b L l b Z","fill=none M x1 y1 L x2 y2 L x3 y3 L x4 y4"]},accentBorderCallout3:{av:"adj1 18750; adj2 -8333; adj3 18750; adj4 -16667; adj5 100000; adj6 -16667; adj7 112963; adj8 -8333",gd:`y1 */ h adj1 100000
      x1 */ w adj2 100000
      y2 */ h adj3 100000
      x2 */ w adj4 100000
      y3 */ h adj5 100000
      x3 */ w adj6 100000
      y4 */ h adj7 100000
      x4 */ w adj8 100000`,rect:"l t r b",paths:["M l t L r t L r b L l b Z","fill=none M x1 t Z L x1 b","fill=none M x1 y1 L x2 y2 L x3 y3 L x4 y4"]},rightArrowCallout:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 64977",gd:`maxAdj2 */ 50000 h ss
      a2 pin 0 adj2 maxAdj2
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 */ 100000 w ss
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 ss w
      maxAdj4 +- 100000 0 q2
      a4 pin 0 adj4 maxAdj4
      dy1 */ ss a2 100000
      dy2 */ ss a1 200000
      y1 +- vc 0 dy1
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y4 +- vc dy1 0
      dx3 */ ss a3 100000
      x3 +- r 0 dx3
      x2 */ w a4 100000
      x1 */ x2 1 2`,rect:"l t x2 b",paths:["M l t L x2 t L x2 y2 L x3 y2 L x3 y1 L r vc L x3 y4 L x3 y3 L x2 y3 L x2 b L l b Z"]},leftArrowCallout:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 64977",gd:`maxAdj2 */ 50000 h ss
      a2 pin 0 adj2 maxAdj2
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 */ 100000 w ss
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 ss w
      maxAdj4 +- 100000 0 q2
      a4 pin 0 adj4 maxAdj4
      dy1 */ ss a2 100000
      dy2 */ ss a1 200000
      y1 +- vc 0 dy1
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y4 +- vc dy1 0
      x1 */ ss a3 100000
      dx2 */ w a4 100000
      x2 +- r 0 dx2
      x3 +/ x2 r 2`,rect:"x2 t r b",paths:["M l vc L x1 y1 L x1 y2 L x2 y2 L x2 t L r t L r b L x2 b L x2 y3 L x1 y3 L x1 y4 Z"]},downArrowCallout:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 64977",gd:`maxAdj2 */ 50000 w ss
      a2 pin 0 adj2 maxAdj2
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 */ 100000 h ss
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 ss h
      maxAdj4 +- 100000 0 q2
      a4 pin 0 adj4 maxAdj4
      dx1 */ ss a2 100000
      dx2 */ ss a1 200000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      dy3 */ ss a3 100000
      y3 +- b 0 dy3
      y2 */ h a4 100000
      y1 */ y2 1 2`,rect:"l t r y2",paths:["M l t L r t L r y2 L x3 y2 L x3 y3 L x4 y3 L hc b L x1 y3 L x2 y3 L x2 y2 L l y2 Z"]},upArrowCallout:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 64977",gd:`maxAdj2 */ 50000 w ss
      a2 pin 0 adj2 maxAdj2
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 */ 100000 h ss
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 ss h
      maxAdj4 +- 100000 0 q2
      a4 pin 0 adj4 maxAdj4
      dx1 */ ss a2 100000
      dx2 */ ss a1 200000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      y1 */ ss a3 100000
      dy2 */ h a4 100000
      y2 +- b 0 dy2
      y3 +/ y2 b 2`,rect:"l y2 r b",paths:["M l y2 L x2 y2 L x2 y1 L x1 y1 L hc t L x4 y1 L x3 y1 L x3 y2 L r y2 L r b L l b Z"]},leftRightArrowCallout:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 48123",gd:`maxAdj2 */ 50000 h ss
      a2 pin 0 adj2 maxAdj2
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 */ 50000 w ss
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 ss wd2
      maxAdj4 +- 100000 0 q2
      a4 pin 0 adj4 maxAdj4
      dy1 */ ss a2 100000
      dy2 */ ss a1 200000
      y1 +- vc 0 dy1
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y4 +- vc dy1 0
      x1 */ ss a3 100000
      x4 +- r 0 x1
      dx2 */ w a4 200000
      x2 +- hc 0 dx2
      x3 +- hc dx2 0`,rect:"x2 t x3 b",paths:["M l vc L x1 y1 L x1 y2 L x2 y2 L x2 t L x3 t L x3 y2 L x4 y2 L x4 y1 L r vc L x4 y4 L x4 y3 L x3 y3 L x3 b L x2 b L x2 y3 L x1 y3 L x1 y4 Z"]},upDownArrowCallout:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 48123",gd:`maxAdj2 */ 50000 w ss
      a2 pin 0 adj2 maxAdj2
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 */ 50000 h ss
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 ss hd2
      maxAdj4 +- 100000 0 q2
      a4 pin 0 adj4 maxAdj4
      dx1 */ ss a2 100000
      dx2 */ ss a1 200000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      y1 */ ss a3 100000
      y4 +- b 0 y1
      dy2 */ h a4 200000
      y2 +- vc 0 dy2
      y3 +- vc dy2 0`,rect:"l y2 r y3",paths:["M l y2 L x2 y2 L x2 y1 L x1 y1 L hc t L x4 y1 L x3 y1 L x3 y2 L r y2 L r y3 L x3 y3 L x3 y4 L x4 y4 L hc b L x1 y4 L x2 y4 L x2 y3 L l y3 Z"]},quadArrowCallout:{av:"adj1 18515; adj2 18515; adj3 18515; adj4 48123",gd:`a2 pin 0 adj2 50000
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      maxAdj3 +- 50000 0 a2
      a3 pin 0 adj3 maxAdj3
      q2 */ a3 2 1
      maxAdj4 +- 100000 0 q2
      a4 pin a1 adj4 maxAdj4
      dx2 */ ss a2 100000
      dx3 */ ss a1 200000
      ah */ ss a3 100000
      dx1 */ w a4 200000
      dy1 */ h a4 200000
      x8 +- r 0 ah
      x2 +- hc 0 dx1
      x7 +- hc dx1 0
      x3 +- hc 0 dx2
      x6 +- hc dx2 0
      x4 +- hc 0 dx3
      x5 +- hc dx3 0
      y8 +- b 0 ah
      y2 +- vc 0 dy1
      y7 +- vc dy1 0
      y3 +- vc 0 dx2
      y6 +- vc dx2 0
      y4 +- vc 0 dx3
      y5 +- vc dx3 0`,rect:"x2 y2 x7 y7",paths:["M l vc L ah y3 L ah y4 L x2 y4 L x2 y2 L x4 y2 L x4 ah L x3 ah L hc t L x6 ah L x5 ah L x5 y2 L x7 y2 L x7 y4 L x8 y4 L x8 y3 L r vc L x8 y6 L x8 y5 L x7 y5 L x7 y7 L x5 y7 L x5 y8 L x6 y8 L hc b L x3 y8 L x4 y8 L x4 y7 L x2 y7 L x2 y5 L ah y5 L ah y6 Z"]}},$a={star4:{av:"adj 12500",gd:`a pin 0 adj 50000
      iwd2 */ wd2 a 50000
      ihd2 */ hd2 a 50000
      sdx cos iwd2 2700000
      sdy sin ihd2 2700000
      sx1 +- hc 0 sdx
      sx2 +- hc sdx 0
      sy1 +- vc 0 sdy
      sy2 +- vc sdy 0`,rect:"sx1 sy1 sx2 sy2",paths:["M l vc L sx1 sy1 L hc t L sx2 sy1 L r vc L sx2 sy2 L hc b L sx1 sy2 Z"]},star5:{av:"adj 19098; hf 105146; vf 110557",gd:`a pin 0 adj 50000
      swd2 */ wd2 hf 100000
      shd2 */ hd2 vf 100000
      svc */ vc vf 100000
      dx1 cos swd2 1080000
      dx2 cos swd2 18360000
      dy1 sin shd2 1080000
      dy2 sin shd2 18360000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      y1 +- svc 0 dy1
      y2 +- svc 0 dy2
      iwd2 */ swd2 a 50000
      ihd2 */ shd2 a 50000
      sdx1 cos iwd2 20520000
      sdx2 cos iwd2 3240000
      sdy1 sin ihd2 3240000
      sdy2 sin ihd2 20520000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc sdx2 0
      sx4 +- hc sdx1 0
      sy1 +- svc 0 sdy1
      sy2 +- svc 0 sdy2
      sy3 +- svc ihd2 0`,rect:"sx1 sy1 sx4 sy3",paths:["M x1 y1 L sx2 sy1 L hc t L sx3 sy1 L x4 y1 L sx4 sy2 L x3 y2 L hc sy3 L x2 y2 L sx1 sy2 Z"]},star6:{av:"adj 28868; hf 115470",gd:`a pin 0 adj 50000
      swd2 */ wd2 hf 100000
      dx1 cos swd2 1800000
      x1 +- hc 0 dx1
      x2 +- hc dx1 0
      y2 +- vc hd4 0
      iwd2 */ swd2 a 50000
      ihd2 */ hd2 a 50000
      sdx2 */ iwd2 1 2
      sx1 +- hc 0 iwd2
      sx2 +- hc 0 sdx2
      sx3 +- hc sdx2 0
      sx4 +- hc iwd2 0
      sdy1 sin ihd2 3600000
      sy1 +- vc 0 sdy1
      sy2 +- vc sdy1 0`,rect:"sx1 sy1 sx4 sy2",paths:["M x1 hd4 L sx2 sy1 L hc t L sx3 sy1 L x2 hd4 L sx4 vc L x2 y2 L sx3 sy2 L hc b L sx2 sy2 L x1 y2 L sx1 vc Z"]},star7:{av:"adj 34601; hf 102572; vf 105210",gd:`a pin 0 adj 50000
      swd2 */ wd2 hf 100000
      shd2 */ hd2 vf 100000
      svc */ vc vf 100000
      dx1 */ swd2 97493 100000
      dx2 */ swd2 78183 100000
      dx3 */ swd2 43388 100000
      dy1 */ shd2 62349 100000
      dy2 */ shd2 22252 100000
      dy3 */ shd2 90097 100000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc 0 dx3
      x4 +- hc dx3 0
      x5 +- hc dx2 0
      x6 +- hc dx1 0
      y1 +- svc 0 dy1
      y2 +- svc dy2 0
      y3 +- svc dy3 0
      iwd2 */ swd2 a 50000
      ihd2 */ shd2 a 50000
      sdx1 */ iwd2 97493 100000
      sdx2 */ iwd2 78183 100000
      sdx3 */ iwd2 43388 100000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc 0 sdx3
      sx4 +- hc sdx3 0
      sx5 +- hc sdx2 0
      sx6 +- hc sdx1 0
      sdy1 */ ihd2 90097 100000
      sdy2 */ ihd2 22252 100000
      sdy3 */ ihd2 62349 100000
      sy1 +- svc 0 sdy1
      sy2 +- svc 0 sdy2
      sy3 +- svc sdy3 0
      sy4 +- svc ihd2 0`,rect:"sx2 sy1 sx5 sy3",paths:["M x1 y2 L sx1 sy2 L x2 y1 L sx3 sy1 L hc t L sx4 sy1 L x5 y1 L sx6 sy2 L x6 y2 L sx5 sy3 L x4 y3 L hc sy4 L x3 y3 L sx2 sy3 Z"]},star8:{av:"adj 37500",gd:`a pin 0 adj 50000
      dx1 cos wd2 2700000
      x1 +- hc 0 dx1
      x2 +- hc dx1 0
      dy1 sin hd2 2700000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      iwd2 */ wd2 a 50000
      ihd2 */ hd2 a 50000
      sdx1 */ iwd2 92388 100000
      sdx2 */ iwd2 38268 100000
      sdy1 */ ihd2 92388 100000
      sdy2 */ ihd2 38268 100000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc sdx2 0
      sx4 +- hc sdx1 0
      sy1 +- vc 0 sdy1
      sy2 +- vc 0 sdy2
      sy3 +- vc sdy2 0
      sy4 +- vc sdy1 0`,rect:"sx1 sy1 sx4 sy4",paths:["M l vc L sx1 sy2 L x1 y1 L sx2 sy1 L hc t L sx3 sy1 L x2 y1 L sx4 sy2 L r vc L sx4 sy3 L x2 y2 L sx3 sy4 L hc b L sx2 sy4 L x1 y2 L sx1 sy3 Z"]},star10:{av:"adj 42533; hf 105146",gd:`a pin 0 adj 50000
      swd2 */ wd2 hf 100000
      dx1 */ swd2 95106 100000
      dx2 */ swd2 58779 100000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      dy1 */ hd2 80902 100000
      dy2 */ hd2 30902 100000
      y1 +- vc 0 dy1
      y2 +- vc 0 dy2
      y3 +- vc dy2 0
      y4 +- vc dy1 0
      iwd2 */ swd2 a 50000
      ihd2 */ hd2 a 50000
      sdx1 */ iwd2 80902 100000
      sdx2 */ iwd2 30902 100000
      sdy1 */ ihd2 95106 100000
      sdy2 */ ihd2 58779 100000
      sx1 +- hc 0 iwd2
      sx2 +- hc 0 sdx1
      sx3 +- hc 0 sdx2
      sx4 +- hc sdx2 0
      sx5 +- hc sdx1 0
      sx6 +- hc iwd2 0
      sy1 +- vc 0 sdy1
      sy2 +- vc 0 sdy2
      sy3 +- vc sdy2 0
      sy4 +- vc sdy1 0`,rect:"sx2 sy2 sx5 sy3",paths:["M x1 y2 L sx2 sy2 L x2 y1 L sx3 sy1 L hc t L sx4 sy1 L x3 y1 L sx5 sy2 L x4 y2 L sx6 vc L x4 y3 L sx5 sy3 L x3 y4 L sx4 sy4 L hc b L sx3 sy4 L x2 y4 L sx2 sy3 L x1 y3 L sx1 vc Z"]},star12:{av:"adj 37500",gd:`a pin 0 adj 50000
      dx1 cos wd2 1800000
      dy1 sin hd2 3600000
      x1 +- hc 0 dx1
      x3 */ w 3 4
      x4 +- hc dx1 0
      y1 +- vc 0 dy1
      y3 */ h 3 4
      y4 +- vc dy1 0
      iwd2 */ wd2 a 50000
      ihd2 */ hd2 a 50000
      sdx1 cos iwd2 900000
      sdx2 cos iwd2 2700000
      sdx3 cos iwd2 4500000
      sdy1 sin ihd2 4500000
      sdy2 sin ihd2 2700000
      sdy3 sin ihd2 900000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc 0 sdx3
      sx4 +- hc sdx3 0
      sx5 +- hc sdx2 0
      sx6 +- hc sdx1 0
      sy1 +- vc 0 sdy1
      sy2 +- vc 0 sdy2
      sy3 +- vc 0 sdy3
      sy4 +- vc sdy3 0
      sy5 +- vc sdy2 0
      sy6 +- vc sdy1 0`,rect:"sx2 sy2 sx5 sy5",paths:["M l vc L sx1 sy3 L x1 hd4 L sx2 sy2 L wd4 y1 L sx3 sy1 L hc t L sx4 sy1 L x3 y1 L sx5 sy2 L x4 hd4 L sx6 sy3 L r vc L sx6 sy4 L x4 y3 L sx5 sy5 L x3 y4 L sx4 sy6 L hc b L sx3 sy6 L wd4 y4 L sx2 sy5 L x1 y3 L sx1 sy4 Z"]},star16:{av:"adj 37500",gd:`a pin 0 adj 50000
      dx1 */ wd2 92388 100000
      dx2 */ wd2 70711 100000
      dx3 */ wd2 38268 100000
      dy1 */ hd2 38268 100000
      dy2 */ hd2 70711 100000
      dy3 */ hd2 92388 100000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc 0 dx3
      x4 +- hc dx3 0
      x5 +- hc dx2 0
      x6 +- hc dx1 0
      y1 +- vc 0 dy3
      y2 +- vc 0 dy2
      y3 +- vc 0 dy1
      y4 +- vc dy1 0
      y5 +- vc dy2 0
      y6 +- vc dy3 0
      iwd2 */ wd2 a 50000
      ihd2 */ hd2 a 50000
      sdx1 */ iwd2 98079 100000
      sdx2 */ iwd2 83147 100000
      sdx3 */ iwd2 55557 100000
      sdx4 */ iwd2 19509 100000
      sdy1 */ ihd2 98079 100000
      sdy2 */ ihd2 83147 100000
      sdy3 */ ihd2 55557 100000
      sdy4 */ ihd2 19509 100000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc 0 sdx3
      sx4 +- hc 0 sdx4
      sx5 +- hc sdx4 0
      sx6 +- hc sdx3 0
      sx7 +- hc sdx2 0
      sx8 +- hc sdx1 0
      sy1 +- vc 0 sdy1
      sy2 +- vc 0 sdy2
      sy3 +- vc 0 sdy3
      sy4 +- vc 0 sdy4
      sy5 +- vc sdy4 0
      sy6 +- vc sdy3 0
      sy7 +- vc sdy2 0
      sy8 +- vc sdy1 0
      idx cos iwd2 2700000
      idy sin ihd2 2700000
      il +- hc 0 idx
      it +- vc 0 idy
      ir +- hc idx 0
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M l vc L sx1 sy4 L x1 y3 L sx2 sy3 L x2 y2 L sx3 sy2 L x3 y1 L sx4 sy1 L hc t L sx5 sy1 L x4 y1 L sx6 sy2 L x5 y2 L sx7 sy3 L x6 y3 L sx8 sy4 L r vc L sx8 sy5 L x6 y4 L sx7 sy6 L x5 y5 L sx6 sy7 L x4 y6 L sx5 sy8 L hc b L sx4 sy8 L x3 y6 L sx3 sy7 L x2 y5 L sx2 sy6 L x1 y4 L sx1 sy5 Z"]},star24:{av:"adj 37500",gd:`a pin 0 adj 50000
      dx1 */ wd2 96593 100000
      dx2 */ wd2 86603 100000
      dx3 */ wd2 70711 100000
      dx4 */ wd2 50000 100000
      dx5 */ wd2 25882 100000
      dy1 */ hd2 25882 100000
      dy2 */ hd2 50000 100000
      dy3 */ hd2 70711 100000
      dy4 */ hd2 86603 100000
      dy5 */ hd2 96593 100000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc 0 dx3
      x4 +- hc 0 dx4
      x5 +- hc 0 dx5
      x6 +- hc dx5 0
      x7 +- hc dx4 0
      x8 +- hc dx3 0
      x9 +- hc dx2 0
      x10 +- hc dx1 0
      y1 +- vc 0 dy5
      y2 +- vc 0 dy4
      y3 +- vc 0 dy3
      y4 +- vc 0 dy2
      y5 +- vc 0 dy1
      y6 +- vc dy1 0
      y7 +- vc dy2 0
      y8 +- vc dy3 0
      y9 +- vc dy4 0
      y10 +- vc dy5 0
      iwd2 */ wd2 a 50000
      ihd2 */ hd2 a 50000
      sdx1 */ iwd2 99144 100000
      sdx2 */ iwd2 92388 100000
      sdx3 */ iwd2 79335 100000
      sdx4 */ iwd2 60876 100000
      sdx5 */ iwd2 38268 100000
      sdx6 */ iwd2 13053 100000
      sdy1 */ ihd2 99144 100000
      sdy2 */ ihd2 92388 100000
      sdy3 */ ihd2 79335 100000
      sdy4 */ ihd2 60876 100000
      sdy5 */ ihd2 38268 100000
      sdy6 */ ihd2 13053 100000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc 0 sdx3
      sx4 +- hc 0 sdx4
      sx5 +- hc 0 sdx5
      sx6 +- hc 0 sdx6
      sx7 +- hc sdx6 0
      sx8 +- hc sdx5 0
      sx9 +- hc sdx4 0
      sx10 +- hc sdx3 0
      sx11 +- hc sdx2 0
      sx12 +- hc sdx1 0
      sy1 +- vc 0 sdy1
      sy2 +- vc 0 sdy2
      sy3 +- vc 0 sdy3
      sy4 +- vc 0 sdy4
      sy5 +- vc 0 sdy5
      sy6 +- vc 0 sdy6
      sy7 +- vc sdy6 0
      sy8 +- vc sdy5 0
      sy9 +- vc sdy4 0
      sy10 +- vc sdy3 0
      sy11 +- vc sdy2 0
      sy12 +- vc sdy1 0
      idx cos iwd2 2700000
      idy sin ihd2 2700000
      il +- hc 0 idx
      it +- vc 0 idy
      ir +- hc idx 0
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M l vc L sx1 sy6 L x1 y5 L sx2 sy5 L x2 y4 L sx3 sy4 L x3 y3 L sx4 sy3 L x4 y2 L sx5 sy2 L x5 y1 L sx6 sy1 L hc t L sx7 sy1 L x6 y1 L sx8 sy2 L x7 y2 L sx9 sy3 L x8 y3 L sx10 sy4 L x9 y4 L sx11 sy5 L x10 y5 L sx12 sy6 L r vc L sx12 sy7 L x10 y6 L sx11 sy8 L x9 y7 L sx10 sy9 L x8 y8 L sx9 sy10 L x7 y9 L sx8 sy11 L x6 y10 L sx7 sy12 L hc b L sx6 sy12 L x5 y10 L sx5 sy11 L x4 y9 L sx4 sy10 L x3 y8 L sx3 sy9 L x2 y7 L sx2 sy8 L x1 y6 L sx1 sy7 Z"]},star32:{av:"adj 37500",gd:`a pin 0 adj 50000
      dx1 */ wd2 98079 100000
      dx2 */ wd2 92388 100000
      dx3 */ wd2 83147 100000
      dx4 */ wd2 70711 100000
      dx5 */ wd2 55557 100000
      dx6 */ wd2 38268 100000
      dx7 */ wd2 19509 100000
      dy1 */ hd2 19509 100000
      dy2 */ hd2 38268 100000
      dy3 */ hd2 55557 100000
      dy4 */ hd2 70711 100000
      dy5 */ hd2 83147 100000
      dy6 */ hd2 92388 100000
      dy7 */ hd2 98079 100000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc 0 dx3
      x4 +- hc 0 dx4
      x5 +- hc 0 dx5
      x6 +- hc 0 dx6
      x7 +- hc 0 dx7
      x8 +- hc dx7 0
      x9 +- hc dx6 0
      x10 +- hc dx5 0
      x11 +- hc dx4 0
      x12 +- hc dx3 0
      x13 +- hc dx2 0
      x14 +- hc dx1 0
      y1 +- vc 0 dy7
      y2 +- vc 0 dy6
      y3 +- vc 0 dy5
      y4 +- vc 0 dy4
      y5 +- vc 0 dy3
      y6 +- vc 0 dy2
      y7 +- vc 0 dy1
      y8 +- vc dy1 0
      y9 +- vc dy2 0
      y10 +- vc dy3 0
      y11 +- vc dy4 0
      y12 +- vc dy5 0
      y13 +- vc dy6 0
      y14 +- vc dy7 0
      iwd2 */ wd2 a 50000
      ihd2 */ hd2 a 50000
      sdx1 */ iwd2 99518 100000
      sdx2 */ iwd2 95694 100000
      sdx3 */ iwd2 88192 100000
      sdx4 */ iwd2 77301 100000
      sdx5 */ iwd2 63439 100000
      sdx6 */ iwd2 47140 100000
      sdx7 */ iwd2 29028 100000
      sdx8 */ iwd2 9802 100000
      sdy1 */ ihd2 99518 100000
      sdy2 */ ihd2 95694 100000
      sdy3 */ ihd2 88192 100000
      sdy4 */ ihd2 77301 100000
      sdy5 */ ihd2 63439 100000
      sdy6 */ ihd2 47140 100000
      sdy7 */ ihd2 29028 100000
      sdy8 */ ihd2 9802 100000
      sx1 +- hc 0 sdx1
      sx2 +- hc 0 sdx2
      sx3 +- hc 0 sdx3
      sx4 +- hc 0 sdx4
      sx5 +- hc 0 sdx5
      sx6 +- hc 0 sdx6
      sx7 +- hc 0 sdx7
      sx8 +- hc 0 sdx8
      sx9 +- hc sdx8 0
      sx10 +- hc sdx7 0
      sx11 +- hc sdx6 0
      sx12 +- hc sdx5 0
      sx13 +- hc sdx4 0
      sx14 +- hc sdx3 0
      sx15 +- hc sdx2 0
      sx16 +- hc sdx1 0
      sy1 +- vc 0 sdy1
      sy2 +- vc 0 sdy2
      sy3 +- vc 0 sdy3
      sy4 +- vc 0 sdy4
      sy5 +- vc 0 sdy5
      sy6 +- vc 0 sdy6
      sy7 +- vc 0 sdy7
      sy8 +- vc 0 sdy8
      sy9 +- vc sdy8 0
      sy10 +- vc sdy7 0
      sy11 +- vc sdy6 0
      sy12 +- vc sdy5 0
      sy13 +- vc sdy4 0
      sy14 +- vc sdy3 0
      sy15 +- vc sdy2 0
      sy16 +- vc sdy1 0
      idx cos iwd2 2700000
      idy sin ihd2 2700000
      il +- hc 0 idx
      it +- vc 0 idy
      ir +- hc idx 0
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M l vc L sx1 sy8 L x1 y7 L sx2 sy7 L x2 y6 L sx3 sy6 L x3 y5 L sx4 sy5 L x4 y4 L sx5 sy4 L x5 y3 L sx6 sy3 L x6 y2 L sx7 sy2 L x7 y1 L sx8 sy1 L hc t L sx9 sy1 L x8 y1 L sx10 sy2 L x9 y2 L sx11 sy3 L x10 y3 L sx12 sy4 L x11 y4 L sx13 sy5 L x12 y5 L sx14 sy6 L x13 y6 L sx15 sy7 L x14 y7 L sx16 sy8 L r vc L sx16 sy9 L x14 y8 L sx15 sy10 L x13 y9 L sx14 sy11 L x12 y10 L sx13 sy12 L x11 y11 L sx12 sy13 L x10 y12 L sx11 sy14 L x9 y13 L sx10 sy15 L x8 y14 L sx9 sy16 L hc b L sx8 sy16 L x7 y14 L sx7 sy15 L x6 y13 L sx6 sy14 L x5 y12 L sx5 sy13 L x4 y11 L sx4 sy12 L x3 y10 L sx3 sy11 L x2 y9 L sx2 sy10 L x1 y8 L sx1 sy9 Z"]},sun:{av:"adj 25000",gd:`a pin 12500 adj 46875
      g0 +- 50000 0 a
      g1 */ g0 30274 32768
      g2 */ g0 12540 32768
      g3 +- g1 50000 0
      g4 +- g2 50000 0
      g5 +- 50000 0 g1
      g6 +- 50000 0 g2
      g7 */ g0 23170 32768
      g8 +- 50000 g7 0
      g9 +- 50000 0 g7
      g10 */ g5 3 4
      g11 */ g6 3 4
      g12 +- g10 3662 0
      g13 +- g11 3662 0
      g14 +- g11 12500 0
      g15 +- 100000 0 g10
      g16 +- 100000 0 g12
      g17 +- 100000 0 g13
      g18 +- 100000 0 g14
      ox1 */ w 18436 21600
      oy1 */ h 3163 21600
      ox2 */ w 3163 21600
      oy2 */ h 18436 21600
      x8 */ w g8 100000
      x9 */ w g9 100000
      x10 */ w g10 100000
      x12 */ w g12 100000
      x13 */ w g13 100000
      x14 */ w g14 100000
      x15 */ w g15 100000
      x16 */ w g16 100000
      x17 */ w g17 100000
      x18 */ w g18 100000
      x19 */ w a 100000
      wR */ w g0 100000
      hR */ h g0 100000
      y8 */ h g8 100000
      y9 */ h g9 100000
      y10 */ h g10 100000
      y12 */ h g12 100000
      y13 */ h g13 100000
      y14 */ h g14 100000
      y15 */ h g15 100000
      y16 */ h g16 100000
      y17 */ h g17 100000
      y18 */ h g18 100000`,rect:"x9 y9 x8 y8",paths:["M r vc L x15 y18 L x15 y14 Z M ox1 oy1 L x16 y13 L x17 y12 Z M hc t L x18 y10 L x14 y10 Z M ox2 oy1 L x13 y12 L x12 y13 Z M l vc L x10 y14 L x10 y18 Z M ox2 oy2 L x12 y17 L x13 y16 Z M hc b L x14 y15 L x18 y15 Z M ox1 oy2 L x17 y16 L x16 y17 Z M x19 vc A wR hR cd2 21600000 Z"]},moon:{av:"adj 50000",gd:`a pin 0 adj 87500
      g0 */ ss a 100000
      g0w */ g0 w ss
      g1 +- ss 0 g0
      g2 */ g0 g0 g1
      g3 */ ss ss g1
      g4 */ g3 2 1
      g5 +- g4 0 g2
      g6 +- g5 0 g0
      g6w */ g6 w ss
      g7 */ g5 1 2
      g8 +- g7 0 g0
      dy1 */ g8 hd2 ss
      g10h +- vc 0 dy1
      g11h +- vc dy1 0
      g12 */ g0 9598 32768
      g12w */ g12 w ss
      g13 +- ss 0 g12
      q1 */ ss ss 1
      q2 */ g13 g13 1
      q3 +- q1 0 q2
      q4 sqrt q3
      dy4 */ q4 hd2 ss
      g15h +- vc 0 dy4
      g16h +- vc dy4 0
      g17w +- g6w 0 g0w
      g18w */ g17w 1 2
      dx2p +- g0w g18w w
      dx2 */ dx2p -1 1
      dy2 */ hd2 -1 1
      stAng1 at2 dx2 dy2
      enAngp1 at2 dx2 hd2
      enAng1 +- enAngp1 0 21600000
      swAng1 +- enAng1 0 stAng1`,rect:"g12w g15h g0w g16h",paths:["M r b A w hd2 cd4 cd2 A g18w dy1 stAng1 swAng1 Z"]},heart:{gd:`dx1 */ w 49 48
      dx2 */ w 10 48
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      y1 +- t 0 hd3
      il */ w 1 6
      ir */ w 5 6
      ib */ h 2 3`,rect:"il hd4 ir ib",paths:["M hc hd4 C x3 y1 x4 hd4 hc b C x1 hd4 x2 y1 hc hd4 Z"]},lightningBolt:{gd:`x4 */ w 8757 21600
      x9 */ w 13917 21600
      y4 */ h 7437 21600
      y10 */ h 14277 21600`,rect:"x4 y4 x9 y10",paths:["w=21600 h=21600 M 8472 0 L 12860 6080 L 11050 6797 L 16577 12007 L 14767 12877 L 21600 21600 L 10012 14915 L 12222 13987 L 5022 9705 L 7602 8382 L 0 3890 Z"]},cloud:{gd:`il */ w 2977 21600
      it */ h 3262 21600
      ir */ w 17087 21600
      ib */ h 17337 21600`,rect:"il it ir ib",paths:["w=43200 h=43200 M 3900 14370 A 6753 9190 -11429249 7426832 A 5333 7267 -8646143 5396714 A 4365 5945 -8748475 5983381 A 4857 6595 -7859164 7034504 A 5333 7273 -4722533 6541615 A 6775 9220 -2776035 7816140 A 5785 7867 37501 6842000 A 6752 9215 1347096 6910353 A 7720 10543 3974558 4542661 A 4360 5918 -16496525 8804134 A 4345 5945 -14809710 9151131 Z","w=43200 h=43200 fill=none M 4693 26177 A 4345 5945 5204520 1585770 M 6928 34899 A 4360 5918 4416628 686848 M 16478 39090 A 6752 9215 8257449 844866 M 28827 34751 A 6752 9215 387196 959901 M 34129 22954 A 5785 7867 -4217541 4255042 M 41798 15354 A 5333 7273 1819082 1665090 M 38324 5426 A 4857 6595 -824660 891534 M 29078 3952 A 4857 6595 -8950887 1091722 M 22141 4720 A 4365 5945 -9809656 1061181 M 14000 5192 A 6753 9190 -4002417 739161 M 4127 15789 A 6753 9190 9459261 711490"]},cloudCallout:{av:"adj1 -20833; adj2 62500",gd:`dxPos */ w adj1 100000
      dyPos */ h adj2 100000
      xPos +- hc dxPos 0
      yPos +- vc dyPos 0
      ht cat2 hd2 dxPos dyPos
      wt sat2 wd2 dxPos dyPos
      g2 cat2 wd2 ht wt
      g3 sat2 hd2 ht wt
      g4 +- hc g2 0
      g5 +- vc g3 0
      g6 +- g4 0 xPos
      g7 +- g5 0 yPos
      g8 mod g6 g7 0
      g9 */ ss 6600 21600
      g10 +- g8 0 g9
      g11 */ g10 1 3
      g12 */ ss 1800 21600
      g13 +- g11 g12 0
      g14 */ g13 g6 g8
      g15 */ g13 g7 g8
      g16 +- g14 xPos 0
      g17 +- g15 yPos 0
      g18 */ ss 4800 21600
      g19 */ g11 2 1
      g20 +- g18 g19 0
      g21 */ g20 g6 g8
      g22 */ g20 g7 g8
      g23 +- g21 xPos 0
      g24 +- g22 yPos 0
      g25 */ ss 1200 21600
      g26 */ ss 600 21600
      x23 +- xPos g26 0
      x24 +- g16 g25 0
      x25 +- g23 g12 0
      il */ w 2977 21600
      it */ h 3262 21600
      ir */ w 17087 21600
      ib */ h 17337 21600`,rect:"il it ir ib",paths:["w=43200 h=43200 M 3900 14370 A 6753 9190 -11429249 7426832 A 5333 7267 -8646143 5396714 A 4365 5945 -8748475 5983381 A 4857 6595 -7859164 7034504 A 5333 7273 -4722533 6541615 A 6775 9220 -2776035 7816140 A 5785 7867 37501 6842000 A 6752 9215 1347096 6910353 A 7720 10543 3974558 4542661 A 4360 5918 -16496525 8804134 A 4345 5945 -14809710 9151131 Z","M x23 yPos A g26 g26 0 21600000 Z","M x24 g17 A g25 g25 0 21600000 Z","M x25 g24 A g12 g12 0 21600000 Z","w=43200 h=43200 fill=none M 4693 26177 A 4345 5945 5204520 1585770 M 6928 34899 A 4360 5918 4416628 686848 M 16478 39090 A 6752 9215 8257449 844866 M 28827 34751 A 6752 9215 387196 959901 M 34129 22954 A 5785 7867 -4217541 4255042 M 41798 15354 A 5333 7273 1819082 1665090 M 38324 5426 A 4857 6595 -824660 891534 M 29078 3952 A 4857 6595 -8950887 1091722 M 22141 4720 A 4365 5945 -9809656 1061181 M 14000 5192 A 6753 9190 -4002417 739161 M 4127 15789 A 6753 9190 9459261 711490"]},smileyFace:{av:"adj 4653",gd:`a pin -4653 adj 4653
      x1 */ w 4969 21699
      x2 */ w 6215 21600
      x3 */ w 13135 21600
      x4 */ w 16640 21600
      y1 */ h 7570 21600
      y3 */ h 16515 21600
      dy2 */ h a 100000
      y2 +- y3 0 dy2
      y4 +- y3 dy2 0
      dy3 */ h a 50000
      y5 +- y4 dy3 0
      wR */ w 1125 21600
      hR */ h 1125 21600
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["stroke=0 M l vc A wd2 hd2 cd2 21600000 Z","fill=darkenLess M x2 y1 A wR hR cd2 21600000 M x3 y1 A wR hR cd2 21600000","fill=none M x1 y2 Q hc y5 x4 y2","fill=none M l vc A wd2 hd2 cd2 21600000 Z"]},wedgeEllipseCallout:{av:"adj1 -20833; adj2 62500",gd:`dxPos */ w adj1 100000
      dyPos */ h adj2 100000
      xPos +- hc dxPos 0
      yPos +- vc dyPos 0
      sdx */ dxPos h 1
      sdy */ dyPos w 1
      pang at2 sdx sdy
      stAng +- pang 660000 0
      enAng +- pang 0 660000
      dx1 cos wd2 stAng
      dy1 sin hd2 stAng
      x1 +- hc dx1 0
      y1 +- vc dy1 0
      dx2 cos wd2 enAng
      dy2 sin hd2 enAng
      stAng1 at2 dx1 dy1
      enAng1 at2 dx2 dy2
      swAng1 +- enAng1 0 stAng1
      swAng2 +- swAng1 21600000 0
      swAng ?: swAng1 swAng1 swAng2
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M xPos yPos L x1 y1 A wd2 hd2 stAng1 swAng Z"]},wedgeRectCallout:{av:"adj1 -20833; adj2 62500",gd:`dxPos */ w adj1 100000
      dyPos */ h adj2 100000
      xPos +- hc dxPos 0
      yPos +- vc dyPos 0
      dq */ dxPos h w
      ady abs dyPos
      adq abs dq
      dz +- ady 0 adq
      xg1 ?: dxPos 7 2
      xg2 ?: dxPos 10 5
      x1 */ w xg1 12
      x2 */ w xg2 12
      yg1 ?: dyPos 7 2
      yg2 ?: dyPos 10 5
      y1 */ h yg1 12
      y2 */ h yg2 12
      t1 ?: dxPos l xPos
      xl ?: dz l t1
      t2 ?: dyPos x1 xPos
      xt ?: dz t2 x1
      t3 ?: dxPos xPos r
      xr ?: dz r t3
      t4 ?: dyPos xPos x1
      xb ?: dz t4 x1
      t5 ?: dxPos y1 yPos
      yl ?: dz y1 t5
      t6 ?: dyPos t yPos
      yt ?: dz t6 t
      t7 ?: dxPos yPos y1
      yr ?: dz y1 t7
      t8 ?: dyPos yPos b
      yb ?: dz t8 b`,paths:["M l t L x1 t L xt yt L x2 t L r t L r y1 L xr yr L r y2 L r b L x2 b L xb yb L x1 b L l b L l y2 L xl yl L l y1 Z"]},wedgeRoundRectCallout:{av:"adj1 -20833; adj2 62500; adj3 16667",gd:`dxPos */ w adj1 100000
      dyPos */ h adj2 100000
      xPos +- hc dxPos 0
      yPos +- vc dyPos 0
      dq */ dxPos h w
      ady abs dyPos
      adq abs dq
      dz +- ady 0 adq
      xg1 ?: dxPos 7 2
      xg2 ?: dxPos 10 5
      x1 */ w xg1 12
      x2 */ w xg2 12
      yg1 ?: dyPos 7 2
      yg2 ?: dyPos 10 5
      y1 */ h yg1 12
      y2 */ h yg2 12
      t1 ?: dxPos l xPos
      xl ?: dz l t1
      t2 ?: dyPos x1 xPos
      xt ?: dz t2 x1
      t3 ?: dxPos xPos r
      xr ?: dz r t3
      t4 ?: dyPos xPos x1
      xb ?: dz t4 x1
      t5 ?: dxPos y1 yPos
      yl ?: dz y1 t5
      t6 ?: dyPos t yPos
      yt ?: dz t6 t
      t7 ?: dxPos yPos y1
      yr ?: dz y1 t7
      t8 ?: dyPos yPos b
      yb ?: dz t8 b
      u1 */ ss adj3 100000
      u2 +- r 0 u1
      v2 +- b 0 u1
      il */ u1 29289 100000
      ir +- r 0 il
      ib +- b 0 il`,rect:"il il ir ib",paths:["M l u1 A u1 u1 cd2 cd4 L x1 t L xt yt L x2 t L u2 t A u1 u1 3cd4 cd4 L r y1 L xr yr L r y2 L r v2 A u1 u1 0 cd4 L x2 b L xb yb L x1 b L u1 b A u1 u1 cd4 cd4 L l y2 L xl yl L l y1 Z"]},bracePair:{av:"adj 8333",gd:`a pin 0 adj 25000
      x1 */ ss a 100000
      x2 */ ss a 50000
      x3 +- r 0 x2
      x4 +- r 0 x1
      y2 +- vc 0 x1
      y3 +- vc x1 0
      y4 +- b 0 x1
      it */ x1 29289 100000
      il +- x1 it 0
      ir +- r 0 il
      ib +- b 0 it`,rect:"il il ir ib",paths:["stroke=0 M x2 b A x1 x1 cd4 cd4 L x1 y3 A x1 x1 0 -5400000 A x1 x1 cd4 -5400000 L x1 x1 A x1 x1 cd2 cd4 L x3 t A x1 x1 3cd4 cd4 L x4 y2 A x1 x1 cd2 -5400000 A x1 x1 3cd4 -5400000 L x4 y4 A x1 x1 0 cd4 Z","fill=none M x2 b A x1 x1 cd4 cd4 L x1 y3 A x1 x1 0 -5400000 A x1 x1 cd4 -5400000 L x1 x1 A x1 x1 cd2 cd4 M x3 t A x1 x1 3cd4 cd4 L x4 y2 A x1 x1 cd2 -5400000 A x1 x1 3cd4 -5400000 L x4 y4 A x1 x1 0 cd4"]},bracketPair:{av:"adj 16667",gd:`a pin 0 adj 50000
      x1 */ ss a 100000
      x2 +- r 0 x1
      y2 +- b 0 x1
      il */ x1 29289 100000
      ir +- r 0 il
      ib +- b 0 il`,rect:"il il ir ib",paths:["stroke=0 M l x1 A x1 x1 cd2 cd4 L x2 t A x1 x1 3cd4 cd4 L r y2 A x1 x1 0 cd4 L x1 b A x1 x1 cd4 cd4 Z","fill=none M x1 b A x1 x1 cd4 cd4 L l x1 A x1 x1 cd2 cd4 M x2 t A x1 x1 3cd4 cd4 L r y2 A x1 x1 0 cd4"]},leftBrace:{av:"adj1 8333; adj2 50000",gd:`a2 pin 0 adj2 100000
      q1 +- 100000 0 a2
      q2 min q1 a2
      q3 */ q2 1 2
      maxAdj1 */ q3 h ss
      a1 pin 0 adj1 maxAdj1
      y1 */ ss a1 100000
      y3 */ h a2 100000
      y4 +- y3 y1 0
      dx1 cos wd2 2700000
      dy1 sin y1 2700000
      il +- r 0 dx1
      it +- y1 0 dy1
      ib +- b dy1 y1`,rect:"il it r ib",paths:["stroke=0 M r b A wd2 y1 cd4 cd4 L hc y4 A wd2 y1 0 -5400000 A wd2 y1 cd4 -5400000 L hc y1 A wd2 y1 cd2 cd4 Z","fill=none M r b A wd2 y1 cd4 cd4 L hc y4 A wd2 y1 0 -5400000 A wd2 y1 cd4 -5400000 L hc y1 A wd2 y1 cd2 cd4"]},rightBrace:{av:"adj1 8333; adj2 50000",gd:`a2 pin 0 adj2 100000
      q1 +- 100000 0 a2
      q2 min q1 a2
      q3 */ q2 1 2
      maxAdj1 */ q3 h ss
      a1 pin 0 adj1 maxAdj1
      y1 */ ss a1 100000
      y3 */ h a2 100000
      y2 +- y3 0 y1
      y4 +- b 0 y1
      dx1 cos wd2 2700000
      dy1 sin y1 2700000
      ir +- l dx1 0
      it +- y1 0 dy1
      ib +- b dy1 y1`,rect:"l it ir ib",paths:["stroke=0 M l t A wd2 y1 3cd4 cd4 L hc y2 A wd2 y1 cd2 -5400000 A wd2 y1 3cd4 -5400000 L hc y4 A wd2 y1 0 cd4 Z","fill=none M l t A wd2 y1 3cd4 cd4 L hc y2 A wd2 y1 cd2 -5400000 A wd2 y1 3cd4 -5400000 L hc y4 A wd2 y1 0 cd4"]},leftBracket:{av:"adj 8333",gd:`maxAdj */ 50000 h ss
      a pin 0 adj maxAdj
      y1 */ ss a 100000
      y2 +- b 0 y1
      dx1 cos w 2700000
      dy1 sin y1 2700000
      il +- r 0 dx1
      it +- y1 0 dy1
      ib +- b dy1 y1`,rect:"il it r ib",paths:["stroke=0 M r b A w y1 cd4 cd4 L l y1 A w y1 cd2 cd4 Z","fill=none M r b A w y1 cd4 cd4 L l y1 A w y1 cd2 cd4"]},rightBracket:{av:"adj 8333",gd:`maxAdj */ 50000 h ss
      a pin 0 adj maxAdj
      y1 */ ss a 100000
      y2 +- b 0 y1
      dx1 cos w 2700000
      dy1 sin y1 2700000
      ir +- l dx1 0
      it +- y1 0 dy1
      ib +- b dy1 y1`,rect:"l it ir ib",paths:["stroke=0 M l t A w y1 3cd4 cd4 L r y2 A w y1 0 cd4 Z","fill=none M l t A w y1 3cd4 cd4 L r y2 A w y1 0 cd4"]},teardrop:{av:"adj 100000",gd:`a pin 0 adj 200000
      r2 sqrt 2
      tw */ wd2 r2 1
      th */ hd2 r2 1
      sw */ tw a 100000
      sh */ th a 100000
      dx1 cos sw 2700000
      dy1 sin sh 2700000
      x1 +- hc dx1 0
      y1 +- vc 0 dy1
      x2 +/ hc x1 2
      y2 +/ vc y1 2
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M l vc A wd2 hd2 cd2 cd4 Q x2 t x1 y1 Q r y2 r vc A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z"]}},eo={flowChartCollate:{gd:`ir */ w 3 4
      ib */ h 3 4`,rect:"wd4 hd4 ir ib",paths:["w=2 h=2 M 0 0 L 2 0 L 1 1 L 2 2 L 0 2 L 1 1 Z"]},flowChartDecision:{gd:`ir */ w 3 4
      ib */ h 3 4`,rect:"wd4 hd4 ir ib",paths:["w=2 h=2 M 0 1 L 1 0 L 2 1 L 1 2 Z"]},flowChartDelay:{gd:`idx cos wd2 2700000
      idy sin hd2 2700000
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"l it ir ib",paths:["M l t L hc t A wd2 hd2 3cd4 cd2 L l b Z"]},flowChartDocument:{gd:`y1 */ h 17322 21600
      y2 */ h 20172 21600`,rect:"l t r y1",paths:["w=21600 h=21600 M 0 0 L 21600 0 L 21600 17322 C 10800 17322 10800 23922 0 20172 Z"]},flowChartExtract:{gd:"x2 */ w 3 4",rect:"wd4 vc x2 b",paths:["w=2 h=2 M 0 2 L 1 0 L 2 2 Z"]},flowChartInputOutput:{gd:`x3 */ w 2 5
      x4 */ w 3 5
      x5 */ w 4 5
      x6 */ w 9 10`,rect:"wd5 t x5 b",paths:["w=5 h=5 M 0 5 L 1 0 L 5 0 L 4 5 Z"]},flowChartInternalStorage:{rect:"wd8 hd8 r b",paths:["w=1 h=1 stroke=0 M 0 0 L 1 0 L 1 1 L 0 1 Z","w=8 h=8 fill=none M 1 0 L 1 8 M 0 1 L 8 1","w=1 h=1 fill=none M 0 0 L 1 0 L 1 1 L 0 1 Z"]},flowChartMagneticDisk:{gd:"y3 */ h 5 6",rect:"l hd3 r y3",paths:["w=6 h=6 stroke=0 M 0 1 A 3 1 cd2 cd2 L 6 5 A 3 1 0 cd2 Z","w=6 h=6 fill=none M 6 1 A 3 1 0 cd2","w=6 h=6 fill=none M 0 1 A 3 1 cd2 cd2 L 6 5 A 3 1 0 cd2 Z"]},flowChartManualInput:{rect:"l hd5 r b",paths:["w=5 h=5 M 0 1 L 5 0 L 5 5 L 0 5 Z"]},flowChartManualOperation:{gd:`x3 */ w 4 5
      x4 */ w 9 10`,rect:"wd5 t x3 b",paths:["w=5 h=5 M 0 0 L 5 0 L 4 5 L 1 5 Z"]},flowChartMerge:{gd:"x2 */ w 3 4",rect:"wd4 t x2 vc",paths:["w=2 h=2 M 0 0 L 2 0 L 1 2 Z"]},flowChartOffpageConnector:{gd:"y1 */ h 4 5",rect:"l t r y1",paths:["w=10 h=10 M 0 0 L 10 0 L 10 8 L 5 10 L 0 8 Z"]},flowChartOr:{gd:`idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["stroke=0 M l vc A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z","fill=none M hc t L hc b M l vc L r vc","fill=none M l vc A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z"]},flowChartPredefinedProcess:{gd:"x2 */ w 7 8",rect:"wd8 t x2 b",paths:["w=1 h=1 stroke=0 M 0 0 L 1 0 L 1 1 L 0 1 Z","w=8 h=8 fill=none M 1 0 L 1 8 M 7 0 L 7 8","w=1 h=1 fill=none M 0 0 L 1 0 L 1 1 L 0 1 Z"]},flowChartPreparation:{gd:"x2 */ w 4 5",rect:"wd5 t x2 b",paths:["w=10 h=10 M 0 5 L 2 0 L 8 0 L 10 5 L 8 10 L 2 10 Z"]},flowChartSort:{gd:`ir */ w 3 4
      ib */ h 3 4`,rect:"wd4 hd4 ir ib",paths:["w=2 h=2 stroke=0 M 0 1 L 1 0 L 2 1 L 1 2 Z","w=2 h=2 fill=none M 0 1 L 2 1","w=2 h=2 fill=none M 0 1 L 1 0 L 2 1 L 1 2 Z"]},flowChartSummingJunction:{gd:`idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["stroke=0 M l vc A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z","fill=none M il it L ir ib M ir it L il ib","fill=none M l vc A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z"]},flowChartTerminator:{gd:`il */ w 1018 21600
      ir */ w 20582 21600
      it */ h 3163 21600
      ib */ h 18437 21600`,rect:"il it ir ib",paths:["w=21600 h=21600 M 3475 0 L 18125 0 A 3475 10800 3cd4 cd2 L 3475 21600 A 3475 10800 cd4 cd2 Z"]},wave:{av:"adj1 12500; adj2 0",gd:`a1 pin 0 adj1 20000
      a2 pin -10000 adj2 10000
      y1 */ h a1 100000
      dy2 */ y1 10 3
      y2 +- y1 0 dy2
      y3 +- y1 dy2 0
      y4 +- b 0 y1
      y5 +- y4 0 dy2
      y6 +- y4 dy2 0
      of */ w a2 100000
      of2 */ w a2 50000
      x1 abs of
      dx2 ?: of2 0 of2
      x2 +- l 0 dx2
      dx5 ?: of2 of2 0
      x5 +- r 0 dx5
      dx3 +/ dx2 x5 3
      x3 +- x2 dx3 0
      x4 +/ x3 x5 2
      x6 +- l dx5 0
      x10 +- r dx2 0
      x7 +- x6 dx3 0
      x8 +/ x7 x10 2
      x9 +- r 0 x1
      xAdj +- hc of 0
      xAdj2 +- hc 0 of
      il max x2 x6
      ir min x5 x10
      it */ h a1 50000
      ib +- b 0 it`,rect:"il it ir ib",paths:["M x2 y1 C x3 y2 x4 y3 x5 y1 L x10 y4 C x8 y6 x7 y5 x6 y4 Z"]},can:{av:"adj 25000",gd:`maxAdj */ 50000 h ss
      a pin 0 adj maxAdj
      y1 */ ss a 200000
      y2 +- y1 y1 0
      y3 +- b 0 y1`,rect:"l y2 r y3",paths:["stroke=0 M l y1 A wd2 y1 cd2 -10800000 L r y3 A wd2 y1 0 cd2 Z","fill=lighten stroke=0 M l y1 A wd2 y1 cd2 cd2 A wd2 y1 0 cd2 Z","fill=none M r y1 A wd2 y1 0 cd2 A wd2 y1 cd2 cd2 L r y3 A wd2 y1 0 cd2 L l y1"]},cube:{av:"adj 25000",gd:`a pin 0 adj 100000
      y1 */ ss a 100000
      y4 +- b 0 y1
      y2 */ y4 1 2
      y3 +/ y1 b 2
      x4 +- r 0 y1
      x2 */ x4 1 2
      x3 +/ y1 r 2`,rect:"l y1 x4 b",paths:["stroke=0 M l y1 L x4 y1 L x4 b L l b Z","fill=darkenLess stroke=0 M x4 y1 L r t L r y4 L x4 b Z","fill=lightenLess stroke=0 M l y1 L y1 t L r t L x4 y1 Z","fill=none M l y1 L y1 t L r t L r y4 L x4 b L l b Z M l y1 L x4 y1 L r t M x4 y1 L x4 b"]},bevel:{av:"adj 12500",gd:`a pin 0 adj 50000
      x1 */ ss a 100000
      x2 +- r 0 x1
      y2 +- b 0 x1`,rect:"x1 x1 x2 y2",paths:["stroke=0 M x1 x1 L x2 x1 L x2 y2 L x1 y2 Z","fill=lightenLess stroke=0 M l t L r t L x2 x1 L x1 x1 Z","fill=darkenLess stroke=0 M l b L x1 y2 L x2 y2 L r b Z","fill=lighten stroke=0 M l t L x1 x1 L x1 y2 L l b Z","fill=darken stroke=0 M r t L r b L x2 y2 L x2 x1 Z","fill=none M l t L r t L r b L l b Z M x1 x1 L x2 x1 L x2 y2 L x1 y2 Z M l t L x1 x1 M l b L x1 y2 M r t L x2 x1 M r b L x2 y2"]},foldedCorner:{av:"adj 16667",gd:`a pin 0 adj 50000
      dy2 */ ss a 100000
      dy1 */ dy2 1 5
      x1 +- r 0 dy2
      x2 +- x1 dy1 0
      y2 +- b 0 dy2
      y1 +- y2 dy1 0`,rect:"l t r y2",paths:["stroke=0 M l t L r t L r y2 L x1 b L l b Z","fill=darkenLess stroke=0 M x1 b L x2 y1 L r y2 Z","fill=none M x1 b L x2 y1 L r y2 L x1 b L l b L l t L r t L r y2"]},plaque:{av:"adj 16667",gd:`a pin 0 adj 50000
      x1 */ ss a 100000
      x2 +- r 0 x1
      y2 +- b 0 x1
      il */ x1 70711 100000
      ir +- r 0 il
      ib +- b 0 il`,rect:"il il ir ib",paths:["M l x1 A x1 x1 cd4 -5400000 L x2 t A x1 x1 cd2 -5400000 L r y2 A x1 x1 3cd4 -5400000 L x1 b A x1 x1 0 -5400000 Z"]},frame:{av:"adj1 12500",gd:`a1 pin 0 adj1 50000
      x1 */ ss a1 100000
      x4 +- r 0 x1
      y4 +- b 0 x1`,rect:"x1 x1 x4 y4",paths:["M l t L r t L r b L l b Z M x1 x1 L x1 y4 L x4 y4 L x4 x1 Z"]},donut:{av:"adj 25000",gd:`a pin 0 adj 50000
      dr */ ss a 100000
      iwd2 +- wd2 0 dr
      ihd2 +- hd2 0 dr
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M l vc A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z M dr vc A iwd2 ihd2 cd2 -5400000 A iwd2 ihd2 cd4 -5400000 A iwd2 ihd2 0 -5400000 A iwd2 ihd2 3cd4 -5400000 Z"]},noSmoking:{av:"adj 18750",gd:`a pin 0 adj 50000
      dr */ ss a 100000
      iwd2 +- wd2 0 dr
      ihd2 +- hd2 0 dr
      ang at2 w h
      ct cos ihd2 ang
      st sin iwd2 ang
      m mod ct st 0
      n */ iwd2 ihd2 m
      drd2 */ dr 1 2
      dang at2 n drd2
      2dang */ dang 2 1
      swAng +- -10800000 2dang 0
      t3 at2 w h
      stAng1 +- t3 0 dang
      stAng2 +- stAng1 0 cd2
      ct1 cos ihd2 stAng1
      st1 sin iwd2 stAng1
      m1 mod ct1 st1 0
      n1 */ iwd2 ihd2 m1
      dx1 cos n1 stAng1
      dy1 sin n1 stAng1
      x1 +- hc dx1 0
      y1 +- vc dy1 0
      x2 +- hc 0 dx1
      y2 +- vc 0 dy1
      idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0`,rect:"il it ir ib",paths:["M l vc A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 cd4 A wd2 hd2 cd4 cd4 Z M x1 y1 A iwd2 ihd2 stAng1 swAng Z M x2 y2 A iwd2 ihd2 stAng2 swAng Z"]}},to={gear6:{av:"adj1 15000; adj2 3526",gd:`a1 pin 0 adj1 20000
      a2 pin 0 adj2 5358
      th */ ss a1 100000
      lFD */ ss a2 100000
      th2 */ th 1 2
      l2 */ lFD 1 2
      l3 +- th2 l2 0
      rh +- hd2 0 th
      rw +- wd2 0 th
      maxr min rw rh
      ha at2 maxr l3
      aA1 +- 19800000 0 ha
      aD1 +- 19800000 ha 0
      dxa1 cos rw aA1
      dya1 sin rh aA1
      bA1 at2 dxa1 dya1
      xA1 +- hc dxa1 0
      yA1 +- vc dya1 0
      dxd1 cos rw aD1
      dyd1 sin rh aD1
      bD1 at2 dxd1 dyd1
      xD1 +- hc dxd1 0
      yD1 +- vc dyd1 0
      xAD1 +- xA1 0 xD1
      yAD1 +- yA1 0 yD1
      aT1 at2 yAD1 xAD1
      dxF1 sin lFD aT1
      dyF1 cos lFD aT1
      xF1 +- xD1 dxF1 0
      yF1 +- yD1 dyF1 0
      xE1 +- xA1 0 dxF1
      yE1 +- yA1 0 dyF1
      yC1t sin th aT1
      xC1t cos th aT1
      yC1 +- yF1 yC1t 0
      xC1 +- xF1 0 xC1t
      yB1 +- yE1 yC1t 0
      xB1 +- xE1 0 xC1t
      aD6 +- 3cd4 ha 0
      dxd6 cos rw aD6
      dyd6 sin rh aD6
      bD6 at2 dxd6 dyd6
      xD6 +- hc dxd6 0
      yD6 +- vc dyd6 0
      xA6 +- hc 0 dxd6
      xF6 +- xD6 0 lFD
      xE6 +- xA6 lFD 0
      yC6 +- yD6 0 th
      swAng1 +- bA1 0 bD6
      swAng2 */ bD1 -2 1
      yA2 +- b 0 yD1
      yB2 +- b 0 yC1
      yC2 +- b 0 yB1
      yD2 +- b 0 yA1
      bD2 +- 0 0 bA1
      yD3 +- b 0 yD6
      yC3 +- b 0 yC6
      bD3 +- bD6 cd2 0
      xA5 +- r 0 xD1
      xB5 +- r 0 xC1
      xC5 +- r 0 xB1
      xD5 +- r 0 xA1
      bD4 +- cd2 bD1 0
      bD5 +- cd2 0 bA1`,rect:"xD5 yA1 xA1 yD2",paths:["M xA1 yA1 L xB1 yB1 L xC1 yC1 L xD1 yD1 A rw rh bD1 swAng2 L xC1 yB2 L xB1 yC2 L xA1 yD2 A rw rh bD2 swAng1 L xF6 yC3 L xE6 yC3 L xA6 yD3 A rw rh bD3 swAng1 L xC5 yC2 L xB5 yB2 L xA5 yA2 A rw rh bD4 swAng2 L xB5 yC1 L xC5 yB1 L xD5 yA1 A rw rh bD5 swAng1 L xE6 yC6 L xF6 yC6 L xD6 yD6 A rw rh bD6 swAng1 Z"]},gear9:{av:"adj1 10000; adj2 1763",gd:`a1 pin 0 adj1 20000
      a2 pin 0 adj2 2679
      th */ ss a1 100000
      lFD */ ss a2 100000
      th2 */ th 1 2
      l2 */ lFD 1 2
      l3 +- th2 l2 0
      rh +- hd2 0 th
      rw +- wd2 0 th
      maxr min rw rh
      ha at2 maxr l3
      aA1 +- 18600000 0 ha
      aD1 +- 18600000 ha 0
      dxa1 cos rw aA1
      dya1 sin rh aA1
      bA1 at2 dxa1 dya1
      xA1 +- hc dxa1 0
      yA1 +- vc dya1 0
      dxd1 cos rw aD1
      dyd1 sin rh aD1
      bD1 at2 dxd1 dyd1
      xD1 +- hc dxd1 0
      yD1 +- vc dyd1 0
      xAD1 +- xA1 0 xD1
      yAD1 +- yA1 0 yD1
      aT1 at2 yAD1 xAD1
      dxF1 sin lFD aT1
      dyF1 cos lFD aT1
      xF1 +- xD1 dxF1 0
      yF1 +- yD1 dyF1 0
      xE1 +- xA1 0 dxF1
      yE1 +- yA1 0 dyF1
      yC1t sin th aT1
      xC1t cos th aT1
      yC1 +- yF1 yC1t 0
      xC1 +- xF1 0 xC1t
      yB1 +- yE1 yC1t 0
      xB1 +- xE1 0 xC1t
      aA2 +- 21000000 0 ha
      aD2 +- 21000000 ha 0
      dxa2 cos rw aA2
      dya2 sin rh aA2
      bA2 at2 dxa2 dya2
      xA2 +- hc dxa2 0
      yA2 +- vc dya2 0
      dxd2 cos rw aD2
      dyd2 sin rh aD2
      bD2 at2 dxd2 dyd2
      xD2 +- hc dxd2 0
      yD2 +- vc dyd2 0
      xAD2 +- xA2 0 xD2
      yAD2 +- yA2 0 yD2
      aT2 at2 yAD2 xAD2
      dxF2 sin lFD aT2
      dyF2 cos lFD aT2
      xF2 +- xD2 dxF2 0
      yF2 +- yD2 dyF2 0
      xE2 +- xA2 0 dxF2
      yE2 +- yA2 0 dyF2
      yC2t sin th aT2
      xC2t cos th aT2
      yC2 +- yF2 yC2t 0
      xC2 +- xF2 0 xC2t
      yB2 +- yE2 yC2t 0
      xB2 +- xE2 0 xC2t
      aA3 +- 1800000 0 ha
      aD3 +- 1800000 ha 0
      dxa3 cos rw aA3
      dya3 sin rh aA3
      bA3 at2 dxa3 dya3
      xA3 +- hc dxa3 0
      yA3 +- vc dya3 0
      dxd3 cos rw aD3
      dyd3 sin rh aD3
      bD3 at2 dxd3 dyd3
      xD3 +- hc dxd3 0
      yD3 +- vc dyd3 0
      xAD3 +- xA3 0 xD3
      yAD3 +- yA3 0 yD3
      aT3 at2 yAD3 xAD3
      dxF3 sin lFD aT3
      dyF3 cos lFD aT3
      xF3 +- xD3 dxF3 0
      yF3 +- yD3 dyF3 0
      xE3 +- xA3 0 dxF3
      yE3 +- yA3 0 dyF3
      yC3t sin th aT3
      xC3t cos th aT3
      yC3 +- yF3 yC3t 0
      xC3 +- xF3 0 xC3t
      yB3 +- yE3 yC3t 0
      xB3 +- xE3 0 xC3t
      aA4 +- 4200000 0 ha
      aD4 +- 4200000 ha 0
      dxa4 cos rw aA4
      dya4 sin rh aA4
      bA4 at2 dxa4 dya4
      xA4 +- hc dxa4 0
      yA4 +- vc dya4 0
      dxd4 cos rw aD4
      dyd4 sin rh aD4
      bD4 at2 dxd4 dyd4
      xD4 +- hc dxd4 0
      yD4 +- vc dyd4 0
      xAD4 +- xA4 0 xD4
      yAD4 +- yA4 0 yD4
      aT4 at2 yAD4 xAD4
      dxF4 sin lFD aT4
      dyF4 cos lFD aT4
      xF4 +- xD4 dxF4 0
      yF4 +- yD4 dyF4 0
      xE4 +- xA4 0 dxF4
      yE4 +- yA4 0 dyF4
      yC4t sin th aT4
      xC4t cos th aT4
      yC4 +- yF4 yC4t 0
      xC4 +- xF4 0 xC4t
      yB4 +- yE4 yC4t 0
      xB4 +- xE4 0 xC4t
      aD9 +- 3cd4 ha 0
      dxd9 cos rw aD9
      dyd9 sin rh aD9
      bD9 at2 dxd9 dyd9
      xD9 +- hc dxd9 0
      yD9 +- vc dyd9 0
      xA9 +- hc 0 dxd9
      xF9 +- xD9 0 lFD
      xE9 +- xA9 lFD 0
      yC9 +- yD9 0 th
      sw91 +- bA1 0 bD9
      sw12 +- bA2 0 bD1
      sw23 +- bA3 0 bD2
      sw34 +- bA4 0 bD3
      bA5 +- cd2 0 bD4
      sw45 +- bA5 0 bD4
      xA5 +- r 0 xD4
      xB5 +- r 0 xC4
      xC5 +- r 0 xB4
      xD5 +- r 0 xA4
      bD5 +- cd2 0 bA4
      xA6 +- r 0 xD3
      xB6 +- r 0 xC3
      xC6 +- r 0 xB3
      xD6 +- r 0 xA3
      bD6 +- cd2 0 bA3
      xA7 +- r 0 xD2
      xB7 +- r 0 xC2
      xC7 +- r 0 xB2
      xD7 +- r 0 xA2
      bD7 +- cd2 0 bA2
      xA8 +- r 0 xD1
      xB8 +- r 0 xC1
      xC8 +- r 0 xB1
      xD8 +- r 0 xA1
      bD8 +- cd2 0 bA1`,rect:"xA8 yD1 xD1 yD3",paths:["M xA1 yA1 L xB1 yB1 L xC1 yC1 L xD1 yD1 A rw rh bD1 sw12 L xB2 yB2 L xC2 yC2 L xD2 yD2 A rw rh bD2 sw23 L xB3 yB3 L xC3 yC3 L xD3 yD3 A rw rh bD3 sw34 L xB4 yB4 L xC4 yC4 L xD4 yD4 A rw rh bD4 sw45 L xB5 yC4 L xC5 yB4 L xD5 yA4 A rw rh bD5 sw34 L xB6 yC3 L xC6 yB3 L xD6 yA3 A rw rh bD6 sw23 L xB7 yC2 L xC7 yB2 L xD7 yA2 A rw rh bD7 sw12 L xB8 yC1 L xC8 yB1 L xD8 yA1 A rw rh bD8 sw91 L xE9 yC9 L xF9 yC9 L xD9 yD9 A rw rh bD9 sw91 Z"]},irregularSeal1:{gd:`x5 */ w 4627 21600
      x12 */ w 8485 21600
      x21 */ w 16702 21600
      x24 */ w 14522 21600
      y3 */ h 6320 21600
      y6 */ h 8615 21600
      y9 */ h 13937 21600
      y18 */ h 13290 21600`,rect:"x5 y3 x21 y9",paths:["w=21600 h=21600 M 10800 5800 L 14522 0 L 14155 5325 L 18380 4457 L 16702 7315 L 21097 8137 L 17607 10475 L 21600 13290 L 16837 12942 L 18145 18095 L 14020 14457 L 13247 19737 L 10532 14935 L 8485 21600 L 7715 15627 L 4762 17617 L 5667 13937 L 135 14587 L 3722 11775 L 0 8615 L 4627 7617 L 370 2295 L 7312 6320 L 8352 2295 Z"]},irregularSeal2:{gd:`x2 */ w 9722 21600
      x5 */ w 5372 21600
      x16 */ w 11612 21600
      x19 */ w 14640 21600
      y2 */ h 1887 21600
      y3 */ h 6382 21600
      y8 */ h 12877 21600
      y14 */ h 19712 21600
      y16 */ h 18842 21600
      y17 */ h 15935 21600
      y24 */ h 6645 21600`,rect:"x5 y3 x19 y17",paths:["w=21600 h=21600 M 11462 4342 L 14790 0 L 14525 5777 L 18007 3172 L 16380 6532 L 21600 6645 L 16985 9402 L 18270 11290 L 16380 12310 L 18877 15632 L 14640 14350 L 14942 17370 L 12180 15935 L 11612 18842 L 9872 17370 L 8700 19712 L 7527 18125 L 4917 21600 L 4805 18240 L 1285 17825 L 3330 15370 L 0 12877 L 3935 11592 L 1172 8270 L 5372 7817 L 4502 3625 L 8550 6382 L 9722 1887 Z"]},cornerTabs:{gd:`md mod w h 0
      dx */ 1 md 20
      y1 +- 0 b dx
      x1 +- 0 r dx`,rect:"dx dx x1 y1",paths:["M l t L dx t L l dx Z","M l y1 L dx b L l b Z","M x1 t L r t L r dx Z","M r y1 L r b L x1 b Z"]},plaqueTabs:{gd:`md mod w h 0
      dx */ 1 md 20
      y1 +- 0 b dx
      x1 +- 0 r dx`,rect:"dx dx x1 y1",paths:["M l t L dx t A dx dx 0 cd4 Z","M l y1 A dx dx 3cd4 cd4 L l b Z","M x1 t L r t L r dx A dx dx cd4 cd4 Z","M r y1 L r b L x1 b A dx dx cd2 cd4 Z"]},squareTabs:{gd:`md mod w h 0
      dx */ 1 md 20
      y1 +- 0 b dx
      x1 +- 0 r dx`,rect:"dx dx x1 y1",paths:["M l t L dx t L dx dx L l dx Z","M l y1 L dx y1 L dx b L l b Z","M x1 t L r t L r dx L x1 dx Z","M x1 y1 L r y1 L r b L x1 b Z"]},chartPlus:{paths:["w=10 h=10 fill=none M 5 0 L 5 10 M 0 5 L 10 5","w=10 h=10 stroke=0 M 0 0 L 0 10 L 10 10 L 10 0 Z"]},chartStar:{paths:["w=10 h=10 fill=none M 0 0 L 10 10 M 0 10 L 10 0 M 5 0 L 5 10","w=10 h=10 stroke=0 M 0 0 L 0 10 L 10 10 L 10 0 Z"]},chartX:{paths:["w=10 h=10 fill=none M 0 0 L 10 10 M 0 10 L 10 0","w=10 h=10 stroke=0 M 0 0 L 0 10 L 10 10 L 10 0 Z"]},actionButtonBackPrevious:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g11 vc L g12 g9 L g12 g10 Z","stroke=0 fill=darken M g11 vc L g12 g9 L g12 g10 Z","fill=none M g11 vc L g12 g9 L g12 g10 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonBeginning:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0
      g13 */ ss 3 4
      g14 */ g13 1 8
      g15 */ g13 1 4
      g16 +- g11 g14 0
      g17 +- g11 g15 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g17 vc L g12 g9 L g12 g10 Z M g16 g9 L g11 g9 L g11 g10 L g16 g10 Z","stroke=0 fill=darken M g17 vc L g12 g9 L g12 g10 Z M g16 g9 L g11 g9 L g11 g10 L g16 g10 Z","fill=none M g17 vc L g12 g9 L g12 g10 Z M g16 g9 L g11 g9 L g11 g10 L g16 g10 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonDocument:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      dx1 */ ss 9 32
      g11 +- hc 0 dx1
      g12 +- hc dx1 0
      g13 */ ss 3 16
      g14 +- g12 0 g13
      g15 +- g9 g13 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g11 g9 L g14 g9 L g12 g15 L g12 g10 L g11 g10 Z","stroke=0 fill=darkenLess M g11 g9 L g14 g9 L g14 g15 L g12 g15 L g12 g10 L g11 g10 Z","stroke=0 fill=darken M g14 g9 L g14 g15 L g12 g15 Z","fill=none M g11 g9 L g14 g9 L g12 g15 L g12 g10 L g11 g10 Z M g12 g15 L g14 g15 L g14 g9","fill=none M l t L r t L r b L l b Z"]},actionButtonEnd:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0
      g13 */ ss 3 4
      g14 */ g13 3 4
      g15 */ g13 7 8
      g16 +- g11 g14 0
      g17 +- g11 g15 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g16 vc L g11 g9 L g11 g10 Z M g17 g9 L g12 g9 L g12 g10 L g17 g10 Z","stroke=0 fill=darken M g16 vc L g11 g9 L g11 g10 Z M g17 g9 L g12 g9 L g12 g10 L g17 g10 Z","fill=none M g16 vc L g11 g9 L g11 g10 Z M g17 g9 L g12 g9 L g12 g10 L g17 g10 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonForwardNext:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g12 vc L g11 g9 L g11 g10 Z","stroke=0 fill=darken M g12 vc L g11 g9 L g11 g10 Z","fill=none M g12 vc L g11 g9 L g11 g10 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonHelp:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g11 +- hc 0 dx2
      g13 */ ss 3 4
      g14 */ g13 1 7
      g15 */ g13 3 14
      g16 */ g13 2 7
      g19 */ g13 3 7
      g20 */ g13 4 7
      g21 */ g13 17 28
      g23 */ g13 21 28
      g24 */ g13 11 14
      g27 +- g9 g16 0
      g29 +- g9 g21 0
      g30 +- g9 g23 0
      g31 +- g9 g24 0
      g33 +- g11 g15 0
      g36 +- g11 g19 0
      g37 +- g11 g20 0
      g41 */ g13 1 14
      g42 */ g13 3 28`,paths:["stroke=0 M l t L r t L r b L l b Z M g33 g27 A g16 g16 cd2 cd2 A g14 g15 0 cd4 A g41 g42 3cd4 -5400000 L g37 g30 L g36 g30 L g36 g29 A g14 g15 cd2 cd4 A g41 g42 cd4 -5400000 A g14 g14 0 -10800000 Z M hc g31 A g42 g42 3cd4 21600000 Z","stroke=0 fill=darken M g33 g27 A g16 g16 cd2 cd2 A g14 g15 0 cd4 A g41 g42 3cd4 -5400000 L g37 g30 L g36 g30 L g36 g29 A g14 g15 cd2 cd4 A g41 g42 cd4 -5400000 A g14 g14 0 -10800000 Z M hc g31 A g42 g42 3cd4 21600000 Z","fill=none M g33 g27 A g16 g16 cd2 cd2 A g14 g15 0 cd4 A g41 g42 3cd4 -5400000 L g37 g30 L g36 g30 L g36 g29 A g14 g15 cd2 cd4 A g41 g42 cd4 -5400000 A g14 g14 0 -10800000 Z M hc g31 A g42 g42 3cd4 21600000 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonHome:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0
      g13 */ ss 3 4
      g14 */ g13 1 16
      g15 */ g13 1 8
      g16 */ g13 3 16
      g17 */ g13 5 16
      g18 */ g13 7 16
      g19 */ g13 9 16
      g20 */ g13 11 16
      g21 */ g13 3 4
      g22 */ g13 13 16
      g23 */ g13 7 8
      g24 +- g9 g14 0
      g25 +- g9 g16 0
      g26 +- g9 g17 0
      g27 +- g9 g21 0
      g28 +- g11 g15 0
      g29 +- g11 g18 0
      g30 +- g11 g19 0
      g31 +- g11 g20 0
      g32 +- g11 g22 0
      g33 +- g11 g23 0`,paths:["stroke=0 M l t L r t L r b L l b Z M hc g9 L g11 vc L g28 vc L g28 g10 L g33 g10 L g33 vc L g12 vc L g32 g26 L g32 g24 L g31 g24 L g31 g25 Z","stroke=0 fill=darkenLess M g32 g26 L g32 g24 L g31 g24 L g31 g25 Z M g28 vc L g28 g10 L g29 g10 L g29 g27 L g30 g27 L g30 g10 L g33 g10 L g33 vc Z","stroke=0 fill=darken M hc g9 L g11 vc L g12 vc Z M g29 g27 L g30 g27 L g30 g10 L g29 g10 Z","fill=none M hc g9 L g31 g25 L g31 g24 L g32 g24 L g32 g26 L g12 vc L g33 vc L g33 g10 L g28 g10 L g28 vc L g11 vc Z M g31 g25 L g32 g26 M g33 vc L g28 vc M g29 g10 L g29 g27 L g30 g27 L g30 g10","fill=none M l t L r t L r b L l b Z"]},actionButtonInformation:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g11 +- hc 0 dx2
      g13 */ ss 3 4
      g14 */ g13 1 32
      g17 */ g13 5 16
      g18 */ g13 3 8
      g19 */ g13 13 32
      g20 */ g13 19 32
      g22 */ g13 11 16
      g23 */ g13 13 16
      g24 */ g13 7 8
      g25 +- g9 g14 0
      g28 +- g9 g17 0
      g29 +- g9 g18 0
      g30 +- g9 g23 0
      g31 +- g9 g24 0
      g32 +- g11 g17 0
      g34 +- g11 g19 0
      g35 +- g11 g20 0
      g37 +- g11 g22 0
      g38 */ g13 3 32`,paths:["stroke=0 M l t L r t L r b L l b Z M hc g9 A dx2 dx2 3cd4 21600000 Z","stroke=0 fill=darken M hc g9 A dx2 dx2 3cd4 21600000 Z M hc g25 A g38 g38 3cd4 21600000 M g32 g28 L g32 g29 L g34 g29 L g34 g30 L g32 g30 L g32 g31 L g37 g31 L g37 g30 L g35 g30 L g35 g28 Z","stroke=0 fill=lighten M hc g25 A g38 g38 3cd4 21600000 M g32 g28 L g35 g28 L g35 g30 L g37 g30 L g37 g31 L g32 g31 L g32 g30 L g34 g30 L g34 g29 L g32 g29 Z","fill=none M hc g9 A dx2 dx2 3cd4 21600000 Z M hc g25 A g38 g38 3cd4 21600000 M g32 g28 L g35 g28 L g35 g30 L g37 g30 L g37 g31 L g32 g31 L g32 g30 L g34 g30 L g34 g29 L g32 g29 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonMovie:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0
      g13 */ ss 3 4
      g14 */ g13 1455 21600
      g15 */ g13 1905 21600
      g16 */ g13 2325 21600
      g17 */ g13 16155 21600
      g18 */ g13 17010 21600
      g19 */ g13 19335 21600
      g20 */ g13 19725 21600
      g21 */ g13 20595 21600
      g22 */ g13 5280 21600
      g23 */ g13 5730 21600
      g24 */ g13 6630 21600
      g25 */ g13 7492 21600
      g26 */ g13 9067 21600
      g27 */ g13 9555 21600
      g28 */ g13 13342 21600
      g29 */ g13 14580 21600
      g30 */ g13 15592 21600
      g31 +- g11 g14 0
      g32 +- g11 g15 0
      g33 +- g11 g16 0
      g34 +- g11 g17 0
      g35 +- g11 g18 0
      g36 +- g11 g19 0
      g37 +- g11 g20 0
      g38 +- g11 g21 0
      g39 +- g9 g22 0
      g40 +- g9 g23 0
      g41 +- g9 g24 0
      g42 +- g9 g25 0
      g43 +- g9 g26 0
      g44 +- g9 g27 0
      g45 +- g9 g28 0
      g46 +- g9 g29 0
      g47 +- g9 g30 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g11 g39 L g11 g44 L g31 g44 L g32 g43 L g33 g43 L g33 g47 L g35 g47 L g35 g45 L g36 g45 L g38 g46 L g12 g46 L g12 g41 L g38 g41 L g37 g42 L g35 g42 L g35 g41 L g34 g40 L g32 g40 L g31 g39 Z","stroke=0 fill=darken M g11 g39 L g11 g44 L g31 g44 L g32 g43 L g33 g43 L g33 g47 L g35 g47 L g35 g45 L g36 g45 L g38 g46 L g12 g46 L g12 g41 L g38 g41 L g37 g42 L g35 g42 L g35 g41 L g34 g40 L g32 g40 L g31 g39 Z","fill=none M g11 g39 L g11 g44 L g31 g44 L g32 g43 L g33 g43 L g33 g47 L g35 g47 L g35 g45 L g36 g45 L g38 g46 L g12 g46 L g12 g41 L g38 g41 L g37 g42 L g35 g42 L g35 g41 L g34 g40 L g32 g40 L g31 g39 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonReturn:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0
      g13 */ ss 3 4
      g14 */ g13 7 8
      g15 */ g13 3 4
      g16 */ g13 5 8
      g17 */ g13 3 8
      g18 */ g13 1 4
      g19 +- g9 g15 0
      g20 +- g9 g16 0
      g21 +- g9 g18 0
      g22 +- g11 g14 0
      g23 +- g11 g15 0
      g24 +- g11 g16 0
      g25 +- g11 g17 0
      g26 +- g11 g18 0
      g27 */ g13 1 8`,paths:["stroke=0 M l t L r t L r b L l b Z M g12 g21 L g23 g9 L hc g21 L g24 g21 L g24 g20 A g27 g27 0 cd4 L g25 g19 A g27 g27 cd4 cd4 L g26 g21 L g11 g21 L g11 g20 A g17 g17 cd2 -5400000 L hc g10 A g17 g17 cd4 -5400000 L g22 g21 Z","stroke=0 fill=darken M g12 g21 L g23 g9 L hc g21 L g24 g21 L g24 g20 A g27 g27 0 cd4 L g25 g19 A g27 g27 cd4 cd4 L g26 g21 L g11 g21 L g11 g20 A g17 g17 cd2 -5400000 L hc g10 A g17 g17 cd4 -5400000 L g22 g21 Z","fill=none M g12 g21 L g22 g21 L g22 g20 A g17 g17 0 cd4 L g25 g10 A g17 g17 cd4 cd4 L g11 g21 L g26 g21 L g26 g20 A g27 g27 cd2 -5400000 L hc g19 A g27 g27 cd4 -5400000 L g24 g21 L hc g21 L g23 g9 Z","fill=none M l t L r t L r b L l b Z"]},actionButtonSound:{gd:`dx2 */ ss 3 8
      g9 +- vc 0 dx2
      g10 +- vc dx2 0
      g11 +- hc 0 dx2
      g12 +- hc dx2 0
      g13 */ ss 3 4
      g14 */ g13 1 8
      g15 */ g13 5 16
      g16 */ g13 5 8
      g17 */ g13 11 16
      g18 */ g13 3 4
      g19 */ g13 7 8
      g20 +- g9 g14 0
      g21 +- g9 g15 0
      g22 +- g9 g17 0
      g23 +- g9 g19 0
      g24 +- g11 g15 0
      g25 +- g11 g16 0
      g26 +- g11 g18 0`,paths:["stroke=0 M l t L r t L r b L l b Z M g11 g21 L g11 g22 L g24 g22 L g25 g10 L g25 g9 L g24 g21 Z","stroke=0 fill=darken M g11 g21 L g11 g22 L g24 g22 L g25 g10 L g25 g9 L g24 g21 Z","fill=none M g11 g21 L g24 g21 L g25 g9 L g25 g10 L g24 g22 L g11 g22 Z M g26 g21 L g12 g20 M g26 vc L g12 vc M g26 g22 L g12 g23","fill=none M l t L r t L r b L l b Z"]}},no={rightArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 100000 w ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      dx1 */ ss a2 100000
      x1 +- r 0 dx1
      dy1 */ h a1 200000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      dx2 */ y1 dx1 hd2
      x2 +- x1 dx2 0`,rect:"l y1 x2 y2",paths:["M l y1 L x1 y1 L x1 t L r vc L x1 b L x1 y2 L l y2 Z"]},leftArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 100000 w ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      dx2 */ ss a2 100000
      x2 +- l dx2 0
      dy1 */ h a1 200000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      dx1 */ y1 dx2 hd2
      x1 +- x2 0 dx1`,rect:"x1 y1 r y2",paths:["M l vc L x2 t L x2 y1 L r y1 L r y2 L x2 y2 L x2 b Z"]},upArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 100000 h ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      dy2 */ ss a2 100000
      y2 +- t dy2 0
      dx1 */ w a1 200000
      x1 +- hc 0 dx1
      x2 +- hc dx1 0
      dy1 */ x1 dy2 wd2
      y1 +- y2 0 dy1`,rect:"x1 y1 x2 b",paths:["M l y2 L hc t L r y2 L x2 y2 L x2 b L x1 b L x1 y2 Z"]},downArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 100000 h ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      dy1 */ ss a2 100000
      y1 +- b 0 dy1
      dx1 */ w a1 200000
      x1 +- hc 0 dx1
      x2 +- hc dx1 0
      dy2 */ x1 dy1 wd2
      y2 +- y1 dy2 0`,rect:"x1 t x2 y2",paths:["M l y1 L x1 y1 L x1 t L x2 t L x2 y1 L r y1 L hc b Z"]},leftRightArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 50000 w ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      x2 */ ss a2 100000
      x3 +- r 0 x2
      dy */ h a1 200000
      y1 +- vc 0 dy
      y2 +- vc dy 0
      dx1 */ y1 x2 hd2
      x1 +- x2 0 dx1
      x4 +- x3 dx1 0`,rect:"x1 y1 x4 y2",paths:["M l vc L x2 t L x2 y1 L x3 y1 L x3 t L r vc L x3 b L x3 y2 L x2 y2 L x2 b Z"]},upDownArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 50000 h ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      y2 */ ss a2 100000
      y3 +- b 0 y2
      dx1 */ w a1 200000
      x1 +- hc 0 dx1
      x2 +- hc dx1 0
      dy1 */ x1 y2 wd2
      y1 +- y2 0 dy1
      y4 +- y3 dy1 0`,rect:"x1 y1 x2 y4",paths:["M l y2 L hc t L r y2 L x2 y2 L x2 y3 L r y3 L hc b L l y3 L x1 y3 L x1 y2 Z"]},notchedRightArrow:{av:"adj1 50000; adj2 50000",gd:`maxAdj2 */ 100000 w ss
      a1 pin 0 adj1 100000
      a2 pin 0 adj2 maxAdj2
      dx2 */ ss a2 100000
      x2 +- r 0 dx2
      dy1 */ h a1 200000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      x1 */ dy1 dx2 hd2
      x3 +- r 0 x1`,rect:"x1 y1 x3 y2",paths:["M l y1 L x2 y1 L x2 t L r vc L x2 b L x2 y2 L l y2 L x1 vc Z"]},chevron:{av:"adj 50000",gd:`maxAdj */ 100000 w ss
      a pin 0 adj maxAdj
      x1 */ ss a 100000
      x2 +- r 0 x1
      dx +- x2 0 x1
      il ?: dx x1 l
      ir ?: dx x2 r`,rect:"il t ir b",paths:["M l t L x2 t L r vc L x2 b L l b L x1 vc Z"]},homePlate:{av:"adj 50000",gd:`maxAdj */ 100000 w ss
      a pin 0 adj maxAdj
      dx1 */ ss a 100000
      x1 +- r 0 dx1
      ir +/ x1 r 2`,rect:"l t ir b",paths:["M l t L x1 t L r vc L x1 b L l b Z"]},uturnArrow:{av:"adj1 25000; adj2 25000; adj3 25000; adj4 43750; adj5 75000",gd:`a2 pin 0 adj2 25000
      maxAdj1 */ a2 2 1
      a1 pin 0 adj1 maxAdj1
      q2 */ a1 ss h
      q3 +- 100000 0 q2
      maxAdj3 */ q3 h ss
      a3 pin 0 adj3 maxAdj3
      q1 +- a3 a1 0
      minAdj5 */ q1 ss h
      a5 pin minAdj5 adj5 100000
      th */ ss a1 100000
      aw2 */ ss a2 100000
      th2 */ th 1 2
      dh2 +- aw2 0 th2
      y5 */ h a5 100000
      ah */ ss a3 100000
      y4 +- y5 0 ah
      x9 +- r 0 dh2
      bw */ x9 1 2
      bs min bw y4
      maxAdj4 */ bs 100000 ss
      a4 pin 0 adj4 maxAdj4
      bd */ ss a4 100000
      bd3 +- bd 0 th
      bd2 max bd3 0
      x3 +- th bd2 0
      x8 +- r 0 aw2
      x6 +- x8 0 aw2
      x7 +- x6 dh2 0
      x4 +- x9 0 bd
      x5 +- x7 0 bd2`,paths:["M l b L l bd A bd bd cd2 cd4 L x4 t A bd bd 3cd4 cd4 L x9 y4 L r y4 L x8 y5 L x6 y4 L x7 y4 L x7 x3 A bd2 bd2 0 -5400000 L x3 th A bd2 bd2 3cd4 -5400000 L th b Z"]},curvedRightArrow:{av:"adj1 25000; adj2 50000; adj3 25000",gd:`maxAdj2 */ 50000 h ss
      a2 pin 0 adj2 maxAdj2
      a1 pin 0 adj1 a2
      th */ ss a1 100000
      aw */ ss a2 100000
      q1 +/ th aw 4
      hR +- hd2 0 q1
      q7 */ hR 2 1
      q8 */ q7 q7 1
      q9 */ th th 1
      q10 +- q8 0 q9
      q11 sqrt q10
      idx */ q11 w q7
      maxAdj3 */ 100000 idx ss
      a3 pin 0 adj3 maxAdj3
      ah */ ss a3 100000
      y3 +- hR th 0
      q2 */ w w 1
      q3 */ ah ah 1
      q4 +- q2 0 q3
      q5 sqrt q4
      dy */ q5 hR w
      y5 +- hR dy 0
      y7 +- y3 dy 0
      q6 +- aw 0 th
      dh */ q6 1 2
      y4 +- y5 0 dh
      y8 +- y7 dh 0
      aw2 */ aw 1 2
      y6 +- b 0 aw2
      x1 +- r 0 ah
      swAng at2 ah dy
      stAng +- cd2 0 swAng
      mswAng +- 0 0 swAng
      q12 */ th 1 2
      dang2 at2 idx q12
      swAng2 +- dang2 0 cd4
      swAng3 +- cd4 dang2 0
      stAng3 +- cd2 0 dang2`,paths:["stroke=0 M l hR A w hR cd2 mswAng L x1 y4 L r y6 L x1 y8 L x1 y7 A w hR stAng swAng Z","fill=darkenLess stroke=0 M r th A w hR 3cd4 swAng2 A w hR stAng3 swAng3 Z","fill=none M l hR A w hR cd2 mswAng L x1 y4 L r y6 L x1 y8 L x1 y7 A w hR stAng swAng L l hR A w hR cd2 cd4 L r th A w hR 3cd4 swAng2"]},curvedLeftArrow:{av:"adj1 25000; adj2 50000; adj3 25000",gd:`maxAdj2 */ 50000 h ss
      a2 pin 0 adj2 maxAdj2
      a1 pin 0 adj1 a2
      th */ ss a1 100000
      aw */ ss a2 100000
      q1 +/ th aw 4
      hR +- hd2 0 q1
      q7 */ hR 2 1
      q8 */ q7 q7 1
      q9 */ th th 1
      q10 +- q8 0 q9
      q11 sqrt q10
      idx */ q11 w q7
      maxAdj3 */ 100000 idx ss
      a3 pin 0 adj3 maxAdj3
      ah */ ss a3 100000
      y3 +- hR th 0
      q2 */ w w 1
      q3 */ ah ah 1
      q4 +- q2 0 q3
      q5 sqrt q4
      dy */ q5 hR w
      y5 +- hR dy 0
      y7 +- y3 dy 0
      q6 +- aw 0 th
      dh */ q6 1 2
      y4 +- y5 0 dh
      y8 +- y7 dh 0
      aw2 */ aw 1 2
      y6 +- b 0 aw2
      x1 +- l ah 0
      swAng at2 ah dy
      q12 */ th 1 2
      dang2 at2 idx q12
      swAng2 +- dang2 0 swAng
      swAng3 +- swAng dang2 0
      stAng3 +- 0 0 dang2`,paths:["stroke=0 M l y6 L x1 y4 L x1 y5 A w hR swAng swAng2 A w hR stAng3 swAng3 L x1 y8 Z","fill=darkenLess stroke=0 M r y3 A w hR 0 -5400000 L l t A w hR 3cd4 cd4 Z","fill=none M r y3 A w hR 0 -5400000 L l t A w hR 3cd4 cd4 L r y3 A w hR 0 swAng L x1 y8 L l y6 L x1 y4 L x1 y5 A w hR swAng swAng2"]},curvedUpArrow:{av:"adj1 25000; adj2 50000; adj3 25000",gd:`maxAdj2 */ 50000 w ss
      a2 pin 0 adj2 maxAdj2
      a1 pin 0 adj1 100000
      th */ ss a1 100000
      aw */ ss a2 100000
      q1 +/ th aw 4
      wR +- wd2 0 q1
      q7 */ wR 2 1
      q8 */ q7 q7 1
      q9 */ th th 1
      q10 +- q8 0 q9
      q11 sqrt q10
      idy */ q11 h q7
      maxAdj3 */ 100000 idy ss
      a3 pin 0 adj3 maxAdj3
      ah */ ss a3 100000
      x3 +- wR th 0
      q2 */ h h 1
      q3 */ ah ah 1
      q4 +- q2 0 q3
      q5 sqrt q4
      dx */ q5 wR h
      x5 +- wR dx 0
      x7 +- x3 dx 0
      q6 +- aw 0 th
      dh */ q6 1 2
      x4 +- x5 0 dh
      x8 +- x7 dh 0
      aw2 */ aw 1 2
      x6 +- r 0 aw2
      y1 +- t ah 0
      swAng at2 ah dx
      iy +- t idy 0
      ix +/ wR x3 2
      q12 */ th 1 2
      dang2 at2 idy q12
      swAng2 +- dang2 0 swAng
      stAng3 +- cd4 0 swAng
      swAng3 +- swAng dang2 0
      stAng2 +- cd4 0 dang2`,paths:["stroke=0 M x6 t L x8 y1 L x7 y1 A wR h stAng3 swAng3 A wR h stAng2 swAng2 L x4 y1 Z","fill=darkenLess stroke=0 M wR b A wR h cd4 cd4 L th t A wR h cd2 -5400000 Z","fill=none M ix iy A wR h stAng2 swAng2 L x4 y1 L x6 t L x8 y1 L x7 y1 A wR h stAng3 swAng L wR b A wR h cd4 cd4 L th t A wR h cd2 -5400000"]},curvedDownArrow:{av:"adj1 25000; adj2 50000; adj3 25000",gd:`maxAdj2 */ 50000 w ss
      a2 pin 0 adj2 maxAdj2
      a1 pin 0 adj1 100000
      th */ ss a1 100000
      aw */ ss a2 100000
      q1 +/ th aw 4
      wR +- wd2 0 q1
      q7 */ wR 2 1
      q8 */ q7 q7 1
      q9 */ th th 1
      q10 +- q8 0 q9
      q11 sqrt q10
      idy */ q11 h q7
      maxAdj3 */ 100000 idy ss
      a3 pin 0 adj3 maxAdj3
      ah */ ss a3 100000
      x3 +- wR th 0
      q2 */ h h 1
      q3 */ ah ah 1
      q4 +- q2 0 q3
      q5 sqrt q4
      dx */ q5 wR h
      x5 +- wR dx 0
      x7 +- x3 dx 0
      q6 +- aw 0 th
      dh */ q6 1 2
      x4 +- x5 0 dh
      x8 +- x7 dh 0
      aw2 */ aw 1 2
      x6 +- r 0 aw2
      y1 +- b 0 ah
      swAng at2 ah dx
      mswAng +- 0 0 swAng
      iy +- b 0 idy
      ix +/ wR x3 2
      q12 */ th 1 2
      dang2 at2 idy q12
      stAng +- 3cd4 swAng 0
      stAng2 +- 3cd4 0 dang2
      swAng2 +- dang2 0 cd4
      swAng3 +- cd4 dang2 0`,paths:["stroke=0 M x6 b L x4 y1 L x5 y1 A wR h stAng mswAng L x3 t A wR h 3cd4 swAng L x8 y1 Z","fill=darkenLess stroke=0 M ix iy A wR h stAng2 swAng2 L l b A wR h cd2 swAng3 Z","fill=none M ix iy A wR h stAng2 swAng2 L l b A wR h cd2 cd4 L x3 t A wR h 3cd4 swAng L x8 y1 L x6 b L x4 y1 L x5 y1 A wR h stAng mswAng"]},bentConnector3:{av:"adj1 50000",gd:"x1 */ w adj1 100000",paths:["fill=none M l t L x1 t L x1 b L r b"]},bentConnector4:{av:"adj1 50000; adj2 50000",gd:`x1 */ w adj1 100000
      y2 */ h adj2 100000`,paths:["fill=none M l t L x1 t L x1 y2 L r y2 L r b"]},bentConnector5:{av:"adj1 50000; adj2 50000; adj3 50000",gd:`x1 */ w adj1 100000
      x3 */ w adj3 100000
      y2 */ h adj2 100000`,paths:["fill=none M l t L x1 t L x1 y2 L x3 y2 L x3 b L r b"]},curvedConnector2:{paths:["fill=none M l t C wd2 t r hd2 r b"]},curvedConnector3:{av:"adj1 50000",gd:`x2 */ w adj1 100000
      x1 +/ l x2 2
      x3 +/ r x2 2
      y3 */ h 3 4`,paths:["fill=none M l t C x1 t x2 hd4 x2 vc C x2 y3 x3 b r b"]},curvedConnector4:{av:"adj1 50000; adj2 50000",gd:`x2 */ w adj1 100000
      x1 +/ l x2 2
      x3 +/ r x2 2
      x4 +/ x2 x3 2
      x5 +/ x3 r 2
      y4 */ h adj2 100000
      y1 +/ t y4 2
      y2 +/ t y1 2
      y3 +/ y1 y4 2
      y5 +/ b y4 2`,paths:["fill=none M l t C x1 t x2 y2 x2 y1 C x2 y3 x4 y4 x3 y4 C x5 y4 r y5 r b"]},curvedConnector5:{av:"adj1 50000; adj2 50000; adj3 50000",gd:`x3 */ w adj1 100000
      x6 */ w adj3 100000
      x1 +/ x3 x6 2
      x2 +/ l x3 2
      x4 +/ x3 x1 2
      x5 +/ x6 x1 2
      x7 +/ x6 r 2
      y4 */ h adj2 100000
      y1 +/ t y4 2
      y2 +/ t y1 2
      y3 +/ y1 y4 2
      y5 +/ b y4 2
      y6 +/ y5 y4 2
      y7 +/ y5 b 2`,paths:["fill=none M l t C x2 t x3 y2 x3 y1 C x3 y3 x4 y4 x1 y4 C x5 y4 x6 y6 x6 y5 C x6 y7 x7 b r b"]},lineInv:{paths:["fill=none M l b L r t"]},mathPlus:{av:"adj1 23520",gd:`a1 pin 0 adj1 73490
      dx1 */ w 73490 200000
      dy1 */ h 73490 200000
      dx2 */ ss a1 200000
      x1 +- hc 0 dx1
      x2 +- hc 0 dx2
      x3 +- hc dx2 0
      x4 +- hc dx1 0
      y1 +- vc 0 dy1
      y2 +- vc 0 dx2
      y3 +- vc dx2 0
      y4 +- vc dy1 0`,rect:"x1 y2 x4 y3",paths:["M x1 y2 L x2 y2 L x2 y1 L x3 y1 L x3 y2 L x4 y2 L x4 y3 L x3 y3 L x3 y4 L x2 y4 L x2 y3 L x1 y3 Z"]},mathMinus:{av:"adj1 23520",gd:`a1 pin 0 adj1 100000
      dy1 */ h a1 200000
      dx1 */ w 73490 200000
      y1 +- vc 0 dy1
      y2 +- vc dy1 0
      x1 +- hc 0 dx1
      x2 +- hc dx1 0`,rect:"x1 y1 x2 y2",paths:["M x1 y1 L x2 y1 L x2 y2 L x1 y2 Z"]}},ro={ribbon:{av:"adj1 16667; adj2 50000",gd:`a1 pin 0 adj1 33333
      a2 pin 25000 adj2 75000
      x10 +- r 0 wd8
      dx2 */ w a2 200000
      x2 +- hc 0 dx2
      x9 +- hc dx2 0
      x3 +- x2 wd32 0
      x8 +- x9 0 wd32
      x5 +- x2 wd8 0
      x6 +- x9 0 wd8
      x4 +- x5 0 wd32
      x7 +- x6 wd32 0
      y1 */ h a1 200000
      y2 */ h a1 100000
      y4 +- b 0 y2
      y3 */ y4 1 2
      hR */ h a1 400000
      y5 +- b 0 hR
      y6 +- y2 0 hR`,rect:"x2 y2 x9 b",paths:["stroke=0 M l t L x4 t A wd32 hR 3cd4 cd2 L x3 y1 A wd32 hR 3cd4 -10800000 L x8 y2 A wd32 hR cd4 -10800000 L x7 y1 A wd32 hR cd4 cd2 L r t L x10 y3 L r y4 L x9 y4 L x9 y5 A wd32 hR 0 cd4 L x3 b A wd32 hR cd4 cd4 L x2 y4 L l y4 L wd8 y3 Z","fill=darkenLess stroke=0 M x5 hR A wd32 hR 0 cd4 L x3 y1 A wd32 hR 3cd4 -10800000 L x5 y2 Z M x6 hR A wd32 hR cd2 -5400000 L x8 y1 A wd32 hR 3cd4 cd2 L x6 y2 Z","fill=none M l t L x4 t A wd32 hR 3cd4 cd2 L x3 y1 A wd32 hR 3cd4 -10800000 L x8 y2 A wd32 hR cd4 -10800000 L x7 y1 A wd32 hR cd4 cd2 L r t L x10 y3 L r y4 L x9 y4 L x9 y5 A wd32 hR 0 cd4 L x3 b A wd32 hR cd4 cd4 L x2 y4 L l y4 L wd8 y3 Z M x5 hR L x5 y2 M x6 y2 L x6 hR M x2 y4 L x2 y6 M x9 y6 L x9 y4"]},ribbon2:{av:"adj1 16667; adj2 50000",gd:`a1 pin 0 adj1 33333
      a2 pin 25000 adj2 75000
      x10 +- r 0 wd8
      dx2 */ w a2 200000
      x2 +- hc 0 dx2
      x9 +- hc dx2 0
      x3 +- x2 wd32 0
      x8 +- x9 0 wd32
      x5 +- x2 wd8 0
      x6 +- x9 0 wd8
      x4 +- x5 0 wd32
      x7 +- x6 wd32 0
      dy1 */ h a1 200000
      y1 +- b 0 dy1
      dy2 */ h a1 100000
      y2 +- b 0 dy2
      y4 +- t dy2 0
      y3 +/ y4 b 2
      hR */ h a1 400000
      y6 +- b 0 hR
      y7 +- y1 0 hR`,rect:"x2 t x9 y2",paths:["stroke=0 M l b L x4 b A wd32 hR cd4 -10800000 L x3 y1 A wd32 hR cd4 cd2 L x8 y2 A wd32 hR 3cd4 cd2 L x7 y1 A wd32 hR 3cd4 -10800000 L r b L x10 y3 L r y4 L x9 y4 L x9 hR A wd32 hR 0 -5400000 L x3 t A wd32 hR 3cd4 -5400000 L x2 y4 L l y4 L wd8 y3 Z","fill=darkenLess stroke=0 M x5 y6 A wd32 hR 0 -5400000 L x3 y1 A wd32 hR cd4 cd2 L x5 y2 Z M x6 y6 A wd32 hR cd2 cd4 L x8 y1 A wd32 hR cd4 -10800000 L x6 y2 Z","fill=none M l b L x4 b A wd32 hR cd4 -10800000 L x3 y1 A wd32 hR cd4 cd2 L x8 y2 A wd32 hR 3cd4 cd2 L x7 y1 A wd32 hR 3cd4 -10800000 L r b L x10 y3 L r y4 L x9 y4 L x9 hR A wd32 hR 0 -5400000 L x3 t A wd32 hR 3cd4 -5400000 L x2 y4 L l y4 L wd8 y3 Z M x5 y6 L x5 y2 M x6 y2 L x6 y6 M x2 y7 L x2 y4 M x9 y4 L x9 y7"]},ellipseRibbon:{av:"adj1 25000; adj2 50000; adj3 12500",gd:`a1 pin 0 adj1 100000
      a2 pin 25000 adj2 75000
      q10 +- 100000 0 a1
      q11 */ q10 1 2
      q12 +- a1 0 q11
      minAdj3 max 0 q12
      a3 pin minAdj3 adj3 a1
      dx2 */ w a2 200000
      x2 +- hc 0 dx2
      x3 +- x2 wd8 0
      x4 +- r 0 x3
      x5 +- r 0 x2
      x6 +- r 0 wd8
      dy1 */ h a3 100000
      f1 */ 4 dy1 w
      q1 */ x3 x3 w
      q2 +- x3 0 q1
      y1 */ f1 q2 1
      cx1 */ x3 1 2
      cy1 */ f1 cx1 1
      cx2 +- r 0 cx1
      q1 */ h a1 100000
      dy3 +- q1 0 dy1
      q3 */ x2 x2 w
      q4 +- x2 0 q3
      q5 */ f1 q4 1
      y3 +- q5 dy3 0
      q6 +- dy1 dy3 y3
      q7 +- q6 dy1 0
      cy3 +- q7 dy3 0
      rh +- b 0 q1
      q8 */ dy1 14 16
      y2 +/ q8 rh 2
      y5 +- q5 rh 0
      y6 +- y3 rh 0
      cx4 */ x2 1 2
      q9 */ f1 cx4 1
      cy4 +- q9 rh 0
      cx5 +- r 0 cx4
      cy6 +- cy3 rh 0
      y7 +- y1 dy3 0
      cy7 +- q1 q1 y7
      y8 +- b 0 dy1`,rect:"x2 q1 x5 y6",paths:["stroke=0 M l t Q cx1 cy1 x3 y1 L x2 y3 Q hc cy3 x5 y3 L x4 y1 Q cx2 cy1 r t L x6 y2 L r rh Q cx5 cy4 x5 y5 L x5 y6 Q hc cy6 x2 y6 L x2 y5 Q cx4 cy4 l rh L wd8 y2 Z","fill=darkenLess stroke=0 M x3 y7 L x3 y1 L x2 y3 Q hc cy3 x5 y3 L x4 y1 L x4 y7 Q hc cy7 x3 y7 Z","fill=none M l t Q cx1 cy1 x3 y1 L x2 y3 Q hc cy3 x5 y3 L x4 y1 Q cx2 cy1 r t L x6 y2 L r rh Q cx5 cy4 x5 y5 L x5 y6 Q hc cy6 x2 y6 L x2 y5 Q cx4 cy4 l rh L wd8 y2 Z M x2 y5 L x2 y3 M x5 y3 L x5 y5 M x3 y1 L x3 y7 M x4 y7 L x4 y1"]},ellipseRibbon2:{av:"adj1 25000; adj2 50000; adj3 12500",gd:`a1 pin 0 adj1 100000
      a2 pin 25000 adj2 75000
      q10 +- 100000 0 a1
      q11 */ q10 1 2
      q12 +- a1 0 q11
      minAdj3 max 0 q12
      a3 pin minAdj3 adj3 a1
      dx2 */ w a2 200000
      x2 +- hc 0 dx2
      x3 +- x2 wd8 0
      x4 +- r 0 x3
      x5 +- r 0 x2
      x6 +- r 0 wd8
      dy1 */ h a3 100000
      f1 */ 4 dy1 w
      q1 */ x3 x3 w
      q2 +- x3 0 q1
      u1 */ f1 q2 1
      y1 +- b 0 u1
      cx1 */ x3 1 2
      cu1 */ f1 cx1 1
      cy1 +- b 0 cu1
      cx2 +- r 0 cx1
      q1 */ h a1 100000
      dy3 +- q1 0 dy1
      q3 */ x2 x2 w
      q4 +- x2 0 q3
      q5 */ f1 q4 1
      u3 +- q5 dy3 0
      y3 +- b 0 u3
      q6 +- dy1 dy3 u3
      q7 +- q6 dy1 0
      cu3 +- q7 dy3 0
      cy3 +- b 0 cu3
      rh +- b 0 q1
      q8 */ dy1 14 16
      u2 +/ q8 rh 2
      y2 +- b 0 u2
      u5 +- q5 rh 0
      y5 +- b 0 u5
      u6 +- u3 rh 0
      y6 +- b 0 u6
      cx4 */ x2 1 2
      q9 */ f1 cx4 1
      cu4 +- q9 rh 0
      cy4 +- b 0 cu4
      cx5 +- r 0 cx4
      cu6 +- cu3 rh 0
      cy6 +- b 0 cu6
      u7 +- u1 dy3 0
      y7 +- b 0 u7
      cu7 +- q1 q1 u7
      cy7 +- b 0 cu7`,rect:"x2 y6 x5 rh",paths:["stroke=0 M l b Q cx1 cy1 x3 y1 L x2 y3 Q hc cy3 x5 y3 L x4 y1 Q cx2 cy1 r b L x6 y2 L r q1 Q cx5 cy4 x5 y5 L x5 y6 Q hc cy6 x2 y6 L x2 y5 Q cx4 cy4 l q1 L wd8 y2 Z","fill=darkenLess stroke=0 M x3 y7 L x3 y1 L x2 y3 Q hc cy3 x5 y3 L x4 y1 L x4 y7 Q hc cy7 x3 y7 Z","fill=none M l b Q cx1 cy1 x3 y1 L x2 y3 Q hc cy3 x5 y3 L x4 y1 Q cx2 cy1 r b L x6 y2 L r q1 Q cx5 cy4 x5 y5 L x5 y6 Q hc cy6 x2 y6 L x2 y5 Q cx4 cy4 l q1 L wd8 y2 Z M x2 y3 L x2 y5 M x5 y5 L x5 y3 M x3 y7 L x3 y1 M x4 y1 L x4 y7"]},leftRightRibbon:{av:"adj1 50000; adj2 50000; adj3 16667",gd:`a3 pin 0 adj3 33333
      maxAdj1 +- 100000 0 a3
      a1 pin 0 adj1 maxAdj1
      w1 +- wd2 0 wd32
      maxAdj2 */ 100000 w1 ss
      a2 pin 0 adj2 maxAdj2
      x1 */ ss a2 100000
      x4 +- r 0 x1
      dy1 */ h a1 200000
      dy2 */ h a3 -200000
      ly1 +- vc dy2 dy1
      ry4 +- vc dy1 dy2
      ly2 +- ly1 dy1 0
      ry3 +- b 0 ly2
      ly4 */ ly2 2 1
      ry1 +- b 0 ly4
      ly3 +- ly4 0 ly1
      ry2 +- b 0 ly3
      hR */ a3 ss 400000
      x2 +- hc 0 wd32
      x3 +- hc wd32 0
      y1 +- ly1 hR 0
      y2 +- ry2 0 hR`,rect:"x1 ly1 x4 ry4",paths:["stroke=0 M l ly2 L x1 t L x1 ly1 L hc ly1 A wd32 hR 3cd4 cd2 A wd32 hR 3cd4 -10800000 L x4 ry2 L x4 ry1 L r ry3 L x4 b L x4 ry4 L hc ry4 A wd32 hR cd4 cd4 L x2 ly3 L x1 ly3 L x1 ly4 Z","fill=darkenLess stroke=0 M x3 y1 A wd32 hR 0 cd4 A wd32 hR 3cd4 -10800000 L x3 ry2 Z","fill=none M l ly2 L x1 t L x1 ly1 L hc ly1 A wd32 hR 3cd4 cd2 A wd32 hR 3cd4 -10800000 L x4 ry2 L x4 ry1 L r ry3 L x4 b L x4 ry4 L hc ry4 A wd32 hR cd4 cd4 L x2 ly3 L x1 ly3 L x1 ly4 Z M x3 y1 L x3 ry2 M x2 y2 L x2 ly3"]},horizontalScroll:{av:"adj 12500",gd:`a pin 0 adj 25000
      ch */ ss a 100000
      ch2 */ ch 1 2
      ch4 */ ch 1 4
      y3 +- ch ch2 0
      y4 +- ch ch 0
      y6 +- b 0 ch
      y7 +- b 0 ch2
      y5 +- y6 0 ch2
      x3 +- r 0 ch
      x4 +- r 0 ch2`,rect:"ch ch x4 y6",paths:["stroke=0 M r ch2 A ch2 ch2 0 cd4 L x4 ch2 A ch4 ch4 0 cd2 L x3 ch L ch2 ch A ch2 ch2 3cd4 -5400000 L l y7 A ch2 ch2 cd2 -10800000 L ch y6 L x4 y6 A ch2 ch2 cd4 -5400000 Z M ch2 y4 A ch2 ch2 cd4 -5400000 A ch4 ch4 0 -10800000 Z","fill=darkenLess stroke=0 M ch2 y4 A ch2 ch2 cd4 -5400000 A ch4 ch4 0 -10800000 Z M x4 ch A ch2 ch2 cd4 -16200000 A ch4 ch4 cd2 -10800000 Z","fill=none M l y3 A ch2 ch2 cd2 cd4 L x3 ch L x3 ch2 A ch2 ch2 cd2 cd2 L r y5 A ch2 ch2 0 cd4 L ch y6 L ch y7 A ch2 ch2 0 cd2 Z M x3 ch L x4 ch A ch2 ch2 cd4 -5400000 M x4 ch L x4 ch2 A ch4 ch4 0 cd2 M ch2 y4 L ch2 y3 A ch4 ch4 cd2 cd2 A ch2 ch2 0 cd2 M ch y3 L ch y6"]},verticalScroll:{av:"adj 12500",gd:`a pin 0 adj 25000
      ch */ ss a 100000
      ch2 */ ch 1 2
      ch4 */ ch 1 4
      x3 +- ch ch2 0
      x4 +- ch ch 0
      x6 +- r 0 ch
      x7 +- r 0 ch2
      x5 +- x6 0 ch2
      y3 +- b 0 ch
      y4 +- b 0 ch2`,rect:"ch ch x6 y4",paths:["stroke=0 M ch2 b A ch2 ch2 cd4 -5400000 L ch2 y4 A ch4 ch4 cd4 -10800000 L ch y3 L ch ch2 A ch2 ch2 cd2 cd4 L x7 t A ch2 ch2 3cd4 cd2 L x6 ch L x6 y4 A ch2 ch2 0 cd4 Z M x4 ch2 A ch2 ch2 0 cd4 A ch4 ch4 cd4 cd2 Z","fill=darkenLess stroke=0 M x4 ch2 A ch2 ch2 0 cd4 A ch4 ch4 cd4 cd2 Z M ch y4 A ch2 ch2 0 3cd4 A ch4 ch4 3cd4 cd2 Z","fill=none M ch y3 L ch ch2 A ch2 ch2 cd2 cd4 L x7 t A ch2 ch2 3cd4 cd2 L x6 ch L x6 y4 A ch2 ch2 0 cd4 L ch2 b A ch2 ch2 cd4 cd2 Z M x3 t A ch2 ch2 3cd4 cd2 A ch4 ch4 cd4 cd2 L x4 ch2 M x6 ch L x3 ch M ch2 y3 A ch4 ch4 3cd4 cd2 L ch y4 M ch2 b A ch2 ch2 cd4 -5400000 L ch y3"]},doubleWave:{av:"adj1 6250; adj2 0",gd:`a1 pin 0 adj1 12500
      a2 pin -10000 adj2 10000
      y1 */ h a1 100000
      dy2 */ y1 10 3
      y2 +- y1 0 dy2
      y3 +- y1 dy2 0
      y4 +- b 0 y1
      y5 +- y4 0 dy2
      y6 +- y4 dy2 0
      of */ w a2 100000
      of2 */ w a2 50000
      x1 abs of
      dx2 ?: of2 0 of2
      x2 +- l 0 dx2
      dx8 ?: of2 of2 0
      x8 +- r 0 dx8
      dx3 +/ dx2 x8 6
      x3 +- x2 dx3 0
      dx4 +/ dx2 x8 3
      x4 +- x2 dx4 0
      x5 +/ x2 x8 2
      x6 +- x5 dx3 0
      x7 +/ x6 x8 2
      x9 +- l dx8 0
      x15 +- r dx2 0
      x10 +- x9 dx3 0
      x11 +- x9 dx4 0
      x12 +/ x9 x15 2
      x13 +- x12 dx3 0
      x14 +/ x13 x15 2
      x16 +- r 0 x1
      xAdj +- hc of 0
      il max x2 x9
      ir min x8 x15
      it */ h a1 50000
      ib +- b 0 it`,rect:"il it ir ib",paths:["M x2 y1 C x3 y2 x4 y3 x5 y1 C x6 y2 x7 y3 x8 y1 L x15 y4 C x14 y6 x13 y5 x12 y4 C x11 y6 x10 y5 x9 y4 Z"]},flowChartDisplay:{gd:"x2 */ w 5 6",rect:"wd6 t x2 b",paths:["w=6 h=6 M 0 3 L 1 0 L 5 0 A 1 3 3cd4 cd2 L 1 6 Z"]},flowChartMagneticDrum:{gd:"x2 */ w 2 3",rect:"wd6 t x2 b",paths:["w=6 h=6 stroke=0 M 1 0 L 5 0 A 1 3 3cd4 cd2 L 1 6 A 1 3 cd4 cd2 Z","w=6 h=6 fill=lighten stroke=0 M 5 6 A 1 3 cd4 cd2 A 1 3 3cd4 cd2 Z","w=6 h=6 fill=none M 5 6 A 1 3 cd4 cd2","w=6 h=6 fill=none M 1 0 L 5 0 A 1 3 3cd4 cd2 L 1 6 A 1 3 cd4 cd2 Z"]},flowChartMagneticTape:{gd:`idx cos wd2 2700000
      idy sin hd2 2700000
      il +- hc 0 idx
      ir +- hc idx 0
      it +- vc 0 idy
      ib +- vc idy 0
      ang1 at2 w h`,rect:"il it ir ib",paths:["M hc b A wd2 hd2 cd4 cd4 A wd2 hd2 cd2 cd4 A wd2 hd2 3cd4 cd4 A wd2 hd2 0 ang1 L r ib L r b Z"]},flowChartMultidocument:{gd:`y2 */ h 3675 21600
      y8 */ h 20782 21600
      x3 */ w 9298 21600
      x4 */ w 12286 21600
      x5 */ w 18595 21600`,rect:"l y2 x5 y8",paths:["w=21600 h=21600 stroke=0 M 0 20782 C 9298 23542 9298 18022 18595 18022 L 18595 3675 L 0 3675 Z M 1532 3675 L 1532 1815 L 20000 1815 L 20000 16252 C 19298 16252 18595 16352 18595 16352 L 18595 3675 Z M 2972 1815 L 2972 0 L 21600 0 L 21600 14392 C 20800 14392 20000 14467 20000 14467 L 20000 1815 Z","w=21600 h=21600 fill=none M 0 3675 L 18595 3675 L 18595 18022 C 9298 18022 9298 23542 0 20782 Z M 1532 3675 L 1532 1815 L 20000 1815 L 20000 16252 C 19298 16252 18595 16352 18595 16352 M 2972 1815 L 2972 0 L 21600 0 L 21600 14392 C 20800 14392 20000 14467 20000 14467","w=21600 h=21600 fill=none stroke=0 M 0 20782 C 9298 23542 9298 18022 18595 18022 L 18595 16352 C 18595 16352 19298 16252 20000 16252 L 20000 14467 C 20000 14467 20800 14392 21600 14392 L 21600 0 L 2972 0 L 2972 1815 L 1532 1815 L 1532 3675 L 0 3675 Z"]},flowChartOfflineStorage:{gd:"x4 */ w 3 4",rect:"wd4 t x4 vc",paths:["w=2 h=2 stroke=0 M 0 0 L 2 0 L 1 2 Z","w=5 h=5 fill=none M 2 4 L 3 4","w=2 h=2 fill=none M 0 0 L 2 0 L 1 2 Z"]},flowChartOnlineStorage:{gd:"x2 */ w 5 6",rect:"wd6 t x2 b",paths:["w=6 h=6 M 1 0 L 6 0 A 1 3 3cd4 -10800000 L 1 6 A 1 3 cd4 cd2 Z"]},flowChartPunchedCard:{rect:"l hd5 r b",paths:["w=5 h=5 M 0 1 L 1 0 L 5 0 L 5 5 L 0 5 Z"]},flowChartPunchedTape:{gd:`y2 */ h 9 10
      ib */ h 4 5`,rect:"l hd5 r ib",paths:["w=20 h=20 M 0 2 A 5 2 cd2 -10800000 A 5 2 cd2 cd2 L 20 18 A 5 2 0 -10800000 A 5 2 0 cd2 Z"]},funnel:{gd:`d */ ss 1 20
      rw2 +- wd2 0 d
      rh2 +- hd4 0 d
      t1 cos wd2 480000
      t2 sin hd4 480000
      da at2 t1 t2
      2da */ da 2 1
      stAng1 +- cd2 0 da
      swAng1 +- cd2 2da 0
      swAng3 +- cd2 0 2da
      rw3 */ wd2 1 4
      rh3 */ hd4 1 4
      ct1 cos hd4 stAng1
      st1 sin wd2 stAng1
      m1 mod ct1 st1 0
      n1 */ wd2 hd4 m1
      dx1 cos n1 stAng1
      dy1 sin n1 stAng1
      x1 +- hc dx1 0
      y1 +- hd4 dy1 0
      ct3 cos rh3 da
      st3 sin rw3 da
      m3 mod ct3 st3 0
      n3 */ rw3 rh3 m3
      dx3 cos n3 da
      dy3 sin n3 da
      x3 +- hc dx3 0
      vc3 +- b 0 rh3
      y3 +- vc3 dy3 0
      x2 +- wd2 0 rw2
      cd */ cd2 2 1`,paths:["M x1 y1 A wd2 hd4 stAng1 swAng1 L x3 y3 A rw3 rh3 da swAng3 Z M x2 hd4 A rw2 rh2 cd2 -21600000 Z"]}},io=T({...Qa,...Xa,...ro,...to,...Za,...eo,...no,...$a}),ao=(e,t={},n=[])=>({name:e,attrs:T(t),children:n,text:""}),oo=(e,t)=>ao("gd",{name:e,fmla:t}),so=e=>e.trim().split(/\s+/),co=T({M:[2,"moveTo"],L:[2,"lnTo"],A:[4,"arcTo"],Q:[4,"quadBezTo"],C:[6,"cubicBezTo"],Z:[0,"close"]});function lo(e){let t={},n=[],r=so(e),i=0;for(;r[i]?.includes("=");i++){let[e,n]=r[i].split("=");t[e]=n}for(;i<r.length;){let e=co[r[i]];if(!e)throw TypeError("preset path: "+r[i]+" is no command");let t=r.slice(i+1,i+1+e[0]);if(i+=1+e[0],e[1]==="arcTo"){let[e,r,i,a]=t;n.push(ao("arcTo",{wR:e,hR:r,stAng:i,swAng:a}));continue}let a=[];for(let e=0;e<t.length;e+=2)a.push(ao("pt",{x:t[e],y:t[e+1]}));n.push(ao(e[1],{},a))}return ao("path",t,n)}const uo=new WeakMap;function fo(e){let t=(e.gd??"").split(/[;\n]/).filter(e=>e.trim()),n=[ao("gdLst",{},t.map(e=>{let[t,...n]=so(e);return oo(t,n.join(" "))})),ao("pathLst",{},e.paths.map(lo))];if(e.rect){let[t,r,i,a]=so(e.rect);n.push(ao("rect",{l:t,t:r,r:i,b:a}))}let r=(e.av??"").split(";").filter(e=>e.trim()).map(e=>{let[t,n]=so(e);return[t,oo(t,"val "+n)]});return{av:r,rest:n,plain:ao("custGeom",{},[ao("avLst",{},r.map(([,e])=>e)),...n])}}function po(e,t){let n=uo.get(e);return n||(n=fo(e),uo.set(e,n)),n.av.some(([e])=>t[e]!==void 0)?ao("custGeom",{},[ao("avLst",{},n.av.map(([e,n])=>{let r=t[e];return r===void 0?n:oo(e,"val "+Math.trunc(r))})),...n.rest]):n.plain}function mo(e){let t=T({}),n=P(e,"avLst");if(!n)return t;for(let e of M(n,"gd")){let n=L(e,"name"),r=L(e,"fmla");if(!n||!r)continue;let i=/^val (-?\d+)$/.exec(r);i&&(t[n]=Math.max(-1e9,Math.min(1e9,Number(i[1]))))}return t}function ho(e,t,[n,r,i,a],o){let s=P(e,"rect");if(!s)return;let c=(e,n)=>(t(So(s,e,o))??NaN)*n,[l,u]=[n/i,r/a],d=[c("l",l),c("t",u),n-c("r",l),r-c("b",u)].map(e=>oe(Math.max(0,e)));return d.every(Number.isFinite)&&d[0]+d[2]<n&&d[1]+d[3]<r?d:void 0}function go(e,t,n,r){let i=L(e,"prst")??"rect",a=mo(e);switch(i){case"rect":case"flowChartProcess":case"actionButtonBlank":return{geometry:{kind:"rect"}};case"roundRect":case"flowChartAlternateProcess":{let e=Math.max(0,Math.min(5e4,a.adj??16667))/1e5,r=Math.min(t,n)*e,i=r*.29289;return{geometry:{kind:"roundRect",radiusPx:oe(r)},textRect:[i,i,i,i]}}case"ellipse":case"flowChartConnector":{let e=.14645;return{geometry:{kind:"ellipse"},textRect:[t*e,n*e,t*e,n*e]}}case"line":case"straightConnector1":return{geometry:{kind:"svgPath",d:"M0 0 L"+oe(t)+" "+oe(n),source:i,open:!0}};case"bentConnector2":return{geometry:{kind:"svgPath",d:"M0 0 L"+oe(t)+" 0 L"+oe(t)+" "+oe(n),source:i,open:!0}};default:{let e=io[i];if(e){let[r,o]=[Math.max(t,.01),Math.max(n,.01)],[s,c]=[r/re(1),o/re(1)],l=po(e,a),u=To(l,s,c),d=u&&Do(l,u,r,o,s,c,!0);if(u&&d?.kind==="svgPath")return{geometry:{...d,source:i},textRect:ho(l,u,[r,o,s,c],!0)}}return r?.(i),{geometry:{kind:"rect"}}}}}const _o=T({darken:-.4,darkenLess:-.2,lighten:.4,lightenLess:.2}),vo=[2,3,4,5,6,8,10,12,32].map(e=>["wd"+e,"hd"+e,e]),yo=[2,4,6,8,16,32].map(e=>["ssd"+e,e]),bo=e=>{if(e===void 0||!/^-?\d+$/.test(e))return e;let t=Number(e);return Number.isFinite(t)?t:void 0},xo=new WeakMap;function So(e,t,n){if(!n)return bo(L(e,t));let r=xo.get(e);return r||(r=T({}),xo.set(e,r)),t in r||(r[t]=bo(L(e,t))),r[t]}const Co=new WeakMap;function wo(e){let t=Co.get(e);if(!t){let[n,r,i,a]=(L(e,"fmla")??"").slice(0,200).trim().split(/\s+/);t={name:L(e,"name")?.slice(0,64),op:n,x:bo(r),y:bo(i),z:bo(a)},Co.set(e,t)}return t}function To(e,t,n){let r=T({l:0,t:0,r:t,b:n,w:t,h:n,hc:t/2,vc:n/2,ss:Math.min(t,n),ls:Math.max(t,n),cd2:108e5,cd4:54e5,cd8:27e5,"3cd4":162e5,"3cd8":81e5,"5cd8":135e5,"7cd8":189e5});for(let[e,i,a]of vo)r[e]=t/a,r[i]=n/a;for(let[e,i]of yo)r[e]=Math.min(t,n)/i;let i=e=>typeof e=="string"?r[e]:e,a=e=>e/6e4*(Math.PI/180),o=e=>e*180*6e4/Math.PI;for(let t of["avLst","gdLst"]){let n=P(e,t);if(n&&n.children.length>1e3)return;for(let e of n?M(n,"gd"):[]){y(16);let t=wo(e),[n,s,c]=[i(t.x)??NaN,i(t.y)??NaN,i(t.z)??NaN],l;switch(t.op){case"val":l=n;break;case"*/":l=n*s/c;break;case"+-":l=n+s-c;break;case"+/":l=(n+s)/c;break;case"?:":l=n>0?s:c;break;case"abs":l=Math.abs(n);break;case"sqrt":l=Math.sqrt(n);break;case"max":l=Math.max(n,s);break;case"min":l=Math.min(n,s);break;case"mod":l=Math.sqrt(n*n+s*s+c*c);break;case"pin":l=s<n?n:s>c?c:s;break;case"sin":l=n*Math.sin(a(s));break;case"cos":l=n*Math.cos(a(s));break;case"tan":l=n*Math.tan(a(s));break;case"at2":l=o(Math.atan2(s,n));break;case"cat2":l=n*Math.cos(Math.atan2(c,s));break;case"sat2":l=n*Math.sin(Math.atan2(c,s))}t.name&&l!==void 0&&Number.isFinite(l)&&(r[t.name]=l)}}return i}const Eo=new WeakMap;function Do(e,t,n,r,i,a,o){let s=P(e,"pathLst");if(!s)return;let c=!1,l=(e,n)=>{let r=t(So(e,n,o));return r===void 0&&(c=!0),r??0},u=[],d=[],f=[],p=[],m={all:0,filled:0,stroked:0,shaded:0,shade:0};for(let e of M(s,"path")){let t=[],o=R(e,"w")??0,s=R(e,"h")??0,c=n/(o>0?o:i),h=r/(s>0?s:a),g=e=>{let t=P(e,"pt");return t?oe(l(t,"x")*c)+" "+oe(l(t,"y")*h):"0 0"},_,v=!0,b=!1,x=()=>{v&&b&&_!==void 0&&t.push("L"+_),v=!0,b=!1};for(let n of N(e))switch(y(n.name==="arcTo"?128:32*(n.children.length||1)),n.name){case"moveTo":x(),_=g(n),t.push("M"+_);break;case"lnTo":{let e=g(n);e===_?b=!0:(t.push("L"+e),v=!1),_=e;break}case"cubicBezTo":case"quadBezTo":{let e=M(n,"pt").map(e=>oe(l(e,"x")*c)+" "+oe(l(e,"y")*h));e.length===(n.name==="cubicBezTo"?3:2)&&(t.push((e.length===3?"C":"Q")+e.join(" ")),_=e.at(-1),v=!1);break}case"arcTo":{_=void 0,v=!1;let[e,r]=[l(n,"wR"),l(n,"hR")],i=e*c,a=r*h,o=ie(l(n,"stAng")),s=ie(l(n,"swAng")),u=t=>{let n=t*Math.PI/180;if(!(e>0&&r>0))return n;let i=Math.atan2(e*Math.sin(n),r*Math.cos(n));return i+Math.round((n-i)/(2*Math.PI))*2*Math.PI},d=+(s>=0),f=(e,t,n)=>"a"+oe(i)+" "+oe(a)+" 0 "+n+" "+d+" "+oe(i*(Math.cos(t)-Math.cos(e)))+" "+oe(a*(Math.sin(t)-Math.sin(e))),p=(e,t)=>f(u(e),u(t),+(Math.abs(t-e)>180)),m=Math.max(-360,Math.min(360,s)),[g,y]=[u(o),u(o+m)];if(Math.abs(m)>=359.99)t.push(p(o,o+m/2),p(o+m/2,o+m));else if(e>0&&r>0&&Math.abs(y-g)>2*Math.PI-.1){let[e,n]=[(2*g+y)/3,(g+2*y)/3];t.push(f(g,e,0),f(e,n,0),f(n,y,0))}else t.push(p(o,o+m));break}case"close":x(),_=void 0,t.push("Z")}if(x(),t.length===0)continue;let S=t.join(" ");u.push(S),m.all+=t.length;let C=L(e,"fill");C!=="none"&&(d.push(S),m.filled+=t.length);let w=C===void 0?void 0:_o[C];w!==void 0&&(p.push({d:S,toward:w}),m.shaded+=t.length,m.shade=Math.max(m.shade,t.length));let T=L(e,"stroke");T!=="0"&&T!=="false"&&(f.push(S),m.stroked+=t.length)}let h=u.join(" ");if(u.length===0||c||/NaN|Infinity|e/.test(h))return;let g={kind:"svgPath",d:h,source:"custGeom"},_=d.length!==u.length||f.length!==u.length;_&&(g.fillD=d.join(" "),g.strokeD=f.join(" ")),p.length>0&&(g.shades=p);let[v,b]=_?[m.filled,m.stroked]:[m.all,m.all];return Eo.set(g,_||p.length>0?{whole:m.all,longest:Math.max(v,b,m.shade),together:v+b+m.shaded}:{whole:m.all,longest:m.all,together:m.all}),g}var Oo=class{byId=new Map;broken=new WeakSet};const ko=2e4,Ao=9525;function K(e,t={},n=[]){return y(1),{name:e,attrs:T(t),children:n,text:""}}const jo=e=>e.children.reduce((e,t)=>e+(t.name==="txbxContent"?0:jo(t)),1);function Mo(e){let t=v();return i(t,"vmlElements",e)?!0:(t.vmlElements=0,!1)}const No=()=>v().vmlElements<=0,q=(e,t,n)=>Math.max(t,Math.min(n,e)),Po=e=>String(Math.round(q(e,-2e4,ko)*Ao)),Fo=(e,t)=>e.length>t?e.slice(0,t):e,Io=T({px:1,pt:96/72,pc:16,in:96,cm:96/2.54,mm:96/25.4,emu:1/Ao});function Lo(e){if(e===void 0)return;let t=/^([+-]?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/.exec(Fo(e,40).trim().toLowerCase());if(!t)return;let n=Number(t[1]);return Number.isFinite(n)?{value:n,unit:t[2]??""}:void 0}function Ro(e){let t=Lo(e);if(!t)return;let n=t.unit===""?1:Io[t.unit];return n===void 0?void 0:q(t.value*n,-2e4,ko)}function zo(e){let t=Lo(e);if(t){if(t.unit==="")return t.value;if(t.unit==="%")return t.value/100;if(t.unit==="f")return t.value/65536}}function Bo(e){let t=Lo(e);if(!t||t.unit!==""&&t.unit!=="fd")return 0;let n=(t.unit==="fd"?t.value/65536:t.value)%360;return n<0?n+360:n}function Vo(e){if(e==="t"||e==="true")return!0;if(e==="f"||e==="false")return!1}function Ho(e,t,n){if(e===void 0)return[t,n];let r=Fo(e,80),i=r.includes(",")?r.split(",",2):r.trim().split(/\s+/,2),a=(e,t)=>q(Lo(e?.trim())?.value??t,-1e8,1e8);return[a(i[0],t),a(i[1],n)]}let Uo=new WeakMap,Wo=0;function Go(){Uo=new WeakMap,Wo=0}function Ko(e){let t=e&&Uo.get(e);if(t)return t;let n=T({}),r=e?.attrs.style;if(!e||r===void 0)return n;++Wo>1e3&&Go(),Uo.set(e,n);let i=Fo(r,2e3);y(i.length>>1);for(let e of i.split(";",64)){let t=e.indexOf(":");t<0||(n[e.slice(0,t).trim().toLowerCase()]=e.slice(t+1).trim())}return n}const qo=T({black:"000000",silver:"C0C0C0",gray:"808080",white:"FFFFFF",maroon:"800000",red:"FF0000",purple:"800080",fuchsia:"FF00FF",green:"008000",lime:"00FF00",olive:"808000",yellow:"FFFF00",navy:"000080",blue:"0000FF",teal:"008080",aqua:"00FFFF",orange:"FFA500",grey:"808080",cyan:"00FFFF",magenta:"FF00FF",pink:"FFC0CB",brown:"A52A2A",gold:"FFD700",indigo:"4B0082",violet:"EE82EE",tan:"D2B48C",turquoise:"40E0D0",plum:"DDA0DD",lavender:"E6E6FA",darkgray:"A9A9A9",darkgrey:"A9A9A9",lightgray:"D3D3D3",lightgrey:"D3D3D3",darkblue:"00008B",darkred:"8B0000",darkgreen:"006400",lightblue:"ADD8E6",lightgreen:"90EE90",lightyellow:"FFFFE0",window:"FFFFFF",windowtext:"000000"});function Jo(e){if(e===void 0)return;let t=Fo(e,60).trim().split(/[\s[(]/,1)[0]?.toLowerCase()??"";return/^#[0-9a-f]{6}$/.test(t)?t.slice(1).toUpperCase():/^#[0-9a-f]{3}$/.test(t)?t.slice(1).replace(/./g,e=>e+e).toUpperCase():qo[t]}function Yo(e,t,n){let r=Jo(e);return r===void 0&&e!==void 0&&n.lost++,r??t}function Xo(e,t){let n=Lo(e);if(n?.unit===""&&Math.abs(n.value)>=1e3){t.lost++;return}return Ro(e)}function Zo(e,t){let n=q(t,0,1);return K("srgbClr",{val:e},n<1?[K("alpha",{val:String(Math.round(n*1e5))})]:[])}function Qo(e,t){let n=e.attrs.type;return{shape:e,type:n?.startsWith("#")?t.types.byId.get(n.slice(1)):void 0,style:Ko(e)}}const $o=(e,t)=>L(e.shape,t)??(e.type?L(e.type,t):void 0);function J(e,t,n){for(let r of[e.shape,e.type]){let e=r?P(r,t):void 0,i=e?L(e,n):void 0;if(i!==void 0)return i}}function es(e,t,n,r){for(let i of[e.shape,e.type]){if(!i)continue;let e=P(i,t),a=(e?L(e,n):void 0)??L(i,r);if(a!==void 0)return a}}function ts(e,t){let n=1,r;for(let i in e.attrs){n++;let a=i.indexOf(":");if(a>0&&i.slice(a+1)===t){r=e.attrs[i];break}}return y(n),r}function ns(e){if(!e)return;let t=ts(e,"id")??ts(e,"relid")??ts(e,"pict");return t===void 0||t===""?void 0:Fo(t,200)}const Y=e=>Fo(e??"",40).trim().toLowerCase(),rs={group:!1,originX:0,originY:0,scaleX:1,scaleY:1,x:0,y:0},is=e=>q(Number.isFinite(e)?e:0,-2e4,ko);function as(e,t,n){let r=Lo(e);if(r)return t.group&&r.unit===""?is(r.value*n):Ro(e)}function os(e,t,n){let r=Lo(e);if(!r)return;let[i,a,o]=n==="x"?[t.x,t.originX,t.scaleX]:[t.y,t.originY,t.scaleY];if(t.group&&r.unit==="")return is(i+(r.value-a)*o);let s=Ro(e);return s===void 0?void 0:is(i+s)}function ss(e,t){return{x:os(e["margin-left"],t,"x")??os(e.left,t,"x")??t.x,y:os(e["margin-top"],t,"y")??os(e.top,t,"y")??t.y,w:Math.max(0,as(e.width,t,t.scaleX)??0),h:Math.max(0,as(e.height,t,t.scaleY)??0)}}function cs(e,t,n){return[os(e?.trim(),n,"x")??n.x,os(t?.trim(),n,"y")??n.y]}const ls={1:"rect",2:"roundRect",3:"ellipse",4:"diamond",5:"triangle",6:"rtTriangle",7:"parallelogram",9:"hexagon",10:"octagon",11:"plus",12:"star5",13:"rightArrow",15:"homePlate",16:"cube",19:"arc",20:"line",21:"plaque",22:"can",23:"donut",32:"straightConnector1",33:"bentConnector2",34:"bentConnector3",35:"bentConnector4",36:"bentConnector5",37:"curvedConnector2",38:"curvedConnector3",39:"curvedConnector4",40:"curvedConnector5",41:"callout1",42:"callout2",43:"callout3",44:"accentCallout1",45:"accentCallout2",46:"accentCallout3",47:"borderCallout1",48:"borderCallout2",49:"borderCallout3",50:"accentBorderCallout1",51:"accentBorderCallout2",52:"accentBorderCallout3",53:"ribbon",54:"ribbon2",55:"chevron",56:"pentagon",57:"noSmoking",58:"star8",59:"star16",60:"star32",61:"wedgeRectCallout",62:"wedgeRoundRectCallout",63:"wedgeEllipseCallout",64:"wave",65:"foldedCorner",66:"leftArrow",67:"downArrow",68:"upArrow",69:"leftRightArrow",70:"upDownArrow",71:"irregularSeal1",72:"irregularSeal2",73:"lightningBolt",74:"heart",75:"rect",76:"quadArrow",77:"leftArrowCallout",78:"rightArrowCallout",79:"upArrowCallout",80:"downArrowCallout",81:"leftRightArrowCallout",82:"upDownArrowCallout",83:"quadArrowCallout",84:"bevel",85:"leftBracket",86:"rightBracket",87:"leftBrace",88:"rightBrace",89:"leftUpArrow",90:"bentUpArrow",91:"bentArrow",92:"star24",93:"stripedRightArrow",94:"notchedRightArrow",95:"blockArc",96:"smileyFace",97:"verticalScroll",98:"horizontalScroll",99:"circularArrow",101:"uturnArrow",102:"curvedRightArrow",103:"curvedLeftArrow",104:"curvedUpArrow",105:"curvedDownArrow",106:"cloudCallout",107:"ellipseRibbon",108:"ellipseRibbon2",109:"flowChartProcess",110:"flowChartDecision",111:"flowChartInputOutput",112:"flowChartPredefinedProcess",113:"flowChartInternalStorage",114:"flowChartDocument",115:"flowChartMultidocument",116:"flowChartTerminator",117:"flowChartPreparation",118:"flowChartManualInput",119:"flowChartManualOperation",120:"flowChartConnector",121:"flowChartPunchedCard",122:"flowChartPunchedTape",123:"flowChartSummingJunction",124:"flowChartOr",125:"flowChartCollate",126:"flowChartSort",127:"flowChartExtract",128:"flowChartMerge",129:"flowChartOfflineStorage",130:"flowChartOnlineStorage",131:"flowChartMagneticTape",132:"flowChartMagneticDisk",133:"flowChartMagneticDrum",134:"flowChartDisplay",135:"flowChartDelay",176:"flowChartAlternateProcess",177:"flowChartOffpageConnector",182:"leftRightUpArrow",183:"sun",184:"moon",185:"bracketPair",186:"bracePair",187:"star4",188:"doubleWave",189:"actionButtonBlank",190:"actionButtonHome",191:"actionButtonHelp",192:"actionButtonInformation",193:"actionButtonForwardNext",194:"actionButtonBackPrevious",195:"actionButtonEnd",196:"actionButtonBeginning",197:"actionButtonReturn",198:"actionButtonDocument",199:"actionButtonSound",200:"actionButtonMovie",202:"rect"},us=(e,t=[])=>K("prstGeom",{prst:e},[K("avLst",{},t.map(([e,t])=>K("gd",{name:e,fmla:"val "+String(Math.round(t))})))]);function ds(e){let t=$o(e,"adj");return t===void 0?[]:Fo(t,200).split(",",8).map(e=>Lo(e.trim())?.value)}function fs(e){let t=Lo($o(e,"spt"));if(t)return t.unit===""?t.value:void 0;let n=e.type?null:/^#_x0000_t(\d{1,3})$/.exec(e.shape.attrs.type??"");return n?Number(n[1]):void 0}const ps={15:{along:"w",far:!0,shaft:!1,dflt:[16200]},55:{along:"w",far:!0,shaft:!1,dflt:[16200]},13:{along:"w",far:!0,shaft:!0,dflt:[16200,5400]},66:{along:"w",far:!1,shaft:!0,dflt:[5400,5400]},67:{along:"h",far:!0,shaft:!0,dflt:[16200,5400]},68:{along:"h",far:!1,shaft:!0,dflt:[5400,5400]}};function ms(e,t,n,r){let[i,a]=ds(t);if(e===8){let e=q(i??5400,0,10800);return K("custGeom",{},[K("pathLst",{},[K("path",{w:"21600",h:"21600"},[...[hs(0,0),hs(e,21600),hs(21600-e,21600),hs(21600,0)].map((e,t)=>K(t===0?"moveTo":"lnTo",{},[e])),K("close")])])])}let o=Object.hasOwn(ls,e)?ls[e]:void 0;if(o===void 0)return;if(e===2&&i!==void 0)return us(o,[["adj",q(i/21600,0,.5)*1e5]]);if(e>=61&&e<=63&&i!==void 0&&a!==void 0){let e=e=>q(e/21600-.5,-20,20)*1e5;return us(o,[["adj1",e(i)],["adj2",e(a)]])}let s=Object.hasOwn(ps,e)?ps[e]:void 0,c=Math.min(r.w,r.h);if(s&&c>0){let e=q(i??s.dflt[0],0,21600)/21600,t=(s.far?1-e:e)*r[s.along]*1e5/c;if(!s.shaft)return us(o,[["adj",t]]);let n=q(a??s.dflt[1],0,10800)/21600;return us(o,[["adj1",(1-2*n)*1e5],["adj2",t]])}return L(t.shape,"adj")!==void 0&&n.lost++,us(o)}const hs=(e,t)=>K("pt",{x:String(Math.round(e)),y:String(Math.round(t))}),gs=e=>es({...e,type:void 0},"path","v","path")!==void 0;function _s(e,t){let n=es(e,"path","v","path"),[r,i]=Ho($o(e,"coordsize"),1e3,1e3);if(n===void 0||n.length>4e4||!(r>=1&&i>=1))return;let a=gs(e)?void 0:e.type;if(a&&t.types.broken.has(a))return;let o=vs(n,r,i,Ho($o(e,"coordorigin"),0,0));return!o&&a&&t.types.broken.add(a),o}function vs(e,t,n,[r,i]){y(e.length);let a=[],o=[],s={},c=0,l=0,u=[0,0],d=0,f=0,p=e.length,m=()=>{for(;f<p&&` 
	\r`.includes(e[f]);)f++},h=e=>e!==void 0&&e>="0"&&e<="9",g=()=>{let t=[],n=!1;for(;;){m();let r=e[f];if(h(r)||r==="-"&&h(e[f+1])){let r=f++;for(;h(e[f]);)f++;t.push(q(Number(e.slice(r,f)),-1e8,1e8)),n=!1,m(),e[f]===","&&(f++,n=!0)}else if(r===",")t.push(0),f++,n=!0;else break}return n&&t.push(0),t},_=()=>{if(o.length>0){d++;let e={w:String(Math.round(t)),h:String(Math.round(n))};a.push(K("path",{...e,...s},o))}o=[],s={}};for(;f<p&&(m(),!(f>=p));){let t=f;for(;f<p&&e[f]>="a"&&e[f]<="z";)f++;if(f===t)return;let n=t;for(;n<f;n++){let t=e[n]==="n"&&n+1<f?e[n+1]:"";if(t==="f")s.fill="none";else if(t==="s")s.stroke="0";else if(e[n]==="x")o.push(K("close")),[c,l]=u;else if(e[n]==="e")_();else break;if(e[n]==="x"&&++d>2e3)return;(t==="f"||t==="s")&&n++}if(n===f)continue;let a=e.slice(n,f),m=a==="t"||a==="r"||a==="v",h=a==="c"||a==="v"?6:a==="m"||a==="l"||m?2:0;if(h===0)return;let v=g();if(v.length===0||v.length%h!==0||(d+=v.length/2)>2e3)return;for(let e=0;e<v.length;e+=h){let t=m?c:0,n=m?l:0,s=[];for(let a=e;a<e+h;a+=2)c=t+v[a],l=n+v[a+1],s.push(hs(c-r,l-i));let d=(a==="m"||a==="t")&&e===0;if(d)u=[c,l];else if(o.length===0)return;o.push(K(h===6?"cubicBezTo":d?"moveTo":"lnTo",{},s))}}return _(),a.length>0?K("custGeom",{},[K("pathLst",{},a)]):void 0}function ys(e,t){let n=L(e.shape,"points");if(n===void 0||n.length>8e4)return;y(n.length);let r=n.split(/[\s,]/).filter(e=>e!=="");if(r.length<4||r.length%2!=0||r.length/2>2e3||r.some(e=>Lo(e)===void 0))return;let i=[];for(let e=0;e<r.length;e+=2)i.push(cs(r[e],r[e+1],t));let[a,o]=i[0],[s,c]=[a,o];for(let[e,t]of i)a=Math.min(a,e),o=Math.min(o,t),s=Math.max(s,e),c=Math.max(c,t);return{box:{x:a,y:o,w:s-a,h:c-o},geom:K("custGeom",{},[K("pathLst",{},[K("path",{},i.map(([e,t],n)=>K(n===0?"moveTo":"lnTo",{},[hs((e-a)*Ao,(t-o)*Ao)])))])])}}function bs(e){return q(zo(e)??1,0,1)}function xs(e,t){let n=/^fill (darken|lighten)\((\d{1,3})\)$/.exec(Y(e));if(!n)return Jo(e)??"FFFFFF";let r=q(Number(n[2]),0,255)/255,i="";for(let e=0;e<6;e+=2){let a=parseInt(t.slice(e,e+2),16),o=Math.round(n[1]==="darken"?a*r:255-(255-a)*r);i+=o.toString(16).padStart(2,"0")}return i.toUpperCase()}function Ss(e){if(e===void 0)return;let t=[];for(let n of Fo(e,1e3).split(";",32)){if(n.trim()==="")continue;let[e,r]=n.trim().split(" ",2),i=zo(e),a=Jo(r);if(i===void 0||a===void 0)return;t.push([q(i,0,1),a])}return t.length>=2?t:void 0}function Cs(e,t,n){let r=ws(t,bs(J(e,"fill","opacity"))),i=ws(xs(J(e,"fill","color2"),t),bs(J(e,"fill","opacity2"))),a=q(Math.round((zo(J(e,"fill","focus"))??0)*100),-100,100),[o,s]=a<0?[i,r]:[r,i],c=Math.abs(a),l=(e,t)=>K("gs",{pos:String(e*1e3)},[t()]),u=a===0||a===100?Ss(J(e,"fill","colors")):void 0,d=u?u.map(([e,t])=>l(Math.round((a===0?1-e:e)*100),ws(t,1))):c===0?[l(0,s),l(100,o)]:c===100?[l(0,o),l(100,s)]:[l(0,o),l(c,s),l(100,o)];u&&a===0&&d.reverse();let f=((90+Bo(J(e,"fill","angle")))%360+360)%360;return K("gradFill",{rotWithShape:"1"},[K("gsLst",{},d),n?K("path",{path:"rect"},[K("fillToRect",{l:"50000",t:"50000",r:"50000",b:"50000"})]):K("lin",{ang:String(Math.round(f*6e4)),scaled:"0"})])}const ws=(e,t)=>()=>Zo(e,t);function Ts(e,t,n=!0){if(!(Vo(es(e,"fill","on","filled"))??n))return K("noFill");let r=Yo(es(e,"fill","color","fillcolor"),"FFFFFF",t),i=Y(J(e,"fill","type"))||"solid";if(i==="gradient")return Cs(e,r,!1);if(i==="gradientradial")return Cs(e,r,!0);if(i==="frame"||i==="tile"){let t=ns(P(e.shape,"fill"))??ns(e.type&&P(e.type,"fill"));if(t!==void 0)return K("blipFill",{},[K("blip",{"r:embed":t}),i==="tile"?K("tile"):K("stretch",{},[K("fillRect")])])}return i!=="solid"&&t.lost++,K("solidFill",{},[Zo(r,bs(J(e,"fill","opacity")))])}const Es=T({solid:"solid",shortdash:"sysDash",shortdot:"sysDot",shortdashdot:"sysDashDot",shortdashdotdot:"sysDashDotDot",dot:"dot",dash:"dash",longdash:"lgDash",dashdot:"dashDot",longdashdot:"lgDashDot",longdashdotdot:"lgDashDotDot","1 1":"sysDot","3 1":"sysDash","3 1 1 1":"sysDashDot","3 1 1 1 1 1":"sysDashDotDot","1 3":"dot","4 3":"dash","8 3":"lgDash","4 3 1 3":"dashDot","8 3 1 3":"lgDashDot","8 3 1 3 1 3":"lgDashDotDot"}),Ds=T({block:"triangle",classic:"stealth",diamond:"diamond",oval:"oval",open:"arrow"}),Os=T({narrow:"sm",short:"sm",medium:"med",wide:"lg",long:"lg"}),ks=T({thinthin:"dbl",thinthick:"thinThick",thickthin:"thickThin",thickbetweenthin:"tri"}),As=T({flat:"flat",square:"sq",round:"rnd"});function js(e,t,n=!0){if(!(Vo(es(e,"stroke","on","stroked"))??n))return K("ln",{},[K("noFill")]);let r=Yo(es(e,"stroke","color","strokecolor"),"000000",t),i=Xo(es(e,"stroke","weight","strokeweight"),t)??1,a={w:Po(q(i,0,1e3))},o=ks[Y(J(e,"stroke","linestyle"))];o&&(a.cmpd=o);let s=As[Y(J(e,"stroke","endcap"))];s&&(a.cap=s);let c=[K("solidFill",{},[Zo(r,bs(J(e,"stroke","opacity")))])],l=Y(J(e,"stroke","dashstyle"));l!==""&&c.push(K("prstDash",{val:Es[l]??"dash"}));let u=Y(J(e,"stroke","joinstyle"));(u==="round"||u==="bevel")&&c.push(K(u)),u==="miter"&&c.push(K("miter",{lim:"800000"}));for(let[t,n]of[["start","headEnd"],["end","tailEnd"]]){let r=Ds[Y(J(e,"stroke",t+"arrow"))];r&&c.push(K(n,{type:r,w:Os[Y(J(e,"stroke",t+"arrowwidth"))]??"med",len:Os[Y(J(e,"stroke",t+"arrowlength"))]??"med"}))}return K("ln",a,c)}function Ms(e,t){if(Vo(J(e,"shadow","on"))!==!0)return[];let n=Y(J(e,"shadow","type"));if(n!==""&&n!=="single")return t.lost++,[];let r=Fo(J(e,"shadow","offset")??"",80).split(",",2),i=Xo(r[0]?.trim(),t)??8/3,a=Xo(r[1]?.trim(),t)??8/3,o=Math.atan2(a,i)*180/Math.PI,s=Yo(J(e,"shadow","color"),"808080",t);return[K("effectLst",{},[K("outerShdw",{dist:Po(Math.hypot(i,a)),dir:String(Math.round((o<0?o+360:o)*6e4)),rotWithShape:"0"},[Zo(s,bs(J(e,"shadow","opacity")))])])]}function Ns(e,t,n,r=!1){let i={},a=Y(t.flip),o=a.includes("x")===a.includes("y")?6e4:-6e4,s=(Math.round(Bo(t.rotation)*o)+216e5)%216e5;s!==0&&(i.rot=String(s)),a.includes("x")!==n.h&&(i.flipH="1"),a.includes("y")!==n.v&&(i.flipV="1");let c={x:Po(e.x),y:Po(e.y)},l={cx:Po(e.w),cy:Po(e.h)},u=[K("off",c),K("ext",l)];return r&&u.push(K("chOff",c),K("chExt",l)),K("xfrm",i,u)}const Ps={h:!1,v:!1},Fs=T({top:"t",middle:"ctr",bottom:"b"});function Is(e,t){let n=P(e.shape,"textbox"),r=n?P(n,"txbxContent"):void 0,i={},a=Fo((n&&L(n,"inset"))??"",200).split(",",4),o=Y($o(e,"insetmode"))==="auto";["lIns","tIns","rIns","bIns"].forEach((e,n)=>{let r=o?void 0:Xo(a[n]?.trim(),t);i[e]=Po(q(r??(n%2==0?9.6:4.8),0,ko))});let[s,c]=Y(e.style["v-text-anchor"]).split("-",2);i.anchor=Fs[s??""]??"t",c==="center"&&(i.anchorCtr="1");let l=Ko(n),u=Y(l["layout-flow"]);u==="vertical"?i.vert=Y(l["mso-layout-flow-alt"])==="bottom-to-top"?"vert270":"vert":u==="vertical-ideographic"&&(i.vert="eaVert"),Y(e.style["mso-wrap-style"])==="none"&&(i.wrap="none");let d=K("bodyPr",i,Vo(Y(l["mso-fit-shape-to-text"]))===!0?[K("spAutoFit")]:[]);return r?[K("txbx",{},[r]),d]:[d]}function Ls(e,t){let n=P(e.shape,"textpath"),r=n?L(n,"string"):void 0;if(!n||r===void 0)return;let i=Ko(n),a=Y(i["font-weight"]),o=Vo(es(e,"fill","on","filled"))??!0,s=o?es(e,"fill","color","fillcolor"):es(e,"stroke","color","strokecolor"),c=Yo(s,s===void 0?o?"FFFFFF":"000000":"C0C0C0",t),l=bs(J(e,o?"fill":"stroke","opacity"));return K("textpath",{string:Fo(r,1e3),fontFamily:Fo(i["font-family"]??"",100).replace(/["']/g,"").trim(),bold:a==="bold"||a==="bolder"||Number(a)>=600?"1":"0",italic:Y(i["font-style"])==="italic"?"1":"0",color:c,opacity:String(Math.round(l*1e3)/1e3)})}function Rs(e){let t=e.shape.attrs.alt;return K("cNvPr",t?{id:"0",name:"",descr:Fo(t,1e3)}:{id:"0",name:""})}const zs=(e,t)=>K("spPr",{},[Ns(e,t,Ps),us("rect"),K("noFill"),K("ln",{},[K("noFill")])]),Bs=(e,t)=>K("wsp",{},[zs(e,t),K("bodyPr")]),Vs=[["cropleft","l"],["croptop","t"],["cropright","r"],["cropbottom","b"]];function Hs(e,t,n,r){let i=ns(t),a=[],o=q(zo(L(t,"gain"))??1,0,1e3),s=q(zo(L(t,"blacklevel"))??0,-.5,.5);if(o!==1||s!==0){let e=o<=1?o-1:1-1/o;a.push(K("lum",{bright:String(Math.round(s*2e5)),contrast:String(Math.round(e*1e5))}))}Vo(L(t,"grayscale"))===!0&&a.push(K("grayscl"));let c=[K("blip",i===void 0?{}:{"r:embed":i},a)],l={};for(let[e,n]of Vs){let r=zo(L(t,e));r!==void 0&&r!==0&&(l[n]=String(Math.round(q(r,-10,1)*1e5)))}return Object.keys(l).length>0&&c.push(K("srcRect",l)),c.push(K("stretch",{},[K("fillRect")])),K("pic",{},[K("nvPicPr",{},[Rs(e),K("cNvPicPr")]),K("blipFill",{},c),K("spPr",{},[Ns(n,e.style,Ps),us("rect"),js(e,r,!1)])])}const Us=(e,t)=>t.group?e:{...e,x:0,y:0};function Ws(e){let t=e.name==="image"?e:P(e,"imagedata");return t!==void 0&&!ns(t)&&L(t,"src")===void 0}function Gs(e,t,n){let r=n.lost;if(!No()){let r=Ks(e,t,n);if(Mo(jo(r.node)))return r}return n.lost=r+1,{node:K("wsp"),box:ss(Ko(e),t),blank:!0}}function Ks(e,t,n){let r=Qo(e,n),i=ss(r.style,t),a=e.name==="image"?e:P(e,"imagedata");if(Ws(e))return{node:Bs(Us(i,t),r.style),box:i};if(a)return{node:Hs(r,a,Us(i,t),n),box:i};let o,s=Ps,c=!0;if(e.name==="rect")o=us("rect");else if(e.name==="oval")o=us("ellipse");else if(e.name==="roundrect"){let t=q(zo(L(e,"arcsize"))??.2,0,.5);o=us("roundRect",[["adj",t*1e5]])}else if(e.name==="line"){let n=Fo(L(e,"from")??"",80).split(",",2),r=Fo(L(e,"to")??"",80).split(",",2),[a,c]=cs(n[0],n[1],t),[l,u]=cs(r[0],r[1],t),d=i.x-t.x,f=i.y-t.y;i={x:is(Math.min(a,l)+d),y:is(Math.min(c,u)+f),w:Math.abs(l-a),h:Math.abs(u-c)},s={h:l<a,v:u<c},o=us("line")}else if(e.name==="polyline"){let e=ys(r,t);e&&(o=e.geom,i={...e.box,x:is(e.box.x+i.x-t.x),y:is(e.box.y+i.y-t.y)})}else{let e=Ls(r,n);if(e)return{box:i,node:K("wsp",{},[Rs(r),zs(Us(i,t),r.style),e,K("bodyPr")])};let a=fs(r);c=a!==75;let s=gs(r);o=(s?_s(r,n):void 0)??(a===void 0?void 0:ms(a,r,n,i))??(s?void 0:_s(r,n)),Vo(J(r,"extrusion","on"))===!0&&n.lost++}if(!o){if(n.lost++,e.name!=="shape")return{node:Bs(Us(i,t),r.style),box:i,blank:!0};o=us("rect")}return{box:i,node:K("wsp",{},[Rs(r),K("spPr",{},[Ns(Us(i,t),r.style,s),o,Ts(r,n,c),js(r,n,c),...Ms(r,n)]),...Is(r,n)])}}const qs=T({shape:!0,rect:!0,roundrect:!0,oval:!0,line:!0,polyline:!0,image:!0,arc:!0,curve:!0}),Js=e=>Y(Ko(e).visibility)==="hidden";function Ys(e,t){let n=e.attrs.id;n!==void 0&&t.types.byId.size<1e3&&t.types.byId.set(n,e)}function Xs(e,t,n,r){let i=Ko(e),a=ss(i,t),o=Us(a,t);if(n>=16||No())return r.lost++,{node:K("wsp"),box:a,blank:!0};let[s,c]=Ho(L(e,"coordsize"),1e3,1e3),[l,u]=Ho(L(e,"coordorigin"),0,0),d={group:!0,originX:l,originY:u,scaleX:s>0?o.w/s:0,scaleY:c>0?o.h/c:0,x:o.x,y:o.y},f=K("grpSpPr",{},[Ns(o,i,Ps,!0)]),p=[f];Mo(1+jo(f));for(let t of N(e))if(t.name==="shapetype")Ys(t,r);else if(t.name!=="group"&&!qs[t.name])continue;else No()?r.lost++:Js(t)||p.push((t.name==="group"?Xs(t,d,n+1,r):Gs(t,d,r)).node);return{node:K("wgp",{},p),box:a}}const Zs=T({left:"left",center:"center",right:"right"}),Qs=T({left:"left",center:"center",right:"right",inside:"inside",outside:"outside"}),$s=T({top:"top",center:"center",bottom:"bottom"}),ec=T({margin:"margin",page:"page",text:"text",char:"char","left-margin-area":"leftMargin","right-margin-area":"rightMargin","inner-margin-area":"insideMargin","outer-margin-area":"outsideMargin"}),tc=T({margin:"margin",page:"page",text:"text",line:"line","top-margin-area":"topMargin","bottom-margin-area":"bottomMargin","inner-margin-area":"topMargin","outer-margin-area":"bottomMargin"}),nc=T({none:"none",square:"square",tight:"tight",through:"through",topandbottom:"topAndBottom"});function rc(e,t){let n=Ko(e),r=P(e,"wrap"),i=Math.trunc(q(Lo(n["z-index"])?.value??0,-2e9,2e9)),a=(e,t)=>q(Ro(n["mso-wrap-distance-"+e])??t,0,200),o={inline:Y(n.position)!=="absolute",left:t.x,top:t.y,behind:i<0,z:i,wrap:nc[Y(r&&L(r,"type"))]??"none",gaps:[a("top",0),a("right",12),a("bottom",0),a("left",12)]},s=Qs[Y(n["mso-position-horizontal"])];s&&(o.hAlign=s);let c=$s[Y(n["mso-position-vertical"])];c&&(o.vAlign=c);let l=ec[Y(n["mso-position-horizontal-relative"])]??ec[Y(r&&L(r,"anchorx"))];l&&(o.hRelative=l);let u=tc[Y(n["mso-position-vertical-relative"])]??tc[Y(r&&L(r,"anchory"))];return u&&(o.vRelative=u),o}function ic(e,t=new Oo){try{return ac(e,t)}finally{Go()}}function ac(e,t){let n=[],r;for(let i of N(e)){let e={types:t,lost:0};if(i.name==="shapetype"){Ys(i,e);continue}if(i.name!=="group"&&!qs[i.name])continue;if(r){r.lost++;continue}if(Js(i))continue;let{node:a,box:o,blank:s}=i.name==="group"?Xs(i,rs,0,e):Gs(i,rs,e),c={width:o.w,height:o.h,place:rc(i,o),node:a,lost:e.lost};s&&(c.blank=!0),Ws(i)&&(c.room=!0),s&&No()&&(r=c);let l=i.attrs.alt;if(l&&(c.alt=Fo(l,1e3)),Vo(L(i,"hr"))===!0){let e=Lo(L(i,"hrpct"))?.value??0;(e>0||o.w===0)&&(c.rule=e>0?q(e/1e3,0,1):1);let t=Zs[Y(L(i,"hralign"))];t&&(c.ruleAlign=t)}n.push(c)}return n}const oc=4e3,sc=new Set(["cNvPr","cNvGrpSpPr","cNvFrPr","grpSpPr","bg","whole","extLst"]),cc=new Set(["wgp","grpSp","wpc"]),lc=e=>Math.max(0,Math.min(oc,e??0));function uc(e,t){G(1),e.push(t)}function dc(e){let t=t=>Math.max(0,Math.min(200,ki(L(e,t))??0));return[t("distT"),t("distR"),t("distB"),t("distL")]}const fc=T({page:"page",margin:"margin",column:"column",character:"column",leftMargin:"leftMargin",rightMargin:"rightMargin",insideMargin:"insideMargin",outsideMargin:"outsideMargin"}),pc=T({page:"page",margin:"margin",paragraph:"paragraph",line:"paragraph",topMargin:"topMargin",bottomMargin:"bottomMargin",insideMargin:"topMargin",outsideMargin:"bottomMargin"}),mc=T({left:"start",top:"start",center:"center",right:"end",bottom:"end",inside:"inside",outside:"outside"});function hc(e,t){let n=(e,t,n)=>{let r=mc[(e&&P(e,"align")?.text.trim())??""];return{from:i?n:t[(e&&L(e,"relativeFrom"))??""]??n,offset:ki(e&&(P(e,"posOffset")??I(e,"posOffset"))?.text.trim())??0,...r?{align:r}:{}}},r=ji(L(e,"simplePos"))?P(e,"simplePos"):void 0,i=t&&ji(L(e,"layoutInCell")),a=P(e,"wrapSquare")??P(e,"wrapTight")??P(e,"wrapThrough"),o=a&&L(a,"wrapText");return{kind:P(e,"wrapNone")?"layer":P(e,"wrapTopAndBottom")?"block":"float",h:r&&!i?{from:"page",offset:ki(L(r,"x"))??0}:n(P(e,"positionH"),fc,"column"),v:r&&!i?{from:"page",offset:ki(L(r,"y"))??0}:n(P(e,"positionV"),pc,"paragraph"),gaps:dc(e),...o==="left"||o==="right"?{textAt:o}:{},behind:ji(L(e,"behindDoc")),z:Math.max(0,Math.min(2e9,Math.trunc(V(L(e,"relativeHeight"))??0)))}}function gc(e,t,n=[]){return G(2),{name:e,attrs:Object.assign(Object.create(null),t),children:n,text:""}}const _c={x:0,y:0,kx:1,ky:1};function vc(e,t){let n=Ga(e,t.map);if(!n)return;let r=(e,t)=>Math.round(Math.max(t,Math.min(oc,e))*100)/100,i=t.x+n.x+n.w/2,a=t.y+n.y+n.h/2,o=n.rot??0;for(let e of t.turns??[]){let t=(i-e.cx)*(e.flipH?-1:1),n=(a-e.cy)*(e.flipV?-1:1),r=e.rot*Math.PI/180;i=e.cx+t*Math.cos(r)-n*Math.sin(r),a=e.cy+t*Math.sin(r)+n*Math.cos(r),o=(e.flipH===e.flipV?o:-o)+e.rot}return o=Math.round((o%360+360)%360*100)/100,{x:r((i-n.w/2)*t.kx,-4e3),y:r((a-n.h/2)*t.ky,-4e3),width:r(n.w*t.kx,0),height:r(n.h*t.ky,0),...o?{rotate:o}:{},...n.flipH?{flipH:!0}:{},...n.flipV?{flipV:!0}:{}}}function yc(e,t){let n=Ga(e,t.map),r=t.x+(n?.x??0),i=t.y+(n?.y??0),a=n&&(n.rot||n.flipH||n.flipV)?{cx:r+n.w/2,cy:i+n.h/2,rot:n.rot??0,flipH:n.flipH===!0,flipV:n.flipV===!0}:void 0;return{...t,...e?{map:Wa(e,t.map)}:{},...a?{turns:[a,...t.turns??[]]}:{},x:r,y:i}}function bc(e){let t=(t,n)=>Math.max(0,Math.min(400,ki(e&&L(e,t))??n));return[t("tIns",4.8),t("rIns",9.6),t("bIns",4.8),t("lIns",9.6)]}function xc(e,t){let n=e&&ye(e,{scheme:t.pkg.palette.scheme,map:T({bg1:"lt1",tx1:"dk1",bg2:"lt2",tx2:"dk2"})});return n?.startsWith("#")?n:void 0}function Sc(e){for(let t of N(e))if(t.name.startsWith("nv")&&t.name.endsWith("Pr"))return P(t,"cNvPr")}function Cc(e,t,n,r,i){if(i>16){I(e,"txbxContent")&&n.sink.add("text-nested-too-deep");return}let a=P(e,"cNvPr")??Sc(e);if(!(a&&ji(L(a,"hidden")))){if(e.name==="wsp"){let i=P(e,"spPr"),a=vc(i&&P(i,"xfrm"),t),o=P(e,"txbx"),s=o&&P(o,"txbxContent"),c=P(e,"bodyPr"),l=P(e,"textpath");if(P(e,"linkedTxbx")&&n.sink.add("layout-approximated","linked text box"),a&&l){let e=Sa(L(l,"fontFamily"),n.pkg.palette);uc(r,{kind:"words",box:a,text:(L(l,"string")??"").slice(0,200),...e?{font:e}:{},bold:ji(L(l,"bold")),italic:ji(L(l,"italic")),color:Mi(L(l,"color"))??"#c0c0c0",opacity:Math.max(.05,Math.min(1,V(L(l,"opacity"))??1))})}if(!a||!s)return;let u=c&&L(c,"anchor"),d=c&&L(c,"vert"),f=xc(i&&P(i,"solidFill"),n),p=P(e,"style"),m=i&&P(i,"prstGeom"),h=m&&!a.rotate?go(m,a.width,a.height).textRect:void 0;uc(r,{kind:"text",box:h?{...a,x:a.x+h[0],y:a.y+h[1],width:Math.max(0,a.width-h[0]-h[2]),height:Math.max(0,a.height-h[1]-h[3])}:a,blocks:n.box(s,xc(p&&P(p,"fontRef"),n)),insets:bc(c),...f?{ground:f}:{},anchor:u==="ctr"?"center":u==="b"?"bottom":"top",...d==="vert"||d==="eaVert"?{turned:"down"}:d==="vert270"?{turned:"up"}:{},...c&&L(c,"wrap")==="none"?{unbroken:!0}:{},...c&&P(c,"spAutoFit")?{fit:!0}:{}})}else if(e.name==="wgp"||e.name==="grpSp"){let a=P(e,"grpSpPr"),o=yc(a&&P(a,"xfrm"),t);for(let t of N(e))Cc(t,o,n,r,i+1)}else if(e.name==="wpc")for(let a of N(e))Cc(a,t,n,r,i+1);else e.name==="pict"&&n.sink.add("object-lost")}}function wc(e){let t=e&&P(e,"lum"),n=e=>Math.max(-1,Math.min(1,Ai(t&&L(t,e))??0));return{...t?{bright:n("bright"),contrast:n("contrast")}:{},...e&&P(e,"grayscl")?{gray:!0}:{}}}function Tc(e,t,n){let r=P(e,"blipFill"),i=r&&P(r,"blip"),a=i&&(L(i,"embed")??L(i,"link")),o=a===void 0?void 0:n.pkg.archive.relById(n.part,a),s=r&&P(r,"srcRect"),c={kind:"picture",box:t,path:o&&!o.external?o.target:void 0,...wc(i)};if(o?.external&&n.sink.add("picture-not-in-file"),s){let e=e=>Math.max(-1,Math.min(.99,Ai(L(s,e))??0)),t=[e("l"),e("t"),e("r"),e("b")];t.some(e=>e!==0)&&t[0]+t[2]<.99&&t[1]+t[3]<.99&&(c.crop=t)}return c}function Ec(e,t,n){let r=P(e,"spPr")??P(e,"grpSpPr"),i=r&&P(r,"xfrm"),a=i&&P(i,"off"),o=i&&P(i,"ext");if(a&&o?!V(L(a,"x"))&&!V(L(a,"y")):e.name!=="wsp")return e;let s=(e,t,n)=>({...e,children:t?N(e).map(e=>e===t?n:e):[n,...N(e)]}),c=e=>String(Math.round(e*9525)),l={...i??gc("xfrm",{}),children:[gc("off",{x:"0",y:"0"}),o??gc("ext",{cx:c(t),cy:c(n)}),...i?N(i).filter(e=>e!==a&&e!==o):[]]};return s(e,r,s(r??gc("spPr",{}),i,l))}function Dc(e,t,n=0){if(!cc.has(e.name)||n>16){let t=P(e,"txbx")??P(e,"textpath");return[{node:e,text:e.name==="wsp"&&t!==void 0}]}let r=[...sc].flatMap(t=>P(e,t)??[]),i=[],a=[],o=t=>{G(2+(r.length+a.length>>3)),i.push({node:{...e,children:[...r,...a]},text:t}),a=[]};for(let r of t.open(e))for(let e of sc.has(r.name)?[]:Dc(r,t,n+1))a.push(e.node),e.text&&o(!0);return(a.length>0||i.length===0)&&o(!1),i}function Oc(e,t,n,r,i){for(let a of Dc(e,n))uc(r,{kind:"shapes",tree:gc("spTree",{},[a.node]),...i?{natural:i}:{}}),Cc(a.node,t,n,r,0)}function kc(e,t,n,r){let i={x:0,y:0,width:t,height:n},a=[],o=!1;for(let s of r.open(e)){let c=Ec(s,t,n);switch(c.name){case"pic":{let e=P(c,"spPr"),o=vc(e&&P(e,"xfrm"),_c),s=e&&P(e,"prstGeom"),l=e&&P(e,"ln"),u=P(c,"blipFill"),d=u&&P(u,"blip"),f=(...e)=>e.some(e=>d!==void 0&&P(d,e)!==void 0);if(f("duotone","biLevel","clrChange")&&r.sink.add("layout-approximated","picture recoloring"),o&&e&&(l&&!P(l,"noFill")||(P(e,"effectLst")?.children.length??0)>0||s&&L(s,"prst")!=="rect"||f("alphaModFix"))){f("lum","grayscl")&&r.sink.add("layout-approximated","picture recoloring"),uc(a,{kind:"shapes",tree:gc("spTree",{},[c]),...wc(d),...o.width>1&&o.height>1&&(Math.abs(o.width-t)>1||Math.abs(o.height-n)>1)?{natural:{width:o.width,height:o.height}}:{}});break}uc(a,Tc(c,{...i,...o?.rotate?{rotate:o.rotate}:{},...o?.flipH?{flipH:!0}:{},...o?.flipV?{flipV:!0}:{}},r));break}case"wsp":case"wgp":case"wpc":case"lockedCanvas":{let e=P(c,"grpSpPr"),i=vc(e&&P(e,"xfrm"),_c),o=i&&i.width>1&&i.height>1&&t>0&&n>0&&(Math.abs(i.width-t)>1||Math.abs(i.height-n)>1);["bg","whole"].some(e=>P(c,e)?.children.length)&&r.sink.add("layout-approximated","canvas fill or outline"),Oc(c,{x:0,y:0,kx:o?t/i.width:1,ky:o?n/i.height:1},r,a,o?{width:i.width,height:i.height}:void 0);break}case"chart":case"relIds":{if(o){r.sink.add("object-unsupported",c.name);break}o=!0;let i={cx:String(Math.round(t*9525)),cy:String(Math.round(n*9525))};uc(a,{kind:"shapes",tree:gc("spTree",{},[gc("graphicFrame",{},[gc("xfrm",{},[gc("off",{x:"0",y:"0"}),gc("ext",i)]),gc("graphic",{},[e])])])});break}default:r.sink.add("object-unsupported",c.name),uc(a,{kind:"lost",what:"object",box:i})}}return a.length===0&&uc(a,{kind:"lost",what:"object",box:i}),a}function Ac(e){let t=N(e),n=t.length===1?t[0]:void 0;if(n?.name!=="pic"&&n?.name!=="wsp")return;let r=P(n,"spPr"),i=vc(r&&P(r,"xfrm"),_c);return i?.rotate&&i.width>1&&i.height>1?{width:lc(i.width),height:lc(i.height),rotate:i.rotate}:void 0}function jc(e,t){let n=[];for(let r of N(e)){if(r.name!=="inline"&&r.name!=="anchor")continue;let e=P(r,"extent"),i=lc(ki(e&&L(e,"cx"))),a=lc(ki(e&&L(e,"cy"))),o=P(r,"graphic"),s=o&&P(o,"graphicData"),c=P(r,"docPr");if(ji(L(r,"hidden"))||ji(c&&L(c,"hidden")))continue;let l=c&&(L(c,"descr")??L(c,"title")),u=s&&Ac(s),d=u??{width:i,height:a},f=s?kc(s,d.width,d.height,t):[];s||uc(f,{kind:"lost",what:"object",box:{x:0,y:0,width:i,height:a}});let p={width:i,height:a,part:t.part,place:r.name==="inline"?{kind:"inline"}:hc(r,t.inCell),...l?{alt:l.slice(0,500)}:{},parts:f};if(u){let e=(p.place.kind==="layer"?Math.round(u.rotate/90)*90:u.rotate)*Math.PI/180;p.width=lc(Math.abs(d.width*Math.cos(e))+Math.abs(d.height*Math.sin(e))),p.height=lc(Math.abs(d.width*Math.sin(e))+Math.abs(d.height*Math.cos(e)));let t=Math.round((p.width-d.width)*50)/100,n=Math.round((p.height-d.height)*50)/100;for(let e of f)e.kind==="shapes"?e.at={x:t,y:n}:e.kind!=="rule"&&(e.box={...e.box,x:e.box.x+t,y:e.box.y+n})}G(1),n.push(p)}return n}const Mc=new WeakSet,Nc=new WeakSet;function Pc(e){y(e.length),e.forEach((t,n)=>{let r=e[n+1];t.kind==="figure"&&r?.kind==="figure"&&Mc.has(t.figure)&&Nc.has(r.figure)&&!t.change&&!r.change&&(r.figure.parts=t.figure.parts.splice(0),t.figure.width=0,t.figure.height=0)});let t=e=>e.kind==="figure"&&(e.figure.place.kind==="float"||e.figure.place.kind==="block")&&e.figure.place.v.from==="paragraph"?e.figure.place.v.offset:void 0,n=e.flatMap((e,n)=>t(e)===void 0?[]:[n]);y(e.length+16*n.length);let r=n.map(t=>e[t]).sort((e,n)=>(t(e)??0)-(t(n)??0));n.forEach((t,n)=>{e[t]=r[n]})}function Fc(e){let t=e.place;return t.inline?{kind:"inline"}:{kind:t.wrap==="none"?"layer":t.wrap==="topAndBottom"?"block":"float",h:{from:fc[t.hRelative??""]??"column",offset:t.left,...t.hAlign?{align:mc[t.hAlign]}:{}},v:{from:pc[t.vRelative??""]??"paragraph",offset:t.top,...t.vAlign?{align:mc[t.vAlign]}:{}},gaps:t.gaps,behind:t.behind,z:Math.max(0,t.z)}}function Ic(e,t){let n=[];for(let r of N(e))if(r.name==="drawing")for(let e of jc(r,t))n.push(e);for(let r of ic(e,t.vmlTypes)){let e=lc(r.width),i=lc(r.height);r.lost>0&&t.sink.add("vml-approximated",void 0,r.lost);let a=[];if(r.blank)uc(a,{kind:"lost",what:"object",box:{x:0,y:0,width:e,height:i}});else if(r.rule!==void 0){let e=I(r.node,"srgbClr");uc(a,{kind:"rule",share:Math.max(.01,Math.min(1,r.rule)),align:r.ruleAlign??"left",color:Mi(e&&L(e,"val"))??"#a0a0a0"})}else if(r.node.name==="pic"){let n=P(r.node,"spPr"),o=vc(n&&P(n,"xfrm"),_c);uc(a,Tc(r.node,{x:0,y:0,width:e,height:i,...o?.rotate?{rotate:o.rotate}:{}},t))}else P(r.node,"textpath")?Cc(r.node,_c,t,a,0):Oc(r.node,_c,t,a);a.length===0&&uc(a,{kind:"lost",what:"object",box:{x:0,y:0,width:e,height:i}}),G(1);let o={width:e,height:i,part:t.part,place:Fc(r),...r.alt?{alt:r.alt.slice(0,500)}:{},parts:a};n.push(o);let{inline:s,hRelative:c,vRelative:l}=r.place;!s&&c==="char"&&l==="line"?Mc.add(o):r.room&&Nc.add(o)}if(n.length===0&&e.name==="object"){let r=lc((V(L(e,"dxaOrig"))??0)/15),i=lc((V(L(e,"dyaOrig"))??0)/15),a=[];uc(a,{kind:"lost",what:"object",box:{x:0,y:0,width:r,height:i}}),G(1),n.push({width:r,height:i,part:t.part,place:{kind:"inline"},parts:a})}return n}const Lc="I. A. 1. a) (1) (a) (i) (a) (i)",Rc=Array.from({length:9},(e,t)=>"1.".repeat(t+1)).join(" "),zc=T({numberdefault:"1) a) i) (1) (a) (i) 1. a. i.",outlinedefault:Lc,legaldefault:Rc,AUTONUM:"1. 1. 1. 1. 1. 1. 1. 1. 1.",AUTONUMOUT:Lc,AUTONUMLGL:Rc}),Bc=T({1:"decimal",a:"lowerLetter",i:"lowerRoman",A:"upperLetter",I:"upperRoman"});function Vc(e){return e.split(" ").map((e,t)=>{let n=e.match(/[1aiAI]/g)??[],r=t+1-n.length;return{start:1,format:Bc[n.at(-1)??"1"],text:e.replace(/[1aiAI]/g,()=>"%"+ ++r),suffix:"nothing",para:{},run:{},legal:!1,align:"left"}})}const Hc=1e6,Uc=e=>{let t=V(L(e,"ilvl"));return t!==void 0&&t>=0&&t<9?Math.trunc(t):void 0},Wc=(e,t)=>{let n=V(e);return n===void 0?t:Math.max(0,Math.min(Hc,Math.trunc(n)))};function Gc(e){let t=P(e,"numFmt")?void 0:P(e,"AlternateContent"),n=t&&P(t,"Choice"),r=n&&P(n,"numFmt"),i=/^(0{1,8})1,/.exec((r&&L(r,"format"))??"");if(i)return"zeros"+(i[1].length+1);let a=t?P(t,"Fallback"):e;return U(a&&P(a,"numFmt"))??"decimal"}function Kc(e,t){let n=U(P(e,"suff")),r=U(P(e,"lvlJc")),i=V(U(P(e,"lvlRestart"))),a={start:Wc(U(P(e,"start")),1),format:Gc(e),text:(U(P(e,"lvlText"))??"").slice(0,128),suffix:n==="space"||n==="nothing"?n:"tab",para:la(P(e,"pPr"),t),run:wa(P(e,"rPr"),t),legal:W(P(e,"isLgl"))??!1,align:r==="center"?"center":r==="right"||r==="end"?"right":"left"};i!==void 0&&(a.restart=Math.trunc(i));let o=U(P(e,"pStyle"));o!==void 0&&(a.style=o);let s=U(P(e,"lvlPicBulletId"));return s!==void 0&&(a.picture=s),a}var qc=class{abstracts=new Map;links=new Map;nums=new Map;counters=new Map;begun=new Set;abstractSource=new Map;numSource=new Map;pictures=new Map;picture(e){return this.pictures.get(e)}pal;styles;constructor(e,t,n){if(this.pal=t,this.styles=n,e)for(let t of N(e)){let e=t.name==="abstractNum"?L(t,"abstractNumId"):t.name==="num"?L(t,"numId"):t.name==="numPicBullet"?L(t,"numPicBulletId"):void 0,n=t.name==="abstractNum"?this.abstractSource:t.name==="num"?this.numSource:this.pictures;e!==void 0&&!n.has(e)&&n.set(e,t)}}abstractOf(e){let t=this.abstracts.get(e);if(t)return t;t=[];let n=this.abstractSource.get(e);if(n){for(let e of N(n)){let n=e.name==="lvl"?Uc(e):void 0;n!==void 0&&(t[n]=Kc(e,this.pal))}let r=U(P(n,"numStyleLink"));r!==void 0&&this.links.set(e,r)}return this.abstracts.set(e,t),t}numOf(e){if(this.nums.has(e))return this.nums.get(e);let t=this.numSource.get(e),n=t&&U(P(t,"abstractNumId")),r;if(t&&n!==void 0){r={abstract:n,overrides:new Map};for(let e of N(t)){let t=e.name==="lvlOverride"?Uc(e):void 0;if(t===void 0)continue;let n={},i=P(e,"startOverride"),a=P(e,"lvl");i&&(n.start=Wc(U(i),1)),a&&(n.level=Kc(a,this.pal)),r.overrides.set(t,n)}}return this.nums.set(e,r),r}resolved=new Map;resolve(e){return this.resolved.has(e)||this.resolved.set(e,this.follow(e)),this.resolved.get(e)}follow(e){let t=this.numOf(e),n=t;for(let e=0;n&&e<4;e++){this.abstractOf(n.abstract);let e=this.links.get(n.abstract),t=e===void 0?void 0:this.styles.get(e)?.para.numId,r=t===void 0?void 0:this.numOf(t);if(!r)break;n=r}if(!n||!t)return;let r=new Map(n.overrides);for(let[e,n]of t.overrides)r.set(e,{...r.get(e),...n});return{overrides:r,levels:this.abstractOf(n.abstract)}}names;byName=new Map;named(e){if(!this.names){this.names=new Map;for(let[e,t]of this.abstractSource){let n=U(P(t,"name"))?.toLowerCase();n!==void 0&&this.names.set(n,e)}}if(!this.byName.has(e)){let t=this.names.get(e),n=zc[e],r=t===void 0?n===void 0?void 0:Vc(n):this.abstractOf(t);this.byName.set(e,r&&{overrides:new Map,levels:r})}return this.byName.get(e)}level(e,t){let n=this.resolve(e);return n?n.overrides.get(t)?.level??n.levels[t]:void 0}levelOfStyle(e,t){let n=this.resolve(e);if(n){for(let e=0;e<9;e++)if((n.overrides.get(e)?.level??n.levels[e])?.style===t)return e}}next(e,t,n){let r=typeof e=="string"?e:void 0,i=typeof e=="string"?this.resolve(e):this.named(e.name);if(!i)return;let a=e=>i.overrides.get(e)?.level??i.levels[e],o=a(t);if(!o)return;let s=this.counters.get(i.levels);s||this.counters.set(i.levels,s=[]);let c=e=>i.overrides.get(e)?.start??a(e)?.start??1;if(r!==void 0&&!this.begun.has(r)){this.begun.add(r);for(let[e,t]of i.overrides)t.start!==void 0&&(s[e]=void 0)}for(let e=0;e<t;e++)s[e]??=c(e);let l=s[t];s[t]=n===void 0?l===void 0?c(t):Math.min(Hc,l+1):Math.min(Hc,n);for(let e=t+1;e<9;e++){let n=a(e)?.restart;(n===void 0||n!==0&&t<n)&&(s[e]=void 0)}if(o.run.hidden)return;if(o.format==="bullet")return{text:o.text,level:o,approximate:!1};let u=!1,d="",f=o.text;for(let e=0;e<f.length;e++){let n=f.charCodeAt(e+1)-48;if(f[e]!=="%"||!(n>=1&&n<=9)){d+=f[e];continue}e++,y(8);let r=n-1;if(r>t)continue;let i=o.legal&&r<t?"decimal":o.legal?Jc(o.format):a(r)?.format??"decimal",l=sl(s[r]??c(r),i);if(l===void 0&&(u=!0),d+=l??String(s[r]??c(r)),d.length>256)break}return y(d.length+1),d.length>256?{text:d.slice(0,256),level:o,approximate:!0}:{text:d,level:o,approximate:u}}};const Jc=e=>e==="decimalZero"?e:"decimal";function Yc(e){if(e<1)return String(e);if(e>3999)return;let t=[[1e3,"m"],[900,"cm"],[500,"d"],[400,"cd"],[100,"c"],[90,"xc"],[50,"l"],[40,"xl"],[10,"x"],[9,"ix"],[5,"v"],[4,"iv"],[1,"i"]],n="";for(let[r,i]of t)for(;e>=r;)n+=i,e-=r;return n}function Xc(e,t){if(e<1)return String(e);let n=t[(e-1)%t.length],r=Math.floor((e-1)/t.length)+1;return r>12?void 0:n.repeat(r)}const Zc=["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],Qc=["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"],$c=["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"];function el(e,t){if(e>999999)return;let n=[],r=e=>{e>=100&&(n.push(Zc[Math.floor(e/100)],"hundred"),e%=100),e>=20?n.push(Qc[Math.floor(e/10)]+(e%10?"-"+Zc[e%10]:"")):e>0&&n.push(Zc[e])};if(e===0&&n.push("zero"),e>=1e3&&(r(Math.floor(e/1e3)),n.push("thousand")),r(e%1e3),t){let e=n.pop(),t=e.lastIndexOf("-"),r=e.slice(t+1),i=Zc.indexOf(r),a=i>=0?$c[i]:r.endsWith("y")?r.slice(0,-1)+"ieth":r+"th";n.push(e.slice(0,t+1)+a)}let i=n.join(" ");return i.charAt(0).toUpperCase()+i.slice(1)}function tl(e){let t=e%100;return e+(t>=11&&t<=13?"th":["th","st","nd","rd"][e%10]??"th")}const nl="\u3007\u4E00\u4E8C\u4E09\u56DB\u4E94\u516D\u4E03\u516B\u4E5D",rl="\uC601\uC77C\uC774\uC0BC\uC0AC\uC624\uC721\uCE60\uD314\uAD6C";function il(e,t=nl,n=["","\u5341","\u767E","\u5343"],r="\u3007"){if(e===0)return t[0];if(e>9999)return;let i="",a=String(e),o=!1;for(let e=0;e<a.length;e++){let s=Number(a[e]),c=n[a.length-1-e];if(s===0){o=!0;continue}o&&i&&(i+=r),o=!1,i+=(s===1&&c===n[1]&&!i?"":t[s])+c}return i}const al=(e,t)=>Array.from(String(e)).map(e=>String.fromCodePoint(t+Number(e))).join("");function ol(e){if(e<1||e>999)return String(e);let t=["","\u05E7","\u05E8","\u05E9","\u05EA","\u05EA\u05E7","\u05EA\u05E8","\u05EA\u05E9","\u05EA\u05EA","\u05EA\u05EA\u05E7"][Math.floor(e/100)],n=e%100;if(n===15)return t+"\u05D8\u05D5";if(n===16)return t+"\u05D8\u05D6";let r=["","\u05D9","\u05DB","\u05DC","\u05DE","\u05E0","\u05E1","\u05E2","\u05E4","\u05E6"][Math.floor(n/10)],i=["","\u05D0","\u05D1","\u05D2","\u05D3","\u05D4","\u05D5","\u05D6","\u05D7","\u05D8"][n%10];return t+r+i}function sl(e,t){if(!Number.isSafeInteger(e)||e<0)return String(Math.trunc(e));switch(t){case"decimal":return String(e);case"none":return"";case"lowerRoman":return Yc(e);case"upperRoman":return Yc(e)?.toUpperCase();case"lowerLetter":return Xc(e,"abcdefghijklmnopqrstuvwxyz");case"upperLetter":return Xc(e,"ABCDEFGHIJKLMNOPQRSTUVWXYZ");case"decimalZero":return e<10?"0"+e:String(e);case"ordinal":return tl(e);case"cardinalText":return el(e,!1);case"ordinalText":return el(e,!0);case"hex":return e.toString(16).toUpperCase();case"chicago":return Xc(e,"*\u2020\u2021\u00A7");case"numberInDash":return"- "+e+" -";case"decimalFullWidth":case"decimalFullWidth2":return al(e,65296);case"decimalHalfWidth":return String(e);case"decimalEnclosedCircle":case"decimalEnclosedCircleChinese":return e>=1&&e<=20?String.fromCodePoint(9312+e-1):String(e);case"decimalEnclosedFullstop":return e>=1&&e<=20?String.fromCodePoint(9352+e-1):e+".";case"decimalEnclosedParen":return e>=1&&e<=20?String.fromCodePoint(9332+e-1):"("+e+")";case"ideographDigital":case"japaneseDigitalTenThousand":return Array.from(String(e)).map(e=>nl[Number(e)]).join("");case"japaneseCounting":return e<100?il(e):void 0;case"chineseCounting":case"chineseCountingThousand":case"taiwaneseCounting":case"taiwaneseCountingThousand":return il(e);case"koreanCounting":return il(e,rl,["","\uC2ED","\uBC31","\uCC9C"],"");case"koreanDigital":case"koreanDigital2":return Array.from(String(e)).map(e=>rl[Number(e)]).join("");case"ideographEnclosedCircle":return e>=1&&e<=10?String.fromCodePoint(12928+e-1):String(e);case"ideographTraditional":return Xc(e,"\u7532\u4E59\u4E19\u4E01\u620A\u5DF1\u5E9A\u8F9B\u58EC\u7678");case"ideographZodiac":return Xc(e,"\u5B50\u4E11\u5BC5\u536F\u8FB0\u5DF3\u5348\u672A\u7533\u9149\u620C\u4EA5");case"aiueoFullWidth":return Xc(e,"\u30A2\u30A4\u30A6\u30A8\u30AA\u30AB\u30AD\u30AF\u30B1\u30B3\u30B5\u30B7\u30B9\u30BB\u30BD\u30BF\u30C1\u30C4\u30C6\u30C8\u30CA\u30CB\u30CC\u30CD\u30CE\u30CF\u30D2\u30D5\u30D8\u30DB\u30DE\u30DF\u30E0\u30E1\u30E2\u30E4\u30E6\u30E8\u30E9\u30EA\u30EB\u30EC\u30ED\u30EF\u30F2\u30F3");case"irohaFullWidth":return Xc(e,"\u30A4\u30ED\u30CF\u30CB\u30DB\u30D8\u30C8\u30C1\u30EA\u30CC\u30EB\u30F2\u30EF\u30AB\u30E8\u30BF\u30EC\u30BD\u30C4\u30CD\u30CA\u30E9\u30E0\u30A6\u30F0\u30CE\u30AA\u30AF\u30E4\u30DE\u30B1\u30D5\u30B3\u30A8\u30C6\u30A2\u30B5\u30AD\u30E6\u30E1\u30DF\u30B7\u30F1\u30D2\u30E2\u30BB\u30B9");case"ganada":return Xc(e,"\uAC00\uB098\uB2E4\uB77C\uB9C8\uBC14\uC0AC\uC544\uC790\uCC28\uCE74\uD0C0\uD30C\uD558");case"chosung":return Xc(e,"\u3131\u3134\u3137\u3139\u3141\u3142\u3145\u3147\u3148\u314A\u314B\u314C\u314D\u314E");case"russianLower":return Xc(e,"\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044B\u044D\u044E\u044F");case"russianUpper":return Xc(e,"\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042B\u042D\u042E\u042F");case"hebrew1":return ol(e);case"hebrew2":return Xc(e,"\u05D0\u05D1\u05D2\u05D3\u05D4\u05D5\u05D6\u05D7\u05D8\u05D9\u05DB\u05DC\u05DE\u05E0\u05E1\u05E2\u05E4\u05E6\u05E7\u05E8\u05E9\u05EA");case"arabicAlpha":return Xc(e,"\u0623\u0628\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064A");case"arabicAbjad":return Xc(e,"\u0623\u0628\u062C\u062F\u0647\u0648\u0632\u062D\u0637\u064A\u0643\u0644\u0645\u0646\u0633\u0639\u0641\u0635\u0642\u0631\u0634\u062A\u062B\u062E\u0630\u0636\u0638\u063A");case"hindiNumbers":return al(e,2406);case"thaiNumbers":return al(e,3664);case"thaiLetters":return Xc(e,"\u0E01\u0E02\u0E04\u0E07\u0E08\u0E09\u0E0A\u0E0B\u0E0C\u0E0D\u0E0E\u0E0F\u0E10\u0E11\u0E12\u0E13\u0E14\u0E15\u0E16\u0E17\u0E18\u0E19\u0E1A\u0E1B\u0E1C\u0E1D\u0E1E\u0E1F\u0E20\u0E21\u0E22\u0E23\u0E25\u0E27\u0E28\u0E29\u0E2A\u0E2B\u0E2C\u0E2D\u0E2E");default:{let n=/^zeros([2-9])$/.exec(t);return n?String(e).padStart(Number(n[1]),"0"):void 0}}}const cl=T({a:T({al:"",ac:"",ar:"",co:"n",vs:"n",hs:"n"}),b:T({lc:"c",rc:"c",bc:"c"}),d:T({fo:"n",ba:"n",li:""}),f:T({}),i:T({su:"",pr:"",in:"",fc:"c",vc:"c"}),l:T({}),o:T({al:"",ac:"",ar:"",ad:""}),r:T({}),s:T({ai:"n",up:"n",di:"n",do:"n"}),x:T({to:"",bo:"",le:"",ri:""})}),ll=/\\(!|[*#@]\s*("[^"]*"|[^\s\\]*))\s*/y;var ul=class{at=0;code;shown;looks;comma;guessed;failed=!1;constructor(e,t,n){this.code=e.code,this.shown=e.shown,this.looks=e.looks,this.comma=t,this.guessed=n}stretch(e,t,n,r){for(let i=e;e<this.at;e=i){let a=this.looks[e];for(;i<this.at&&this.looks[i]===a;)i++;let o=this.shown.slice(e,i);if(this.failed||=a==="p"&&!r,a!=="^"&&a!=="_"){t+=o;continue}t!==""&&n.push(t),t="",n.push({op:a,options:new Map,elements:[[o]]})}return t}spaces(){for(;/\s/.test(this.code[this.at]??"");)this.at++}row(e,t=!1){let n=[],r="",i=this.at,a=0;for(;this.at<this.code.length&&!this.failed;this.at++){let o=this.code[this.at],s=this.code[this.at+1]??"";if(o==="("||o===")"&&a>0){a+=o==="("?1:-1;continue}if(e>0&&(o===")"||o===this.comma)){this.failed||=a>0;break}if(this.failed||=o===")"||o===","&&e>0&&this.guessed&&!/\d,\d/.test(this.code.slice(this.at-1,this.at+2)),o==="\\"){if(r=this.stretch(i,r,n,t),e===0&&/[*#@!]/.test(s))ll.lastIndex=this.at,this.at+=(ll.exec(this.code)?.[0].length??2)-1,r=r.trimEnd();else if(/[a-z]/i.test(s))r!==""&&n.push(r),r="",this.failed||=this.looks[this.at]!==" "&&!t,this.at++,n.push(this.coded(e+1,t));else{i=++this.at;continue}i=this.at+1}}return r=this.stretch(i,r,n,t),r!==""&&n.push(r),n}coded(e,t){let n=this.code[this.at++].toLowerCase(),r=cl[n],i={op:n,options:new Map,elements:[]};for(this.spaces();r&&this.code[this.at]==="\\";this.spaces()){let e=this.code.slice(this.at+1,this.at+3).toLowerCase(),t=r[e];this.at+=3;let n="";t==="n"?(this.spaces(),n=/^[1-9]\d?/.exec(this.code.slice(this.at,this.at+2))?.[0]??"",this.at+=n.length):t==="c"&&(n=String.fromCodePoint(this.shown.codePointAt(this.at+1)??32),this.failed||=this.code[this.at]!=="\\",this.at+=1+n.length),this.failed||=t===void 0,i.options.set(e,n)}if(!r||e>8||this.code[this.at]!=="(")return this.failed=!0,i;do this.at++,i.elements.push(this.row(e,t||n==="o"));while(this.code[this.at]===this.comma&&!this.failed);return this.failed||=this.code[this.at]!==")",i}};function X(e,t=[],n){return G(2),{name:e,attrs:n===void 0?{}:{val:n},children:t,text:""}}function dl(e){G(1+(e.length>>6));let t={name:"t",attrs:{},children:[],text:e};return X("r",[X("rPr",[X("nor")]),t])}const fl=T({"/":"\u0338","-":"\u0336",_:"\u0332","^":"\u0302","`":"\u0300","\u00B4":"\u0301","\u00A8":"\u0308","\u00AF":"\u0305","\u203E":"\u0305","\u25CB":"\u20DD","\u25EF":"\u20DD"});function pl(e){let t=/^(0|[1-9]\d?)$/.test(e)?Number(e):-1,n=t===0?9450:t>=1&&t<=20?9311:t>=21&&t<=35?12860:t>=36&&t<=50?12941:void 0;if(n!==void 0)return String.fromCodePoint(n+t);let r=e.length===1?e.charCodeAt(0):0;return r>=65&&r<=90?String.fromCodePoint(9398+r-65):r>=97&&r<=122?String.fromCodePoint(9424+r-97):void 0}const ml=e=>e?.length===1&&typeof e[0]=="string"?e[0].trim():void 0;function hl(e){if(typeof e!="object"||e.op!=="s"||e.elements.length!==1)return;let[t,n]=[e.options.get("up"),e.options.get("do")];if(t===void 0==(n===void 0))return;let r=Number(t||n||2);return{row:e.elements[0],by:t===void 0?-r:r}}const gl=e=>e?.length===1?hl(e[0]):void 0,_l=e=>e.elements.length!==2||e.options.has("al")||e.options.has("ar")?[]:e.elements;function vl(e){let[t,n]=_l(e).map(ml);if(t===void 0||n===void 0)return;let[r,i]=fl[t]===void 0?[fl[n],t]:[fl[t],n];if(r!==void 0)return(r==="\u20DD"?pl(i):void 0)??(Array.from(i).length===1?i+r:void 0)}const yl=T({"{":"}","[":"]","(":")","<":">"}),bl=(e,t)=>e.flatMap(e=>typeof e=="string"?[dl(e)]:Sl(e,t));function xl(e,t){return t.whole=!1,[X("eq",e.flat())]}function Sl(e,t){if(e.op==="o")return Cl(e,t);let n=e.elements.map(e=>bl(e,t)),r=n.length,i=t=>e.options.has(t),a=(e,t)=>X(e,n[t]??[]);switch(e.op+(r>3?"+":r)){case"f2":return[X("f",[a("num",0),a("den",1)])];case"r1":return[X("rad",[X("deg"),a("e",0)])];case"r2":return[X("rad",[a("deg",0),a("e",1)])];case"b1":{let t=e.options.get("bc"),n=i("lc")||i("rc")?"":void 0,r=t??e.options.get("lc")??n??"(",o=(t&&(yl[t]??t))??e.options.get("rc")??n??")";return[X("d",[X("dPr",[X("begChr",[],r),X("endChr",[],o)]),a("e",0)])]}case"x1":return[X("borderBox",[X("borderBoxPr",[["to","hideTop"],["bo","hideBot"],["le","hideLeft"],["ri","hideRight"]].filter(([t])=>e.options.size>0&&!i(t)).map(([,e])=>X(e))),a("e",0)])];case"i3":return[X("nary",[X("naryPr",[X("chr",[],e.options.get("fc")??e.options.get("vc")??(i("su")?"\u2211":i("pr")?"\u220F":"\u222B")),X("limLoc",[],i("in")?"subSup":"undOvr")]),a("sub",0),a("sup",1),a("e",2)])];case"s1":{let r=(hl(e)?.by??0)>0;return hl(e)?[X(r?"sSup":"sSub",[X("e"),a(r?"sup":"sub",0)])]:xl(n,t)}case"^1":return[X("sSup",[X("e"),a("sup",0)])];case"_1":return[X("sSub",[X("e"),a("sub",0)])];case"d1":if(i("li")||n[0]?.length!==0)break;return t.moved=!0,i("fo")?[dl(" ")]:[]}if(e.op==="l")return n.flatMap((e,n)=>[...n>0?[dl(t.comma)]:[],...e]);if(e.op!=="a"&&(e.op!=="s"||e.options.size>0))return xl(n,t);let o=Math.min(r,Number(e.options.get("co")||1)),s=i("al")||e.op==="s"?"left":i("ar")?"right":"center",c=X("mcPr",[X("count",[],String(o)),X("mcJc",[],s)]),l=[];for(let e=0;e<r;e+=o){let t=Array.from({length:o},(t,n)=>a("e",e+n));l.push(X("mr",t))}return[X("m",[X("mPr",[X("mcs",[X("mc",[c])])]),...l])]}function Cl(e,t){let n=vl(e);if(n!==void 0)return[dl(n)];let[r,i]=_l(e),[a,o]=[ml(r),ml(i)];if(a&&o&&(a==="\u25A1"||o==="\u25A1"))return[X("borderBox",[X("e",[dl(a==="\u25A1"?o:a)])])];let[s,c]=[gl(r),gl(i)],l=Math.abs((s?.by??0)-(c?.by??0))>=4;if(!r||!i||!l||s&&c&&s.by>0==c.by>0)return xl(e.elements.map(e=>bl(e,t)),t);let u=bl(s?.row??r,t),d=bl(c?.row??i,t);if(s&&c){let[e,t]=s.by>0?[u,d]:[d,u];return[X("sSubSup",[X("e"),X("sub",t),X("sup",e)])]}let[f,p,m]=s?[u,d,s.by]:[d,u,c?.by??0];return[X(m>0?"limUpp":"limLow",[X("e",p),X("lim",f)])]}function wl(e){let t=",";for(let n=0,r=0;n<e.length;n++){let i=e[n];n+=+(i==="\\"),r+=i==="("?1:i===")"?-1:0,t=i===";"&&r>0?";":t}return t}function Tl(e,t,n){y(e.code.length+1);let r=new ul(e,t,n),i=r.row(0);if(r.failed||i.length===0)return;let a=[];for(let e of i){let n=hl(e),r=typeof e=="object"&&(e.op==="^"||e.op==="_"),o=typeof e=="string"?e:e.op==="o"?vl(e):r?e.elements[0]?.[0]:n?.row.length===1&&typeof n.row[0]=="string"?n.row[0]:void 0;if(o===void 0){let e={comma:t,whole:!0,moved:!1};return{kind:"math",el:X("oMath",bl(i,e)),whole:e.whole,moved:e.moved}}a.push({text:o,raise:n?.by??0,...r?{vertical:e.op==="^"?"super":"sub"}:{}})}return{kind:"text",pieces:a}}function El(e,t){let n=e.code.length;if(n>1e3||e.shown.length!==n||e.looks.length!==n)return;let r=Math.max(0,e.code.search(/\S/)),i=e.code.trimEnd().length,a={code:e.code.slice(r,i),shown:e.shown.slice(r,i),looks:e.looks.slice(r,i)};if(t!==","&&t!==";")return Tl(a,wl(a.code),!0);let o=e=>e!==void 0&&(e.kind==="text"||e.whole),s=Tl(a,t,!1),c=o(s)?s:Tl(a,t===","?";":",",!1);return o(c)?c:s}const Dl=T({HYPERLINK:"lot",SEQ:"s",SYMBOL:"fs",TOC:"abcdflnopst",REF:"d",STYLEREF:"",PAGEREF:"",NOTEREF:"",PAGE:"",NUMPAGES:"",SECTIONPAGES:"",SECTION:"",MACROBUTTON:"",GOTOBUTTON:"",QUOTE:""});function Ol(e){let t=e.slice(0,1e3);y(t.length+1);let n=[],r=0;for(;r<t.length;){let e=t[r];if(e===" "||e==="	"||e===`
`||e==="\r"||e==="\u00A0")r++;else if(e==='"'){let e="";for(r++;r<t.length&&t[r]!=='"';)t[r]==="\\"&&r+1<t.length&&r++,e+=t[r],r++;r++,n.push('"'+e)}else{let e=r+1;for(;e<t.length&&!` 	
\r\u00A0"\\`.includes(t[e]);)e++;n.push(t.slice(r,e)),r=e}}let i=e=>e.startsWith('"')?e.slice(1):e,a={name:i(n[0]??"").toUpperCase(),args:[],switches:new Map},o="*#@"+(Dl[a.name]??"bflmnost");for(let e=1;e<n.length;e++){let t=n[e];if(t.startsWith("\\")&&t.length>=2){let r=t.slice(0,2).toLowerCase(),s="";if(t.length>2?s=t.slice(2):o.includes(r[1])&&e+1<n.length&&!n[e+1].startsWith("\\")?s=i(n[++e]):a.name==="SEQ"&&r==="\\r"&&/^\d{1,9}$/.test(n[e+1]??"")&&(s=n[++e]),r==="\\*"&&/^(merge|char)format$/i.test(s)&&a.switches.has(r)||r==="\\*"&&a.switches.has(r)&&!/^(merge|char)format$/i.test(a.switches.get(r)))continue;a.switches.set(r,s)}else a.args.push(i(t))}return a}const kl=T({arabic:"decimal",ordinal:"ordinal",cardtext:"cardinalText",ordtext:"ordinalText",hex:"hex",arabicdash:"numberInDash"});function Al(e){let t=e.switches.get("\\*")??"",n=t.toLowerCase(),r=t[0]!==n[0];return n==="roman"?r?"upperRoman":"lowerRoman":n==="alphabetic"?r?"upperLetter":"lowerLetter":kl[n]}function jl(e){let t=e.slice(0,200).replace(/\\[*#@]\s*\S+/g," ");y(t.length+1);let n=t.indexOf("="),r=[],i=1,a=!0;for(let e of t.slice(n+1).split(/\s+|(?=[+-])|(?<=[+-])/))if(e!==""){if(e==="+"||e==="-"){if(a&&r.length>0)return;i=e==="-"?-1:1,a=!0}else if(!a)return;else if(e==="PAGE"||e==="NUMPAGES"||e==="SECTIONPAGES")r.push({sign:i,field:e.slice(1)}),a=!1;else if(/^\d{1,6}$/.test(e))r.push({sign:i,value:Number(e)}),a=!1;else return}return a||r.length===0?void 0:r}const Ml=new Set(["smartTag","customXml","dir","bdo","sdtContent"]);function Nl(e){let t={kind:e.name==="ins"||e.name==="moveTo"?"ins":"del",moved:e.name==="moveFrom"||e.name==="moveTo"},n=L(e,"author"),r=L(e,"date");return n&&(t.author=n.slice(0,80)),r&&/^\d{4}-\d{2}-\d{2}/.test(r.slice(0,10))&&(t.date=r.slice(0,10)),t}const Pl=(e,t)=>(e?"deleted":"live")+(t.hidden?" hidden":"");function Fl(e){return y(e.length>>4),/^\s*"?EQ\b/i.test(e)}const Il=new Set(["","XE","TC","TA","RD","SET","ASK","PRIVATE","ADDIN","BIDIOUTLINE","NEXT","NEXTIF","SKIPIF"]),Ll=new Set(["XE","TC","TA","RD","SET","ASK"]),Rl=e=>e.switches.has("\\#")||Al(e)===void 0&&!/^((merge|char)format|upper|lower|caps|firstcap)?$/i.test(e.switches.get("\\*")??""),zl=new Set(["MACROBUTTON","GOTOBUTTON","QUOTE"]),Bl=new Set(["PAGE","NUMPAGES","SECTIONPAGES","SECTION","STYLEREF"]);var Vl=class{r;constructor(e){this.r=e}unclosed=new Set;markUnclosed(e){let t=[],n=[e];for(let e=n.pop();e;e=n.pop()){let r=this.r.open(e);for(let e=r.length-1;e>=0;e--){let t=r[e];(t.name==="fldChar"||t.name!=="txbxContent"&&t.children.length>0)&&n.push(t)}if(e.name!=="fldChar")continue;let i=L(e,"fldCharType");i==="begin"?t.push(e):i==="end"&&t.pop()}for(let e of t)this.unclosed.add(e);t.length>0&&this.r.sink.add("field-unclosed",void 0,t.length)}mixed=new WeakSet;shownAs=new WeakMap;state=new WeakMap;get instructed(){let e=this.r.story,t=e.fields[e.fields.length-1];return t?.phase==="instruction"&&e.overflow===0?t:void 0}instructionText(e,t,n,r){let i=this.instructed;if(!i||i.instruction.length>=1e3){this.passedOver();return}let a=e.name==="delInstrText"||n.change?.kind==="del",o=Pl(a,t);(this.state.get(i)??o)!==o&&this.mixed.add(i),this.state.set(i,o);let s=e.text.slice(0,2e3).replaceAll("","");if(s==="")return;let c=t.vertical==="super"?"^":t.vertical==="sub"?"_":t.position?"p":" ",l=this.shownAs.get(i);(l||(r||c!==" ")&&Fl(i.instruction+s))&&this.shownAs.set(i,{shown:(l?.shown??i.instruction)+(r?this.r.symbols(s,r):s),looks:(l?.looks??" ".repeat(i.instruction.length))+c.repeat(s.length)}),i.instruction+=s}passedOver(e,t={},n={}){let r=this.instructed;if(!r||e?.name==="rPr")return;let i=e?.name==="sym"?Qi(L(e,"font")):void 0,a=(e&&L(e,"char"))??"";if(i&&/^([0-9a-f]{2})?[2-9a-f][0-9a-f]$/i.test(a)&&Fl(r.instruction)){let e=parseInt(a,16),r={name:"instrText",attrs:{},children:[],text:String.fromCharCode(e<256?e+61440:e)};this.instructionText(r,t,n,i)}else this.mixed.add(r)}settle(){let e=this.r.story;e.shown=e.fields.every(e=>e.phase==="result"&&!e.hide),e.link=void 0;for(let t of e.fields)t.link&&(e.link=t.link);e.contents=e.fields.some(e=>e.contents===!0)}fieldChar(e,t,n){let r=this.r.story,i=L(e,"fldCharType");if(i==="begin"){if(this.unclosed.has(e))return;if(r.fields.length>=32){this.passedOver(),r.overflow++;return}let t={instruction:"",phase:"instruction",hide:!1},n=P(e,"ffData");n&&(t.form=n),r.fields.push(t)}else if(r.overflow>0){i==="end"&&r.overflow--;return}else if(i==="separate"){let e=r.fields[r.fields.length-1];if(!e||e.phase==="result")return;e.phase="result",this.settle(),this.fieldBegins(e,t,n,!0)}else if(i==="end"){let e=r.fields.pop();this.settle(),e?.phase==="instruction"&&this.fieldBegins(e,t,n,!1),e&&this.fieldEnds(e)}this.settle()}fieldEnds(e){e.name===void 0||e.pushesBefore!==this.r.pushes||!this.r.story.shown||(e.unbuilt?(this.unbuilt.push(e.unbuilt),this.awaited.add(e.unbuilt.after)):e.ifEmpty?(this.spare.delete(e.ifEmpty),this.r.push(e.ifEmpty)):(!e.workedOut||e.hide)&&this.r.sink.add("field-without-result",e.name))}simpleField(e,t){let n=this.r.story;if(!this.r.current)return;if(n.fields.length>=32){this.r.inline(e,t);return}let r={instruction:(L(e,"instr")??"").replaceAll("",""),phase:"result",hide:!1};n.fields.push(r),this.settle();let i=P(e,"r");this.fieldBegins(r,i?this.r.runPropsOf(i):this.r.current.base,t,e.children.length>0),this.settle(),this.r.inline(e,t),n.fields.pop(),this.settle(),this.fieldEnds(r)}fieldBegins(e,t,n,r){let i=Ol(e.instruction),a=this.r.story.fields,o=a[a.length-1]===e?a[a.length-2]:a[a.length-1];if(o?.phase==="instruction"&&(Bl.has(i.name)||e.instruction.includes(""))&&o.instruction.length<1e3&&(o.instruction+=" "+i.name+" "),o?.phase==="instruction"&&this.mixed.add(o),!this.r.story.shown)return;let s=()=>this.r.mark(t,n),c=t.hidden===!0,l=Pl(n.change?.kind==="del",t);(this.state.get(e)??l)!==l&&this.mixed.add(e),Ll.has(i.name)&&(e.hide=!0),!c&&!Il.has(i.name)&&(e.name=i.name.slice(0,32)),e.pushesBefore=this.r.pushes,e.workedOut=r;let u=zl.has(i.name)&&this.mixed.has(e)?"":i.name;switch(u){case"PAGE":case"NUMPAGES":case"SECTIONPAGES":{let t=Al(i),n={kind:"pageField",field:u,...t?{format:t}:{},...s()};if(r&&!this.r.inMargin){c||(e.ifEmpty=n);break}e.hide=!0,c||this.r.push(n);break}case"=":{if(!e.instruction.includes("")||r&&!this.r.inMargin)break;e.hide=!0;let t=jl(e.instruction);if(c)break;t?this.r.push({kind:"pageField",field:"PAGE",terms:t,...s()}):this.notWorkedOut(e,i.name,s());break}case"SEQ":{if(i.args[1]!==void 0)break;let t=(i.args[0]??"").slice(0,64).toLowerCase(),n=V(i.switches.get("\\r")),a=this.sequences.get(t)??0,o=n===void 0?i.switches.has("\\c")?a:a+1:Math.max(0,Math.min(1e6,Math.trunc(n)));this.sequences.set(t,o);let l=r&&(i.switches.has("\\s")||Rl(i));if(e.hide=!l,i.switches.has("\\h")&&(e.name=void 0),i.switches.has("\\h")||c)break;let u={kind:"text",text:sl(o,Al(i)??"decimal")??String(o),...s()};if(l){e.ifEmpty=u;break}Rl(i)&&this.r.sink.add("number-format-approximated"),this.r.push(u);break}case"AUTONUM":case"AUTONUMLGL":case"AUTONUMOUT":{e.workedOut=!1;let t=c?void 0:this.autoNumber(i);if(t===void 0)break;let n={kind:"text",text:t,...s()};if(r){e.ifEmpty=n;break}Rl(i)&&this.r.sink.add("number-format-approximated"),this.r.push(n);break}case"EQ":{e.workedOut=!1;let n=/^\s*"?EQ"?/i.exec(e.instruction)?.[0].length??0,i=this.shownAs.get(e),a=this.r.pkg.xmlOf("settings"),o=this.mixed.has(e)?void 0:El({code:e.instruction.slice(n),shown:(i?.shown??e.instruction).slice(n),looks:(i?.looks??" ".repeat(e.instruction.length)).slice(n)},U(a&&P(a,"listSeparator")));if(!o||c)break;if(o.kind==="math"){let t={kind:"math",el:o.el,display:!1,full:!0,...s()};if(!o.whole&&r){e.ifEmpty=t;break}e.hide=!0,o.moved&&this.r.sink.add("layout-approximated","a shift sideways in an EQ field"),this.r.push(t);break}e.hide=!0;let l=new Map;for(let{text:e,raise:n,vertical:r}of o.pieces){let i=r??String(n),a=n||r?l.get(i):t;if(!a){let e=(t.position??0)+n*96/72;a=ua(t,r?{vertical:r}:{position:e}),l.set(i,a)}this.r.push({kind:"text",text:e,...s(),props:a})}break}case"LISTNUM":{if(e.workedOut=!1,c||this.r.story.kind!=="body"||!this.r.current)break;let t={kind:"text",text:"",...s()};r?(e.ifEmpty=t,this.spare.add(t)):this.r.push(t),this.waiting.push({story:this.r.story,para:this.r.current.props,instr:i,into:t});break}case"STYLEREF":{let t=i.args[0];if(!this.r.inMargin||t===void 0)break;if(["\\w","\\r","\\p"].some(e=>i.switches.has(e))){e.hide=!0,c||this.notWorkedOut(e,i.name,s());break}let n=/^[1-9]$/.test(t)?Number(t):void 0,r=n===void 0?this.r.styles.idOf(t):void 0;if(!this.r.styledTop.has(n??r??""))break;e.hide=!0;let a=i.switches.has("\\n"),o=i.switches.has("\\l");c||this.r.push({kind:"styleRef",number:a,last:o,...n===void 0?{}:{heading:n},...r===void 0?{}:{style:r},...s()});break}case"HYPERLINK":{let t=i.switches.get("\\l");e.link=t?{to:this.r.bookmarkId(t,!1)}:i.args[0]?{outside:i.args[0].slice(0,500)}:{};break}case"REF":case"PAGEREF":case"NOTEREF":i.switches.has("\\h")&&i.args[0]&&(e.link={to:this.r.bookmarkId(i.args[0],!1)});break;case"FORMCHECKBOX":{let t=e.form&&P(e.form,"checkBox"),n=t&&(P(t,"checked")??P(t,"default"));e.hide=!0,c||this.r.push({kind:"text",text:W(n)?"\u2612":"\u2610",...s()});break}case"FORMDROPDOWN":{let t=e.form&&P(e.form,"ddList"),n=t?N(t).filter(e=>e.name==="listEntry"):[],r=Math.trunc(V(U(t&&(P(t,"result")??P(t,"default"))))??0);e.hide=!0;let i=U(n[r]??n[0]);i&&!c&&this.r.push({kind:"text",text:i.slice(0,256),...s()});break}case"SYMBOL":{let t=V(i.args[0]),n=Qi(i.switches.get("\\f"));if(e.hide=!0,t!==void 0&&t>=32&&t<=65535&&!c){let e=String.fromCharCode(Math.trunc(t));this.r.push({kind:"text",text:n?this.r.symbols(e,n):e,...s()})}break}case"TOC":{e.contents=!0;let t=e=>i.switches.has("\\"+e);if(!(!t("c")&&!t("a")&&!t("f")&&!t("b")&&(t("o")||t("u")||!t("t")))||this.r.story.kind!=="body"||!this.r.current)break;let n=/^(\d)-(\d)$/.exec(i.switches.get("\\o")??"");e.unbuilt={list:this.r.out,after:this.r.current,from:Number(n?.[1]??1),to:Number(n?.[2]??9)};break}case"MACROBUTTON":case"GOTOBUTTON":{let e=i.args.slice(1).join(" ");e&&!c&&!r&&this.r.push({kind:"text",text:e,...s()});break}case"QUOTE":i.args[0]&&!c&&!r&&this.r.push({kind:"text",text:i.args.join(" "),...s()});break;case"SECTION":if(!this.r.inMargin)break;e.hide=!0,this.r.sink.add("page-number-unknown"),c||this.r.push({kind:"text",text:"\u2013",...s()});break;default:e.instruction.includes("")&&!(r&&!this.r.inMargin)&&(e.hide=!0,c||this.notWorkedOut(e,i.name,s()))}}notWorkedOut(e,t,n){e.name=void 0,this.r.sink.add("field-without-result",t.slice(0,32)),this.r.push({kind:"text",text:"\u2013",...n})}auto={known:!0,level:-1};autoNumber(e){let t=this.r.current;if(this.r.story.kind!=="body"||!t)return;let n=this.auto,r=t.props.outline??9,i=r<9?r:0;n.known&&=t.props!==n.last&&(n.name??e.name)===e.name&&(n.headings??r<9)===r<9&&i<=n.level+1,n.last=t.props,n.name=e.name,n.headings=r<9,n.level=i;let a=n.known?this.r.numbering.next({name:e.name},i):void 0;if(!a||e.name==="AUTONUMOUT")return a?.text;let o=String.fromCodePoint(e.switches.get("\\s")?.codePointAt(0)??46),s=e.name==="AUTONUMLGL"&&e.switches.has("\\e"),c=Al(e)??"decimal";return a.text.split(".").slice(0,-1).map(e=>sl(Number(e),c)??e).join(o)+(s?"":o)}waiting=[];spare=new WeakSet;lists=new Map;listNumbers(e,t,n){let r=this.auto;this.r.story.kind==="body"&&r.headings&&(e.outline??9)<r.level&&(r.known=!1);let i=this.waiting.length;for(;i>0&&this.waiting[i-1]?.story===this.r.story;)i--;let a=!0;for(let{para:r,instr:o,into:s}of this.waiting.splice(i)){if(r!==e)continue;let i=(e.outline??9)<9,c=o.args[0]===void 0&&t!==void 0,l=(o.args[0]??"NumberDefault").toLowerCase(),u=c?void 0:this.lists.get(l),d=a?c?n+1:t===void 0&&!i&&u===void 0?0:void 0:void 0;a=!1;let f=o.switches.get("\\l");f!==void 0&&(d=/^[1-9]$/.test(f)?Number(f)-1:void 0);let p=o.switches.get("\\s");(u==="lost"||p!==void 0&&!/^\d{1,9}$/.test(p))&&(d=void 0),!c&&d!==0&&this.lists.set(l,d===void 0?"lost":"deep");let m=d===void 0?void 0:this.r.numbering.next(c?t:{name:l},d,p===void 0?void 0:Number(p));m?.approximate&&this.r.sink.add("number-format-approximated",m.level.format),m&&m.level.format!=="bullet"&&!Qi(m.level.run.ascii)&&m.text.length<=32?s.text=m.text:this.spare.has(s)||this.r.sink.add("field-without-result","LISTNUM")}}unbuilt=[];awaited=new Set;sequences=new Map},Hl=class{r;settings;constructor(e,t){this.r=e,this.settings=t.settings,this.notes={footnote:{parts:t.byId("footnotes","footnote"),read:new Map,count:0,settings:t.settings.footnotes,path:t.partOf("footnotes")},endnote:{parts:t.byId("endnotes","endnote"),read:new Map,count:0,settings:t.settings.endnotes,path:t.partOf("endnotes")}},this.comments={parts:t.byId("comments","comment"),read:new Map,path:t.partOf("comments")}}notes;comments;endnotes=[];begins(e,t=!0){for(let n of["footnote","endnote"]){let r=this.notes[n];e&&(r.settings=e[`${n}s`]??this.settings[`${n}s`]),(e&&r.settings.restart==="eachSect"||t&&n==="footnote"&&r.settings.restart==="eachPage")&&(r.count=0)}}sectionEnds(e,t){if(!(!this.settings.endnotesBySection||e.noEndnotes)){for(let e of this.endnotes)t.endnotes.push(e);this.endnotes=[]}}noteReference(e,t,n){let r=this.notes[e],i=L(t,"id"),a=i===void 0?void 0:r.parts.get(i);if(!a||i===void 0||r.path===void 0)return;if(this.r.story.kind==="note"||this.r.inMargin){this.r.sink.add("note-left-out");return}let o=L(a,"type");if(o!==void 0&&o!=="normal")return;let s=r.read.get(i);if(!s){s=this.r.inStory(r.path,"note",a);let e=s[0];e?.kind==="p"&&!s.some(e=>e.kind==="p"&&e.inlines.some(e=>e.kind==="noteMark"))&&e.inlines.unshift({kind:"noteMark",props:{...e.base,vertical:"super"}},{kind:"text",text:" ",props:e.base}),r.read.set(i,s)}let c=ji(L(t,"customMarkFollows")),l="";if(!c){let t=r.settings.start+r.count++,n=r.settings.format??(e==="footnote"?"decimal":"lowerRoman");l=this.numbered(t,n)}G(1);let u=(e==="footnote"?"f":"e")+this.noteSerial++,d={label:l,id:u,blocks:s};if((e==="footnote"?this.r.pager.page.footnotes:this.endnotes).push(d),!c){let e={kind:"noteRef",label:l,to:u,...n,...n.props.vertical===void 0?{props:{...n.props,vertical:"super"}}:{}};this.noteMarks.set(d,e),this.r.push(e)}}noteSerial=0;numbered(e,t){let n=sl(e,t);return n===void 0&&this.r.sink.add("number-format-approximated"),n??String(e)}noteMarks=new WeakMap;commentReference(e,t){let n=L(e,"id"),r=n===void 0?void 0:this.comments.parts.get(n);if(!r||n===void 0||this.comments.path===void 0)return;if(this.r.inMargin){this.r.sink.add("note-left-out");return}let i=this.comments.read.get(n);if(!i){i={label:String(this.comments.read.size+1),id:"c"+this.comments.read.size,blocks:[]},this.comments.read.set(n,i),i.blocks=this.r.inStory(this.comments.path,"note",r);let e=L(r,"author"),t=L(r,"date");e&&(i.author=e.slice(0,80)),t&&/^\d{4}-\d{2}-\d{2}/.test(t.slice(0,10))&&(i.date=t.slice(0,10)),this.comments.read.set(n,i)}G(1),this.r.pager.page.comments.push(i),this.r.push({kind:"noteRef",label:"["+i.label+"]",to:i.id,...t})}};function Ul(e){let t=0,n=0,r=0,i=0,a=0,o=(e,i)=>{t+=Math.hypot(e-n,i-r),n=e,r=i};for(let[,s,c]of e.matchAll(/([A-Za-z])([^A-Za-z]*)/g)){let e=c.trim().split(/[\s,]+/).map(Number);switch(s){case"M":case"L":case"C":case"Q":if(e.length%2)return 1/0;s==="M"&&(n=i=e[0],r=a=e[1]);for(let t=0;t+1<e.length;t+=2)o(e[t],e[t+1]);break;case"A":case"a":{if(e.length!==7)return 1/0;let i=Math.abs(e[0]),a=Math.abs(e[1]),c=e[5]+(s==="a"?n:0),l=e[6]+(s==="a"?r:0),u=Math.hypot(c-n,l-r),d=Math.max(1,u/(2*Math.min(i,a)));i>0&&a>0&&(t+=4*(i+a)*d),o(c,l);break}case"Z":o(i,a);break;default:return 1/0}}return t>=0?t:1/0}function Wl(e){let t={left:0,up:0,right:0,down:0},n=0,r=0,i=[0,0],a=(e,n,r=0)=>{t.left=Math.max(t.left,r-e),t.up=Math.max(t.up,r-n),t.right=Math.max(t.right,e+r),t.down=Math.max(t.down,n+r)},o={left:1/0,up:1/0,right:1/0,down:1/0};for(let[,t,s]of e.matchAll(/([A-Za-z])([^A-Za-z]*)/g)){let e=s.trim().split(/[\s,]+/).map(Number);switch(t){case"M":case"L":case"C":case"Q":if(e.length%2)return o;for(let t=0;t+1<e.length;t+=2)n=e[t],r=e[t+1],a(n,r);i=t==="M"?e:i;break;case"A":case"a":{if(e.length!==7)return o;let i=e[5]+(t==="a"?n:0),s=e[6]+(t==="a"?r:0);Gl(n,r,i,s,e,a),n=i,r=s,a(n,r);break}case"Z":n=i[0],r=i[1];break;default:return o}}return t.left+t.up+t.right+t.down>=0?t:o}function Gl(e,t,n,r,i,a){let o=Math.abs(i[0]),s=Math.abs(i[1]);if(!(o>0&&s>0)||e===n&&t===r)return;let c=i[2]*Math.PI/180,[l,u]=[Math.cos(c),Math.sin(c)],d=l*(e-n)/2+u*(t-r)/2,f=-u*(e-n)/2+l*(t-r)/2,p=Math.sqrt(d*d/(o*o)+f*f/(s*s));p>1&&(o*=p,s*=p);let m=o*o*f*f+s*s*d*d,h=(i[3]===i[4]?-1:1)*Math.sqrt(Math.max(0,(o*o*s*s-m)/m)||0),g=l*(h*o*f/s)+u*(h*s*d/o)+(e+n)/2,_=u*(h*o*f/s)-l*(h*s*d/o)+(t+r)/2;i[2]===0?(a(g-o,_-s),a(g+o,_+s)):a(g,_,Math.max(o,s))}const Kl={blurred:800,fills:400,pictures:400,cuts:100,dottedBorders:100,boxes:12e3,runs:12e3,segments:5e4,outline:1e4,largeLetters:200,colorGlyphs:1e3,letters:5e4,fonts:300,columns:1e3,walked:5e4,held:5e4};function ql(e,t){let n=0;for(let r of e.matchAll(t))n++;return n}function Jl(e){let t=e.trim()===""?[]:e.trim().split(/[\s,]+/),n="";for(let e=0;e+1<t.length;e+=2)n+=(e===0?"M":"L")+t[e]+" "+t[e+1];return n}function Yl(e){return Math.max(ql(e,/[A-Za-z]/g),Math.ceil(ql(e,/[\d.]+/g)/7))}function Xl(e){let t=Zl?.get(e);return{kind:"segments",n:t?.segments??Yl(e),length:t?.length??Ul(e)}}let Zl;new RegExp(["\\p{Regional_Indicator}{2}","[0-9#*]\\uFE0F?\\u20E3","\\p{Emoji_Modifier_Base}\\p{Emoji_Modifier}","\\p{Extended_Pictographic}\\uFE0F?[\\u{E0020}-\\u{E007F}]*","\\p{Regional_Indicator}","\\p{Emoji_Modifier}","\\uFE0F","\\u20E3","[\\u{E0020}-\\u{E007F}]"].join("|"),"gu");const Ql=["Greek","Cyrillic","Armenian","Hebrew","Arabic","Syriac","Thaana","Nko","Devanagari","Bengali","Tamil","Thai","Hangul","Georgian","Ethiopic"].map(e=>"\\p{Script="+e+"}"),$l="\\p{Script=Latin}\\p{Nd}",eu="\\p{Script=Han}\\p{Script=Hiragana}\\p{Script=Katakana}\\p{Script=Bopomofo}",tu=$l+eu+Ql.join("");new RegExp(["["+$l+"]","["+eu+"]",...Ql.map(e=>"(?:(?!\\p{Nd})"+e+")"),"(?:(?!["+tu+"])\\p{L})"].map(e=>e+"+").join("|"),"gu"),RegExp("([\\p{L}"+tu+"]+)|[^\\p{L}"+tu+"]+","gu");function nu(e,t){let n=4*Math.abs(t);return{w:e.left+e.right+n,h:e.up+e.down+n}}const ru=[];function iu(e,t){return Array.from(t.matchAll(/-?[\d.]+px -?[\d.]+px ([\d.]+)px/g),t=>({kind:e,blur:Number(t[1])}))}function au(e,t){return t.length>0?t:[{kind:e,blur:300}]}function ou(e){return e.includes("repeating-linear-gradient(")?[{kind:"pattern"}]:e.includes("url(")?[{kind:"picture"}]:e.includes("-gradient(")?[{kind:"gradient"}]:[{kind:"plain"}]}function su(e){return/dotted|dashed/.test(e)?[{kind:"dotted-border",width:Number(/^([\d.]+)px/.exec(e)?.[1])}]:[{kind:"plain"}]}const cu={"-webkit-background-clip":"free","align-self":"free",background:ou,"background-blend-mode":()=>[{kind:"blend"}],"background-clip":()=>[{kind:"text-clip"}],"background-color":()=>[{kind:"plain"}],"background-image":ou,"background-repeat":e=>e==="repeat"?[{kind:"tiled"}]:ru,"background-size":"free",border:su,"border-bottom":su,"border-collapse":"free","border-left":su,"border-radius":"free","border-right":su,"border-top":su,"box-shadow":e=>au("box-shadow",iu("box-shadow",e)),"clip-path":e=>[{kind:"clip"},Xl(/^path\('([^']*)'\)$/.exec(e)?.[1]??e)],color:"free","column-count":"free","column-gap":"free",direction:"free",display:"free",filter:e=>au("filter",[...iu("filter",e),...Array.from(e.matchAll(/blur\(([\d.]+)px\)/g),e=>({kind:"filter",blur:Number(e[1])}))]),"font-family":"free","font-size":"free","font-style":"free","font-variant":"free","font-weight":"free",height:"free",inset:"free","justify-content":"free",left:"free","letter-spacing":"free","line-height":"free","margin-bottom":"free","margin-top":"free","mask-composite":"free","mask-image":()=>[{kind:"mask"}],"min-width":"free","object-fit":"free",opacity:"free",overflow:"free","overflow-wrap":"free",padding:"free","padding-left":"free","padding-right":"free",position:"free","tab-size":"free","table-layout":"free","text-align":"free","text-decoration":"free","text-indent":"free","text-orientation":"free","text-shadow":e=>au("text-shadow",iu("text-shadow",e)),"text-transform":"free",top:"free",transform:"free","vertical-align":"free","white-space":"free",width:"free","writing-mode":"free"};function lu(e){let t=String(e.d??"")+Jl(String(e.points??"")),n=Xl(t),r=e.stroke!==void 0,i={kind:"plain",...nu(Wl(t),r?Number(e["stroke-width"]??1):0)};return[{kind:"element"},...e.fill==="none"?[]:[i],...r?[i]:[],...n.n?[n]:[]]}const uu=[{kind:"element"}],du=[{kind:"inline"}],fu={col:()=>ru,colgroup:()=>ru,defs:()=>ru,section:()=>ru,stop:()=>ru,svg:()=>ru,table:()=>ru,tbody:()=>ru,tr:()=>ru,a:()=>du,br:()=>du,span:()=>du,text:()=>du,audio:()=>uu,div:e=>/^(?:tx|cols|p)$/.test(String(e.class))?ru:uu,marker:()=>uu,td:()=>uu,video:()=>uu,circle:lu,ellipse:lu,line:lu,path:lu,polygon:lu,polyline:lu,rect:lu,image:()=>[{kind:"element"},{kind:"picture"}],img:()=>[{kind:"element"},{kind:"picture"}],linearGradient:()=>[{kind:"element"},{kind:"gradient"}],radialGradient:()=>[{kind:"element"},{kind:"gradient"}],pattern:()=>[{kind:"element"},{kind:"pattern"}]};new Set(Object.keys({alt:"free","aria-label":"free",class:"read",colspan:"free",controls:"free",cx:"free",cy:"free",d:"read","data-autofit":"free","data-build-step":"free","data-failed":"read","data-lost":"read","data-name":"free","data-speaker-notes":"free",fill:"read","fill-opacity":"free","fill-rule":"free","font-family":"read","font-size":"read","font-style":"free","font-weight":"free",height:"free",href:"free",id:"free",lengthAdjust:"free","marker-end":"free","marker-start":"free",markerHeight:"free",markerUnits:"free",markerWidth:"free",offset:"free",orient:"free",overflow:"free",patternUnits:"free",points:"read",poster:"free",preload:"free",preserveAspectRatio:"free",r:"free",refX:"free",refY:"free",role:"free",rowspan:"free",rx:"free",ry:"free",src:"free","stop-color":"free",stroke:"read","stroke-dasharray":"free","stroke-linecap":"free","stroke-linejoin":"free","stroke-width":"read","text-anchor":"free",textLength:"free",transform:"free",viewBox:"free",width:"free",x:"free",x1:"free",x2:"free",xmlns:"free",y:"free",y1:"free",y2:"free"})),new Map(Object.entries(fu)),new Map(Object.entries(cu));const pu=Kl.pictures-100;var mu=class{r;constructor(e){this.r=e}pages=[];page;section;sawStoredBreak=!1;chapters=!1;pagesAreKnown(e){let t=this.r.pkg.storedCharacters;return this.r.pkg.storedPages!==e||t===void 0||this.chapters||Math.abs(this.bodyCharacters-t)>Math.max(20,t/100)?!1:e>1||this.sawStoredBreak}sectionsShare=!1;countSections(e){let t=0;for(let n=1;n<=e.length;n++){if(n<e.length&&!e[n].firstOfSection)continue;let r=e.slice(t,n).filter(e=>!e.joined).length;for(let i=t;i<n;i++)e[i].sectionPages=this.sectionsShare?0:r;t=n}}load=0;beside=0;floats=0;under=0;heavy=0;tall=0;places=0;more=0;cell=0;cellGuess=0;cellRoom=0;line(e,t){let n=e/this.columns;this.page.guess+=Math.max(e,t)/this.columns,this.tall+=n,this.beside=Math.max(0,this.beside-n),this.under=Math.max(0,this.under-n)}get columns(){return Math.max(1,this.page.parts.at(-1)?.columns.count??1)}maybe(e){this.more+=e/this.columns}get overdue(){return this.load>6e3||this.heavy>4e3}isLong(e=!1,t=!1){let n=this.page.parts[this.page.parts.length-1];return(this.heavy>=3e3&&Math.max(this.tall+this.more,this.floats)>=this.section.height||this.places>=pu||this.load>3e3&&(this.beside<=0&&this.under<=0||this.load>6e3))&&(e||this.page.parts.some(e=>e.blocks.length>0))&&this.r.story.kind==="body"&&(t||n?.columns.count===1)&&this.pages.length<5e3}dropEmptyPiece(){let e=this.page,t=this.pages[this.pages.length-2];if(!(!e?.joined||!t||e.parts.some(e=>e.blocks.length>0))){this.pages.pop();for(let n of["footnotes","endnotes","comments"])t[n]=e[n];this.page=t,this.r.out=t.parts[t.parts.length-1].blocks}}earlierContent=!1;pageHasContent(){return this.page.joined===!0||this.earlierContent||this.page.parts[this.page.parts.length-1].blocks.length>0}newPage(e,t=!1,n=!1){if(this.pages.length>=5e3){n||this.r.sink.add("pages-over-cap");return}this.settle(),this.dropEmptyPiece(),this.load=0,this.places=0,this.heavy=0,this.tall=0,this.more=0,this.floats=0,n||(this.beside=0,this.under=0);let r=this.section,i=this.page,a=e&&r.numberStart!==void 0?r.numberStart:(i?.number??0)+ +!n;e&&r.numberStart===void 0&&i&&(r.start==="oddPage"&&a%2==0||r.start==="evenPage"&&a%2==1)&&(this.chapters=!0,a++);let o=!e&&i?i.parts[i.parts.length-1].columns:r.columns;if(this.page={section:n&&i?i.section:this.r.pkg.settings.mirrorMargins&&a%2==0?this.mirrored(r):r,firstOfSection:e,number:a,sectionPages:1,guess:0,sure:0,soft:t||!e&&this.r.pkg.settings.noSpaceAfterBreak,parts:[{columns:o,blocks:[]}],footnotes:[],endnotes:[],comments:[]},G(4),this.pages.push(this.page),this.earlierContent=!1,this.r.out=this.page.parts[0].blocks,n&&i){this.page.joined=!0;for(let e of["footnotes","endnotes","comments"])this.page[e]=i[e],i[e]=[];return}this.r.noteReader.begins(e?r:void 0)}mirrors=new WeakMap;mirrored(e){let t=this.mirrors.get(e);return t||this.mirrors.set(e,t={...e,left:e.right,right:e.left}),t}nextSection(e){this.r.noteReader.sectionEnds(this.section,this.page);let t=this.section,n=e.width===t.width&&e.height===t.height;if(this.section=e,(e.start==="continuous"||e.start==="nextColumn")&&n){this.sectionsShare=!0,this.r.noteReader.begins(e,!1),e.numberStart!==void 0&&(this.chapters=!0);let t=this.page.parts[this.page.parts.length-1];if(t.blocks.length===0)t.columns=e.columns;else if(this.isLong(!1,!0))this.earlierContent=!0,this.newPage(!1,!1,!0),this.page.parts[0].columns=e.columns;else{this.earlierContent=!0;let t={columns:e.columns,blocks:[]};this.page.parts.push(t),this.r.out=t.blocks}}else this.newPage(!0)}bodyCharacters=0;settle(){this.pages.length>0&&(this.page.sure=Math.floor(Math.max(this.tall,this.floats)*2/3))}lineOf(e,t){let{line:n,lineRule:r}=e.props,i=t*96/72;return Math.max(0,Math.min(12,n===void 0||r==="atLeast"?i:r==="exact"?n:i*Math.min(240,n)/240))}paragraphGuess(e,t,n){let r=(t.base.size??10)*96/72,i=Math.max(r,n-(t.props.start??0)-(t.props.end??0));return Math.max(1,Math.ceil(e*r*.5/i))*r*1.2+Math.max(t.props.before??0,t.props.after??0)}get room(){let e=this.section;return Math.max(1,e.width-e.left-e.right)}weigh(e){this.heavy+=1e3,this.places+=e.parts.length;let t=e.place;if(t.kind!=="inline"){if(t.kind==="block")this.r.depth===0?(this.tall+=e.height/this.columns,this.page.guess+=e.height/this.columns):this.r.depth===1&&(this.cell+=e.height,this.cellGuess+=e.height);else if(t.kind==="float"){let t=this.room;this.r.depth===0&&(this.floats+=Math.min(t/this.columns,e.width)*e.height/t),this.beside=Math.max(this.beside,Math.min(2e3,e.height))}else if(t.v.from==="paragraph"){let n=Math.max(0,t.v.offset)+e.height;this.under=Math.max(this.under,Math.min(4e3,n))}else{let n=this.section,r=t.v.from==="margin"?n.top:t.v.from==="bottomMargin"?n.height-n.bottom:0,i=Math.min(n.height,t.v.align?n.height:r+t.v.offset+e.height);this.page.reach=Math.max(this.page.reach??0,i),this.under=Math.max(this.under,i-n.top-this.tall)}}}};function hu(e,t,n){let r=e&&P(e,t);if(!r)return n;let i=L(r,"val");return i===void 0||i==="1"||i==="true"||i==="on"}T({script:[119964,119990,0],fraktur:[120068,120094,0],"double-struck":[120120,120146,120792]});const gu=new Set(["instrText","delInstrText","fldData"]),_u=new Set(["del","moveFrom","delText"]),vu=e=>P(e,"del")!==void 0||hu(e,"vanish",!1),yu=new Set(["drawing","pict","object"]);function bu(e){let t="",n=[e];for(;n.length>0&&t.length<=2e3;){let e=n.pop();if(gu.has(e.name)||_u.has(e.name)||e.name==="r"&&M(e,"rPr").some(vu))continue;if(yu.has(e.name)){t+="\u25A1";continue}t+=e.text.slice(0,2001-t.length);let r=N(e);for(let e=r.length-1;e>=0;e--)n.push(r[e])}return t}T({f:["num","den"],rad:["deg","e"],sSub:["e","sub"],sSup:["e","sup"],sSubSup:["e","sub","sup"],sPre:["sub","sup","e"],nary:["sub","sup","e"],d:["e"],func:["fName","e"],limLow:["e","lim"],limUpp:["e","lim"],acc:["e"],bar:["e"],groupChr:["e"],box:["e"],borderBox:["e"],eqArr:["e"],m:["mr"],mr:["e"],phant:["e"]}),T({"\u0300":"`","\u0301":"\u00B4","\u0302":"^","\u0303":"~","\u0304":"\u00AF","\u0306":"\u02D8","\u0307":"\u02D9","\u0308":"\u00A8","\u030A":"\u02DA","\u030B":"\u02DD","\u030C":"\u02C7","\u20D0":"\u21BC","\u20D1":"\u21C0","\u20D6":"\u2190","\u20D7":"\u2192","\u20E1":"\u2194"});function xu(e,t,n){y(n.length);let r=[];if(n.some(e=>e.hMerge==="continue")){let e=[],i=[];n.forEach((n,a)=>{let o=i[i.length-1];n.hMerge==="continue"&&o?(o.span=(o.span??1)+(n.span??1),r.push(t[a])):(i.push(n),e.push(t[a]))}),n=i,t=e}let i=Math.min(e.before??0,63-t.length);e.before!==void 0&&(e.before=i);let a=n.map((e,n)=>{let r=i,a=Math.max(1,Math.min(e.span??1,63-r-(t.length-1-n)));return e.span!==void 0&&(e.span=a),i+=a,r});return e.after!==void 0&&(e.after=Math.min(e.after,63-i)),{rp:e,cells:t,cp:n,starts:a,columns:i+(e.after??0),folded:r}}function Su(e,t,n,r=e.reduce((e,t)=>e+t,0)){let i=Array.from({length:n},()=>void 0);for(let e of t)y(1+e.cp.length),e.cp.forEach((t,n)=>{let a=e.starts[n];(t.span??1)!==1||i[a]!==void 0||!t.width||t.width.value<=0||(t.width.kind==="px"?i[a]=t.width.value:t.width.kind==="pct"&&r>0&&(i[a]=r*t.width.value/100))});return i.map((t,n)=>t??e[n]??0)}function Cu(e,t){let n=(t.margins?.left??7.2)+(t.margins?.right??7.2)+10;return e.length>0&&e.every(e=>e>0)&&(t.fixed===!0||t.guessed===!0||e.some(e=>e>=n))}const wu=new Set(Array.from("WM@%\u2014\u00C6\u0152\u0416\u041C\u0428\u0429\u042B\u042E",e=>e.charCodeAt(0)));function Tu(e,t){y(e.length);let n=[...e],r=t,i=n.length;for(let e of n.map((e,t)=>t).sort((e,t)=>n[e]-n[t]))n[e]=Math.min(n[e],r/i--),r-=n[e];return n}const Eu=e=>e.reduce((e,t)=>e+t,0);var Du=class{least;most;floor;room;constructor(e,t,n){this.least=Array.from({length:e},()=>0),this.most=Array.from({length:e},()=>0),this.floor=(t.margins?.left??7.2)+(t.margins?.right??7.2)+10,this.room=n}see(e){let t=e.props.margins,n=(t?.left??7.2)+(t?.right??7.2),[r,i]=ku(e.blocks,this.room);e.props.noWrap&&(r=i),(e.props.direction??"across")!=="across"&&(r=i=Ou(e.blocks)),y(e.span);for(let t=e.column;t<e.column+e.span;t++)this.least[t]=Math.max(this.least[t]??0,(r+n)/e.span),this.most[t]=Math.max(this.most[t]??0,(i+n)/e.span)}bounds(e){y(this.least.length);let t=t=>(e[t]??0)>=this.floor?e[t]:void 0,n=this.least.map((e,n)=>t(n)??Math.max(this.floor,e));return[n,this.most.map((e,r)=>t(r)??Math.max(n[r],e))]}whole(e){let[t,n]=this.bounds(e);return[Eu(t),Eu(n)]}widths(e,t){let[n,r]=this.bounds(e),[i,a]=[Eu(n),Eu(r)],o=t??Math.min(this.room,a*1.05);if(o>=a){let t=Eu(r.filter((t,n)=>t!==e[n]));return r.map((n,r)=>t===0?n*o/a:n===e[r]?n:n+n*(o-a)/t)}if(o>i){let e=(o-i)/(a-i);return n.map((t,n)=>t+(r[n]-t)*e)}return Tu(n,o)}};function Ou(e){let t=0;for(let n of e){y(1+(n.kind==="p"?n.inlines.length:0));let e=n.kind==="p"&&n.inlines.length===0?n.base.size??10:0,r=1;for(let t of n.kind==="p"?n.inlines:[])e=Math.max(e,t.props.size??10),r+=+(t.kind==="break");t+=e*96/72*1.2*r}return t}function ku(e,t){let n=0,r=0;for(let i of e){let e;if(i.kind==="p"){y(1+i.inlines.length);let n=new ju(i,t);i.inlines.forEach(e=>n.see(e)),e=n.end()}else if(Cu(i.grid,i.props))y(1+i.grid.length),e=[Eu(i.grid),Eu(i.grid)];else{let n=new Du(i.grid.length,i.props,t);for(let e of i.rows)y(1+e.cells.length),e.cells.forEach(e=>n.see(e));e=n.whole(i.grid)}n=Math.max(n,e[0]),r=Math.max(r,e[1])}return[n,r]}const Au={center:.5,right:0,decimal:0};var ju=class{least=0;most=0;start;close;line;word;from;share=1;point=!1;tabs;cap;constructor(e,t){this.start=e.props.start??0,this.line=this.start+Math.max(0,e.props.first??0),this.word=this.from=this.line,this.close=e.props.end??0,this.tabs=e.props.tabs??[],this.cap=t/3}end(){return this.newLine(),[this.least,Math.max(this.least,this.most)]}newLine(){this.most=Math.max(this.most,this.line+this.close),this.line=this.word=this.from=this.start,this.share=1,this.point=!1}add(e,t,n=this.cap){this.line+=e*this.share,t||(this.word=this.from=this.start),this.word+=e*this.share;let r=this.from+Math.min(this.word-this.from,n);this.least=Math.max(this.least,r+this.close)}letters(e,t){let n=(t.size??10)*96/72*(t.bold?1.06:1)*((t.scale??100)/100);y(e.length>>3);for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);this.point&&i===46&&(this.share=1);let a=i>=11904,o=e[r],s=t.caps===!0||(i<128?i>=65&&i<=90||i===109||i===119:o!==o.toLowerCase()),c=n*(a||wu.has(i)?1:s?.8:.55)+(t.spacing??0);i===32?(this.line+=c*this.share,this.word=this.from=this.start):this.add(c,!a)}}tab(){y(this.tabs.length);let e;for(let t of this.tabs)t.kind!=="clear"&&t.kind!=="bar"&&t.pos>this.line&&t.pos<(e?.pos??1/0)&&(e=t);this.line=e?.pos??(Math.floor(this.line/48)+1)*48,this.word=this.from=this.line,this.share=Au[e?.kind??"left"]??1,this.point=e?.kind==="decimal",this.least=Math.max(this.least,this.line+this.close)}see(e){switch(e.kind){case"text":return this.letters(e.text,e.props);case"tab":case"ptab":return this.tab();case"break":case"columnBreak":return this.newLine();case"figure":{let t=e.figure.place.kind;if(t==="inline")this.add(e.figure.width,!1,1/0);else if(t!=="layer"){let t=this.start+e.figure.width+this.close;this.least=Math.max(this.least,t)}return}case"math":return this.word=this.from=this.start,this.letters(bu(e.el).replaceAll(" ","x"),e.props);case"ruby":return y(e.base.length),e.base.forEach(e=>this.see(e));case"noteRef":return this.letters(e.label,e.props);case"noteMark":case"pageField":return this.letters("000",e.props);case"styleRef":return this.letters("xxxxxxxx xxxxxxxx",e.props);case"bookmark":return;default:return e}}};function Mu(e,t=0,n,r){let i=new Map,a=e.rows.map((e,r)=>{G(1),r===t&&i.clear();let a=[],o=new Set;for(let s of e.cells){o.add(s.column);let e=i.get(s.column);if(s.props.vMerge==="continue"&&e&&e.span===s.span){y(1),e.rows++,s.edges.bottom&&(e.edges={...e.edges,bottom:s.edges.bottom}),r>=t&&n?.(s);continue}G(1);let c={...s,rows:1};a.push(c),s.props.vMerge?i.set(s.column,c):i.delete(s.column)}for(let e of i.keys())o.has(e)||i.delete(e);return{...e,cells:a}});return y(r?.cp.length??0),r?.cp.forEach((e,t)=>{let n=i.get(r.starts[t]);if(e.vMerge==="continue"&&n?.span===(e.span??1)){let{bottom:e,...t}=n.edges;n.edges=t}}),{...e,rows:a}}function Nu(e,t,n){let r=t.look??{firstRow:!1,lastRow:!1,firstColumn:!1,lastColumn:!1,bandRows:!0,bandColumns:!0},i=[],a=(t,n)=>{let r=e.regions[t];r&&i.push({region:r,at:n})},o=n.row===0,s=n.row===n.rows-1,c=n.first===0,l=n.last>=n.columns-1,u=r.firstRow&&o,d=r.lastRow&&s&&!u,f=r.firstColumn&&c,p=r.lastColumn&&l&&!f;if(a("wholeTable",{top:o,bottom:s,left:c,right:l}),r.bandColumns&&!f&&!p){let e=t.columnBand||1,i=n.first-+!!r.firstColumn;a(Math.floor(i/e)%2?"band2Vert":"band1Vert",{top:o,bottom:s,left:i%e===0,right:i%e===e-1||l})}if(r.bandRows&&!u&&!d){let e=t.rowBand||1,i=n.row-+!!r.firstRow;a(Math.floor(i/e)%2?"band2Horz":"band1Horz",{top:i%e===0,bottom:i%e===e-1||s,left:c,right:l})}u&&a("firstRow",{top:!0,bottom:!0,left:c,right:l}),d&&a("lastRow",{top:!0,bottom:!0,left:c,right:l}),f&&a("firstCol",{top:o,bottom:s,left:!0,right:!0}),p&&a("lastCol",{top:o,bottom:s,left:!0,right:!0});let m={top:!0,bottom:!0,left:!0,right:!0};return u&&f&&a("nwCell",m),u&&p&&a("neCell",m),d&&f&&a("swCell",m),d&&p&&a("seCell",m),i}function Pu(e,t){if(!e)return{};let n={},r=(e,t)=>{t&&(n[e]=t)};return r("top",t.top?e.top:e.insideH),r("bottom",t.bottom?e.bottom:e.insideH),r("left",t.left?e.left:e.insideV),r("right",t.right?e.right:e.insideV),e.tl2br&&(n.tl2br=e.tl2br),e.tr2bl&&(n.tr2bl=e.tr2bl),n}function Fu(e,t,n,r,i){let a={top:i.row===0,bottom:i.row===i.rows-1,left:i.first===0,right:i.last>=i.columns-1},o={top:!0,bottom:!0,left:!0,right:!0};return{...Pu(e.borders,a),...Pu(t?.cell.borders,a),...n.reduce((e,t)=>({...e,...Pu(t.region.cell.borders,t.at)}),{}),...Pu(r,o)}}var Iu=class{r;constructor(e){this.r=e}rowList(e,t,n,r=[]){for(let i of this.r.open(e))i.name===t?r.push(i):i.name==="sdt"||Ml.has(i.name)?this.rowList(i,t,n,r):i.name==="bookmarkStart"?n(i,r.length):this.r.unread(i);return r}table(e,t,n){if(this.r.nesting>=32){this.r.sink.add("text-nested-too-deep");return}let r=this.r.pkg.palette,i=ka(P(e,"tblPr"),r),a=this.r.styles.get(i.style??this.r.styles.defaultTableStyle),o=a?.type==="table"?a:void 0,s=ua(o?.table,i),c=P(e,"tblGrid"),l=[];if(c)for(let e of N(c))e.name==="gridCol"&&l.length<63&&l.push(Math.max(0,H(L(e,"w"))??0));let u=[],d=this.rowList(e,"tr",(e,t)=>(u[t]??=[]).push(e)),f=this.r.top,p=Math.max(1,this.r.pager.room-Math.max(0,s.indent??0)),m={kind:"table",props:s,grid:l,rows:[]},h=[],g=d.map((e,t)=>{let n=this.rowList(e,"tc",e=>(u[t]??=[]).push(e));return n.length>63&&(this.r.sink.add("table-columns-cut",void 0,n.length-63),n=n.slice(0,63)),xu(Aa(P(e,"trPr")),n,n.map(e=>Oa(P(e,"tcPr"),r)))}),_=g.reduce((e,t)=>Math.max(e,t.columns),l.length);l=Su(l,g,_),m.grid=l;let v=0,y=e=>{e.blocks.some(e=>e.kind==="table"||e.inlines.some(e=>e.kind!=="bookmark"))&&this.r.sink.add("content-unread","merged cell")};for(let e of g)for(let t of e.folded)this.r.unread(t);let b=new Map,x=new Map,S=e=>{let t=x.get(e);return t===void 0&&x.set(e,t=x.size),t};this.r.depth++,this.r.nesting++;let C=f&&!Cu(l,s)?new Du(_,s,p):void 0,w=!1,T=g.filter(e=>!e.rp.hidden).length,E=-1,D=g.some(e=>!e.rp.hidden&&!e.rp.header);if(g.forEach((e,i)=>{if(u[i]?.forEach(e=>this.r.bookmarkAt(e)),e.rp.hidden)return;if(E++,f&&m.rows.length>0&&this.r.pager.isLong(!0)){this.r.depth--,w=!0,m.continues=!0;let t=s.spacing?void 0:e;this.r.out.push(Mu(m,v,y,t)),this.r.pager.newPage(!1,!1,!0),this.r.depth++,G(1),m={kind:"table",props:s,grid:l,rows:[],joined:!0},v=0}let a=this.r.pager.page.footnotes.length,c=this.r.pager.page.comments.length;f&&(this.r.rowBreak=!1);let p=e.rp.change?Nl(P(P(d[i],"trPr"),e.rp.change)):n;D&&=e.rp.header===!0,e.rp.header&&=D;let g={props:e.rp,cells:[]},x=0,O=0,k=P(d[i],"tblPrEx"),A=k?ua(s,ka(k,r)):s;if(e.cells.forEach((n,r)=>{let i=e.starts[r],a=e.cp[r],s=a.span??1,c={row:E,rows:T,first:i,last:i+s-1,columns:_},l=o?Nu(o,A,c):[],u=k?void 0:l.map(e=>S(e.region)).join(" "),d=u===void 0?void 0:b.get(u);d||(d={cell:ua({...A.shade?{shade:A.shade}:{},...A.margins?{margins:A.margins}:{}},o?.cell,...l.map(e=>e.region.cell)),para:ua(t.para,o?.para,...l.map(e=>e.region.para)),run:ua(t.run,o?.run,...l.map(e=>e.region.run))},u!==void 0&&b.set(u,d));let f=ua(d.cell,a),m=this.r.out;this.r.out=[],this.r.pager.cell=0,this.r.pager.cellGuess=0,this.r.pager.cellRoom=this.r.pager.room/Math.max(1,e.cells.length),this.r.blocks(n,d,a.change?{kind:a.change,moved:!1}:p);let h=this.r.out;this.r.out=m;let v=(f.direction??"across")!=="across",y=a.vMerge==="continue"||v?0:a.vMerge==="restart"?12:1/0;x=Math.max(x,Math.min(y,this.r.pager.cell)),O=Math.max(O,Math.min(y,this.r.pager.cellGuess)),G(1),this.r.pager.load++;let w={props:f,edges:Fu(A,o,l,a.borders,c),column:i,span:s,rows:1,blocks:h};C?.see(w),g.cells.push(w)}),this.r.rowBreak&&f&&(m.rows.length>0||this.r.pager.pageHasContent())&&this.r.pager.pages.length<5e3){this.r.depth--,m.rows.length>0&&this.r.out.push(Mu(m,v,y));let e=this.r.pager.page.footnotes.splice(a),t=this.r.pager.page.comments.splice(c);this.r.pager.newPage(!1);let n=this.r.noteReader.notes.footnote;for(let t of e){let e=this.r.noteReader.noteMarks.get(t);if(e&&n.settings.restart==="eachPage"){let r=n.settings.start+n.count++,i=n.settings.format??"decimal";t.label=this.r.noteReader.numbered(r,i),e.label=t.label}this.r.pager.page.footnotes.push(t)}for(let e of t)this.r.pager.page.comments.push(e);this.r.depth++,G(1+h.length),m={kind:"table",props:s,grid:l,rows:[...h]},v=h.length}if(e.rp.header&&h.length<10&&h.push(g),G(1),this.r.pager.load++,f&&!s.float){let t=e.rp.exact?e.rp.height:void 0;this.r.pager.line(t??x,t??O)}m.rows.push(g)}),u[g.length]?.forEach(e=>this.r.bookmarkAt(e)),this.r.depth--,this.r.nesting--,f&&(this.r.rowBreak=!1),m.rows.length>0&&this.r.out.push(Mu(m,v,y)),C&&w){let e=s.width,t=e?.kind==="pct"?p*e.value/100:e?.kind==="px"&&e.value>0?e.value:void 0,n=t&&Math.min(t,p),r=Su(l,g,_,n??p);l.splice(0,l.length,...C.widths(r,n)),s.guessed=!0}}};function Lu(e,t,n,r){G(1);let i=n.palette,a=new Map;for(let t of e?N(e):[])a.set(t.name,t);let o=e=>a.get(e),s=o("pgSz"),c=o("pgMar"),l=o("cols"),u=o("pgNumType"),d=(e,t,n)=>(e&&H(L(e,t)))??n,f=U(o("type")),p=Math.max(1,Math.min(12,Math.trunc(V(l&&L(l,"num"))??1))),m=V(u&&L(u,"start")),h=Math.max(96,Math.min(6e3,d(s,"w",816))),g=Math.max(96,Math.min(6e3,d(s,"h",1056))),_=Math.max(0,d(c,"gutter",0)),v=n.settings.gutterAtTop?"top":W(o("rtlGutter"))?"right":"left",y=(e,t,n)=>Math.max(0,Math.min(n,Math.abs(d(c,e,t)))),b={width:h,height:g,top:Math.min(g/2-8,y("top",96,g)+(v==="top"?_:0)),bottom:y("bottom",96,g/2-8),left:Math.min(h/2-8,y("left",96,h)+(v==="left"?_:0)),right:Math.min(h/2-8,y("right",96,h)+(v==="right"?_:0)),header:y("header",48,g/2),footer:y("footer",48,g/2),columns:{count:p,gap:Math.max(0,d(l,"space",48)),rule:ji(l&&L(l,"sep"))},start:f==="continuous"||f==="evenPage"||f==="oddPage"||f==="nextColumn"?f:"nextPage",titlePage:W(o("titlePg"))??!1,numberFormat:(u&&L(u,"fmt"))??"decimal",headers:{...t?.headers},footers:{...t?.footers},rtl:W(o("bidi"))??!1,vAlign:"top"};u&&L(u,"chapStyle")!==void 0&&(b.chapters=!0),o("lnNumType")&&r.add("layout-approximated","line numbers"),Da(U(o("textDirection")))!=="across"&&r.add("layout-approximated","vertical text");let x=o("docGrid"),S=x&&L(x,"type");if(x&&(S==="lines"||S==="linesAndChars"||S==="snapToChars")){let e=H(L(x,"linePitch"));e!==void 0&&e>0&&(b.linePitch=e)}m!==void 0&&(b.numberStart=Math.max(0,Math.min(1e6,Math.trunc(m))));let C=U(o("vAlign"));(C==="center"||C==="bottom")&&(b.vAlign=C);let w=o("pgBorders"),T=ia(w,i),E=w&&L(w,"display");if(w&&T&&(b.borders={...T,fromText:L(w,"offsetFrom")!=="page",on:E==="firstPage"||E==="notFirstPage"?E:"allPages"}),e){for(let t of N(e)){if(t.name!=="headerReference"&&t.name!=="footerReference")continue;let e=n.archive.relById(n.main,L(t,"id")??""),r=L(t,"type")??"default";!e||e.external||r!=="default"&&r!=="first"&&r!=="even"||((t.name==="headerReference"?b.headers:b.footers)[r]=e.target)}let t=o("footnotePr");t&&(b.footnotes=Gi(t,n.settings.footnotes));let r=o("endnotePr");r&&(b.endnotes=Gi(r,n.settings.endnotes)),W(o("noEndnote"))&&(b.noEndnotes=!0)}return b}const Ru=1e5,zu=new Set(["wps","wpg","wpc","wp14","w14","w15","w16","w16se","w16cid","w16cex","w16sdtdh","a14","v"]);var Bu=class{pager=new mu(this);fieldReader=new Vl(this);noteReader;tableReader=new Iu(this);styles;numbering;out=[];story;stories=0;depth=0;nesting=0;current;rowBreak=!1;unsymboled=new WeakMap;bookmarkIds=new Map;bookmarks=new Set;commentDepth=0;margins=new Map;base;vmlTypes=new Oo;pkg;sink;constructor(e,t){this.pkg=e,this.sink=t;let n=e.palette;this.styles=new Ia(e.xmlOf("styles"),n),this.numbering=new qc(e.xmlOf("numbering"),n,this.styles),this.story=Wu(e.main,"body"),this.noteReader=new Hl(this,e),this.base=ua({size:10,ascii:"Times New Roman"},this.styles.defaultRun)}read(){if(!this.pkg.document)throw Error("the document's XML was let go: it is read once");let e=P(this.pkg.document,"body");e&&this.fieldReader.markUnclosed(e);let t=e?this.blockList(e):[],n=[];for(let e of t){let t=e.name==="p"?P(e,"pPr"):void 0,r=e.name==="sectPr"?e:t&&P(t,"sectPr");r&&n.push(r)}let r=[];for(let e of n)r.push(Lu(e,r[r.length-1],this.pkg,this.sink));r.length===0&&r.push(Lu(void 0,void 0,this.pkg,this.sink)),this.pager.chapters=r.some(e=>e.chapters);let i=0;this.pager.section=r[0],this.pager.newPage(!0);for(let e of t)if((e.name==="tbl"||e.name==="p")&&this.pager.isLong()&&(this.pager.overdue||!Uu(e))&&this.pager.newPage(!1,!1,!0),e.name==="tbl")this.tableReader.table(e,{});else if(e.name==="bookmarkStart")this.bookmarkAt(e);else if(e.name==="p"){this.paragraph(e,{});let t=P(e,"pPr");t&&P(t,"sectPr")&&i+1<r.length&&this.pager.nextSection(r[++i])}this.endStory(),this.pager.settle(),this.pager.dropEmptyPiece();for(let e of this.noteReader.endnotes)this.pager.page.endnotes.push(e);let a=this.pager.pages.filter((e,t)=>t===0||e.parts.some(e=>e.blocks.length>0)||e.endnotes.length>0);a.forEach((e,t)=>{a[t+1]?.joined&&(e.continues=!0)}),this.pager.countSections(a),this.fieldReader.unbuilt.length>0&&Va(a,this.fieldReader.unbuilt,{styles:this.styles,base:this.base,sink:this.sink,newBookmark:()=>this.bookmarkId("\0contents "+this.bookmarkIds.size)}),y(a.length*6);for(let e of a)for(let t of[e.section.headers,e.section.footers])for(let e of Object.values(t))this.margin(e);this.pkg.palette.facesOver&&this.sink.add("faces-over-allowance"),this.pkg.palette.languagesOver&&this.sink.add("languages-over-allowance");let o=a.filter(e=>!e.joined).length;return{pages:a,margins:this.margins,bookmarks:this.bookmarks,base:this.base,bodyRun:La(this.base,[this.styles.paragraphStyle(void 0)?.run]),styleNames:this.styles.names(),defaultTab:this.pkg.settings.defaultTab,hangIsStop:this.pkg.settings.hangIsStop,evenAndOdd:this.pkg.settings.evenAndOdd,spacesAdd:this.pkg.settings.spacesAdd,tablesOutdent:this.pkg.settings.mode<15,...this.pkg.background?{background:this.pkg.background}:{},sheets:o,pagesKnown:this.pager.pagesAreKnown(o)}}inStory(e,t,n){if(this.stories>=8||this.nesting>=32||this.wrapped>512)return this.sink.add("text-nested-too-deep"),[];let r={story:this.story,out:this.out,current:this.current,depth:this.depth,comment:this.commentDepth,row:this.rowBreak,bookmarks:this.pendingBookmarks,ruby:this.inRuby};this.pendingBookmarks=[],this.inRuby=!1,this.story=Wu(e,t),this.fieldReader.markUnclosed(n),this.out=[],this.current=void 0,this.depth=0,this.commentDepth=0,this.stories++,this.nesting++;try{return this.blocks(n,{}),this.endStory(),this.out}finally{this.stories--,this.nesting--,this.story=r.story,this.out=r.out,this.current=r.current,this.depth=r.depth,this.commentDepth=r.comment,this.rowBreak=r.row,this.pendingBookmarks=r.bookmarks,this.inRuby=r.ruby}}endStory(){(this.story.fields.length>0||this.story.overflow>0)&&this.sink.add("content-unread","field");let e=this.pendingBookmarks.splice(0),t=this.out[this.out.length-1];for(let n of e)t?.kind==="p"?(G(1),t.inlines.push({kind:"bookmark",id:n,props:t.base})):this.bookmarks.delete(n)}box(e,t){let n=this.base;t!==void 0&&(this.base={...n,color:t});try{return this.inStory(this.story.part,"box",e)}finally{this.base=n}}get part(){return this.story.part}get inCell(){return this.depth>0}inMargin=!1;margin(e){if(this.margins.has(e))return;let t=this.pkg.read(e);this.inMargin=!0,this.margins.set(e,t?this.inStory(e,"margin",t):[]),this.inMargin=!1}open(e,t){let n=N(e);if(!t&&!n.some(e=>e.name==="AlternateContent"))return n;let r=t??[];for(let e of n){if(e.name!=="AlternateContent"){r.push(e);continue}let t;for(let n of N(e))if(n.name==="Fallback")t??=n;else if(n.name==="Choice"&&(L(n,"Requires")??"").slice(0,200).trim().split(/\s+/).every(e=>zu.has(e))){t=n;break}t?this.open(t,r):e.children.length>0&&!this.noBranch.has(e)&&(this.noBranch.add(e),this.sink.add("content-unread","AlternateContent"))}return r}noBranch=new WeakSet;blockList(e,t=[]){for(let n of this.open(e))n.name==="p"||n.name==="tbl"||n.name==="sectPr"||n.name==="bookmarkStart"?t.push(n):n.name==="sdt"||Ml.has(n.name)||n.name==="ins"||n.name==="moveTo"?this.blockList(n,t):n.name==="del"||n.name==="moveFrom"?this.unread(n):n.name==="altChunk"?this.sink.add("embedded-document-left-out"):this.unread(n);return t}unread(e){(e.children.length!==0||e.name==="t")&&(e.name.endsWith("Pr")||e.name==="tblGrid"||e.name==="tblPrEx"||(e.name==="t"?e.text!=="":F(e,"t").some(e=>e.text!==""))&&this.sink.add("content-unread",e.name))}pendingBookmarks=[];bookmarkAt(e){let t=L(e,"name");t!==void 0&&this.pendingBookmarks.push(this.bookmarkId(t))}blocks(e,t,n){for(let r of this.blockList(e))r.name==="p"?this.paragraph(r,t,n):r.name==="tbl"?this.tableReader.table(r,t,n):r.name==="bookmarkStart"&&this.bookmarkAt(r)}get top(){return this.story.kind==="body"&&this.depth===0}paragraph(e,t,n){let r=this.pkg.palette,i=P(e,"pPr"),a=la(i,r),o=this.styles.paragraphStyle(a.style),s=a.numId??o?.para.numId,c=a.numId===void 0,l=a.level??(c?o?.para.level:void 0);s!==void 0&&l===void 0&&o&&(l=this.numbering.levelOfStyle(s,o.id)),l??=0;let u=s!==void 0&&s!=="0"?this.numbering.level(s,l):void 0,d=c?ua(this.styles.defaultPara,t.para,u?.para,o?.para,a):ua(this.styles.defaultPara,t.para,o?.para,u?.para,a),f=La(this.base,[t.run,o?.run]),p=i&&P(i,"rPr"),m=wa(p,r);d.pageBreakBefore&&this.top&&this.pager.pageHasContent()&&this.pager.newPage(!1),G(1),this.pager.load++;let h={kind:"p",props:d,base:f,inlines:[]};d.outline!==void 0&&d.outline<9&&(h.heading=d.outline+1),this.top&&(d.style!==void 0&&this.styledTop.add(d.style),h.heading!==void 0&&this.styledTop.add(h.heading));let g={current:this.current,levels:this.styleLevels,characters:this.characters,smallest:this.smallest,inFlow:this.inFlow,inLine:this.inLine,inLines:this.inLines};this.current=h,this.styleLevels=[t.run,o?.run],this.characters=0,this.smallest=1/0,this.inFlow=!1,this.inLine=0,this.inLines=0,this.inline(e,n?{change:n}:{}),Pc(h.inlines);let _=this.current,v=this.characters,y=this.smallest,b=this.inFlow,x=this.inLine,S=this.inLines-x;this.current=g.current,this.styleLevels=g.levels,this.characters=g.characters,this.smallest=g.smallest,this.inFlow=g.inFlow,this.inLine=g.inLine,this.inLines=g.inLines;let C=h!==_||this.begun.has(h),w=La(this.base,[t.run,o?.run],m),T=w.hidden===!0;if(T&&!C){for(let e of h.inlines)e.kind==="bookmark"&&this.pendingBookmarks.push(e.id);return}let E=T||d.frame?0:Math.max(x,y===1/0&&b?0:this.pager.lineOf(_,y===1/0?w.size??10:y));if(this.story.kind==="body"&&this.depth<=1&&this.pager.maybe(S),this.top?this.pager.line(E,x+this.pager.paragraphGuess(v,_,this.pager.room)):this.story.kind==="body"&&this.depth===1&&(this.pager.cell+=E,this.pager.cellGuess+=x+this.pager.paragraphGuess(v,_,this.pager.cellRoom)),C?(p||T)&&(G(1),_.mark=w):h.base=La(this.base,[t.run,o?.run],{...m,hidden:!1}),this.pendingBookmarks.length>0){let e=this.pendingBookmarks.splice(0).map(e=>({kind:"bookmark",id:e,props:f}));G(e.length),h.inlines=[...e,...h.inlines]}if(u&&s!==void 0){let e=this.numbering.next(s,l);if(e){e.approximate&&this.sink.add("number-format-approximated",u.format);let n=La(this.base,[t.run,o?.run],m,u.run);u.run.underline===void 0&&(n.underline="none");let r=e.text,i=Qi(n.ascii);i&&(r=this.symbols(r,i),n.ascii=void 0,n.hAnsi=void 0);let a=u.picture===void 0?void 0:this.pictureBullet(u.picture);u.picture!==void 0&&!a&&(this.sink.add("picture-bullet-replaced"),r="\u2022"),a&&this.story.kind==="body"&&this.pager.places++,G(1+(r.length>>6)),h.label={text:r,...u.format==="bullet"||u.picture!==void 0?{bullet:!0}:{},props:ua(f.ascii?{ascii:f.ascii}:{},n),suffix:u.suffix,align:u.align,...a?{figure:a}:{},...(r.trim()!==""||a)&&!(d.outline!==void 0&&d.outline<9)&&!d.frame?{item:{list:s,level:l+1}}:{}}}}this.fieldReader.listNumbers(h.props,u?s:void 0,l),!(_!==h&&_.inlines.length===0&&!this.pkg.settings.markAfterBreak&&!this.fieldReader.awaited.has(_))&&this.out.push(_)}bullets=new Map;pictureBullet(e){if(this.bullets.has(e))return this.bullets.get(e);this.bullets.set(e,void 0);let t=this.numbering.picture(e),n=this.pkg.partOf("numbering"),r;if(t&&n!==void 0){let e=this.story;this.story=Wu(n,"box");let i=P(t,"pict"),a=P(t,"drawing");r=(i?Ic(i,this):a?jc(a,this):[])[0],this.story=e}return(r?.parts.length!==1||r.parts[0]?.kind!=="picture")&&(r=void 0),this.bullets.set(e,r),r}styleLevels=[];begun=new WeakSet;pushes=0;push(e){if(!this.current){y(1);return}if(e.kind==="text"&&!this.inRuby){let t=e.text;for(;this.characters+t.length>Ru;){let n=Math.max(1,Ru-this.characters),r=t.lastIndexOf(" ",n),i=r>n-200&&r>0?r+1:n;i>1&&(t.charCodeAt(i-1)&64512)==55296&&i--,this.place({...e,text:t.slice(0,i)}),t=t.slice(i),this.splitParagraph()}this.characters+=t.length,e=t===e.text?e:{...e,text:t}}!this.inRuby&&this.current.inlines.length>=3e3&&this.splitParagraph(),this.place(e)}characters=0;smallest=1/0;inFlow=!1;inLine=0;inLines=0;splitParagraph(){let e=this.current;this.sink.add("layout-approximated","a very long paragraph"),e.cut=!0,this.out.push(e),G(1),this.pager.load++;let t=this.characters;this.characters=0,this.top&&(this.pager.line(Math.max(this.inLine,this.pager.lineOf(e,this.smallest===1/0?10:this.smallest)),this.inLine+this.pager.paragraphGuess(t,e,this.pager.room)),this.pager.maybe(this.inLines-this.inLine),this.inLine=0,this.inLines=0,this.pager.isLong()&&this.pager.newPage(!1,!1,!0)),this.current={kind:"p",props:e.props,base:e.base,inlines:[],continued:!0}}place(e){if(this.current){if(G(1),this.pager.load+=e.kind==="math"?8:e.kind==="text"?1+(e.text.length>>(Ya(e.props)?2:6)):1,e.kind==="figure"&&this.story.kind==="body"&&this.pager.weigh(e.figure),this.current.inlines.push(e),e.kind==="figure"){let t=e.figure.place.kind;this.inFlow||=t==="inline"||t==="block",t==="inline"&&(this.inLine=Math.max(this.inLine,e.figure.height),this.inLines+=e.figure.height)}else if(e.kind!=="bookmark"&&e.kind!=="break"&&e.kind!=="columnBreak"){let{size:t=10,sizeComplex:n=t,rtl:r,complexScript:i}=e.props;this.smallest=Math.min(this.smallest,r||i?n:t)}if(e.kind!=="bookmark"&&(this.begun.add(this.current),this.pushes++),e.kind==="text"&&this.story.kind==="body"&&e.change?.kind!=="del"){y(e.text.length>>6);let t=e.text.length;for(let n=0;n<e.text.length;n++){let r=e.text.charCodeAt(n);(r===32||r===160)&&t--}this.pager.bodyCharacters+=t}}}breakPage(e){if(e&&(this.pager.sawStoredBreak=!0),this.story.kind!=="body")return;if(this.depth>0){this.rowBreak=!0;return}if(this.inRuby)return;let t=this.current;if(!t)return;let n=this.begun.has(t);if(!n&&e){!t.continued&&this.pager.pageHasContent()&&this.pager.newPage(!1,!0);return}t.cut=!0,this.out.push(t),this.pager.newPage(!1,e),G(1),this.characters=0,this.current={kind:"p",props:t.props,base:t.base,inlines:[],continued:!0},!n&&t.heading!==void 0&&(this.current.heading=t.heading,t.heading=void 0)}mark(e,t){let n={props:e};t.change&&(n.change=t.change);let r=t.link??this.story.link;return r&&(n.link=r),this.commentDepth>0&&(n.commented=!0),n}inline(e,t){this.wrapped++;for(let n of this.open(e))switch(n.name){case"r":this.run(n,t);break;case"hyperlink":this.inline(n,{...t,link:this.linkOf(n)});break;case"fldSimple":this.fieldReader.simpleField(n,t);break;case"sdt":{let e=P(n,"sdtContent");e&&this.inline(e,t);break}case"smartTag":case"customXml":case"dir":case"bdo":this.inline(n,t);break;case"ins":case"moveTo":case"del":case"moveFrom":this.inline(n,{...t,change:Nl(n)});break;case"bookmarkStart":{let e=L(n,"name");e!==void 0&&this.current&&this.push({kind:"bookmark",id:this.bookmarkId(e),props:this.current.base});break}case"subDoc":this.sink.add("embedded-document-left-out");break;case"commentRangeStart":this.commentDepth++;break;case"commentRangeEnd":this.commentDepth=Math.max(0,this.commentDepth-1);break;case"oMath":case"oMathPara":this.story.shown&&this.current&&!this.current.base.hidden?this.push({kind:"math",el:n,display:n.name==="oMathPara",...this.mark(this.current.base,t)}):this.fieldReader.passedOver();break;default:this.unread(n)}this.wrapped--}wrapped=0;bookmarkId(e,t=!0){let n=e.slice(0,256),r=this.bookmarkIds.get(n);return r===void 0&&this.bookmarkIds.set(n,r=this.bookmarkIds.size+1),t&&this.bookmarks.add(r),r}linkOf(e){let t=L(e,"anchor");if(t!==void 0)return{to:this.bookmarkId(t,!1)};let n=this.pkg.archive.relById(this.story.part,L(e,"id")??"");return n?.external&&n.target===""?(this.sink.add("link-dropped"),{}):n?.external?{outside:n.target.slice(0,500)}:{}}runPropsOf(e){let t=P(e,"rPr"),n=this.current;if(!t||t.children.length===0)return n.base;let r=wa(t,this.pkg.palette),i=r.style===void 0?void 0:this.styles.get(r.style);return i?.name?.toLowerCase()==="hyperlink"&&this.story.contents&&(i=void 0),La(this.base,[...this.styleLevels,i?.type==="character"||i?.type==="paragraph"?i.run:void 0],r)}symbols(e,t){let n=ea(e,t,!0);return n.includes("\u25AF")&&!e.includes("\u25AF")&&this.sink.add("symbols-unknown"),n}run(e,t){if(!this.current)return;let n=this.runPropsOf(e),r=Qi(n.ascii);if(r){let e=this.current.base,t=this.unsymboled.get(n);if(t?.base!==e){G(Object.keys(n).length>>3);let r={...n,ascii:e.ascii,hAnsi:e.hAnsi};this.unsymboled.set(n,t={base:e,look:r})}n=t.look}for(let i of this.open(e)){if(i.name==="fldChar"){this.fieldReader.fieldChar(i,n,t);continue}if(i.name==="instrText"||i.name==="delInstrText"){this.fieldReader.instructionText(i,n,t,r);continue}if(i.name==="lastRenderedPageBreak"){this.breakPage(!0);continue}if(!this.story.shown||n.hidden){this.fieldReader.passedOver(i,n,t);continue}let a=()=>this.mark(n,t);switch(i.name){case"t":case"delText":{let t=(L(i,"space")??L(e,"space"))==="preserve"?i.text:Hu(i.text),n=/[\r\n]/.test(t)?Vu(t):t;for(let e=0;e<=n.length;){let t=n.indexOf("	",e),i=n.slice(e,t<0?n.length:t);if(i&&this.push({kind:"text",text:r?this.symbols(i,r):i,...a()}),t<0)break;y(100),this.push({kind:"tab",...a()}),e=t+1}break}case"tab":this.push({kind:"tab",...a()});break;case"ptab":{let e=L(i,"alignment");this.push({kind:"ptab",align:e==="center"||e==="right"?e:"left",leader:ca(L(i,"leader")),fromMargin:L(i,"relativeTo")!=="indent",...a()});break}case"br":{let e=L(i,"type");if(e==="page")this.breakPage(!1);else if(e==="column")this.top&&this.pager.page.parts[this.pager.page.parts.length-1].columns.count===1?this.breakPage(!1):this.push({kind:"columnBreak",...a()});else{let e=L(i,"clear");this.push({kind:"break",...e==="left"||e==="right"?{clear:e}:e==="all"?{clear:"both"}:{},...a()})}break}case"cr":this.push({kind:"break",...a()});break;case"noBreakHyphen":this.push({kind:"text",text:"\u2011",...a()});break;case"softHyphen":this.push({kind:"text",text:"\u00AD",...a()});break;case"sym":case"symEx":{let e=L(i,"char"),t=e!==void 0&&/^[0-9a-fA-F]{1,8}$/.test(e)?parseInt(e,16):0,n=Qi(L(i,"font")),r=t>=32&&t<=1114111&&t>>11!=27&&(t&65534)!=65534,o=r?String.fromCodePoint(t):"\u25AF";r||this.sink.add("symbols-unknown"),this.push({kind:"text",text:n?this.symbols(o,n):o,...a()});break}case"footnoteReference":this.noteReader.noteReference("footnote",i,a());break;case"endnoteReference":this.noteReader.noteReference("endnote",i,a());break;case"footnoteRef":case"endnoteRef":this.push({kind:"noteMark",...a()});break;case"commentReference":this.noteReader.commentReference(i,a());break;case"pgNum":this.push({kind:"pageField",field:"PAGE",...a()});break;case"drawing":for(let e of jc(i,this))this.push({kind:"figure",figure:e,...a()});break;case"pict":case"object":for(let e of Ic(i,this))this.push({kind:"figure",figure:e,...a()});break;case"ruby":this.ruby(i,t,a());break;case"contentPart":this.sink.add("object-unsupported","ink");break;default:this.unread(i)}}}ruby(e,t,n){let r=n=>{let r=P(e,n),i=this.current;this.current={...i,inlines:[]},r&&this.inline(r,t);let a=this.current.inlines;return this.current=i,a},i=this.inRuby,a=this.rubies>0;this.inRuby=!0,this.rubies++;let o=r("rubyBase"),s=r("rt");this.rubies--,this.inRuby=i;let c=e=>{let t=0;for(let n of e)t+=n.kind==="text"?n.text.length:1;return t>64};if(!a&&!c(o)&&!c(s)){this.push({kind:"ruby",base:o,text:s,...n});return}this.sink.add("ruby-flattened");let l=e=>({kind:"text",text:e,...n});for(let e of[...o,l(" ("),...s,l(")")])this.push(e)}inRuby=!1;rubies=0;styledTop=new Set};function Vu(e){let t=new Uint16Array(8192),n="",r=0;for(let i=0;i<e.length;i++){let a=e.charCodeAt(i);(a!==13||e.charCodeAt(i+1)!==10)&&(t[r++]=a===13||a===10?32:a,(r===t.length||i===e.length-1)&&(p(r),n+=String.fromCharCode(...t.subarray(0,r)),r=0))}return n}function Hu(e){let t=t=>` 	\r
`.includes(e[t]??"x"),[n,r]=[0,e.length];for(;n<r&&t(n);)n++;for(;r>n&&t(r-1);)r--;return e.slice(n,r)}function Uu(e){for(let t of F(e,"anchor")){let e=P(t,"positionV"),n=e&&(P(e,"posOffset")??I(e,"posOffset"));if(ne(t,"behindDoc")===!0&&n?.text.trim().startsWith("-"))return!0}for(let t of F(e,"pict"))for(let e of N(t)){let t=L(e,"style")??"";if(/(?:^|;)\s*z-index\s*:\s*-/.test(t)&&/(?:^|;)\s*(?:margin-)?top\s*:\s*-/.test(t))return!0}return!1}function Wu(e,t){return{part:e,kind:t,fields:[],overflow:0,shown:!0,link:void 0,contents:!1}}function Gu(e,t=0){let n=e&15;return n>=1&&n<=4&&t>1||n===0||n===6?{kind:"solid"}:n===5?{kind:"null"}:n<=4?{kind:"dash",dash:n}:{kind:"other"}}const Ku=[[],[18,6],[3,3],[9,6,3,6],[9,3,3,3,3,3]],qu=[[],[3,1],[1,1],[3,1,1,1],[3,1,1,1,1,1]],Ju=4e3,Yu=(e,t=-1)=>e===0?"solid":e===1?"null":e===2&&t>=0&&t<=5?"hatch":"other",Xu="M0 0 L8 8 M-1 7 L1 9 M7 -1 L9 1",Zu="M0 8 L8 0 M-1 1 L1 -1 M7 9 L9 7",Qu=["M0 4 L8 4","M4 0 L4 8",Xu,Zu,"M0 4 L8 4 M4 0 L4 8",Xu+" "+Zu],$u={kind:"solid",width:0,cosmetic:!0,color:"#000000",cap:"round",join:"round"},ed={kind:"solid",color:"#ffffff"},td={height:0,escapement:0,weight:400,italic:!1,underline:!1,strikeOut:!1,charset:0,face:""};function nd(e,t){return"#"+(e[t]<<16|e[t+1]<<8|e[t+2]).toString(16).padStart(6,"0")}var rd=class{slots=[];freed=[];get(e){return this.slots[e]}set(e,t){return e>=4096?!1:(this.slots[e]=t,!0)}add(e){return this.set(this.freed.length?this.popLowest():this.slots.length,e)}delete(e){if(this.slots[e]===void 0)return;this.slots[e]=void 0;let t=this.freed,n=t.push(e)-1;for(;n>0;){let e=n-1>>1;if(t[e]<=t[n])break;[t[e],t[n]]=[t[n],t[e]],n=e}}popLowest(){let e=this.freed,t=e[0],n=e.pop();if(e.length){e[0]=n;for(let t=0;;){let n=t;for(let r of[2*t+1,2*t+2])r<e.length&&e[r]<e[n]&&(n=r);if(n===t)break;[e[n],e[t]]=[e[t],e[n]],t=n}}return t}};function id(e){return e>-1e7?e<1e7?Math.round(e*100)/100:1e7:e<=-1e7?-1e7:0}function ad(e){let t=e.match(/-?[\d.]+/g)??[],n=1/0,r=-1/0,i=1/0,a=-1/0;for(let e=0;e+1<t.length;e+=2){let o=Number(t[e]),s=Number(t[e+1]);n=Math.min(n,o),r=Math.max(r,o),i=Math.min(i,s),a=Math.max(a,s)}return t.length>1?(r-n)*(a-i):0}function od(e,t){let[n,r]=sd(e,t);return n+r}function sd(e,t){let n=(e,t,n)=>Math.min(Math.max(e,t),n),r=0,i=0,a=0,o=0,s=0,c=0,l=!0,u;for(let[d]of e.matchAll(/[MZ]|-?[\d.]+/g))if(d==="M")l=!0;else if(d==="Z")r+=Math.abs(s-a),i+=Math.abs(c-o),a=s,o=c;else if(u===void 0)u=t?n(Number(d),t[0],t[2]):Number(d);else{let e=t?n(Number(d),t[1],t[3]):Number(d);l?(s=u,c=e,l=!1):(r+=Math.abs(u-a),i+=Math.abs(e-o)),a=u,o=e,u=void 0}return[r,i]}const Z={HEADER:1,POLYBEZIER:2,POLYGON:3,POLYLINE:4,POLYBEZIERTO:5,POLYLINETO:6,POLYPOLYLINE:7,POLYPOLYGON:8,SETWINDOWEXTEX:9,SETWINDOWORGEX:10,SETVIEWPORTEXTEX:11,SETVIEWPORTORGEX:12,SETBRUSHORGEX:13,EOF:14,SETPIXELV:15,SETMAPPERFLAGS:16,SETMAPMODE:17,SETBKMODE:18,SETPOLYFILLMODE:19,SETROP2:20,SETSTRETCHBLTMODE:21,SETTEXTALIGN:22,SETCOLORADJUSTMENT:23,SETTEXTCOLOR:24,SETBKCOLOR:25,OFFSETCLIPRGN:26,MOVETOEX:27,SETMETARGN:28,EXCLUDECLIPRECT:29,INTERSECTCLIPRECT:30,SCALEVIEWPORTEXTEX:31,SCALEWINDOWEXTEX:32,SAVEDC:33,RESTOREDC:34,SETWORLDTRANSFORM:35,MODIFYWORLDTRANSFORM:36,SELECTOBJECT:37,CREATEPEN:38,CREATEBRUSHINDIRECT:39,DELETEOBJECT:40,ANGLEARC:41,ELLIPSE:42,RECTANGLE:43,ROUNDRECT:44,ARC:45,CHORD:46,PIE:47,SELECTPALETTE:48,CREATEPALETTE:49,SETPALETTEENTRIES:50,RESIZEPALETTE:51,REALIZEPALETTE:52,LINETO:54,ARCTO:55,POLYDRAW:56,SETARCDIRECTION:57,SETMITERLIMIT:58,BEGINPATH:59,ENDPATH:60,CLOSEFIGURE:61,FILLPATH:62,STROKEANDFILLPATH:63,STROKEPATH:64,FLATTENPATH:65,SELECTCLIPPATH:67,ABORTPATH:68,COMMENT:70,EXTSELECTCLIPRGN:75,BITBLT:76,STRETCHBLT:77,STRETCHDIBITS:81,EXTCREATEFONTINDIRECTW:82,EXTTEXTOUTA:83,EXTTEXTOUTW:84,POLYBEZIER16:85,POLYGON16:86,POLYLINE16:87,POLYBEZIERTO16:88,POLYLINETO16:89,POLYPOLYLINE16:90,POLYPOLYGON16:91,POLYDRAW16:92,CREATEMONOBRUSH:93,CREATEDIBPATTERNBRUSHPT:94,EXTCREATEPEN:95,SETICMMODE:98,CREATECOLORSPACE:99,SETCOLORSPACE:100,DELETECOLORSPACE:101,FORCEUFIMAPPING:109,SMALLTEXTOUT:108,ALPHABLEND:114,SETLAYOUT:115,TRANSPARENTBLT:116,GRADIENTFILL:118,SETLINKEDUFIS:119,SETTEXTJUSTIFICATION:120,COLORMATCHTOTARGETW:121,CREATECOLORSPACEW:122},cd=e=>({brush:{kind:"solid",color:e}}),ld={0:{brush:ed},1:cd("#c0c0c0"),2:cd("#808080"),3:cd("#404040"),4:cd("#000000"),5:{brush:{kind:"null",color:"#000000"}},6:{pen:{...$u,color:"#ffffff"}},7:{pen:$u},8:{pen:{...$u,kind:"null"}},10:{font:td},11:{font:td},12:{font:td},13:{font:td},14:{font:td},15:{other:!0},16:{font:td},17:{font:td},18:{brush:{kind:"other",color:"#000000"}},19:{pen:{...$u,kind:"other"}}};let ud;function dd(e){ud??=Uint8Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=>e.charCodeAt(0));let t=ud,n=e.length,r=new Uint8Array(Math.ceil(n/3)*4),i=0,a=0;for(;a+2<n;){let o=Math.min(n-2,a+786432);for(p(o-a);a<o;a+=3){let n=e[a]<<16|e[a+1]<<8|e[a+2];r[i++]=t[n>>18],r[i++]=t[n>>12&63],r[i++]=t[n>>6&63],r[i++]=t[n&63]}}if(a<n){let o=e[a]<<16|(e[a+1]??0)<<8;r[i++]=t[o>>18],r[i++]=t[o>>12&63],r[i++]=a+1<n?t[o>>6&63]:61,r[i++]=61}return new TextDecoder("latin1").decode(r)}function fd(e,t){return"data:"+e+";base64,"+dd(t)}function pd(e,t,n,r=!1){if(e.length<40)return"damaged";let a=new DataView(e.buffer,e.byteOffset,e.byteLength),o=a.getUint32(0,!0),s=a.getInt32(4,!0),c=a.getInt32(8,!0),l=Math.abs(c),u=a.getUint16(14,!0),d=a.getUint32(16,!0);if(o<40||o>124||o>e.length)return"damaged";if(![1,4,8,16,24,32].includes(u))return"unsupported";let f=d===3&&(u===16||u===32);if(d!==0&&!f||r&&(u!==32||f))return"unsupported";if(s<1||l<1)return"damaged";if(s*l>12e6)return"too large";let m=a.getUint32(32,!0),h=u<=8?Math.min(m||1<<u,1<<u):Math.min(m,256),g=o+(f&&o===40?12:0),_=s*u+31>>5<<2;if(g+h*4>e.length||f&&e.length<52)return"damaged";let v=t??e.subarray(g+h*4);if(_*l>v.length)return"damaged";if(!i(n,"transcodePixels",s*l))return"over budget";let y=new DataView(v.buffer,v.byteOffset,v.byteLength),b=f?[a.getUint32(40,!0),a.getUint32(44,!0),a.getUint32(48,!0)]:[31744,992,31],x=(e,t)=>{if(!t)return 0;let n=31-Math.clz32(t&-t);return Math.round(((e&t)>>>n)*255/(t>>>n))},S=new Uint8Array(s*l*4);for(let t=0;t<l;t++){let n=(c>0?l-1-t:t)*_;for(let i=0;i<s;i++){i&65535||p(Math.min(s-i,65536));let a=(t*s+i)*4;if(S[a+3]=255,u===16||f){let e=u===16?y.getUint16(n+i*2,!0):y.getUint32(n+i*4,!0);S[a]=x(e,b[0]),S[a+1]=x(e,b[1]),S[a+2]=x(e,b[2])}else if(u>=24){let e=n+i*(u>>3);if(S[a]=v[e+2],S[a+1]=v[e+1],S[a+2]=v[e],r){let t=v[e+3];S[a+3]=t;for(let e=0;e<3&&t>0&&t<255;e++)S[a+e]=Math.min(255,Math.round(S[a+e]*255/t))}}else{let t=v[n+(i*u>>3)]>>8-u-(i*u&7)&(1<<u)-1,r=g+Math.min(t,h-1)*4;S[a]=e[r+2],S[a+1]=e[r+1],S[a+2]=e[r]}}}return{rgba:S,w:s,h:l,bottomUp:c>0}}function md(e,[t,n,r,i],a){if(r<1||i<1)return;let o=a&&e.bottomUp?e.h-n-i:n,s=Math.max(t,0),c=Math.max(o,0),l=Math.min(t+r,e.w),u=Math.min(o+i,e.h);if(s>=l||c>=u)return;let d=[(s-t)/r,(c-o)/i,(l-s)/r,(u-c)/i];if(l-s===e.w&&u-c===e.h)return{bitmap:e,kept:d};let f=new Uint8Array((l-s)*(u-c)*4);for(let t=c;t<u;t++){p(l-s);let n=(t*e.w+s)*4;f.set(e.rgba.subarray(n,n+(l-s)*4),(t-c)*(l-s)*4)}return{bitmap:{rgba:f,w:l-s,h:u-c,bottomUp:e.bottomUp},kept:d}}const hd=4194304;var gd=class{objects=new rd;dc={mapMode:1,winX:0,winY:0,winW:1,winH:1,viewX:0,viewY:0,viewW:1,viewH:1,world:[1,0,0,1,0,0],pen:$u,brush:ed,font:td,textColor:"#000000",bkColor:"#ffffff",bkMode:2,textAlign:0,polyFill:1,rop2:13,clockwise:!1,miterLimit:10,x:0,y:0};refused;unitsPerMm=0;originX=0;originY=0;extent=1;left=0;top=0;area=1;pixelSize=0;stack=[];out=[];size=0;work=0;maxOutput;drawn=!1;fills=0;layers=0;dashes=0;hairDashes=[0,0,0];run=[0,0,0];spans=0;ids=0;openClip;map;pageX=1;pageY=1;pending;budgets;constructor(e,t){this.budgets=e,y((t>>6)+1,e),this.maxOutput=Math.min(hd,e.transcodeSvgBytes)}refuse(e){this.refused??=e}record(){return this.charge(1)}charge(e){return this.work+=e,this.work>2e6?this.refuse("too large"):i(this.budgets,"transcodeWork",e)||this.refuse("over budget"),this.refused===void 0}chargeShaded(e){let t=Math.min(1,Math.max(.02,e/this.area));return this.charge(Math.ceil(2e4*t))}remap(){this.map=void 0}save(){if(this.stack.length>=64)return this.refuse("too large");this.stack.push({...this.dc})}restore(e){let t=e<0?this.stack.length+e:e-1,n=t>=0?this.stack[t]:void 0;if(!n)return this.refuse("damaged");this.dc=n,this.stack.length=t,this.remap()}select(e){if(!e)return this.refuse("damaged");"pen"in e?this.dc.pen=e.pen:"brush"in e?this.dc.brush=e.brush:"font"in e&&(this.dc.font=e.font)}stored(e){e||this.refuse("too large")}matrix(){if(this.map)return this.map;let e=this.dc,t=1,n=1;if(e.mapMode===7||e.mapMode===8){if((!e.winW||!e.winH||!e.viewW||!e.viewH)&&this.refuse("damaged"),t=e.viewW/(e.winW||1),n=e.viewH/(e.winH||1),e.mapMode===7){let e=Math.min(Math.abs(t),Math.abs(n));t=Math.sign(t)*e,n=Math.sign(n)*e}}else if(e.mapMode!==1){let r=[.1,.01,.254,.0254,25.4/1440][e.mapMode-2];(!r||!this.unitsPerMm)&&this.refuse("unsupported"),t=(r??1)*(this.unitsPerMm||1),n=-t}this.pageX=t,this.pageY=n;let[r,i,a,o,s,c]=e.world;return this.map=[r*t,i*n,a*t,o*n,(s-e.winX)*t+e.viewX-this.originX,(c-e.winY)*n+e.viewY-this.originY],this.map}X(e,t){let n=this.matrix();return id(n[0]*e+n[2]*t+n[4])}Y(e,t){let n=this.matrix();return id(n[1]*e+n[3]*t+n[5])}P(e,t){return this.X(e,t)+" "+this.Y(e,t)}scale(){let e=this.matrix(),t=Math.sqrt(Math.abs(e[0]*e[3]-e[1]*e[2]));return Number.isFinite(t)&&t>0?Math.min(t,1e7):1}room(e){return e<=this.maxOutput-this.size||(this.refuse(this.maxOutput<hd?"over budget":"too large"),!1)}raw(e){this.room(e.length)&&(this.size+=e.length,this.out.push(e))}closeClipGroup(){this.openClip&&this.raw("</g>"),this.openClip=void 0}share(e){return Math.min(1,e/this.area)}follow(e){let[t,n]=sd(e);return this.run[0]+=t/this.extent,this.run[1]+=n/this.extent,[t,n]}emit(e,t=1,n=1,r=4){if(this.pending)return this.refuse("unsupported");if(!this.charge(200))return;let i=this.dc.clip;if(i?.id!==this.openClip){if(this.closeClipGroup(),i&&!this.charge(i.work))return;i&&this.raw('<g clip-path="url(#'+i.id+')">'),this.openClip=i?.id}this.raw(e),this.fills+=t,this.layers+=n,this.spans+=r,this.drawn=!0}get hasDrawn(){return this.drawn}finish(e,t,n,r){if(this.pending&&this.refuse("unsupported"),this.closeClipGroup(),this.refused)return{refused:this.refused};if(!(n>0&&r>0))return{refused:"damaged"};if(!i(this.budgets,"transcodeSvgBytes",this.size))return{refused:"over budget"};let a=new TextEncoder().encode('<svg xmlns="http://www.w3.org/2000/svg" viewBox="'+[e,t,n,r].map(id).join(" ")+'" preserveAspectRatio="none">'+this.out.join("")+"</svg>"),{fills:o,layers:s,dashes:c,hairDashes:l}=this,u=[n/Math.max(n,r),r/Math.max(n,r)],[d,f]=[this.run,[this.spans,0]];return{bytes:a,fills:o,layers:s,dashes:c,hairDashes:l,frame:u,run:d,spans:f}}},_d=class extends gd{bracket;path="";figureOpen=!1;figureX=0;figureY=0;hatches=new Map;mixed(e){let t=this.dc.rop2;return t===1?"#000000":t===16?"#ffffff":(t!==13&&this.refuse("unsupported"),e)}brushPaint(e,t){let n=this.dc.brush;if(n.kind==="null")return;if(n.kind==="other"&&this.refuse("unsupported"),n.kind!=="hatch")return e;if(!this.chargeShaded(ad(t)))return;let r=this.dc.bkMode===1?"":this.dc.bkColor,i=n.hatch+e+r,a=this.hatches.get(i);return a||(a="h"+ ++this.ids,this.hatches.set(i,a),this.raw('<pattern id="'+a+'" patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="scale('+id(Math.max(this.pixelSize||this.extent/800,this.extent/Ju,.01))+')">'+(r?'<path d="M0 0 L8 0 8 8 0 8 Z" fill="'+r+'"/>':"")+'<path d="'+Qu[n.hatch??0]+'" fill="none" stroke="'+e+'" stroke-width="1"/></pattern>')),"url(#"+a+")"}fillAttrs(e){let t=this.brushPaint(this.mixed(this.dc.brush.color),e);return t?' fill="'+t+'"'+(this.dc.polyFill===1?' fill-rule="evenodd"':""):' fill="none"'}strokeAttrs(e){let t=this.dc.pen;if(t.kind==="null")return' stroke="none"';t.kind==="other"&&this.refuse("unsupported");let n=t.cosmetic?0:t.width*this.scale(),r=n<this.extent/1e3||id(n)===0,a=r?1:id(n),o=' stroke="'+this.mixed(t.color)+'" stroke-width="'+a+'"';if(r&&(o+=' vector-effect="non-scaling-stroke"'),t.kind==="dash"){let n=(r?Ku:qu)[t.dash??1],s=r?1:a,c=n.reduce((e,t)=>e+t,0)*s*(r?this.extent/Ju:1)/(n.length/2),[l,u]=sd(e),d=(l+u)/c;i(this.budgets,"dashes",d)||this.refuse("over budget"),r?(this.hairDashes[0]+=l/c,this.hairDashes[1]+=u/c):this.dashes+=d,o+=' stroke-dasharray="'+n.map(e=>id(e*s)).join(" ")+'"'}t.join==="miter"&&(o+=' stroke-miterlimit="'+this.dc.miterLimit+'"');let s=r&&t.kind==="dash"?"butt":t.cap;return o+' stroke-linejoin="'+t.join+'" stroke-linecap="'+s+'"'}paint(e,t,n){let{brush:r,pen:i,rop2:a}=this.dc,o=t&&r.kind!=="null"||n&&i.kind!=="null";if(a===11||o&&!this.room(e.length))return;let s=t?this.fillAttrs(e):' fill="none"';p(e.length);let c=n?this.strokeAttrs(e):' stroke="none"';if(p(e.length),s===' fill="none"'&&c===' stroke="none"')return;let l=s===' fill="none"'&&c.includes("non-scaling-stroke");if(this.charge(this.spanWork(e,l?50:500))){let t=c!==' stroke="none"'&&!c.includes("non-scaling-stroke"),{miterLimit:n}=this.dc,r=i.width*this.scale();p(e.length);let[a,o]=this.follow(e);p(e.length);let l=(a+o+e.length/4*(i.join==="miter"?n:1)*r)*r,u=1;for(let t=e.indexOf(" ");t>=0;t=e.indexOf(" ",t+1))u++;this.emit('<path d="'+e+'"'+s+c+"/>",(s===' fill="none"'?0:Math.min(1,ad(e)/this.area))+(t?Math.min(1,l/this.area):0),(s===' fill="none"'?0:1)+ +!!t,u/2)}}spanWork(e,t=500){let n=this.extent,r=od(e,[this.left-n,this.top-n,this.left+2*n,this.top+2*n]);return Math.ceil(t*r/n)}figure(e,t,n=!1){let r=Math.ceil(e.length/4);if(!(!n&&!this.charge(r*4))){if(!this.bracket)return this.paint(e,t,!0);this.room(e.length+1)&&(this.size+=e.length+1,this.bracket.push(e))}}lead(){return this.bracket&&this.figureOpen?"":(this.figureOpen=!0,this.figureX=this.dc.x,this.figureY=this.dc.y,"M"+this.P(this.dc.x,this.dc.y)+" ")}rectPath(e,t,n,r){return"M"+this.P(e,t)+" L"+this.P(n,t)+" "+this.P(n,r)+" "+this.P(e,r)+" Z"}beginPath(){this.bracket=[],this.figureOpen=!1}endPath(){if(!this.bracket)return this.refuse("damaged");this.path=this.bracket.join(" "),this.bracket=void 0}closeFigure(){this.bracket?.length&&this.room(2)&&(this.size+=2,this.bracket.push("Z")),this.figureOpen&&(this.dc.x=this.figureX,this.dc.y=this.figureY),this.figureOpen=!1}abortPath(){this.bracket=void 0,this.path=""}takePath(){let e=this.path;return this.path="",this.size-=e?e.length+1:0,e}paintPath(e,t){let n=this.takePath();n&&this.paint(n,e,t)}setClip(e,t,n){let r=n?this.dc.clip:void 0,i=(r?.depth??0)+1;if(i>16)return this.refuse("too large");if(!this.charge(Math.ceil((e.length+64)/4)))return;let a="c"+ ++this.ids;this.closeClipGroup(),this.raw('<clipPath id="'+a+'"'+(r?' clip-path="url(#'+r.id+')"':"")+'><path d="'+e+'"'+(t?' clip-rule="evenodd"':"")+"/></clipPath>"),this.dc.clip={id:a,depth:i,work:(r?.work??0)+Math.ceil(e.length/4)*4+this.spanWork(e)}}intersectClipRect(e,t,n,r){this.setClip(this.rectPath(e,t,n,r),!1,!0)}excludeClipRect(e,t,n,r){this.setClip("M-10000000 -10000000 L10000000 -10000000 10000000 10000000 -10000000 10000000 Z "+this.rectPath(e,t,n,r),!0,!0)}clipToPath(e){if(e!==1&&e!==5)return this.refuse("unsupported");let t=this.takePath();if(!t)return this.refuse("damaged");this.setClip(t,this.dc.polyFill===1,e===1)}clipToRects(e,t,n,r){if(e!==1&&e!==5)return this.refuse("unsupported");let i=this.matrix();if(i[0]!==1||i[1]||i[2]||i[3]!==1||i[4]!==-this.originX||i[5]!==-this.originY)return this.refuse("unsupported");if(!this.room(r*4*4)||!this.charge(r*4*4))return;let a=[];for(let e=0,i=n;e<r;e++,i+=16)a.push(this.rectPath(t.getInt32(i,!0),t.getInt32(i+4,!0),t.getInt32(i+8,!0),t.getInt32(i+12,!0)));this.setClip(a.join(" "),!1,e===1)}resetClip(){this.dc.clip=void 0}get clipped(){return this.dc.clip!==void 0}},vd=class extends _d{moveTo(e,t){this.dc.x=e,this.dc.y=t,this.figureOpen=!1}lineTo(e,t){this.figure(this.lead()+"L"+this.P(e,t),!1),this.dc.x=e,this.dc.y=t}points(e,t,n,r){if(!(!this.room(n*4)||!this.charge(n*4)))return this.pointList(e,t,n,r)}pointList(e,t,n,r){let[i,a,o,s,c,l]=this.matrix(),u=new Float64Array(n*2);for(let d=0,f=t;d<n;d++,f+=r?4:8){let t=r?e.getInt16(f,!0):e.getInt32(f,!0),n=r?e.getInt16(f+2,!0):e.getInt32(f+4,!0);u[d*2]=id(i*t+o*n+c),u[d*2+1]=id(a*t+s*n+l)}return u.join(" ")}poly(e,t,n,r,i,a){if(i<1)return;if(e==="bezier"&&(i-+!t)%3!=0)return this.refuse("damaged");let o=this.points(n,r,i,a);if(o===void 0)return;let s=e==="bezier"?"C":"L",c;if(c=t?this.lead()+s+o:e==="bezier"&&i>1?"M"+o.replace(/^(\S+ \S+) /,"$1 C"):"M"+o,this.figure(e==="polygon"?c+" Z":c,e==="polygon",!0),t){let e=r+(i-1)*(a?4:8);this.dc.x=a?n.getInt16(e,!0):n.getInt32(e,!0),this.dc.y=a?n.getInt16(e+2,!0):n.getInt32(e+4,!0)}else this.figureOpen=!1}polyDraw(e,t,n,r,i){if(n<1||!this.room(n*5)||!this.charge(n*4))return;let a=r?4:8,o=n=>r?e.getInt16(t+n*a,!0):e.getInt32(t+n*a,!0),s=n=>r?e.getInt16(t+n*a+2,!0):e.getInt32(t+n*a+4,!0),c=t=>e.getUint8(i+t)&-2,l=[c(0)===6?"":this.lead().trimEnd()],u=[this.figureX,this.figureY],d=u;for(let t=0;t<n;t++){if(c(t)===6)u=[o(t),s(t)],l.push("M"+this.P(o(t),s(t)));else if(c(t)===2)l.push("L"+this.P(o(t),s(t)));else if(c(t)===4&&t+2<n&&c(t+1)===4&&c(t+2)===4)l.push("C"+this.P(o(t),s(t))+" "+this.P(o(t+1),s(t+1))+" "+this.P(o(t+2),s(t+2))),t+=2;else return this.refuse("damaged");d=[o(t),s(t)],e.getUint8(i+t)&1&&(l.push("Z"),d=u)}this.figureOpen=!0,this.figure(l.filter(Boolean).join(" "),!1,!0),[this.figureX,this.figureY]=u,[this.dc.x,this.dc.y]=d}polyPoly(e,t,n,r,i){let a=t.reduce((e,t)=>e+t,0);if(!this.room(a*4)||!this.charge(a*4))return;let o=[];for(let a of t)a<1||(o.push("M"+this.pointList(n,r,a,i)+(e?" Z":"")),r+=a*(i?4:8));o.length&&this.figure(o.join(" "),e,!0),this.figureOpen=!1}rect(e,t,n,r){this.figure(this.rectPath(e,t,n,r),!0),this.figureOpen=!1}curves(e,t,n,r,i,a){let o=Math.max(1,Math.ceil(Math.abs(a)/(Math.PI/2)-1e-9)),s=a/o,c=4/3*Math.tan(s/4),l="C";for(let a=0;a<o;a++){let o=i+a*s,u=o+s;l+=this.P(e+n*(Math.cos(o)-c*Math.sin(o)),t+r*(Math.sin(o)+c*Math.cos(o)))+" "+this.P(e+n*(Math.cos(u)+c*Math.sin(u)),t+r*(Math.sin(u)-c*Math.cos(u)))+" "+this.P(e+n*Math.cos(u),t+r*Math.sin(u))+" "}return l}ellipse(e,t,n,r){let i=(e+n)/2,a=(t+r)/2,o=(n-e)/2,s=(r-t)/2;this.figure("M"+this.P(i+o,a)+" "+this.curves(i,a,o,s,0,2*Math.PI)+"Z",!0),this.figureOpen=!1}roundRect(e,t,n,r,i,a){let o=Math.min(e,n),s=Math.max(e,n),c=Math.min(t,r),l=Math.max(t,r),u=Math.min(Math.abs(i),s-o)/2,d=Math.min(Math.abs(a),l-c)/2;if(!u||!d)return this.rect(o,c,s,l);let f=Math.PI/2;this.figure("M"+this.P(o+u,c)+" L"+this.P(s-u,c)+" "+this.curves(s-u,c+d,u,d,-f,f)+"L"+this.P(s,l-d)+" "+this.curves(s-u,l-d,u,d,0,f)+"L"+this.P(o+u,l)+" "+this.curves(o+u,l-d,u,d,f,f)+"L"+this.P(o,c+d)+" "+this.curves(o+u,c+d,u,d,2*f,f)+"Z",!0),this.figureOpen=!1}arc(e,t,n,r,i,a,o,s,c){let l=(t+r)/2,u=(n+i)/2,d=Math.abs(r-t)/2,f=Math.abs(i-n)/2;if(!d||!f)return;let p=Math.atan2((o-u)/f,(a-l)/d),m=Math.atan2((c-u)/f,(s-l)/d),h=this.dc;this.matrix();let g=(h.clockwise?1:-1)*(this.pageX*this.pageY<0?-1:1),_=2*Math.PI,v=g*(((m-p)*g%_+_)%_||_),y=this.P(l+d*Math.cos(p),u+f*Math.sin(p)),b=(e==="arcTo"?this.lead()+"L":"M")+y+" "+this.curves(l,u,d,f,p,v);e==="pie"?this.figure(b+"L"+this.P(l,u)+" Z",!0):e==="chord"?this.figure(b+"Z",!0):this.figure(b.trimEnd(),!1),e==="arcTo"?(h.x=l+d*Math.cos(m),h.y=u+f*Math.sin(m)):this.figureOpen=!1}angleArc(e,t,n,r,i){this.matrix();let a=this.pageX*this.pageY<0?1:-1,o=a*r*Math.PI/180,s=a*Math.max(-360,Math.min(360,i))*Math.PI/180,c=this.lead()+"L"+this.P(e+n*Math.cos(o),t+n*Math.sin(o));this.figure(s?c+" "+this.curves(e,t,n,n,o,s).trimEnd():c,!1),this.dc.x=e+n*Math.cos(o+s),this.dc.y=t+n*Math.sin(o+s)}gradientRect(e,t,n,r,i,a,o){let s=this.matrix();if((s[1]||s[2])&&(s[0]||s[3]))return this.refuse("unsupported");let c=this.rectPath(e,t,r,i);if(!this.chargeShaded(ad(c)))return;let l="g"+ ++this.ids,[u,d]=o?[e,i]:[r,t];this.follow(c),this.emit('<linearGradient id="'+l+'" gradientUnits="userSpaceOnUse" x1="'+this.X(e,t)+'" y1="'+this.Y(e,t)+'" x2="'+this.X(u,d)+'" y2="'+this.Y(u,d)+'"><stop offset="0" stop-color="'+n+'"/><stop offset="1" stop-color="'+a+'"/></linearGradient><path d="'+c+'" fill="url(#'+l+')"/>',6*this.share(ad(c)),6)}pixel(e,t,n){let r=this.X(e,t),i=this.Y(e,t),[a,o]=[id(r+1),id(i+1)],s=`M${r} ${i} L${a} ${i} ${a} ${o} ${r} ${o} Z`;this.follow(s),this.emit('<path d="'+s+'" fill="'+n+'"/>',this.share(1))}};const yd={0:"windows-1252",1:"windows-1252",77:"macintosh",128:"shift_jis",129:"euc-kr",134:"gbk",136:"big5",161:"windows-1253",162:"windows-1254",163:"windows-1258",177:"windows-1255",178:"windows-1256",186:"windows-1257",204:"windows-1251",222:"windows-874",238:"windows-1250"},bd={h:"\u210F",l:"\u2113",m:"\u2213",o:"\u2218",K:"\u2026",L:"\u22EF",M:"\u22EE"," ":" "};function xd(e){let t=e;for(let[e,n]of Sd){let r=t.length;t=t.replace(e,n),r>65535&&p(r)}return t}const Sd=[[/[\u0000-\u0008\u000b\u000c\u000e-\u001f\ufffe\uffff]/g,""],[/[\ud800-\udbff](?![\udc00-\udfff])|(?<![\ud800-\udbff])[\udc00-\udfff]/g,""],[/&/g,"&amp;"],[/</g,"&lt;"],[/>/g,"&gt;"],[/"/g,"&quot;"]];var Cd=Uint8Array,wd=Uint16Array,Td=Int32Array,Ed=new Cd([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Dd=new Cd([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Od=new Cd([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kd=function(e,t){for(var n=new wd(31),r=0;r<31;++r)n[r]=t+=1<<e[r-1];for(var i=new Td(n[30]),r=1;r<30;++r)for(var a=n[r];a<n[r+1];++a)i[a]=a-n[r]<<5|r;return{b:n,r:i}},Ad=kd(Ed,2),jd=Ad.b,Md=Ad.r;jd[28]=258,Md[258]=28;var Nd=kd(Dd,0);Nd.b;for(var Pd=Nd.r,Fd=new wd(32768),Id=0;Id<32768;++Id){var Ld=(Id&43690)>>1|(Id&21845)<<1;Ld=(Ld&52428)>>2|(Ld&13107)<<2,Ld=(Ld&61680)>>4|(Ld&3855)<<4,Fd[Id]=((Ld&65280)>>8|(Ld&255)<<8)>>1}for(var Rd=(function(e,t,n){for(var r=e.length,i=0,a=new wd(t);i<r;++i)e[i]&&++a[e[i]-1];var o=new wd(t);for(i=1;i<t;++i)o[i]=o[i-1]+a[i-1]<<1;var s;if(n){s=new wd(1<<t);var c=15-t;for(i=0;i<r;++i)if(e[i])for(var l=i<<4|e[i],u=t-e[i],d=o[e[i]-1]++<<u,f=d|(1<<u)-1;d<=f;++d)s[Fd[d]>>c]=l}else for(s=new wd(r),i=0;i<r;++i)e[i]&&(s[i]=Fd[o[e[i]-1]++]>>15-e[i]);return s}),zd=new Cd(288),Id=0;Id<144;++Id)zd[Id]=8;for(var Id=144;Id<256;++Id)zd[Id]=9;for(var Id=256;Id<280;++Id)zd[Id]=7;for(var Id=280;Id<288;++Id)zd[Id]=8;for(var Bd=new Cd(32),Id=0;Id<32;++Id)Bd[Id]=5;var Vd=Rd(zd,9,0),Hd=Rd(Bd,5,0),Ud=function(e){return(e+7)/8|0},Wd=function(e,t,n){return(t==null||t<0)&&(t=0),(n==null||n>e.length)&&(n=e.length),new Cd(e.subarray(t,n))},Gd=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Kd=function(e,t,n){var r=Error(t||Gd[e]);if(r.code=e,Error.captureStackTrace&&Error.captureStackTrace(r,Kd),!n)throw r;return r},qd=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8},Jd=function(e,t,n){n<<=t&7;var r=t/8|0;e[r]|=n,e[r+1]|=n>>8,e[r+2]|=n>>16},Yd=function(e,t){for(var n=[],r=0;r<e.length;++r)e[r]&&n.push({s:r,f:e[r]});var i=n.length,a=n.slice();if(!i)return{t:nf,l:0};if(i==1){var o=new Cd(n[0].s+1);return o[n[0].s]=1,{t:o,l:1}}n.sort(function(e,t){return e.f-t.f}),n.push({s:-1,f:25001});var s=n[0],c=n[1],l=0,u=1,d=2;for(n[0]={s:-1,f:s.f+c.f,l:s,r:c};u!=i-1;)s=n[n[l].f<n[d].f?l++:d++],c=n[l!=u&&n[l].f<n[d].f?l++:d++],n[u++]={s:-1,f:s.f+c.f,l:s,r:c};for(var f=a[0].s,r=1;r<i;++r)a[r].s>f&&(f=a[r].s);var p=new wd(f+1),m=Xd(n[u-1],p,0);if(m>t){var r=0,h=0,g=m-t,_=1<<g;for(a.sort(function(e,t){return p[t.s]-p[e.s]||e.f-t.f});r<i;++r){var v=a[r].s;if(p[v]>t)h+=_-(1<<m-p[v]),p[v]=t;else break}for(h>>=g;h>0;){var y=a[r].s;p[y]<t?h-=1<<t-p[y]++-1:++r}for(;r>=0&&h;--r){var b=a[r].s;p[b]==t&&(--p[b],++h)}m=t}return{t:new Cd(p),l:m}},Xd=function(e,t,n){return e.s==-1?Math.max(Xd(e.l,t,n+1),Xd(e.r,t,n+1)):t[e.s]=n},Zd=function(e){for(var t=e.length;t&&!e[--t];);for(var n=new wd(++t),r=0,i=e[0],a=1,o=function(e){n[r++]=e},s=1;s<=t;++s)if(e[s]==i&&s!=t)++a;else{if(!i&&a>2){for(;a>138;a-=138)o(32754);a>2&&(o(a>10?a-11<<5|28690:a-3<<5|12305),a=0)}else if(a>3){for(o(i),--a;a>6;a-=6)o(8304);a>2&&(o(a-3<<5|8208),a=0)}for(;a--;)o(i);a=1,i=e[s]}return{c:n.subarray(0,r),n:t}},Qd=function(e,t){for(var n=0,r=0;r<t.length;++r)n+=e[r]*t[r];return n},$d=function(e,t,n){var r=n.length,i=Ud(t+2);e[i]=r&255,e[i+1]=r>>8,e[i+2]=e[i]^255,e[i+3]=e[i+1]^255;for(var a=0;a<r;++a)e[i+a+4]=n[a];return(i+4+r)*8},ef=function(e,t,n,r,i,a,o,s,c,l,u){qd(t,u++,n),++i[256];for(var d=Yd(i,15),f=d.t,p=d.l,m=Yd(a,15),h=m.t,g=m.l,_=Zd(f),v=_.c,y=_.n,b=Zd(h),x=b.c,S=b.n,C=new wd(19),w=0;w<v.length;++w)++C[v[w]&31];for(var w=0;w<x.length;++w)++C[x[w]&31];for(var T=Yd(C,7),E=T.t,D=T.l,O=19;O>4&&!E[Od[O-1]];--O);var k=l+5<<3,A=Qd(i,zd)+Qd(a,Bd)+o,j=Qd(i,f)+Qd(a,h)+o+14+3*O+Qd(C,E)+2*C[16]+3*C[17]+7*C[18];if(c>=0&&k<=A&&k<=j)return $d(t,u,e.subarray(c,c+l));var ee,M,N,P;if(qd(t,u,1+(j<A)),u+=2,j<A){ee=Rd(f,p,0),M=f,N=Rd(h,g,0),P=h;var F=Rd(E,D,0);qd(t,u,y-257),qd(t,u+5,S-1),qd(t,u+10,O-4),u+=14;for(var w=0;w<O;++w)qd(t,u+3*w,E[Od[w]]);u+=3*O;for(var I=[v,x],te=0;te<2;++te)for(var L=I[te],w=0;w<L.length;++w){var R=L[w]&31;qd(t,u,F[R]),u+=E[R],R>15&&(qd(t,u,L[w]>>5&127),u+=L[w]>>12)}}else ee=Vd,M=zd,N=Hd,P=Bd;for(var w=0;w<s;++w){var ne=r[w];if(ne>255){var R=ne>>18&31;Jd(t,u,ee[R+257]),u+=M[R+257],R>7&&(qd(t,u,ne>>23&31),u+=Ed[R]);var re=ne&31;Jd(t,u,N[re]),u+=P[re],re>3&&(Jd(t,u,ne>>5&8191),u+=Dd[re])}else Jd(t,u,ee[ne]),u+=M[ne]}return Jd(t,u,ee[256]),u+M[256]},tf=new Td([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),nf=new Cd(0),rf=function(e,t,n,r,i,a){var o=a.z||e.length,s=new Cd(r+o+5*(1+Math.ceil(o/7e3))+i),c=s.subarray(r,s.length-i),l=a.l,u=(a.r||0)&7;if(t){u&&(c[0]=a.r>>3);for(var d=tf[t-1],f=d>>13,p=d&8191,m=(1<<n)-1,h=a.p||new wd(32768),g=a.h||new wd(m+1),_=Math.ceil(n/3),v=2*_,y=function(t){return(e[t]^e[t+1]<<_^e[t+2]<<v)&m},b=new Td(25e3),x=new wd(288),S=new wd(32),C=0,w=0,T=a.i||0,E=0,D=a.w||0,O=0;T+2<o;++T){var k=y(T),A=T&32767,j=g[k];if(h[A]=j,g[k]=A,D<=T){var ee=o-T;if((C>7e3||E>24576)&&(ee>423||!l)){u=ef(e,c,0,b,x,S,w,E,O,T-O,u),E=C=w=0,O=T;for(var M=0;M<286;++M)x[M]=0;for(var M=0;M<30;++M)S[M]=0}var N=2,P=0,F=p,I=A-j&32767;if(ee>2&&k==y(T-I))for(var te=Math.min(f,ee)-1,L=Math.min(32767,T),R=Math.min(258,ee);I<=L&&--F&&A!=j;){if(e[T+N]==e[T+N-I]){for(var ne=0;ne<R&&e[T+ne]==e[T+ne-I];++ne);if(ne>N){if(N=ne,P=I,ne>te)break;for(var re=Math.min(I,ne-2),ie=0,M=0;M<re;++M){var ae=T-I+M&32767,oe=ae-h[ae]&32767;oe>ie&&(ie=oe,j=ae)}}}A=j,j=h[A],I+=A-j&32767}if(P){b[E++]=268435456|Md[N]<<18|Pd[P];var se=Md[N]&31,ce=Pd[P]&31;w+=Ed[se]+Dd[ce],++x[257+se],++S[ce],D=T+N,++C}else b[E++]=e[T],++x[e[T]]}}for(T=Math.max(T,D);T<o;++T)b[E++]=e[T],++x[e[T]];u=ef(e,c,l,b,x,S,w,E,O,T-O,u),l||(a.r=u&7|c[u/8|0]<<3,u-=7,a.h=g,a.p=h,a.i=T,a.w=D)}else{for(var T=a.w||0;T<o+l;T+=65535){var le=T+65535;le>=o&&(c[u/8|0]=l,le=o),u=$d(c,u+1,e.subarray(T,le))}a.i=o}return Wd(s,0,r+Ud(u)+i)},af=function(){var e=1,t=0;return{p:function(n){for(var r=e,i=t,a=n.length|0,o=0;o!=a;){for(var s=Math.min(o+2655,a);o<s;++o)i+=r+=n[o];r=(r&65535)+15*(r>>16),i=(i&65535)+15*(i>>16)}e=r,t=i},d:function(){return e%=65521,t%=65521,(e&255)<<24|(e&65280)<<8|(t&255)<<8|t>>8}}},of=function(e,t,n,r,i){if(!i&&(i={l:1},t.dictionary)){var a=t.dictionary.subarray(-32768),o=new Cd(a.length+e.length);o.set(a),o.set(e,a.length),e=o,i.w=a.length}return rf(e,t.level==null?6:t.level,t.mem==null?i.l?Math.ceil(Math.max(8,Math.min(13,Math.log(e.length)))*1.5):20:12+t.mem,n,r,i)},sf=function(e,t,n){for(;n;++t)e[t]=n,n>>>=8},cf=function(e,t){var n=t.level,r=n==0?0:n<6?1:n==9?3:2;if(e[0]=120,e[1]=r<<6|(t.dictionary&&32),e[1]|=31-(e[0]<<8|e[1])%31,t.dictionary){var i=af();i.p(t.dictionary),sf(e,2,i.d())}},lf=function(){function e(e,t){if(typeof e=="function"&&(t=e,e={}),this.ondata=t,this.o=e||{},this.s={l:0,i:32768,w:32768,z:32768},this.b=new Cd(98304),this.o.dictionary){var n=this.o.dictionary.subarray(-32768);this.b.set(n,32768-n.length),this.s.i=32768-n.length}}return e.prototype.p=function(e,t){this.ondata(of(e,this.o,0,0,this.s),t)},e.prototype.push=function(e,t){this.ondata||Kd(5),this.s.l&&Kd(4);var n=e.length+this.s.z;if(n>this.b.length){if(n>2*this.b.length-32768){var r=new Cd(n&-32768);r.set(this.b.subarray(0,this.s.z)),this.b=r}var i=this.b.length-this.s.z;this.b.set(e.subarray(0,i),this.s.z),this.s.z=this.b.length,this.p(this.b,!1),this.b.set(this.b.subarray(-32768)),this.b.set(e.subarray(i),32768),this.s.z=e.length-i+32768,this.s.i=32766,this.s.w=32768}else this.b.set(e,this.s.z),this.s.z+=e.length;this.s.l=t&1,(this.s.z>this.s.w+8191||t)&&(this.p(this.b,t||!1),this.s.w=this.s.i,this.s.i-=2),t&&(this.s=this.o={},this.b=nf)},e.prototype.flush=function(e){if(this.ondata||Kd(5),this.s.l&&Kd(4),this.p(this.b,!1),this.s.w=this.s.i,this.s.i-=2,e){var t=new Cd(6);t[0]=this.s.r>>3;var n=$d(t,this.s.r,nf);this.s.r=0,this.ondata(t.subarray(0,n>>3),!1)}},e}(),uf=function(){function e(e,t){this.c=af(),this.v=1,lf.call(this,e,t)}return e.prototype.push=function(e,t){this.c.p(e),lf.prototype.push.call(this,e,t)},e.prototype.p=function(e,t){var n=of(e,this.o,this.v&&(this.o.dictionary?6:2),t&&4,this.s);this.v&&=(cf(n,this.o),0),t&&sf(n,n.length-4,this.c.d()),this.ondata(n,t)},e.prototype.flush=function(e){lf.prototype.flush.call(this,e)},e}();function df(e,t){t||={};var n=af();n.p(e);var r=of(e,t,t.dictionary?6:2,4);return cf(r,t),sf(r,r.length-4,n.d()),r}var ff=typeof TextDecoder<"u"&&new TextDecoder;try{ff.decode(nf,{stream:!0})}catch{}const pf=1048576;let mf;function hf(e){if(!mf){mf=new Uint32Array(256);for(let e=0;e<256;e++){let t=e;for(let e=0;e<8;e++)t=t&1?3988292384^t>>>1:t>>>1;mf[e]=t>>>0}}let t=4294967295;for(let n of e)for(let e=0;e<n.length;){let r=Math.min(n.length,e+pf);for(p(r-e);e<r;e++)t=mf[(t^n[e])&255]^t>>>8}return(t^4294967295)>>>0}function gf(e){if(e.length<=pf)return df(e,{level:1});let t=[],n=new uf({level:1},e=>t.push(e));for(let t=0;t<e.length;t+=pf){let r=e.subarray(t,t+pf);p(r.length),n.push(r,t+pf>=e.length)}let r=new Uint8Array(t.reduce((e,t)=>e+t.length,0)),i=0;for(let e of t)r.set(e,i),i+=e.length;return r}function _f(e,t,n,r){let i=new Uint8Array((t*4+1)*n);for(let r=0;r<n;r++)p(t*4),i.set(e.subarray(r*t*4,(r+1)*t*4),r*(t*4+1)+1);let a=new Uint8Array(13),o=new DataView(a.buffer);o.setUint32(0,t),o.setUint32(4,n),a.set([8,6,0,0,0],8);let s;if(r){let e=df(r);s=new Uint8Array(5+e.length),s.set([105,99,99,0,0]),s.set(e,5)}let c=[["IHDR",a],...s?[["iCCP",s]]:[],["IDAT",gf(i)],["IEND",new Uint8Array]],l=c.reduce((e,[,t])=>e+12+t.length,8),u=new Uint8Array(l),d=new DataView(u.buffer);u.set([137,80,78,71,13,10,26,10]);let f=8;for(let[e,t]of c){let n=Uint8Array.from(e,e=>e.charCodeAt(0));d.setUint32(f,t.length),u.set(n,f+4),u.set(t,f+8),d.setUint32(f+8+t.length,hf([n,t])),f+=12+t.length}return u}function vf(e){let t="",n=!1;for(let r of e)r<=" "?n=t!=="":(t+=(n?" ":"")+r,n=!1);return t}const yf=1e6,bf=1e-6;function xf(e){let t=[],n="",r=!0;for(let i of e+" "){if(i!==","&&i>" "){n+=i;continue}if(n){if(!/^(?:\d+(?:\.\d+)?|\.\d+)$/.test(n)||Number(n)>yf)return;t.push(n),n="",r=!1}if(i===","){if(r)return;r=!0}}return r?void 0:t}function Sf(e,t){let n=0,r=0,i=0,a=0,o=0,s=0,c=0,l=0,u="",d=!1,f="",p=0,m=0,h=()=>e.charAt(n)>="0"&&e.charAt(n)<="9",g=()=>{for(;n<e.length&&` ,	
\r\f`.includes(e.charAt(n));)n++},_=()=>{g();let t=n;(e.charAt(n)==="-"||e.charAt(n)==="+")&&n++;let r=0;for(;h();n++)r++;if(e.charAt(n)===".")for(n++;h();n++)r++;return r?Number(e.slice(t,n)):NaN},v=(e,t)=>{let n=Math.abs(r)+Math.abs(i)+Math.abs(e)+Math.abs(t);s+=Math.abs(e-r)+Math.abs(t-i)+bf*n,d||=Math.abs(e)>yf||Math.abs(t)>yf,l++,r=e,i=t};for(g();n<e.length;g()){if(/[a-z]/i.test(e.charAt(n)))u=e.charAt(n++);else if(u===""||u==="z"||u==="Z")return;let h=u>="a",y=h?r:0,b=h?i:0,x=u.toUpperCase();if(t&&"STA".includes(x))return;let S=f;if(f="",x==="Z")c++,v(a,o);else if(x==="M")c++,r=a=y+_(),i=o=b+_(),u=h?"l":"L";else if(x==="H")v(y+_(),i);else if(x==="V")v(r,b+_());else if("LTQSC".includes(x)){if(f=x==="L"?"":x==="C"||x==="S"?"C":"Q",x==="S"||x==="T"){let e=S===f;v(e?2*r-p:r,e?2*i-m:i)}for(let e="LTQSC".indexOf(x)>>1;e>=0;e--)[p,m]=[r,i],v(y+_(),b+_())}else if(x==="A"){let t=Math.abs(_()),a=Math.abs(_()),[o,c]=[Math.max(t,a),Math.min(t,a)];d||=Number.isNaN(_());for(let t=0;t<2;t++)g(),d||=!"01".includes(e.charAt(n++)||"x");let[u,f]=[r,i];v(y+_(),b+_());let p=Math.abs(r-u)+Math.abs(i-f),m=c>0?Math.max(o,p/2*o/c):0;s+=7*m,l+=3,d||=m>yf}else return;if(d||=Math.abs(r)>yf||Math.abs(i)>yf,d||!Number.isFinite(s+r+i))return}return{length:s,pieces:c,corners:l+c}}function Cf(e,t,n,r){return Math.hypot((e+r)/2,(t-n)/2)+Math.hypot((e-r)/2,(t+n)/2)}const wf=1e-6;function Tf(e){return e.split(",").flatMap(e=>vf(e).split(" "))}function Ef(e){let t=/^[ \t\n\r]*(translate|rotate|scale|matrix)\(([-+\d.eE, \t\n\r]*)\)[ \t\n\r]*(,?)/,n=1,r=e,i="";for(let e=t.exec(r);e;e=t.exec(r)){let t=Tf(e[2]??""),a=t.map(e=>Df(e,!0));if(!{translate:[1,2],rotate:[1,3],scale:[1,2],matrix:[6]}[e[1]].includes(a.length)||a.some(Number.isNaN))return NaN;let o=a.slice(0,4).some(e=>e>0&&e<wf),[s=0,c=0,l=0,u=0]=t.map((e,t)=>(a[t]??0)<wf?0:Number(e));n*=e[1]==="scale"?Math.max(...a.map(e=>e>0?Math.max(e,wf):0)):e[1]==="matrix"?Cf(s,c,l,u)+(o?4*wf:0):1,r=r.slice(e[0].length),i=e[3]??""}return i===""&&/^[ \t\n\r]*$/.test(r)?n:NaN}function Df(e,t=!1){let n=vf(e);if(n.length>24)return NaN;let r=t?/[eE]([-+]?\d{1,3})$/.exec(n):null;if(Number(r?.[1])>38)return NaN;let i=r?n.slice(0,r.index):n,a=/^[-+]?(?:\d+(?:\.\d+)?|\.\d+)$/.test(i)?Math.abs(Number(n)):NaN;return a<=yf?a:NaN}function Of(e,t=!1){let n=t=>Df(e.attrs[t]??"0");if(e.name==="path")return Sf(e.attrs.d??"",t);if(e.name==="polyline"||e.name==="polygon")return Sf("M"+(e.attrs.points??"0 0")+"Z",t);let[r,i]=e.name==="line"?[n("x1")+n("x2")+n("y1")+n("y2"),0]:e.name==="rect"?[2*(n("width")+n("height")),n("x")+n("y")]:e.name==="circle"?[7*n("r"),n("cx")+n("cy")]:e.name==="ellipse"?[7*Math.max(n("rx"),n("ry")),n("cx")+n("cy")]:[NaN,NaN],a=r+16*bf*(i+r),o=e.name==="rect"&&(e.attrs.rx??e.attrs.ry)===void 0,s=e.name==="line"?2:o?4:8;return Number.isFinite(a)?{length:a,pieces:1,corners:s}:void 0}var kf=class extends vd{decoders=new Map;characters(e,t){let n=this.dc.font,r=Qi(n.face),i=/^mt extra$/i.test(n.face);if(r||i||n.charset===2){let n="";for(let a=0;a<e.length;a+=t?2:1){let o=e[a]|(t?e[a+1]<<8:0);o>=61440&&o<=61695&&(o-=61440);let s=o===32?" ":i?bd[String.fromCharCode(o)]:r?$i(r,o):void 0;if(s===void 0)return;n+=s}return n}if(t){let t=new TextDecoder("utf-16le",{ignoreBOM:!0}).decode(e);return/[\ue000-\uf8ff]/.test(t)?void 0:t}let a=this.decoders.get(n.charset);if(a===void 0){let e=yd[n.charset];try{a=e?new TextDecoder(e):null}catch{a=null}this.decoders.set(n.charset,a)}return a?a.decode(e):e.some(e=>e>126)?void 0:new TextDecoder().decode(e)}text(e){let t=this.dc;if(this.bracket)return this.refuse("unsupported");if(e.opaque&&e.box){let n=this.rectPath(...e.box);this.follow(n),this.emit('<path d="'+n+'" fill="'+t.bkColor+'"/>',this.share(ad(n)))}let n=e.bytes.length/(e.wide?2:1);if(!n||!this.charge(n))return;let r=e.glyphIndices?void 0:this.characters(e.bytes,e.wide),i=t.font;if(r===void 0||!i.height)return this.refuse("unsupported");let a=!!(t.textAlign&1),o=a?t.x:e.x,s=a?t.y:e.y;this.matrix();let c=Math.abs(this.pageY),l=Math.abs(this.pageX/this.pageY),u=t.world,d=e=>Math.abs(e)<1e7?Math.round(e*1e6)/1e6:id(e),[f=0,m=0,h=0,g=0]=u.slice(0,4).map(e=>d(e*c)),_="matrix("+[f,m,h,g].join(" ")+" "+this.P(o,s)+")"+(i.escapement?" rotate("+id(-i.escapement/10)+")":""),v=Math.abs(i.height)*(i.height>0?.87:1),y=e.advances&&r.length===n?e.advances:void 0,b=e.pairs?2:1,x=(e,t)=>{let r=0;for(let i=0;y&&i<n&&(i>0&&!(i&65535)&&p(65536),t?.(r,i)!==!1);i++)r+=e?-y(i*b+1):y(i*b)*l;return r},S=y?x(0):r.length*v*.5,C=!1;e.pairs&&x(1,e=>(C=e!==0,!C));let w=t.textAlign&6,T=w===6?-S/2:w===2?-S:0,E=t.textAlign&24,D=E===24?0:E===8?-v*.22:v*.9,O=(e,t,n=0)=>{let r=[],i=!0;return x(e,(e,a)=>{if(i=!!(a&65535)||this.room(n),i){let i=String(id(e+t));r.push(i),n+=i.length+1}return i}),i?r.join(" "):void 0},k=y?O(0,T):"0",A=k!==void 0&&C?O(1,D,k.length):String(id(D));if(k===void 0||A===void 0)return;let j="";t.bkMode!==1&&!e.opaque&&(j+='<rect x="'+id(T)+'" y="'+id(D-v*.9)+'" width="'+id(S)+'" height="'+id(v*1.12)+'" fill="'+t.bkColor+'"/>');let ee=Qi(i.face)||i.charset===2?"":i.face.replace(/[^a-zA-Z0-9 _-]/g,"").slice(0,40),M=/times|roman|serif|georgia|cambria|garamond|mt extra|symbol/i.test(i.face),N=(i.underline?" underline":"")+(i.strikeOut?" line-through":"");j+='<text x="'+k+'" y="'+A+'" font-size="'+id(v)+'" fill="'+t.textColor+'"'+(y||!w?"":' text-anchor="'+(w===6?"middle":"end")+'"')+' font-family="'+(ee?"'"+ee+"', ":"")+(M?"serif":"sans-serif")+'"'+(i.weight>=600?' font-weight="700"':"")+(i.italic?' font-style="italic"':"")+(N?' text-decoration="'+N.trim()+'"':"")+' xml:space="preserve">'+xd(r)+"</text>";let P=t.clip;e.clipped&&e.box&&this.intersectClipRect(...e.box);let F=j.startsWith("<rect")?Math.abs(S)*v*1.12:0,I=Math.abs(f*g-m*h);F&&(this.run[2]+=2*(Math.abs(S)+v*1.12)*Cf(f,m,h,g)/this.extent),this.emit('<g transform="'+_+'">'+j+"</g>",this.share(r.length*v*v*I)+this.share(F*I),F?2:1,F?8:4),t.clip=P,a&&(t.x+=S/l)}patBlt(e,t,n,r,i){if(e===11141161)return;let a;if(e===66)a="#000000";else if(e===16711778)a="#ffffff";else if(e!==15728673)return this.refuse("unsupported");let o=this.rectPath(t,n,t+r,n+i);e===15728673&&(a=this.brushPaint(this.dc.brush.color,o)),a&&(this.follow(o),this.emit('<path d="'+o+'" fill="'+a+'"/>',this.share(ad(o))))}bitmap(e,t,n,r,i,a){if(e===11141161||e===66||e===16711778||e===15728673)return this.patBlt(e,...r);let o=r.join(),s=this.pending;if(this.pending=void 0,s&&s.place!==o)return this.refuse("unsupported");let c=e===15597702||e===6684742;if(e===6684742&&!s){this.pending={stage:"xor",place:o};return}if(e===13369376?s:e===8913094?s?.stage==="mask":!(c&&s?.mask))return this.refuse("unsupported");let l=pd(t,n,this.budgets);if(typeof l=="string")return this.refuse(l);if(i&&(i[2]<0||i[3]<0))return this.refuse("unsupported");let u=i?md(l,i,a):{bitmap:l,kept:[0,0,1,1]};if(!u)return;let d=u.bitmap;if(e===8913094){this.pending={stage:"mask",place:o,mask:d};return}let f=s?.mask;if(f){if(f.w!==d.w||f.h!==d.h)return this.refuse("unsupported");for(let e=0;e<d.rgba.length;e+=4){e>0&&!(e&262143)&&p(65536);let t=f.rgba[e]+f.rgba[e+1]+f.rgba[e+2];if(t===0)continue;let n=d.rgba[e]|d.rgba[e+1]|d.rgba[e+2];if(t!==765||n)return this.refuse("unsupported");d.rgba[e+3]=0}}this.image(d,r,u.kept,"")}alphaBlend(e,t,n,r,i,a){let o=this.sourcePart(e,t,r,a);o&&this.image(o.bitmap,n,o.kept,i<255?' opacity="'+id(i/255)+'"':"")}transparentBlt(e,t,n,r,i){let a=this.sourcePart(e,t,r,!1);if(!a)return;let o=a.bitmap.rgba;for(let e=0;e<o.length;e+=4)e>0&&!(e&262143)&&p(65536),o[e]===i[0]&&o[e+1]===i[1]&&o[e+2]===i[2]&&(o[e+3]=0);this.image(a.bitmap,n,a.kept,"")}sourcePart(e,t,n,r){let i=pd(e,t,this.budgets,r);if(typeof i=="string"||n[2]<0||n[3]<0){this.refuse(typeof i=="string"?i:"unsupported");return}return md(i,n,!1)}image(e,t,n,r){let i=t[0]+t[2]*n[0],a=t[1]+t[3]*n[1],o=t[2]*n[2],s=t[3]*n[3],c=this.X(i,a),l=this.Y(i,a),u=[this.X(i+o,a)-c,this.Y(i+o,a)-l,this.X(i,a+s)-c,this.Y(i,a+s)-l],d=Math.abs(u[0]*u[3]-u[1]*u[2]);this.chargeShaded(d)&&(this.run[2]+=2*(Math.hypot(u[0],u[1])+Math.hypot(u[2],u[3]))/this.extent,this.emit('<image width="1" height="1" preserveAspectRatio="none" transform="matrix('+u.map(id).join(" ")+" "+c+" "+l+')"'+r+' href="data:image/png;base64,',this.share(d)),this.refused||this.raw(dd(_f(e.rgba,e.w,e.h))),this.raw('"/>'))}};const Af=(e,t)=>[e[0]*t[0]+e[1]*t[2],e[0]*t[1]+e[1]*t[3],e[2]*t[0]+e[3]*t[2],e[2]*t[1]+e[3]*t[3],e[4]*t[0]+e[5]*t[2]+t[4],e[4]*t[1]+e[5]*t[3]+t[5]];function jf(e,t){if(e.length<88)return{refused:"damaged"};let n=new DataView(e.buffer,e.byteOffset,e.byteLength);if(n.getUint32(0,!0)!==Z.HEADER||n.getUint32(40,!0)!==1179469088)return{refused:"damaged"};let r=new kf(t,e.length),i=()=>r.dc,a=e=>n.getInt32(e,!0),o=a(80)>0&&a(72)>0?a(72)/a(80):0,s=a(84)>0&&a(76)>0?a(76)/a(84):0;r.unitsPerMm=o;let c=[a(24)*o/100,a(28)*s/100,(a(32)-a(24))*o/100,(a(36)-a(28))*s/100];if(c[2]>=1&&c[3]>=1||(c=[a(8),a(12),a(16)-a(8)+1,a(20)-a(12)+1]),!(c[2]>=1&&c[3]>=1&&c[2]<=1e7&&c[3]<=1e7))return{refused:"damaged"};r.originX=c[0],r.originY=c[1],r.extent=Math.max(c[2],c[3]),r.area=c[2]*c[3],r.pixelSize=1;let l=0,u=!1,d=new TextDecoder("utf-16le"),f=0,p=0,m=0,h=e=>(p+e>m&&r.refuse("damaged"),p+e<=m),g=e=>n.getInt32(p+e*4,!0),_=e=>n.getUint32(p+e*4,!0),v=e=>{let t=n.getFloat32(p+e*4,!0);return Number.isFinite(t)||r.refuse("damaged"),Number.isFinite(t)?t:0},y=e=>[v(e),v(e+1),v(e+2),v(e+3),v(e+4),v(e+5)],b=t=>(e[t+3]===1&&r.refuse("unsupported"),nd(e,t)),x=e=>r.stored(r.objects.set(_(0),e)),S=(t,n)=>{if(f+t+n>m){r.refuse("damaged");return}return e.subarray(f+t,f+t+n)};for(;!u&&!r.refused;){if(l+8>e.length)return{refused:"damaged"};let t=n.getUint32(l,!0),a=n.getUint32(l+4,!0);if(f=l,m=l+a,a<8||a%4||m>e.length)return{refused:"damaged"};if(!r.record())break;p=l+8,l=m;let o=t>=Z.POLYBEZIER16&&t<=Z.POLYPOLYGON16;switch(t){case Z.HEADER:f!==0&&r.refuse("damaged");break;case Z.EOF:u=!0;break;case Z.SETBRUSHORGEX:case Z.SETMAPPERFLAGS:case Z.SETSTRETCHBLTMODE:case Z.SETCOLORADJUSTMENT:case Z.SELECTPALETTE:case Z.SETPALETTEENTRIES:case Z.RESIZEPALETTE:case Z.REALIZEPALETTE:case Z.FLATTENPATH:case Z.SETICMMODE:case Z.SETCOLORSPACE:case Z.DELETECOLORSPACE:case Z.FORCEUFIMAPPING:case Z.SETLINKEDUFIS:case Z.COLORMATCHTOTARGETW:break;case Z.CREATEPALETTE:case Z.CREATECOLORSPACE:case Z.CREATECOLORSPACEW:h(4)&&x({other:!0});break;case Z.SETLAYOUT:case Z.SETTEXTJUSTIFICATION:h(4)&&_(0)!==0&&r.refuse("unsupported");break;case Z.COMMENT:a>=20&&_(1)===726027589&&n.getUint16(p+8,!0)===16385&&(n.getUint16(p+10,!0)&1||r.refuse("unsupported"));break;case Z.SETMAPMODE:h(4)&&(i().mapMode=_(0),r.remap());break;case Z.SETWINDOWEXTEX:h(8)&&(i().winW=g(0),i().winH=g(1),r.remap());break;case Z.SETWINDOWORGEX:h(8)&&(i().winX=g(0),i().winY=g(1),r.remap());break;case Z.SETVIEWPORTEXTEX:h(8)&&(i().viewW=g(0),i().viewH=g(1),r.remap());break;case Z.SETVIEWPORTORGEX:h(8)&&(i().viewX=g(0),i().viewY=g(1),r.remap());break;case Z.SCALEWINDOWEXTEX:case Z.SCALEVIEWPORTEXTEX:{if(!h(16))break;if(!g(1)||!g(3)){r.refuse("damaged");break}let[e,n]=t===Z.SCALEWINDOWEXTEX?["winW","winH"]:["viewW","viewH"];i()[e]=Math.trunc(i()[e]*g(0)/g(1)),i()[n]=Math.trunc(i()[n]*g(2)/g(3)),r.remap();break}case Z.SETWORLDTRANSFORM:h(24)&&(i().world=y(0),r.remap());break;case Z.MODIFYWORLDTRANSFORM:{if(!h(28))break;let e=_(6);e===1?i().world=[1,0,0,1,0,0]:e===2?i().world=Af(y(0),i().world):e===3?i().world=Af(i().world,y(0)):e===4?i().world=y(0):r.refuse("damaged"),r.remap();break}case Z.SAVEDC:r.save();break;case Z.RESTOREDC:h(4)&&r.restore(g(0));break;case Z.SETBKMODE:h(4)&&(i().bkMode=_(0));break;case Z.SETBKCOLOR:h(4)&&(i().bkColor=b(p));break;case Z.SETTEXTCOLOR:h(4)&&(i().textColor=b(p));break;case Z.SETTEXTALIGN:h(4)&&(i().textAlign=_(0));break;case Z.SETPOLYFILLMODE:h(4)&&(i().polyFill=_(0));break;case Z.SETROP2:h(4)&&(i().rop2=_(0));break;case Z.SETARCDIRECTION:h(4)&&(i().clockwise=_(0)===2);break;case Z.SETMITERLIMIT:h(4)&&(i().miterLimit=Math.max(1,Math.min(_(0),1e3)));break;case Z.CREATEPEN:if(h(20)){let e=Gu(_(1),Math.abs(g(2)));x({pen:{...e,width:Math.abs(g(2)),cosmetic:e.kind==="dash",color:b(p+16),cap:"round",join:"round"}})}break;case Z.EXTCREATEPEN:{if(!h(40))break;let e=_(5),t=Yu(_(7)),n={...Gu(e),width:_(6),cosmetic:!(e&65536),color:b(p+32),cap:["round","square","butt"][e>>8&15]??"round",join:["round","bevel","miter"][e>>12&15]??"round"};x({pen:t==="solid"?n:{...n,kind:t==="null"?"null":"other"}});break}case Z.CREATEBRUSHINDIRECT:h(16)&&x({brush:{kind:Yu(_(1),_(3)),color:b(p+8),hatch:_(3)}});break;case Z.CREATEMONOBRUSH:case Z.CREATEDIBPATTERNBRUSHPT:h(4)&&x({brush:{kind:"other",color:"#000000"}});break;case Z.EXTCREATEFONTINDIRECTW:{if(!h(96))break;let t=d.decode(e.subarray(p+32,p+96));x({font:{height:g(1),escapement:g(3),weight:g(5),italic:e[p+24]!==0,underline:e[p+25]!==0,strikeOut:e[p+26]!==0,charset:e[p+27],face:t.split("\0",1)[0]}});break}case Z.SELECTOBJECT:h(4)&&r.select(_(0)&2147483648?ld[_(0)&2147483647]:r.objects.get(_(0)));break;case Z.DELETEOBJECT:h(4)&&r.objects.delete(_(0));break;case Z.INTERSECTCLIPRECT:h(16)&&r.intersectClipRect(g(0),g(1),g(2),g(3));break;case Z.EXCLUDECLIPRECT:h(16)&&r.excludeClipRect(g(0),g(1),g(2),g(3));break;case Z.SELECTCLIPPATH:h(4)&&r.clipToPath(_(0));break;case Z.EXTSELECTCLIPRGN:if(!h(8))break;_(0)===0?_(1)===5?r.resetClip():r.refuse("damaged"):h(40)&&h(8+_(0))&&(_(2)!==32||_(3)!==1||32+_(4)*16>_(0)?r.refuse("damaged"):r.clipToRects(_(1),n,p+40,_(4)));break;case Z.OFFSETCLIPRGN:case Z.SETMETARGN:r.clipped&&r.refuse("unsupported");break;case Z.MOVETOEX:h(8)&&r.moveTo(g(0),g(1));break;case Z.LINETO:h(8)&&r.lineTo(g(0),g(1));break;case Z.POLYBEZIER:case Z.POLYGON:case Z.POLYLINE:case Z.POLYBEZIERTO:case Z.POLYLINETO:case Z.POLYBEZIER16:case Z.POLYGON16:case Z.POLYLINE16:case Z.POLYBEZIERTO16:case Z.POLYLINETO16:{if(!h(20)||!h(20+_(4)*(o?4:8)))break;let e=o?t-Z.POLYBEZIER16+Z.POLYBEZIER:t;r.poly(e===Z.POLYGON?"polygon":e===Z.POLYBEZIER||e===Z.POLYBEZIERTO?"bezier":"line",e===Z.POLYBEZIERTO||e===Z.POLYLINETO,n,p+20,_(4),o);break}case Z.POLYPOLYLINE:case Z.POLYPOLYGON:case Z.POLYPOLYLINE16:case Z.POLYPOLYGON16:{if(!h(24)||!h(24+_(4)*4)||!r.charge(_(4)))break;let e=[],i=0;for(let t=0;t<_(4);t++)i+=e[t]=_(6+t);i===_(5)?h(24+e.length*4+i*(o?4:8))&&r.polyPoly(t===Z.POLYPOLYGON||t===Z.POLYPOLYGON16,e,n,p+24+e.length*4,o):r.refuse("damaged");break}case Z.POLYDRAW:case Z.POLYDRAW16:{let e=t===Z.POLYDRAW16?4:8;h(20)&&h(20+_(4)*(e+1))&&r.polyDraw(n,p+20,_(4),e===4,p+20+_(4)*e);break}case Z.ANGLEARC:h(20)&&r.angleArc(g(0),g(1),_(2),v(3),v(4));break;case Z.SETPIXELV:h(12)&&r.pixel(g(0),g(1),b(p+8));break;case Z.RECTANGLE:h(16)&&r.rect(g(0),g(1),g(2),g(3));break;case Z.ELLIPSE:h(16)&&r.ellipse(g(0),g(1),g(2),g(3));break;case Z.ROUNDRECT:h(24)&&r.roundRect(g(0),g(1),g(2),g(3),g(4),g(5));break;case Z.ARC:case Z.ARCTO:case Z.CHORD:case Z.PIE:h(32)&&r.arc(t===Z.ARC?"arc":t===Z.ARCTO?"arcTo":t===Z.CHORD?"chord":"pie",g(0),g(1),g(2),g(3),g(4),g(5),g(6),g(7));break;case Z.BEGINPATH:r.beginPath();break;case Z.ENDPATH:r.endPath();break;case Z.CLOSEFIGURE:r.closeFigure();break;case Z.ABORTPATH:r.abortPath();break;case Z.FILLPATH:r.paintPath(!0,!1);break;case Z.STROKEANDFILLPATH:r.paintPath(!0,!0);break;case Z.STROKEPATH:r.paintPath(!1,!0);break;case Z.EXTTEXTOUTA:case Z.EXTTEXTOUTW:{if(!h(52))break;let e=_(11),i=!(e&256);if(i&&!h(68))break;let a=t===Z.EXTTEXTOUTW,o=!!(e&8192),s=S(_(10),_(9)*(a?2:1)),c=_(i?16:12),l=c?S(c,_(9)*(o?8:4)):void 0;if(!s||c&&!l)break;r.text({x:g(7),y:g(8),bytes:s,wide:a,pairs:o,advances:l&&(e=>n.getInt32(f+c+e*4,!0)),box:i?[g(12),g(13),g(14),g(15)]:void 0,opaque:!!(e&2),clipped:!!(e&4),glyphIndices:!!(e&16)});break}case Z.SMALLTEXTOUT:{if(!h(28))break;let t=_(3),n=!(t&256),i=28+(n?16:0),a=!!(t&512);if(!h(i+_(2)*(a?1:2))||!r.charge(_(2)))break;let o=e.subarray(p+i,p+i+_(2)*(a?1:2));if(a){let e=new Uint8Array(o.length*2);o.forEach((t,n)=>e[n*2]=t),o=e}r.text({x:g(0),y:g(1),bytes:o,wide:!0,box:n?[g(7),g(8),g(9),g(10)]:void 0,opaque:!!(t&2),clipped:!!(t&4),glyphIndices:!!(t&16)});break}case Z.GRADIENTFILL:{if(!h(28))break;if(_(6)>1){r.refuse("unsupported");break}let t=_(4);if(!h(28+t*16)||!h(28+t*16+_(5)*8))break;let i=t=>{let r=p+28+t*16,i=e[r+9]<<16|e[r+11]<<8|e[r+13];return[n.getInt32(r,!0),n.getInt32(r+4,!0),"#"+i.toString(16).padStart(6,"0")]};for(let e=0;e<_(5)&&!r.refused;e++){let a=n.getUint32(p+28+t*16+e*8,!0),o=n.getUint32(p+28+t*16+e*8+4,!0);a>=t||o>=t?r.refuse("damaged"):r.gradientRect(...i(a),...i(o),_(6)===1)}break}case Z.BITBLT:case Z.STRETCHBLT:case Z.ALPHABLEND:case Z.TRANSPARENTBLT:{if(!h(t===Z.BITBLT?92:100))break;let n=[g(4),g(5),g(6),g(7)];if(!_(20)){t===Z.BITBLT||t===Z.STRETCHBLT?r.patBlt(_(8),...n):r.refuse("damaged");break}let i=y(11),a=S(_(19),_(20)),o=S(_(21),_(22));if(!a||!o)break;let s=g(9)+i[4],c=g(10)+i[5];if(_(18)!==0||i[0]!==1||i[1]||i[2]||i[3]!==1||!Number.isInteger(s)||!Number.isInteger(c)){r.refuse("unsupported");break}if(t===Z.BITBLT){s||c?r.refuse("unsupported"):r.bitmap(_(8),a,o,n,void 0,!1);break}let l=[s,c,g(23),g(24)];t===Z.STRETCHBLT?r.bitmap(_(8),a,o,n,l,!1):t===Z.ALPHABLEND?e[p+32]||e[p+33]||e[p+35]>1?r.refuse("unsupported"):r.alphaBlend(a,o,n,l,e[p+34],e[p+35]===1):r.transparentBlt(a,o,n,l,[e[p+32],e[p+33],e[p+34]]);break}case Z.STRETCHDIBITS:{if(!h(72))break;let e=S(_(10),_(11)),t=S(_(12),_(13));if(!e||!t)break;_(14)===0?r.bitmap(_(15),e,t,[g(4),g(5),g(16),g(17)],[g(6),g(7),g(8),g(9)],!0):r.refuse("unsupported");break}default:r.refuse("unsupported")}}return r.finish(0,0,c[2],c[3])}const Mf=[32,40,48,56,64,80,96,112,128,160,192,224,256,320],Nf=[8,16,24,32,40,48,56,64,80,96,112,128,144,160];function Pf(e,t){if(e.length<13)return;let n=e=>e&128?3<<(e&7)+1:0,r=t=>{let n=t;for(;n<e.length&&e[n]!==0;)n+=1+e[n];return n+1},i=t.getUint16(6,!0),a=t.getUint16(8,!0),o=0,s=13+n(e[10]);for(;s<e.length&&e[s]!==59;)if(e[s]===33)s=r(s+2);else if(e[s]===44&&s+10<=e.length){if(t.getUint16(s+1,!0)+t.getUint16(s+5,!0)>i||t.getUint16(s+3,!0)+t.getUint16(s+7,!0)>a)return;o++,s=r(s+10+n(e[s+9])+1)}else return;return o?i*a:void 0}function Ff(e,t){let[n,r,i]=[e[t]??0,e[t+1]??0,e[t+2]??0],a=r>>3&3,o=r>>1&3,s=i>>4,c=i>>2&3;if(n!==255||(r&224)!=224||a===1||o===0||s===15||c===3)return;if(o!==1||s===0)return 0;let l=a===3,u=(l?Mf:Nf)[s-1],d=[44100,48e3,32e3][c]>>(l?0:a===2?1:2);return Math.floor((l?144:72)*u*1e3/d)+(i>>1&1)}function If(e){let t=t=>e[t]??-1;if(t(0)===137&&t(1)===80)return"image/png";if(t(0)===255&&t(1)===216)return"image/jpeg";if(t(0)===71&&t(1)===73&&t(2)===70)return"image/gif";if(t(0)===66&&t(1)===77)return"image/bmp";if(t(0)===215&&t(1)===205&&t(2)===198&&t(3)===154)return"image/x-wmf";if(t(0)===1&&t(1)===0&&t(40)===32&&t(41)===69&&t(42)===77&&t(43)===70)return"image/x-emf";if(t(0)===73&&t(1)===73&&t(2)===42&&t(3)===0||t(0)===77&&t(1)===77&&t(2)===0&&t(3)===42)return"image/tiff";if(t(8)===87&&t(9)===69&&t(10)===66&&t(11)===80)return"image/webp";let n=e=>String.fromCharCode(t(e),t(e+1),t(e+2),t(e+3)),r=0;for(let e=0;e<4;e++){let e=(t(r)<<24|t(r+1)<<16|t(r+2)<<8|t(r+3))>>>0;if(n(r+4)!=="free"&&n(r+4)!=="skip"||e<8)break;r+=e}if(n(r+4)==="ftyp")return n(r+8)==="M4A "||n(r+8)==="M4B "?"audio/mp4":n(r+8)==="qt  "?"video/quicktime":"video/mp4";if(["moov","mdat","wide"].includes(n(r+4)))return"video/quicktime";if(n(0)==="RIFF"&&n(8)==="WAVE")return"audio/wav";if(n(0).startsWith("ID3")||Ff(e,0)!==void 0)return"audio/mpeg";if(t(0)===26&&t(1)===69&&t(2)===223&&t(3)===163)return"video/webm";if(t(0)===0&&t(1)===1&&t(2)===0&&t(3)===0)return"font/ttf";if(t(0)===79&&t(1)===84&&t(2)===84&&t(3)===79)return"font/otf";if(t(0)===119&&t(1)===79&&t(2)===70)return t(3)===50?"font/woff2":"font/woff";let i=new TextDecoder().decode(e.slice(0,1024)).trimStart();if(i.startsWith("<svg")||i.startsWith("<?xml")&&/<svg[\s>]/.test(i))return"image/svg+xml";for(let t=1;t<Math.min(e.length,4096);t++){let n=e[t]===255?Ff(e,t):void 0;if(n&&Ff(e,t+n)!==void 0)return"audio/mpeg"}}function Lf(e,t){let n=new DataView(t.buffer,t.byteOffset,t.byteLength);if(e==="image/png"&&t.length>=24)return n.getUint32(16)*n.getUint32(20);if(e==="image/gif")return Pf(t,n);if(e==="image/bmp"&&t.length>=26)return Math.abs(n.getInt32(18,!0))*Math.abs(n.getInt32(22,!0));if(e==="image/webp"&&t.length>=30){let e=String.fromCharCode(...t.subarray(12,16));if(e==="VP8 ")return(n.getUint16(26,!0)&16383)*(n.getUint16(28,!0)&16383);if(e==="VP8L"){let e=n.getUint32(21,!0);return((e&16383)+1)*((e>>>14&16383)+1)}if(e==="VP8X"){let e=e=>n.getUint16(e,!0)|t[e+2]<<16;return(e(24)+1)*(e(27)+1)}}if(e==="image/jpeg"){let e=2;for(let r=0;r<1e3&&t[e]===255;r++){for(;t[e+1]===255;)e++;let r=t[e+1];if(e+9>t.length||r<192||r>=208&&r<=218||n.getUint16(e+2)<2)return;if(r>=192&&r<=207&&r!==196&&r!==200&&r!==204)return n.getUint16(e+5)*n.getUint16(e+7);e+=2+n.getUint16(e+2)}}}const Rf="http://www.w3.org/2000/svg",zf=5e3,Bf=new Set(["","none","inherit","initial","unset"]),Vf=2e6,Hf=e=>new Set(e.split(" ")),Uf=Hf("g defs path rect circle ellipse line polyline polygon text linearGradient radialGradient"),Wf=new Map([["svg",Uf],["g",Uf],["defs",Uf],["linearGradient",Hf("stop")],["radialGradient",Hf("stop")]]),Gf=Hf("title desc"),Kf=Hf("class role focusable version xml:lang xml:space xmlns:xlink"),qf=Hf("x y x1 y1 x2 y2 cx cy r rx ry fx fy width height offset opacity fill-opacity stroke-opacity stop-opacity stroke-width stroke-miterlimit stroke-dashoffset font-size"),Jf=Hf("stroke-linecap stroke-linejoin text-anchor font-weight font-style fill-rule gradientUnits spreadMethod dominant-baseline preserveAspectRatio"),Yf=Hf("fill stroke stop-color"),Xf=Hf("rgb rgba hsl hsla"),Zf=Hf("rgb rgba hsl hsla url"),Qf={"sans-serif":"system-ui,ui-sans-serif,-apple-system,blinkmacsystemfont,aptos,aptos display,arial,arial black,arial narrow,calibri,calibri light,candara,century gothic,comic sans ms,corbel,dejavu sans,franklin gothic medium,gill sans,helvetica,helvetica neue,ibm plex sans,impact,inter,lato,liberation sans,lucida sans unicode,montserrat,noto sans,nunito,open sans,poppins,raleway,roboto,segoe ui,segoe ui light,segoe ui semibold,source sans pro,tahoma,trebuchet ms,verdana",serif:"ui-serif,cambria,constantia,garamond,georgia,merriweather,palatino,palatino linotype,playfair display,times,times new roman",monospace:"ui-monospace,consolas,courier,courier new,fira code,jetbrains mono,lucida console,menlo,source code pro",cursive:"",fantasy:""},$f=new Set(Object.keys(Qf)),ep=new Map;for(let[e,t]of Object.entries(Qf))for(let n of t.split(","))ep.set(n,e);const tp=["font-family","font-size","font-weight","font-style"],np=Hf("transform gradientTransform"),rp=Hf("matrix translate scale rotate skewX skewY"),ip=Hf("d points viewBox"),ap=Hf("d points id stroke-dasharray"),op=new Set([...qf,...Jf,...Yf,...np,...ip,...ap,"xmlns","font-family"]),sp=e=>Kf.has(e)||/^(aria|data)-[\w-]+$/.test(e),cp=e=>(e.attrs.d?.length??0)+(e.attrs.points?.length??0);function lp(e,t){if(e.length>524288)return{refused:"too large"};if(!i(t,"svgParseWork",e.length))return{refused:"over budget"};y((e.length>>6)+1,t);let n=new TextDecoder().decode(e),r=/^\s*<\?xml\s[^>]*?\?>/.exec(n)?.[0]??"";if((/encoding\s*=\s*["']([^"']*)/.exec(r)?.[1]??"utf-8").toLowerCase()!=="utf-8"||n.indexOf("<?",r.length)>=0)return{refused:"unsupported"};let a=zf*5,o=!0,s={get xmlElements(){return a},set xmlElements(e){o&&=i(t,"svgParseWork",(a-e)*64),a=o?e:-1},get fuel(){return t.fuel},set fuel(e){t.fuel=e}},c;try{c=ee(n,s,1/0)}catch(e){if(s.xmlElements<0&&!h(t))return{refused:o?"too large":"over budget"};throw e}if(c.name!=="svg"||c.attrs.xmlns!==Rf)return{refused:"unsupported"};let l=new Map,u=new Set,d=0,f=0,p=0,m="unsupported",g=(e,t)=>{if(++d>zf||t>16)return m="too large",!1;let n=Object.keys(e.attrs);if(n.length>32||!n.every(t=>(op.has(t)||sp(t))&&(ap.has(t)||e.attrs[t].length<=200)))return!1;if(f+=cp(e),p+=e.name==="text"?e.text.length:0,f>2e4||p>1e3)return m="too large",!1;let r=e.attrs.id;if(r!==void 0){if(u.has(r))return!1;u.add(r),Wf.get(e.name)?.has("stop")&&l.set(r,"g"+(l.size+1))}return e.children.every(n=>Gf.has(n.name)||Wf.get(e.name)?.has(n.name)&&g(n,t+1))};if(!g(c,1))return{refused:m};let _=d*200+f*40+p*400;if(_>Vf||_>t.transcodeWork)return{refused:_>Vf?"too large":"over budget"};let v=0,b=0,x=0,S=!1,C=!1,w=1,T={width:1,join:"miter",limit:4,filled:!0},E=e=>vf(c.attrs[e]??"?").replace(/^([\d.]+)px$/,"$1"),D=Tf(c.attrs.viewBox??"0 0 "+E("width")+" "+E("height")),[O=0,k=0]=D.length===4&&D.every((e,t)=>Df(e)>=0&&(t<2||!e.includes("-")))&&!c.attrs.preserveAspectRatio?.includes("slice")?D.slice(2).map(Number):[],A=O*k,j=0,M=0,N=0,P=new Set,F=0,I=0,te=0,L=0,R=()=>{let e=Math.ceil(F)-I;if(F>Vf)m="too large";else if(i(t,"transcodeWork",e))return I+=e,!0;else m="over budget";return!1},ne=(e,t)=>{if(!/^[\w #.,%()+\t\n\r-]*$/.test(e))return;let n="",r=0;for(let i=e.indexOf("(");i>=0;i=e.indexOf("(",i+1)){let a=i;for(;a>0&&i-a<12&&/[\w-]/.test(e.charAt(a-1));)a--;let o=e.slice(a,i);if(!t.has(o))return;if(o==="url"){let t=e.indexOf(")",i),a=/^\s*#([\w.-]+)\s*$/.exec(e.slice(i+1,t))?.[1];if(a===void 0||t<0)return;v++,F+=5e3,n+=e.slice(r,i+1)+"#"+(l.get(a)??"none"),r=t}}return vf(n+e.slice(r))},re=e=>{let t=e.split(",").map(vf);if(t.every(e=>/^(?:[\w -]+|'[\w -]+'|"[\w -]+")$/.test(e))){for(let e of t){let t=e.replace(/['"]/g,"").toLowerCase();if($f.has(t))return t;if(ep.has(t))return e+", "+ep.get(t)}return""}},ie=(e,t,n)=>{let r=t.length>200;if(!r&&Bf.has(vf(t).toLowerCase()))return"";let i=r?void 0:xf(t),a=Of(e,!0),o=i?.reduce((e,t)=>e+Number(t),0)??1;if(o===0)return"";let s=i&&i.length<=4&&a?i.length*(a.length/o+2*a.pieces):1/0;return!i||b+s>2e3?(S||=n,""):(b+=s,x+=n?s:0,F+=s*400,i.join(" "))},ae=(e,t,n)=>{let r=sp(e),i=r?"":vf(t);return e==="xmlns"?t===Rf?"":void 0:r?"":qf.has(e)?/^[-+]?(?:\d+(?:\.\d+)?|\.\d+)(?:e[-+]?\d{1,3})?(?:[a-z]{2,3}|%)?$/i.test(i)?i:void 0:Jf.has(e)?/^[a-zA-Z0-9][a-zA-Z0-9 -]*$/.test(i)?i:void 0:ip.has(e)?/^[a-zA-Z0-9 .,+-]*$/.test(i)?i:void 0:Yf.has(e)?ne(t,n?Xf:Zf):np.has(e)?ne(t,rp):e==="font-family"?re(t):void 0},oe=(e,t,n)=>{if(F+=200+cp(e)*40,!R())return;let r=[...n],i=Wf.has(e.name)||e.name==="text",[a,o,s]=[C,w,T],u=t=>e.attrs["stroke-"+t],d=(e,t,n)=>{let r=u(e);return r===void 0?t:r.includes("-")||!(Df(r)>=n)?NaN:Df(r)};T={width:d("width",T.width,0),join:vf(u("linejoin")??T.join),limit:d("miterlimit",T.limit,1),filled:e.attrs.fill===void 0?T.filled:vf(e.attrs.fill)!=="none"},C||=e.name==="defs"||e.name.endsWith("Gradient");let f=e.attrs.transform??"";w*=e===c&&f!==""?NaN:Ef(f);let p=e.attrs.stroke,m=p===void 0?t:vf(p)!=="none";e.attrs.opacity!==void 0&&(i||m)&&(F+=6e3,!C&&(i||T.filled&&e.name!=="line")&&(te++,L++));let h="<"+e.name+(e===c?' xmlns="'+Rf+'"':"");for(let t of Object.keys(e.attrs)){let n=e.attrs[t],a=t==="id"?l.get(n)??"":t==="stroke-dasharray"?ie(e,n,!C&&(i||m)):ae(t,n,i);if(a===void 0)return;tp.includes(t)&&(r[tp.indexOf(t)]=a),t==="transform"&&/scale|matrix|skew/.test(a)&&(r[tp.length]=(r[tp.length]??"")+a),a!==""&&(F+=a.length,h+=" "+t+'="'+xd(a)+'"')}if(!C&&!Wf.has(e.name)){let t=Of(e),n=A>0&&Number.isFinite(w)?t:void 0,[i,a]=[(n?.length??NaN)*w,T.width*w],o=/^(round|bevel)$/.test(T.join)?1:T.limit,s=(i+(n?.corners??NaN)*o*a)*a,c=T.filled&&e.name!=="line",l=r[tp.indexOf("font-size")]??"16",u=l.includes("-")?NaN:Df(l.replace(/^([\d.]+)px$/,"$1"))*w,d=e.name==="text"?e.text.length*u*u:(i/2)**2,f=t=>e.attrs[t]?.includes("url(")?6:1,[p,h]=[c?f("fill"):0,m?f("stroke"):0];if(te+=p*(A>0&&d<=A?d/A:1)+h*(s<=A?s/A:1),L+=p+h,n&&(c||m))j+=i/Math.max(O,k),M+=n.corners;else if((c||m)&&e.name==="text")M+=4;else if(c||m){let n=e.attrs.d??e.attrs.points??"";N+=t?.corners??Math.max(8,n.length/1.5)}}let g="";if(e.name==="text"){g=xd(vf(e.text)),P.add(r.join("|"));for(let t of e.text){let e=t.codePointAt(0);F+=e>=8592&&e<=11263||e>65535||e===65039||e===8419?1e4:m?800:400}}for(let t of e.children){if(Gf.has(t.name))continue;let n=Wf.get(e.name)?.has(t.name)?oe(t,m,r):void 0;if(n===void 0)return;g+=n}return[C,w,T]=[a,o,s],g?h+">"+g+"</"+e.name+">":h+"/>"},se=oe(c,!1,[]);return se===void 0?{refused:m}:v>50||P.size>12?{refused:"too large"}:(F+=P.size*3e4,R()?{bytes:new TextEncoder().encode(se),work:I,fills:te,layers:L,dashes:x,run:[0,0,j],spans:[M,N],...A>0?{frame:[O/Math.max(O,k),k/Math.max(O,k)]}:{},...S?{partly:!0}:{}}:{refused:m})}const up={ImageWidth:256,ImageLength:257,BitsPerSample:258,Compression:259,PhotometricInterpretation:262,StripOffsets:273,Orientation:274,SamplesPerPixel:277,RowsPerStrip:278,StripByteCounts:279,PlanarConfiguration:284,Predictor:317,ColorMap:320,TileWidth:322,ExtraSamples:338,ICCProfile:34675},dp=new Set(Object.values(up));function fp(e,t){let n=0,r=0;for(let i=65536;n<e.length&&r<t.length;){n+r>=i&&(p(65536),i=n+r+65536);let a=e[n++];if(a<128){let i=Math.min(n+a+1,e.length);for(;n<i&&r<t.length;)t[r++]=e[n++]}else if(a>128){let i=e[n++]??0;for(let e=257-a;e>0&&r<t.length;e--)t[r++]=i}}}function pp(){let e={prefix:new Uint16Array(4096),suffix:new Uint8Array(4096),first:new Uint8Array(4096),length:new Uint16Array(4096)};for(let t=0;t<256;t++)e.suffix[t]=t,e.first[t]=t,e.length[t]=1;return e}function mp(e,t,n){let{prefix:r,suffix:i,first:a,length:o}=n,s=258,c=9,l=-1,u=0,d=0,f=0,m=0;for(let n=65536;m<t.length;){for(f+m>=n&&(p(65536),n=f+m+65536);u<c;){if(f>=e.length)return;d=(d<<8|e[f++])&16777215,u+=8}let h=d>>u-c&(1<<c)-1;if(u-=c,h===257)return;if(h===256){s=258,c=9,l=-1;continue}if(l<0){if(h>255)return}else if(s<4096){if(h>s)return;r[s]=l,i[s]=a[h===s?l:h],a[s]=a[l],o[s]=o[l]+1,s++}else if(h>=s)return;let g=o[h],_=h;for(let e=m+g-1;e>=m;e--)e<t.length&&(t[e]=i[_]),_=r[_];m+=g,l=h,s>=(1<<c)-1&&c<12&&c++}}function hp(e,t){if(e.length<8)return{refused:"damaged"};let n=e[0]===73&&e[1]===73;if(!n&&(e[0]!==77||e[1]!==77))return{refused:"damaged"};let r=new DataView(e.buffer,e.byteOffset,e.byteLength),a=e=>r.getUint16(e,n),o=e=>r.getUint32(e,n);if(a(2)!==42)return{refused:"damaged"};let s=o(4);if(s+2>e.length)return{refused:"damaged"};let c=a(s);if(s+2+c*12>e.length)return{refused:"damaged"};y((e.length>>6)+1,t);let l=e=>i(t,"transcodeWork",e);if(!l(c))return{refused:"over budget"};let u=new Map;for(let t=0;t<c;t++){let n=s+2+t*12,r=a(n);if(!dp.has(r)||u.has(r))continue;let i=r===up.ICCProfile&&a(n+2)===7,c=a(n+2)===3?2:a(n+2)===4?4:+!!i,l=o(n+4);if(!c||!l)continue;let d=l*c<=4?n+8:o(n+8);if(d+l*c>e.length)return{refused:"damaged"};u.set(r,{at:d,size:c,count:l})}let d=(e,t)=>e.size===2?a(e.at+t*2):o(e.at+t*4),f=(e,t)=>{let n=u.get(e);return n?d(n,0):t},m=(e,t)=>{let n=u.get(e);if(!(!n||n.count<t||!l(t)))return Array.from({length:t},(e,t)=>d(n,t))},h=f(up.ImageWidth,0),g=f(up.ImageLength,0);if(h<1||g<1)return{refused:"damaged"};if(h*g>12e6)return{refused:"too large"};let _=f(up.SamplesPerPixel,1),v=f(up.PhotometricInterpretation,1),b=f(up.Compression,1),x=f(up.Orientation,1);if(_<1||_>5||v>3||v===2&&_<3||f(up.PlanarConfiguration,1)!==1||u.has(up.TileWidth)||x<1||x>8||b!==1&&b!==5&&b!==32773)return{refused:"unsupported"};let S=u.get(up.BitsPerSample);for(let e=0;e<Math.min(S?.count??0,_);e++)if(d(S,e)!==8)return{refused:"unsupported"};if(!S)return{refused:"unsupported"};let C=u.get(up.ICCProfile),w;if(C?.size===1&&v>=2){if(C.count>1048576)return{refused:"too large"};let t=e.subarray(C.at,C.at+C.count);if(String.fromCharCode(...t.subarray(16,20))==="RGB "){if(!l((C.count>>6)+1))return{refused:"over budget"};w=t}}let T=Math.min(f(up.RowsPerStrip,g),g);if(T<1)return{refused:"damaged"};let E=Math.ceil(g/T);if(E>65536)return{refused:"too large"};if(t.transcodeWork<E*2+768||t.transcodePixels<h*g)return{refused:"over budget"};let D=m(up.StripOffsets,E),O=m(up.StripByteCounts,E);if(!D||!O||O.reduce((e,t)=>e+t,0)>e.length)return{refused:"damaged"};let k=v===3?m(up.ColorMap,768):void 0;if(v===3&&!k)return{refused:"damaged"};if(!i(t,"transcodePixels",h*g))return{refused:"over budget"};let A=f(up.Predictor,1),j=v===2?3:1,ee=_>j?f(up.ExtraSamples,0):0,M=x>=5?g:h,N=(e,t)=>{switch(x){case 2:return t*M+(h-1-e);case 3:return(g-1-t)*M+(h-1-e);case 4:return(g-1-t)*M+e;case 5:return e*M+t;case 6:return e*M+(g-1-t);case 7:return(h-1-e)*M+(g-1-t);case 8:return(h-1-e)*M+t;default:return t*M+e}},P=pp(),F=new Uint8Array(h*g*4),I=h*_;for(let t=0;t<E;t++){let n=Math.min(T,g-t*T),r=D[t],i=O[t];if(r+i>e.length)return{refused:"damaged"};let a=e.subarray(r,r+i),o=new Uint8Array(n*I);b===1?o.set(a.subarray(0,o.length)):b===5?mp(a,o,P):fp(a,o);for(let e=0;e<n;e++){let n=e*I;if(A===2)for(let e=_;e<I;e++)o[n+e]=o[n+e]+o[n+e-_]&255;for(let r=0;r<h;r++){r&65535||p(Math.min(h-r,65536));let i=N(r,t*T+e)*4,a=n+r*_,s=o[a];if(v===2)F[i]=s,F[i+1]=o[a+1],F[i+2]=o[a+2];else if(k)F[i]=k[s]>>8,F[i+1]=k[256+s]>>8,F[i+2]=k[512+s]>>8;else{let e=v===0?255-s:s;F[i]=F[i+1]=F[i+2]=e}let c=ee?o[a+j]:255;if(F[i+3]=c,ee===1&&c>0&&c<255)for(let e=0;e<3;e++)F[i+e]=Math.min(255,Math.round(F[i+e]*255/c))}}}return{bytes:_f(F,M,h*g/M,w)}}const Q={EOF:0,SAVEDC:30,REALIZEPALETTE:53,SETPALENTRIES:55,CREATEPALETTE:247,SETBKMODE:258,SETMAPMODE:259,SETROP2:260,SETRELABS:261,SETPOLYFILLMODE:262,SETSTRETCHBLTMODE:263,SETTEXTCHAREXTRA:264,RESTOREDC:295,SELECTCLIPREGION:300,SELECTOBJECT:301,SETTEXTALIGN:302,RESIZEPALETTE:313,DIBCREATEPATTERNBRUSH:322,SETLAYOUT:329,DELETEOBJECT:496,CREATEPATTERNBRUSH:505,SETBKCOLOR:513,SETTEXTCOLOR:521,SETTEXTJUSTIFICATION:522,SETWINDOWORG:523,SETWINDOWEXT:524,OFFSETWINDOWORG:527,LINETO:531,MOVETO:532,SETMAPPERFLAGS:561,SELECTPALETTE:564,CREATEPENINDIRECT:762,CREATEFONTINDIRECT:763,CREATEBRUSHINDIRECT:764,POLYGON:804,POLYLINE:805,SCALEWINDOWEXT:1040,EXCLUDECLIPRECT:1045,INTERSECTCLIPRECT:1046,ELLIPSE:1048,RECTANGLE:1051,ANIMATEPALETTE:1078,TEXTOUT:1313,POLYPOLYGON:1336,ROUNDRECT:1564,PATBLT:1565,ESCAPE:1574,CREATEREGION:1791,ARC:2071,PIE:2074,CHORD:2096,DIBBITBLT:2368,EXTTEXTOUT:2610,DIBSTRETCHBLT:2881,STRETCHDIB:3907};function gp(e,t){let n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,i;if(e.length>=22&&n.getUint32(0,!0)===2596720087&&(i=[6,8,10,12].map(e=>n.getInt16(e,!0)),r=22),r+18>e.length)return{refused:"damaged"};let a=n.getUint16(r,!0);if(a!==1&&a!==2||n.getUint16(r+2,!0)!==9)return{refused:"damaged"};r+=18;let o=new kf(t,e.length),s=()=>o.dc;i&&(o.extent=Math.max(Math.abs(i[2]-i[0]),Math.abs(i[3]-i[1]),1),o.area=Math.max(Math.abs((i[2]-i[0])*(i[3]-i[1])),1),o.left=Math.min(i[0],i[2]),o.top=Math.min(i[1],i[3]));let c,l=new TextDecoder("windows-1252"),u=!1,d=!1,f=0,p=0,m=e=>(f+e>p&&o.refuse("damaged"),f+e<=p),h=e=>n.getInt16(f+e*2,!0),g=e=>n.getUint16(f+e*2,!0),_=t=>(e[t+3]===1&&o.refuse("unsupported"),nd(e,t)),v=e=>o.stored(o.objects.add(e));for(;!u&&!o.refused;){if(r+6>e.length)return{refused:"damaged"};let t=n.getUint32(r,!0),i=n.getUint16(r+4,!0);if(p=r+t*2,t<3||p>e.length)return{refused:"damaged"};if(!o.record())break;f=r+6,r=p;let a=t===(i>>8)+3;switch(i){case Q.EOF:u=!0;break;case Q.REALIZEPALETTE:case Q.SETPALENTRIES:case Q.RESIZEPALETTE:case Q.ANIMATEPALETTE:case Q.SELECTPALETTE:case Q.SETSTRETCHBLTMODE:case Q.SETMAPPERFLAGS:case Q.SETRELABS:break;case Q.ESCAPE:t>=7&&g(0)===15&&n.getUint32(f+4,!0)===1128680791&&(d=!0);break;case Q.SETTEXTCHAREXTRA:case Q.SETTEXTJUSTIFICATION:case Q.SETLAYOUT:m(2)&&g(0)!==0&&o.refuse("unsupported");break;case Q.SETMAPMODE:m(2)&&g(0)>=2&&g(0)<=6&&o.refuse("unsupported");break;case Q.SETWINDOWORG:if(!m(4))break;s().winY=h(0),s().winX=h(1),o.remap();break;case Q.OFFSETWINDOWORG:if(!m(4))break;s().winY+=h(0),s().winX+=h(1),o.remap();break;case Q.SETWINDOWEXT:case Q.SCALEWINDOWEXT:{if(!m(i===Q.SETWINDOWEXT?4:8))break;let e=i===Q.SETWINDOWEXT?h(0):Math.trunc(s().winH*h(1)/h(0)),t=i===Q.SETWINDOWEXT?h(1):Math.trunc(s().winW*h(3)/h(2));if(!t||!e||!Number.isFinite(t+e)){o.refuse("damaged");break}if(!c&&o.hasDrawn){o.refuse("unsupported");break}c??={w:Math.abs(t),h:Math.abs(e)},o.extent=Math.max(c.w,c.h),o.area=c.w*c.h,o.left=0,o.top=0,Object.assign(s(),{mapMode:8,winW:t,winH:e,viewW:c.w,viewH:c.h}),o.remap();break}case Q.SAVEDC:o.save();break;case Q.RESTOREDC:m(2)&&o.restore(h(0));break;case Q.SETBKCOLOR:m(4)&&(s().bkColor=_(f));break;case Q.SETBKMODE:m(2)&&(s().bkMode=g(0));break;case Q.SETTEXTCOLOR:m(4)&&(s().textColor=_(f));break;case Q.SETTEXTALIGN:m(2)&&(s().textAlign=g(0));break;case Q.SETPOLYFILLMODE:m(2)&&(s().polyFill=g(0));break;case Q.SETROP2:m(2)&&(s().rop2=g(0));break;case Q.CREATEPENINDIRECT:if(m(10)){let e=Gu(g(0),Math.abs(h(1)));v({pen:{...e,width:Math.abs(h(1)),cosmetic:e.kind==="dash",color:_(f+6),cap:"round",join:"round"}})}break;case Q.CREATEBRUSHINDIRECT:m(8)&&v({brush:{kind:Yu(g(0),g(3)),color:_(f+2),hatch:g(3)}});break;case Q.DIBCREATEPATTERNBRUSH:case Q.CREATEPATTERNBRUSH:v({brush:{kind:"other",color:"#000000"}});break;case Q.CREATEFONTINDIRECT:{if(!m(18))break;let t=e.subarray(f+18,Math.min(f+50,p)),n=t.indexOf(0);v({font:{height:h(0),escapement:h(2),weight:h(4),italic:e[f+10]!==0,underline:e[f+11]!==0,strikeOut:e[f+12]!==0,charset:e[f+13],face:l.decode(n>=0?t.subarray(0,n):t)}});break}case Q.CREATEPALETTE:v({other:!0});break;case Q.CREATEREGION:v({region:!0});break;case Q.SELECTOBJECT:m(2)&&o.select(o.objects.get(g(0)));break;case Q.DELETEOBJECT:m(2)&&o.objects.delete(g(0));break;case Q.SELECTCLIPREGION:if(!m(2))break;"region"in(o.objects.get(g(0))??{})?o.refuse("unsupported"):o.resetClip();break;case Q.INTERSECTCLIPRECT:m(8)&&o.intersectClipRect(h(3),h(2),h(1),h(0));break;case Q.EXCLUDECLIPRECT:m(8)&&o.excludeClipRect(h(3),h(2),h(1),h(0));break;case Q.MOVETO:m(4)&&o.moveTo(h(1),h(0));break;case Q.LINETO:m(4)&&o.lineTo(h(1),h(0));break;case Q.POLYGON:case Q.POLYLINE:m(2)&&m(2+g(0)*4)&&o.poly(i===Q.POLYGON?"polygon":"line",!1,n,f+2,g(0),!0);break;case Q.POLYPOLYGON:{if(!m(2)||!m(2+g(0)*2)||!o.charge(g(0)))break;let e=[],t=0;for(let n=0;n<g(0);n++)t+=e[n]=g(1+n);m(2+e.length*2+t*4)&&o.polyPoly(!0,e,n,f+2+e.length*2,!0);break}case Q.RECTANGLE:m(8)&&o.rect(h(3),h(2),h(1),h(0));break;case Q.ELLIPSE:m(8)&&o.ellipse(h(3),h(2),h(1),h(0));break;case Q.ROUNDRECT:m(12)&&o.roundRect(h(5),h(4),h(3),h(2),h(1),h(0));break;case Q.ARC:case Q.PIE:case Q.CHORD:m(16)&&o.arc(i===Q.ARC?"arc":i===Q.PIE?"pie":"chord",h(7),h(6),h(5),h(4),h(3),h(2),h(1),h(0));break;case Q.TEXTOUT:{if(!m(2))break;let t=2+(g(0)+1&-2);if(!m(t+4))break;o.text({x:n.getInt16(f+t+2,!0),y:n.getInt16(f+t,!0),bytes:_p(e.subarray(f+2,f+2+g(0))),wide:!1});break}case Q.EXTTEXTOUT:{if(!m(8))break;let t=g(2),r=g(3),i=!!(r&6),a=8+(i?8:0);if(!m(a+t))break;let s=f+a+(t+1&-2);o.text({x:h(1),y:h(0),bytes:_p(e.subarray(f+a,f+a+t)),wide:!1,advances:s+t*2<=p?e=>n.getInt16(s+e*2,!0):void 0,box:i?[h(4),h(5),h(6),h(7)]:void 0,opaque:!!(r&2),clipped:!!(r&4),glyphIndices:!!(r&16)});break}case Q.PATBLT:m(12)&&o.patBlt(n.getUint32(f,!0),h(5),h(4),h(3),h(2));break;case Q.DIBBITBLT:a?m(18)&&o.patBlt(n.getUint32(f,!0),h(8),h(7),h(6),h(5)):m(16)&&(h(2)||h(3)?o.refuse("unsupported"):o.bitmap(n.getUint32(f,!0),e.subarray(f+16,p),void 0,[h(7),h(6),h(5),h(4)],void 0,!1));break;case Q.DIBSTRETCHBLT:a?m(22)&&o.patBlt(n.getUint32(f,!0),h(10),h(9),h(8),h(7)):m(20)&&o.bitmap(n.getUint32(f,!0),e.subarray(f+20,p),void 0,[h(9),h(8),h(7),h(6)],[h(5),h(4),h(3),h(2)],!1);break;case Q.STRETCHDIB:if(!m(22))break;g(2)===0?o.bitmap(n.getUint32(f,!0),e.subarray(f+22,p),void 0,[h(10),h(9),h(8),h(7)],[h(6),h(5),h(4),h(3)],!0):o.refuse("unsupported");break;default:o.refuse("unsupported")}}return d&&!o.hasDrawn&&o.refuse("unsupported"),c?o.finish(0,0,c.w,c.h):i?o.finish(Math.min(i[0],i[2]),Math.min(i[1],i[3]),Math.abs(i[2]-i[0]),Math.abs(i[3]-i[1])):o.finish(0,0,0,0)}function _p(e){let t=e.length;for(;t>0&&e[t-1]===0;)t--;return e.subarray(0,t)}const vp=T({"image/png":"image","image/jpeg":"image","image/gif":"image","image/webp":"image","image/bmp":"image","image/svg+xml":"image","image/x-emf":"image","image/x-wmf":"image","image/tiff":"image","video/mp4":"video","video/webm":"video","video/quicktime":"video","audio/mpeg":"audio","audio/mp4":"audio","audio/wav":"audio","font/ttf":"font","font/otf":"font","font/woff":"font","font/woff2":"font"}),yp=T({"image/tiff":{to:"image/png",run:hp},"image/x-wmf":{to:"image/svg+xml",run:gp},"image/x-emf":{to:"image/svg+xml",run:jf}}),bp=T({png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",webp:"image/webp",bmp:"image/bmp",svg:"image/svg+xml",emf:"image/x-emf",wmf:"image/x-wmf",tif:"image/tiff",tiff:"image/tiff",mp4:"video/mp4",m4v:"video/mp4",webm:"video/webm",mov:"video/quicktime",mp3:"audio/mpeg",m4a:"audio/mp4",wav:"audio/wav",ttf:"font/ttf",otf:"font/otf",woff:"font/woff",woff2:"font/woff2",fntdata:"font/ttf"}),xp=e=>e==="over budget"?"pictures-over-allowance":e==="too large"?"picture-over-cap":"picture-not-converted";var Sp=class{cache=new Map;misplaced=new Set;wasted=0;room;largest;source;warnings;budgets;constructor(e,t,n,r=1/0){this.source=e,this.warnings=t,this.budgets=n,this.room=n.mediaBytes,this.largest=r}resolve(e,t){this.cache.has(e)||this.cache.set(e,this.kept(e));let n=this.cache.get(e);if(n&&vp[n.type]!==t){this.misplaced.has(t+" "+e)||this.warnings.add("picture-type-refused",e),this.misplaced.add(t+" "+e);return}return n}kept(e){let t=()=>{this.warnings.add("pictures-over-allowance",e)};if(this.source.sizeOf(e)>this.room)return t();let n=this.make(e);if(!n)return;let r=vp[n.type]==="font",i=Math.min(this.room,r?1/0:this.largest);return n.bytes.length>i?t():(this.room-=n.bytes.length,n)}typeOf(e,t){let n=e.slice(e.lastIndexOf(".")+1).toLowerCase(),r=If(t),i=this.source.contentTypeOf(e)??bp[n];return r==="video/mp4"&&i==="audio/mp4"?i:r??i}make(e){let t=this.source.has(e),n=n=>{this.wasted+=+!!t,this.warnings.add(n,e)};if(t&&this.wasted>=100)return n("pictures-over-allowance");let r=this.source.maybeBytes(e);if(!r)return n(t?"picture-unreadable":"picture-missing");let i=this.typeOf(e,r);if(!i||!vp[i])return n("picture-type-refused");if(r.length>67108864)return n("picture-over-cap");try{let t=yp[i];if(t){let e=this.budgets.transcodeWork,i=t.run(r,this.budgets);if(i.bytes){let n=Lf(t.to,i.bytes);return{type:t.to,bytes:i.bytes,...n===void 0?{}:{pixels:n},...t.to==="image/svg+xml"?{work:e-this.budgets.transcodeWork,fills:i.fills??0,layers:i.layers??0,dashes:i.dashes??0,hairDashes:i.hairDashes,frame:i.frame,run:i.run,spans:i.spans??[0,0]}:{}}}return n(xp(i.refused))}if(i==="image/svg+xml"){if(r.length>this.budgets.svgParseWork){this.warnings.add("pictures-over-allowance",e);return}let t=lp(r,this.budgets);return"refused"in t?n(xp(t.refused)):{type:i,...t}}}catch(e){if(h(this.budgets))throw e;return n("picture-unreadable")}if(If(r)===void 0)return n("picture-unreadable");if(vp[i]!=="image")return{type:i,bytes:r};let a=Lf(i,r);return a===void 0?n("picture-unreadable"):a>32e6?n("picture-over-cap"):{type:i,bytes:r,pixels:a}}};function Cp(e,t={}){let n=new S,r=g(e.budgets,()=>{let r=new Mp(e,n,t).write();return m(),r},t.stop),i=[...e.sink.list(),...n.list()];return{markdown:r,warnings:()=>i.map(e=>({...e}))}}const wp=/^(blob|data):[!#-&*-;=?-[\]-_a-~]*$/,Tp=/^(https?:|mailto:)[!#-;=?-[\]-_a-~]+$/i,Ep=/mono|courier|consolas|menlo|monaco|lucida console|source code|fira code/i,Dp=/\bcode\b|preformatted|^macro text/,Op=/\bquote\b/,kp=/^(toc( \d|$)|table of (figures|authorities))/,Ap=e=>e.ascii!==void 0&&Ep.test(e.ascii),jp={bold:!1,italic:!1,strike:!1,code:!1};var Mp=class{doc;sink;media;pictureUrl;urls=new Map;names;notes=new Map;cited=new Map;shift=0;listLevels=[];constructor(e,t,n){this.doc=e,this.sink=t,this.pictureUrl=n.pictureUrl,this.media=new Sp(e.pkg.archive,t,e.budgets),this.names=e.ir.styleNames}write(){let e=[];for(let t of this.doc.ir.pages){y(1);for(let e of[...t.footnotes,...t.endnotes])this.notes.set(e.id,e);for(let n of t.parts)for(let t of n.blocks)e.push(t)}this.shift=+!!e.some(e=>e.kind==="p"&&this.nameOf(e.props.style)==="title");let t=this.join(this.blocks(this.mended(e))),n=[];for(let[e,t]of this.cited){let r=this.notes.get(e),i=r?this.join(this.blocks(this.mended(r.blocks))):"";n.push(`[^${t}]: `+i.replace(/\n(?=[^\n])/g,`
    `))}return n.length>0&&(t+=`

`+n.join(`

`)),t+`
`}nameOf(e){return e!==void 0&&this.names.get(e)||""}mended(e){let t=[];for(let n of e){y(1);let e=t.at(-1);if(n.kind==="p"&&n.continued&&e?.kind==="p")t[t.length-1]={...e,inlines:[...e.inlines,...n.inlines]};else if(n.kind==="table"&&e?.kind==="table"&&(n.joined||n.props===e.props)){let r=new Set(e.rows.map(e=>e.props)),i=n.rows.filter(e=>!(e.props.header&&r.has(e.props)));t[t.length-1]={...e,rows:[...e.rows,...i]}}else t.push(n)}return t}join(e){let t="",n,r=()=>{if(n){let e=n.join(`
`),r="`".repeat(Math.max(3,Pp(e,"`")+1));t+=(t?`

`:"")+r+`
`+e+`
`+r,n=void 0}},i;for(let a of e){if(a.code){(n??=[]).push(a.text);continue}r(),t+=(t?a.item&&i?.item?`
`:`

`:"")+a.text,i=a}return r(),t}blocks(e){let t=[];for(let n of e)if(y(1),n.kind==="table"){let e=this.table(n);this.listLevels=[],e!==""&&t.push({text:e})}else t.push(...this.paragraph(n));return t}paragraph(e){let t=this.nameOf(e.props.style);if(kp.test(t))return[];let n=this.listLevels;this.listLevels=[];let r=[],i=this.pieces(e.inlines,r,e.base),a=i.some(e=>!e.made&&e.text.trim()!=="");if((Dp.test(t)||Ap(e.base)&&!Ap(this.doc.ir.bodyRun)||a&&i.every(e=>e.code||e.text.trim()===""||e.text===`\\
`))&&!e.heading&&!e.label?.item)return[...i.map(e=>e.made?e.text===`\\
`?`
`:"":e.text).join("").split(/\r\n?|\n/).map(e=>({text:e,code:!0})),...r];let o=this.line(i);if(o.trim()==="")return this.listLevels=r.length>0?[]:n,r;let s=e.label&&!e.label.item&&!e.label.figure?e.label.text:"";if(s.trim()!==""&&(o=Bp(zp(s)+" "+o)),e.heading!==void 0||t==="title"){let n=t==="title"?1:(e.heading??1)+this.shift,i=o.replace(/\\\n/g," ").replace(/(^|\s)(#+)\s*$/,"$1\\$2");return[{text:"#".repeat(Math.min(6,n))+" "+i},...r]}if(t==="subtitle"&&(o="*"+o.replace(/\\\n/g," ").trim()+"*"),e.label?.item){let t=e.label.item.level,i=n;for(;i.length>0&&i.at(-1)>t;)i.pop();(i.length===0||i.at(-1)<t)&&i.push(t),this.listLevels=i;let a="    ".repeat(Math.min(8,i.length-1)),s=/\d+/.exec(e.label.text)?.[0],c=e.label.bullet?"-":`${s===void 0?1:Number(s)}.`,l=a+" ".repeat(c.length+1);return[{text:a+c+" "+o.replace(/\n/g,`
`+l),item:!0},...r.map(e=>e.code?e:{...e,text:l+e.text})]}return Op.test(t)?[{text:"> "+o.replace(/\n/g,`
> `)},...r]:[{text:o},...r]}pieces(e,t,n){let r=[];for(let i of e){if(y(1),i.change?.kind==="del")continue;let e=this.marksOf(i.props,n,i.link?.outside);switch(i.kind){case"text":r.push({...e,text:i.props.caps?i.text.toUpperCase():i.text});break;case"tab":case"ptab":r.push({...e,code:!1,text:" "});break;case"break":case"columnBreak":r.push({...jp,text:`\\
`,made:!0});break;case"noteRef":{let e=this.cited.get(i.to);e===void 0&&this.notes.has(i.to)&&(e=this.cited.size+1,this.cited.set(i.to,e)),e!==void 0&&r.push({...jp,text:`[^${e}]`,made:!0});break}case"math":{let t=bu(i.el).trim();t!==""&&r.push({...e,code:!0,text:t});break}case"ruby":r.push(...this.pieces(i.base,t,n)),r.push({...jp,text:" ("}),r.push(...this.pieces(i.text,t,n)),r.push({...jp,text:")"});break;case"figure":r.push(...this.figure(i.figure,t))}}return r}marksOf(e,t,n){let r=n!==void 0&&Tp.test(n)?n:void 0,i=e=>e.strike===!0||e.doubleStrike===!0;return{bold:e.bold===!0&&t.bold!==!0,italic:e.italic===!0&&t.italic!==!0,strike:i(e)&&!i(t),code:Ap(e)&&!Ap(t),...r===void 0?{}:{href:r}}}figure(e,t){let n=[];for(let r of e.parts)switch(y(1),r.kind){case"picture":{let t=r.path===void 0?void 0:this.picture(r.path);if(t!==void 0){let r=(e.alt??"").replace(/[\s[\]\\`<>]+/g," ").trim();n.push({...jp,text:`![${r}](${t})`,made:!0})}else this.sink.add("picture-lost");break}case"text":t.push(...this.blocks(this.mended(r.blocks)));break;case"rule":t.push({text:"***"});break;case"words":n.push({...jp,bold:r.bold,italic:r.italic,text:r.text});break;case"shapes":this.sink.add("drawing-left-out");break;case"lost":this.sink.add(`${r.what}-lost`)}return n}picture(e){if(this.urls.has(e))return this.urls.get(e);let t,n=this.media.resolve(e,"image");if(n&&this.pictureUrl){try{let e=n.bytes.buffer instanceof ArrayBuffer?n.bytes:new Uint8Array(n.bytes),r=this.pictureUrl(e,n.type,n.pixels);t=wp.test(r)?r:void 0}catch{t=void 0}t===void 0&&this.sink.add("picture-url-refused",e)}else n&&(t=fd(n.type,n.bytes));return this.urls.set(e,t),t}line(e){let t=[];for(let n of e){if(!n.made&&n.text==="")continue;let e=t.at(-1),r=e?.code===!0&&n.code&&e.href===n.href;e&&!n.made&&!e.made&&(r||Np(e,n))?e.text+=n.text:t.push({...n})}let n="",r=0;for(;r<t.length;){let e=t[r].href,i="";for(;r<t.length&&t[r].href===e;)i=Rp(i,Lp(t[r],t[r-1]?.text.at(-1),t[r+1]?.text[0])),r++;let a=i.trim();n=Rp(n,e===void 0||a===""?i:i.slice(0,i.indexOf(a))+`[${a}](<${e}>)`+i.slice(i.indexOf(a)+a.length))}return n.split(`\\
`).map(e=>Bp(e.replace(/[ \t\u00A0]+/g," ").trim())).filter(e=>e!=="").join(`\\
`)}table(e){let t=1;for(let n of e.rows)for(let e of n.cells)t=Math.max(t,e.column+e.span);t=Math.min(t,63);let n=[];for(let r of e.rows){y(t);let e=Array.from({length:t},()=>"");for(let n of r.cells)n.column<t&&(e[n.column]=this.cell(n));n.push("| "+e.map(e=>e===""?" ":e).join(" | ")+" |"),n.length===1&&n.push("|"+" --- |".repeat(t))}return n.join(`
`)}cell(e){let t=[];for(let n of this.mended(e.blocks)){if(y(1),n.kind==="table"){let e=n.rows.map(e=>e.cells.map(e=>this.cell(e)).filter(e=>e!=="").join("; ")).filter(e=>e!=="");t.push(...e);continue}let e=[],r=this.line(this.pieces(n.inlines,e,n.base)).replace(/\\\n/g,"<br>");(r.trim()!==""||e.length!==0)&&(n.label?.item?r=(n.label.bullet?"\u2022 ":zp(n.label.text)+" ")+r:n.heading!==void 0&&r!==""&&(r="**"+r+"**"),t.push(r,...e.filter(e=>!e.code).map(e=>e.text.replace(/\n/g,"<br>"))))}return t.filter(e=>e!=="").join("<br>").replace(/(\\*)\|/g,(e,t)=>t.length%2==0?`${t}\\|`:`${t}|`)}};function Np(e,t){return e.bold===t.bold&&e.italic===t.italic&&e.strike===t.strike&&e.code===t.code&&e.href===t.href}function Pp(e,t){let n=0,r=0;for(let i of e)r=i===t?r+1:0,n=Math.max(n,r);return n}const Fp=/[\p{L}\p{N}]/u,Ip=/[\p{P}\p{S}]/u;function Lp(e,t,n){if(e.made)return e.text;let r=/[\n\r]/.test(e.text)?e.text.replace(/[\n\r]+/g," "):e.text,i=r.trim();if(i==="")return r;let a=r.indexOf(i),o=r.slice(0,a),s=r.slice(a+i.length),c=o===""&&t!==void 0&&Fp.test(t)&&Ip.test(i[0]),l=s===""&&n!==void 0&&Fp.test(n)&&Ip.test(i.at(-1)),u;if(!e.code&&(c||l))u=zp(i);else if(e.code){let e=i.replace(/\s+/g," "),t="`".repeat(Pp(e,"`")+1),n=e.startsWith("`")||e.endsWith("`")?" ":"";u=t+n+e+n+t}else u=zp(i),e.italic&&(u="*"+u+"*"),e.bold&&(u="**"+u+"**"),e.strike&&(u="~~"+u+"~~");return o+u+s}function Rp(e,t){return t.startsWith("[")&&e.endsWith("!")?e.slice(0,-1)+"\\!"+t:t.startsWith("(")&&e.endsWith("]")?e+"\\"+t:e+t}function zp(e){return e.replace(/[\\`*_[\]<>~]/g,"\\$&").replace(/&(?=#?\w{1,31};)/g,"\\&").replace(/[\n\r]/g," ")}function Bp(e){return e.replace(/^(#{1,6}(?=\s|$)|>|[+-](?=\s|$)|={1,}\s*$|-{2,}\s*$)/,"\\$1").replace(/^(\d{1,9})([.)])(?=\s|$)/,"$1\\$2")}function Vp(e,t={}){let i=n(r({markupBytes:16777216}),t.budgets??{}),a=new S;return g(i,()=>{try{let n=new Ki(e,t.limits??{},i,a),r=new Bu(n,a).read();return n.document=void 0,n.archive.forgetAllXml(),m(),{ir:r,pkg:n,budgets:i,sink:a}}catch(e){throw m(),e}},t.stop)}function Hp(e,t){let n=performance.now(),r=()=>performance.now()-n>4e3,i=[];try{let a=t.parseDocument(new Uint8Array(e),{stop:r}),{markdown:o}=t.emitMarkdown(a,{pictureUrl:(e,t)=>{let n="data:,wordpic"+i.length;return i.push({token:n,bytes:e,type:t}),n},stop:r});return{status:"ready",markdown:o,pictures:i,ms:performance.now()-n}}catch(e){if(e instanceof t.OoxmlError)return{status:"failed",reason:e.code==="invalid"?"invalid":e.code==="stopped"?"stopped":"too_large",ms:performance.now()-n};throw e}}self.addEventListener("message",t=>{let{id:n,bytes:r}=t.data??{};if(typeof n!="number"||!(r instanceof ArrayBuffer))return;let i={id:n,result:Hp(r,{parseDocument:Vp,emitMarkdown:Cp,OoxmlError:e})},a=i.result.status==="ready"?i.result.pictures.map(e=>e.bytes.buffer):[];self.postMessage(i,a)});