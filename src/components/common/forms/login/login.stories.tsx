import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';

import Login from './index';
import { LoginInputs } from './types';

type StoryType = typeof Login;

const meta: Meta<StoryType> = {
  component: Login,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryType>;

export const Base: Story = {
  args: {
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  },
};
