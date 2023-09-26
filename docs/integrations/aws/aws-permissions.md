---
sidebar_position: 2
---

# AWS Permissions

To ensure a seamless integration of your Amazon Web Services (AWS) account with OpsLyft, it's crucial to understand the permissions required. AWS permissions can be broadly categorized into general permissions and permissions specific to Cost and Usage Reports (CUR) Bucket Access and Editing. This section outlines these permissions, providing clarity on their role in the integration process.

## General Permissions

```bash
"cloudwatch:DescribeAlarmHistory",
"cloudwatch:DescribeAlarms",
"cloudwatch:DescribeAlarmsForMetric",
"cloudwatch:GetMetricData",
"cloudwatch:GetMetricStatistics",
"cloudwatch:ListMetrics",
"cloudwatch:PutMetricData",
"cloudwatch:PutMetricAlarm"

"athena:List*",
"athena:Batch*"

"aws-portal:ViewPaymentMethods",
"aws-portal:ViewAccount",
"aws-portal:ViewBilling",
"aws-portal:ViewUsage",
"cur:PutReportDefinition",
"cur:DescribeReportDefinitions"

"dynamodb:DescribeTable",
"dynamodb:ListTables"

"s3:ListAllMyBuckets",
"s3:ListBucket"

"ec2:Describe*",
"ec2:List*"

"lambda:ListFunctions"

"rds:DescribeDBInstances"

"cloudfront:Get*",
"cloudfront:List*"

"redshift:Describe*",
"redshift:GetReservedNodeExchangeOfferings",
"redshift:View*"

"elasticache:List*",
"elasticache:Describe*"

"eks:List*",
"eks:Describe*"

"es:Describe*",
"es:List*"

"ecs:List*",
"ecs:Describe*"

"elasticloadbalancing:Describe\*"

"autoscaling:Describe\*"

"elasticmapreduce:List*",
"elasticmapreduce:Describe*"

"sagemaker:List*",
"sagemaker:Describe*"

"elasticbeanstalk:List*",
"elasticbeanstalk:Describe*"

"datapipeline:List*",
"datapipeline:Describe*"

"lightsail:GetRelationalDatabaseEvents",
"lightsail:GetRelationalDatabaseLogEvents",
"lightsail:GetRelationalDatabaseLogStreams",
"lightsail:GetLoadBalancerMetricData",
"lightsail:GetInstanceMetricData"

"route53:List*",
"route53domains:Check*",
"route53domains:List*",
"route53domains:View*",
"route53resolver:List\*"

"backup:Describe*",
"backup:List*",
"batch:List*",
"batch:Describe*",
"sts:GetCallerIdentity",
"cloudtrail:LookupEvents",
"ram:Get*",
"ram:List*",
"servicequotas:Get*",
"servicequotas:List*",
"service-quotas:List*",
"service-quotas:Get*",
"servicecatalog:Describe*",
"servicecatalog:List*",
"organizations:List*",
"organizations:Describe*",
"apigateway:GET",
"sqs:List*",
"mq:List*",
"logs:Describe*",
"logs:FilterLogEvents",
"logs:ListTagsLogGroup",
"logs:StartQuery",
"logs:TestMetricFilter",
"machinelearning:Describe*",
"acm:List*",
"glue:Get*",
"kinesis:List*",
"swf:List*",
"kms:List*",
"savingsplans:Describe*",
"savingsplans:List\*"
```

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
