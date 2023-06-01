"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[6449],{3043:(e,t,r)=>{r(7294)},7235:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(814),s=r(7294);const o=e=>{let{language:t,code:r}=e;return s.createElement(n.Z,{language:t},r)}},3246:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=r(7462),s=(r(7294),r(3905)),o=(r(3043),r(7235));const a={sidebar_position:1,sidebar_label:"Observability",sidebar_class_name:"sidebar-item-nodejs",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces"},i="Observability with Momento in Node.js",d={unversionedId:"develop/sdks/nodejs/observability",id:"develop/sdks/nodejs/observability",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces",source:"@site/docs/develop/sdks/nodejs/observability.mdx",sourceDirName:"develop/sdks/nodejs",slug:"/develop/sdks/nodejs/observability",permalink:"/develop/sdks/nodejs/observability",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/develop/sdks/nodejs/observability.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Observability",sidebar_class_name:"sidebar-item-nodejs",title:"Observability for TypeScript and Node.js",description:"Instrument your Momento-enabled Node.js code with Logs, Metrics, and Traces"},sidebar:"tutorialSidebar",previous:{title:"Cheat Sheet",permalink:"/develop/sdks/nodejs/cheat-sheet"},next:{title:"JS Web SDK",permalink:"/develop/sdks/web/"}},l={},c=[{value:"Metrics",id:"metrics",level:2},{value:"Traces",id:"traces",level:2}],m={toc:c};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"observability-with-momento-in-nodejs"},"Observability with Momento in Node.js"),(0,s.kt)("h2",{id:"metrics"},"Metrics"),(0,s.kt)("p",null,"Metrics are measurements that provide quantitative information about system performance and behavior. They are numerical values captured and recorded over regular intervals, providing statistical data to aid in understanding the trends and patterns in a system."),(0,s.kt)("p",null,"For Momento specifically, you might desire to capture metrics on the number of requests made, their duration, request or response size, or failure rates. Capture these in the Node.js SDK using a middleware, which intercepts the Momento gRPC calls and responses. Here is an example that uses OpenTelemetry and Prometheus to capture request count faceted by request type:"),(0,s.kt)("p",null,"First, set up metrics in your application:"),(0,s.kt)(o.Z,{language:"javascript",code:"const resource = Resource.default();\n\nconst metricsExporter = new PrometheusExporter({}, () => {\n  console.log('prometheus scrape endpoint: http://localhost:9464/metrics');\n});\n\nconst meterProvider = new MeterProvider({\n  resource: resource,\n});\n\nmeterProvider.addMetricReader(metricsExporter);\n\nmetrics.setGlobalMeterProvider(meterProvider);",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("p",null,"Then, create a middleware that captures the metric:"),(0,s.kt)(o.Z,{language:"javascript",code:"import {Metadata, StatusObject} from '@grpc/grpc-js';\nimport {Middleware, MiddlewareRequestHandler} from '@gomomento/sdk';\nimport {metrics} from '@opentelemetry/api';\nimport {Counter} from '@opentelemetry/api/build/src/metrics/Metric';\nimport {Message} from 'google-protobuf';\n\nclass ExampleMetricMiddlewareRequestHandler implements MiddlewareRequestHandler {\n  private requestCounter: Counter;\n  constructor(requestCounter: Counter) {\n    this.requestCounter = requestCounter;\n  }\n  onRequestMetadata(metadata: Metadata): Promise<Metadata> {\n    return Promise.resolve(metadata);\n  }\n\n  onRequestBody(request: Message): Promise<Message> {\n    const requestType = request.constructor.name;\n    this.requestCounter.add(1, {'request.type': requestType});\n    return Promise.resolve(request);\n  }\n\n  onResponseMetadata(metadata: Metadata): Promise<Metadata> {\n    return Promise.resolve(metadata);\n  }\n\n  onResponseBody(response: Message | null): Promise<Message | null> {\n    return Promise.resolve(response);\n  }\n\n  onResponseStatus(status: StatusObject): Promise<StatusObject> {\n    return Promise.resolve(status);\n  }\n}\n\n/**\n * Basic middleware implementation that captures a request count metric. See experimental-metrics-csv-middleware.ts for\n * more comprehensive metrics, although be aware that that class is meant for troubleshooting and will eat disk space quickly.\n */\nexport class ExampleMetricMiddleware implements Middleware {\n  private readonly requestCounter: Counter;\n  constructor() {\n    const meter = metrics.getMeter('metric-middleware-meter');\n\n    this.requestCounter = meter.createCounter('momento_requests_counter', {\n      description: 'Momento GRPC requests',\n    });\n  }\n\n  onNewRequest(): MiddlewareRequestHandler {\n    return new ExampleMetricMiddlewareRequestHandler(this.requestCounter);\n  }\n}\n",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("p",null,"When you create the Momento ",(0,s.kt)("inlineCode",{parentName:"p"},"CacheClient"),", add the middleware and the metric will be incremented with each request:"),(0,s.kt)(o.Z,{language:"javascript",code:"new CacheClient({\n  configuration: Configurations.Laptop.v1().addMiddleware(new ExampleMetricMiddleware()),\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_AUTH_TOKEN',\n  }),\n  defaultTtlSeconds: 60,\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("p",null,"Here is an example of the Prometheus UI displaying the ",(0,s.kt)("inlineCode",{parentName:"p"},"momento_requests_counter")," metric for two calls, a get and a set:\n",(0,s.kt)("img",{alt:"image",src:r(2078).Z,width:"2504",height:"806"})),(0,s.kt)("h2",{id:"traces"},"Traces"),(0,s.kt)("p",null,"Traces provide a detailed timeline of processes within an application, showing the relationship between different components and services involved in a specific request or operation. They allow developers to analyze the sequence and duration of these operations, facilitating a better understanding of how data flows through the system."),(0,s.kt)("p",null,"The Momento Node.js SDK uses gRPC internally to communicate with the Momento servers. OpenTelemetry provides a capability for auto-instrumenting all gRPC calls with traces. You don't need to add any middleware code to produce these traces, like you do for the metrics. Here is an example that automatically generates traces for these calls and exports them to Zipkin:"),(0,s.kt)(o.Z,{language:"javascript",code:"const resource = Resource.default();\n\nconst provider = new NodeTracerProvider({\n  resource: resource,\n});\n\nconst exporter = new ZipkinExporter();\n\nprovider.addSpanProcessor(new SimpleSpanProcessor(exporter));\nprovider.register();\n\nregisterInstrumentations({\n  instrumentations: [new GrpcInstrumentation()],\n});",mdxType:"SdkExampleCodeBlockImpl"}),(0,s.kt)("p",null,"This needs to run before any Momento code."),(0,s.kt)("p",null,"Here is an example of the Zipkin UI displaying traces for a cache creation, a get, and a set:\n",(0,s.kt)("img",{alt:"image",src:r(3847).Z,width:"2500",height:"850"})),(0,s.kt)("p",null,"If the performance of your application is impacted by trace generation, you should consider sampling them to cut down on the number of traces generated. You can do this with OpenTelemetry by setting two environment variables:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cli"},'export OTEL_TRACES_SAMPLER="traceidratio"\nexport OTEL_TRACES_SAMPLER_ARG="0.1"\n')),(0,s.kt)("p",null,"Setting these will ensure that only 10% of traces are created."))}p.isMDXComponent=!0},2078:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/prometheus_screenshot-71e3529c0ae7ac17d03e613f9673a8ea.png"},3847:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/zipkin_screenshot-a7215ab6d563ef7b97e5b3dbe46e9731.png"}}]);