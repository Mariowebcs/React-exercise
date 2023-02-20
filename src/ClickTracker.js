import React from "react";

export default class ClickTracker extends React.Component {
  state = {
    tracker: "",
  };

  clickHandleTracker = (target) => {
    this.setState({ tracker: target.name });
  };

  render() {
    return (
      <div>
        <h1>You pressed : {this.state.tracker}</h1>
        <button
          onClick={({ target }) => this.clickHandleTracker(target)}
          name="button1"
        >
          Button1
        </button>
        <button
          onClick={({ target }) => this.clickHandleTracker(target)}
          name="Button2"
        >
          Button2
        </button>
        <button
          onClick={({ target }) => this.clickHandleTracker(target)}
          name="Button3"
        >
          Button3
        </button>
      </div>
    );
  }
}
