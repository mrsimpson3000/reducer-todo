import React, { useState } from "react";

export default function TodoForm(props) {
  const [item, setItem] = useState("");

  // const handleChange = (event) => {
  //   setItem({item: event.target.value });
  // };

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type='text'
        name='todo'
        value={item}
        onChange={(event) => setItem(event.target.value)}
      />
      <button
        onClick={() => {
          props.dispatch({
            type: "ADD_TASK",
            payload: { task: item },
          });
        }}
      >
        Add Todo
      </button>
      <button onClick={props.clearCompleted}>Clear Completed</button>
    </form>
  );
}
