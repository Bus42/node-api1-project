import React, { useState } from 'react';
import EditUser from './EditUser';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';

const User = ({ user, setUsers }) => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  return editing ? (
    <EditUser user={user} setEditing={setEditing} setUsers={setUsers} />
  ) : (
    // <>
    //   <h2>{user.name}</h2>
    //   <p>{user.bio}</p>
    //   <button onClick={handleEditClick}>Edit</button>
    // </>
    <Box maxW="sm" borderWidth="1px" mx={1} my={2} p={1} bg="blue.300" textColor="white" borderRadius="lg" overflow="hidden">
      <Heading textAlign="center" as="h3">{user.name}</Heading>
      <Text mx={1} my={2} >{user.bio}</Text>
      <Flex align="center" justify="flex-end">
        <Button bg="blue.200" _hover={{bg: "white", color: "tomato"}} onClick={handleEditClick}>Edit</Button>
      </Flex>
    </Box>
  );
};

export default User;
