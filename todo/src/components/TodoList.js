import React, { useReducer } from "react";
import Todo from "./Todo";

export default function TodoList(props) {
  return (
    <div>
      {props.state.map((todoItem) => (
        <Todo key={todoItem.id} item={todoItem} dispatch={props.dispatch} />
      ))}
    </div>
  );
}
