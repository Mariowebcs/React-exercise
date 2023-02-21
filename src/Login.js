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
          value={this.state.rememberMe}
        />
        <h2>{this.state.email}</h2>
        <h2>{this.state.password}</h2>
        <h2>{this.state.rememberMe}</h2>
      </div>
    );
  }
}
