import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import List from "./components/List";

class App extends React.Component {
  state = {
    term: "",
    items: []
  };

  onChangeHandler = e => {
    this.setState({ term: e.target.value });
    console.log(this.state.term);
  };

  onDeleteHandler = index => {
    const deleteTask = [...this.state.items];
    deleteTask.splice(index, 1);
    this.setState({ items: deleteTask });
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

        <List deleteTask={this.onDeleteHandler} items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
