---
sidebar_position: 5
---

# Snowflake

Integrating your Snowflake account with OpsLyft to gain insights into data usage and billing is a straightforward process. Begin by creating an OpsLyft role with permissions equivalent to an Account Admin. Then, specify user details such as a password and warehouse. Next, set up an OpsLyft user account connected to this role. Finally, provide your Snowflake Account ID, Organization ID, and, if applicable, the custom cost per credit.

### 1. Create a New Role

The first step involves accessing your Snowflake billing account with administrative privileges. In Snowflake, the billing account contains an internal database where essential data is stored. We request access to this database. To achieve this, log in to your Snowflake account with an admin role and create a new worksheet. Execute a specific set of SQL queries in Snowflake's worksheets, culminating in the creation of a new role dedicated to monitoring Snowflake usage: OPSLYFT.

```shell
use role ACCOUNTADMIN:
create role OPSLYFT:
```

### 2. Grant Permissions to the OpsLyft Role

Provide the OpsLyft role with the same permissions as the Account Admin role for the Snowflake database. This grants us read access to crucial data, including billing information, historical records, usage statistics, event history, and charging data, by requesting access to the existing Snowflake database.

You can refer to the Snowflake Documentation for more information [link](https://docs.snowflake.com/en/sql-reference/snowflake-db)

### 3. Specify User Details

After creating the role and establishing its permissions, we proceed to create a user within your Snowflake account. You provide us with a password and the name of a warehouse to run our queries. You have the flexibility to select a warehouse of your choice.

### 4. Create the OpsLyft User

This step involves the creation of an OpsLyft user account with the provided password and warehouse name. The OpsLyft User utilizes the OPSLYFT role to query data from the Snowflake database, specifically from the `ACCOUNT_USAGE` schema where billing and usage data resides.

```shell
create user OPSLYFT_USER
LOGIN_NAME = OPSLYFT_USER
password = '428ni%$nfcqilnf9enq'
default_warehouse = war-85poc
default_role = OPSLYFT
default_namespace = SNOWFLAKE.ACCOUNT_USAGE;
```

### 5. Grant Role to the New User

We grant the OpsLyft user the OPSLYFT role which was previously created with all the necessary permissions.

### 6. Enter Account & Billing Details

To complete the integration, we require your Snowflake Account ID and Organization ID. Additionally, we may request the cost per credit, particularly if you have a custom pricing arrangement with Snowflake.

We verify the connection to your Snowflake account using the provided credentials and account details. If we can successfully retrieve data, the integration is considered successful. Otherwise, we provide specific error messages to assist in resolving any integration issues.

:::note

- The Snowflake database serves as the internal repository for your data.
- The `ACCOUNT_USAGE` schema contains virtual tables that OpsLyft queries to fetch relevant data.
- Please be assured that OpsLyft operates as a read-only entity, ensuring data integrity.

:::

For further inquiries, detailed assistance, or to address any concerns, please do not hesitate to contact our dedicated support team. Please reach out to us contact@opslyft.com
