"use strict";(self.webpackChunkdocs_opslyft_com=self.webpackChunkdocs_opslyft_com||[]).push([[610],{4137:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),c=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(o.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=c(n),k=a,d=p["".concat(o,".").concat(k)]||p[k]||m[k]||l;return n?r.createElement(d,s(s({ref:e},u),{},{components:n})):r.createElement(d,s({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,s=new Array(l);s[0]=k;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[p]="string"==typeof t?t:a,s[1]=i;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1544:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const l={sidebar_position:2},s="AWS Permissions",i={unversionedId:"integrations/aws/aws-permissions",id:"integrations/aws/aws-permissions",title:"AWS Permissions",description:"To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process.",source:"@site/docs/integrations/aws/aws-permissions.md",sourceDirName:"integrations/aws",slug:"/integrations/aws/aws-permissions",permalink:"/integrations/aws/aws-permissions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup AWS",permalink:"/integrations/aws/setup-aws"},next:{title:"AWS Services & Regions",permalink:"/integrations/aws/aws-services"}},o={},c=[{value:"General Permissions",id:"general-permissions",level:2},{value:"Specific Permissions",id:"specific-permissions",level:2},{value:"CUR Bucket Access",id:"cur-bucket-access",level:2},{value:"Role Creation for Data Transfer",id:"role-creation-for-data-transfer",level:2}],u={toc:c},p="wrapper";function m(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-permissions"},"AWS Permissions"),(0,a.kt)("p",null,"To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process."),(0,a.kt)("h2",{id:"general-permissions"},"General Permissions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Service"),(0,a.kt)("th",{parentName:"tr",align:null},"Permissions taken"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"cloudwatch"),(0,a.kt)("td",{parentName:"tr",align:null},"cloudwatch:DescribeAlarmHistory",(0,a.kt)("br",null),"cloudwatch:DescribeAlarms",(0,a.kt)("br",null),"cloudwatch:DescribeAlarmsForMetric",(0,a.kt)("br",null),"cloudwatch:GetMetricData",(0,a.kt)("br",null),"cloudwatch:GetMetricStatistics",(0,a.kt)("br",null),"cloudwatch:ListMetrics",(0,a.kt)("br",null),"cloudwatch:PutMetricData",(0,a.kt)("br",null),"cloudwatch:PutMetricAlarm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"athena"),(0,a.kt)("td",{parentName:"tr",align:null},"dynamodb:DescribeTable",(0,a.kt)("br",null),"dynamodb:ListTables")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"S3"),(0,a.kt)("td",{parentName:"tr",align:null},"s3:ListAllMyBuckets",(0,a.kt)("br",null),"s3:ListBucket")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"EC2"),(0,a.kt)("td",{parentName:"tr",align:null},"ec2:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"ec2:List"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lambda"),(0,a.kt)("td",{parentName:"tr",align:null},"lambda:ListFunctions")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RDS"),(0,a.kt)("td",{parentName:"tr",align:null},"rds:Describe*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cloudfront"),(0,a.kt)("td",{parentName:"tr",align:null},"cloudfront:Get",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"cloudfront:List"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Redshift"),(0,a.kt)("td",{parentName:"tr",align:null},"redshift:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"redshift:GetReservedNodeExchangeOfferings",(0,a.kt)("br",null),"redshift:View"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elasticache"),(0,a.kt)("td",{parentName:"tr",align:null},"elasticache:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"elasticache:Describe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elastic Kubernetes Service(EKS)"),(0,a.kt)("td",{parentName:"tr",align:null},"eks:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"eks:Describe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elastic Container Service(ECS)"),(0,a.kt)("td",{parentName:"tr",align:null},"ecs:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"ecs:Describe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elasticsearch"),(0,a.kt)("td",{parentName:"tr",align:null},"es:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"es:List"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Elasticloadbalancing"),(0,a.kt)("td",{parentName:"tr",align:null},"elasticloadbalancing:Describe*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"elasticmapreduce"),(0,a.kt)("td",{parentName:"tr",align:null},"elasticmapreduce:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"elasticmapreduce:Describe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sagemaker"),(0,a.kt)("td",{parentName:"tr",align:null},"sagemaker:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"sagemaker:Describe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ElasticBeanstalk"),(0,a.kt)("td",{parentName:"tr",align:null},"elasticbeanstalk:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"elasticbeanstalk:Describe"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"lightsail"),(0,a.kt)("td",{parentName:"tr",align:null},"lightsail:GetRelationalDatabaseEvents",(0,a.kt)("br",null),"lightsail:GetRelationalDatabaseLogEvents",(0,a.kt)("br",null),"lightsail:GetRelationalDatabaseLogStreams",(0,a.kt)("br",null),"lightsail:GetLoadBalancerMetricData",(0,a.kt)("br",null),"lightsail:GetInstanceMetricData")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"route53"),(0,a.kt)("td",{parentName:"tr",align:null},"route53:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"route53domains:Check"),(0,a.kt)("br",null),"route53domains:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"route53domains:View"),(0,a.kt)("br",null),"route53resolver:List*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"autoscaling"),(0,a.kt)("td",{parentName:"tr",align:null},"autoscaling:Describe*")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Others"),(0,a.kt)("td",{parentName:"tr",align:null},"backup:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"backup:List"),(0,a.kt)("br",null),"batch:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"batch:Describe"),(0,a.kt)("br",null),"sts:GetCallerIdentity",(0,a.kt)("br",null),"cloudtrail:LookupEvents",(0,a.kt)("br",null),"ram:Get",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"ram:List"),(0,a.kt)("br",null),"servicequotas:Get",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"servicequotas:List"),(0,a.kt)("br",null),"service-quotas:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"service-quotas:Get"),(0,a.kt)("br",null),"servicecatalog:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"servicecatalog:List"),(0,a.kt)("br",null),"organizations:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"organizations:Describe"),(0,a.kt)("br",null),"apigateway:Get",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"sqs:List"),(0,a.kt)("br",null),"mq:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"logs:Describe"),(0,a.kt)("br",null),"logs:FilterLogEvents",(0,a.kt)("br",null),"logs:ListTagsLogGroup",(0,a.kt)("br",null),"logs:StartQuery",(0,a.kt)("br",null),"logs:TestMetricFilter",(0,a.kt)("br",null),"machinelearning:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"acm:List"),(0,a.kt)("br",null),"glue:Get",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"kinesis:List"),(0,a.kt)("br",null),"swf:List",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"kms:List"),(0,a.kt)("br",null),"savingsplans:Describe",(0,a.kt)("em",{parentName:"td"},(0,a.kt)("br",null),"savingsplans:List"),(0,a.kt)("br",null),"aws-portal:ViewPaymentMethods",(0,a.kt)("br",null),"aws-portal:ViewAccount",(0,a.kt)("br",null),"aws-portal:ViewBilling",(0,a.kt)("br",null),"aws-portal:ViewUsage",(0,a.kt)("br",null),"cur:PutReportDefinition",(0,a.kt)("br",null),"cur:DescribeReportDefinitions")))),(0,a.kt)("h2",{id:"specific-permissions"},"Specific Permissions"),(0,a.kt)("p",null,"OpsLyft offers two methods to import your CUR: importing an existing report in CSV format or creating a new CUR. We request specific permissions to access the S3 bucket containing your CUR data."),(0,a.kt)("h2",{id:"cur-bucket-access"},"CUR Bucket Access"),(0,a.kt)("p",null,"For seamless integration, OpsLyft requests access to the bucket where your CUR resides. If the CUR bucket doesn't exist, OpsLyft seeks permission to create it. The permissions associated with CUR Bucket Access include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "CURBucketAccess",\n  "Effect": "Allow",\n  "Action": "*",\n  "Resource": [\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::opslyft-",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket"\n        ]\n      ]\n    },\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::opslyft-",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket/*"\n        ]\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Note that OpsLyft requests access not only to the bucket but also to the CUR report itself")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "CURAccess",\n  "Effect": "Allow",\n  "Action": "*",\n  "Resource": [\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:cur:*:",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          ":/definition/opslyft-cur-report"\n        ]\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"role-creation-for-data-transfer"},"Role Creation for Data Transfer"),(0,a.kt)("p",null,"OpsLyft creates a new policy and attaches it to the \u201cOpsLyftFetchUsageMetrics\u201d that facilitates the copying and transferring of data from your CUR bucket ",(0,a.kt)("inlineCode",{parentName:"p"},"(opslyft-<account-id>-cur-bucket)")," to OpsLyft's designated bucket ",(0,a.kt)("inlineCode",{parentName:"p"},"(<account-id>-cur-bucket)"),". The permissions associated with this role include:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "CURCopyAccess",\n  "Effect": "Allow",\n  "Action": ["s3:ListBucket", "s3:PutObject", "s3:PutObjectAcl"],\n  "Resource": [\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket"\n        ]\n      ]\n    },\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket/*"\n        ]\n      ]\n    }\n  ]\n}\n')))}m.isMDXComponent=!0}}]);