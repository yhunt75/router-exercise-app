import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";

import UserProfile from "./UserProfile";
import NoMatch from "./NoMatch";
import PostList from './PostList';
import User from './User';


function Home() {
  return <p>Home</p>;
}

function About() {
  return <p>About</p>;
}

function App() {

  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users/:userId">
          <User />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
