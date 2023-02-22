import React from "react";

export default class Login extends React.Component {
  state = {
    email: "",
    password: "",
    rememberMe: false,
  };

  changeInputHandler = (event) => {
    const name = event.target.name;
    this.setState({
        [name] : event.target.value
    })
  }

  changeCheckBoxHandler = (event) => {
    const name = event.target.name;
    this.setState({
        [name] : event.target.checked
    })
  }


  clickResetHandler = () => {
    this.setState({
        email : '',
        password : '',
        rememberMe : false
    })
  }

  clickHandler = () => {
      const loginData = {
      email: this.state.email,
      password: this.state.password,
      rememberMe: this.state.rememberMe,
    };
    this.props.onLogin(loginData);
  }

  render() {
    return (
      <div>
        <label htmlFor="emailInput">Email : </label>
        <input
          type="email"
          id="email-Input"
          name="email"
          onChange={this.changeInputHandler}
          value={this.state.email}
        />
        <label htmlFor="passInput">Password : </label>
        <input
          type="password"
          id="passInput"
          name="password"
          onChange={this.changeInputHandler}
          value={this.state.password}
        />
        <label htmlFor="rememberMe">Ricordami</label>
        <input
          type="checkbox"
          id="rememberMe"
          name="rememberMe"
          onChange={this.changeCheckBoxHandler}
          checked={this.state.rememberMe}
        />
        <button onClick={this.clickHandler}>Login now</button>
        <button onClick={this.clickResetHandler}>Reset</button>
      </div>
    );
  }
}