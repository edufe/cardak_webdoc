/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Descripcion',
      items: [
        'descripcion/primeros-pasos',
        'descripcion/caracteristicas',
        'descripcion/cli',
        'descripcion/tui',
      ],
    },
    {
      type: 'category',
      label: 'Casos de Uso',
      items: ['casos-de-uso'],
    },
    {
      type: 'category',
      label: 'Comandos',
      items: [
        'comandos/about',
        'comandos/chop',
        'comandos/convert',
        'comandos/create',
        'comandos/delete',
        'comandos/describe',
        'comandos/distribute',
        'comandos/duplicates',
        'comandos/export',
        'comandos/filter',
        'comandos/fix',
        'comandos/grep',
        'comandos/identify',
        'comandos/import',
        'comandos/join',
        'comandos/open',
        'comandos/print',
        'comandos/replace',
        'comandos/split',
        'comandos/validate',
      ],
    },
    {
      type: 'category',
      label: 'CLI - Linea de comandos',
      items: ['flags-filtros'],
    },
    {
      type: 'category',
      label: 'TUI - Interfaz de Usuario',
      items: ['tui'],
    },
  ],
};

export default sidebars;