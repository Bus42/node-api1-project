import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './data';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';

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
    <Router>
      <div data-testid="app-wrapper">
        <header>
          <h1>Node API 1 Project</h1>
        </header>
        <button>
          <Link to="/adduser">Add User</Link>
        </button>
        <Switch>
          <Route path="/addUser">
            <AddUser setUsers={setUsers} />
          </Route>
          <Route path="/">
            <UsersList loading={loading} users={users} setUsers={setUsers} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
