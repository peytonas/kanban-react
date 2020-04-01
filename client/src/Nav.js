import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from './AuthService';
import './Nav.css'

function NavBar(props) {
  const signOut = () => {
    auth0Client.signOut();
    props.history.replace('/');
  };

  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand text-dark" to="/">
        KANBAN
      </Link>
      {
        !auth0Client.isAuthenticated() &&
        <button className="btn btn-secondary" onClick={auth0Client.signIn}>Sign In</button>
      }
      {
        auth0Client.isAuthenticated() &&
        <div>
          <Link className="navbar-brand" to="/profile">
            <label className="mr-2 text-dark mt-1">{auth0Client.getProfile().name + "'s boards"}</label>
          </Link>
          <button className="btn btn-danger" onClick={() => { signOut() }}>Sign Out</button>
        </div>
      }
    </nav>
  );
}

export default withRouter(NavBar);