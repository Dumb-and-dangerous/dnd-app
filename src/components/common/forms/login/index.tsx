'use client';

import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import SignInGoogleButton from '@/components/ui/buttons/sign-in-google';
import ControlledInput from '@/components/ui/inputs/controlled';

import { LoginFormProps, LoginInputs } from './types';

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<LoginInputs>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput
        control={control}
        name='email'
        label='Email'
        rules={{ required: 'This field is required' }}
      />
      <ControlledInput
        control={control}
        name='password'
        label='Password'
        rules={{ required: 'This field is required' }}
      />
      <Button w='full' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
      <SignInGoogleButton />
    </form>
  );
}
