import React from 'react';
import {useState} from 'react';

const Login = (props) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [remember,setRemember] = useState(false);

    const changeUsernameHandler = (event) => {
        setUsername(event.target.value);
    }
    const changePasswordHandler = (event) =>{
        setPassword(event.target.value);
    }
    const changeRememberHandler = (event) => {
        setRemember(event.target.checked);
    }

    const onSubmitHandler = (event) =>{
        event.preventDefault()
        const loginData = {
            username : username,
            password : password,
            remember : remember
        }
        props.onLogin(loginData)
        setUsername('')
        setPassword('')
        setRemember(false)
    }

    return(
        <form action="" onSubmit={onSubmitHandler}>
            <input type="text" required onChange={changeUsernameHandler} value={username}/>
            <input type="password" required onChange={changePasswordHandler} value={password}/>
            <input type="checkbox" onChange={changeRememberHandler} checked={remember} />
            <button disabled={username.trim()==="" || password.trim()===""}>Login</button>
        </form>
    )
}; 

export default Login;