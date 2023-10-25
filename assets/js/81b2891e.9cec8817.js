"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[7502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),u=n,m=h["".concat(s,".").concat(u)]||h[u]||d[u]||i;return a?o.createElement(m,r(r({ref:t},c),{},{components:a})):o.createElement(m,r({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:n,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8221:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=a(7462),n=(a(7294),a(3905));const i={sidebar_position:7,sidebar_label:"Vercel",title:"Integrating Momento with your Vercel app",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Vercel."},r=void 0,l={unversionedId:"cache/develop/integrations/vercel-integration",id:"cache/develop/integrations/vercel-integration",title:"Integrating Momento with your Vercel app",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Vercel.",source:"@site/docs/cache/develop/integrations/vercel-integration.md",sourceDirName:"cache/develop/integrations",slug:"/cache/develop/integrations/vercel-integration",permalink:"/cache/develop/integrations/vercel-integration",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/cache/develop/integrations/vercel-integration.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Vercel",title:"Integrating Momento with your Vercel app",description:"Learn to deploy a chat app using Momento Javascript Web SDK to Vercel."},sidebar:"tutorialSidebar",previous:{title:"Unity",permalink:"/cache/develop/integrations/unity-integration"},next:{title:"Cloudflare",permalink:"/cache/develop/integrations/cloudflare"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploying with Vercel",id:"deploying-with-vercel",level:2},{value:"Conclusion",id:"conclusion",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel")," is a popular platform for building, deploying, and scaling modern websites and apps. Vercel are also the creators and maintainers of ",(0,n.kt)("a",{parentName:"p",href:"https://nextjs.org/"},"Next.js"),". Their platform's offerings include a fast global edge network, the scalability of serverless, and deployments seamlessly integrated with the most popular Git providers: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),", ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://bitbucket.org/"},"Bitbucket"),". "),(0,n.kt)("p",null,"In this tutorial, we'll make use of a simple example ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat"},"Next.js chat application")," from our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"Javascript SDK"),". By the end of the exercise, you'll have a realtime browser-based chat application up and running at a URL you can use to invite your friends to the chat."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To get this app deployed and running, you'll need to have the following available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"An account with a Git provider such as ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/"},"GitHub"),", ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com"},"GitLab"),", or ",(0,n.kt)("a",{parentName:"li",href:"https://bitbucket.org/"},"Bitbucket"),"."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("a",{parentName:"li",href:"https://vercel.com/"},"Vercel")," account."),(0,n.kt)("li",{parentName:"ul"},"A copy or fork of the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/momentohq/client-sdk-javascript"},"Momento Javascript SDK")," in your personal repositories.")),(0,n.kt)("p",null,"Once you have a Vercel account and a copy or fork of the Momento Javascript SDK in your Git provider account, you're ready to configure the Momento side of things using the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com"},"Momento console"),". You can create an account in the console by providing your email address or linking an existing Google or GitHub account. Once you've logged into the console, click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create Cache")," button on the top right of the page:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create Cache button",src:a(6923).Z,width:"336",height:"258"})),(0,n.kt)("p",null,"Create a cache called ",(0,n.kt)("inlineCode",{parentName:"p"},"chat"),". You can create the cache in your choice of cloud provider, AWS or GCP, and in any region."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create cache form",src:a(2438).Z,width:"2990",height:"1350"})),(0,n.kt)("p",null,"After pressing the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create")," button you'll see the new ",(0,n.kt)("inlineCode",{parentName:"p"},"chat")," cache in the list of available caches."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chat cache",src:a(6640).Z,width:"2954",height:"648"})),(0,n.kt)("p",null,"Notice the region you created your cache in is also displayed in the list of caches. You'll need to make sure that you choose the same region when you generate a Momento authentication token in the next step. Navigate to the ",(0,n.kt)("a",{parentName:"p",href:"https://console.gomomento.com/tokens"},"tokens")," page, choose the cloud provider and region you used to create your cache, choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Super User Token")," token type, and hit the ",(0,n.kt)("inlineCode",{parentName:"p"},"Generate Token")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Generate token",src:a(1204).Z,width:"2984",height:"1600"})),(0,n.kt)("p",null,"Copy the ",(0,n.kt)("inlineCode",{parentName:"p"},"Auth Token")," and save it in a safe place. You'll need to use it later to configure your Vercel deployment, where you will add it as an environment variable for use in the chat app."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Generated token",src:a(3679).Z,width:"2214",height:"374"})),(0,n.kt)("h2",{id:"deploying-with-vercel"},"Deploying with Vercel"),(0,n.kt)("p",null,"Now it's time to log into Vercel to configure and deploy the application. As noted before, you need a copy of the Momento Javascript SDK available in your repository. In this example, we'll deploy from a GitHub repository forked from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript"},"the original"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Fork SDK Repository",src:a(3715).Z,width:"2478",height:"84"})),(0,n.kt)("p",null,"After logging into Vercel, navigate to your ",(0,n.kt)("inlineCode",{parentName:"p"},"Overview")," page and press the ",(0,n.kt)("inlineCode",{parentName:"p"},"Create a New Project")," button."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vercel overview page",src:a(531).Z,width:"2944",height:"1372"})),(0,n.kt)("p",null,"From the list of repositories available to you, press the ",(0,n.kt)("inlineCode",{parentName:"p"},"Import")," button for ",(0,n.kt)("inlineCode",{parentName:"p"},"client-sdk-javascript"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vercel import repository",src:a(9756).Z,width:"2600",height:"1434"})),(0,n.kt)("p",null,"The next screen allows you to configure your deployment. Because we are deploying an example application from a subdirectory of the Momento Javascript SDK, you'll need to set the ",(0,n.kt)("inlineCode",{parentName:"p"},"Root Directory")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Configure Project")," section of the page. The path to the chat example is ",(0,n.kt)("inlineCode",{parentName:"p"},"/examples/web/nextjs-chat"),", so you'll enter that as the ",(0,n.kt)("inlineCode",{parentName:"p"},"Root Directory"),", using the ",(0,n.kt)("inlineCode",{parentName:"p"},"Edit")," button to navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"examples")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"web")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"nextjs-chat"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vercel root directory",src:a(3425).Z,width:"1440",height:"1127"})),(0,n.kt)("p",null,"Notice the Next.js icon next to the selected directory. Vercel has examined the contents of the directory and detected that our project is using Next.js. Because of this auto-detection, we can simply leave the ",(0,n.kt)("inlineCode",{parentName:"p"},"Build and Output Settings")," section alone. It will select default values appropriate to our project. "),(0,n.kt)("p",null,"Recall that we generated and saved a Momento auth token earlier for use with this application. Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Environment Variables")," section below the build settings to add an environment variable with ",(0,n.kt)("inlineCode",{parentName:"p"},"MOMENTO_AUTH_TOKEN")," as the name and the token you generated as the value. Next, add a second environment variable with ",(0,n.kt)("inlineCode",{parentName:"p"},"NEXT_PUBLIC_MOMENTO_CACHE_NAME")," as the key and ",(0,n.kt)("inlineCode",{parentName:"p"},"chat")," as the value to point your app to the cache you created earlier."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vercel environment variables",src:a(6957).Z,width:"1568",height:"722"})),(0,n.kt)("p",null,"And that's all there is to do to configure the deployment. Press the ",(0,n.kt)("inlineCode",{parentName:"p"},"Deploy")," button to release your app into the wild!"),(0,n.kt)("p",null,"During the deployment, Vercel displays a detailed log showing what it's doing to build and publish your site and, if necessary, reporting on deployment failures to assist in troubleshooting. If all went as planned, you'll be directed to a page confirming a successful deployment."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vercel deployment confirmation",src:a(7239).Z,width:"2518",height:"1244"})),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"Continue to Dashboard")," button to view detailed information about your deployment, most importantly being the URL."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vercel production deployment",src:a(9018).Z,width:"2444",height:"1132"})),(0,n.kt)("p",null,"You're now ready to chat with your friends! There are a few URLs to choose from listed here, but you'll want to use the simplest one listed in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Domains")," section. You would, of course, set up a custom domain were this a production app, but the generated vercel.app URL is good enough for our purposes."),(0,n.kt)("p",null,"Clicking on the ",(0,n.kt)("inlineCode",{parentName:"p"},"client-sdk-javascript.vercel.app")," link (your URL will likely be different) reveals your chat app's lobby screen. Use ",(0,n.kt)("inlineCode",{parentName:"p"},"chat")," as the name of the chat room. You could use any name, but using ",(0,n.kt)("inlineCode",{parentName:"p"},"chat")," makes it easy to remember and share. If it doesn't exist, the chat room will be created."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chat app lobby",src:a(2966).Z,width:"708",height:"552"})),(0,n.kt)("p",null,"The final step is to choose a username for the chat."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chat app username",src:a(4387).Z,width:"758",height:"542"})),(0,n.kt)("p",null,"Now all that's left is to share the URL, cache, and room name with the people you'd like to invite to your chat!"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chat app chat",src:a(746).Z,width:"3024",height:"1794"})),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"We hope this quick tutorial has given you an idea of how simple and straightforward it is to deploy a Momento-powered application with Vercel. Feel free, of course, to dive into the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/momentohq/client-sdk-javascript/tree/main/examples/web/nextjs-chat"},"code for this chat example")," as well. We hope you'll also enjoy the simplicity of the Momento Topics feature that powers the chat, especially when compared to alternative approaches such as polling and web sockets. And we especially look forward to seeing what our customers build and deploy with Momento in the future!"))}d.isMDXComponent=!0},6640:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-caches-chat-ce796d1f23d2d69c009f067727eab408.png"},2438:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-create-cache-form-1dd5a6c37dfaa6885394f9b79c9425e5.png"},6923:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-create-cache-90d89709336a49153da1d5b47282742a.png"},1204:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-generate-token-form-b4b496c107969c7c2003c01edb6e6121.png"},3679:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/console-generate-token-result-b2c8d5c02290b410501cb50bfe27e02b.png"},3715:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/github-fork-js-sdk-3950285fbebfdc6a75982998d63e70d6.png"},746:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/nextjs-chat-app-chat-6d2b67d875c0be1200e1e583faced55c.png"},2966:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/nextjs-chat-app-lobby-c44d4afaf6ea9f9addfa7ca50f4d754b.png"},4387:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/nextjs-chat-app-username-35a5af269bf50fa8441581c33a673661.png"},7239:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vercel-deployment-confirmation-ec0ea85794d3997ac02f72fee2765413.png"},6957:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vercel-environment-variables-87692ae945f17dbb2b0b74a4385feb72.png"},9756:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vercel-import-repository-b3193091e235b48aa031cc066853e65d.png"},531:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vercel-overview-cc8a982b6036e12d661d5bee76005459.png"},9018:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vercel-production-deployment-8cf79810a0396640e40e7f2d99495354.png"},3425:(e,t,a)=>{a.d(t,{Z:()=>o});const o=a.p+"assets/images/vercel-root-directory-a45b18c784d385c437aacd0647399499.png"}}]);