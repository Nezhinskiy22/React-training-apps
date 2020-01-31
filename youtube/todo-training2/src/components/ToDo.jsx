import React from "react";
import ReactDOM from "react-dom";
import List from "./List";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    state = {
      term: "",
      items: []
    };
  }

  onChangeHandler = e => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  onFormSubmitHandler = e => {
    e.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };
  render() {
    return (
      <div className="App">
        <div className="ui search">
          <form onSubmit={this.onFormSubmitHandler}>
            <div className="ui icon input">
              <input
                onChange={this.onChangeHandler}
                type="text"
                className="prompt"
                placeholder="Add Task Here..."
              />
              <button className="circular ui icon button">
                <i onClick={this.onFormSubmitHandler} className="plus icon" />
              </button>
            </div>
          </form>
        </div>

        <List items={this.state.items} />
      </div>
    );
  }
}

export default ToDo;
