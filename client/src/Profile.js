import React, { Fragment } from "react";
import { useAuth0 } from "./AuthService";
import './profile.css'

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div></div>;
  }

  return (
    <div className="bg-light">
      <Fragment >
        <img className="mt-2" src={user.picture} alt="Profile" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </Fragment>
    </div>
  );
};

export default Profile;