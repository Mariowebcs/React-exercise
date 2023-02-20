import React from "react";

export default class ClickCounter extends React.Component{
    state={
        counter : 0
    }

     onClickHandler = () => {
        this.setState((prevState)=>{
           return {counter : prevState.counter + 1};
        })
    }

    render(){
        return (
            <div>
            <h1>counter : {this.state.counter}</h1>
            <button onClick={this.onClickHandler}>Click</button>
            </div>
        )
    }
}