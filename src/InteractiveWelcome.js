
import React from "react";
import { Welcome } from "./Welcome";

export default class InteractiveWelcome extends React.Component{
    state = {
        name : ''
    }

    changeInputHandler = (event) => {
        this.setState({name : event.target.value})
    }

    render(){
        return(
            <div>
                <label htmlFor="type-name">Nome : </label>
                <input type="text" id="type-name" placeholder="scrivi il tuo nome" value={this.state.name} onChange={this.changeInputHandler}/>
                <Welcome name={this.state.name}/>
            </div>

        )
    }
}