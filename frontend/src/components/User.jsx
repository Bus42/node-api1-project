import React, { useState } from 'react';
import EditUser from './EditUser';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import OutsideClickHandler from 'react-outside-click-handler';

const User = ({ user, setUsers }) => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleOutsideClick = () => {
    setEditing(false);
  };

  return editing ? (
    <OutsideClickHandler onOutsideClick={handleOutsideClick}>
      <EditUser user={user} setEditing={setEditing} setUsers={setUsers} />
    </OutsideClickHandler>
  ) : (
    <Box
      minW="400px"
      maxW="sm"
      borderWidth="1px"
      mx={1}
      my={2}
      p={1}
      bg="gray.500"
      textColor="white"
      borderRadius="lg"
      overflow="hidden"
    >
      <Heading textAlign="center" as="h3">
        {user.name}
      </Heading>
      <Text mx={1} my={2}>
        {user.bio}
      </Text>
      <Flex align="center" justify="flex-end">
        <Button
          bg="gray.500"
          _hover={{ bg: 'gray.600' }}
          onClick={handleEditClick}
        >
          Edit
        </Button>
      </Flex>
    </Box>
  );
};

export default User;
