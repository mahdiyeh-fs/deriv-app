!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@deriv/components"),require("@deriv/components/src/hooks"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/components/src/hooks","@deriv/shared","@deriv/translations","mobx","mobx-react","react","react-dom","react-router","react-router-dom"],r):"object"==typeof exports?exports["@deriv/cashier"]=r(require("@deriv/components"),require("@deriv/components/src/hooks"),require("@deriv/shared"),require("@deriv/translations"),require("mobx"),require("mobx-react"),require("react"),require("react-dom"),require("react-router"),require("react-router-dom")):e["@deriv/cashier"]=r(e["@deriv/components"],e["@deriv/components/src/hooks"],e["@deriv/shared"],e["@deriv/translations"],e.mobx,e["mobx-react"],e.react,e["react-dom"],e["react-router"],e["react-router-dom"])}(self,(function(e,r,t,o,a,n,i,s,d,c){return(()=>{"use strict";var u,l,m,p,f={"@deriv/components":r=>{r.exports=e},"@deriv/components/src/hooks":e=>{e.exports=r},"@deriv/shared":e=>{e.exports=t},"@deriv/translations":e=>{e.exports=o},mobx:e=>{e.exports=a},"mobx-react":e=>{e.exports=n},react:e=>{e.exports=i},"react-dom":e=>{e.exports=s},"react-router":e=>{e.exports=d},"react-router-dom":e=>{e.exports=c}},h={};function v(e){var r=h[e];if(void 0!==r)return r.exports;var t=h[e]={id:e,loaded:!1,exports:{}};return f[e].call(t.exports,t,t.exports,v),t.loaded=!0,t.exports}v.m=f,v.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return v.d(r,{a:r}),r},v.d=(e,r)=>{for(var t in r)v.o(r,t)&&!v.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},v.f={},v.e=e=>Promise.all(Object.keys(v.f).reduce(((r,t)=>(v.f[t](e,r),r)),[])),v.u=e=>"cashier/js/cashier."+e+"."+{404:"29888f112ca8a6514729","vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08":"60459e35f0b2aabd4776","cashier-app":"53970bfc951a142c8abf"}[e]+".js",v.miniCssF=e=>"cashier/css/"+e+".e6b4ba62fbb23365f842.css",v.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),v.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),u={},l="@deriv/cashier:",v.l=(e,r,t,o)=>{if(u[e])u[e].push(r);else{var a,n;if(void 0!==t)for(var i=document.getElementsByTagName("script"),s=0;s<i.length;s++){var d=i[s];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==l+t){a=d;break}}a||(n=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,v.nc&&a.setAttribute("nonce",v.nc),a.setAttribute("data-webpack",l+t),a.src=e),u[e]=[r];var c=(r,t)=>{a.onerror=a.onload=null,clearTimeout(m);var o=u[e];if(delete u[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),r)return r(t)},m=setTimeout(c.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=c.bind(null,a.onerror),a.onload=c.bind(null,a.onload),n&&document.head.appendChild(a)}},v.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},v.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),v.p="/br_hotfix_trading_password/",m=e=>new Promise(((r,t)=>{var o=v.miniCssF(e),a=v.p+o;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=(i=t[o]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===r))return i}var n=document.getElementsByTagName("style");for(o=0;o<n.length;o++){var i;if((a=(i=n[o]).getAttribute("data-href"))===e||a===r)return i}})(o,a))return r();((e,r,t,o)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=n=>{if(a.onerror=a.onload=null,"load"===n.type)t();else{var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=s,a.parentNode.removeChild(a),o(d)}},a.href=r,document.head.appendChild(a)})(e,a,r,t)})),p={cashier:0},v.f.miniCss=(e,r)=>{p[e]?r.push(p[e]):0!==p[e]&&{"cashier-app":1}[e]&&r.push(p[e]=m(e).then((()=>{p[e]=0}),(r=>{throw delete p[e],r})))},(()=>{var e={cashier:0};v.f.j=(r,t)=>{var o=v.o(e,r)?e[r]:void 0;if(0!==o)if(o)t.push(o[2]);else{var a=new Promise(((t,a)=>o=e[r]=[t,a]));t.push(o[2]=a);var n=v.p+v.u(r),i=new Error;v.l(n,(t=>{if(v.o(e,r)&&(0!==(o=e[r])&&(e[r]=void 0),o)){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+n+")",i.name="ChunkLoadError",i.type=a,i.request=n,o[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var o,a,[n,i,s]=t,d=0;if(n.some((r=>0!==e[r]))){for(o in i)v.o(i,o)&&(v.m[o]=i[o]);s&&s(v)}for(r&&r(t);d<n.length;d++)a=n[d],v.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunk_deriv_cashier=self.webpackChunk_deriv_cashier||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var b={};return(()=>{v.d(b,{default:()=>a});var e=v("react"),r=v.n(e),t=v("@deriv/shared"),o=v("@deriv/components");const a=(0,t.makeLazyLoader)((function(){return Promise.all([v.e("vendors-node_modules_classnames_index_js-node_modules_formik_dist_formik_esm_js-node_modules_-0c3e08"),v.e("cashier-app")]).then(v.bind(v,"./App.jsx"))}),(function(){return r().createElement(o.Loading,null)}))()})(),b.default})()}));