import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from './data';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { ChakraProvider, chakra, Flex, Box } from '@chakra-ui/react';

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
      <ChakraProvider>
        <div data-testid="app-wrapper">
          <chakra.header>
            <Flex align="center" justify="space-between">
              <Box textAlign="center" w="80%" >
                <chakra.h1 fontSize={32}>Node API 1 Project</chakra.h1>
              </Box>
              <Link to="/adduser">
                <chakra.button
                  mr="2"
                  px="3"
                  py="2"
                  bg="green.200"
                  rounded="md"
                  _hover={{ bg: 'green.300' }}
                >
                  Add User
                </chakra.button>
              </Link>
            </Flex>
          </chakra.header>
          <Switch>
            <Route path="/addUser">
              <AddUser setUsers={setUsers} />
            </Route>
            <Route path="/">
              <UsersList loading={loading} users={users} setUsers={setUsers} />
            </Route>
          </Switch>
        </div>
      </ChakraProvider>
    </Router>
  );
};

export default App;
