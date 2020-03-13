import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'

function Nav() {
  const navStyle = {
    color: 'white'
  }
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
      </ul>
    </nav>
  );
}

export default Nav;