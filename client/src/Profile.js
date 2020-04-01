import React, { Fragment } from "react";
import auth0Client from "./AuthService";
import './profile.css'

const Profile = () => {
  return (
    <div className="bg-light">
      <Fragment >
        <img className="mt-2" src={auth0Client.getProfile().picture} alt="Profile" />
        <h2>{auth0Client.getProfile().name}</h2>
        <p>{auth0Client.getProfile().email}</p>
      </Fragment>
    </div>
  );
};

export default Profile;