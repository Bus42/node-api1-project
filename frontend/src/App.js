import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './data';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { Box, ChakraProvider } from '@chakra-ui/react';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
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
    }, 1000);
  }, []);

  return (
    <Router>
      <ChakraProvider>
        <Box bg={'gray.400'} minHeight="100vh">
          <AppHeader />
          <Switch>
            <Route path="/addUser">
              <AddUser setUsers={setUsers} />
            </Route>
            <Route path="/">
              <UsersList loading={loading} users={users} setUsers={setUsers} />
            </Route>
          </Switch>
        </Box>
        <AppFooter />
      </ChakraProvider>
    </Router>
  );
};

export default App;
