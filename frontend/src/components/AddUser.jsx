import React, { useState } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import { BASE_URL } from '../data';

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
        console.log('user added: ', res.data);
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
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="name">
        User name
        <input
          type="text"
          name="name"
          placeholder={formValues.name}
          value={formValues.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="bio">
        User bio
        <input
          type="text"
          name="bio"
          placeholder={formValues.bio}
          value={formValues.bio}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUser;
