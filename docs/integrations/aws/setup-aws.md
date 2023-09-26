---
sidebar_position: 1
pagination_prev: get-started/onboarding
---

# Setup AWS

Integrating your AWS account with OpsLyft is a straightforward process encompassing four key steps. Firstly, we guide you through creating a secure IAM role within AWS to ensure utmost data security. Next, you can select from existing Cost and Usage Reports (CURs) or opt to create new ones as needed. OpsLyft then requests necessary permissions to securely copy CUR data to your designated AWS S3 bucket, adhering to strict data integrity standards. Finally, we perform a resource accessibility check to verify our ability to access and view your AWS resources, including crucial elements like EC2 instances.

## Integration Procedure via Dashboard:

### Step 1: Cross Account Role Creation

- To initiate the integration, OpsLyft provides a customized AWS CloudFormation template within your AWS account. This template creates an IAM role named the 'OpsLyftFetchUsageMetricsRole' role.
- The CloudFormation stack creates an IAM role to which read-only permissions are attached, ensuring the utmost security and privacy of your AWS resources.

![AWS Step 1: Cross Account Role Creation](/img/aws/aws-step-1.png)

### Step 2: Access to Cost and Usage Reports

- Utilizing the permissions provided to us via the IAM role, we first list down the existing CURs in your AWS account and allow you to select the ones you want to use for integration.
- If no CUR is found or if you prefer to create a new one, OpsLyft can assist you in generating a new Cost and Usage Report for the integration process.

### Step 3: Data Transfer Permissions

- After the successful creation of the "Cost and Usage Report" (CUR)
- OpsLyft requests limited permissions to copy the CUR data to a designated AWS S3 bucket within your AWS account. This process is part of our commitment to safeguarding your data and maintaining its integrity during the integration process.

### Step 4: Resource Accessibility Check

- To offer you comprehensive cloud resource management capabilities, OpsLyft's API conducts a verification check to confirm our ability to read and view your AWS resources. This includes resources like EC2 instances and more.
- The successful completion of this check indicates that your AWS account integration with OpsLyft is successful. Any potential issues encountered during this process will trigger error messages for prompt resolution.

#### Integration Limitations:

Presently, OpsLyft supports the integration of one AWS account at a time. However, we are actively working on expanding this capability to support the integration of entire AWS organizations, streamlining the process for managing multiple AWS accounts simultaneously.

#### Data Ingestion Delay:

Please be aware that OpsLyft provides cost data up to (n-2) days. This ensures timely insights into your AWS expenditures and cost optimization opportunities.

For further inquiries, detailed assistance, or to address any concerns, please do not hesitate to contact our dedicated support team. Please reach out to us at contact@opslyft.com
