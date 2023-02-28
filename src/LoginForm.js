import React from "react";
import useLoginForm from "./useLoginForm";

const LoginForm = () => {
    const {username,password,onChangeUsername,onChangePassword} = useLoginForm();

    const clickHandler = () => {
        console.log(username,password);
    }

  return (
    <div>
      <input type="text" name="username" value={username} onChange={onChangeUsername}/>
      <input type="password" name="password" value={password} onChange={onChangePassword} />
      <button onClick={clickHandler}>show data</button>
    </div>
  );
}

export default LoginForm;
