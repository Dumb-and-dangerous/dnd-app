import type { Meta, StoryObj } from '@storybook/react';
import { useForm } from 'react-hook-form';

import ControlledInput from './index';

type SampleForm = { email: string };
type StoryType = typeof ControlledInput<SampleForm>;

const meta: Meta<StoryType> = {
  component: ControlledInput,
  tags: ['autodocs'],
  decorators: [
    function SampleForm(Story, ctx) {
      const { handleSubmit, control } = useForm<SampleForm>({
        defaultValues: {
          email: ctx.args.defaultValue || '',
        },
        mode: 'all',
      });

      return (
        <form
          className='space-y-4'
          onSubmit={handleSubmit(
            (value: SampleForm) => console.log(value),
            (error) => console.log('error', error)
          )}
        >
          <Story
            args={{
              ...ctx.args,
              control,
            }}
          />
        </form>
      );
    },
  ],

  argTypes: {},
};

export default meta;

type Story = StoryObj<StoryType>;

export const Base: Story = {
  args: {
    name: 'email',
    label: 'Email',
    rules: {
      required: 'This field is required',
      maxLength: {
        value: 5,
        message: 'This field has a max length of 5 chars',
      },
    },
    placeholder: 'Write your email',
  },
};
