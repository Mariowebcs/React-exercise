import React from "react";
import { useState } from "react";
import GithubUser from "./GithubUser";

const GithubUserList = () => {
  const [list, setList] = useState([]);
  const [username, setUsername] = useState("");

  const addUsernameHandler = () => {
    if (username.trim() !== "" && !list.includes(username))
      setList((list) => [...list, username]);
    setUsername("");
  };

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={changeUsernameHandler}
      />
      <button onClick={addUsernameHandler}>Add Username</button>

      {!!list.length > 0 &&
        list.map((user, idx) => (
          <li key={idx}>
            <GithubUser username={user} />
          </li>
        ))}
    </div>
  );
};

export default GithubUserList;
