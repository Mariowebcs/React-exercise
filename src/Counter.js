import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((prevState) => {
        return { counter: prevState.counter + 1 };
      });
    }, 1000);
  }

  render() {
    return <h1>counter : {this.state.counter}</h1>;
  }
}
