import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import LanguageContext  from "./LanguageContext";

export default class Wrapper extends React.Component {
  state = {
    language: "en",
  };

  changeLanguageHandler = (event) => {
    this.setState({
      language: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          name="select-language"
          id=""
          value={this.state.language}
          onChange={this.changeLanguageHandler}
        >
          <option value="en">English</option>
          <option value="it">Italiano</option>
        </select>

        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage />
        </LanguageContext.Provider>
      </div>
    );
  }
}
