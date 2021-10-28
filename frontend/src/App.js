import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './data';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { ChakraProvider } from '@chakra-ui/react';
import AppHeader from './components/AppHeader';

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
      <Router>
        <ChakraProvider>
          <AppHeader />
          <Switch>
            <Route path="/addUser">
              <AddUser setUsers={setUsers} />
            </Route>
            <Route path="/">
              <UsersList loading={loading} users={users} setUsers={setUsers} />
            </Route>
          </Switch>
        </ChakraProvider>
      </Router>
    </div>
  );
};

export default App;
