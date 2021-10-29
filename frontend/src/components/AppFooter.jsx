import React from 'react';
import { chakra, Flex, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const AppFooter = () => {
  return (
    <chakra.header
      pt="1em"
      pb="2em"
      px="1em"
      bg={'gray.800'}
      color="whiteAlpha.900"
    >
      <Flex align="center" justify="flex-end">
        Built for{' '}
        <Link ml={1} href="http://lambdaschool.com/" isExternal>
          Lambda School
        </Link>
        <ExternalLinkIcon mx="2px" /> using
        <Link ml={1} href="https://chakra-ui.com" isExternal>
          Chakra UI
        </Link>
        <ExternalLinkIcon mx="2px" />
      </Flex>
    </chakra.header>
  );
};

export default AppFooter;
