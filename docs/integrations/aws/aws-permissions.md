---
sidebar_position: 2
---

# AWS Permissions

To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process.

## General Permissions

| Service | Permissions taken |
|---|---|
| cloudwatch | cloudwatch:DescribeAlarmHistory<br/>cloudwatch:DescribeAlarms<br/>cloudwatch:DescribeAlarmsForMetric<br/>cloudwatch:GetMetricData<br/>cloudwatch:GetMetricStatistics<br/>cloudwatch:ListMetrics<br/>cloudwatch:PutMetricData<br/>cloudwatch:PutMetricAlarm |
| athena | dynamodb:DescribeTable<br/>dynamodb:ListTables |
| S3 | s3:ListAllMyBuckets<br/>s3:ListBucket |
| EC2 | ec2:Describe*<br/>ec2:List* |
| lambda | lambda:ListFunctions |
| RDS | rds:Describe* |
| Cloudfront | cloudfront:Get*<br/>cloudfront:List* |
| Redshift | redshift:Describe*<br/>redshift:GetReservedNodeExchangeOfferings<br/>redshift:View* |
| Elasticache | elasticache:List*<br/>elasticache:Describe* |
| Elastic Kubernetes Service(EKS) | eks:List*<br/>eks:Describe* |
| Elastic Container Service(ECS) | ecs:List*<br/>ecs:Describe* |
| Elasticsearch | es:Describe*<br/>es:List* |
| Elasticloadbalancing | elasticloadbalancing:Describe* |
| elasticmapreduce | elasticmapreduce:List*<br/>elasticmapreduce:Describe* |
| Sagemaker | sagemaker:List*<br/>sagemaker:Describe* |
| ElasticBeanstalk | elasticbeanstalk:List*<br/>elasticbeanstalk:Describe* |
| lightsail | lightsail:GetRelationalDatabaseEvents<br/>lightsail:GetRelationalDatabaseLogEvents<br/>lightsail:GetRelationalDatabaseLogStreams<br/>lightsail:GetLoadBalancerMetricData<br/>lightsail:GetInstanceMetricData |
| route53 | route53:List*<br/>route53domains:Check*<br/>route53domains:List*<br/>route53domains:View*<br/>route53resolver:List* |
| autoscaling | autoscaling:Describe* |
| Others | backup:Describe*<br/>backup:List*<br/>batch:List*<br/>batch:Describe*<br/>sts:GetCallerIdentity<br/>cloudtrail:LookupEvents<br/>ram:Get*<br/>ram:List*<br/>servicequotas:Get*<br/>servicequotas:List*<br/>service-quotas:List*<br/>service-quotas:Get*<br/>servicecatalog:Describe*<br/>servicecatalog:List*<br/>organizations:List*<br/>organizations:Describe*<br/>apigateway:Get*<br/>sqs:List*<br/>mq:List*<br/>logs:Describe*<br/>logs:FilterLogEvents<br/>logs:ListTagsLogGroup<br/>logs:StartQuery<br/>logs:TestMetricFilter<br/>machinelearning:Describe*<br/>acm:List*<br/>glue:Get*<br/>kinesis:List*<br/>swf:List*<br/>kms:List*<br/>savingsplans:Describe*<br/>savingsplans:List*<br/>aws-portal:ViewPaymentMethods<br/>aws-portal:ViewAccount<br/>aws-portal:ViewBilling<br/>aws-portal:ViewUsage<br/>cur:PutReportDefinition<br/>cur:DescribeReportDefinitions |

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
