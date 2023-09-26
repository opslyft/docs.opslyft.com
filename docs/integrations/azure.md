---
sidebar_position: 2
pagination_next: integrations/gcp/setup-gcp
---

# Azure

The integration process of your Azure Account involves enabling Cost and Usage Reports, creating a dedicated service principal, and configuring scoped permissions for data security. OpsLyft currently supports two types of Azure accounts: Interface accounts and Microsoft Customer Agreement (MCA) accounts.

## Integration Process:

### Step 1: Enable Cost and Usage Reports (CUR)

- Begin the integration process by enabling a Cost and Usage Report (CUR) within your Azure storage account.
- Once the CUR is enabled, it becomes associated with your billing subscription, making it accessible for integration.

![Azure](/img/azure/azure-step.png)

### Step 2: Service Principal Creation

- OpsLyft simplifies Azure integration by creating a dedicated service principal within your Azure subscription. This service principal is associated with the OpsLyft App ID.
- Service principals are used to manage access to resources within Azure. OpsLyft assigns a built-in role known as "Storage Blob Data Reader" to the created app.

### Step 3: Scoped Permissions

- Ensuring privacy and data security is paramount. OpsLyft, therefore, assigns specific permissions to the service principal. These permissions grant the service principal the capability to read data within the designated storage account.
- Importantly, OpsLyft limits the scope of these permissions solely to the storage account where you have enabled billing, guaranteeing data isolation and privacy.

## Supported Azure Accounts:

Presently, OpsLyft supports two types of Azure accounts for integration: Interface accounts and Microsoft Customer Agreement (MCA) accounts.
Integration Script:

To expedite the Azure integration process, run the following script in your Azure shell:

```shell
az ad sp create id {app_id}
SCOPE=$(az storage account show --name (storage_account) --query "id" | xargs)
az role assignment create --assignee {app_id} --role 'Storage Blob Data Reader' --scope $SCOPE
```

## Integration Types

1. **Billing Integration:** The initial integration focuses on billing data. OpsLyft retrieves your Azure cost data for in-depth analysis.
2. **Account Integration:** To power advanced features like Cost Saving Insights, OpsLyft requires further integration to access resource metrics. This includes the following steps:

## Role Definition:

OpsLyft deploys a custom role named "OpsLyft FetchUsageMetricsRole." While this role allows OpsLyft to fetch billing and metrics data, it is carefully configured to restrict access to specific data, assuring your privacy:

```json
{
  "Name": "OpsLyft FetchUsageMetricsRole",
  "IsCustom": true,
  "Description": "Will fetch billing and metrics for resources.",
  "Actions": ["*/read"],
  "AssignableScopes": ["/subscriptions/<your-subscription-id>", ….. ],
  "DataActions": [],
  "NotDataActions": [
    "Microsoft.Storage/storageAccounts/blobServices/containers/blobs/*"
  ],
  "NotActions": []
}
```

## Azure Services

### Azure Services Mapped Against Supported Features

| Service               | Cost Saving Insights | Asset Management |
| --------------------- | -------------------- | ---------------- |
| ComputeVirtualMachine | YES                  | NO               |
| ComputeDisk           | YES                  | NO               |

For further inquiries, detailed assistance, or to address any concerns, please do not hesitate to contact our dedicated support team. Please reach out to us at contact@opslyft.com
