import React from "react";
import Login from "./Login";

export default class App extends React.Component {
  dateLoginHandler = (loginData) => {
    console.log(loginData);
  };

  render() {
    return (
      <div>
        <Login onLogin={this.dateLoginHandler} />
      </div>
    );
  }
}