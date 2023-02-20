import React from "react";

export default class Counter extends React.Component {
  state = {
    counter: this.props.value,
  };

  constructor(props) {
    super(props);

    setInterval(() => {
      this.setState((prevState) => {
        return { counter: prevState.counter + this.props.increment };
      });
    }, this.props.interval);
  }

  render() {
    return <h1>counter : {this.state.counter}</h1>;
  }
}
