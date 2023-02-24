import React from "react";
import LanguageContext from "./LanguageContext";

export default class DisplayLanguage extends React.Component {
  render() {
    return (
      <div>
        <LanguageContext.Consumer>
          {(language) => {
            return (
              <div>
                <h2>
                  {language === "en"
                    ? `the selected language is : ${language}`
                    : `La lingua selezionata è : ${language}`}
                </h2>
              </div>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
