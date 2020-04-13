import React, { useState } from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function () {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  const [item, setItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTask = (event, inputName) => {
    event.preventDefault();

    const newTask = {
      task: inputName,
      id: Date.now(),
      completed: false,
    };

    setTodoList({
      todoList: [...todoList, newTask],
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setItem({
      item: "",
    });
    this.addTask(event, this.state.item);
  };

  const toggleItem = (itemId) => {
    setItem({
      todoList: todoList.map((item) => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  const clearCompleted = (event) => {
    event.preventDefault();
    // console.log("Cleared");
    setTodoList({
      todoList: todoList.filter((todo) => !todo.completed),
    });
  };

  const handleChange = (event) => {
    setItem({ item: event.target.value });
  };

  return (
    <div>
      <TodoList todoList={todoList} toggleItem={toggleItem} />
      <TodoForm
        clearCompleted={clearCompleted}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todo={item}
      />
    </div>
  );
}
