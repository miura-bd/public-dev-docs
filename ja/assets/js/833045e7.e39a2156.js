"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6088],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3755:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={sidebar_position:7,sidebar_label:"Cloudflare",title:"Integrating Momento with your Cloudflare worker",description:"Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK",pagination_next:null},l=void 0,i={unversionedId:"develop/integrations/cloudflare",id:"develop/integrations/cloudflare",title:"Integrating Momento with your Cloudflare worker",description:"Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK",source:"@site/docs/develop/integrations/cloudflare.md",sourceDirName:"develop/integrations",slug:"/develop/integrations/cloudflare",permalink:"/ja/develop/integrations/cloudflare",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/integrations/cloudflare.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Cloudflare",title:"Integrating Momento with your Cloudflare worker",description:"Learn to deploy a Cloudflare worker that uses Momento HTTP API or Web SDK",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Netlify",permalink:"/ja/develop/integrations/netlify-integration"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying with Cloudflare",id:"deploying-with-cloudflare",level:2},{value:"Using the Momento HTTP API",id:"using-the-momento-http-api",level:3},{value:"Using the Momento Web SDK",id:"using-the-momento-web-sdk",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://workers.cloudflare.com/"},"Cloudflare Workers")," is a popular platform for deploying and running serverless code."),(0,a.kt)("p",null,"In this tutorial, we'll make use of two ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers"},"examples")," from our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"JavaScript SDK"),". By the end of the exercise, you'll have a Cloudflare worker that interacts with Momento Cache to populate and retrieve data."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To get this app deployed and running, you'll need to have the following available:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"An account with a Git provider such as ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub"),", ",(0,a.kt)("a",{parentName:"li",href:"https://gitlab.com"},"GitLab"),", or ",(0,a.kt)("a",{parentName:"li",href:"https://bitbucket.org/"},"Bitbucket"),"."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://workers.cloudflare.com/"},"Cloudflare")," account."),(0,a.kt)("li",{parentName:"ul"},"A copy or fork of the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript"},"Momento JavaScript SDK")," in your personal repositories.")),(0,a.kt)("p",null,"Once you have a Cloudflare account and a copy or fork of the Momento JavaScript SDK in your Git provider account, you're ready to configure the Momento side of things using the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Cache")," button on the top right of the page:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create Cache button",src:o(6923).Z,width:"336",height:"258"})),(0,a.kt)("p",null,"Create a cache called ",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Create cache form",src:o(1671).Z,width:"1920",height:"694"})),(0,a.kt)("p",null,"After pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," button you'll see the new ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," cache in the list of available caches."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Chat cache",src:o(6205).Z,width:"1916",height:"472"})),(0,a.kt)("p",null,"Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when generating a Momento authentication token in the next step. Navigate to the ",(0,a.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"tokens")," page, and choose the cloud provider and region you used to create your cache. Since the cache is already created, we will use a fine-grained token that will allow the worker to read from and write to the cache; but will not allow it to do control plane operations such as delete. This is especially helpful if you want to manage the security of control plane and data plane operations separately."),(0,a.kt)("p",null,"Choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Fine-Grained Access Token")," token type, select ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Cache Name")," from the drop down, and ",(0,a.kt)("inlineCode",{parentName:"p"},"readwrite")," as ",(0,a.kt)("inlineCode",{parentName:"p"},"Role Type"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Super User Token")," is used for managing control plane operations. More information about Momento authentication can be found ",(0,a.kt)("a",{parentName:"p",href:"https://docs.momentohq.com/develop/basics/working-with-momento-auth-tokens"},"here"),". Hit the ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Token")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generate token",src:o(4453).Z,width:"3448",height:"1916"})),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Auth Token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP Endpoint")," and save it in a safe place. You'll need to use it later to configure your Worker deployment, where you will add it as an environment variable for use in the worker."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Generated token",src:o(2770).Z,width:"1679",height:"174"})),(0,a.kt)("h2",{id:"deploying-with-cloudflare"},"Deploying with Cloudflare"),(0,a.kt)("p",null,"Now it's time to configure and deploy the application to your Cloudflare account. As noted before, you need a copy of the Momento JavaScript SDK available in your repository.\nIn this example, we'll deploy from a GitHub repository forked from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"the original"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Fork SDK Repository",src:o(3715).Z,width:"2478",height:"84"})),(0,a.kt)("p",null,"This repository contains a directory under ",(0,a.kt)("inlineCode",{parentName:"p"},"examples")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"cloudflare-workers"),". It further contains subdirectories for two types of example projects to use Momento inside a Cloudflare worker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/http-api"},"HTTP-API")," - How to interact with Momento cache using its HTTP API on Cloudflare workers."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers/web-sdk"},"Web-SDK")," - How to interact with Momento cache using its Web SDK on Cloudflare workers.")),(0,a.kt)("p",null,"There are a few reasons why you might choose one over the other when interacting with Momento within a Cloudflare Worker."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The HTTP APIs is lighter-weight; you don't need to add any dependencies, you can just use the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"fetch")," HTTP client methods. However, it only provides a basic subset of all of the Momento APIs, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"delete"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Web SDK is heavier-weight; you need to add a dependency on the SDK. However, it supports the full Momento API (including collections like Dictionaries and SortedSets, plus the ability to publish to Momento Topics). It also has a complete TypeScript/JavaScript API that makes it simpler to write code to interact with Momento. This can save you time and effort when developing your Worker."))),(0,a.kt)("p",null,"Cloudflare uses a file called wrangler.toml to configure the development and publishing of a worker. More information about Cloudflare configuration can be found ",(0,a.kt)("a",{parentName:"p",href:"https://developers.cloudflare.com/workers/wrangler/configuration/"},"on their website"),"."),(0,a.kt)("h3",{id:"using-the-momento-http-api"},"Using the Momento HTTP API"),(0,a.kt)("p",null,"First let's navigate to the relevant example directory to use Momento's HTTP API in a Cloudflare worker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/cloudflare-workers/http-api\n")),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrangler.toml")," file in this directory with the cache name ",(0,a.kt)("inlineCode",{parentName:"p"},"worker")," and the HTTP endpoint we copied before as they appeared in the Momento console."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'name = "momento-cloudflare-worker-http"\nmain = "src/worker.ts"\ncompatibility_date = "2023-07-10"\n\n[vars]\nMOMENTO_REST_ENDPOINT = "https://api.cache.cell-4-us-west-2-1.prod.a.momentohq.com"\nMOMENTO_CACHE_NAME = "worker"\n')),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},".dev.vars")," file in the example directory with the Momento auth token. Since this is a secret token, we don\u2019t store it as an environment variable, instead storing it as a Cloudflare secret."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-.vars"},'MOMENTO_AUTH_TOKEN="<your token here>"\n')),(0,a.kt)("p",null,"Start the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,a.kt)("p",null,"Open your browser to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8787"},"localhost:8787"),". The code in this example sets an item in the cache, gets it, and returns it as a JSON object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'    // setting a value into cache\n    const setResp = await client.set(cache, key, value);\n    console.log("setResp", setResp);\n\n    // getting a value from cache\n    const getResp = await client.get(cache, key)\n    console.log("getResp", getResp);\n\n    return new Response(JSON.stringify({ response: getResp }));\n')),(0,a.kt)("p",null,"A deployed example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://momento-cloudflare-worker-http.pratik-37c.workers.dev"},"here"),"."),(0,a.kt)("p",null,"If you would like to deploy this example to your own Cloudflare worker, make sure you add the ",(0,a.kt)("inlineCode",{parentName:"p"},"MOMENTO_AUTH_TOKEN")," as a secret inside of your Cloudflare account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'\nnpx wrangler secret put MOMENTO_AUTH_TOKEN\n> Enter a secret value: **************************\n> \ud83c\udf00 Creating the secret for the Worker "momento-cloudflare-worker-http"\n> \u2728 Success! Uploaded secret MOMENTO_AUTH_TOKEN\n')),(0,a.kt)("p",null,"Then you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy"),". You will be prompted for a Cloudflare login before deploying to your Cloudflare account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'> shy-bush-898e@0.0.0 deploy\n> wrangler deploy\n\n \u26c5\ufe0f wrangler 3.2.0 (update available 3.5.0)\n-----------------------------------------------------\nYour worker has access to the following bindings:\n- Vars:\n  - MOMENTO_REST_ENDPOINT: "https://api.cache.cell-4-us-west-2-1...."\n  - MOMENTO_CACHE_NAME: "worker"\nTotal Upload: 2.04 KiB / gzip: 0.69 KiB\nUploaded momento-cloudflare-worker-http (1.44 sec)\nPublished momento-cloudflare-worker-http (0.40 sec)\n  https://momento-cloudflare-worker-http.pratik-37c.workers.dev\n')),(0,a.kt)("h3",{id:"using-the-momento-web-sdk"},"Using the Momento Web SDK"),(0,a.kt)("p",null,"First let's navigate to the relevant example directory to use Momento's Web SDK in a Cloudflare worker."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd examples/cloudflare-workers/web-sdk\n")),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"wrangler.toml")," file in this directory with the cache name ",(0,a.kt)("inlineCode",{parentName:"p"},"worker"),". Note that we do not need the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP endpoint")," anymore as the Web SDK manages that for us. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'name = "momento-cloudflare-worker-http"\nmain = "src/worker.ts"\ncompatibility_date = "2023-07-10"\n\n[vars]\nMOMENTO_CACHE_NAME = "worker"\n')),(0,a.kt)("p",null,"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},".dev.vars")," file in the example directory with the Momento auth token. Since this is a secret token, we don\u2019t store it as an environment variable, instead storing it as a Cloudflare secret."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-.vars"},'MOMENTO_AUTH_TOKEN="<your token here>"\n')),(0,a.kt)("p",null,"Start the development server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run start\n")),(0,a.kt)("p",null,"Open your browser to ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:8787"},"localhost:8787"),". The code in this example sets an item in the cache, gets it, and returns it as a JSON object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"    // setting a value into cache\n    await client.set(cache, key, value);\n\n    // getting a value from cache\n    const getResponse = await client.get(cache, key)\n\n    return new Response(JSON.stringify({ response: getResponse.toString() }));\n")),(0,a.kt)("p",null,"A deployed example can be found ",(0,a.kt)("a",{parentName:"p",href:"https://momento-cloudflare-worker-web.pratik-37c.workers.dev/"},"here"),"."),(0,a.kt)("p",null,"If you would like to deploy this example to your own Cloudflare worker, make sure you add the ",(0,a.kt)("inlineCode",{parentName:"p"},"MOMENTO_AUTH_TOKEN")," as a secret inside of your Cloudflare account:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'\nnpx wrangler secret put MOMENTO_AUTH_TOKEN\n> Enter a secret value: **************************\n> \ud83c\udf00 Creating the secret for the Worker "momento-cloudflare-worker-http"\n> \u2728 Success! Uploaded secret MOMENTO_AUTH_TOKEN\n')),(0,a.kt)("p",null,"Then you can run ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run deploy"),". You will be prompted for a Cloudflare login before deploying to your Cloudflare account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'> shy-bush-898e@0.0.0 deploy\n> wrangler deploy\n\n \u26c5\ufe0f wrangler 3.2.0 (update available 3.5.0)\n-----------------------------------------------------\nYour worker has access to the following bindings:\n- Vars:\n  - MOMENTO_CACHE_NAME: "worker"\nTotal Upload: 1673.43 KiB / gzip: 168.75 KiB\nUploaded momento-cloudflare-worker-web (2.46 sec)\nPublished momento-cloudflare-worker-web (0.30 sec)\n  https://momento-cloudflare-worker-web.pratik-37c.workers.dev\n\n')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Cloudflare Workers. Feel free, of course, to dive into the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/cloudflare-workers"},"code for the examples")," as well. We hope you'll also enjoy the simplicity of Momento Cache, as you don't have to manage and provision any infrastructure to get up and running."))}u.isMDXComponent=!0},6205:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/console-caches-worker-f6fe32f41cabf1c18025d4d7e0862f04.png"},6923:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},1671:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/console-create-worker-cache-form-25675fe8e7d0bc42ae1673e102922af3.png"},4453:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/fgac-worker-auth-af9973e1c699bfcaba61714a2e6feb7e.png"},3715:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/github-fork-js-sdk-3950285fbebfdc6a75982998d63e70d6.png"},2770:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/http-endpoint-auth-token-15c123b5fd7ee29f4fd248dfa886ad57.png"}}]);