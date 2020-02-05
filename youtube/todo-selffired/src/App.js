import React, { Component } from "react";
import ToDo from "./components/ToDo";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <ToDo />
      </div>
    );
  }
}

export default App;
