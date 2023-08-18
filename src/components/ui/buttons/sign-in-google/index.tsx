'use client';

import { Button, Text } from '@chakra-ui/react';
import Image from 'next/image';

// TO-DO: Implement google sign in authentication method
export default function SignInGoogleButton() {
  return (
    <Button
      w='full'
      variant='outline'
      className='text-white hover:text-black'
      leftIcon={
        <Image
          src='/google-logo.svg'
          alt='Google logo svg'
          width={18}
          height={18}
        />
      }
      onClick={() => {
        alert('WIP - Connection with google');
      }}
    >
      <Text>Sign in with Google</Text>
    </Button>
  );
}

