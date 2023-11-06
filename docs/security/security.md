# Security

Since OpsLyft takes access of your cloud providers, we believe it is necessary to clarify and address the security reservations of our customers. All the data that we store is encrypted in transit and at rest.


## Read Only Access 

OpsLyft only takes read access to the metadata of the resources running on cloud providers, i.e we know what instance type is a particular instance is using but not what is actually running in within it, nor we can access that instance. We do not take read access to any sensitive cloud services like secrets manager or SSH keys.

## Billing Access

OpsLyft takes access as well as stores the billing and usage information that the cloud providers provide. It is limited to the permissions which lets us export that data to our own storage accounts. We do not modify the data apart from aggregating it.

## Data Sharing

OpsLyft does not, at any point shares any of the data it has stored regarding infrastructure metadata or billing. The people who can access the data are only trusted engineers at OpsLyft. 
