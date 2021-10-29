import { Spinner, Heading, Flex, Box } from '@chakra-ui/react';
import React from 'react';
import User from './User';

const UsersList = ({ loading, users, setUsers }) => {
  return (
    <Box>
      <Heading textAlign="center" as="h2" p={4} fontSize="24" bg={'gray.500'} color={"white"} >
        Heroes
      </Heading>
      {loading ? (
        <Flex align="center" justify="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Flex>
      ) : (
        <Flex flexDirection="column" align="center" justifyContent="flex-start">
          {users.map(user => (
            <User key={user.id} user={user} setUsers={setUsers} />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default UsersList;
