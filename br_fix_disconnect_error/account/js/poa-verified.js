/*! For license information please see poa-verified.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):"function"==typeof define&&define.amd?define(["@deriv/components","@deriv/shared","@deriv/translations","react"],t):"object"==typeof exports?exports["@deriv/account"]=t(require("@deriv/components"),require("@deriv/shared"),require("@deriv/translations"),require("react")):e["@deriv/account"]=t(e["@deriv/components"],e["@deriv/shared"],e["@deriv/translations"],e.react)}(self,(function(e,t,n,o){return(()=>{var r={"./Components/icon-message-content/index.js":(e,t,n)=>{"use strict";n.d(t,{default:()=>u});var o=n("react"),r=n.n(o),a=n("../../../node_modules/prop-types/index.js"),s=n("../../../node_modules/classnames/index.js"),i=n.n(s),c=n("@deriv/components"),p=n("@deriv/shared");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=function(e){var t=e.children,n=e.className,o=e.full_width,a=e.icon,s=e.icon_row,l=e.message,u=e.text;return r().createElement(c.Div100vhContainer,{className:i()("account-management__message-wrapper",{"account-management__message-wrapper-full-width":o}),is_disabled:(0,p.isDesktop)(),height_offset:"110px"},r().createElement("div",{className:i()("account-management__message-content",d({},"".concat(n,"__message-content"),n))},a&&r().createElement("div",{className:i()("account-management__message-icon",d({},"".concat(n,"__message-icon"),n))},a),s&&r().createElement("div",null,s),r().createElement(c.Text,{as:"div",color:"general",weight:"bold",size:"s",align:"center",className:i()("account-management__message",d({},"".concat(n,"__message"),n))},l),u&&r().createElement("div",{className:"account-management__text-container"},r().createElement(c.Text,{className:i()(d({},"".concat(n,"__text"),n)),as:"p",size:"xs",align:"center"},u)),t))};l.propTypes={children:a.PropTypes.oneOfType([a.PropTypes.object,a.PropTypes.array]),className:a.PropTypes.string,full_width:a.PropTypes.bool,icon:a.PropTypes.object,message:a.PropTypes.oneOfType([a.PropTypes.node,a.PropTypes.string,a.PropTypes.object]),text:a.PropTypes.oneOfType([a.PropTypes.string,a.PropTypes.element])};const u=l},"./Components/poa-continue-trading-button/continue-trading-button.jsx":(e,t,n)=>{"use strict";n.d(t,{M:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),a=n("react"),s=n.n(a),i=function(){return s().createElement(o.ButtonLink,{className:"account-management__button",to:"/"},s().createElement(o.Text,{className:"dc-btn__text",as:"p",weight:"bold"},(0,r.localize)("Continue trading")))}},"./Components/poi-button/poi-button.jsx":(e,t,n)=>{"use strict";n.d(t,{x:()=>i});var o=n("@deriv/components"),r=n("@deriv/translations"),a=n("react"),s=n.n(a),i=function(){return s().createElement(o.ButtonLink,{className:"account-management__button",to:"/account/proof-of-identity"},s().createElement(o.Text,{className:"dc-btn__text",weight:"bold",as:"p"},(0,r.localize)("Proof of identity")))}},"../../../node_modules/classnames/index.js":(e,t)=>{var n;!function(){"use strict";var o={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===a)for(var i in n)o.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},"../../../node_modules/prop-types/factoryWithThrowingShims.js":(e,t,n)=>{"use strict";var o=n("../../../node_modules/prop-types/lib/ReactPropTypesSecret.js");function r(){}function a(){}a.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,a,s){if(s!==o){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:r};return n.PropTypes=n,n}},"../../../node_modules/prop-types/index.js":(e,t,n)=>{e.exports=n("../../../node_modules/prop-types/factoryWithThrowingShims.js")()},"../../../node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"@deriv/components":t=>{"use strict";t.exports=e},"@deriv/shared":e=>{"use strict";e.exports=t},"@deriv/translations":e=>{"use strict";e.exports=n},react:e=>{"use strict";e.exports=o}},a={};function s(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return r[e](t,t.exports,s),t.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};return(()=>{"use strict";s.d(i,{default:()=>f});var e=s("react"),t=s.n(e),n=s("../../../node_modules/classnames/index.js"),o=s.n(n),r=s("../../../node_modules/prop-types/index.js"),a=s("@deriv/components"),c=s("@deriv/shared"),p=s("@deriv/translations"),d=s("./Components/poi-button/poi-button.jsx"),l=s("./Components/icon-message-content/index.js"),u=s("./Components/poa-continue-trading-button/continue-trading-button.jsx"),m=function(e){var n=e.needs_poi,r=e.is_description_enabled,s=void 0===r||r,i=t().useContext(c.PlatformContext).is_dashboard,m=(0,p.localize)("Your proof of address is verified");return n?t().createElement("div",{className:o()("account-management__container",{"account-management__container-dashboard":i})},t().createElement(l.default,{message:m,text:(0,p.localize)("To continue trading, you must also submit a proof of identity."),icon:t().createElement(a.Icon,{icon:"IcPoaVerified",size:128}),className:i&&"account-management-dashboard"},t().createElement(d.x,null))):t().createElement("div",{className:o()("account-management__container",{"account-management__container-dashboard":i})},t().createElement(l.default,{message:m,icon:t().createElement(a.Icon,{icon:"IcPoaVerified",size:128,className:i&&"account-management-dashboard"})},!s&&t().createElement(u.M,null)))};m.PropTypes={needs_poi:r.PropTypes.bool,is_description_disabled:r.PropTypes.bool};const f=m})(),i.default})()}));