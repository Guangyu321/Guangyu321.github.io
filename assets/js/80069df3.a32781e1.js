(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[1482],{2122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},9756:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),l=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(g,c(c({ref:n},d),{},{components:t})):r.createElement(g,c({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=p;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<i;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},1712:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(7294),a=t(5697),i=t.n(a),c="videoFrame_d6vX";function s(e){var n=e.src;e.bsrc;return r.createElement(r.Fragment,null,r.createElement("iframe",{src:n,loading:"lazy",scrolling:"no",border:0,frameBorder:"no",framespacing:0,allowFullScreen:!0,className:c}))}s.propTypes={src:i().string.isRequired,bsrc:i().string};var o=s},2654:function(e,n,t){"use strict";var r=t(9756),a=t(7294);n.Z=function(e){var n=e.height,t=void 0===n?300:n,i=e.title,c=e.hash,s=e.theme,o=void 0===s?"dark":s;return(0,r.Z)(e,["height","title","hash","theme"]),a.createElement("iframe",{height:t,style:{width:"100%"},scrolling:"no",title:i,src:"https://codepen.io/zxuqian/embed/"+c+"?height="+t+"&theme-id="+o+"&default-tab=css,result",frameborder:"no",loading:"lazy",allowtransparency:"true",allowfullscreen:"true"},"See the Pen ",a.createElement("a",{href:"https://codepen.io/zxuqian/pen/"+c},i)," ","by Xuqian Zhang (",a.createElement("a",{href:"https://codepen.io/zxuqian"},"@zxuqian"),") on"," ",a.createElement("a",{href:"https://codepen.io"},"CodePen"),".")}},8394:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),c=t(1712),s=t(2654),o={id:"css-container-queries-intro",title:"CSS\u6700\u65b0\u7279\u6027 Container Queries \u4ecb\u7ecd",slug:"../css-container-queries-intro",description:"SS Container Queries \u662f\u6700\u65b0\u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u65b9\u5f0f\uff0c\u901a\u8fc7\u5b83\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u901a\u7528\u7684\u7ec4\u4ef6\uff0c\u8fdb\u884c\u54cd\u5e94\u5f0f\u8bbe\u8ba1, \u6839\u636e\u5bb9\u5668\u7684\u5c3a\u5bf8\u53bb\u8c03\u6574\u5b83\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\uff0c\u800c\u4e0d\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\u5bbd\u5ea6\u3002",keywords:["css","container queries","css container queries","\u54cd\u5e94\u5f0f","\u5bb9\u5668\u67e5\u8be2","\u524d\u7aef","frontend"]},l=void 0,d={unversionedId:"videos/css/css-container-queries-intro/css-container-queries-intro",id:"videos/css/css-container-queries-intro/css-container-queries-intro",isDocsHomePage:!1,title:"CSS\u6700\u65b0\u7279\u6027 Container Queries \u4ecb\u7ecd",description:"SS Container Queries \u662f\u6700\u65b0\u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u65b9\u5f0f\uff0c\u901a\u8fc7\u5b83\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u901a\u7528\u7684\u7ec4\u4ef6\uff0c\u8fdb\u884c\u54cd\u5e94\u5f0f\u8bbe\u8ba1, \u6839\u636e\u5bb9\u5668\u7684\u5c3a\u5bf8\u53bb\u8c03\u6574\u5b83\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\uff0c\u800c\u4e0d\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\u5bbd\u5ea6\u3002",source:"@site/docs/videos/css/12-css-container-queries-intro/index.md",sourceDirName:"videos/css/12-css-container-queries-intro",slug:"/videos/css/css-container-queries-intro",permalink:"/docs/videos/css/css-container-queries-intro",editUrl:"https://github.com/zxuqian/zxuqian.cn/tree/master/docs/videos/css/12-css-container-queries-intro/index.md",version:"current",lastUpdatedAt:1709696079,formattedLastUpdatedAt:"2024/3/6",frontMatter:{id:"css-container-queries-intro",title:"CSS\u6700\u65b0\u7279\u6027 Container Queries \u4ecb\u7ecd",slug:"../css-container-queries-intro",description:"SS Container Queries \u662f\u6700\u65b0\u7684\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u65b9\u5f0f\uff0c\u901a\u8fc7\u5b83\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u5bf9\u901a\u7528\u7684\u7ec4\u4ef6\uff0c\u8fdb\u884c\u54cd\u5e94\u5f0f\u8bbe\u8ba1, \u6839\u636e\u5bb9\u5668\u7684\u5c3a\u5bf8\u53bb\u8c03\u6574\u5b83\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\uff0c\u800c\u4e0d\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\u5bbd\u5ea6\u3002",keywords:["css","container queries","css container queries","\u54cd\u5e94\u5f0f","\u5bb9\u5668\u67e5\u8be2","\u524d\u7aef","frontend"]},sidebar:"videos",previous:{title:"\u5229\u7528 CSS conic-gradient \u5236\u4f5c\u997c\u56fe\u548c\u8272\u76d8",permalink:"/docs/videos/css/css-conic-gradient-tutorial"},next:{title:"CSS \u5e38\u7528\u6837\u5f0f\u5c5e\u6027",permalink:"/docs/videos/css/css-common-properties"}},u=[{value:"\u5b9a\u4e49\u793a\u4f8b\u5361\u7247\u7ec4\u4ef6",id:"\u5b9a\u4e49\u793a\u4f8b\u5361\u7247\u7ec4\u4ef6",children:[]},{value:"\u5f00\u542f container queries \u652f\u6301",id:"\u5f00\u542f-container-queries-\u652f\u6301",children:[]},{value:"\u5bb9\u5668\u8bbe\u7f6e",id:"\u5bb9\u5668\u8bbe\u7f6e",children:[]},{value:"\u54cd\u5e94\u5f0f\u8c03\u6574",id:"\u54cd\u5e94\u5f0f\u8c03\u6574",children:[]},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[]}],p={toc:u};function m(e){var n=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{src:"//player.bilibili.com/player.html?aid=375963500&bvid=BV1oo4y1C7nJ&cid=349883176&page=1",mdxType:"BVideo"}),(0,i.kt)("p",null,"\u76ee\u524d\u5b9e\u73b0\u54cd\u5e94\u5f0f\u5e03\u5c40\u7684\u6700\u4e3b\u8981\u7684\u9014\u5f84\u662f\uff0c\u67e5\u8be2\u6d4f\u89c8\u5668\u7a97\u53e3\u7684\u53ef\u89c6\u533a\u57df\u5bbd\u5ea6\uff0c\u6839\u636e\u4e0d\u540c\u7684\u5927\u5c0f\u8bbe\u7f6e\u4e0d\u540c\u7684 CSS \u6837\u5f0f\uff0c\u6765\u8ba9\u5143\u7d20\u5728\u4e0d\u540c\u5c4f\u5e55\u5927\u5c0f\u4e0b\uff0c\u90fd\u663e\u793a\u6b63\u5e38\u3002\n\u4f46\u662f\uff0c\u53ea\u9760\u6d4f\u89c8\u5668\u53ef\u89c6\u533a\u57df\u5bbd\u5ea6\u8fdb\u884c\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u4e5f\u6709\u7f3a\u70b9\uff0c\u73b0\u5728\u597d\u591a\u7684\u5f00\u53d1\u90fd\u662f\u7ec4\u4ef6\u5316\u7684\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u80fd\u5728\u591a\u4e2a\u9879\u76ee\u4e2d\u4f7f\u7528\uff0c\u800c\u6bcf\u4e2a\u9879\u76ee\u7684\u5e03\u5c40\u90fd\u4e0d\u4e00\u6837\uff0c\u5728\u540c\u6837\u7684\u6d4f\u89c8\u5668\u5bbd\u5ea6\u4e0b\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u7684\u6240\u5728\u5bb9\u5668\u7684\u5bbd\u5ea6\u662f\u4e0d\u4e00\u6837\u7684\uff0c\u8fd9\u6837\u5c31\u4e0d\u80fd\u7edf\u4e00\u8fdb\u884c\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u3002\nCSS Container Queries \u7684\u51fa\u73b0\uff0c\u5c31\u89e3\u51b3\u4e86\u8fd9\u6837\u7684\u95ee\u9898\uff0c\u5b83\u53ef\u4ee5\u8ba9\u6211\u4eec\u6839\u636e\u5bb9\u5668\u7684\u5c3a\u5bf8\u53bb\u8c03\u6574\u5b83\u5185\u90e8\u5143\u7d20\u7684\u6392\u5217\uff0c\u800c\u4e0d\u662f\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684\u5bbd\u5ea6\u3002"),(0,i.kt)("h2",{id:"\u5b9a\u4e49\u793a\u4f8b\u5361\u7247\u7ec4\u4ef6"},"\u5b9a\u4e49\u793a\u4f8b\u5361\u7247\u7ec4\u4ef6"),(0,i.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u4e00\u4e2a\u4f8b\u5b50\u6765\u770b\u5b83\u7684\u4f7f\u7528\u65b9\u6cd5\u3002\u5047\u8bbe\u6211\u4eec\u6709\u4e00\u4e2a\u5361\u7247\u7ec4\u4ef6\uff0c\u91cc\u8fb9\u5305\u62ec\u4e00\u5f20\u56fe\u7247\u3001\u5361\u7247\u6807\u9898\u548c\u5361\u7247\u5185\u5bb9\uff0c\u5728\u5361\u7247\u5bb9\u5668\u5927\u4e8e 850px \u65f6\uff0c\u5361\u7247\u4e3a\u4e24\u5217\u5e03\u5c40\uff0c\u56fe\u7247\u5728\u5de6\u8fb9\uff0c\u5361\u7247\u6807\u9898\u548c\u5361\u7247\u5185\u5bb9\u5728\u53f3\u8fb9\u3002\u5f53\u5c0f\u4e8e 850px \u65f6\uff0c\u5361\u7247\u4e3a 1 \u5217\u5e03\u5c40\uff0c\u56fe\u7247\u3001\u6807\u9898\u548c\u5185\u5bb9\u987a\u5e8f\u6392\u5217\u3002\u8fd9\u91cc\u6211\u4eec\u770b\u4e00\u4e0b\u5173\u952e\u4ee3\u7801\uff0c\u5b8c\u6574\u6e90\u4ee3\u7801\u53ef\u4ee5\u67e5\u770b\u89c6\u9891\u7b80\u4ecb\u7684\u94fe\u63a5\u3002\n\u5148\u6765\u770b\u4e00\u4e0b HTML \u7ed3\u6784\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"card-container \u4e3a\u5361\u7247\u7684\u5916\u5c42\u5bb9\u5668\u3002"),(0,i.kt)("li",{parentName:"ul"},"card \u4e3a\u5361\u7247\u672c\u8eab\uff0c\u91cc\u8fb9\u6709 image \u56fe\u7247\uff0ctitle \u5361\u7247\u6807\u9898\u548c content \u5361\u7247\u5185\u5bb9\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card-container">\n  <div class="card">\n    <img\n      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"\n      alt=""\n    />\n    <div class="title">\u5361\u7247\u6807\u9898</div>\n    <div class="content">\n      \u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\n    </div>\n  </div>\n</div>\n')),(0,i.kt)("p",null,"\u5728 CSS \u91cc\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u628a\u5361\u7247\u5916\u5c42\u5bb9\u5668\u8bbe\u7f6e\u4e3a\u6d4f\u89c8\u5668\u5bbd\u5ea6\u7684 80%\uff0c\u65b9\u4fbf\u6211\u4eec\u540e\u7eed\u901a\u8fc7\u6539\u53d8\u6d4f\u89c8\u5668\u5bbd\u5ea6\uff0c\u6765\u6d4b\u8bd5\u54cd\u5e94\u5f0f\u3002"),(0,i.kt)("li",{parentName:"ul"},".card \u5361\u7247\u672c\u8eab\u4f7f\u7528 grid \u5e03\u5c40\uff0c\u9ed8\u8ba4\u4e3a\u4e24\u5217\uff0c\u5217\u95f4\u8ddd\u4e3a 18px\u3002"),(0,i.kt)("li",{parentName:"ul"},"img \u901a\u8fc7\u8bbe\u7f6e grid-row \u4e3a 1 / 3\uff0c\u8fd9\u6837\u8ba9\u56fe\u7247\u8de8\u4e86 2 \u884c\uff0c\u4f7f\u5b83\u5355\u72ec\u5360\u4e86\u4e00\u5217\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u518d\u7ed9\u6807\u9898\u8bbe\u7f6e\u4e00\u4e0b\u6837\u5f0f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".card-container {\n  width: 80vw;\n  margin: 0 auto;\n}\n\n.card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  column-gap: 18px;\n  box-shadow: 0 0 24px rgb(0, 0, 0, 0.2);\n  padding: 24px;\n  margin: 10%;\n}\n\nimg {\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  grid-row: 1 / 3;\n}\n\n.title {\n  font-size: 24px;\n  margin: 18px 0;\n}\n")),(0,i.kt)("span",null,"\n    ",(0,i.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,i.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,i.kt)("p",null,"\u5b8c\u6574\u6e90\u4ee3\u7801\uff1a"),(0,i.kt)(s.Z,{title:"css container queries",hash:"LYWeBzG",mdxType:"Codepen"}),(0,i.kt)("h2",{id:"\u5f00\u542f-container-queries-\u652f\u6301"},"\u5f00\u542f container queries \u652f\u6301"),(0,i.kt)("p",null,"\u6700\u65b0\u7248\u7684 chrome 91 \u5df2\u7ecf\u652f\u6301\u901a\u8fc7 flags \u65b9\u5f0f\u5f00\u542f container queries \u7684\u652f\u6301\u4e86\uff0c\u5728 chrome \u6d4f\u89c8\u5668\u7684\u5730\u5740\u680f\u4e2d\u8f93\u5165 chrome://flags\uff0c\u7136\u540e\u5728\u641c\u7d22\u6846\u4e2d\u8f93\u5165\u5173\u952e\u5b57 container queries\uff0c\u7136\u540e\u5728 Enable CSS Container Queries \u8fd9\u4e2a\u9009\u9879\u540e\u9762\u7684\u83dc\u5355\u4e2d\uff0c\u9009\u62e9 Enabled\uff0c\u8fd9\u6837\u5c31\u5f00\u542f\u4e86 container quries \u7684\u652f\u6301\u4e86\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"chrome://flags",src:t(9286).Z})),(0,i.kt)("h2",{id:"\u5bb9\u5668\u8bbe\u7f6e"},"\u5bb9\u5668\u8bbe\u7f6e"),(0,i.kt)("p",null,"\u6211\u4eec\u9700\u8981\u7ed9\u5bb9\u5668\u8bbe\u7f6e\u4e00\u4e2a contain \u5c5e\u6027\uff0c\u6765\u652f\u6301\u5bf9\u8be5\u5bb9\u5668\u7684\u5bbd\u5ea6\u8fdb\u884c\u67e5\u8be2\u3002\u8fd9\u91cc\u7ed9 .card-container \u5bb9\u5668\u8bbe\u7f6e contain \u5c5e\u6027\uff0c\u503c\u4e3a layout inline-size\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"layout \u662f\u8bf4\u5bb9\u5668\u5916\u90e8\u7684\u5e03\u5c40\u4e0d\u4f1a\u5f71\u54cd\u5b83\u5185\u90e8\u7684\u5e03\u5c40\uff0c\u53cd\u4e4b\u4ea6\u7136"),(0,i.kt)("li",{parentName:"ul"},"inline-size \u662f\u8bf4\uff0c\u5bb9\u5668\u5728\u5bbd\u5ea6\u4e0a\u4e0d\u4f1a\u88ab\u5b50\u5143\u7d20\u6491\u5f00\uff0c\u5b50\u5143\u7d20\u53ef\u4ee5\u901a\u8fc7 container queries \u6765\u83b7\u53d6\u5bb9\u5668\u7684\u5bbd\u5ea6\uff0c\u8c03\u6574\u81ea\u5df1\u7684\u5e03\u5c40\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".card-container {\n  width: 80vw;\n  margin: 0 auto;\n  contain: layout inline-size;\n}\n")),(0,i.kt)("h2",{id:"\u54cd\u5e94\u5f0f\u8c03\u6574"},"\u54cd\u5e94\u5f0f\u8c03\u6574"),(0,i.kt)("p",null,"\u5728\u7ed9\u5bb9\u5668\u8bbe\u7f6e contain \u5c5e\u6027\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 @container \u6307\u4ee4\u6765\u67e5\u8be2\u5bb9\u5668\u7684\u5bbd\u5ea6\u4e86\uff0c\u5b83\u4e0e@media \u5a92\u4f53\u67e5\u8be2\u7684\u8bed\u6cd5\u4e00\u6837\uff0c\u5728\u91cc\u8fb9\u6211\u4eec\u5b9a\u4e49 max-width: 850px\uff0c\u4e5f\u5c31\u662f\u5f53\u5bb9\u5668\u5c3a\u5bf8\u5728\u5c0f\u4e8e 850px \u65f6\uff0c\u5b50\u5143\u7d20\u7684\u6837\u5f0f\uff0c\u6211\u4eec\u5728\u8fd9\u91cc\u8bbe\u7f6e\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},".card \u4e3a 1 \u5217\u5e03\u5c40\u3002"),(0,i.kt)("li",{parentName:"ul"},"img \u53ea\u5360\u636e\u4e00\u884c\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@container (max-width: 850px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n\n  img {\n    grid-row: 1;\n  }\n}\n")),(0,i.kt)("p",null,"\u53ef\u80fd\u6709\u540c\u5b66\u6709\u7591\u95ee\uff0c\u90a3\u4e48 @container \u600e\u4e48\u77e5\u9053\u662f\u67e5\u8be2\u54ea\u4e2a\u5bb9\u5668\u7684\u5bbd\u5ea6\u5462\uff1f\u5b83\u662f\u6839\u636e\u91cc\u8fb9\u7684\u9009\u62e9\u5668\u6765\u5224\u65ad\u7684\uff0c\u6211\u4eec\u8fd9\u91cc\u8fb9\u4f7f\u7528\u4e86 .card \u548c img\uff0c\u79bb\u5b83\u6700\u8fd1\u7684\u5bb9\u5668\u5c31\u662f .card-container \u5bb9\u5668\uff0c@container \u67e5\u8be2\u7684\u5c31\u662f\u5b83\u7684\u5bbd\u5ea6\u3002\u53e6\u5916\uff0c\u5982\u679c\u5728@container \u91cc\u9009\u62e9\u4e86\u4e0d\u5c5e\u4e8e\u8be5\u5bb9\u5668\u7684\u5143\u7d20\uff0c\u90a3\u4e48\u5b83\u7684\u5c31\u6837\u5f0f\u4e0d\u4f1a\u751f\u6548\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card-container">\n  <div class="card">\n    <img\n      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"\n      alt=""\n    />\n    <div class="title">\u5361\u7247\u6807\u9898</div>\n    <div class="content">\n      \u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\n    </div>\n  </div>\n</div>\n<p>test test</p>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@container (max-width: 850px) {\n  .card {\n  }\n  img {\n  }\n  p {\n    color: red;\n  } /* \u4e0d\u4f1a\u751f\u6548 */\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u6709\u591a\u4e2a\u5bb9\u5668\u8bbe\u7f6e\u4e86 contain \u5c5e\u6027\uff0c\u90a3\u4e48\u662f\u600e\u4e48\u5224\u65ad\u67e5\u8be2\u7684\u662f\u54ea\u4e2a\u5462\uff1f\u8fd9\u4e2a\u540c\u6837\u4e5f\u662f\u6839\u636e @container \u91cc\u9762\u7684\u9009\u62e9\u5668\u6765\u51b3\u5b9a\u7684\uff0c\u4f46\u5982\u679c\u4e24\u4e2a\u5bb9\u5668\u7684\u5b50\u5143\u7d20\u9009\u62e9\u5668\u90fd\u662f\u4e00\u6837\u7684\uff0c\u90a3\u4e48\u5c31\u4f1a\u9ed8\u8ba4\u67e5\u8be2\u7b2c\u4e00\u4e2a\u627e\u5230\u7684\u5bb9\u5668\uff0c\u5982\u679c\u8981\u67e5\u8be2\u5176\u5b83\u5bb9\u5668\uff0c\u53ef\u4ee5\u52a0\u4e0a\u5bb9\u5668\u7684 class \u8fdb\u884c\u9650\u5b9a\uff0c\u4f8b\u5982\u6211\u4eec\u518d\u590d\u5236\u4e00\u4e2a\u5361\u7247\u7ec4\u4ef6\uff0c\u628a\u7b2c\u4e8c\u4e2a\u5bb9\u5668\u7684 class \u8bbe\u7f6e\u4e3a card-container2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div class="card-container">\n  <div class="card">\n    <img\n      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"\n      alt=""\n    />\n    <div class="title">\u5361\u7247\u6807\u9898</div>\n    <div class="content">\n      \u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\n    </div>\n  </div>\n</div>\n\n<div class="card-container2">\n  <div class="card">\n    <img\n      src="https://images.pexels.com/photos/2524874/pexels-photo-2524874.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"\n      alt=""\n    />\n    <div class="title">\u5361\u7247\u6807\u9898</div>\n    <div class="content">\n      \u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\u5361\u7247\u5185\u5bb9\n    </div>\n  </div>\n</div>\n')),(0,i.kt)("p",null,"\u7136\u540e\u8ba9 .card-container2 \u8ddf .card-container \u8bbe\u7f6e\u4e3a\u4e00\u6837\u7684\u5e03\u5c40\uff0c\u5728 container queries \u4e2d\uff0c\u7ed9\u7b2c\u4e8c\u4e2a\u5361\u7247\u5bb9\u5668\u7684 .card \u548c img \u5143\u7d20\u52a0\u4e0a .card-container2 \u524d\u7f00\uff0c\u8fd9\u6837\u5c31\u662f\u67e5\u8be2 .card-container2 \u7684\u5bbd\u5ea6\u4e86\uff0c\u6211\u4eec\u8bbe\u7f6e\u4e00\u4e2a\u4e0d\u540c\u7684\u5bbd\u5ea6\uff0c\u5728\u7f29\u653e\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u4eec\u53d8\u5316\u7684\u65f6\u673a\u5c31\u4e0d\u540c\u4e86\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},".card-container,\n.card-container2 {\n  width: 80vw;\n  margin: 0 auto;\n  contain: layout inline-size;\n}\n\n@container (max-width: 850px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n\n  img {\n    grid-row: 1;\n  }\n}\n\n@container (max-width: 950px) {\n  .card-container2 .card {\n    grid-template-columns: 1fr;\n  }\n\n  .card-container2 img {\n    grid-row: 1;\n  }\n}\n")),(0,i.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("p",null,"CSS container queries \u8fd8\u662f\u4e00\u4e2a\u6bd4\u8f83\u65b0\u7684\u7279\u6027\uff0c\u76ee\u6d4b\u672a\u6765\u4f1a\u7ed9\u54cd\u5e94\u5f0f\u8bbe\u8ba1\u5e26\u6765\u975e\u5e38\u5927\u7684\u5f71\u54cd\uff0c\u73b0\u5728\u5148\u5b66\u8d77\u6765\uff0c\u4ee5\u540e\u5728\u7528\u5230\u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u4f1a\u624b\u8db3\u65e0\u63aa\u4e86\u3002\u73b0\u5728\u8981\u4f53\u9a8c container queries\uff0c\u5982\u679c\u662f chrome \u6d4f\u89c8\u5668\u9700\u8981\u901a\u8fc7 chrome://flags \u6765\u5f00\u542f\u652f\u6301\uff0c\u4e4b\u540e\u518d\u8bbe\u7f6e\u76f8\u5e94\u7684 css \u5c5e\u6027\uff0c\u7ed9\u5bb9\u5668\u8bbe\u7f6e contain \u5c5e\u6027\uff0c\u7136\u540e\u5c31\u53ef\u4ee5\u901a\u8fc7 @container \u6765\u67e5\u8be2\u5bb9\u5668\u7684\u5c3a\u5bf8\u4e86\u3002\u4f60\u5b66\u4f1a\u4e86\u5417\uff1f\u5982\u679c\u6709\u5e2e\u52a9\u4e09\u8fde\uff0c\u60f3\u5b66\u66f4\u591a\u6709\u7528\u7684\u524d\u7aef\u5f00\u53d1\u77e5\u8bc6\uff0c\u8bf7\u5173\u6ce8\u5cf0\u534e\u524d\u7aef\u5de5\u7a0b\u5e08\uff0c\u611f\u8c22\u89c2\u770b\uff01"),(0,i.kt)("span",null,"\n    ",(0,i.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,i.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")))}m.isMDXComponent=!0},9286:function(e,n,t){"use strict";n.Z=t.p+"assets/images/2021-06-08-21-37-54-f4e4d7fc9204dd99e7049a572c5a0b76.webp"}}]);