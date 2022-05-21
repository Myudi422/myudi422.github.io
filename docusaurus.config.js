// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Dester",
  tagline:
    "A lightweight and powerfull media organizer to view your movie or serie library in a goddamn gorgieous way",
  url: "https://dester.ga",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "DesterLib",
  projectName: "Docs",
  deploymentBranch: "gh-pages",
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
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  customFields: {
    logo: {
      light: "img/logo-dark.svg",
      dark: "img/logo.svg",
    },
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "Dester Logo",
          src: "img/logo-small-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Documentation",
          },
          {
            type: "html",
            position: "right",
            value:
              '<a class="navbar-icon" target="_blank" href="https://github.com/DesterLib"><i class="ri-github-line"></i></a>',
          },
          {
            type: "html",
            position: "right",
            value:
              '<a class="navbar-icon" target="_blank" href="https://github.com/DesterLib"><i class="ri-telegram-fill"></i></a>',
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
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/DesterLib",
              },
              {
                label: "GitHub",
                href: "https://github.com/DesterLib",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Dester. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],
};

module.exports = config;
