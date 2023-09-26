---
sidebar_position: 1
pagination_prev: integrations/azure
---

# Setup GCP

This guide covers the integration process, which involves two key steps: Billing Integration and Project Integration. In Billing Integration, OpsLyft requires access to your GCP Billing Report to perform billing analysis. For Project Integration, OpsLyft creates a custom IAM role and delegates access to our service account with specific permissions to provide insights into your GCP project's resources. To ensure a smooth integration, we provide a script that facilitates essential GCP service enablement and IAM role creation. These steps ensure your GCP project is correctly configured for OpsLyft integration, allowing you to harness its advanced capabilities effectively.

## Billing Integration

To begin the integration, OpsLyft requires access to your GCP Cost and Usage Reports (CUR). These reports reside in BigQuery, and we need to share the BQ dataset with our service account. This permission allows OpsLyft's service principal to extract the data necessary for billing analysis. Once granted, the billing integration process is completed.

## Project Integration

OpsLyft's integration goes beyond billing; we create an IAM role with specific permissions to provide insights into your GCP project's resources. This involves configuring permissions and services within your GCP project to enable specific APIs. OpsLyft creates a unique IAM role with precise permissions that match its specific requirements. This role is then assigned to a service account associated with your project, facilitating a secure and efficient integration process.

:::note Important Note

Please note that OpsLyft can only display services within your project that you have enabled.

:::

## Integration Steps

To facilitate the integration process, we provide a script for configuring your GCP project. Follow these steps to configure your project for OpsLyft integration:

![GCP Steps](/img/gcp/gcp-step.png)

1. **Download the Configuration Script:** Execute the following command to download the necessary configuration script.

```bash
wget -nc https://opslyft-gcp-script.s3.amazonaws.com/opslyft-gcp-common.yaml
```

2. **Enable Essential GCP Services:** Enable critical GCP services by running the following commands:.

```bash
gcloud services enable cloudresourcemanager.googleapis.com --project={project_id}
gcloud services enable cloudasset.googleapis.com --project={project_id}
gcloud services enable iam.googleapis.com --project={project_id}
```

3. **Create Custom IAM Role:** Create a custom IAM role designed to meet OpsLyft's requirements. Execute this command to create the role using the provided configuration file:

```bash
gcloud iam roles create {role_name} --project={project_id} --file-opslyft-gcp-common.yaml
```

4. **Assign Role to Service Account:** Assign the custom IAM role to our service account within your project by running this command:

```bash
gcloud projects add-iam-policy-binding {project_id} --member serviceAccount:opslyft@rock-bonus-299515.iam.gserviceaccount.com --role "projects/{project_id}/roles/{role_name}"
```

These steps ensure that your GCP project is configured correctly with the necessary Service account, IAM role, and permissions for OpsLyft integration.

For further inquiries, detailed assistance, or to address any concerns, please do not hesitate to contact our dedicated support team. Please reach out to us at contact@opslyft.com
