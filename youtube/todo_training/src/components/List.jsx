import React from "react";

const List = props => (
  <ul>
    {props.item.map((item, index) => (
      <li key={index} onClick={props.deleteTask.bind(this.index)}></li>
    ))}
  </ul>
);

export default List;
