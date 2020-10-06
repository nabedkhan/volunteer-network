import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import VolunteerForm from './components/VolunteerForm/VolunteerForm';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Tasks from './components/Tasks/Tasks';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }} className="App">
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/volunteer/:id">
            <VolunteerForm />
          </PrivateRoute>
          <PrivateRoute path="/tasks">
            <Tasks />
          </PrivateRoute>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
