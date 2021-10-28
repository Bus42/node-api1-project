import { Spinner, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import User from './User';

const UsersList = ({ loading, users, setUsers }) => {
  return (
    <>
      <Heading as="h2" fontSize="24" ml={2}>
        Users
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
    </>
  );
};

export default UsersList;
