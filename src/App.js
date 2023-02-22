import React from "react";
import UncontrolledLogin from "./UncontrolledLogin";

export default class App extends React.Component {

    handleSubmitData = (loginData) => {
        console.log(loginData);
    }

  render() {
    return (
      <div>
        <UncontrolledLogin onSubmitForm={this.handleSubmitData}/>
      </div>
    );
  }
}
