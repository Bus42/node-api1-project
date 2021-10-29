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
  FormErrorMessage,
} from '@chakra-ui/react';

const AddUser = ({ setUsers }) => {
  const { push } = useHistory();
  const initialFormValues = {
    name: '',
    bio: '',
    errors: [],
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = e => {
    if (!formValues.name) {
      setFormValues({
        ...formValues,
        errors: [...formValues.errors, "Please enter your hero's name"],
      });
    }
    if (!formValues.bio) {
      setFormValues({
        ...formValues,
        errors: [
          ...formValues.errors,
          'Please enter a short bio for your hero',
        ],
      });
    }
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
              isRequired
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
              isRequired
              name="bio"
              placeholder={formValues.bio}
              value={formValues.bio}
              onChange={handleChange}
            />
          </FormLabel>
          <ButtonGroup display="flex" justifyContent="space-between">
            <Button
              variant="outline"
              type="submit"
              disabled={formValues === initialFormValues}
            >
              Submit
            </Button>
            <Button variant="outline" onClick={handleCancelClick}>
              Cancel
            </Button>
          </ButtonGroup>
          {formValues.errors.length > 0 &&
            formValues.errors.map((error, index) => (
              <FormErrorMessage key={index}>{error}</FormErrorMessage>
            ))}
        </form>
      </Box>
    </Flex>
  );
};

export default AddUser;
