import React, { createContext } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdminPanel from "./Components/AdminPanel/AdminPanel";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Blog from "./Components/Blog/Blog";
import Donation from "./Components/Donation/Donation";
import Events from "./Components/Events/Events";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./Context/AuthContext";

export const UserContext = createContext();

function App() {

  return (
    <AuthProvider>
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
            <Route path="/events">
              <Events></Events>
            </Route>
            <Route path="/blog">
              <Blog></Blog>
            </Route>
            <Route path="/donation">
              <Donation></Donation>
            </Route>
            <PrivateRoute path="/adminpanel">
              <AdminPanel/>
            </PrivateRoute>
          </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
