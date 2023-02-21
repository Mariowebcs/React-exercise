import React from "react";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    rememberMe: false,
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  changeCheckBoxHandler = (event) => {
    this.setState({ rememberMe: event.target.value });
  };

  clickHandler = () => {
    const loginData = {
      email: this.state.email,
      password: this.state.password,
      rememberMe: this.state.rememberMe,
    };
    this.props.onLogin(loginData);
  };

  render() {
    return (
      <div>
        <label htmlFor="emailInput">Email : </label>
        <input
          type="email"
          id="email-Input"
          name="email"
          onChange={this.changeEmailHandler}
          value={this.state.email}
        />
        <label htmlFor="passInput">Password : </label>
        <input
          type="password"
          id="passInput"
          name="password"
          onChange={this.changePasswordHandler}
          value={this.state.password}
        />
        <label htmlFor="rememberMe">Ricordami</label>
        <input
          type="checkbox"
          id="rememberMe"
          name="remember"
          onChange={this.changeCheckBoxHandler}
          checked={this.state.rememberMe}
        />
        <button onClick={this.clickHandler}>Login now</button>
      </div>
    );
  }
}
