import type { Meta, StoryObj } from '@storybook/react';

import SignInGoogleButton from './index';

type StoryType = typeof SignInGoogleButton;

const meta: Meta<StoryType> = {
  component: SignInGoogleButton,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryType>;

export const Base: Story = {
  args: {},
};
