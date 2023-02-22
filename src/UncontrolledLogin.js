import React, { createRef } from "react";

export default class UncontrolledLogin extends React.Component {
  _formRef = createRef();

  submitFormHandler = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const rememberMe = event.target.elements.rememberMe.checked;

    const loginData = {
      email,
      password,
      rememberMe,
    };
    this.props.onSubmitForm(loginData);
  };

  formPrefillHandler = () => {
    this._formRef.current.elements.email.value = "Mario"
    this._formRef.current.elements.password.value = "Billyboy"
    this._formRef.current.elements.rememberMe.checked = true
  };

  render() {
    return (
      <form action="" ref={this._formRef} onSubmit={this.submitFormHandler}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <input type="checkbox" name="rememberMe" />

        <button type="submit">Login</button>
        <button type="reset">Reset</button>
        <button type="button" onClick={this.formPrefillHandler}>
          Prefill form
        </button>
      </form>
    );
  }
}
