"use strict";(self.webpackChunkdocs_opslyft_com=self.webpackChunkdocs_opslyft_com||[]).push([[941],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(f,s(s({ref:t},u),{},{components:n})):o.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=n(7462),a=(n(7294),n(4137));const r={sidebar_position:5},s="Asset Management",i={unversionedId:"features/asset-management",id:"features/asset-management",title:"Asset Management",description:"In this section, we will walk you through the effective methods for viewing and managing your cloud resources. This guide offers a comprehensive overview of how to access and leverage the Cloud Asset Management feature, enabling you to optimize resource utilization and streamline your cloud infrastructure.",source:"@site/docs/features/asset-management.md",sourceDirName:"features",slug:"/features/asset-management",permalink:"/docs.opslyft.com/features/asset-management",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Instance Scheduler",permalink:"/docs.opslyft.com/features/cost-optimization-guide/instance-scheduler"},next:{title:"Reporting & Alerting",permalink:"/docs.opslyft.com/features/reporting-&-alerting"}},l={},c=[{value:"Some example use cases of Asset Management include:",id:"some-example-use-cases-of-asset-management-include",level:2},{value:"Accessing the Cloud Asset Management Panel",id:"accessing-the-cloud-asset-management-panel",level:2},{value:"Customizable Column View",id:"customizable-column-view",level:2},{value:"Exporting Data to Excel Sheets",id:"exporting-data-to-excel-sheets",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"asset-management"},"Asset Management"),(0,a.kt)("p",null,"In this section, we will walk you through the effective methods for viewing and managing your cloud resources. This guide offers a comprehensive overview of how to access and leverage the Cloud Asset Management feature, enabling you to optimize resource utilization and streamline your cloud infrastructure."),(0,a.kt)("h2",{id:"some-example-use-cases-of-asset-management-include"},"Some example use cases of Asset Management include:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Resource Identification by IP Address"),": Easily locate and identify resources based on their IP addresses for troubleshooting or auditing purposes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Counting Resources by Instance Type:")," Determine the number of resources with specific instance types, which can be valuable when applying for discount programs or optimizing your instance fleet.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Misconfiguration Detection:")," Identify misconfigurations within your clusters and resource settings, allowing you to proactively address issues that could impact performance or security."))),(0,a.kt)("p",null,"Please note that at present, our Asset Management feature is compatible exclusively with AWS cloud services."),(0,a.kt)("h2",{id:"accessing-the-cloud-asset-management-panel"},"Accessing the Cloud Asset Management Panel"),(0,a.kt)("p",null,"When you access the Cloud Asset Management panel, you will find an array of tools to effortlessly oversee your cloud resources. The top panel offers an informative overview of key metrics, including:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Total number of running resources"),(0,a.kt)("li",{parentName:"ul"},"Distribution of resources across account regions"),(0,a.kt)("li",{parentName:"ul"},"Current operational state of your resources"),(0,a.kt)("li",{parentName:"ul"},"Resource Categorization and Exploration")),(0,a.kt)("p",null,'The central element of the panel is a comprehensive table that categorizes your resources into distinct types. By clicking on a specific resource type, such as "EC2 Instances," you gain access to detailed insights and information.'),(0,a.kt)("p",null,'For instance, selecting the "EC2 Instances" resource type will lead you to a dedicated page showcasing:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The total count of EC2 instances (e.g., 4633 instances)"),(0,a.kt)("li",{parentName:"ul"},"Relevant details specific to each instance"),(0,a.kt)("li",{parentName:"ul"},"Distribution of instances across account regions"),(0,a.kt)("li",{parentName:"ul"},"Pagination options enable seamless navigation through the complete list of instances, ensuring you can effortlessly review your resources.")),(0,a.kt)("h2",{id:"customizable-column-view"},"Customizable Column View"),(0,a.kt)("p",null,"The information displayed for each resource is customizable to your preference. All pertinent columns are available for display, and you have the flexibility to show or hide specific columns to tailor the view to your needs. This empowers you to focus on the information that matters most to your cloud management tasks."),(0,a.kt)("h2",{id:"exporting-data-to-excel-sheets"},"Exporting Data to Excel Sheets"),(0,a.kt)("p",null,"The export feature in the Cloud Asset Management tool allows users to easily obtain asset data in an Excel sheet for further analysis."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Exporting Data",src:n(9990).Z,width:"1907",height:"921"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Choose the "Export Data" option to initiate the export process.'),(0,a.kt)("li",{parentName:"ol"},"Customize the export by adding relevant filters, such as tag keys."),(0,a.kt)("li",{parentName:"ol"},"Select the columns you wish to include in the export for each resource type."),(0,a.kt)("li",{parentName:"ol"},"Easily configure your exported data to match your reporting requirements."),(0,a.kt)("li",{parentName:"ol"},'Upon configuration, click the "Export" button located at the bottom right corner.')),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In brief, Asset Management offers practical tools for AWS cloud resource management. The dashboard provides key metrics and resource categorization. Customizable views and data export options enhance cloud resource optimization."))}m.isMDXComponent=!0},9990:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/exporting-data-e142624f8d9d174f592d729df0780123.png"}}]);