import type { Meta, StoryObj } from '@storybook/react';

import Login from './index';

type StoryType = typeof Login;

const meta: Meta<StoryType> = {
  component: Login,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryType>;

export const Base: Story = {
  args: {},
};
