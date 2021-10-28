import React from 'react';
import User from './User';

const UsersList = ({ loading, users }) => {
  return (
    <>
      <h2>Users</h2>
      {loading ? (
        <div className="loading">...loading</div>
      ) : (
        <ul>
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      )}
    </>
  );
};

export default UsersList;
