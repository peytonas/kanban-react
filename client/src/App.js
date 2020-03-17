import React, { Component } from 'react';
import Nav from "./Nav";
import { useAuth0 } from "./AuthService";
import './App.css';
import Login from './Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
