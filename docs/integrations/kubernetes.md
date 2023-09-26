---
sidebar_position: 4
---

# Kubernetes

Integrating OpenCost with your Kubernetes cluster is a straightforward process that involves two key steps: setting up Prometheus and installing OpenCost itself. Prometheus is essential for collecting metrics that OpenCost relies on for cost analysis. In the first step, we'll guide you through the installation of Prometheus using a Helm chart. Next, in Step 2, you'll install OpenCost by applying a YAML configuration specific to your Kubernetes cluster. After completing these steps, you can test the installation by checking for the external IP address and accessing OpenCost for cost allocation insights.

## Follow the steps below to install OpenCost

### Step 1: Prometheus

Opencost relies on metrics scraped by Prometheus. For express installation of Prometheus use the following command:

```shell
helm install opskube-prometheus --repo https://prometheus-community.github.io/helm-charts prometheus \
  --namespace prometheus --create-namespace \
  --set pushgateway.enabled=false \
  --set alertmanager.enabled=false \
  -f https://raw.githubusercontent.com/opencost/opencost/develop/kubernetes/prometheus/extraScrapeConfigs.yaml
```

This Prometheus installation is based on Prom community helm chart.

### Step 2: Installing OpenCost

To install OpenCost on your cluster, you need to replace `<your-cluster-name>` with your actual Kubernetes cluster name in the command below before running it:

```shell
curl -s https://raw.githubusercontent.com/opslyft/opslyft-kubernetes/main/opencost.yaml | sed 's/cluster-one/<your-cluster-name>/g' | kubectl apply --namespace opencost -f -
```

This command fetches the OpenCost YAML configuration, replaces the CLUSTER_ID value with your cluster name, and applies the configuration to your Kubernetes cluster.
Make sure to replace with the name of your Kubernetes cluster.

## Testing

```shell
kubectl get svc -n opencost
```

This command will list the service which is deployed in namespace **"opencost"**.

Copy the `EXTERNAL-IP` from the response of above command and hit `http://EXTERNAL-IP:9003/allocation/compute?window=60m`

For further inquiries, detailed assistance, or to address any concerns, please do not hesitate to contact our dedicated support team. Please reach out to us at contact@opslyft.com
