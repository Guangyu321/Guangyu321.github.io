(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[8607],{2122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},9756:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(p,".").concat(d)]||f[d]||s[d]||o;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5801:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={slug:"5-javascript-tricky-problems",title:"\u6574\u7406\u4e865\u4e2aJavaScript\u602a\u5f02\u884c\u4e3a\u53ca\u5176\u539f\u56e0",author:"\u5cf0\u534e",author_title:"\u524d\u7aef\u5de5\u7a0b\u5e08 / B\u7ad9UP\u4e3b",author_url:"https://github.com/zxuqian",author_image_url:"https://tvax3.sinaimg.cn/crop.0.0.1080.1080.180/b2745d44ly8g8s4muqeggj20u00u0n0k.jpg?KID=imgbed,tva&Expires=1582389585&ssig=EvXmyu%2FXsX",description:"JavaScript \u65e9\u671f\u7684\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u7684\u6807\u51c6\uff0c\u518d\u52a0\u4e0a\u5b83\u7684\u8bed\u6cd5\u7075\u6d3b\u591a\u6837\uff0c\u6709\u4e9b\u770b\u8d77\u6765\u5c31\u4e0d\u6b63\u786e\u7684\u4ee3\u7801\u5374\u80fd\u6b63\u5e38\u6267\u884c\uff0c\u4e00\u4e9b\u770b\u8d77\u6765\u7b26\u5408\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u5374\u76f8\u5dee\u5341\u4e07\u516b\u5343\u91cc\u3002\u8fd9\u4e9b\u95ee\u9898\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u5bfc\u81f4 BUG\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5f88\u591a\u9762\u8bd5\u5b98\u4f1a\u628a\u5b83\u4eec\u62ff\u51fa\u6765\u5f53\u8003\u9a8c\u54b1\u4eec JS \u5de5\u7a0b\u5e08\u7684\u80fd\u529b\u3002",tags:["\u524d\u7aef","JavaScript"],activityId:"468208584104520356",oid:"101349209"},l=void 0,p={permalink:"/5-javascript-tricky-problems",source:"@site/blog/2020-12-13-5-javascript-tricky-problems.md",title:"\u6574\u7406\u4e865\u4e2aJavaScript\u602a\u5f02\u884c\u4e3a\u53ca\u5176\u539f\u56e0",description:"JavaScript \u65e9\u671f\u7684\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u7684\u6807\u51c6\uff0c\u518d\u52a0\u4e0a\u5b83\u7684\u8bed\u6cd5\u7075\u6d3b\u591a\u6837\uff0c\u6709\u4e9b\u770b\u8d77\u6765\u5c31\u4e0d\u6b63\u786e\u7684\u4ee3\u7801\u5374\u80fd\u6b63\u5e38\u6267\u884c\uff0c\u4e00\u4e9b\u770b\u8d77\u6765\u7b26\u5408\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u5374\u76f8\u5dee\u5341\u4e07\u516b\u5343\u91cc\u3002\u8fd9\u4e9b\u95ee\u9898\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u5bfc\u81f4 BUG\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5f88\u591a\u9762\u8bd5\u5b98\u4f1a\u628a\u5b83\u4eec\u62ff\u51fa\u6765\u5f53\u8003\u9a8c\u54b1\u4eec JS \u5de5\u7a0b\u5e08\u7684\u80fd\u529b\u3002",date:"2020-12-13T00:00:00.000Z",formattedDate:"2020\u5e7412\u670813\u65e5",tags:[{label:"\u524d\u7aef",permalink:"/tags/\u524d\u7aef"},{label:"JavaScript",permalink:"/tags/java-script"}],readingTime:1.61,truncated:!0,prevItem:{title:"\u56de\u987e2020\uff0c\u7a0b\u5e8f\u5458\u8f6c\u578b\u7684\u8d77\u6b65",permalink:"/review-2020"},nextItem:{title:"1024\uff1a\u7a0b\u5e8f\u5458\uff0c\u4f60\u7684\u8eab\u4f53\u8fd8\u597d\u5417\uff1f",permalink:"/1024-developer-health"}},c=[{value:"1\u3001\u53ef\u9009\u5206\u53f7",id:"1\u3001\u53ef\u9009\u5206\u53f7",children:[]},{value:"2\u3001this \u6307\u5411",id:"2\u3001this-\u6307\u5411",children:[]},{value:"3\u3001\u6570\u7ec4\u957f\u5ea6",id:"3\u3001\u6570\u7ec4\u957f\u5ea6",children:[]},{value:"4\u3001\u63d0\u5347\uff08Hoisting)",id:"4\u3001\u63d0\u5347\uff08hoisting",children:[]},{value:"5\u3001\u4f5c\u7528\u57df\u4e0e\u95ed\u5305",id:"5\u3001\u4f5c\u7528\u57df\u4e0e\u95ed\u5305",children:[]},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",children:[]}],u={toc:c};function s(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7528 JavaScript \u5199\u8fc7\u9879\u76ee\u6216\u8005\u53c2\u52a0\u8fc7\u9762\u8bd5\uff0c\u90a3\u4e00\u5b9a\u9047\u5230\u8fc7\u4e0d\u5c11\u4ee4\u4eba\u532a\u5937\u6240\u601d\u7684\u95ee\u9898\u3002JavaScript \u65e9\u671f\u7684\u89c4\u8303\u4e0d\u7edf\u4e00\uff0c\u4e5f\u6ca1\u6709\u4e25\u683c\u7684\u6807\u51c6\uff0c\u518d\u52a0\u4e0a\u5b83\u7684\u8bed\u6cd5\u7075\u6d3b\u591a\u6837\uff0c\u6709\u4e9b\u770b\u8d77\u6765\u5c31\u4e0d\u6b63\u786e\u7684\u4ee3\u7801\u5374\u80fd\u6b63\u5e38\u6267\u884c\uff0c\u4e00\u4e9b\u770b\u8d77\u6765\u7b26\u5408\u903b\u8f91\u7684\u4ee3\u7801\uff0c\u8fd0\u884c\u7ed3\u679c\u5374\u76f8\u5dee\u5341\u4e07\u516b\u5343\u91cc\u3002\u8fd9\u4e9b\u95ee\u9898\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u7ecf\u5e38\u4f1a\u5bfc\u81f4 BUG\uff0c\u66f4\u91cd\u8981\u7684\u662f\uff0c\u5f88\u591a\u9762\u8bd5\u5b98\u4f1a\u628a\u5b83\u4eec\u62ff\u51fa\u6765\u5f53\u8003\u9a8c\u54b1\u4eec JS \u5de5\u7a0b\u5e08\u7684\u80fd\u529b\u3002\u90a3\u4e48\u8fd9\u7bc7\u6587\u7ae0\u5c31\u603b\u7ed3\u4e86 5 \u4e2a JavaScript \u6bd4\u8f83\u5751\u7684\u95ee\u9898\uff0c\u4ee5\u53ca\u5b83\u4eec\u51fa\u73b0\u7684\u539f\u56e0\u548c\u89e3\u51b3\u65b9\u6cd5\u3002"),(0,o.kt)("h2",{id:"1\u3001\u53ef\u9009\u5206\u53f7"},"1\u3001\u53ef\u9009\u5206\u53f7"),(0,o.kt)("p",null,"\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function foo() {\n    return \n  {\n     value: 1\n  };\n}\nconsole.log(typeof foo());\n")),(0,o.kt)("p",null,'\u4f60\u53ef\u80fd\u4f1a\u8ba4\u4e3a\u5b83\u7684\u8f93\u51fa\u7ed3\u679c\u662f "object"\uff0c\u4f46\u662f\u7ed3\u679c\u5374\u662f ',(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\u4e4d\u4e00\u770b\u4ee3\u7801\u597d\u50cf\u6ca1\u4ec0\u4e48\u95ee\u9898\uff0c\u4f46\u662f\u7ec6\u5fc3\u4e00\u70b9\u53ef\u4ee5\u770b\u5230 return \u8bed\u53e5\u8fd4\u56de\u7684\u5bf9\u8c61\u653e\u5230\u4e86\u4e0b\u4e00\u884c\uff0c\u90a3\u4e48\u95ee\u9898\u5c31\u6765\u4e86\uff1aJavaScript \u7684\u5206\u53f7\u662f\u53ef\u9009\u7684\uff0creturn \u8bed\u53e5\u5728\u6362\u884c\u540e\uff0cJavaScript \u4f1a\u81ea\u52a8\u7ed9\u5b83\u7684\u7ed3\u5c3e\u52a0\u4e0a\u5206\u53f7\uff0c\u800c\u5728 return \u4e4b\u540e\u7684\u4ee3\u7801\u90fd\u4e0d\u4f1a\u6267\u884c\uff0c\u6240\u4ee5 foo() \u7684\u8fd4\u56de\u7ed3\u679c\u662f undefined\u3002\u89e3\u51b3\u65b9\u6cd5\u662f\u5728\u6bcf\u884c\u7ed3\u5c3e\u90fd\u5199\u4e0a\u5206\u53f7\uff0c\u8fd9\u6837\u5c31\u80fd\u6e05\u695a\u7684\u77e5\u9053\u4ee3\u7801\u5728\u54ea\u91cc\u7ed3\u675f\u3002"),(0,o.kt)("h2",{id:"2\u3001this-\u6307\u5411"},"2\u3001this \u6307\u5411"),(0,o.kt)("p",null,"\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"var a = 5;\nvar obj = {\n    a: 3,\n  foo: function() {\n    console.log(this.a);\n  }\n}\n\nvar objFoo = obj.foo;\nobjFoo();\n")),(0,o.kt)("p",null,"\u7b54\u6848\u4e3a 5\u3002\u5728\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u5b83\u5185\u90e8\u7684 this \u6307\u5411\u7684\u662f\u8c03\u7528\u5bf9\u8c61\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"obj.foo()")," this \u6307\u5411\u7684\u662f obj \u5bf9\u8c61\u3002\u5982\u679c\u5728\u5168\u5c40\u8c03\u7528\u51fd\u6570\u65f6\uff0c this \u6307\u5411\u7684\u662f\u5168\u5c40\u5bf9\u8c61\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d\u4e3a window\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"objFoo")," \u76f8\u5f53\u4e8e\u662f\u5728\u83b7\u53d6\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"obj")," \u5bf9\u8c61\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo")," \u65b9\u6cd5\u5f15\u7528\u540e\uff0c\u5728\u5168\u5c40\u8fdb\u884c\u8c03\u7528\uff0c\u6240\u4ee5 this \u6307\u5411\u7684\u662f window \u5bf9\u8c61\u3002\u4f7f\u7528  ",(0,o.kt)("inlineCode",{parentName:"p"},"var")," \u5728\u9876\u7ea7\u4f5c\u7528\u57df\u4e2d\u5b9a\u4e49\u7684\u53d8\u91cf\u4f1a\u6dfb\u52a0\u5230 window \u4e2d\uff0c\u6240\u4ee5 objFoo() \u8c03\u7528\u6253\u5370\u7684\u662f\u5168\u5c40\u4e2d\u7684 a\uff0c\u5373 5\u3002"),(0,o.kt)("h2",{id:"3\u3001\u6570\u7ec4\u957f\u5ea6"},"3\u3001\u6570\u7ec4\u957f\u5ea6"),(0,o.kt)("p",null,"\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const arr = [1, 2, 3, 4];\narr.length = 0;\nconsole.log(arr[0]);\n")),(0,o.kt)("p",null,"\u7ed3\u679c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),", \u56e0\u4e3a array \u7684 length \u5c5e\u6027\u540c\u65f6\u4e5f\u80fd\u53cd\u8fc7\u6765\u63a7\u5236\u6570\u7ec4\u7684\u5143\u7d20\u6570\u91cf\uff0c\u5728\u7ed9 arr.length \u8bbe\u7f6e\u4e3a 0 \u65f6\uff0carr \u5c31\u53d8\u6210\u4e86\u7a7a\u6570\u7ec4\uff0c\u518d\u8bbf\u95ee\u91cc\u8fb9\u7684\u5143\u7d20\u5c31\u90fd\u662f undefined \u4e86\u3002"),(0,o.kt)("h2",{id:"4\u3001\u63d0\u5347\uff08hoisting"},"4\u3001\u63d0\u5347\uff08Hoisting)"),(0,o.kt)("p",null,"\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function bar() {\n  return foo;\n  foo = 10;\n  function foo() {}\n  var foo = '11';\n}\nconsole.log(typeof bar());\n")),(0,o.kt)("p",null,"\u7ed3\u679c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"function"),"\u3002\u4f7f\u7528 var \u58f0\u660e\u7684\u53d8\u91cf\u548c\u4f7f\u7528 funtion \u5b9a\u4e49\u7684\u51fd\u6570\u4f1a\u63d0\u5347\u5230\u5f53\u524d\u4f5c\u7528\u57df\u7684\u9876\u90e8\uff0c\u6240\u4ee5\u53d8\u91cf\u53ef\u4ee5\u5148\u8d4b\u503c\uff0c\u540e\u4f7f\u7528 var \u8fdb\u884c\u58f0\u660e\uff0c\u800c\u51fd\u6570\u5219\u53ef\u4ee5\u5148\u8c03\u7528\u540e\u5b9a\u4e49\u3002",(0,o.kt)("strong",{parentName:"p"},"\u4f46\u662f\u8981\u6ce8\u610f\u7684\u662f\uff0c\u4f7f\u7528 var \u5b9a\u4e49\uff08\u6307\u5728\u58f0\u660e\u7684\u540c\u65f6\u8fdb\u884c\u8d4b\u503c\uff09\u7684\u53d8\u91cf\uff0c\u53ea\u4f1a\u63d0\u5347\u58f0\u660e\u90e8\u5206\uff0c\u8d4b\u503c\u90e8\u5206\u4e0d\u4f1a\u88ab\u63d0\u5347\uff0c\u4f8b\u5982\u793a\u4f8b\u4e2d\u7684")," ",(0,o.kt)("inlineCode",{parentName:"p"},"var foo = '11'")," \u4f1a\u63d0\u5347 ",(0,o.kt)("inlineCode",{parentName:"p"},"var foo"),"\uff0c\u4f46 ",(0,o.kt)("inlineCode",{parentName:"p"},"foo = 11")," \u4fdd\u7559\u5728\u539f\u4f4d\u3002\u5728\u5b9a\u4e49 bar() \u51fd\u6570\u65f6\uff0c\u540c\u65f6\u4f1a\u521b\u5efa\u4e00\u4e2a\u4f5c\u7528\u57df\uff0c\u63d0\u5347\u4f1a\u628a\u76f8\u5173\u53d8\u91cf\u548c\u51fd\u6570\u653e\u5230 bar() \u51fd\u6570\u7684\u7b2c\u4e00\u884c\u3002 \u7efc\u5408\u4e0a\u8fb9\u7684\u89c4\u5219\uff0c\u53ef\u4ee5\u77e5\u9053 foo() \u51fd\u6570\u548c foo \u53d8\u91cf\u7684\u58f0\u660e\u8fdb\u884c\u4e86\u63d0\u5347\uff0c\u56e0\u4e3a foo \u53d8\u91cf\u4e0e\u540c\u540d\uff0c\u4f46\u662f\u53ea\u6709\u58f0\u660e\uff0c\u6240\u4ee5\u4e0d\u4f1a\u8986\u76d6\u51fd\u6570\u7684\u503c\uff0cfoo \u4ecd\u7136\u6307\u5411\u7684\u662f\u51fd\u6570\u3002\u4e4b\u540e\u5c31\u76f4\u63a5\u4f7f\u7528 return \u8bed\u53e5\u8fd4\u56de\u4e86\u7ed3\u679c\uff0c\u540e\u8fb9\u7684\u4ee3\u7801\u5c31\u4e0d\u4f1a\u518d\u6267\u884c\u4e86\u3002bar() \u4e2d\u7684\u4ee3\u7801\u5176\u5b9e\u662f\u4e0b\u8fb9\u8fd9\u79cd\u5f62\u5f0f\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"function bar() {\n  function foo() {}\n  var foo;\n  return foo;\n  foo = 10;\n  var foo = '11';\n}\n")),(0,o.kt)("h2",{id:"5\u3001\u4f5c\u7528\u57df\u4e0e\u95ed\u5305"},"5\u3001\u4f5c\u7528\u57df\u4e0e\u95ed\u5305"),(0,o.kt)("p",null,"\u95ee\u9898\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"for(var i = 0; i < 3; i++) {\n  setTimeout(() => {\n    console.log(i);\n  });\n}\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u4f1a\u8ba4\u4e3a\u4e0a\u65b9\u4ee3\u7801\u7684\u7ed3\u679c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"0 1 2"),"\uff0c\u4f46\u5b9e\u9645\u4e0a\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"3 3 3"),"\uff0c\u8fd9\u662f\u56e0\u4e3a\u4f7f\u7528 var \u5173\u952e\u5b57\u5b9a\u4e49\u7684\u53d8\u91cf\u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5728 for \u5faa\u73af\u4e2d\u5b9a\u4e49\u7684 i \u76f8\u5f53\u4e8e\u662f\u5168\u5c40\u53d8\u91cf\uff0c\u5b83\u4f1a\u6dfb\u52a0\u5230 window \u53d8\u91cf\u4e2d\uff0c\u5373\u4f7f\u5728 for \u5faa\u73af\u9000\u51fa\u540e\u4e5f\u80fd\u8bbf\u95ee i \u7684\u503c\u3002\u8fd9\u6837\u5c31\u5bfc\u81f4\u4e86\u4e00\u4e2a\u95ee\u9898\uff0c\u4f7f\u7528 setTimeout() \u63a8\u8fdf\u7684\u51fd\u6570\u4f1a\u5728 for \u5faa\u73af\u7ed3\u675f\u540e\u624d\u6267\u884c\uff0c\u6b64\u65f6 i \u7684\u503c\u5df2\u7ecf\u53d8\u6210 3 \u4e86\uff0c\u6240\u4ee5 3 \u4e2a setTimeout() \u4e2d\u7684\u51fd\u6570\u90fd\u4f1a\u6253\u5370\u51fa 3\u3002\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u6709\u4e24\u79cd\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u7b2c 1 \u79cd\u662f\u4f7f\u7528 let \u5173\u952e\u5b57\u5b9a\u4e49\u53d8\u91cf i\uff0c\u8fd9\u6837\u5728\u6bcf\u6b21\u5faa\u73af\u65f6\uff0c\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u4f5c\u7528\u57df\uff0c\u56e0\u6b64\u6bcf\u4e2a\u4f5c\u7528\u57df\u4e2d\u7684 i \u662f\u76f8\u4e92\u72ec\u7acb\u7684\uff0c\u8fd9\u6837\u5c31\u80fd\u6253\u5370\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"0 1 2"),"\u3002"),(0,o.kt)("p",null,"\u7b2c 2 \u79cd\u65b9\u6cd5\u662f\u4f7f\u7528\u81ea\u6267\u884c\u51fd\u6570\uff0c\u4f8b\u5982\u4e0b\u8fb9\u4ee3\u7801\u8fd9\u6837\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"for(var i = 0; i < 3; i++) {\n    (function(i) {\n    setTimeout(() => {\n      console.log(i);\n    })\n  })(i)\n}\n")),(0,o.kt)("p",null,"\u8fd9\u65f6\uff0ci \u901a\u8fc7\u53c2\u6570\u4f20\u9012\u7ed9\u4e86\u533f\u540d\u7684\u81ea\u6267\u884c\u51fd\u6570\uff0c\u540c\u65f6\u81ea\u6267\u884c\u51fd\u6570\u521b\u5efa\u4e86\u4e00\u4e2a\u95ed\u5305\uff0c\u6240\u4ee5\u5b83\u4f1a\u6355\u83b7 i \u7684\u503c\uff0c\u76f8\u5f53\u4e8e\u5728\u5185\u90e8\u590d\u5236\u4e86\u53c2\u6570 i \u7684\u503c\uff0c\u6240\u4ee5\u65e0\u8bba\u5916\u8fb9\u7684 i \u600e\u4e48\u53d8\u5316\uff0c\u5b83\u5185\u90e8\u7684\u503c\u90fd\u4e0d\u4f1a\u53d1\u751f\u6539\u53d8\u3002\u8fd9\u6837\u4e5f\u80fd\u6253\u5370\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"0 1 2"),"\u3002"),(0,o.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,o.kt)("p",null,"\u8fd9 5 \u4e2a\u95ee\u9898\u63ed\u9732\u4e86 JavaScript \u4e2d\u5e38\u89c1\u7684\u4e00\u4e9b\u5751\uff0c\u7a0d\u5fae\u4e0d\u6ce8\u610f\u5c31\u4f1a\u7559\u4e0b\u9690\u60a3\uff0c\u5e76\u4e14\u96be\u4ee5\u5bdf\u89c9\uff0c\u4f8b\u5982\u4e00\u4e2a\u7b80\u5355\u7684\u6362\u884c\u3001 this \u6307\u5411\u7684\u6539\u53d8\u3001\u610f\u5916\u4fee\u6539\u6570\u7ec4\u7684\u957f\u5ea6\u3001\u53d8\u91cf\u548c\u51fd\u6570\u63d0\u5347\u3001\u4f5c\u7528\u57df\u7684\u521b\u5efa\u90fd\u6709\u53ef\u80fd\u51fa\u73b0\u5f02\u5916\u7684\u60c5\u51b5\u3002\u8fd9\u4e9b\u95ee\u9898\u53ef\u80fd\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\u5e76\u4e0d\u591a\u89c1\uff0c\u4f46\u662f\u7ecf\u5e38\u4f1a\u51fa\u73b0\u5728 JS \u7b14\u8bd5\u548c\u9762\u8bd5\u4e2d\uff0c\u7528\u4e8e\u8003\u5bdf\u9762\u8bd5\u8005\u5bf9 JS \u7684\u719f\u6089\u7a0b\u5ea6\u3002\u53e6\u5916\uff0c JS \u4e2d\u7684\u5751\u8fdc\u4e0d\u6b62\u8fd9\u4e9b\uff0c\u6240\u4ee5\u9700\u8981\u5728\u65e5\u5e38\u4e2d\u591a\u79ef\u7d2f\uff0c\u53e6\u5916\u4e5f\u53ef\u5173\u6ce8\u672c\u535a\u5ba2\uff0c\u6211\u4f1a\u4e0d\u5b9a\u65f6\u7684\u66f4\u65b0 JavaScript \u4f7f\u7528\u4e0a\u7684\u95ee\u9898\uff0c\u611f\u8c22\uff01"))}s.isMDXComponent=!0}}]);