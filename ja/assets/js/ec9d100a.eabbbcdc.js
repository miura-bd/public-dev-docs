"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[3911],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=r,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6758:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:7,title:"Momento PHP SDK",pagination_prev:null,sidebar_label:"PHP",description:"Information about the Momento PHP SDK"},i="Momento PHP SDK",l={unversionedId:"develop/sdks/php/index",id:"develop/sdks/php/index",title:"Momento PHP SDK",description:"Information about the Momento PHP SDK",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/develop/sdks/php/index.md",sourceDirName:"develop/sdks/php",slug:"/develop/sdks/php/",permalink:"/ja/develop/sdks/php/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/php/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Momento PHP SDK",pagination_prev:null,sidebar_label:"PHP",description:"Information about the Momento PHP SDK"},sidebar:"tutorialSidebar",next:{title:"Cheat Sheet",permalink:"/ja/develop/sdks/php/cheat-sheet"}},p={},s=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Integrations",id:"integrations",level:2}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"momento-php-sdk"},"Momento PHP SDK"),(0,r.kt)("p",null,"Welcome to the Momento PHP SDK documentation!"),(0,r.kt)("p",null,"The Momento PHP SDK is available via the Packagist package ",(0,r.kt)("a",{parentName:"p",href:"https://packagist.org/packages/momentohq/client-sdk-php"},(0,r.kt)("inlineCode",{parentName:"a"},"momentohq/client-sdk-php")),"."),(0,r.kt)("p",null,"The source code can be found on github: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-php"},"momentohq/client-sdk-php"),"."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Momento Auth Token is required; you can get one from the ",(0,r.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento Web Console"),"."),(0,r.kt)("li",{parentName:"ul"},"At least PHP 8.0"),(0,r.kt)("li",{parentName:"ul"},"The grpc PHP extension. See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/grpc/grpc/blob/v1.54.0/src/php/README.md"},"gRPC docs")," section on installing the extension.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/ja/develop/sdks/php/cheat-sheet"},"PHP SDK Cheat Sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php/blob/main/examples/README.md"},"PHP SDK Examples"),": working example projects that illustrate how to use the PHP SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Observability: Logging and Client-side Metrics with the PHP SDK"),(0,r.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: Configuration and Error handling in the PHP SDK")),(0,r.kt)("h2",{id:"integrations"},"Integrations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/laravel-cache"},"Laravel Cache")," - a drop-in replacement that allows you to use Momento Cache with your existing Laravel application! See also our ",(0,r.kt)("a",{parentName:"li",href:"/ja/develop/integrations/momento-cache-laravel-php"},"Laravel Integration")," page."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/laravel-example"},"Laravel Example App")," - a fully operational Laravel example application that uses the Momento Laravel Cache integration."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-php/blob/main/README-PSR16.md"},"PSR-16 Cache API")," - an implementation of the PHP PSR-16 cache specification backed by Momento Cache.")))}m.isMDXComponent=!0}}]);