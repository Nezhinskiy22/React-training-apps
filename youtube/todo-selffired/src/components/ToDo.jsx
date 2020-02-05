import React, { Component } from "react";

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      task: []
    };
  }
  addText = input => {
    this.setState({ text: input });
  };
  addTask = userTask => {
    var taskArray = this.state.task;
    taskArray.push(userTask);
    this.setState({ task: taskArray, text: "" });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.text}
          onChange={e => {
            this.addText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            this.addTask(this.state.text);
          }}
        >
          Press to add task
        </button>
        <ul>
          {this.state.task.map(val => (
            <li>{val}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDo;

// import React, { Component } from "react";

// class ToDo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "",
//       task: []
//     };
//   }
//   addInput = value => {
//     this.setState({ text: value });
//   };
//   addTask = text => {
//     let listArray = this.state.task;
//     listArray.push(text);
//     this.setState({ text: "", task: listArray });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.text}
//           onChange={e => {
//             this.addInput(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             this.addTask(this.state.text);
//           }}
//         >
//           Add task
//         </button>
//         <ul>
//           {this.state.task.map(val => (
//             <li>{val}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ToDo;

// -----------------------------------------------------------------------------

// import React, { Component } from "react";

// class ToDo extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       task: "",
//       list: []
//     };
//   }
//   changeTask = val => {
//     this.setState({ task: val });
//   };

//   addTask = taskE => {
//     let listArray = this.state.list;
//     listArray.push(taskE);
//     this.setState({ list: listArray, task: "" });
//   };
//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           value={this.state.task}
//           onChange={e => {
//             this.changeTask(e.target.value);
//           }}
//         />
//         <button
//           onClick={() => {
//             this.addTask(this.state.task);
//           }}
//         >
//           Add task
//         </button>
//         <ul>
//           {this.state.list.map(val => (
//             <li>{val}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ToDo;
