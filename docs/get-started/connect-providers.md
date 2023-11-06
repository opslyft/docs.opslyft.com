---
sidebar_position: 2
---

# Connect Providers

:::note Note Regarding Integrations

1. **Read-only access:** OpsLyft only ingests and displays your data based on read-only permissions. We will not take any write permissions from you to connect your account.
2. **Prioritize data security:** Your trust is valuable to us. Therefore, we are committed to taking all necessary measures to protect your information and ensure its confidentiality.

:::

## Connecting Your Cloud Providers

![Cloud Optimization](/img/providers1.png)

### Supported providers
- **AWS**: OpsLyft integrates with your AWS account using a Read-Only cross-account IAM role. Additionally it takes read access to the bucket which has AWS CUR enabled otherwise it creates one for you.
- **GCP**: OpsLyft integrates with your GCP Projects using a service account which has Read-Only access to your resources. Additionally it takes Editor access to the BigQuery Dataset which has GCP's billing export enabled. 
- **Azure**: OpsLyft integrates with your Azure subscriptions using a dedicated service principal which is connected to OpsLyft's App Id. The service principal has Read-Only permissions attached to it. Additionally it takes reader access of your storage account which has Cost reports enabled. 
- **Snowflake**: OpsLyft integrates with your Snowflake account using a snowflake user and only queries the namespace which hosts the snowflake usage data. 
- **Kubernetes**: OpsLyft integrates with your Kubernetes cluster using installations of Prometheus and Opencost. Opencost gives OpsLyft read access to specific cluster metrics. 

### Getting started with integration
1. **Access Your Account:** Access your OpsLyft account by logging in with your credentials or signing up if you're new to OpsLyft.
2. **Select Your Cloud Provider:**
   - **For New Users:** If you're new to OpsLyft and haven't integrated any accounts before, you'll find options to integrate accounts right on the landing page when you access your account. Select the cloud provider you want to integrate, and follow the integration steps.
   - **For Existing Users Adding a New Account:** If you already have an account integrated and want to add a new one, navigate to "Accounts" settings and click the "Connect New Account" button located on the upper right corner of your page. Specify whether it's a linked account or not, and select the required cloud provider from the supported options that appear.
3. **Follow Integration Steps:** OpsLyft will guide you through the integration steps, which typically involve providing necessary credentials and permissions for the integration.
4. **Verify Integration:** After completing the integration steps, verify that your cloud provider is successfully connected to OpsLyft.
<!-- ![Cloud Optimization](/img/introduction/AWSsuccess.png) -->
<!-- <img src="/img/introduction/AWSsuccess.png" alt="Success" style={{width:200}}/> -->
Repeat this process for each cloud provider you want to integrate. Once connected, you'll have a centralized view of your multi-cloud environment within OpsLyft.
