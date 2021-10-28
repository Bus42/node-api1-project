import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './components/User';
import { BASE_URL } from './data';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BASE_URL)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.error(err.message);
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
            <User key={user.id} user={user} setUsers={setUsers} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
