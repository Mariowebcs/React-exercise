import {React,useState} from "react";

const useLoginForm = () => {

    const[username,setUsername] = useState("");
    const[password,setPassword] = useState("");

    const changeUsernameHandler = (event) =>{
        setUsername(event.target.value);
    }

    const changePasswordHandler = (event) =>{
        setPassword(event.target.value);
    }


    return {
        username : username,
        password : password,
        onChangeUsername : changeUsernameHandler,
        onChangePassword : changePasswordHandler
    }
} 


export default useLoginForm;