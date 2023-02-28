import React ,{useState,useEffect} from "react";
const useGithubUser = (username) => {

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

    return{
        data : data
    }
}

export default useGithubUser;