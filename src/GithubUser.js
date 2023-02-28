import React from "react";
import useGithubUser from "./useGithubUser";

const GithubUser = ({ username }) => {
 const {data,error,loading,fetchGithubUser} = useGithubUser(username);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading &&<h1>{data.name},{data.id}</h1> }
      {!loading && <h2>{data.login}</h2> }
      
    </div>
  );
};

export default GithubUser;