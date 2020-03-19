import React, { Fragment } from "react";
import { useAuth0 } from "./AuthService";
import './profile.css'

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div></div>;
  }

  return (
    <Fragment>
      <img src={user.picture} alt="Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </Fragment>
  );
};

export default Profile;