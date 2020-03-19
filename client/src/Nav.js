import React from 'react';
import { Link } from "react-router-dom";
import swal from 'sweetalert2'
import { useAuth0 } from "./AuthService";
import './RETRO-bootstrap.css'

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function checkAuth() {
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
    })
    if (!isAuthenticated) {
      Toast.fire({
        icon: 'error',
        title: 'not logged in'
      })
    }
  }

  return (
    <div className="bg-dark">
      {!isAuthenticated && <button onClick={() => loginWithRedirect({})}
        className="btn btn-primary">Log in</button>}
      {isAuthenticated && <button onClick={() => logout()} className="btn btn-danger">Log out</button>}
      <span>
        <Link to="/" onClick={() => checkAuth()}>Home</Link>&nbsp;
        <Link to="/profile" onClick={() => checkAuth()}>Profile</Link>
      </span>
    </div>
  );
};

export default NavBar;