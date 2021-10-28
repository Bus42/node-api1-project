import React from 'react';
import { Link } from 'react-router-dom';
import { chakra, Flex, Box, Button, Heading } from '@chakra-ui/react';

const AppHeader = () => {
  return (
    <chakra.header mt={2} mb={4} >
      <Flex align="center" justify="space-between">
        <Box textAlign="center" w="80%">
          <Heading as="h1" fontSize={32}>Node API 1 Project</Heading>
        </Box>
        <Link to="/adduser">
          <Button
            mr="2"
            px="3"
            py="2"
            bg="green.200"
            rounded="md"
            _hover={{ bg: 'green.300' }}
          >
            Add User
          </Button>
        </Link>
      </Flex>
    </chakra.header>
  );
};

export default AppHeader;
