import React from "react";

export default function Todo(props) {
  return (
    <div
      className={`item${props.item.completed ? " completed" : ""}`}
      onClick={() =>
        props.dispatch({ type: "TOGGLE_TASK", payload: props.item.id })
      }
    >
      <p className='dumpsterJuice'>{props.item.task}</p>
    </div>
  );
}
