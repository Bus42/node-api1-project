import React from 'react';
import { Link } from 'react-router-dom';
import { chakra, Flex, Box } from '@chakra-ui/react';

const AppHeader = () => {
  return (
    <chakra.header>
      <Flex align="center" justify="space-between">
        <Box textAlign="center" w="80%">
          <chakra.h1 fontSize={32}>Node API 1 Project</chakra.h1>
        </Box>
        <Link to="/adduser">
          <chakra.button
            mr="2"
            px="3"
            py="2"
            bg="green.200"
            rounded="md"
            _hover={{ bg: 'green.300' }}
          >
            Add User
          </chakra.button>
        </Link>
      </Flex>
    </chakra.header>
  );
};

export default AppHeader;
