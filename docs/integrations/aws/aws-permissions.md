---
sidebar_position: 2
---

# AWS Permissions

To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process.

## General Permissions

| Service | Permissions taken |
|---|---|
| cloudwatch | cloudwatch:DescribeAlarmHistory<br/>cloudwatch:DescribeAlarms<br/>cloudwatch:DescribeAlarmsForMetric<br/>cloudwatch:GetMetricData<br/>cloudwatch:GetMetricStatistics<br/>cloudwatch:ListMetrics |
| AWS Portal (Billing and Usage) | aws-portal:ViewPaymentMethods<br/>aws-portal:ViewAccount<br/>aws-portal:ViewBilling<br/>aws-portal:ViewUsage<br/>cur:PutReportDefinition |
| Cost Explorer & Billing | ce:&ast;<br/>pricing:&ast;<br/>budgets:Describe&ast; |
| Tagging Services | tag:GetTagKeys<br/>tag:GetTagValues<br/>tag:GetResources |
| S3 (Specific CUR bucket access) | s3:ListBucket<br/>s3:PutObject<br/>s3:PutObjectAcl |
| DynamoDB | dynamodb:DescribeTable<br/>dynamodb:ListTables |
| S3 (General) | s3:ListAllMyBuckets<br/>s3:ListBucket |
| EC2 | ec2:Describe&ast;<br/>ec2:List&ast; |
| lambda | lambda:ListFunctions |
| RDS | rds:Describe&ast; |
| Cloudfront | cloudfront:Get&ast;<br/>cloudfront:List&ast; |
| Redshift | redshift:Describe&ast;<br/>redshift:GetReservedNodeExchangeOfferings<br/>redshift:View&ast; |
| Elasticache | elasticache:List&ast;<br/>elasticache:Describe&ast; |
| Elastic Kubernetes Service(EKS) | eks:List&ast;<br/>eks:Describe&ast; |
| Elastic Container Service(ECS) | ecs:List&ast;<br/>ecs:Describe&ast; |
| Elasticsearch | es:Describe&ast;<br/>es:List&ast; |
| Elasticloadbalancing | elasticloadbalancing:Describe&ast; |
| elasticmapreduce | elasticmapreduce:List&ast;<br/>elasticmapreduce:Describe&ast; |
| Sagemaker | sagemaker:List&ast;<br/>sagemaker:Describe&ast; |
| ElasticBeanstalk | elasticbeanstalk:List&ast;<br/>elasticbeanstalk:Describe&ast; |
| DataPipeline | datapipeline:List&ast;<br/>datapipeline:Describe&ast; |
| lightsail | lightsail:GetRelationalDatabaseEvents<br/>lightsail:GetRelationalDatabaseLogEvents<br/>lightsail:GetRelationalDatabaseLogStreams<br/>lightsail:GetLoadBalancerMetricData<br/>lightsail:GetInstanceMetricData |
| route53 | route53:List&ast;<br/>route53domains:Check&ast;<br/>route53domains:List&ast;<br/>route53domains:View&ast;<br/>route53resolver:List&ast; |
| autoscaling | autoscaling:Describe&ast; |
| SNS | sns:GetTopicAttributes<br/>sns:ListSubscriptionsByTopic |
| EventBridge | events:DescribeRule<br/>events:ListTargetsByRule |
| Others | backup:Describe&ast;<br/>backup:List&ast;<br/>batch:List&ast;<br/>batch:Describe&ast;<br/>sts:GetCallerIdentity<br/>cloudtrail:LookupEvents<br/>ram:Get&ast;<br/>ram:List&ast;<br/>servicequotas:Get&ast;<br/>servicequotas:List&ast;<br/>service-quotas:List&ast;<br/>service-quotas:Get&ast;<br/>servicecatalog:Describe&ast;<br/>servicecatalog:List&ast;<br/>organizations:List&ast;<br/>organizations:Describe&ast;<br/>apigateway:GET<br/>sqs:List&ast;<br/>mq:List&ast;<br/>logs:Describe&ast;<br/>logs:FilterLogEvents<br/>logs:ListTagsLogGroup<br/>logs:StartQuery<br/>logs:TestMetricFilter<br/>machinelearning:Describe&ast;<br/>acm:List&ast;<br/>glue:Get&ast;<br/>kinesis:List&ast;<br/>swf:List&ast;<br/>kms:List&ast;<br/>savingsplans:Describe&ast;<br/>savingsplans:List&ast |

## Specific Permissions

OpsLyft offers two methods to import your CUR: importing an existing report in CSV format or creating a new CUR. We request specific permissions to access the S3 bucket containing your CUR data.

## CUR Bucket Access

For seamless integration, OpsLyft requests access to the bucket where your CUR resides. If the CUR bucket doesn't exist, OpsLyft seeks permission to create it. The permissions associated with CUR Bucket Access include:

```json
{
  "Sid": "CURBucketAccess",
  "Effect": "Allow",
  "Action": "*",
  "Resource": [
    {
      "Fn::Join": [
        "",
        [
          "arn:aws:s3:::opslyft-",
          {
            "Ref": "AWS::AccountId"
          },
          "-cur-bucket"
        ]
      ]
    },
    {
      "Fn::Join": [
        "",
        [
          "arn:aws:s3:::opslyft-",
          {
            "Ref": "AWS::AccountId"
          },
          "-cur-bucket/*"
        ]
      ]
    }
  ]
}
```

:::note

Note that OpsLyft requests access not only to the bucket but also to the CUR report itself

:::

```json
{
  "Sid": "CURAccess",
  "Effect": "Allow",
  "Action": "*",
  "Resource": [
    {
      "Fn::Join": [
        "",
        [
          "arn:aws:cur:*:",
          {
            "Ref": "AWS::AccountId"
          },
          ":/definition/opslyft-cur-report"
        ]
      ]
    }
  ]
}
```

## Role Creation for Data Transfer

OpsLyft creates a new policy and attaches it to the “OpsLyftFetchUsageMetrics” that facilitates the copying and transferring of data from your CUR bucket `(opslyft-<account-id>-cur-bucket)` to OpsLyft's designated bucket `(<account-id>-cur-bucket)`. The permissions associated with this role include:

```json
{
  "Sid": "CURCopyAccess",
  "Effect": "Allow",
  "Action": ["s3:ListBucket", "s3:PutObject", "s3:PutObjectAcl"],
  "Resource": [
    {
      "Fn::Join": [
        "",
        [
          "arn:aws:s3:::",
          {
            "Ref": "AWS::AccountId"
          },
          "-cur-bucket"
        ]
      ]
    },
    {
      "Fn::Join": [
        "",
        [
          "arn:aws:s3:::",
          {
            "Ref": "AWS::AccountId"
          },
          "-cur-bucket/*"
        ]
      ]
    }
  ]
}
```
