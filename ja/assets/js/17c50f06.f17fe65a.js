"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[8930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(v,i(i({ref:t},p),{},{components:n})):a.createElement(v,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:6,title:"Momento Java SDK",pagination_prev:null,sidebar_label:"Java",description:"Information about the Momento Java SDK"},i="Momento Java SDK",l={unversionedId:"develop/sdks/java/index",id:"develop/sdks/java/index",title:"Momento Java SDK",description:"Information about the Momento Java SDK",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/sdks/java/index.md",sourceDirName:"develop/sdks/java",slug:"/develop/sdks/java/",permalink:"/ja/develop/sdks/java/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/java/index.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Momento Java SDK",pagination_prev:null,sidebar_label:"Java",description:"Information about the Momento Java SDK"},sidebar:"tutorialSidebar",next:{title:"PHP",permalink:"/ja/develop/sdks/php/"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-java-sdk"},"Momento Java SDK"),(0,r.kt)("p",null,"Welcome to the Momento Java SDK documentation!"),(0,r.kt)("p",null,"The Momento Java SDK is available via maven central: ",(0,r.kt)("a",{parentName:"p",href:"https://central.sonatype.com/artifact/software.momento.java/sdk"},(0,r.kt)("inlineCode",{parentName:"a"},"software.momento.java:sdk")),"."),(0,r.kt)("p",null,"The source code can be found on github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-java"},"momentohq/client-sdk-java"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"."),(0,r.kt)("li",{parentName:"ul"},"At least the java 8 run time installed"),(0,r.kt)("li",{parentName:"ul"},"mvn or gradle for downloading the sdk")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Java SDK Cheat Sheet"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-java/blob/main/examples/README.md"},"Java SDK Examples"),": working example projects that illustrate how to use the Java SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the Java SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the Java SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("p",null,"COMING SOON"))}u.isMDXComponent=!0}}]);