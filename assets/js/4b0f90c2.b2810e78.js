(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[5575],{2122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},9756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}var a=n.createContext({}),l=function(t){var e=n.useContext(a),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},s=function(t){var e=l(t.components);return n.createElement(a.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,i=t.mdxType,o=t.originalType,a=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=l(r),m=i,d=p["".concat(a,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(d,c(c({ref:e},s),{},{components:r})):n.createElement(d,c({ref:e},s))}));function m(t,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=r.length,c=new Array(o);c[0]=p;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:i,c[1]=u;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},3919:function(t,e,r){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function i(t){return void 0!==t&&!n(t)}r.d(e,{b:function(){return n},Z:function(){return i}})},4996:function(t,e,r){"use strict";r.d(e,{C:function(){return o},Z:function(){return c}});var n=r(2263),i=r(3919);function o(){var t=(0,n.Z)().siteConfig,e=(t=void 0===t?{}:t).baseUrl,r=void 0===e?"/":e,o=t.url;return{withBaseUrl:function(t,e){return function(t,e,r,n){var o=void 0===n?{}:n,c=o.forcePrependBaseUrl,u=void 0!==c&&c,a=o.absolute,l=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return e+r;var s=r.startsWith(e)?r:e+r.replace(/^\//,"");return l?t+s:s}(o,r,t,e)}}}function c(t,e){return void 0===e&&(e={}),(0,o().withBaseUrl)(t,e)}},1183:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return a},toc:function(){return l},default:function(){return f}});var n=r(2122),i=r(9756),o=(r(7294),r(3905)),c=(r(4996),{slug:"css-selector-specificity",title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",author:"\u5c0f\u82cf",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"\u5728\u5199 CSS \u7684\u65f6\u5019\u4f60\u4e00\u5b9a\u9047\u5230\u8fc7\u6709\u4e9b\u6837\u5f0f\u660e\u660e\u5199\u5bf9\u4e86\uff0c\u4e5f\u9009\u62e9\u4e86\u6b63\u786e\u7684 html \u5143\u7d20\u53bb\u5e94\u7528\u8fd9\u4e9b\u6837\u5f0f\uff0c\u53ef\u662f\u5c31\u662f\u4e0d\u751f\u6548\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u5728\u9009\u62e9\u540c\u4e00\u4e2a HTML \u5143\u7d20\u7684\u65f6\u5019\uff0c\u4e0d\u540c\u7684\u9009\u62e9\u5668\u6709\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u7ea7\u4f4e\u7684\u9009\u62e9\u5668\u7684\u6837\u5f0f\u4f1a\u88ab\u4f18\u5148\u7ea7\u9ad8\u7684\u8986\u76d6\u3002",tags:["\u524d\u7aef","CSS"],bvid:"BV1Fg4y1874w",oid:"837635765"}),u=void 0,a={permalink:"/css-selector-specificity",source:"@site/blog/2020-04-04-css-selector-specificity.md",title:"CSS \u9009\u62e9\u5668\u4f18\u5148\u7ea7\u7279\u5f02\u6027\u6743\u91cd\u8be6\u89e3",description:"\u5728\u5199 CSS \u7684\u65f6\u5019\u4f60\u4e00\u5b9a\u9047\u5230\u8fc7\u6709\u4e9b\u6837\u5f0f\u660e\u660e\u5199\u5bf9\u4e86\uff0c\u4e5f\u9009\u62e9\u4e86\u6b63\u786e\u7684 html \u5143\u7d20\u53bb\u5e94\u7528\u8fd9\u4e9b\u6837\u5f0f\uff0c\u53ef\u662f\u5c31\u662f\u4e0d\u751f\u6548\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u5728\u9009\u62e9\u540c\u4e00\u4e2a HTML \u5143\u7d20\u7684\u65f6\u5019\uff0c\u4e0d\u540c\u7684\u9009\u62e9\u5668\u6709\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u7ea7\u4f4e\u7684\u9009\u62e9\u5668\u7684\u6837\u5f0f\u4f1a\u88ab\u4f18\u5148\u7ea7\u9ad8\u7684\u8986\u76d6\u3002",date:"2020-04-04T00:00:00.000Z",formattedDate:"2020\u5e744\u67084\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"CSS",permalink:"/tags/css"}],readingTime:2.725,truncated:!0,prevItem:{title:"CSS Flexbox \u5e03\u5c40\u6700\u5bb9\u6613\u7406\u89e3\u5b8c\u5168\u6559\u7a0b",permalink:"/css-flex-box-layout"},nextItem:{title:"React State \u548c Event\u6559\u7a0b - \u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",permalink:"/learn-react-event-and-state"}},l=[],s={toc:l};function f(t){var e=t.components,r=(0,i.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u5199 CSS \u7684\u65f6\u5019\u4f60\u4e00\u5b9a\u9047\u5230\u8fc7\u6709\u4e9b\u6837\u5f0f\u660e\u660e\u5199\u5bf9\u4e86\uff0c\u4e5f\u9009\u62e9\u4e86\u6b63\u786e\u7684 html \u5143\u7d20\u53bb\u5e94\u7528\u8fd9\u4e9b\u6837\u5f0f\uff0c\u53ef\u662f\u5c31\u662f\u4e0d\u751f\u6548\uff0c\u8fd9\u662f\u4e3a\u4ec0\u4e48\u5462\uff1f\u56e0\u4e3a\u5728\u9009\u62e9\u540c\u4e00\u4e2a HTML \u5143\u7d20\u7684\u65f6\u5019\uff0c\u4e0d\u540c\u7684\u9009\u62e9\u5668\u6709\u4e0d\u540c\u7684\u4f18\u5148\u7ea7\uff0c\u4f18\u5148\u7ea7\u4f4e\u7684\u9009\u62e9\u5668\u7684\u6837\u5f0f\u4f1a\u88ab\u4f18\u5148\u7ea7\u9ad8\u7684\u8986\u76d6\u3002"))}f.isMDXComponent=!0}}]);