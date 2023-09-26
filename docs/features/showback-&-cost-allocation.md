---
sidebar_position: 3
pagination_next: features/cost-optimization-guide/csi
---

# Showback & Cost Allocation

Showback is a powerful tool designed to help you allocate costs to specific business units or teams within your organization, providing clear insights into operational expenses and revenue generation. This section will guide you through Showback's capabilities and how it can enhance cost visibility and financial management within your organization.

## Showback: Addressing Cloud Cost Challenges

Showback addresses a common challenge faced by organizations using cloud providers such as AWS, GCP, and Azure. These providers often have limitations in their native tagging and labeling methods, making it difficult to effectively track expenses across different business units. Showback offers a solution by allowing you to logically group cloud expenses and gain a comprehensive view of your organization's expenditures.

## Understanding Showback

OpsLyft's Showback Visibility feature introduces the concept of virtual labels. These virtual labels serve as a bridge, enabling you to allocate costs across various resources that you wish to group together for better cost visibility. This functionality goes beyond what is typically offered by cloud providers like AWS, GCP, and Azure.

## Step-by-Step Guide

Let's explore the step-by-step process of utilizing Showback Visibility:

### Step 1: Project Selection

- Begin by selecting the specific projects for which you want to allocate costs.
- OpsLyft provides an intuitive filtering system accessible through the sidebar on the right-hand side of the page.

### Step 2: Creating Cost Allocation Rules

- Click on the "+Create New" button located at the top right corner of the page to initiate the creation of cost allocation rules.
- A modal window will appear, allowing you to define these rules.
- Choose the dimensions across which you want to allocate cost data, which could include organization, project, region, service, and more.
- For more flexibility, you can create custom "virtual labels" to group resources according to your organizational structure.
- Define the start and end dates for your cost allocation.
- Assign a name to your cost allocation rule.

### Step 3: Allocation Rule Setup

- In this step, you'll set allocation percentages for the selected sub-values within your virtual label.
- For example, you can allocate 50% of the cost to the Marketing sub-value, 20% to the Product sub-value, and 30% to the Engineering sub-value.
- Once your allocation rule is configured, click "Create." This action will successfully allocate costs to all sub-values based on your specified rules.
- You can repeat this process to create multiple virtual labels, further enhancing visibility and grouping to better understand your business unit expenses.

Showback allows organizations to transform complex cloud cost data into actionable insights. It facilitates informed decision-making and financial transparency, allowing for more efficient cost management and allocation within your organization.
