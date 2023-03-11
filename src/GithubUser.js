import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GithubUser = () => {
  const [data, setData] = useState(null);
  let {username} = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const json = await response.json();
      setData(json);
    };

    getData();
  }, [username]);

  return (
    <div>
      <h1>
        {data.name}
      </h1>
      <h2>{data.login}</h2>
    </div>
  );
};

export default GithubUser;
