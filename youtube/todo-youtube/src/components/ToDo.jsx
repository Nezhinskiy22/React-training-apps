import React, { Component } from "react";

class ToDo extends Component {
    constructor(props){
        super(props)

        this.state={
            userInput:'',
            list:[]
        }
    }

    changeUserInput(input){
        this.setState({
            userInput: input
        }, ()=>console.log(input))
    }

  render() {
    return( 
    <div className="to-do-list-main">
        <input onChange={
            (e)=>
            this.changeUserInput(e.target.value)
    } 
        value={this.state.userInput} 
        type="text"/>
        <button>press me</button>
    </div>
    )
  }
}

export default ToDo;
