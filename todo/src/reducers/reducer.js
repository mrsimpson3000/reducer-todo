export const initialState = [
  {
    task: "Learn about Reducers",
    id: 1,
    completed: false,
  },

  {
    task: "Implement Reducers",
    id: 2,
    completed: false,
  },

  {
    task: "Eat Dinner with the wife on our anniversary",
    id: 3,
    completed: false,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          task: action.payload.task,
          id: Date.now(),
          completed: false,
        },
      ];
    case "TOGGLE_TASK":
      return state.map((item) => {
        return action.payload === item.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    case "CLEAR_COMPLETED":
      return state.filter((task) => !task.completed);
    default:
      return state;
  }
};
