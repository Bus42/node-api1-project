import React, { useState } from 'react';
import EditUser from './EditUser';

const User = ({ user, setUsers }) => {
  const [editing, setEditing] = useState(false);

  const handleEditClick = () => {
    setEditing(true);
  };

  return editing ? (
    <li>
      <EditUser user={user} setEditing={setEditing} setUsers={setUsers} />
    </li>
  ) : (
    <li>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <button onClick={handleEditClick}>Edit</button>
    </li>
  );
};

export default User;
