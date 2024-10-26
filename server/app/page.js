(()=>{var e={};e.id=931,e.ids=[931],e.modules={399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},8393:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>f,pages:()=>c,routeModule:()=>d,tree:()=>u});var n=r(3003),i=r(4293),a=r(6550),o=r.n(a),s=r(6979),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let u=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,9012)),"/Users/graciela.benites/Documents/Estrella/practicas/random-questions/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,6877)),"/Users/graciela.benites/Documents/Estrella/practicas/random-questions/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2075,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/graciela.benites/Documents/Estrella/practicas/random-questions/app/page.tsx"],f={require:r,loadChunk:()=>Promise.resolve()},d=new n.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:u}})},9526:(e,t,r)=>{Promise.resolve().then(r.bind(r,5752))},4442:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6114,23)),Promise.resolve().then(r.t.bind(r,2639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,9671,23)),Promise.resolve().then(r.t.bind(r,1868,23)),Promise.resolve().then(r.t.bind(r,4759,23)),Promise.resolve().then(r.t.bind(r,2816,23))},153:()=>{},5752:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n,i=r(8819),a=r(7266);!function(e){e.title="title",e.answer="answer"}(n||(n={}));let o=(0,a.createContext)([[],()=>{}]),s=()=>{let e={title:"",answer:""},[t,r]=(0,a.useContext)(o),[s,l]=(0,a.useState)(e),[u,c]=(0,a.useState)(!0),f=(0,a.useRef)(null),d=(0,a.useCallback)(()=>{s.answer&&s.title&&c(!1)},[u,s]),p=(e,t)=>{let r={};r[e]=t,l({...s,...r})};return(0,a.useEffect)(()=>{f.current?.focus()},[]),(0,a.useEffect)(()=>{d()},[s,d]),(0,i.jsxs)("div",{className:"item-component flex justify-between",children:[(0,i.jsxs)("label",{className:"block",children:[(0,i.jsx)("span",{className:"block text-sm font-medium text-slate-700",children:"Add Title Item"}),(0,i.jsx)("input",{type:"text",placeholder:"...add title",className:"mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ",value:s.title,ref:f,onChange:e=>p(n.title,e.target.value)})]}),(0,i.jsxs)("label",{className:"block ml-3",children:[(0,i.jsx)("span",{className:"block text-sm font-medium text-slate-700",children:"Add Answer Item"}),(0,i.jsx)("input",{type:"text",placeholder:"...add answer",className:"mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 ",value:s.answer,onChange:e=>p(n.answer,e.target.value)})]}),(0,i.jsx)("div",{className:"content-end ml-6",children:(0,i.jsx)("button",{disabled:u,"aria-disabled":u,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50",onClick:()=>{l(e),r(()=>[...t,s]),c(!0)},children:"Add"})})]})},l=({questionSelected:e})=>{let[t]=(0,a.useContext)(o),[r,n]=(0,a.useState)(!1);(0,a.useEffect)(()=>{n(()=>t.length>0)},[t]);let s=(0,a.useCallback)(()=>{let r=Math.trunc(Math.random()*t.length);e(t[r])},[t,e]);return(0,i.jsx)("div",{className:"questions-component flex justify-center bg-white",children:(0,i.jsx)("button",{"aria-disabled":!r,disabled:!r,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50",onClick:s,children:"Make a Ramdom Question"})})},u=({questionSelected:e})=>{let[t,r]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"result-questions mt-6 bg-white",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"inline-block text-lg font-bold",children:"Question:"}),(0,i.jsx)("button",{"aria-label":"show answer question button",onClick:()=>{r(!t)},className:"text-sky-800 hover:text-sky-600 font-bold rounded inline-block ml-6 text-sm",children:"Show answer"})]}),(0,i.jsx)("p",{children:e.title}),(0,i.jsx)("div",{className:"mt-6",children:t?(0,i.jsx)("p",{className:"font-light text-lg",children:e.answer}):(0,i.jsx)(i.Fragment,{})})]})};function c(){var e;let t;(e=t||(t={})).Show="Show",e.Hide="Hide";let[r]=(0,a.useContext)(o),[n,s]=(0,a.useState)(!0),l=r.map((e,t)=>(0,i.jsx)("li",{children:e.title},`${t}-${e.title}`));return(0,i.jsx)("div",{className:"showItem-component mt-6",children:(0,i.jsxs)("div",{className:"flex flex-col",children:[(0,i.jsxs)("div",{className:"flex justify-between content-center mb-4",children:[(0,i.jsx)("p",{className:"font-semibold text-lg ",children:"Questions List"}),(0,i.jsx)("button",{"aria-label":0===r.length?"disable button":"enable button",disabled:0===r.length,onClick:()=>{s(!n)},className:"bg-sky-500 text-white hover:bg-sky-700 px-5 py-1 rounded text-xs font-semibold disabled:opacity-50",children:n?"Show":"Hide"})]}),(0,i.jsx)(i.Fragment,{children:n?(0,i.jsx)("ul",{className:"font-light",children:l}):(0,i.jsx)(i.Fragment,{})})]})})}let f=()=>{let[e,t]=(0,a.useState)({title:"f",answer:"d"});return(0,i.jsxs)("div",{className:"list-component container m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-6",children:[(0,i.jsxs)("div",{className:"col-span-1 sm:col-span-2 md:col-span-2",children:[(0,i.jsx)(s,{}),(0,i.jsx)(c,{})]}),(0,i.jsxs)("div",{className:"col-span-1 sm:col-span-2 md:col-span-2 bg-white p-4 rounded",children:[(0,i.jsx)(l,{questionSelected:e=>{t(e)}}),(0,i.jsx)(u,{questionSelected:e})]})]})};function d(){let[e,t]=(0,a.useState)([]);return(0,i.jsx)(o.Provider,{value:[e,t],children:(0,i.jsx)(f,{})})}},6877:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u,metadata:()=>l});var n=r(9351),i=r(8215),a=r.n(i),o=r(623),s=r.n(o);r(7272);let l={title:"Create Next App",description:"Generated by create next app"};function u({children:e}){return(0,n.jsx)("html",{lang:"en",children:(0,n.jsx)("body",{className:`${a().variable} ${s().variable} antialiased`,children:e})})}},9012:(e,t,r)=>{"use strict";r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>e});var i=r(1851);let e=(await (0,i.createProxy)(String.raw`/Users/graciela.benites/Documents/Estrella/practicas/random-questions/app/page.tsx`)).default;n()}catch(e){n(e)}},1)},2379:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{t.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var i={},a=t.split(n),o=(r||{}).decode||e,s=0;s<a.length;s++){var l=a[s],u=l.indexOf("=");if(!(u<0)){var c=l.substr(0,u).trim(),f=l.substr(++u,l.length).trim();'"'==f[0]&&(f=f.slice(1,-1)),void 0==i[c]&&(i[c]=function(e,t){try{return t(e)}catch(t){return e}}(f,o))}}return i},t.serialize=function(e,t,n){var a=n||{},o=a.encode||r;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!i.test(e))throw TypeError("argument name is invalid");var s=o(t);if(s&&!i.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=a.maxAge){var u=a.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(u)}if(a.domain){if(!i.test(a.domain))throw TypeError("option domain is invalid");l+="; Domain="+a.domain}if(a.path){if(!i.test(a.path))throw TypeError("option path is invalid");l+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var e=decodeURIComponent,r=encodeURIComponent,n=/; */,i=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/})(),e.exports=t})()},5394:e=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab=__dirname+"/");var t={};(()=>{function e(e,t){void 0===t&&(t={});for(var r=function(e){for(var t=[],r=0;r<e.length;){var n=e[r];if("*"===n||"+"===n||"?"===n){t.push({type:"MODIFIER",index:r,value:e[r++]});continue}if("\\"===n){t.push({type:"ESCAPED_CHAR",index:r++,value:e[r++]});continue}if("{"===n){t.push({type:"OPEN",index:r,value:e[r++]});continue}if("}"===n){t.push({type:"CLOSE",index:r,value:e[r++]});continue}if(":"===n){for(var i="",a=r+1;a<e.length;){var o=e.charCodeAt(a);if(o>=48&&o<=57||o>=65&&o<=90||o>=97&&o<=122||95===o){i+=e[a++];continue}break}if(!i)throw TypeError("Missing parameter name at "+r);t.push({type:"NAME",index:r,value:i}),r=a;continue}if("("===n){var s=1,l="",a=r+1;if("?"===e[a])throw TypeError('Pattern cannot start with "?" at '+a);for(;a<e.length;){if("\\"===e[a]){l+=e[a++]+e[a++];continue}if(")"===e[a]){if(0==--s){a++;break}}else if("("===e[a]&&(s++,"?"!==e[a+1]))throw TypeError("Capturing groups are not allowed at "+a);l+=e[a++]}if(s)throw TypeError("Unbalanced pattern at "+r);if(!l)throw TypeError("Missing pattern at "+r);t.push({type:"PATTERN",index:r,value:l}),r=a;continue}t.push({type:"CHAR",index:r,value:e[r++]})}return t.push({type:"END",index:r,value:""}),t}(e),n=t.prefixes,a=void 0===n?"./":n,o="[^"+i(t.delimiter||"/#?")+"]+?",s=[],l=0,u=0,c="",f=function(e){if(u<r.length&&r[u].type===e)return r[u++].value},d=function(e){var t=f(e);if(void 0!==t)return t;var n=r[u];throw TypeError("Unexpected "+n.type+" at "+n.index+", expected "+e)},p=function(){for(var e,t="";e=f("CHAR")||f("ESCAPED_CHAR");)t+=e;return t};u<r.length;){var m=f("CHAR"),h=f("NAME"),g=f("PATTERN");if(h||g){var x=m||"";-1===a.indexOf(x)&&(c+=x,x=""),c&&(s.push(c),c=""),s.push({name:h||l++,prefix:x,suffix:"",pattern:g||o,modifier:f("MODIFIER")||""});continue}var v=m||f("ESCAPED_CHAR");if(v){c+=v;continue}if(c&&(s.push(c),c=""),f("OPEN")){var x=p(),y=f("NAME")||"",b=f("PATTERN")||"",E=p();d("CLOSE"),s.push({name:y||(b?l++:""),pattern:y&&!b?o:b,prefix:x,suffix:E,modifier:f("MODIFIER")||""});continue}d("END")}return s}function r(e,t){void 0===t&&(t={});var r=a(t),n=t.encode,i=void 0===n?function(e){return e}:n,o=t.validate,s=void 0===o||o,l=e.map(function(e){if("object"==typeof e)return RegExp("^(?:"+e.pattern+")$",r)});return function(t){for(var r="",n=0;n<e.length;n++){var a=e[n];if("string"==typeof a){r+=a;continue}var o=t?t[a.name]:void 0,u="?"===a.modifier||"*"===a.modifier,c="*"===a.modifier||"+"===a.modifier;if(Array.isArray(o)){if(!c)throw TypeError('Expected "'+a.name+'" to not repeat, but got an array');if(0===o.length){if(u)continue;throw TypeError('Expected "'+a.name+'" to not be empty')}for(var f=0;f<o.length;f++){var d=i(o[f],a);if(s&&!l[n].test(d))throw TypeError('Expected all "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');r+=a.prefix+d+a.suffix}continue}if("string"==typeof o||"number"==typeof o){var d=i(String(o),a);if(s&&!l[n].test(d))throw TypeError('Expected "'+a.name+'" to match "'+a.pattern+'", but got "'+d+'"');r+=a.prefix+d+a.suffix;continue}if(!u){var p=c?"an array":"a string";throw TypeError('Expected "'+a.name+'" to be '+p)}}return r}}function n(e,t,r){void 0===r&&(r={});var n=r.decode,i=void 0===n?function(e){return e}:n;return function(r){var n=e.exec(r);if(!n)return!1;for(var a=n[0],o=n.index,s=Object.create(null),l=1;l<n.length;l++)!function(e){if(void 0!==n[e]){var r=t[e-1];"*"===r.modifier||"+"===r.modifier?s[r.name]=n[e].split(r.prefix+r.suffix).map(function(e){return i(e,r)}):s[r.name]=i(n[e],r)}}(l);return{path:a,index:o,params:s}}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function a(e){return e&&e.sensitive?"":"i"}function o(e,t,r){void 0===r&&(r={});for(var n=r.strict,o=void 0!==n&&n,s=r.start,l=r.end,u=r.encode,c=void 0===u?function(e){return e}:u,f="["+i(r.endsWith||"")+"]|$",d="["+i(r.delimiter||"/#?")+"]",p=void 0===s||s?"^":"",m=0;m<e.length;m++){var h=e[m];if("string"==typeof h)p+=i(c(h));else{var g=i(c(h.prefix)),x=i(c(h.suffix));if(h.pattern){if(t&&t.push(h),g||x){if("+"===h.modifier||"*"===h.modifier){var v="*"===h.modifier?"?":"";p+="(?:"+g+"((?:"+h.pattern+")(?:"+x+g+"(?:"+h.pattern+"))*)"+x+")"+v}else p+="(?:"+g+"("+h.pattern+")"+x+")"+h.modifier}else p+="("+h.pattern+")"+h.modifier}else p+="(?:"+g+x+")"+h.modifier}}if(void 0===l||l)o||(p+=d+"?"),p+=r.endsWith?"(?="+f+")":"$";else{var y=e[e.length-1],b="string"==typeof y?d.indexOf(y[y.length-1])>-1:void 0===y;o||(p+="(?:"+d+"(?="+f+"))?"),b||(p+="(?="+d+"|"+f+")")}return new RegExp(p,a(r))}function s(t,r,n){return t instanceof RegExp?function(e,t){if(!t)return e;var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:"",suffix:"",modifier:"",pattern:""});return e}(t,r):Array.isArray(t)?RegExp("(?:"+t.map(function(e){return s(e,r,n).source}).join("|")+")",a(n)):o(e(t,n),r,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.parse=e,t.compile=function(t,n){return r(e(t,n),n)},t.tokensToFunction=r,t.match=function(e,t){var r=[];return n(s(e,r,t),r,t)},t.regexpToFunction=n,t.tokensToRegexp=o,t.pathToRegexp=s})(),e.exports=t})()},771:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{fillMetadataSegment:function(){return f},normalizeMetadataPageToRoute:function(){return p},normalizeMetadataRoute:function(){return d}});let n=r(5847),i=function(e){return e&&e.__esModule?e:{default:e}}(r(2002)),a=r(9922),o=r(7716),s=r(7450),l=r(7613),u=r(9964);function c(e){let t="";return(e.includes("(")&&e.includes(")")||e.includes("@"))&&(t=(0,s.djb2Hash)(e).toString(36).slice(0,6)),t}function f(e,t,r){let n=(0,l.normalizeAppPath)(e),s=(0,o.getNamedRouteRegex)(n,!1),f=(0,a.interpolateDynamicPath)(n,t,s),d=c(e),p=d?`-${d}`:"",{name:m,ext:h}=i.default.parse(r);return(0,u.normalizePathSep)(i.default.join(f,`${m}${p}${h}`))}function d(e){if(!(0,n.isMetadataRoute)(e))return e;let t=e,r="";if("/robots"===e?t+=".txt":"/manifest"===e?t+=".webmanifest":r=c(e.slice(0,-(i.default.basename(e).length+1))),!t.endsWith("/route")){let{dir:e,name:n,ext:a}=i.default.parse(t);t=i.default.posix.join(e,`${n}${r?`-${r}`:""}${a}`,"route")}return t}function p(e,t){let r=e.endsWith("/route"),n=r?e.slice(0,-6):e,i=n.endsWith("/sitemap")?".xml":"";return(t?`${n}/[__metadata_id__]`:`${n}${i}`)+(r?"/route":"")}},5847:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{STATIC_METADATA_IMAGES:function(){return i},getExtensionRegexString:function(){return o},isMetadataRoute:function(){return c},isMetadataRouteFile:function(){return s},isStaticMetadataRoute:function(){return u},isStaticMetadataRouteFile:function(){return l}});let n=r(9964),i={icon:{filename:"icon",extensions:["ico","jpg","jpeg","png","svg"]},apple:{filename:"apple-icon",extensions:["jpg","jpeg","png"]},favicon:{filename:"favicon",extensions:["ico"]},openGraph:{filename:"opengraph-image",extensions:["jpg","jpeg","png","gif"]},twitter:{filename:"twitter-image",extensions:["jpg","jpeg","png","gif"]}},a=["js","jsx","ts","tsx"],o=(e,t)=>t?`(?:\\.(${e.join("|")})|((\\[\\])?\\.(${t.join("|")})))`:`\\.(?:${e.join("|")})`;function s(e,t,r){let a=[RegExp(`^[\\\\/]robots${r?`${o(t.concat("txt"),null)}$`:""}`),RegExp(`^[\\\\/]manifest${r?`${o(t.concat("webmanifest","json"),null)}$`:""}`),RegExp("^[\\\\/]favicon\\.ico$"),RegExp(`[\\\\/]sitemap${r?`${o(["xml"],t)}$`:""}`),RegExp(`[\\\\/]${i.icon.filename}\\d?${r?`${o(i.icon.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.apple.filename}\\d?${r?`${o(i.apple.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.openGraph.filename}\\d?${r?`${o(i.openGraph.extensions,t)}$`:""}`),RegExp(`[\\\\/]${i.twitter.filename}\\d?${r?`${o(i.twitter.extensions,t)}$`:""}`)],s=(0,n.normalizePathSep)(e);return a.some(e=>e.test(s))}function l(e){return s(e,[],!0)}function u(e){return"/robots"===e||"/manifest"===e||l(e)}function c(e){let t=e.replace(/^\/?app\//,"").replace(/\/route$/,"");return"/"!==t[0]&&(t="/"+t),!t.endsWith("/page")&&s(t,a,!1)}},304:(e,t,r)=>{"use strict";function n(e){return function(){let{cookie:t}=e;if(!t)return{};let{parse:n}=r(2379);return n(Array.isArray(t)?t.join("; "):t)}}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getCookieParser",{enumerable:!0,get:function(){return n}})},666:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{INTERCEPTION_ROUTE_MARKERS:function(){return i},extractInterceptionRouteInformation:function(){return o},isInterceptionRouteAppPath:function(){return a}});let n=r(7613),i=["(..)(..)","(.)","(..)","(...)"];function a(e){return void 0!==e.split("/").find(e=>i.find(t=>e.startsWith(t)))}function o(e){let t,r,a;for(let n of e.split("/"))if(r=i.find(e=>n.startsWith(e))){[t,a]=e.split(r,2);break}if(!t||!r||!a)throw Error(`Invalid interception route: ${e}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`);switch(t=(0,n.normalizeAppPath)(t),r){case"(.)":a="/"===t?`/${a}`:t+"/"+a;break;case"(..)":if("/"===t)throw Error(`Invalid interception route: ${e}. Cannot use (..) marker at the root level, use (.) instead.`);a=t.split("/").slice(0,-1).concat(a).join("/");break;case"(...)":a="/"+a;break;case"(..)(..)":let o=t.split("/");if(o.length<=2)throw Error(`Invalid interception route: ${e}. Cannot use (..)(..) marker at the root level or one level up.`);a=o.slice(0,-2).concat(a).join("/");break;default:throw Error("Invariant: unexpected marker")}return{interceptingRoute:t,interceptedRoute:a}}},9922:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getUtils:function(){return h},interpolateDynamicPath:function(){return p},normalizeDynamicRouteParams:function(){return m},normalizeVercelUrl:function(){return d}});let n=r(7360),i=r(934),a=r(9200),o=r(7716),s=r(4398),l=r(5442),u=r(7175),c=r(7613),f=r(4674);function d(e,t,r,i,a){if(i&&t&&a){let t=(0,n.parse)(e.url,!0);for(let e of(delete t.search,Object.keys(t.query))){let n=e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX),i=e!==f.NEXT_INTERCEPTION_MARKER_PREFIX&&e.startsWith(f.NEXT_INTERCEPTION_MARKER_PREFIX);(n||i||(r||Object.keys(a.groups)).includes(e))&&delete t.query[e]}e.url=(0,n.format)(t)}}function p(e,t,r){if(!r)return e;for(let n of Object.keys(r.groups)){let i;let{optional:a,repeat:o}=r.groups[n],s=`[${o?"...":""}${n}]`;a&&(s=`[${s}]`);let l=t[n];i=Array.isArray(l)?l.map(e=>e&&encodeURIComponent(e)).join("/"):l?encodeURIComponent(l):"",e=e.replaceAll(s,i)}return e}function m(e,t,r,n){let i=!0;return r?{params:e=Object.keys(r.groups).reduce((a,o)=>{let s=e[o];"string"==typeof s&&(s=(0,c.normalizeRscURL)(s)),Array.isArray(s)&&(s=s.map(e=>("string"==typeof e&&(e=(0,c.normalizeRscURL)(e)),e)));let l=n[o],u=r.groups[o].optional;return((Array.isArray(l)?l.some(e=>Array.isArray(s)?s.some(t=>t.includes(e)):null==s?void 0:s.includes(e)):null==s?void 0:s.includes(l))||void 0===s&&!(u&&t))&&(i=!1),u&&(!s||Array.isArray(s)&&1===s.length&&("index"===s[0]||s[0]===`[[...${o}]]`))&&(s=void 0,delete e[o]),s&&"string"==typeof s&&r.groups[o].repeat&&(s=s.split("/")),s&&(a[o]=s),a},{}),hasValidParams:i}:{params:e,hasValidParams:!1}}function h({page:e,i18n:t,basePath:r,rewrites:n,pageIsDynamic:c,trailingSlash:h,caseSensitive:g}){let x,v,y;return c&&(x=(0,o.getNamedRouteRegex)(e,!1),y=(v=(0,s.getRouteMatcher)(x))(e)),{handleRewrites:function(o,s){let f={},d=s.pathname,p=n=>{let u=(0,a.getPathMatch)(n.source+(h?"(/)?":""),{removeUnnamedParams:!0,strict:!0,sensitive:!!g})(s.pathname);if((n.has||n.missing)&&u){let e=(0,l.matchHas)(o,s.query,n.has,n.missing);e?Object.assign(u,e):u=!1}if(u){let{parsedDestination:a,destQuery:o}=(0,l.prepareDestination)({appendParamsToQuery:!0,destination:n.destination,params:u,query:s.query});if(a.protocol)return!0;if(Object.assign(f,o,u),Object.assign(s.query,a.query),delete a.query,Object.assign(s,a),d=s.pathname,r&&(d=d.replace(RegExp(`^${r}`),"")||"/"),t){let e=(0,i.normalizeLocalePath)(d,t.locales);d=e.pathname,s.query.nextInternalLocale=e.detectedLocale||u.nextInternalLocale}if(d===e)return!0;if(c&&v){let e=v(d);if(e)return s.query={...s.query,...e},!0}}return!1};for(let e of n.beforeFiles||[])p(e);if(d!==e){let t=!1;for(let e of n.afterFiles||[])if(t=p(e))break;if(!t&&!(()=>{let t=(0,u.removeTrailingSlash)(d||"");return t===(0,u.removeTrailingSlash)(e)||(null==v?void 0:v(t))})()){for(let e of n.fallback||[])if(t=p(e))break}}return f},defaultRouteRegex:x,dynamicRouteMatcher:v,defaultRouteMatches:y,getParamsFromRouteMatches:function(e,r,n){return(0,s.getRouteMatcher)(function(){let{groups:e,routeKeys:i}=x;return{re:{exec:a=>{let o=Object.fromEntries(new URLSearchParams(a)),s=t&&n&&o["1"]===n;for(let e of Object.keys(o)){let t=o[e];e!==f.NEXT_QUERY_PARAM_PREFIX&&e.startsWith(f.NEXT_QUERY_PARAM_PREFIX)&&(o[e.substring(f.NEXT_QUERY_PARAM_PREFIX.length)]=t,delete o[e])}let l=Object.keys(i||{}),u=e=>{if(t){let i=Array.isArray(e),a=i?e[0]:e;if("string"==typeof a&&t.locales.some(e=>e.toLowerCase()===a.toLowerCase()&&(n=e,r.locale=n,!0)))return i&&e.splice(0,1),!i||0===e.length}return!1};return l.every(e=>o[e])?l.reduce((t,r)=>{let n=null==i?void 0:i[r];return n&&!u(o[r])&&(t[e[n].pos]=o[r]),t},{}):Object.keys(o).reduce((e,t)=>{if(!u(o[t])){let r=t;return s&&(r=parseInt(t,10)-1+""),Object.assign(e,{[r]:o[t]})}return e},{})}},groups:e}}())(e.headers["x-now-route-matches"])},normalizeDynamicRouteParams:(e,t)=>m(e,t,x,y),normalizeVercelUrl:(e,t,r)=>d(e,t,r,c,x),interpolateDynamicPath:(e,t)=>p(e,t,x)}}},5316:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"escapeStringRegexp",{enumerable:!0,get:function(){return i}});let r=/[|\\{}()[\]^$+*?.-]/,n=/[|\\{}()[\]^$+*?.-]/g;function i(e){return r.test(e)?e.replace(n,"\\$&"):e}},7450:(e,t)=>{"use strict";function r(e){let t=5381;for(let r=0;r<e.length;r++)t=(t<<5)+t+e.charCodeAt(r)&0xffffffff;return t>>>0}function n(e){return r(e).toString(36).slice(0,5)}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{djb2Hash:function(){return r},hexHash:function(){return n}})},2531:(e,t)=>{"use strict";function r(e){return e.startsWith("/")?e:"/"+e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ensureLeadingSlash",{enumerable:!0,get:function(){return r}})},9964:(e,t)=>{"use strict";function r(e){return e.replace(/\\/g,"/")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"normalizePathSep",{enumerable:!0,get:function(){return r}})},7613:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{normalizeAppPath:function(){return a},normalizeRscURL:function(){return o}});let n=r(2531),i=r(9154);function a(e){return(0,n.ensureLeadingSlash)(e.split("/").reduce((e,t,r,n)=>!t||(0,i.isGroupSegment)(t)||"@"===t[0]||("page"===t||"route"===t)&&r===n.length-1?e:e+"/"+t,""))}function o(e){return e.replace(/\.rsc($|\?)/,"$1")}},1631:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseRelativeUrl",{enumerable:!0,get:function(){return i}}),r(8091);let n=r(5291);function i(e,t,r){void 0===r&&(r=!0);let i=new URL("http://n"),a=t?new URL(t,i):e.startsWith(".")?new URL("http://n"):i,{pathname:o,searchParams:s,search:l,hash:u,href:c,origin:f}=new URL(e,a);if(f!==i.origin)throw Error("invariant: invalid relative URL, router received "+e);return{pathname:o,query:r?(0,n.searchParamsToUrlQuery)(s):void 0,search:l,hash:u,href:c.slice(f.length)}}},7720:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"parseUrl",{enumerable:!0,get:function(){return a}});let n=r(5291),i=r(1631);function a(e){if(e.startsWith("/"))return(0,i.parseRelativeUrl)(e);let t=new URL(e);return{hash:t.hash,hostname:t.hostname,href:t.href,pathname:t.pathname,port:t.port,protocol:t.protocol,query:(0,n.searchParamsToUrlQuery)(t.searchParams),search:t.search}}},9200:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getPathMatch",{enumerable:!0,get:function(){return i}});let n=r(5394);function i(e,t){let r=[],i=(0,n.pathToRegexp)(e,r,{delimiter:"/",sensitive:"boolean"==typeof(null==t?void 0:t.sensitive)&&t.sensitive,strict:null==t?void 0:t.strict}),a=(0,n.regexpToFunction)((null==t?void 0:t.regexModifier)?new RegExp(t.regexModifier(i.source),i.flags):i,r);return(e,n)=>{if("string"!=typeof e)return!1;let i=a(e);if(!i)return!1;if(null==t?void 0:t.removeUnnamedParams)for(let e of r)"number"==typeof e.name&&delete i.params[e.name];return{...n,...i.params}}}},5442:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{compileNonPath:function(){return f},matchHas:function(){return c},prepareDestination:function(){return d}});let n=r(5394),i=r(5316),a=r(7720),o=r(666),s=r(2519),l=r(304);function u(e){return e.replace(/__ESC_COLON_/gi,":")}function c(e,t,r,n){void 0===r&&(r=[]),void 0===n&&(n=[]);let i={},a=r=>{let n;let a=r.key;switch(r.type){case"header":a=a.toLowerCase(),n=e.headers[a];break;case"cookie":n="cookies"in e?e.cookies[r.key]:(0,l.getCookieParser)(e.headers)()[r.key];break;case"query":n=t[a];break;case"host":{let{host:t}=(null==e?void 0:e.headers)||{};n=null==t?void 0:t.split(":",1)[0].toLowerCase()}}if(!r.value&&n)return i[function(e){let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);(n>64&&n<91||n>96&&n<123)&&(t+=e[r])}return t}(a)]=n,!0;if(n){let e=RegExp("^"+r.value+"$"),t=Array.isArray(n)?n.slice(-1)[0].match(e):n.match(e);if(t)return Array.isArray(t)&&(t.groups?Object.keys(t.groups).forEach(e=>{i[e]=t.groups[e]}):"host"===r.type&&t[0]&&(i.host=t[0])),!0}return!1};return!!r.every(e=>a(e))&&!n.some(e=>a(e))&&i}function f(e,t){if(!e.includes(":"))return e;for(let r of Object.keys(t))e.includes(":"+r)&&(e=e.replace(RegExp(":"+r+"\\*","g"),":"+r+"--ESCAPED_PARAM_ASTERISKS").replace(RegExp(":"+r+"\\?","g"),":"+r+"--ESCAPED_PARAM_QUESTION").replace(RegExp(":"+r+"\\+","g"),":"+r+"--ESCAPED_PARAM_PLUS").replace(RegExp(":"+r+"(?!\\w)","g"),"--ESCAPED_PARAM_COLON"+r));return e=e.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g,"\\$1").replace(/--ESCAPED_PARAM_PLUS/g,"+").replace(/--ESCAPED_PARAM_COLON/g,":").replace(/--ESCAPED_PARAM_QUESTION/g,"?").replace(/--ESCAPED_PARAM_ASTERISKS/g,"*"),(0,n.compile)("/"+e,{validate:!1})(t).slice(1)}function d(e){let t;let r=Object.assign({},e.query);delete r.__nextLocale,delete r.__nextDefaultLocale,delete r.__nextDataReq,delete r.__nextInferredLocaleFromDefault,delete r[s.NEXT_RSC_UNION_QUERY];let l=e.destination;for(let t of Object.keys({...e.params,...r}))l=t?l.replace(RegExp(":"+(0,i.escapeStringRegexp)(t),"g"),"__ESC_COLON_"+t):l;let c=(0,a.parseUrl)(l),d=c.query,p=u(""+c.pathname+(c.hash||"")),m=u(c.hostname||""),h=[],g=[];(0,n.pathToRegexp)(p,h),(0,n.pathToRegexp)(m,g);let x=[];h.forEach(e=>x.push(e.name)),g.forEach(e=>x.push(e.name));let v=(0,n.compile)(p,{validate:!1}),y=(0,n.compile)(m,{validate:!1});for(let[t,r]of Object.entries(d))Array.isArray(r)?d[t]=r.map(t=>f(u(t),e.params)):"string"==typeof r&&(d[t]=f(u(r),e.params));let b=Object.keys(e.params).filter(e=>"nextInternalLocale"!==e);if(e.appendParamsToQuery&&!b.some(e=>x.includes(e)))for(let t of b)t in d||(d[t]=e.params[t]);if((0,o.isInterceptionRouteAppPath)(p))for(let t of p.split("/")){let r=o.INTERCEPTION_ROUTE_MARKERS.find(e=>t.startsWith(e));if(r){"(..)(..)"===r?(e.params["0"]="(..)",e.params["1"]="(..)"):e.params["0"]=r;break}}try{let[r,n]=(t=v(e.params)).split("#",2);c.hostname=y(e.params),c.pathname=r,c.hash=(n?"#":"")+(n||""),delete c.search}catch(e){if(e.message.match(/Expected .*? to not repeat, but got an array/))throw Error("To use a multi-match in the destination you must add `*` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match");throw e}return c.query={...r,...c.query},{newUrl:t,destQuery:d,parsedDestination:c}}},5291:(e,t)=>{"use strict";function r(e){let t={};return e.forEach((e,r)=>{void 0===t[r]?t[r]=e:Array.isArray(t[r])?t[r].push(e):t[r]=[t[r],e]}),t}function n(e){return"string"!=typeof e&&("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;return Object.entries(e).forEach(e=>{let[r,i]=e;Array.isArray(i)?i.forEach(e=>t.append(r,n(e))):t.set(r,n(i))}),t}function a(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return r.forEach(t=>{Array.from(t.keys()).forEach(t=>e.delete(t)),t.forEach((t,r)=>e.append(r,t))}),e}Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return a},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return i}})},4398:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getRouteMatcher",{enumerable:!0,get:function(){return i}});let n=r(8091);function i(e){let{re:t,groups:r}=e;return e=>{let i=t.exec(e);if(!i)return!1;let a=e=>{try{return decodeURIComponent(e)}catch(e){throw new n.DecodeError("failed to decode param")}},o={};return Object.keys(r).forEach(e=>{let t=r[e],n=i[t.pos];void 0!==n&&(o[e]=~n.indexOf("/")?n.split("/").map(e=>a(e)):t.repeat?[a(n)]:a(n))}),o}}},7716:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getNamedMiddlewareRegex:function(){return h},getNamedRouteRegex:function(){return m},getRouteRegex:function(){return f},parseParameter:function(){return l}});let n=r(4674),i=r(666),a=r(5316),o=r(7175),s=/\[((?:\[.*\])|.+)\]/;function l(e){let t=e.match(s);return t?u(t[1]):u(e)}function u(e){let t=e.startsWith("[")&&e.endsWith("]");t&&(e=e.slice(1,-1));let r=e.startsWith("...");return r&&(e=e.slice(3)),{key:e,repeat:r,optional:t}}function c(e){let t=(0,o.removeTrailingSlash)(e).slice(1).split("/"),r={},n=1;return{parameterizedRoute:t.map(e=>{let t=i.INTERCEPTION_ROUTE_MARKERS.find(t=>e.startsWith(t)),o=e.match(s);if(t&&o){let{key:e,optional:i,repeat:s}=u(o[1]);return r[e]={pos:n++,repeat:s,optional:i},"/"+(0,a.escapeStringRegexp)(t)+"([^/]+?)"}if(!o)return"/"+(0,a.escapeStringRegexp)(e);{let{key:e,repeat:t,optional:i}=u(o[1]);return r[e]={pos:n++,repeat:t,optional:i},t?i?"(?:/(.+?))?":"/(.+?)":"/([^/]+?)"}}).join(""),groups:r}}function f(e){let{parameterizedRoute:t,groups:r}=c(e);return{re:RegExp("^"+t+"(?:/)?$"),groups:r}}function d(e){let{interceptionMarker:t,getSafeRouteKey:r,segment:n,routeKeys:i,keyPrefix:o}=e,{key:s,optional:l,repeat:c}=u(n),f=s.replace(/\W/g,"");o&&(f=""+o+f);let d=!1;(0===f.length||f.length>30)&&(d=!0),isNaN(parseInt(f.slice(0,1)))||(d=!0),d&&(f=r()),o?i[f]=""+o+s:i[f]=s;let p=t?(0,a.escapeStringRegexp)(t):"";return c?l?"(?:/"+p+"(?<"+f+">.+?))?":"/"+p+"(?<"+f+">.+?)":"/"+p+"(?<"+f+">[^/]+?)"}function p(e,t){let r;let s=(0,o.removeTrailingSlash)(e).slice(1).split("/"),l=(r=0,()=>{let e="",t=++r;for(;t>0;)e+=String.fromCharCode(97+(t-1)%26),t=Math.floor((t-1)/26);return e}),u={};return{namedParameterizedRoute:s.map(e=>{let r=i.INTERCEPTION_ROUTE_MARKERS.some(t=>e.startsWith(t)),o=e.match(/\[((?:\[.*\])|.+)\]/);if(r&&o){let[r]=e.split(o[0]);return d({getSafeRouteKey:l,interceptionMarker:r,segment:o[1],routeKeys:u,keyPrefix:t?n.NEXT_INTERCEPTION_MARKER_PREFIX:void 0})}return o?d({getSafeRouteKey:l,segment:o[1],routeKeys:u,keyPrefix:t?n.NEXT_QUERY_PARAM_PREFIX:void 0}):"/"+(0,a.escapeStringRegexp)(e)}).join(""),routeKeys:u}}function m(e,t){let r=p(e,t);return{...f(e),namedRegex:"^"+r.namedParameterizedRoute+"(?:/)?$",routeKeys:r.routeKeys}}function h(e,t){let{parameterizedRoute:r}=c(e),{catchAll:n=!0}=t;if("/"===r)return{namedRegex:"^/"+(n?".*":"")+"$"};let{namedParameterizedRoute:i}=p(e,!1);return{namedRegex:"^"+i+(n?"(?:(/.*)?)":"")+"$"}}},8091:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return m},MiddlewareNotFoundError:function(){return v},MissingStaticPage:function(){return x},NormalizeError:function(){return h},PageNotFoundError:function(){return g},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return o},getURL:function(){return s},isAbsoluteUrl:function(){return a},isResSent:function(){return u},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return c},stringifyError:function(){return y}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,i=Array(n),a=0;a<n;a++)i[a]=arguments[a];return r||(r=!0,t=e(...i)),t}}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,a=e=>i.test(e);function o(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function s(){let{href:e}=window.location,t=o();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function u(e){return e.finished||e.headersSent}function c(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function f(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&u(r))return n;if(!n)throw Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.');return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class h extends Error{}class g extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class x extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class v extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},7481:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=r(771);let i=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},7272:()=>{}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[147,226],()=>r(8393));module.exports=n})();