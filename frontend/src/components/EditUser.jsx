import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../data';

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
    })
    .catch(err => {
        console.error(err.message);
    })
    .finally(() => {
        window.location.reload();
        setEditing(false);
      });
  };
  return (
    <form action="submit" onSubmit={handleSubmit}>
      <label htmlFor="name">
        Edit name
        <input
          type="text"
          name="name"
          placeholder={formValues.name}
          value={formValues.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="bio">
        Edit bio
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

export default EditUser;
