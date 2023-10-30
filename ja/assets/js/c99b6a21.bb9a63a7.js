"use strict";(self.webpackChunkmomento_docs=self.webpackChunkmomento_docs||[]).push([[5847],{5162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>N});var r=n(7462),a=n(7294),l=n(6010),i=n(2466),s=n(6550),o=n(1980),c=n(7392),u=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=p(e),[i,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[o,c]=h({queryString:n,groupId:r}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),x=(()=>{const e=o??d;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{x&&s(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),k(e)}),[c,k,l]),tabValues:l}}var x=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:s,selectValue:o,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=c[n].value;r!==s&&(d(t),o(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},c.map((e=>{let{value:t,label:n,attributes:i}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":s===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function f(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",g.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function N(e){const t=(0,x.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},3404:(e,t,n)=>{n(7294)},9720:(e,t,n)=>{n.d(t,{X:()=>s});var r=n(4866),a=n(5162),l=n(614),i=n(7294);const s=e=>{let{js:t,python:n,java:s,go:o,csharp:c,php:u,rust:d,ruby:p,elixir:m,cli:h}=e;return t||n||s||o||c||u||d||p||m||h?i.createElement(r.Z,null,t&&i.createElement(a.Z,{value:"js",label:"JavaScript"},i.createElement(l.Z,{language:"js"},t)),n&&i.createElement(a.Z,{value:"python",label:"Python"},i.createElement(l.Z,{language:"python"},n)),s&&i.createElement(a.Z,{value:"java",label:"Java"},i.createElement(l.Z,{language:"java"},s)),o&&i.createElement(a.Z,{value:"go",label:"Go"},i.createElement(l.Z,{language:"go"},o)),c&&i.createElement(a.Z,{value:"csharp",label:"C#"},i.createElement(l.Z,{language:"csharp"},c)),u&&i.createElement(a.Z,{value:"php",label:"PHP"},i.createElement(l.Z,{language:"php"},u)),d&&i.createElement(a.Z,{value:"rust",label:"Rust"},i.createElement(l.Z,{language:"rust"},d)),p&&i.createElement(a.Z,{value:"ruby",label:"Ruby"},i.createElement(l.Z,{language:"ruby"},p)),m&&i.createElement(a.Z,{value:"elixir",label:"Elixir"},i.createElement(l.Z,{language:"elixir"},m)),h&&i.createElement(a.Z,{value:"cli",label:"CLI"},i.createElement(l.Z,{language:"cli"},h))):null}},1828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),l=(n(3404),n(9720));const i={sidebar_position:1,pagination_prev:null,sidebar_label:"API Reference",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API."},s="Momento Vector Index API \u306e\u4f7f\u7528",o={unversionedId:"vector-index/develop/api-reference/index",id:"vector-index/develop/api-reference/index",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API.",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/vector-index/develop/api-reference/index.md",sourceDirName:"vector-index/develop/api-reference",slug:"/vector-index/develop/api-reference/",permalink:"/ja/vector-index/develop/api-reference/",draft:!1,editUrl:"https://github.com/momentohq/public-dev-docs/tree/main/docs/vector-index/develop/api-reference/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,pagination_prev:null,sidebar_label:"API Reference",title:"MVI API reference",description:"Learn how to interact programmatically with Momento Vector Index API."},sidebar:"vectorSidebar",next:{title:"Auth",permalink:"/ja/vector-index/develop/api-reference/auth"}},c={},u=[{value:"Vector Index Client",id:"vector-index-client",level:2},{value:"Vector Index methods",id:"vector-index-methods",level:2},{value:"Create Index",id:"create-index",level:3},{value:"Delete Index",id:"delete-index",level:3},{value:"List Indexes",id:"list-indexes",level:3},{value:"Upsert Item Batch",id:"upsert-item-batch",level:3},{value:"Search",id:"search",level:3},{value:"Delete Item Batch",id:"delete-item-batch",level:3}],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"momento-vector-index-api-\u306e\u4f7f\u7528"},"Momento Vector Index API \u306e\u4f7f\u7528"),(0,a.kt)("p",null,"Momento Vector Index (MVI) \u306f\u3001AI \u3092\u6d3b\u7528\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u4f7f\u7528\u3059\u308b\u30d9\u30af\u30c8\u30eb\u30c7\u30fc\u30bf\u306e\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u306e\u4fdd\u5b58\u3068\u53d6\u5f97\u306e\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305f\u3001\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u3067\u958b\u767a\u8005\u306b\u512a\u3057\u3044Vector Index\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002"),(0,a.kt)("h2",{id:"vector-index-client"},"Vector Index Client"),(0,a.kt)("p",null,"Momento Vector Index \u3092\u64cd\u4f5c\u3059\u308b\u306b\u306f\u3001VectorIndexClient \u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,a.kt)(l.X,{js:"new PreviewVectorIndexClient({\n  credentialProvider: CredentialProvider.fromEnvironmentVariable({\n    environmentVariableName: 'MOMENTO_API_KEY',\n  }),\n  configuration: VectorIndexConfigurations.Laptop.latest(),\n});",python:'PreviewVectorIndexClientAsync(\n    VectorIndexConfigurations.Default.latest(), CredentialProvider.from_environment_variable("MOMENTO_API_KEY")\n)\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h2",{id:"vector-index-methods"},"Vector Index methods"),(0,a.kt)("h3",{id:"create-index"},"Create Index"),(0,a.kt)("p",null,"vector index\u3092\u4f5c\u6210"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30d9\u30af\u30bf\u30fc\u306e\u540d\u524d index.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"numDimensions"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30d9\u30af\u30c8\u30eb\u3054\u3068\u306e\u6b21\u5143\u6570")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"similarityMetric"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30d9\u30af\u30c8\u30eb\u9593\u306e\u8ddd\u96e2\u3092\u5b9a\u91cf\u5316\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30e1\u30c8\u30ea\u30c3\u30af\u3067\u3059\u3002 \u30b3\u30b5\u30a4\u30f3\u985e\u4f3c\u5ea6\u3001\u5185\u7a4d\u3001\u307e\u305f\u306f\u30e6\u30fc\u30af\u30ea\u30c3\u30c9\u985e\u4f3c\u5ea6\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002 \u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u30b3\u30b5\u30a4\u30f3\u985e\u4f3c\u5ea6\u3067\u3059\u3002")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"AlreadyExists"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(l.X,{js:"const result = await vectorClient.createIndex('test-index', 2);\nif (result instanceof CreateVectorIndex.Success) {\n  console.log(\"Index 'test-index' created\");\n} else if (result instanceof CreateVectorIndex.AlreadyExists) {\n  console.log(\"Index 'test-index' already exists\");\n} else if (result instanceof CreateVectorIndex.Error) {\n  throw new Error(\n    `An error occurred while attempting to create index 'test-index': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await vector_client.create_index("test-index", 2)\nmatch response:\n    case CreateIndex.Success():\n        print("Index \'test-index\' created")\n    case CreateIndex.IndexAlreadyExists():\n        print("Index \'test-index\' already exists")\n    case CreateIndex.Error() as error:\n        print(f"Error creating index \'test-index\': {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"delete-index"},"Delete Index"),(0,a.kt)("p",null,"vector index\u306e\u524a\u9664"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"vector index\u306e\u540d\u524d")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(l.X,{js:"const result = await vectorClient.deleteIndex('test-index');\nif (result instanceof DeleteVectorIndex.Success) {\n  console.log(\"Index 'test-index' deleted\");\n} else if (result instanceof DeleteVectorIndex.Error) {\n  throw new Error(\n    `An error occurred while attempting to delete index 'test-index': ${result.errorCode()}: ${result.toString()}`\n  );\n}",python:'response = await vector_client.delete_index("test-index")\nmatch response:\n    case DeleteIndex.Success():\n        print("Index \'test-index\' deleted")\n    case DeleteIndex.Error() as error:\n        print(f"Error deleting index \'test-index\': {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"list-indexes"},"List Indexes"),(0,a.kt)("p",null,"\u5168\u3066\u306evector index\u306e\u30ea\u30b9\u30c8."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"getIndexNames(): string[]"))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(l.X,{js:"const result = await vectorClient.listIndexes();\nif (result instanceof ListVectorIndexes.Success) {\n  console.log(`Indexes:\\n${result.getIndexNames().join('\\n')}\\n\\n`);\n} else if (result instanceof ListVectorIndexes.Error) {\n  throw new Error(`An error occurred while attempting to list caches: ${result.errorCode()}: ${result.toString()}`);\n}",python:'response = await vector_client.list_indexes()\nmatch response:\n    case ListIndexes.Success() as success:\n        print(f"Indexes:\\n{success.index_names}")\n    case CreateIndex.Error() as error:\n        print(f"Error listing indexes: {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"upsert-item-batch"},"Upsert Item Batch"),(0,a.kt)("p",null,"vector index\u306b\u30a2\u30a4\u30c6\u30e0\u3092\u4e00\u62ec\u633f\u5165\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"vector index\u306e\u540d\u524d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"items"),(0,a.kt)("td",{parentName:"tr",align:null},"VectorIndexItem"),(0,a.kt)("td",{parentName:"tr",align:null},"\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u306bUpsert\u3059\u308b\u9805\u76ee\u3002")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(l.X,{js:"const result = await vectorClient.upsertItemBatch('test-index', [\n  {\n    id: 'example_item_1',\n    vector: [1.0, 2.0],\n    metadata: {key1: 'value1'},\n  },\n  {\n    id: 'example_item_2',\n    vector: [3.0, 4.0],\n    metadata: {key2: 'value2'},\n  },\n]);\nif (result instanceof VectorUpsertItemBatch.Success) {\n  console.log('Successfully added items');\n} else if (result instanceof VectorUpsertItemBatch.Error) {\n  throw new Error(`An error occurred while adding items to index: ${result.errorCode()}: ${result.toString()}`);\n}",python:'response = await vector_client.upsert_item_batch(\'test-index\', [\n    Item(id="example_item_1", vector=[1.0, 2.0], metadata={"key1": "value1"}),\n    Item(id="example_item_2", vector=[3.0, 4.0], metadata={"key2": "value2"}),\n])\nmatch response:\n    case UpsertItemBatch.Success():\n        print("Successfully added items to index \'test-index\'")\n    case UpsertItemBatch.Error() as error:\n        print(f"Error adding items to index \'test-index\': {error.message}")\n\n',java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"search"},"Search"),(0,a.kt)("p",null,"vector index\u304b\u3089\u30a2\u30a4\u30c6\u30e0\u3092\u4e00\u62ec\u691c\u7d22\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"vector index\u306e\u540d\u524d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryVector"),(0,a.kt)("td",{parentName:"tr",align:null},"number[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u691c\u7d22\u3059\u308b\u30d9\u30af\u30c8\u30eb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"topK"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8fd4\u3059\u7d50\u679c\u306e\u6570\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f10\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"metadataFields"),(0,a.kt)("td",{parentName:"tr",align:null},"String[] or ALL_VECTOR_METADATA"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5404\u7d50\u679c\u3068\u3068\u3082\u306b\u8fd4\u3059\u30e1\u30bf\u30c7\u30fc\u30bf\u30d5\u30a3\u30fc\u30eb\u30c9\u306e\u30ea\u30b9\u30c8\u3001\u307e\u305f\u306f\u3059\u3079\u3066\u306e\u30e1\u30bf\u30c7\u30fc\u30bf\u3092\u8fd4\u3059\u3053\u3068\u3092\u793a\u3059\u5024\u3002\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u306f\u3001\u30e1\u30bf\u30c7\u30fc\u30bf\u306f\u8fd4\u3055\u308c\u307e\u305b\u3093\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f None\u3000")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"hits(): SearchHit[]",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SearchHit: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"id(): string"),(0,a.kt)("li",{parentName:"ul"},"distance(): number"),(0,a.kt)("li",{parentName:"ul"},"metadata(): Map<string, string>"))))))),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(l.X,{js:"const result = await vectorClient.search('test-index', [1.0, 2.0], {topK: 3, metadataFields: ALL_VECTOR_METADATA});\nif (result instanceof VectorSearch.Success) {\n  console.log(`Found ${result.hits().length} matches`);\n} else if (result instanceof VectorSearch.Error) {\n  throw new Error(`An error occurred searching index test-index: ${result.errorCode()}: ${result.toString()}`);\n}",python:"response = await vector_client.search('test-index', [1.0, 2.0], top_k=3, metadata_fields=ALL_METADATA)\nmatch response:\n    case Search.Success() as success:\n        print(f\"Found {len(success.hits)} matches\")\n    case Search.Error() as error:\n        print(f\"Error searching index 'test-index': {error.message}\")\n\n",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}),(0,a.kt)("h3",{id:"delete-item-batch"},"Delete Item Batch"),(0,a.kt)("p",null,"vector index\u304b\u3089\u9805\u76ee\u3092\u4e00\u62ec\u524a\u9664\u3057\u307e\u3059\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"indexName"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"vector index\u306e\u540d\u524d")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"items"),(0,a.kt)("td",{parentName:"tr",align:null},"String[]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u524a\u9664\u3059\u308b\u9805\u76ee\u306eID")))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Method response object"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Success"),(0,a.kt)("li",{parentName:"ul"},"Error")),(0,a.kt)("p",null,"\u5177\u4f53\u7684\u306a\u60c5\u5831\u306b\u3064\u3044\u3066\u306f\u3001",(0,a.kt)("a",{parentName:"p",href:"/ja/vector-index/develop/api-reference/response-objects"},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")," \u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002")),(0,a.kt)(l.X,{js:"const result = await vectorClient.deleteItemBatch('test-index', ['example_item_1', 'example_item_2']);\nif (result instanceof VectorUpsertItemBatch.Success) {\n  console.log('Successfully deleted items');\n} else if (result instanceof VectorUpsertItemBatch.Error) {\n  throw new Error(`An error occurred while deleting items: ${result.errorCode()}: ${result.toString()}`);\n}",python:"response = await vector_client.delete_item_batch('test-index', ['example_item_1', 'example_item_2'])\nmatch response:\n    case DeleteItemBatch.Success():\n        print(\"Successfully deleted items from index 'test-index'\")\n    case DeleteItemBatch.Error() as error:\n        print(f\"Error deleting items from index 'test-index': {error.message}\")\n\n",java:"",go:"",csharp:"",php:"",rust:"",ruby:"",elixir:"",cli:"",mdxType:"SdkExampleTabsImpl"}))}m.isMDXComponent=!0}}]);