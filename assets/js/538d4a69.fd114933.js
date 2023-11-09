"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[4323],{3043:(e,o,t)=>{t(7294)},7235:(e,o,t)=>{t.d(o,{Z:()=>s});var n=t(614),a=t(7294);const s=e=>{let{language:o,code:t}=e;return a.createElement(n.Z,{language:o},t)}},4645:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(7462),a=(t(7294),t(3905)),s=(t(3043),t(7235));const i={sidebar_position:2,title:"Momento JavaScript web SDK",pagination_prev:null,sidebar_label:"JS Web SDK",description:"Information about the Momento web SDK"},r="Momento web SDK for JavaScript in browsers",l={unversionedId:"cache/develop/sdks/web/index",id:"cache/develop/sdks/web/index",title:"Momento JavaScript web SDK",description:"Information about the Momento web SDK",source:"@site/docs/cache/develop/sdks/web/index.md",sourceDirName:"cache/develop/sdks/web",slug:"/cache/develop/sdks/web/",permalink:"/cache/develop/sdks/web/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/sdks/web/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Momento JavaScript web SDK",pagination_prev:null,sidebar_label:"JS Web SDK",description:"Information about the Momento web SDK"},sidebar:"tutorialSidebar",next:{title:"Python",permalink:"/cache/develop/sdks/python/"}},c={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Resources",id:"resources",level:2},{value:"Momento web SDK and Momento Topics",id:"momento-web-sdk-and-momento-topics",level:2},{value:"Using the web SDK for browsers",id:"using-the-web-sdk-for-browsers",level:2},{value:"Credentials for Browsers",id:"credentials-for-browsers",level:2},{value:"FAQ",id:"faq",level:2}],h={toc:p},d="wrapper";function m(e){let{components:o,...t}=e;return(0,a.kt)(d,(0,n.Z)({},h,t,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-web-sdk-for-javascript-in-browsers"},"Momento web SDK for JavaScript in browsers"),(0,a.kt)("p",null,"Momento provides two JavaScript SDKs; ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/sdks/nodejs"},"one for Node.js")," and one for other web applications. The two SDKs have identical APIs, so your code will look the same except for ",(0,a.kt)("inlineCode",{parentName:"p"},"import")," statements, but under the hood they are built for optimal performance and compatibility in different JavaScript runtime environments."),(0,a.kt)("img",{src:"/img/web.jpg",width:"90%",alt:"a picture of abstract web strung between node.js nodes."}),(0,a.kt)("p",null,"The Node.js SDK is best suited for server-side use cases. The Momento web SDK, however, allows developers to write JavaScript code that runs in a browser and communicates directly with Momento services. This allows you to avoid the typical overhead of building and operating your own web service to mediate cache or pub/sub calls between the browser and Momento. It also means one less hop for your web traffic, so you can get even better performance out of your browser application. The best of both worlds!"),(0,a.kt)("p",null,"You can also use the web SDK in other non-Node.js JavaScript environments."),(0,a.kt)("p",null,"The Momento web SDK is available via the npm package ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@gomomento/sdk-web"},(0,a.kt)("inlineCode",{parentName:"a"},"@gomomento/sdk-web")),"."),(0,a.kt)("p",null,"The source code can be found on GitHub: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"momentohq/client-sdk-javascript"),"."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Momento API key is required; you can get one from the ",(0,a.kt)("a",{parentName:"li",href:"https://console.gomomento.com/"},"Momento web console"),".")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/cache/develop/sdks/nodejs/cheat-sheet"},"Momento Node.js cheat sheet"),": this cheat sheet targets the Node.js SDK, but the web SDK APIs are fully compatible."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat"},"Chat app: Next.js"),": a dynamic app that allows users to chat in their browser by entering a cache and topic name. The application vends low scope, short-lived auth tokens to the browser which uses them to subscribe to the topic."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/vite-chat-app"},"Chat app: Vite"),": a static version of the chat app that requires a separate API (such as our ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},"Node.js token vending machine"),") to provide auth tokens to browsers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/README.md"},"Web SDK Examples"),": working example projects that illustrate how to use the web SDK"),(0,a.kt)("li",{parentName:"ul"},"COMING SOON: Taking your code to prod: configuration and error handling in the web SDK")),(0,a.kt)("h2",{id:"momento-web-sdk-and-momento-topics"},"Momento web SDK and Momento Topics"),(0,a.kt)("p",null,"Momento Topics significantly simplifies publisher-subscriber communication in a browser. Traditionally, developers example of this is a chat application embedded in a website; you are not only building the client code for the browser, but the server-side code for routing all the communications."),(0,a.kt)("p",null,"This server-side complexity is eliminated by incorporating Momento Topics with the Momento web SDK. Developers can subscribe to Momento Topics directly from the browser. Momento then takes care of all communication when messages are published to the topic, eliminating the need for custom server-side infrastructure for WebSockets!"),(0,a.kt)("h2",{id:"using-the-web-sdk-for-browsers"},"Using the web SDK for browsers"),(0,a.kt)("p",null,"While the API calls are ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/sdks/nodejs/cheat-sheet"},"identical to the Momento Node.js SDK"),", the import/require statement will consume the ",(0,a.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk-web")," package from npm, instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"@gomomento/sdk")," (which is the Node.js SDK)."),(0,a.kt)("p",null,"Here's an example import statement for the web SDK:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"import {CacheClient} from \u2018@gomomento/sdk-web\u2019;")),(0,a.kt)("h2",{id:"credentials-for-browsers"},"Credentials for Browsers"),(0,a.kt)("p",null,"In order for your browser application to communicate with Momento services, you will need to provide the browser with a Momento auth token.\nThe recommended practice is to generate a Momento disposable token that has expiring credentials for each browser session. This enables the app to distribute tokens without worrying about your data being compromised."),(0,a.kt)("p",null,"To create a Momento disposable token for use in the browser, you will generally need a ",(0,a.kt)("a",{parentName:"p",href:"https://www.gomomento.com/blog/introducing-the-momento-token-vending-machine"},'"token vending machine"')," component. The token vending machine can be a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/nodejs/token-vending-machine"},"standalone application")," with an HTTP endpoint that a static website can access, or it can be a component embedded into the server side of your web application, as in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/blob/main/examples/web/nextjs-chat/README.md"},"Next.js chat app example"),"."),(0,a.kt)("p",null,"In either case, you will likely use the Node.js SDK to instantiate a Momento ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthClient")," and provide it an API key with Super User scope generated via the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/"},"Momento Console"),":"),(0,a.kt)(s.Z,{language:"javascript",code:"new AuthClient({\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("p",null,"Then you will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"generateDisposableToken")," API to create a disposable token that you can vend to the browser. These tokens are short-lived by default and they must expire within one hour."),(0,a.kt)(s.Z,{language:"javascript",code:"// Generate a disposable token with read-write access to a specific key in one cache\nconst oneKeyOneCacheToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyReadWrite('squirrels', 'mo'),\n  ExpiresIn.minutes(30)\n);\nif (oneKeyOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to the \"mo\" key in the \"squirrels\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneKeyOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneKeyOneCacheToken.expiresAt.epoch()}`);\n} else if (oneKeyOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneKeyOneCacheToken.errorCode()}: ${oneKeyOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-write access to a specific key prefix in all caches\nconst keyPrefixAllCachesToken = await authClient.generateDisposableToken(\n  DisposableTokenScopes.cacheKeyPrefixReadWrite(AllCaches, 'squirrel'),\n  ExpiresIn.minutes(30)\n);\nif (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to keys prefixed with \"squirrel\" in all caches!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${keyPrefixAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${keyPrefixAllCachesToken.expiresAt.epoch()}`);\n} else if (keyPrefixAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${keyPrefixAllCachesToken.errorCode()}: ${keyPrefixAllCachesToken.toString()}`\n  );\n}\n\n// Generate a disposable token with read-only access to all topics in one cache\nconst allTopicsOneCacheToken = await authClient.generateDisposableToken(\n  TokenScopes.topicSubscribeOnly('squirrel', AllTopics),\n  ExpiresIn.minutes(30)\n);\nif (allTopicsOneCacheToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${allTopicsOneCacheToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${allTopicsOneCacheToken.expiresAt.epoch()}`);\n} else if (allTopicsOneCacheToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${allTopicsOneCacheToken.errorCode()}: ${allTopicsOneCacheToken.toString()}`\n  );\n}\n\n// Generate a disposable token with write-only access to a single topic in all caches\nconst oneTopicAllCachesToken = await authClient.generateDisposableToken(\n  TokenScopes.topicPublishOnly(AllCaches, 'acorn'),\n  ExpiresIn.minutes(30)\n);\nif (oneTopicAllCachesToken instanceof GenerateDisposableToken.Success) {\n  console.log('Generated a disposable API key with access to all topics in the \"squirrel\" cache!');\n  // logging only a substring of the tokens, because logging security credentials is not advisable :)\n  console.log(`API key starts with: ${oneTopicAllCachesToken.authToken.substring(0, 10)}`);\n  console.log(`Expires At: ${oneTopicAllCachesToken.expiresAt.epoch()}`);\n} else if (oneTopicAllCachesToken instanceof GenerateDisposableToken.Error) {\n  throw new Error(\n    `An error occurred while attempting to call generateApiKey with disposable token scope: ${oneTopicAllCachesToken.errorCode()}: ${oneTopicAllCachesToken.toString()}`\n  );\n}",mdxType:"SdkExampleCodeBlockImpl"}),(0,a.kt)("p",null,"For more information on Momento tokens, including ",(0,a.kt)("inlineCode",{parentName:"p"},"DisposableTokenScope")," and permission objects for authorization, see ",(0,a.kt)("a",{parentName:"p",href:"/cache/develop/api-reference/auth#generatedisposabletoken-api"},"Auth API Reference"),"."),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Is the traffic from the browser encrypted?"),"As with all traffic with Momento services, the web SDK is fully encrypted on the wire. In addition, the SDK uses TLS 1.2+ encryption."))}m.isMDXComponent=!0}}]);