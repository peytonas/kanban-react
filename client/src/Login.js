import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import './RETRO-bootstrap.css'

class Login extends Component {
  state = {
    loginForm: true,
    creds: {
      email: "",
      password: ""
    },
    newUser: {
      email: "",
      password: "",
      name: ""
    }
  }

  flipLoginForm() {
    if (this.state.loginForm) {
      this.setState({
        loginForm: false
      })
    } else {
      this.setState({
        loginForm: true
      })
    }
  }

  checkUser() {
    if (this.state.loginForm) {
      return (
        <div>
          <form>
            <input className="mt-1" type="email" placeholder="email" />
            <input className="mt-1" type="password" placeholder="password" />
            <button className="btn btn-secondary mt-1">Login</button>
          </form >
          <div onClick={this.flipLoginForm.bind(this)}>
            <p>
              <b>No account? Click here to Register</b>
            </p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <form>
            <input className="mt-1" type="text" placeholder="name" />
            <input className="mt-1" type="email" placeholder="email" />
            <input className="mt-1" type="password" placeholder="password" />
            <button className="btn btn-secondary mt-1">Create Account</button>
          </form >
          <div onClick={this.flipLoginForm.bind(this)}>
            <p>
              <b>Already have an account? Click here to Login</b>
            </p>
          </div>
        </div>
      )
    }
  }

  render() {
    return (
      <div>{this.checkUser()}</div>
    )
  }
}

export default Login;