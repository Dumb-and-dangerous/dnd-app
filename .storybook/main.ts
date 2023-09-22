import type { StorybookConfig } from '@storybook/nextjs';
import * as path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  webpackFinal: async (config, { configType }) => {
    if (config?.resolve?.alias) {
      config.resolve.alias = {
        ...config?.resolve?.alias,
        '@': path.resolve(__dirname, '../src/'),
        '@emotion/core': path.resolve(
          __dirname,
          '../node_modules/@emotion/react'
        ),
        'emotion-theming': path.resolve(
          __dirname,
          '../node_modules/@emotion/react'
        ),
        '@emotion/styled': path.resolve(
          __dirname,
          '../node_modules/@emotion/styled'
        ),
      };
    }

    config?.module?.rules?.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });

    return config;
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  docs: {
    autodocs: 'tag',
  },
};

export default config;
