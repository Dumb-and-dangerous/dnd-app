import '../src/app/globals.css';
import type { Preview } from '@storybook/react';

import { withChakra } from './chackra';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [withChakra],
};

export default preview;
