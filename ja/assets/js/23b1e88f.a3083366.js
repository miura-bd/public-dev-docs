"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4478],{3905:(t,e,r)=>{r.d(e,{Zo:()=>N,kt:()=>c});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},p=Object.keys(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(a=0;a<p.length;a++)r=p[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),k=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},N=function(t){var e=k(t.components);return a.createElement(d.Provider,{value:e},t.children)},i="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,p=t.originalType,d=t.parentName,N=m(t,["components","mdxType","originalType","parentName"]),i=k(r),u=n,c=i["".concat(d,".").concat(u)]||i[u]||s[u]||p;return r?a.createElement(c,o(o({ref:e},N),{},{components:r})):a.createElement(c,o({ref:e},N))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=r.length,o=new Array(p);o[0]=u;var m={};for(var d in e)hasOwnProperty.call(e,d)&&(m[d]=e[d]);m.originalType=t,m[i]="string"==typeof t?t:n,o[1]=m;for(var k=2;k<p;k++)o[k]=r[k];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7214:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var a=r(7462),n=(r(7294),r(3905));const p={sidebar_position:12,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",pagination_next:null},o=void 0,m={unversionedId:"topics/develop/api-reference/language-support",id:"topics/develop/api-reference/language-support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/topics/develop/api-reference/language-support.md",sourceDirName:"topics/develop/api-reference",slug:"/topics/develop/api-reference/language-support",permalink:"/ja/topics/develop/api-reference/language-support",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/topics/develop/api-reference/language-support.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,sidebar_label:"Language Support",title:"Language API Support Matrix",description:"A reference as to which Momento SDK languages support each API",pagination_next:null},sidebar:"topicsSidebar",previous:{title:"Response objects",permalink:"/ja/topics/develop/api-reference/response-objects"}},d={},k=[{value:"Current Status of API support in Momento SDKs",id:"current-status-of-api-support-in-momento-sdks",level:2}],N={toc:k},i="wrapper";function s(t){let{components:e,...r}=t;return(0,n.kt)(i,(0,a.Z)({},N,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"current-status-of-api-support-in-momento-sdks"},"Current Status of API support in Momento SDKs"),(0,n.kt)("h3",null,"Topics"),(0,n.kt)("p",null,"A matrix of SDK support for Momento Topics APIs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"Elixir"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"subscribe"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"publish"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"listWebhooks"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"putWebhook"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"deleteWebhook"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"getWebhookSecret"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"rotateWebhookSecret"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))),(0,n.kt)("h3",null,"Auth"),(0,n.kt)("p",null,"A matrix of SDK support for Momento auth token APIs"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Feature"),(0,n.kt)("th",{parentName:"tr"},"Node.js"),(0,n.kt)("th",{parentName:"tr"},"Web"),(0,n.kt)("th",{parentName:"tr"},".NET"),(0,n.kt)("th",{parentName:"tr"},"Python"),(0,n.kt)("th",{parentName:"tr"},"Go"),(0,n.kt)("th",{parentName:"tr"},"Java"),(0,n.kt)("th",{parentName:"tr"},"Elixir"),(0,n.kt)("th",{parentName:"tr"},"PHP"),(0,n.kt)("th",{parentName:"tr"},"Rust"),(0,n.kt)("th",{parentName:"tr"},"Ruby"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"generateAuthToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"refreshAuthToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr"},"generateDisposableToken"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u2705"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c"),(0,n.kt)("td",{parentName:"tr"},"\u274c")))))}s.isMDXComponent=!0}}]);