"use strict";(self.webpackChunkdocs_opslyft_com=self.webpackChunkdocs_opslyft_com||[]).push([[856],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9828:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={sidebar_position:6},i="Reporting & Alerting",s={unversionedId:"features/reporting-&-alerting",id:"features/reporting-&-alerting",title:"Reporting & Alerting",description:"The Reports & Alerting feature not only provides you with timely alerts and notifications via email or Slack but also offers a range of insightful reports. For instance, you can receive cost reports that categorize data by service, linked account, region, instance type, or usage type, all customizable with various filters to suit your specific needs.",source:"@site/docs/features/reporting-&-alerting.md",sourceDirName:"features",slug:"/features/reporting-&-alerting",permalink:"/features/reporting-&-alerting",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Asset Management",permalink:"/features/asset-management"},next:{title:"Budget Management",permalink:"/features/budget-management"}},l={},c=[{value:"Accessing Reports History:",id:"accessing-reports-history",level:2},{value:"Creating a New Report",id:"creating-a-new-report",level:2},{value:"Managing Reports",id:"managing-reports",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reporting--alerting"},"Reporting & Alerting"),(0,a.kt)("p",null,"The Reports & Alerting feature not only provides you with timely alerts and notifications via email or Slack but also offers a range of insightful reports. For instance, you can receive cost reports that categorize data by service, linked account, region, instance type, or usage type, all customizable with various filters to suit your specific needs."),(0,a.kt)("h2",{id:"accessing-reports-history"},"Accessing Reports History:"),(0,a.kt)("p",null,'Upon entering this section, you\'ll encounter the "Reports History." Here, reports are systematically organized in a tabular format, presenting essential details such as Report Name, dispatch date, associated cloud provider, and recipients for email and Slack notifications. To enhance your search experience, you can utilize the search bar for keywords, apply various filters, or sort reports by specific time intervals, such as the last 7 days or the previous month.'),(0,a.kt)("h2",{id:"creating-a-new-report"},"Creating a New Report"),(0,a.kt)("p",null,'To initiate a new report, simply click the "+Create New Report" button located in the upper right corner of the page. This action initiates a two-step process:'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Creating a New Report",src:r(7455).Z,width:"841",height:"562"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Entering Basic Details:")," Begin by selecting your cloud provider and the primary metric for data grouping. Apply relevant filters for Service, Linked Account, Instance Type, Region, and Usage Type. Specify the report's frequency and assign a suitable name.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Selecting Recipients:"),' In this step, designate recipients and choose the preferred method of receiving alerts (email or Slack). For email notifications, provide valid email addresses, and for Slack notifications, specify the appropriate Slack user and channel names. If necessary, you can select both notification methods. Finally, click the "Create" button to generate your report.'))),(0,a.kt)("h2",{id:"managing-reports"},"Managing Reports"),(0,a.kt)("p",null,'Efficiently oversee your reports by clicking the "Manage Reports" button, positioned alongside the "Create New Report" button in the top right corner. This section provides comprehensive control over all your previously created reports.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You'll find an organized table displaying each report's name, creation date, associated cloud provider, and the email and Slack recipients."),(0,a.kt)("li",{parentName:"ul"},"Each report includes an active toggle, allowing you to enable or disable report alerts as needed."),(0,a.kt)("li",{parentName:"ul"},"Furthermore, you have the option to edit or delete any report from this table, ensuring seamless management of your reporting and alerting processes.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In summary, the Reports & Alerting feature provides timely alerts, customizable reports, and efficient management tools for proactive cloud operations monitoring and optimization."))}d.isMDXComponent=!0},7455:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/creating-report-d5202aa795d0a018beb413e709a73b2f.png"}}]);