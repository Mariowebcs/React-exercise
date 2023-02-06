import React from "react";

export class Age extends React.Component {
    render() {
        return (
            <div>
               <p>{this.props.age > 18 ? `your age is ${this.props.age}` : "You are very young"}</p>
            </div>
        )
    }
}