import React, { Component } from 'react';
import Nav from "./Nav";
import { useAuth0 } from "./AuthService";
import './App.css';
import Profile from './Home'
import history from "./utils/history";
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router
      // @ts-ignore
      history={history}>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
