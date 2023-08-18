'use client';

import { Button } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import SignInGoogleButton from '@/components/ui/buttons/sign-in-google';
import ControlledInput from '@/components/ui/inputs/controlled';

import { LoginFormType } from './types';

// TO-DO: Remove this when full integrated
function onSubmit(values: any) {
  return new Promise((resolve: any) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resolve();
    }, 3000);
  });
}

export default function LoginForm() {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<LoginFormType>();

  return (
    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
      <ControlledInput control={control} name='email' label='Email' />
      <ControlledInput control={control} name='password' label='Password' />
      <Button w='full' isLoading={isSubmitting} type='submit'>
        Submit
      </Button>
      <SignInGoogleButton />
    </form>
  );
}

