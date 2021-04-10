import React, { createContext, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
          </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
