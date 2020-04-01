import React, { Component } from 'react';
import NavBar from './Nav';
import Profile from './Profile';
import SecuredRoute from './SecuredRoute';
import Callback from './Callback';
import { Route, withRouter } from 'react-router-dom';
import auth0Client from './AuthService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkingSession: true,
    }
  }
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') {
      this.setState({ checkingSession: false });
      return;
    };
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
    this.setState({ checkingSession: false });
  }
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/callback' component={Callback} />
        <SecuredRoute path='/profile'
          component={Profile}
          checkingSession={this.state.checkingSession} />
      </div>
    );
  }
}

export default withRouter(App);