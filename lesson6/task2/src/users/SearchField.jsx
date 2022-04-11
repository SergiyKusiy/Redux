import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as usersActions from "./users.actions";

const SearchField = ({ fetchUserData }) => {
  const [userName, setUserName] = useState("");

  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="name-form__btn btn" onClick={() => {
          fetchUserData(userName);
        }}
      >
        Show
      </button>
    </div>
  );
};

const mapDispatch = {
  fetchUserData: usersActions.fetchUserData,
};

const connector = connect(null, mapDispatch);
export default connector(SearchField);