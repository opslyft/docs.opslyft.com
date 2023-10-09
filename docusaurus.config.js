// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "OpsLyft Documentation",
  tagline: "",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.opslyft.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "opslyft", // Usually your GitHub org/user name.
  projectName: "docs.opslyft.com", // Usually your repo name.
  deploymentBranch: "ph-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
        indexBlog: false,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/opslyft-social-card.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "",
        logo: {
          alt: "OpsLyft Logo",
          src: "img/logo.svg",
          href: "https://opslyft.com",
          target: "_self",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Connect Providers",
                to: "/get-started/connect-providers",
              },
              {
                label: "Onboarding",
                to: "/get-started/onboarding",
              },
            ],
          },
          {
            title: "Integrations",
            items: [
              {
                label: "AWS",
                to: "/get-started/integrations/aws/setup-aws",
              },
              {
                label: "Azure",
                to: "/integrations/azure",
              },
              {
                label: "GCP",
                to: "/integrations/gcp/setup-gcp",
              },
              {
                label: "Kubernetes",
                to: "/integrations/kubernetes",
              },
              {
                label: "Snowflake",
                to: "/integrations/snowflake",
              },
            ],
          },
          {
            title: "Features",
            items: [
              {
                label: "Cost Explorer ++",
                to: "/features/cost-explorer",
              },
              {
                label: "Showback",
                to: "/features/showback-&-cost-allocation",
              },
              {
                label: "CSI",
                to: "/features/cost-optimization-guide/csi",
              },
              {
                label: "Instance Scheduler",
                to: "/features/cost-optimization-guide/instance-scheduler",
              },
              {
                label: "Asset Management",
                to: "/features/asset-management",
              },
              {
                label: "Reporting & Alerting",
                to: "/features/reporting-&-alerting",
              },
              {
                label: "Budget Management",
                to: "/features/budget-management",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://opslyftcommunity.slack.com/join/shared_invite/zt-21ed0evj5-PynpSSpPw7KfKl9yHzX7nw",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/opslyft",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/opslyft",
              },
              {
                label: "Facebook",
                href: "https://facebook.com/opslyft",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/",
              },
              {
                label: "GitHub",
                href: "https://github.com/opslyft/docs.opslyft.com",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpsLyft, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
