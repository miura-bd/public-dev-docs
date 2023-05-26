"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6154],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function k(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},p=Object.keys(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)a=p[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var N=r.createContext({}),d=function(t){var e=r.useContext(N),a=e;return t&&(a="function"==typeof t?t(e):m(m({},e),t)),a},o=function(t){var e=d(t.components);return r.createElement(N.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,N=t.parentName,o=k(t,["components","mdxType","originalType","parentName"]),s=d(a),h=n,i=s["".concat(N,".").concat(h)]||s[h]||l[h]||p;return a?r.createElement(i,m(m({ref:e},o),{},{components:a})):r.createElement(i,m({ref:e},o))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,m=new Array(p);m[0]=s;var k={};for(var N in e)hasOwnProperty.call(e,N)&&(k[N]=e[N]);k.originalType=t,k.mdxType="string"==typeof t?t:n,m[1]=k;for(var d=2;d<p;d++)m[d]=a[d];return r.createElement.apply(null,m)}return r.createElement.apply(null,a)}s.displayName="MDXCreateElement"},4655:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>N,contentTitle:()=>m,default:()=>l,frontMatter:()=>p,metadata:()=>k,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const p={sidebar_position:12,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",slug:"/develop/api-reference/language-support"},m=void 0,k={unversionedId:"develop/api-reference/language-support",id:"develop/api-reference/language-support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",source:"@site/docs/develop/api-reference/language-support.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/language-support",permalink:"/ja/develop/api-reference/language-support",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/language-support.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",slug:"/develop/api-reference/language-support"},sidebar:"tutorialSidebar",previous:{title:"Response objects",permalink:"/ja/develop/api-reference/response-objects"},next:{title:"Integrations"}},N={},d=[{value:"Current Status of API support in Momento SDKs",id:"current-status-of-api-support-in-momento-sdks",level:2}],o={toc:d};function l(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"current-status-of-api-support-in-momento-sdks"},"Current Status of API support in Momento SDKs"),(0,n.kt)("h3",null,"Global"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"ping"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"flushCache"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"keysExist"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"keyExists"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"itemGetType"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"delete"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"updateTtl"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"increaseTtl"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"decreaseTtl"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"itemGetTtl"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Scalars"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"get"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"set"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setIfNotExists"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"increment"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Lists"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listConcatenateBack"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listConcatenateFront"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listFetch"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listLength"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listPopBack"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listPopFront"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listPushBack"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listPushFront"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listRemoveValue"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listRetain"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Dictionaries"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryFetch"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryLength"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryGetField"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryGetFields"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryIncrement"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryRemoveField"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionaryRemoveFields"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionarySetField"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"dictionarySetFields"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Sets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setAddElement"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setAddElements"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setFetch"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setLength"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setRemoveElement"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setRemoveElements"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setContainsElement"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"setContainsElements"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Sorted Sets"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetFetchByRank"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetFetchByScore"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetLength"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetLengthByScore"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetGetRank"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetGetScore"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetGetScores"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetIncrementScore"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetPutElement"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetPutElements"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetRemoveElement"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"sortedSetRemoveElements"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Signing Keys"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"createSigningKey"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listSigningKeys"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"revokeSigningKey"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Topics"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"subscribe"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"publish"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Auth"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"generateAuthToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"refreshAuthToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Configuration"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"ClientTimeout"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"Retries"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"Middleware"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))))}l.isMDXComponent=!0}}]);