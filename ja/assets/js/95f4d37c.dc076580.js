"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[814],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),o=n(7294),r=n(6010),i=n(2466),s=n(6550),l=n(1980),u=n(7392),c=n(12);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=d(e),[i,s]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[l,u]=m({queryString:n,groupId:a}),[p,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),f=(()=>{const e=l??p;return h({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var f=n(2389);const v="tabList__CuJ",b="tabItem_LNqP";function k(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(p(t),l(a))},h=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:d},i,{className:(0,r.Z)("tabs__item",b,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=g(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",v)},o.createElement(k,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return o.createElement(w,(0,a.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>s});var a=n(4866),o=n(5162),r=n(814),i=n(7294);const s=e=>{let{js:t,python:n,java:s,go:l,csharp:u,rust:c,ruby:p,cli:d}=e;return t||n||s||l||u||c||p||d?i.createElement(a.Z,null,t&&i.createElement(o.Z,{value:"js",label:"JavaScript"},i.createElement(r.Z,{language:"js"},t)),n&&i.createElement(o.Z,{value:"python",label:"Python"},i.createElement(r.Z,{language:"python"},n)),s&&i.createElement(o.Z,{value:"java",label:"Java"},i.createElement(r.Z,{language:"java"},s)),l&&i.createElement(o.Z,{value:"go",label:"Go"},i.createElement(r.Z,{language:"go"},l)),u&&i.createElement(o.Z,{value:"csharp",label:"C#"},i.createElement(r.Z,{language:"csharp"},u)),c&&i.createElement(o.Z,{value:"rust",label:"Rust"},i.createElement(r.Z,{language:"rust"},c)),p&&i.createElement(o.Z,{value:"ruby",label:"Ruby"},i.createElement(r.Z,{language:"ruby"},p)),d&&i.createElement(o.Z,{value:"cli",label:"CLI"},i.createElement(r.Z,{language:"cli"},d))):null}},9553:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=(n(3404),n(9720));const i={sidebar_position:4,sidebar_label:"Develop",sidebar_class_name:"sidebar-item-data-types",description:"Learn the core concepts for getting started with the Momento SDKs."},s="Developing applications with the Momento SDK",l={unversionedId:"develop/index",id:"develop/index",title:"Developing applications with the Momento SDK",description:"Learn the core concepts for getting started with the Momento SDKs.",source:"@site/docs/develop/index.md",sourceDirName:"develop",slug:"/develop/",permalink:"/ja/develop/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/index.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Develop",sidebar_class_name:"sidebar-item-data-types",description:"Learn the core concepts for getting started with the Momento SDKs."},sidebar:"tutorialSidebar",previous:{title:"\u306f\u3058\u3081\u3066\u307f\u308b",permalink:"/ja/getting-started"},next:{title:"\u30c7\u30fc\u30bf\u578b",permalink:"/ja/develop/datatypes"}},u={},c=[{value:"Credentials",id:"credentials",level:2},{value:"Client configuration objects",id:"client-configuration-objects",level:2},{value:"Laptop",id:"laptop",level:3},{value:"Browser",id:"browser",level:3},{value:"InRegion - Default",id:"inregion---default",level:3},{value:"InRegion - Low Latency",id:"inregion---low-latency",level:3},{value:"Lambda",id:"lambda",level:3},{value:"Constructing a Cache Client",id:"constructing-a-cache-client",level:2},{value:"Error Handling / Production Readiness",id:"error-handling--production-readiness",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developing-applications-with-the-momento-sdk"},"Developing applications with the Momento SDK"),(0,o.kt)("p",null,"Welcome! This page provides some information about common constructs that you will need in order to construct Momento clients in all of our SDKs. We will cover how to provide your Momento credentials, how to configure your client, and some basic information about error handling and production readiness."),(0,o.kt)("h2",{id:"credentials"},"Credentials"),(0,o.kt)("p",null,"When instantiating a Momento client, you will need to provide a Momento auth token.  If you don't have one yet, you can get one from the ",(0,o.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Web Console"),".  Once you have your token, you will provide it to the Momento SDKs via a ",(0,o.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),".  There are convenient factory methods provided to construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),", either from an environment variable or from a String."),(0,o.kt)("p",null,"Example of how to construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," from an environment variable:"),(0,o.kt)(r.X,{js:"CredentialProvider.fromEnvironmentVariable({environmentVariableName: 'MOMENTO_AUTH_TOKEN'});",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"If you're storing your Momento auth token in a secret manager such as AWS Secret Manager or a config file, you will first retrieve the credentials from there and then instantiate a ",(0,o.kt)("inlineCode",{parentName:"p"},"CredentialProvider")," from a string:"),(0,o.kt)(r.X,{js:"const authToken = retrieveAuthTokenFromYourSecretsManager();\nCredentialProvider.fromString({authToken: authToken});",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"For an example of how to retrieve credentials from AWS Secrets Manager, see our page on ",(0,o.kt)("a",{parentName:"p",href:"/develop/integrations/aws-secrets-manager"},"Retrieving a Momento auth token from AWS Secrets Manager"),"."),(0,o.kt)("p",null,"For general information on creating and refreshing Momento auth tokens, see our page on ",(0,o.kt)("a",{parentName:"p",href:"/develop/guides/working-with-momento-auth-tokens"},"Momento authentication with expiring tokens"),"."),(0,o.kt)("h2",{id:"client-configuration-objects"},"Client configuration objects"),(0,o.kt)("p",null,"You will also need to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," object to configure your Momento Cache client. ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," objects control things such as timeouts, retries, logging, middleware, and more."),(0,o.kt)("p",null,"Each SDK comes with some pre-built ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," objects to help you get up and running as quickly as possible. We want to do the hard work of tuning for different environments for you, so that you can focus on the things that are unique to your business. (We even have a blog series about it! ",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/shockingly-simple-cache-clients-that-do-the-hard-work-for-you"},"Shockingly simple: Cache clients that do the hard work for you"),")"),(0,o.kt)("p",null,"Each pre-built configurations come with a ",(0,o.kt)("inlineCode",{parentName:"p"},"latest()")," version, which will always give you the latest recommended configuration for a given environment. This version may change slightly from one release of the SDK to the next as we continue to test, tune, and discover better default settings. If you want to ensure that your configuration does not change with an SDK upgrade, we provide fixed versions such as ",(0,o.kt)("inlineCode",{parentName:"p"},"v1()")," which are guaranteed to remain stable from one release to the next. "),(0,o.kt)("p",null,"You can find the pre-built configurations in our ",(0,o.kt)("inlineCode",{parentName:"p"},"Configurations")," namespace in most SDKs. Here are some of the pre-built configurations that you might be interested in."),(0,o.kt)("h3",{id:"laptop"},"Laptop"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.Laptop")," is a development environment, just for poking around on your... laptop :) It has relaxed timeouts and assumes that your network latencies might be a bit high."),(0,o.kt)(r.X,{js:"Configurations.Laptop.v1();",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h3",{id:"browser"},"Browser"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.Browser")," is a configuration in our ",(0,o.kt)("a",{parentName:"p",href:"/develop/sdks/web"},"web SDK"),". It has relaxed timeout settings since latencies can be highly variable in individual users' browsers, depending on their network."),(0,o.kt)("h3",{id:"inregion---default"},"InRegion - Default"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.Default")," is the recommended configuration for most server-side use cases, where you send requests to Momento services from your apps hosted in the same cloud provider Region. It has more aggressive timeouts and retry behavior than the Laptop config, so it will fail faster and allow your application to fall back to your database or other data source more quickly. This helps ensure your applications don't bottleneck on Momento during a network or service outage."),(0,o.kt)(r.X,{js:"Configurations.InRegion.Default.v1();",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h3",{id:"inregion---low-latency"},"InRegion - Low Latency"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.InRegion.LowLatency")," is a configuration that prioritizes keeping p99.9 latencies as low as possible, potentially sacrificing some throughput to achieve this. It will time out quicker than the ",(0,o.kt)("inlineCode",{parentName:"p"},"InRegion.Default")," configuration. Use this configuration if the most critical factor is to ensure that cache unavailability doesn't force unacceptably high latencies for your application, and you want to fall back to application logic or an authoritative data source more quickly if the cache hasn't responded."),(0,o.kt)(r.X,{js:"Configurations.InRegion.LowLatency.v1();",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h3",{id:"lambda"},"Lambda"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Configurations.Lambda")," is a configuration that is available in some SDKs, and is optimized for the AWS Lambda environment. It has some configuration settings designed to pre-warm the client on Lambda cold starts, and to ensure the connection is re-established proactively if a Lambda remains idle for long enough for the connection to time out."),(0,o.kt)(r.X,{js:"",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"If you do need to customize your configuration beyond what our pre-builts provide, you can build your own ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration"),"\nobject.  See the examples in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Configurations")," namespace in the source code of your SDK to see how they are constructed."),(0,o.kt)("p",null,"We hope that these configurations will meet the needs of most users, but if you find them lacking in any way, please\nopen a GitHub issue on that SDK repo, or contact us at ",(0,o.kt)("inlineCode",{parentName:"p"},"support@momentohq.com"),". We would love to hear about your use case so that we\ncan fix or extend the pre-built configs to support it."),(0,o.kt)("h2",{id:"constructing-a-cache-client"},"Constructing a Cache Client"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheClient")," is the main object that you will use to interact with a Momento cache. To instantiate one, you need to pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"CredentialProvider"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration"),", and a default time to live (TTL) value. The default TTL determines how long items using that ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheClient")," will be stored in the cache before the cache deletes them. When performing ",(0,o.kt)("inlineCode",{parentName:"p"},"Set")," operations, you can override this TTL value with one unique to that operation. See ",(0,o.kt)("a",{parentName:"p",href:"/learn/how-it-works/expire-data-with-ttl"},"Expire data with Time-to-Live (TTL) in Momento Cache")," for more information."),(0,o.kt)("p",null,"Here is an example of how to construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheClient"),":"),(0,o.kt)(r.X,{js:"new CacheClient({\n  configuration: Configurations.Laptop.v1(),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n  }),\n  defaultTtlSeconds: 60,\n});",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("h2",{id:"error-handling--production-readiness"},"Error Handling / Production Readiness"),(0,o.kt)("p",null,"Each of our SDKs has its own page in this documentation; you can navigate to them by clicking ",(0,o.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"SDKs"),' in the left nav.  On each of these pages you will find a link for "Taking your code to prod" that provides best practices for production-ready code in that language.'),(0,o.kt)("p",null,"Here are some general notes on error handling in Momento that apply to all SDKs."),(0,o.kt)("p",null,"Errors that occur in calls to ",(0,o.kt)("inlineCode",{parentName:"p"},"CacheClient")," methods are surfaced to developers as part of the return values of the calls, as opposed to by throwing exceptions. This makes errors more visible when you're writing your code, and allows your IDE to be more helpful in ensuring you've handled the errors you care about. For more on our philosophy about this, see our blog post on why ",(0,o.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/exceptions-are-bugs"},"Exceptions are bugs"),", and send us any feedback you have!"),(0,o.kt)("p",null,"This also helps to ensure that your application doesn't crash at runtime. Momento is a cache, so applications usually have a fallback data source they retrieve data from if the cache is unavailable. Therefore, Momento SDKs are designed to avoid throwing exceptions so your app won't crash if you forget to add a try/catch block. "),(0,o.kt)("p",null,"Instead, Momento response objects extend from a parent class, have child types such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Hit,")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Miss,")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Error,"),' and are designed to be accessed via pattern matching. (In some languages, this concept is called "sealed classes"; in others, "algebraic data types". It is a flavor of polymorphism.) Your code checks whether the response is a ',(0,o.kt)("inlineCode",{parentName:"p"},"Hit,")," a ",(0,o.kt)("inlineCode",{parentName:"p"},"Miss,")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error"),", and then branches accordingly. Using this approach, you get a type-safe response object in the case of a cache hit, with ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," properties that you can be assured at compile-time are not ",(0,o.kt)("inlineCode",{parentName:"p"},"null.")," If the cache read results in a ",(0,o.kt)("inlineCode",{parentName:"p"},"Miss")," or an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error,")," you'll also get a type-safe object that you can use to get more information about what happened (with properties such as ",(0,o.kt)("inlineCode",{parentName:"p"},"errorCode")," that aren't present on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hit")," object)."),(0,o.kt)("p",null,"Here's an example of how to do the pattern matching on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Miss"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," response:"),(0,o.kt)(r.X,{js:"const result = await cacheClient.get('test-cache', 'test-key');\nif (result instanceof CacheGet.Hit) {\n  console.log(`Retrieved value for key 'test-key': ${result.valueString()}`);\n} else if (result instanceof CacheGet.Miss) {\n  console.log(\"Key 'test-key' was not found in cache 'test-cache\");\n} else if (result instanceof CacheGet.Error) {\n  throw new Error(\n    `An error occurred while attempting to get key 'test-key' from cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"Some APIs, such as write APIs, only have ",(0,o.kt)("inlineCode",{parentName:"p"},"Success")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," responses (as opposed to ",(0,o.kt)("inlineCode",{parentName:"p"},"Hit"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Miss"),"). Here's an example of handling one of these responses:"),(0,o.kt)(r.X,{js:"const result = await cacheClient.set('test-cache', 'test-key', 'test-value');\nif (result instanceof CacheSet.Success) {\n  console.log(\"Key 'test-key' stored successfully\");\n} else if (result instanceof CacheSet.Error) {\n  throw new Error(\n    `An error occurred while attempting to store key 'test-key' in cache 'test-cache': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:"",java:"",go:"",csharp:"",rust:"",ruby:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,o.kt)("p",null,"In all cases, your IDE will be able to give you hints as to which types of responses are available for a given API, and what properties/methods are available on each of the response types."),(0,o.kt)("p",null,"For more information, see our ",(0,o.kt)("a",{parentName:"p",href:"/develop/api-reference/response-objects"},"Response Objects")," page, and the docs for the specific SDK that you are using (under ",(0,o.kt)("inlineCode",{parentName:"p"},"Develop"),"->",(0,o.kt)("inlineCode",{parentName:"p"},"SDKs")," in the left nav)."))}d.isMDXComponent=!0}}]);