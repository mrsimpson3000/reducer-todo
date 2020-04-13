import React, { useReducer } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { initialState, reducer } from "./reducers/reducer";

export default function App() {
  // const [todoList, setTodoList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  // const addTask = (event, inputName) => {
  //   event.preventDefault();

  // const newTask = {
  //   task: inputName,
  //   id: Date.now(),
  //   completed: false,
  // };

  // setTodoList({
  //   todoList: [...todoList, newTask],
  // });
  // };

  // const handleSubmit = (event) => {
  // event.preventDefault();
  // setItem({
  //   item: "",
  // });
  // this.addTask(event, item);
  // };

  // const toggleItem = (itemId) => {
  // setItem({
  //   todoList: todoList.map((item) => {
  //     if (itemId === item.id) {
  //       return {
  //         ...item,
  //         completed: !item.completed,
  //       };
  //     }
  //     return item;
  //   }),
  // });
  // };

  // const clearCompleted = (event) => {
  //   event.preventDefault();
  // console.log("Cleared");
  // setTodoList({
  //   todoList: todoList.filter((todo) => !todo.completed),
  // });
  // };

  return (
    <div>
      <TodoList state={state} dispatch={dispatch} />
      <TodoForm
        dispatch={dispatch}
        // handleSubmit={handleSubmit}
      />
    </div>
  );
}
