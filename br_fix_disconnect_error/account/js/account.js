!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","mobx","mobx-react","react","react-dom","react-router","react-router-dom"],r):"object"==typeof exports?exports["@deriv/account"]=r(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/account"]=r(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.mobx,e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,(function(e,r,t,o,n,a,d,i,u){return(()=>{"use strict";var c,s,l,p,m={"@deriv/components":r=>{r.exports=e},"@deriv/shared":e=>{e.exports=r},"@deriv/translations":e=>{e.exports=t},mobx:e=>{e.exports=o},"mobx-react":e=>{e.exports=n},react:e=>{e.exports=a},"react-dom":e=>{e.exports=d},"react-router":e=>{e.exports=i},"react-router-dom":e=>{e.exports=u}},f={};function b(e){if(f[e])return f[e].exports;var r=f[e]={id:e,loaded:!1,exports:{}};return m[e].call(r.exports,r,r.exports,b),r.loaded=!0,r.exports}b.m=m,b.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return b.d(r,{a:r}),r},b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>"account/js/account."+e+"."+{404:"6ed0f72fce9cb3218833","vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-9652e4":"c7e4a1d82557fd6e4666","account-app":"58d27889981e39ac867d"}[e]+".js",b.miniCssF=e=>"account/css/"+e+".b24e1afd5d29e6167440.css",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),c={},s="@deriv/account:",b.l=(e,r,t,o)=>{if(c[e])c[e].push(r);else{var n,a;if(void 0!==t)for(var d=document.getElementsByTagName("script"),i=0;i<d.length;i++){var u=d[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==s+t){n=u;break}}n||(a=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,b.nc&&n.setAttribute("nonce",b.nc),n.setAttribute("data-webpack",s+t),n.src=e),c[e]=[r];var l=(r,t)=>{n.onerror=n.onload=null,clearTimeout(p);var o=c[e];if(delete c[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(t))),r)return r(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),a&&document.head.appendChild(n)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},b.p="/br_fix_disconnect_error/",l=e=>new Promise(((r,t)=>{var o=b.miniCssF(e),n=b.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var n=(d=t[o]).getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(n===e||n===r))return d}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){var d;if((n=(d=a[o]).getAttribute("data-href"))===e||n===r)return d}})(o,n))return r();((e,r,t,o)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css",n.onerror=n.onload=a=>{if(n.onerror=n.onload=null,"load"===a.type)t();else{var d=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.href||r,u=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=d,u.request=i,n.parentNode.removeChild(n),o(u)}},n.href=r,document.head.appendChild(n)})(e,n,r,t)})),p={account:0},b.f.miniCss=(e,r)=>{p[e]?r.push(p[e]):0!==p[e]&&{"account-app":1}[e]&&r.push(p[e]=l(e).then((()=>{p[e]=0}),(r=>{throw delete p[e],r})))},(()=>{var e={account:0};b.f.j=(r,t)=>{var o=b.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var n=new Promise(((t,n)=>{o=e[r]=[t,n]}));t.push(o[2]=n);var a=b.p+b.u(r),d=new Error;b.l(a,(t=>{if(b.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+r+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,o[1](d)}}),"chunk-"+r,r)}};var r=(r,t)=>{for(var o,n,[a,d,i]=t,u=0,c=[];u<a.length;u++)n=a[u],b.o(e,n)&&e[n]&&c.push(e[n][0]),e[n]=0;for(o in d)b.o(d,o)&&(b.m[o]=d[o]);for(i&&i(b),r&&r(t);c.length;)c.shift()()},t=self.webpackChunk_deriv_account=self.webpackChunk_deriv_account||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var v={};return(()=>{b.d(v,{default:()=>n});var e=b("react"),r=b.n(e),t=b("@deriv/shared"),o=b("@deriv/components");const n=(0,t.makeLazyLoader)((function(){return Promise.all([b.e("vendors-node_modules_binary-com_binary-document-uploader_DocumentUploader_js-node_modules_bow-9652e4"),b.e("account-app")]).then(b.bind(b,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),v.default})()}));