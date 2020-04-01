import React, { Fragment } from "react";
import auth0Client from "./AuthService";
import './profile.css'

const Profile = () => {
  return (
    <div className="bg-dark text-success">
      <Fragment >
        <img src={auth0Client.getProfile().picture} alt="Profile" />
        <h2>{auth0Client.getProfile().name}</h2>
      </Fragment>
    </div>
  );
};

export default Profile;