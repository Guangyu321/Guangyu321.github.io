/*! For license information please see fee4236b.9f9c71cf.js.LICENSE.txt */
(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[5179],{2122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},9756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3263:function(e,t,r){"use strict";r.d(t,{X:function(){return m},p:function(){return h}});var n=r(7294),a="button_3YRZ",c="red_364k",o="black_3HsO",i="secondary_2R7y",l=r(4184),s=r.n(l);var u=function({children:e,type:t="primary",color:r="blue"}){return n.createElement("button",{className:s()(a,{[c]:"red"===r,[o]:"black"===r,[i]:"secondary"===t})},e)},p="mainContainer_20cL",d="btnContainer_2eVj";function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m({className:e,...t}){return n.createElement("main",f({className:s()(p,e)},t),n.createElement("div",{className:d},n.createElement(u,null,"\u9ed8\u8ba4\u6309\u94ae"),n.createElement(u,{color:"red"},"\u7ea2\u8272\u6309\u94ae"),n.createElement(u,{color:"black"},"\u9ed1\u8272\u6309\u94ae"),n.createElement(u,{type:"secondary"},"\u7ebf\u6846\u6309\u94ae"),n.createElement(u,{type:"secondary",color:"red"},"\u7ebf\u6846\u6309\u94ae"),n.createElement(u,{type:"secondary",color:"black"},"\u7ebf\u6846\u6309\u94ae")))}var v="container_PuTB",y="inputColor_2ou_",g="inputGroup_Z8VW",b="button_f1Hb";function h(){const[e,t]=(0,n.useState)("#00F260"),[r,a]=(0,n.useState)("#0575E6");function c(e){const{name:r,value:n}=e.target;"color1"===r?t(n):"color2"===r&&a(n)}return n.createElement("div",{className:v,style:{background:`linear-gradient(75deg, ${e}, ${r})`}},n.createElement("div",{className:g},n.createElement("label",null,"\u8bf7\u9009\u62e9\u7b2c\u4e00\u4e2a\u989c\u8272"),n.createElement("input",{type:"color",name:"color1",className:y,value:e,onChange:c})),n.createElement("div",{className:g},n.createElement("label",null,"\u8bf7\u9009\u62e9\u7b2c\u4e8c\u4e2a\u989c\u8272"),n.createElement("input",{type:"color",name:"color2",className:y,value:r,onChange:c})),n.createElement("button",{onClick:function(){t("#00F260"),a("#0575E6")},className:b},"\u91cd\u7f6e\u4e3a\u9ed8\u8ba4"))}},1712:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(7294),a=r(5697),c=r.n(a),o="videoFrame_d6vX";function i(e){var t=e.src;e.bsrc;return n.createElement(n.Fragment,null,n.createElement("iframe",{src:t,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:o}))}i.propTypes={src:c().string.isRequired,bsrc:c().string};var l=i},8198:function(e,t,r){"use strict";r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return f}});var n=r(2122),a=r(9756),c=r(7294),o=r(3905),i=r(3263);function l(){return c.createElement("div",{style:{height:"50vh"}},c.createElement(i.p,null))}var s=r(1712),u={id:"react-state-event-gradient",title:"React \u72b6\u6001\u548c\u4e8b\u4ef6\u5904\u7406\uff0c\u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",description:"\u7528\u4e00\u4e2a\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668\u6765\u6f14\u793aReact State & Event \u7528\u6cd5\u3002",slug:"../react-state-event-exmaple"},p=void 0,d={unversionedId:"videos/react/gradient-bg-react-state-event/react-state-event-gradient",id:"videos/react/gradient-bg-react-state-event/react-state-event-gradient",isDocsHomePage:!1,title:"React \u72b6\u6001\u548c\u4e8b\u4ef6\u5904\u7406\uff0c\u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",description:"\u7528\u4e00\u4e2a\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668\u6765\u6f14\u793aReact State & Event \u7528\u6cd5\u3002",source:"@site/docs/videos/react/02-gradient-bg-react-state-event/index.md",sourceDirName:"videos/react/02-gradient-bg-react-state-event",slug:"/videos/react/react-state-event-exmaple",permalink:"/docs/videos/react/react-state-event-exmaple",editUrl:"https://github.com/zxuqian/zxuqian.cn/tree/master/docs/videos/react/02-gradient-bg-react-state-event/index.md",version:"current",lastUpdatedAt:1709696079,formattedLastUpdatedAt:"2024/3/6",frontMatter:{id:"react-state-event-gradient",title:"React \u72b6\u6001\u548c\u4e8b\u4ef6\u5904\u7406\uff0c\u5236\u4f5c\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668",description:"\u7528\u4e00\u4e2a\u6e10\u53d8\u80cc\u666f\u751f\u6210\u5668\u6765\u6f14\u793aReact State & Event \u7528\u6cd5\u3002",slug:"../react-state-event-exmaple"},sidebar:"videos",previous:{title:"React Props \u5c5e\u6027\u4ecb\u7ecd\uff0c\u5236\u4f5c\u4e00\u4e2a\u6f02\u4eae\u7684\u6309\u94ae",permalink:"/docs/videos/react/react-props-example"},next:{title:"\u7cbe\u9009 5 \u4e2a React Spring \u524d\u7aef\u52a8\u753b",permalink:"/docs/videos/react/5-react-spring-examples"}},f=[{value:"\u6548\u679c",id:"\u6548\u679c",children:[]},{value:"\u89c6\u9891",id:"\u89c6\u9891",children:[]}],m={toc:f};function v(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u6548\u679c"},"\u6548\u679c"),(0,o.kt)(l,{mdxType:"GradientDemo"}),(0,o.kt)("h2",{id:"\u89c6\u9891"},"\u89c6\u9891"),(0,o.kt)(s.Z,{src:"//player.bilibili.com/player.html?aid=97436637&cid=166340357&page=1",bsrc:"https://www.bilibili.com/video/av97436637/",mdxType:"BVideo"}),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")))}v.isMDXComponent=!0},4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}}]);