import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';

import customTheme from '../src/config/theme';

export const withChakra = (StoryFn) => {
  return (
    <ChakraProvider theme={customTheme}>
      <StoryFn />
    </ChakraProvider>
  );
};

