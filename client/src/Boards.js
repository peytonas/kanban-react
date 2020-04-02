import React, { Fragment } from "react";
import auth0Client from "./AuthService";
import './Boards.css'

const Boards = () => {
  return (
    <div className="bg-dark text-success">
      <Fragment >
        <img src={auth0Client.getProfile().picture} alt="Profile" />
        <h2>{auth0Client.getProfile().nickname}</h2>
      </Fragment>
    </div>
  );
};

export default Boards;