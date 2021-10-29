import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../data';
import {
  FormLabel,
  Box,
  Input,
  Button,
  ButtonGroup,
  Flex,
  Textarea,
} from '@chakra-ui/react';

const AddUser = ({ setUsers }) => {
  const { push } = useHistory();
  const initialFormValues = {
    name: '',
    bio: '',
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post(`${BASE_URL}`, formValues)
      .then(res => {
        axios
          .get(BASE_URL)
          .then(res => setUsers(res.data))
          .catch(err => console.error(err.message));
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {
        push('/');
      });
  };
  const handleCancelClick = e => {
    e.preventDefault();
    setFormValues(initialFormValues);
    push('/');
  };
  return (
    <Flex flexDirection="column" align="center" justifyContent="flex-start">
      <Box
        minW="400px"
        maxW="sm"
        borderWidth="1px"
        mx={1}
        my={2}
        p={1}
        pb={2}
        bg="gray.500"
        textColor="white"
        borderRadius="lg"
        overflow="hidden"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <form action="submit" onSubmit={handleSubmit}>
          <FormLabel w="100%" htmlFor="name" textAlign="right">
            Hero Name
            <Input
              type="text"
              name="name"
              placeholder={formValues.name}
              value={formValues.name}
              onChange={handleChange}
            />
          </FormLabel>
          <FormLabel w="100%" htmlFor="bio" textAlign="right">
            Add Bio
            <Textarea
              name="bio"
              placeholder={formValues.bio}
              value={formValues.bio}
              onChange={handleChange}
            />
          </FormLabel>
          <ButtonGroup display="flex" justifyContent="space-between">
            <Button variant="outline" type="submit">
              Submit
            </Button>
            <Button variant="outline" onClick={handleCancelClick}>
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </Box>
    </Flex>
  );
};

export default AddUser;
