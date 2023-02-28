import React ,{useState,useEffect} from "react";
const useGithubUser = (username) => {

    const [data, setData] = useState({});
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)

    async function getData(username) {
      try {
        setLoading(true)
        const response = await fetch(`https://api.github.com/users/${username}`);
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error)
      }finally{
        setLoading(false)
      }
    }
  
    useEffect(() => {
      getData(username);
    }, [username]);

    return{
        data : data,
        fetchGithubUser : getData,
        error : error,
        loading : loading
    }
}

export default useGithubUser;