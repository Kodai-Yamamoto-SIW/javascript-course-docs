import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: '基礎',
      items: [
        'basics/introduction',
        'basics/function-intro',
        'basics/function-return',
        'basics/object-intro',
        'basics/array-intro',
        'basics/array-methods',
        'basics/dom-css',
        'basics/dom-innertext',
        'basics/dom-events',
        'basics/dom-css-transition',
        'basics/dom-css-class-transition',
      ],
    },
    {
      type: 'category',
      label: 'UIコンポーネント',
      items: [
        'ui-components/slider_swiper',
        'ui-components/accordion-menu_jquery-slidetoggle',
        'ui-components/drawer-menu',
        'ui-components/dropdown-menu',
        'ui-components/modal_magnific-popup',
      ],
    },
  ],
};

export default sidebars;
