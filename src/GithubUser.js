import React, { useEffect, useState } from "react";

const GithubUser = ({ username }) => {
  const [data, setData] = useState({});

  async function getData(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData(username);
  }, [username]);

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
