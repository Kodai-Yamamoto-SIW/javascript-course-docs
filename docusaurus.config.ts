import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'JavaScript 演習',
  tagline: 'JavaScriptの基礎から実践まで',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Production site URL (GitHub Pages)
  url: 'https://kodai-yamamoto-siw.github.io',
  // For GitHub Pages, set to '/<projectName>/'
  baseUrl: '/javascript-course-docs/',

  // GitHub Pages deployment config
  organizationName: 'Kodai-Yamamoto-SIW', // GitHub org/user name
  projectName: 'javascript-course-docs', // Repo name
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Internationalization
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Remove edit links for now
          editUrl: undefined,
        },
        // Disable blog for this course site
        blog: false,
        // Ensure pages routed at root
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'JavaScript 演習',
      logo: {
        alt: 'JavaScript 演習 Logo',
        src: 'img/logo.svg',
      },
      hideOnScroll: false,
      items: [
        { type: 'docSidebar', sidebarId: 'mainSidebar', position: 'left', label: 'チュートリアル' },
        { href: 'https://github.com/Kodai-Yamamoto-SIW/javascript-course-docs', label: 'GitHub', position: 'right' },
      ],
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} さいたまIT・WEB専門学校`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['markup', 'css', 'javascript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
