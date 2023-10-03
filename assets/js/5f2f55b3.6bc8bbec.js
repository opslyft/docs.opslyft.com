"use strict";(self.webpackChunkdocs_opslyft_com=self.webpackChunkdocs_opslyft_com||[]).push([[610],{4137:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var s=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,s,i=function(e,n){if(null==e)return{};var t,s,i={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=s.createContext({}),l=function(e){var n=s.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return s.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},m=s.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return t?s.createElement(f,a(a({ref:n},u),{},{components:t})):s.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var l=2;l<r;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1544:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=t(7462),i=(t(7294),t(4137));const r={sidebar_position:2},a="AWS Permissions",o={unversionedId:"integrations/aws/aws-permissions",id:"integrations/aws/aws-permissions",title:"AWS Permissions",description:"To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process.",source:"@site/docs/integrations/aws/aws-permissions.md",sourceDirName:"integrations/aws",slug:"/integrations/aws/aws-permissions",permalink:"/docs.opslyft.com/integrations/aws/aws-permissions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Setup AWS",permalink:"/docs.opslyft.com/integrations/aws/setup-aws"},next:{title:"AWS Services & Regions",permalink:"/docs.opslyft.com/integrations/aws/aws-services"}},c={},l=[{value:"General Permissions",id:"general-permissions",level:2},{value:"Specific Permissions",id:"specific-permissions",level:2},{value:"CUR Bucket Access",id:"cur-bucket-access",level:2},{value:"Role Creation for Data Transfer",id:"role-creation-for-data-transfer",level:2}],u={toc:l},p="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(p,(0,s.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"aws-permissions"},"AWS Permissions"),(0,i.kt)("p",null,"To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process."),(0,i.kt)("h2",{id:"general-permissions"},"General Permissions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'"cloudwatch:DescribeAlarmHistory",\n"cloudwatch:DescribeAlarms",\n"cloudwatch:DescribeAlarmsForMetric",\n"cloudwatch:GetMetricData",\n"cloudwatch:GetMetricStatistics",\n"cloudwatch:ListMetrics",\n"cloudwatch:PutMetricData",\n"cloudwatch:PutMetricAlarm"\n\n"athena:List*",\n"athena:Batch*"\n\n"aws-portal:ViewPaymentMethods",\n"aws-portal:ViewAccount",\n"aws-portal:ViewBilling",\n"aws-portal:ViewUsage",\n"cur:PutReportDefinition",\n"cur:DescribeReportDefinitions"\n\n"dynamodb:DescribeTable",\n"dynamodb:ListTables"\n\n"s3:ListAllMyBuckets",\n"s3:ListBucket"\n\n"ec2:Describe*",\n"ec2:List*"\n\n"lambda:ListFunctions"\n\n"rds:DescribeDBInstances"\n\n"cloudfront:Get*",\n"cloudfront:List*"\n\n"redshift:Describe*",\n"redshift:GetReservedNodeExchangeOfferings",\n"redshift:View*"\n\n"elasticache:List*",\n"elasticache:Describe*"\n\n"eks:List*",\n"eks:Describe*"\n\n"es:Describe*",\n"es:List*"\n\n"ecs:List*",\n"ecs:Describe*"\n\n"elasticloadbalancing:Describe\\*"\n\n"autoscaling:Describe\\*"\n\n"elasticmapreduce:List*",\n"elasticmapreduce:Describe*"\n\n"sagemaker:List*",\n"sagemaker:Describe*"\n\n"elasticbeanstalk:List*",\n"elasticbeanstalk:Describe*"\n\n"datapipeline:List*",\n"datapipeline:Describe*"\n\n"lightsail:GetRelationalDatabaseEvents",\n"lightsail:GetRelationalDatabaseLogEvents",\n"lightsail:GetRelationalDatabaseLogStreams",\n"lightsail:GetLoadBalancerMetricData",\n"lightsail:GetInstanceMetricData"\n\n"route53:List*",\n"route53domains:Check*",\n"route53domains:List*",\n"route53domains:View*",\n"route53resolver:List\\*"\n\n"backup:Describe*",\n"backup:List*",\n"batch:List*",\n"batch:Describe*",\n"sts:GetCallerIdentity",\n"cloudtrail:LookupEvents",\n"ram:Get*",\n"ram:List*",\n"servicequotas:Get*",\n"servicequotas:List*",\n"service-quotas:List*",\n"service-quotas:Get*",\n"servicecatalog:Describe*",\n"servicecatalog:List*",\n"organizations:List*",\n"organizations:Describe*",\n"apigateway:GET",\n"sqs:List*",\n"mq:List*",\n"logs:Describe*",\n"logs:FilterLogEvents",\n"logs:ListTagsLogGroup",\n"logs:StartQuery",\n"logs:TestMetricFilter",\n"machinelearning:Describe*",\n"acm:List*",\n"glue:Get*",\n"kinesis:List*",\n"swf:List*",\n"kms:List*",\n"savingsplans:Describe*",\n"savingsplans:List\\*"\n')),(0,i.kt)("h2",{id:"specific-permissions"},"Specific Permissions"),(0,i.kt)("p",null,"OpsLyft offers two methods to import your CUR: importing an existing report in CSV format or creating a new CUR. We request specific permissions to access the S3 bucket containing your CUR data."),(0,i.kt)("h2",{id:"cur-bucket-access"},"CUR Bucket Access"),(0,i.kt)("p",null,"For seamless integration, OpsLyft requests access to the bucket where your CUR resides. If the CUR bucket doesn't exist, OpsLyft seeks permission to create it. The permissions associated with CUR Bucket Access include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "CURBucketAccess",\n  "Effect": "Allow",\n  "Action": "*",\n  "Resource": [\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::opslyft-",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket"\n        ]\n      ]\n    },\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::opslyft-",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket/*"\n        ]\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Note that OpsLyft requests access not only to the bucket but also to the CUR report itself")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "CURAccess",\n  "Effect": "Allow",\n  "Action": "*",\n  "Resource": [\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:cur:*:",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          ":/definition/opslyft-cur-report"\n        ]\n      ]\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"role-creation-for-data-transfer"},"Role Creation for Data Transfer"),(0,i.kt)("p",null,"OpsLyft creates a new policy and attaches it to the \u201cOpsLyftFetchUsageMetrics\u201d that facilitates the copying and transferring of data from your CUR bucket ",(0,i.kt)("inlineCode",{parentName:"p"},"(opslyft-<account-id>-cur-bucket)")," to OpsLyft's designated bucket ",(0,i.kt)("inlineCode",{parentName:"p"},"(<account-id>-cur-bucket)"),". The permissions associated with this role include:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Sid": "CURCopyAccess",\n  "Effect": "Allow",\n  "Action": ["s3:ListBucket", "s3:PutObject", "s3:PutObjectAcl"],\n  "Resource": [\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket"\n        ]\n      ]\n    },\n    {\n      "Fn::Join": [\n        "",\n        [\n          "arn:aws:s3:::",\n          {\n            "Ref": "AWS::AccountId"\n          },\n          "-cur-bucket/*"\n        ]\n      ]\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);