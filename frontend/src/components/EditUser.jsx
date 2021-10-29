import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../data';
import {
  FormLabel,
  Box,
  Input,
  Button,
  ButtonGroup,
  Textarea,
} from '@chakra-ui/react';

const EditUser = ({ user, setEditing, setUsers }) => {
  const initialFormValues = {
    name: user.name,
    bio: user.bio,
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`${BASE_URL}/${user.id}`, formValues)
      .then(res => {
        console.log('user updated: ', res.data);
        axios
          .get(BASE_URL)
          .then(res => setUsers(res.data))
          .catch(err => console.error(err.message));
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {
        setEditing(false);
      });
  };
  const handleDeleteClick = e => {
    e.preventDefault();
    axios
      .delete(`${BASE_URL}/${user.id}`)
      .then(res => {
        console.log('user deleted: ', res.data);
        axios
          .get(BASE_URL)
          .then(res => setUsers(res.data))
          .catch(err => console.error(err.message));
      })
      .catch(err => {
        console.error(err.message);
      })
      .finally(() => {
        setEditing(false);
      });
  };
  const handleCancelClick = e => {
    e.preventDefault();
    setFormValues(initialFormValues);
    setEditing(false);
  };
  return (
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
          Edit Name
          <Input
            type="text"
            name="name"
            placeholder={formValues.name}
            value={formValues.name}
            onChange={handleChange}
          />
        </FormLabel>
        <FormLabel w="100%" htmlFor="bio" textAlign="right">
          Edit Bio
          <Textarea
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
          <Button variant="outline" onClick={handleDeleteClick}>
            Delete
          </Button>
        </ButtonGroup>
      </form>
    </Box>
  );
};

export default EditUser;
