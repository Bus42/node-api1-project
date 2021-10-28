import { Spinner, chakra, Flex } from '@chakra-ui/react';
import React from 'react';
import User from './User';

const UsersList = ({ loading, users, setUsers }) => {
  return (
    <>
      <chakra.h2 fontSize="24" ml={2}>
        Users
      </chakra.h2>
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
        <>
          {users.map(user => (
            <User key={user.id} user={user} setUsers={setUsers} />
          ))}
        </>
      )}
    </>
  );
};

export default UsersList;
