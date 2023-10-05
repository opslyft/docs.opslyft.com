"use strict";(self.webpackChunkdocs_opslyft_com=self.webpackChunkdocs_opslyft_com||[]).push([[69],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,h=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(4137));const o={sidebar_position:5,pagination_next:"features/dashboard"},i="Snowflake",s={unversionedId:"integrations/snowflake",id:"integrations/snowflake",title:"Snowflake",description:"Integrating your Snowflake account with OpsLyft to gain insights into data usage and billing is a straightforward process. Begin by creating an OpsLyft role with permissions equivalent to an Account Admin. Then, specify user details such as a password and warehouse. Next, set up an OpsLyft user account connected to this role. Finally, provide your Snowflake Account ID, Organization ID, and, if applicable, the custom cost per credit.",source:"@site/docs/integrations/snowflake.md",sourceDirName:"integrations",slug:"/integrations/snowflake",permalink:"/integrations/snowflake",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,pagination_next:"features/dashboard"},sidebar:"tutorialSidebar",previous:{title:"Kubernetes",permalink:"/integrations/kubernetes"},next:{title:"Dashboard",permalink:"/features/dashboard"}},l={},c=[{value:"1. Create a New Role",id:"1-create-a-new-role",level:3},{value:"2. Grant Permissions to the OpsLyft Role",id:"2-grant-permissions-to-the-opslyft-role",level:3},{value:"3. Specify User Details",id:"3-specify-user-details",level:3},{value:"4. Create the OpsLyft User",id:"4-create-the-opslyft-user",level:3},{value:"5. Grant Role to the New User",id:"5-grant-role-to-the-new-user",level:3},{value:"6. Enter Account &amp; Billing Details",id:"6-enter-account--billing-details",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snowflake"},"Snowflake"),(0,r.kt)("p",null,"Integrating your Snowflake account with OpsLyft to gain insights into data usage and billing is a straightforward process. Begin by creating an OpsLyft role with permissions equivalent to an Account Admin. Then, specify user details such as a password and warehouse. Next, set up an OpsLyft user account connected to this role. Finally, provide your Snowflake Account ID, Organization ID, and, if applicable, the custom cost per credit."),(0,r.kt)("h3",{id:"1-create-a-new-role"},"1. Create a New Role"),(0,r.kt)("p",null,"The first step involves accessing your Snowflake billing account with administrative privileges. In Snowflake, the billing account contains an internal database where essential data is stored. We request access to this database. To achieve this, log in to your Snowflake account with an admin role and create a new worksheet. Execute a specific set of SQL queries in Snowflake's worksheets, culminating in the creation of a new role dedicated to monitoring Snowflake usage: OPSLYFT."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"use role ACCOUNTADMIN:\ncreate role OPSLYFT:\n")),(0,r.kt)("h3",{id:"2-grant-permissions-to-the-opslyft-role"},"2. Grant Permissions to the OpsLyft Role"),(0,r.kt)("p",null,"Provide the OpsLyft role with the same permissions as the Account Admin role for the Snowflake database. This grants us read access to crucial data, including billing information, historical records, usage statistics, event history, and charging data, by requesting access to the existing Snowflake database."),(0,r.kt)("p",null,"You can refer to the Snowflake Documentation for more information ",(0,r.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/sql-reference/snowflake-db"},"link")),(0,r.kt)("h3",{id:"3-specify-user-details"},"3. Specify User Details"),(0,r.kt)("p",null,"After creating the role and establishing its permissions, we proceed to create a user within your Snowflake account. You provide us with a password and the name of a warehouse to run our queries. You have the flexibility to select a warehouse of your choice."),(0,r.kt)("h3",{id:"4-create-the-opslyft-user"},"4. Create the OpsLyft User"),(0,r.kt)("p",null,"This step involves the creation of an OpsLyft user account with the provided password and warehouse name. The OpsLyft User utilizes the OPSLYFT role to query data from the Snowflake database, specifically from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ACCOUNT_USAGE")," schema where billing and usage data resides."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"create user OPSLYFT_USER\nLOGIN_NAME = OPSLYFT_USER\npassword = '428ni%$nfcqilnf9enq'\ndefault_warehouse = war-85poc\ndefault_role = OPSLYFT\ndefault_namespace = SNOWFLAKE.ACCOUNT_USAGE;\n")),(0,r.kt)("h3",{id:"5-grant-role-to-the-new-user"},"5. Grant Role to the New User"),(0,r.kt)("p",null,"We grant the OpsLyft user the OPSLYFT role which was previously created with all the necessary permissions."),(0,r.kt)("h3",{id:"6-enter-account--billing-details"},"6. Enter Account & Billing Details"),(0,r.kt)("p",null,"To complete the integration, we require your Snowflake Account ID and Organization ID. Additionally, we may request the cost per credit, particularly if you have a custom pricing arrangement with Snowflake."),(0,r.kt)("p",null,"We verify the connection to your Snowflake account using the provided credentials and account details. If we can successfully retrieve data, the integration is considered successful. Otherwise, we provide specific error messages to assist in resolving any integration issues."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"The Snowflake database serves as the internal repository for your data."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ACCOUNT_USAGE")," schema contains virtual tables that OpsLyft queries to fetch relevant data."),(0,r.kt)("li",{parentName:"ul"},"Please be assured that OpsLyft operates as a read-only entity, ensuring data integrity."))),(0,r.kt)("p",null,"For further inquiries, detailed assistance, or to address any concerns, please do not hesitate to contact our dedicated support team. Please reach out to us ",(0,r.kt)("a",{parentName:"p",href:"mailto:contact@opslyft.com"},"contact@opslyft.com")))}d.isMDXComponent=!0}}]);