"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||i;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},r="Configuring Momento in Serverless",s={unversionedId:"serverless-cache-walkthrough/configuring-momento",id:"serverless-cache-walkthrough/configuring-momento",title:"Configuring Momento in Serverless",description:"In the previous step, we deployed a basic serverless application using AWS Lambda, API Gateway, and DynamoDB. With this, we implemented the basics of account management within our application.",source:"@site/docs/serverless-cache-walkthrough/3-configuring-momento.md",sourceDirName:"serverless-cache-walkthrough",slug:"/serverless-cache-walkthrough/configuring-momento",permalink:"/serverless-cache-walkthrough/configuring-momento",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/serverless-cache-walkthrough/3-configuring-momento.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying a basic serverless application",permalink:"/serverless-cache-walkthrough/deploying-a-basic-serverless-application"},next:{title:"Read-aside caching with Momento",permalink:"/serverless-cache-walkthrough/read-aside-caching-with-momento"}},c={},l=[{value:"Key concepts about the Lambda runtime model",id:"key-concepts-about-the-lambda-runtime-model",level:2},{value:"Lambda lifecycle and cold starts",id:"lambda-lifecycle-and-cold-starts",level:3},{value:"Service code and object reuse",id:"service-code-and-object-reuse",level:3},{value:"Installing and configuring Momento in your serverless application",id:"installing-and-configuring-momento-in-your-serverless-application",level:2},{value:"Signing up for Momento and getting an authentication token",id:"signing-up-for-momento-and-getting-an-authentication-token",level:3},{value:"Storing our authentication token in AWS Secrets Manager",id:"storing-our-authentication-token-in-aws-secrets-manager",level:3},{value:"Installing and configuring our Momento client",id:"installing-and-configuring-our-momento-client",level:3}],u={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuring-momento-in-serverless"},"Configuring Momento in Serverless"),(0,o.kt)("p",null,"In the previous step, we deployed a basic serverless application using AWS Lambda, API Gateway, and DynamoDB. With this, we implemented the basics of account management within our application."),(0,o.kt)("p",null,"In the next few steps, we're going to add caching to our serverless application using Momento. The account management service will be heavily relied upon by other services, so we want to make sure it is fast and reliable. Using a cache will reduce latency and the load on our primary database."),(0,o.kt)("p",null,"In this step, we will sign up for the Momento service and configure it for usage in our serverless application. As we do so, we will learn more key concepts about using Lambda correctly, including some subtle details about the runtime model that make a big difference in performance. For this step, we'll be using the ",(0,o.kt)("inlineCode",{parentName:"p"},"step-2")," branch in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/serverless-tutorial/tree/step-2"},"tutorial repository"),"."),(0,o.kt)("p",null,"If you want to skip the concepts and go directly to the implementation, navigate ahead to the section on ",(0,o.kt)("a",{parentName:"p",href:"#installing-and-configuring-momento-in-your-serverless-application"},"installing and configuring Momento in your serverless application"),"."),(0,o.kt)("h2",{id:"key-concepts-about-the-lambda-runtime-model"},"Key concepts about the Lambda runtime model"),(0,o.kt)("p",null,"Before we get to the implementation, we're going to examine two concepts that will help us understand how we're configuring Momento in our serverless applications. First, we'll take a look at the Lambda function lifecycle and the concept of cold starts. Then, we'll learn about how to reuse resources within Lambda despite its general statelessness."),(0,o.kt)("h3",{id:"lambda-lifecycle-and-cold-starts"},"Lambda lifecycle and cold starts"),(0,o.kt)("p",null,"To understand some of the choices we make in our code, we need to understand a bit more about how the Lambda lifecycle works."),(0,o.kt)("p",null,"As discussed in the previous step, AWS Lambda is event-driven, function-based compute. The first part, event-driven, means that your function is only executed in response to a configured event. There are a number of events you can configure for your Lambda function, from HTTP requests in API Gateway to queue messages in Amazon SQS to a batch of stream records in Amazon Kinesis. Upon the occurrence of your configured event, Lambda will invoke an instance of your code with details of the event. Your function instance will then handle the given event."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda event-driven compute",src:n(9941).Z,width:"1000",height:"796"})),(0,o.kt)("p",null,"When we say Lambda is ",(0,o.kt)("em",{parentName:"p"},"function-based compute"),", we're talking about how Lambda manages and executes your code. In creating a Lambda function, you upload a ZIP file or a container image that includes your code. You also specify an entrypoint handler for your function, which is an exported function in a specific file."),(0,o.kt)("p",null,"The interesting part is when these two elements combine. Lambda doesn't keep live instances of your function running by default. Rather, it dynamically creates them as needed."),(0,o.kt)("p",null,"For example, when you make a POST request to your /users path to create a new User, API Gateway will route the event to your createUser Lambda function to handle the request. The first time you make this request, there won't be a function instance available, so the Lambda service will create a new instance of your function by downloading your code, loading it into memory, and executing it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda cold start",src:n(7979).Z,width:"1030",height:"840"})),(0,o.kt)("p",null,"This process takes time -- there's the data transfer to actually download the code to an AWS-managed instance, plus the time to read your code from disk, resolve the dependencies, and load the objects into memory. This initial set up time is called a ",(0,o.kt)("em",{parentName:"p"},"cold start")," and can add anywhere from 30 milliseconds to a few seconds of latency to your function, depending on a variety of factors. Most optimized applications take less than a few hundred milliseconds for a cold start."),(0,o.kt)("p",null,"However, in order to enhance efficiency, the Lambda service doesn't create a new function instance for every event that triggers your function. Once a function instance has been created to respond to an event, the Lambda service keeps that function instance running and available for subsequent requests. If a new request comes in, the service will use this idle, running Lambda function instance rather than creating a new instance and waiting for the cold start."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda function instance reuse",src:n(8745).Z,width:"1030",height:"840"})),(0,o.kt)("p",null,"Note that each Lambda function instance will handle at most one event at any given time. Thus, if an event comes in while all existing Lambda function instances are busy handling other events, the Lambda service will spin up a new function instance to handle the event."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda function second instance",src:n(7360).Z,width:"1030",height:"840"})),(0,o.kt)("p",null,"There are a few key takeaways here. First, the Lambda service is dynamic -- it will create and destroy function instances according to the amount of traffic you have. If you get a burst of events triggering your Lambda function, the service will spin up multiple function instances to handle each request."),(0,o.kt)("p",null,'Second, the initial invocation for any particular Lambda function instance will take longer due to the initialization required. This includes downloading your function code, loading the code into memory, and starting the function instance. This additional latency on the initial request to a function instance is commonly called a "coldstart".'),(0,o.kt)("p",null,"Finally, a Lambda function instance can only handle a single event at a time, but the instance might handle multiple requests over a period of time. The Lambda service will keep running instances available after creation in order to rapidly serve subsequent requests. After a period of non-activity, the service may destroy running function instances."),(0,o.kt)("h3",{id:"service-code-and-object-reuse"},"Service code and object reuse"),(0,o.kt)("p",null,"In the previous step, we looked at the handler code for one of our Lambda functions. One thing we noted was that the handler code was pretty sparse -- it gathered the input to our function, and it returned an output in the expected shape, but most of the work was done via an AccountService class instance."),(0,o.kt)("p",null,"Let's take a look at our AccountService code now. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/accounts")," directory, there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"service.js")," file which contains our AccountService definition. The code should look as follows:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AccountService class",src:n(2873).Z,width:"1189",height:"646"})),(0,o.kt)("p",null,"The AccountService implementation is pretty straightforward. The AccountService is implemented as a class, which takes in a DynamoDB client in its constructor. It then has various methods, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getUser"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"createOrganization, getOrganization"),", that will be used to access and manipulate data across this domain. Nothing is too special about this -- in most senses, a serverless application is just like a normal application."),(0,o.kt)("p",null,"Navigate to the bottom of the ",(0,o.kt)("inlineCode",{parentName:"p"},"service.js")," file, where you will see the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"getAccountService method",src:n(895).Z,width:"956",height:"570"})),(0,o.kt)("p",null,"Notice that there is an exported ",(0,o.kt)("inlineCode",{parentName:"p"},"getAccountService")," function. Above the function, there is a global ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," variable that is initialized to ",(0,o.kt)("inlineCode",{parentName:"p"},"null"),". Within the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAccountService")," function, it returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," variable if it has been initialized. If not, it initializes an instance of the service, assigns it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"service")," variable for future use, and returns it to the caller."),(0,o.kt)("p",null,"Notice that within the getAccountService function, it is calling a ",(0,o.kt)("inlineCode",{parentName:"p"},"getDynamoDBClient")," function. If you look at the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/clients/dynamodb.js")," file for the details of that function, you can see a similar pattern as the AccountService instance, where we reuse a single instance of the client."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"getDynamoDBClient code",src:n(8139).Z,width:"567",height:"487"})),(0,o.kt)("p",null,"So, why are we centralizing client creation, and why are we creating a single instance of a client?"),(0,o.kt)("p",null,"Centralizing client creation is a pattern you might use regardless of your deployment environment, as it simplifies setting configuration values that are common across all users of your client. But using a single instance of our client is an optimization specific to AWS Lambda and its runtime model."),(0,o.kt)("p",null,"Remember the notes about the Lambda lifecycle in the section above. While a function instance can only handle a single request at a time, the same function instance might serve multiple requests over its lifetime."),(0,o.kt)("p",null,"While a Lambda function is generally stateless from request to request, you can take advantage of the reuse of a single Lambda function instance to improve performance of your application. When your Lambda function is invoked, everything within the handler function is new on each request. However, variables ",(0,o.kt)("em",{parentName:"p"},"outside")," the function, in the global variable scope, can be reused across requests."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Lambda global variable example",src:n(9164).Z,width:"1146",height:"531"})),(0,o.kt)("p",null,"In the image above, the variables within our handler are reset on each invocation to our Lambda function. However, the global ",(0,o.kt)("inlineCode",{parentName:"p"},"counter")," variable is persistent across invocations. We can use this strategically to reuse variables, particularly service clients."),(0,o.kt)("p",null,"When using a service that requires a network request, a large portion of the initial request time is in establishing a connection with the remote service. You have to open a socket, perform TCP handshake and maybe a TLS handshake before you can start sending and receiving data. This process takes time and is comparable to the 'coldstart' you face with your Lambda function."),(0,o.kt)("p",null,"Just like Lambda reuses function instances to amortize the cost of function initialization over many invocations, we want to reuse our client instance to amortize the cost of connection initialization. Thus, we create our service clients in a global variable space, allowing us to reuse the client and its corresponding connection, reducing latency in subsequent requests to our services."),(0,o.kt)("h2",{id:"installing-and-configuring-momento-in-your-serverless-application"},"Installing and configuring Momento in your serverless application"),(0,o.kt)("p",null,"With our concepts out of the way, let's get down to the details of configuring Momento for use in our serverless application. We'll go through three steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Signing up for Momento and getting an authentication token;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Storing our authentication token in AWS Secrets Manager;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Installing and configuring our Momento client."))),(0,o.kt)("h3",{id:"signing-up-for-momento-and-getting-an-authentication-token"},"Signing up for Momento and getting an authentication token"),(0,o.kt)("p",null,"The first step is to sign up for the Momento service and get our authentication token. The authentication token must be included on requests to the Momento service to authenticate and authorize our requests."),(0,o.kt)("p",null,"To get a Momento token, you first need to install the Momento CLI. You can do so with Homebrew using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew tap momentohq/tap\nbrew install momento-cli\n")),(0,o.kt)("p",null,"Then, provision a token with the ",(0,o.kt)("inlineCode",{parentName:"p"},"account signup")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"momento account signup --region us-west-2 --email your-email@example.com\n")),(0,o.kt)("p",null,"Be sure to use the region and email address you want to use for your Momento account. You will receive an email with your Momento access token."),(0,o.kt)("p",null,"Once you have your token, configure it in your CLI with the ",(0,o.kt)("inlineCode",{parentName:"p"},"momento configure")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ momento configure\nToken: // < Enter token from email here.\nDefault Cache [default-cache]: accounts-cache\nDefault Ttl Seconds [600]: 30\n")),(0,o.kt)("p",null,"Enter the token into the command, and use a cache named ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts-cache")," as your default cache."),(0,o.kt)("p",null,"For more on getting started with Momento, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"./../getting-started"},"getting started guide"),". You can also learn more about the Momento authentication token in the ",(0,o.kt)("a",{parentName:"p",href:"./../how-it-works/momento-concepts#authentication-token"},"Momento Concepts")," material."),(0,o.kt)("h3",{id:"storing-our-authentication-token-in-aws-secrets-manager"},"Storing our authentication token in AWS Secrets Manager"),(0,o.kt)("p",null,"Now that we have our Momento authentication token, we need to make it accessible to our serverless application."),(0,o.kt)("p",null,"If you look at our ",(0,o.kt)("inlineCode",{parentName:"p"},"serverless.yml")," file, we are able to inject environment variables into our function at runtime using the ",(0,o.kt)("inlineCode",{parentName:"p"},"environment")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," block. However, environment variables are not recommended for storing sensitive values like API keys and other secrets as they can easily be accessed by compromised third-party dependencies in our application."),(0,o.kt)("p",null,"Instead, we'll use AWS Secrets Manager. AWS Secrets Manager is a dedicated service for handling your secrets with fine-grained permissions and automated secret rotation. We can then retrieve the secret from our Lambda functions using the Secrets Manager API."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/secretsmanager/home"},"AWS Secrets Manager section of the AWS console"),". Make sure you are in the same region you used for your serverless application. Then, click the ",(0,o.kt)("strong",{parentName:"p"},"Store a new secret")," button to add a new secret to Secrets Manager."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"AWS Secrets Manager homepage",src:n(4719).Z,width:"1264",height:"520"})),(0,o.kt)("p",null,"This will open the Secrets Manager wizard for creating a new secret."),(0,o.kt)("p",null,"For the ",(0,o.kt)("strong",{parentName:"p"},"Secret type"),', select "',(0,o.kt)("strong",{parentName:"p"},"Other type of secret"),'". Then, enter "',(0,o.kt)("strong",{parentName:"p"},"MOMENTO_AUTH_TOKEN"),'" for your secret key and paste your authentication token as the secret value.'),(0,o.kt)("p",null,"You can keep the default encryption key. Click the ",(0,o.kt)("strong",{parentName:"p"},"Next")," button to continue the wizard."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Creating a secret in Secrets Manager",src:n(9101).Z,width:"819",height:"836"})),(0,o.kt)("p",null,"On the next screen, give your secret a ",(0,o.kt)("strong",{parentName:"p"},"Secret name"),' of "',(0,o.kt)("strong",{parentName:"p"},"accounts/MomentoAuthToken"),'" and enter a quick description of the secret. Then, click ',(0,o.kt)("strong",{parentName:"p"},"Next.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Store secret in Secrets Manager",src:n(4873).Z,width:"801",height:"945"})),(0,o.kt)("p",null,"The next screen handles secret rotation, which we will not set up here. Click ",(0,o.kt)("strong",{parentName:"p"},"Next")," to continue to the final screen."),(0,o.kt)("p",null,"On the final page, click the ",(0,o.kt)("strong",{parentName:"p"},"Store")," button to confirm storage of your secret."),(0,o.kt)("p",null,"You should now see your secret listed on the Secrets Manager page:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"List of secrets in Secret Manager",src:n(30).Z,width:"1005",height:"340"})),(0,o.kt)("p",null,"Now that we have stored our secret in AWS Secrets Manager, let's configure a Momento client in our serverless application."),(0,o.kt)("h3",{id:"installing-and-configuring-our-momento-client"},"Installing and configuring our Momento client"),(0,o.kt)("p",null,"The final part of this step is to install the Momento SDK and create a client to use in our application. You can make the edits to the application yourself, or you can see the final version for this step using the ",(0,o.kt)("inlineCode",{parentName:"p"},"step-2")," branch of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/momentohq/serverless-tutorial/tree/step-2"},"tutorial repository"),"."),(0,o.kt)("p",null,"Let's start by installing the Momento SDK. We're using Node.js for our application, so we can install the Momento SDK using npm:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install @gomomento/sdk\n")),(0,o.kt)("p",null,"Because we installed the package and added it to our ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file, the Serverless Framework will include it with our Node dependencies in the ZIP files for our Lambda functions."),(0,o.kt)("p",null,"Note: If you are using a language other than Node for your serverless application, the same basic approach applies. However, if you are using Python, be sure to compile the Python SDK for the Lambda environment as it includes a gRPC library with C extensions. You can find instructions on this in our guide for ",(0,o.kt)("a",{parentName:"p",href:"./../guides/caching-with-AWS-lambda#python"},"using Momento with AWS Lambda"),"."),(0,o.kt)("p",null,"With our SDK installed, we can now create and configure our client."),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/clients")," directory, create a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"momento.js")," with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const AWS = require("aws-sdk");\nconst { SimpleCacheClient } = require("@gomomento/sdk");\n\nMOMENTO_SECRET_ID = "accounts/MomentoAuthToken";\nMOMENTO_DEFAULT_TTL = 60;\n\nlet client = null;\n\nconst getMomentoClient = async () => {\n  if (client) return client;\n  const token = await getMomentoAuthToken();\n  client = new SimpleCacheClient(token, MOMENTO_DEFAULT_TTL);\n\n  return client;\n};\n\nconst getMomentoAuthToken = async () => {\n  const sm = new AWS.SecretsManager({\n    httpOptions: {\n      connectTimeout: 1000,\n      timeout: 1000,\n    },\n  });\n\n  const response = await sm\n    .getSecretValue({\n      SecretId: MOMENTO_SECRET_ID,\n    })\n    .promise();\n\n  return JSON.parse(response.SecretString).MOMENTO_AUTH_TOKEN;\n};\n\nmodule.exports = {\n  getMomentoClient,\n};\n')),(0,o.kt)("p",null,"You can see this follows a similar pattern as the DynamoDB client we reviewed earlier in this step. It creates an empty global variable, then hydrates that variable the first time the ",(0,o.kt)("inlineCode",{parentName:"p"},"getMomentoClient")," function is called. Subsequent uses of the Momento client for that function instance will reuse the same client and thus benefit from existing connections."),(0,o.kt)("p",null,"Notice that we're also calling out to AWS Secrets Manager to retrieve the Momento authentication token we stored. You could use the same client-reuse behavior for the Secrets Manager client that we use for the DynamoDB and Momento clients. However, because the Secrets Manager service will only be called once per function instance -- to help initialize the Momento client -- we can skip it in this case."),(0,o.kt)("p",null,"Now that we have added a way to create and retrieve our Momento cache client, let's add the cache client to our AccountService class. We'll inject a Momento cache client into our instance upon construction so that it can be used when needed by the class."),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file. Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"constructor")," method for your ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountService")," class so that it looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"class AccountService {\n  constructor(dynamoDBClient, cacheClient) {\n    this._dynamoDBClient = dynamoDBClient;\n    this._cacheClient = cacheClient;\n  }\n")),(0,o.kt)("p",null,"Additionally, we want to update our helper function to create and reuse the AccountService instance. Navigate to the bottom of the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file. Update the ",(0,o.kt)("inlineCode",{parentName:"p"},"getAccountService")," function so it looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"module.exports.getAccountService = async (props) => {\n  if (service) return service;\n\n  let dynamoDBClient = (props || {}).dynamoDBClient;\n  if (!dynamoDBClient) {\n    dynamoDBClient = getDynamoDBClient();\n  }\n\n  let cacheClient = (props || {}).cacheClient;\n  if (!cacheClient) {\n    cacheClient = await getMomentoClient();\n  }\n\n  service = new AccountService(dynamoDBClient, cacheClient);\n\n  return service;\n};\n")),(0,o.kt)("p",null,"Notice that the function is injecting a cache client instance into our AccountService instance to satisfy the constructor. The caller of the getAccountService function can provide their own cache client, which can help with testing, but the default behavior is to fetch our reused cache instance with the ",(0,o.kt)("inlineCode",{parentName:"p"},"getMomentoClient")," function we just implemented."),(0,o.kt)("p",null,"You'll need to import this function into our service module, so add the following import to the top of the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/accounts/service.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'const { getMomentoClient } = require("../clients/momento");\n')),(0,o.kt)("p",null,"Further, ",(0,o.kt)("inlineCode",{parentName:"p"},"getAccountService()")," is now an async function, as the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"getMomentoClient")," is async given that we may need to make a call to AWS Secrets Manager. In each of your handler functions, make sure you update them to ",(0,o.kt)("inlineCode",{parentName:"p"},"await")," the call to ",(0,o.kt)("inlineCode",{parentName:"p"},"getAccountService()"),"."),(0,o.kt)("p",null,"Below is an example from the ",(0,o.kt)("inlineCode",{parentName:"p"},"createUser")," handler:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const handler = async (event, context) => {\n  const { username, firstName, lastName } = JSON.parse(event.body);\n\n  const accountService = await getAccountService();\n\n  const user = await accountService.createUser({\n    username,\n    firstName,\n    lastName,\n  });\n\n  ...\n}\n")),(0,o.kt)("p",null,"Finally, we need to make some small updates to our ",(0,o.kt)("inlineCode",{parentName:"p"},"serverless.yml")," file. Our Lambda functions will be calling a new AWS service as part of our changes and thus will need updated IAM permissions that grant our functions the ability to do so."),(0,o.kt)("p",null,"First, find your secret in the ",(0,o.kt)("a",{parentName:"p",href:"https://console.aws.amazon.com/secretsmanager/home"},"AWS Secrets Manager console"),". Copy the ",(0,o.kt)("strong",{parentName:"p"},"Secret ARN")," value for your secret."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Secrets Manager ARN",src:n(4004).Z,width:"1208",height:"422"})),(0,o.kt)("p",null,"In your ",(0,o.kt)("inlineCode",{parentName:"p"},"serverless.yml")," file, there is an ",(0,o.kt)("inlineCode",{parentName:"p"},"iam")," section within the ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," block. Add a new IAM statement so that your iam section looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  iam:\n    role:\n      statements:\n        - Effect: 'Allow'\n          Action:\n            - 'dynamodb:GetItem'\n            - 'dynamodb:PutItem'\n            - 'dynamodb:ConditionCheckItem'\n          Resource: !GetAtt 'DynamoDBTable.Arn'\n        - Effect: \"Allow\"\n          Action:\n            - \"secretsmanager:GetSecretValue\"\n          Resource: \"<yourSecretArn>\"\n")),(0,o.kt)("p",null,'Be sure to replace "',"<",'yourSecretArn>" with the Secret ARN that you copied from the AWS console.'),(0,o.kt)("p",null,"We also want to tell our application the name of the cache we created in Momento. Because this is not a sensitive value, we can inject it as an environment variable."),(0,o.kt)("p",null,"In the environment section within the provider block, update your application secrets to include the cache name as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  environment:\n    TABLE_NAME: !Ref DynamoDBTable\n    CACHE_NAME: 'accounts-cache'\n    AWS_NODEJS_CONNECTION_REUSE_ENABLED: 1\n")),(0,o.kt)("p",null,"Our Momento client can use this environment variable to interact with the correct cache in our Momento account."),(0,o.kt)("p",null,"That's it! You have now installed and configured a Momento client in your serverless application."),(0,o.kt)("p",null,"In the next step of this tutorial, we'll see how to use our client by implementing a read-aside caching strategy in our application."))}p.isMDXComponent=!0},2873:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/account_service-8934c22bc81b617cc8407dedea06a0f2.png"},9101:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create_secret-bcc6b30645e7f1ec290d37ef993ee000.png"},895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_account_service-a45fc0a0b2a1c4df322d60256f35a0c7.png"},8139:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get_dynamodb_client-0ba029a429b6f10a4f3d6a1362eae017.png"},7979:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lambda_cold_start-1f33e835c4a6d719c023de9b17e5f316.png"},9941:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lambda_event_driven-07e15488d31f8ce8c63b3e0de019b68b.png"},9164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lambda_global_variable-64a53bfa7276d361ffa1b1ab6ccb5247.png"},8745:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lambda_instance_reuse-669c1d5b18f9e77d457c6f89835a89e0.png"},7360:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lambda_second_instance-3d30b6abc5c383cb79f857c5f4b951b2.png"},4004:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/secret_arn-16c1810a679febbefdc944dfe197e574.png"},30:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/secrets_list-3d0a3f9b353a836caa09030b12378906.png"},4719:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/secrets_manager-6f608f64698de5d0a50763c2ef301141.png"},4873:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/store_secret-8c1c03f2ef614f100acbcb086af4b919.png"}}]);