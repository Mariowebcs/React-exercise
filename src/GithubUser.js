import React from "react";
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
 const {data} = useGithubUser(username);

  return (
    <div>
      <h1>
        {data.name},{data.id}
      </h1>
      <h2>{data.login}</h2>
    </div>
  );
};

export default GithubUser;