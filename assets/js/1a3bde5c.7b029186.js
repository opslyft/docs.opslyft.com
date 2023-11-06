"use strict";(self.webpackChunkdocs_opslyft_com=self.webpackChunkdocs_opslyft_com||[]).push([[875],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,g=d["".concat(l,".").concat(p)]||d[p]||h[p]||s;return n?i.createElement(g,o(o({ref:t},u),{},{components:n})):i.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var i=n(7462),a=(n(7294),n(4137));const s={sidebar_position:2},o="Instance Scheduler",r={unversionedId:"features/cost-optimization-guide/instance-scheduler",id:"features/cost-optimization-guide/instance-scheduler",title:"Instance Scheduler",description:"The Instance Scheduler provides users with the capability to effectively manage the operational hours of their instances, resulting in resource optimization and cost savings. It allows users to reduce costs by turning off resources during off-hours or periods of low workload. In this section we'll guide you through the process of managing and creating schedules for your EC2 instances.",source:"@site/docs/features/cost-optimization-guide/instance-scheduler.md",sourceDirName:"features/cost-optimization-guide",slug:"/features/cost-optimization-guide/instance-scheduler",permalink:"/features/cost-optimization-guide/instance-scheduler",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Cost Saving Insights",permalink:"/features/cost-optimization-guide/csi"},next:{title:"Asset Management",permalink:"/features/asset-management"}},l={},c=[{value:"Accessing the Instance Scheduler Dashboard",id:"accessing-the-instance-scheduler-dashboard",level:2},{value:"Integrating Instance Scheduler",id:"integrating-instance-scheduler",level:2},{value:"Deactivating Schedules",id:"deactivating-schedules",level:2},{value:"Editing and Deleting Schedules",id:"editing-and-deleting-schedules",level:2},{value:"Creating a New Schedule",id:"creating-a-new-schedule",level:2},{value:"Defining the Schedule",id:"defining-the-schedule",level:2},{value:"Email Notifications",id:"email-notifications",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:c},d="wrapper";function h(e){let{components:t,...s}=e;return(0,a.kt)(d,(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"instance-scheduler"},"Instance Scheduler"),(0,a.kt)("p",null,"The Instance Scheduler provides users with the capability to effectively manage the operational hours of their instances, resulting in resource optimization and cost savings. It allows users to reduce costs by turning off resources during off-hours or periods of low workload. In this section we'll guide you through the process of managing and creating schedules for your EC2 instances."),(0,a.kt)("h2",{id:"accessing-the-instance-scheduler-dashboard"},"Accessing the Instance Scheduler Dashboard"),(0,a.kt)("p",null,"Upon accessing the Instant Scheduler dashboard, you'll find a comprehensive list of upcoming and past schedules. This intuitive interface facilitates seamless management of your scheduling needs."),(0,a.kt)("h2",{id:"integrating-instance-scheduler"},"Integrating Instance Scheduler"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A Cloudformation stack is used to set up an instance scheduler on each AWS account in which the user wants to use the instance scheduler. The Cloudformation stack creates the following resources",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Updates the OpslyftFetchUsageMetric IAM role to include the permissions for Instance scheduler (i.e. Start/Stop resources)"),(0,a.kt)("li",{parentName:"ul"},"Creates a Lambda function that uses AWS API\u2019s to Start and Stop resources"),(0,a.kt)("li",{parentName:"ul"},"Creates an Eventbridge Rule to trigger the Lambda function at 15 minute interval")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Integrating Instance Scheduler",src:n(6283).Z,width:"685",height:"542"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Users can configure the instances to be scheduled as rules on the Opslyft product, These rules are stored in Opslyft\u2019s S3 bucket.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Lambda function fetches the instance Scheduler rules form Opslyft S3 bucket and Starts/Stops instances using the AWS API\u2019s based on the schedule rules."))),(0,a.kt)("h2",{id:"deactivating-schedules"},"Deactivating Schedules"),(0,a.kt)("p",null,"To deactivate a schedule, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'Click on the "Manage Schedules" button located at the top of the dashboard.'),(0,a.kt)("li",{parentName:"ol"},"Locate the desired schedule and navigate to the corresponding toggle button."),(0,a.kt)("li",{parentName:"ol"},"Simply switch off the toggle button to deactivate the selected schedule.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manage Schedules",src:n(6810).Z,width:"1897",height:"925"})),(0,a.kt)("h2",{id:"editing-and-deleting-schedules"},"Editing and Deleting Schedules"),(0,a.kt)("p",null,"Editing or deleting a schedule is straightforward:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Identify the schedule you wish to modify."),(0,a.kt)("li",{parentName:"ol"},"Locate the three dots icon on the right-hand side of the schedule entry."),(0,a.kt)("li",{parentName:"ol"},"Click on the three dots icon to access a menu with editing and deletion options."),(0,a.kt)("li",{parentName:"ol"},'Choose between "Edit" to modify the schedule or "Delete" to remove it.')),(0,a.kt)("h2",{id:"creating-a-new-schedule"},"Creating a New Schedule"),(0,a.kt)("p",null,"Creating a new schedule is a streamlined process:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click on the button located in the top right corner to initiate schedule creation."),(0,a.kt)("li",{parentName:"ol"},"Currently, instance scheduling is available for EC2 instances."),(0,a.kt)("li",{parentName:"ol"},'Begin by assigning a descriptive "Schedule Name."'),(0,a.kt)("li",{parentName:"ol"},"Choose instances from the provided list that you wish to include in the schedule."),(0,a.kt)("li",{parentName:"ol"},'After selecting instances, proceed by clicking the "Next" button located at the bottom right corner.')),(0,a.kt)("h2",{id:"defining-the-schedule"},"Defining the Schedule"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'On the subsequent page, set the "Schedule Start Date" to indicate when the schedule becomes effective.'),(0,a.kt)("li",{parentName:"ol"},"Utilize the interactive calendar view to define your schedule timeline."),(0,a.kt)("li",{parentName:"ol"},"Adjust the schedule by dragging and dropping to designate the hours when instances should be stopped."),(0,a.kt)("li",{parentName:"ol"},"You can select multiple hours and days with ease, streamlining your configuration process."),(0,a.kt)("li",{parentName:"ol"},"To deselect a specific period, double-tap on it within the calendar view.")),(0,a.kt)("h2",{id:"email-notifications"},"Email Notifications"),(0,a.kt)("p",null,"Stay informed by setting up email notifications:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Once your timeline is ready, proceed to enter recipient email addresses."),(0,a.kt)("li",{parentName:"ol"},"Recipients will receive alerts before instances are scheduled to stop."),(0,a.kt)("li",{parentName:"ol"},"This ensures your team is well-prepared for any operational changes.")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"The Instance Scheduler feature primarily focuses on cost-saving measures by automatically shutting down or deactivating EC2 instances during periods of low utilization or off-hours. With its intuitive scheduling options and user-friendly controls, this feature provides a potent tool for optimizing resource allocation, enhancing cost-efficiency, and streamlining operational management."))}h.isMDXComponent=!0},6283:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/integrating-instance-scheduler-f4a173fb2c9684ffc398b2793bc8a526.png"},6810:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/manage-schedules-e3800472ce0669c409c682157bf792b8.png"}}]);