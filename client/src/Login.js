import React, { useState, useEffect, Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom'

let loginForm;
// let creds;
// let newUser;

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
    console.log(this.state.loginForm);
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
    if (loginForm) {
      return (
        <div>
          <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Login</button>
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
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button>Create Account</button>
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
      this.checkUser()
    )
  }
}

export default Login;