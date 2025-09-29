import { Config } from '@docusaurus/types';
import { themes } from 'prism-react-renderer';

const config: Config = {
  title: 'KaloriSayar Docs',
  tagline: 'Architecture, runbooks, and API references',
  url: 'https://kalorisayar.local',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'KaloriSayar',
  projectName: 'docs',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'tr'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://example.com',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/og.png',
    navbar: {
      title: 'KaloriSayar',
      logo: {
        alt: 'KaloriSayar logo',
        src: 'img/logo.svg',
      },
      items: [{ to: '/docs/intro', label: 'Docs', position: 'left' }],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  },
};

export default config;
