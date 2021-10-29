import React from 'react';
import { chakra, Flex } from '@chakra-ui/react';

const AppFooter = () => {
  return (
    <chakra.header pt="1em" pb="2em" px="1em" bg={'gray.800'} color="whiteAlpha.900">
      <Flex align="center" justify="flex-end">
          Built for Lambda School using Chakra UI
      </Flex>
    </chakra.header>
  );
};

export default AppFooter;