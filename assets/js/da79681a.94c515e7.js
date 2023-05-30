"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7801],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>d});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=s(a),d=l,c=k["".concat(p,".").concat(d)]||k[d]||u[d]||r;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function d(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var s=2;s<r;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},1712:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:2,sidebar_label:"Lists",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache.",slug:"/develop/api-reference/collections/list"},i="List API reference for Momento Cache",o={unversionedId:"develop/api-reference/list-collections",id:"develop/api-reference/list-collections",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache.",source:"@site/docs/develop/api-reference/list-collections.md",sourceDirName:"develop/api-reference",slug:"/develop/api-reference/collections/list",permalink:"/develop/api-reference/collections/list",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/api-reference/list-collections.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Lists",title:"List API reference",description:"Learn how to interact with the API for list collection data types in Momento Cache.",slug:"/develop/api-reference/collections/list"},sidebar:"tutorialSidebar",previous:{title:"Dictionary",permalink:"/develop/api-reference/collections/dictionary"},next:{title:"Sets",permalink:"/develop/api-reference/collections/sets"}},p={},s=[{value:"List methods",id:"list-methods",level:2},{value:"ListFetch",id:"listfetch",level:3},{value:"ListConcatenateBack",id:"listconcatenateback",level:3},{value:"ListConcatenateFront",id:"listconcatenatefront",level:3},{value:"ListLength",id:"listlength",level:3},{value:"ListPopBack",id:"listpopback",level:3},{value:"ListPopFront",id:"listpopfront",level:3},{value:"ListPushBack",id:"listpushback",level:3},{value:"ListPushFront",id:"listpushfront",level:3},{value:"ListRemoveValue",id:"listremovevalue",level:3},{value:"ListRetain",id:"listretain",level:3},{value:"Truncate to size",id:"truncate-to-size",level:2}],m=(u="SdkExampleTabsImpl",function(t){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)});var u;const k={toc:s};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"list-api-reference-for-momento-cache"},"List API reference for Momento Cache"),(0,l.kt)("p",null,"This page details the Momento API methods for the ",(0,l.kt)("a",{parentName:"p",href:"/develop/datatypes#list-collections"},"list collection data types"),"."),(0,l.kt)("h2",{id:"list-methods"},"List methods"),(0,l.kt)("h3",{id:"listfetch"},"ListFetch"),(0,l.kt)("p",null,"Gets a list item from a cache, with optional slices."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The name of the list item to be retrieved.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting inclusive element of the list to fetch. Default is 0. ",(0,l.kt)("strong",{parentName:"td"},"This argument is optional."))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending exclusive element of the list to fetch. Default is end of list. ",(0,l.kt)("strong",{parentName:"td"},"This argument is optional."))))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"The response object for ListFetch returns three possible options, a cache hit, miss, or an error."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"valueListBytes(): Bytes[]"),(0,l.kt)("li",{parentName:"ul"},"valueListString(): String[]"),(0,l.kt)("li",{parentName:"ul"},"toString(): String - Display a truncated valueListString(). See ",(0,l.kt)("a",{parentName:"li",href:"#truncate-to-size"},"truncation"),"."))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listconcatenateback"},"ListConcatenateBack"),(0,l.kt)("p",null,"Appends the supplied list to the end of an existing list item."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"If you have ","[1, 2, 3]"," and listConcatenateBack ","[4, 5, 6]"," you will have ","[1, 2, 3, 4, 5, 6]","."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Values to be added as elements to the list item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client connection object.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateFrontToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listconcatenatefront"},"ListConcatenateFront"),(0,l.kt)("p",null,"Appends the supplied list to the front of an existing list item."),(0,l.kt)("p",null,"Example:"),(0,l.kt)("p",null,"If you have ","[1, 2, 3]"," and listConcatenateFront ","[4, 5, 6]"," you will have ","[4, 5, 6, 1, 2, 3]","."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"values"),(0,l.kt)("td",{parentName:"tr",align:null},"String[] ","|"," Bytes[]"),(0,l.kt)("td",{parentName:"tr",align:null},"Values to be added as elements to the list item.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateBackToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list item"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listlength"},"ListLength"),(0,l.kt)("p",null,"Get the length of an existing list item"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be checked.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"length()"),": Number"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpopback"},"ListPopBack"),(0,l.kt)("p",null,"Remove and return the last element from a list item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be retreived.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueString()"),": String"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueBytes()"),": Bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": truncated valueString()"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpopfront"},"ListPopFront"),(0,l.kt)("p",null,"Remove and return the first element from a list item."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be retreived.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hit",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueString()"),": String"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"valueBytes()"),": Bytes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": truncated valueString()"))),(0,l.kt)("li",{parentName:"ul"},"Miss"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpushback"},"ListPushBack"),(0,l.kt)("p",null,"Push a value to the end of a list item. This is exactly like passing just one value to ",(0,l.kt)("a",{parentName:"p",href:"#listconcatenateback"},"ListConcatenateBack"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to be added.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateBackToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list item"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listpushfront"},"ListPushFront"),(0,l.kt)("p",null,"Push a value to the beginning of a list item. Just like ",(0,l.kt)("a",{parentName:"p",href:"#listpushback"},"ListPushBack"),", but to the front."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to be added to the list item by the operation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"truncateBackToSize"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"See ",(0,l.kt)("a",{parentName:"td",href:"#truncate-to-size"},"truncate to size"),".")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"listLength()"),": Number - the new length of the list"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"toString()"),": String - add the listLength"))),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listremovevalue"},"ListRemoveValue"),(0,l.kt)("p",null,"Remove all elements in a list item equal to a particular value."),(0,l.kt)("p",null,"Examples"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"If you have the list ",(0,l.kt)("inlineCode",{parentName:"li"},"['up', 'up', 'down', 'down', 'left', 'right']")," and remove \u2018up\u2019 the list will be ",(0,l.kt)("inlineCode",{parentName:"li"},"['down', 'down', 'left', 'right']"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"String ","|"," Bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"Value to be added to the list item by the operation.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"Responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success - even if the value does not exist"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h3",{id:"listretain"},"ListRetain"),(0,l.kt)("p",null,"Retains only slice of the list where the start is inclusive and the end is exclusive.  The items outside of this range will be dropped from the list."),(0,l.kt)("p",null,"Example:\nFor the specified list, start at index 4 (the startIndex) and keep the next five elements, end at index 10 (the endIndex). Discard all other elements in the list. In this example, elements at position 0-3 and 9 or higher are dropped."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cacheName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the cache.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"listName"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Name of the list item to be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"startIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting inclusive element of the list to retain. Default is 0.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endIndex"),(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"The ending exclusive element of the list to retain. Default is end of list.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ttl"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"/develop/api-reference/collections/collectionttl"},"CollectionTTL object")),(0,l.kt)("td",{parentName:"tr",align:null},"TTL for the list item in cache. This TTL takes precedence over the TTL used when initializing a cache connection client.")))),(0,l.kt)("details",null,(0,l.kt)("summary",null,"Method response object"),(0,l.kt)("p",null,"Responses"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Success - even if the value does not exist"),(0,l.kt)("li",{parentName:"ul"},"Error")),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"response objects")," for specific information.")),(0,l.kt)(m,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,l.kt)("h2",{id:"truncate-to-size"},"Truncate to size"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"#listconcatenateback"},"ListConcatenate")," and ",(0,l.kt)("a",{parentName:"p",href:"#listpushback"},"ListPush")," type API calls all have truncation options. If after adding their elements the list exceeds this size, this list will be truncated."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Example: If the list is ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you ListConcatenateBack ",(0,l.kt)("inlineCode",{parentName:"p"},"[4, 5, 6]")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"truncateFrontToSize: 5")," the list will be truncated to ",(0,l.kt)("inlineCode",{parentName:"p"},"[2, 3, 4, 5, 6]")," and the response ListLength will be 5.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Example: If the list is ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3]")," and you ListConcatenateBack ",(0,l.kt)("inlineCode",{parentName:"p"},"[4, 5, 6]")," with ",(0,l.kt)("inlineCode",{parentName:"p"},"truncateFrontToSize: 10")," the list will not be truncated. It will be ",(0,l.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4, 5, 6]")))))}d.isMDXComponent=!0}}]);