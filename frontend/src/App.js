import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4280/api/users')
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div data-testid="app-wrapper">
      <h1>Node API 1 Project</h1>
      <h2>Users</h2>
      {loading ? (
        <div className="loading">...loading</div>
      ) : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
