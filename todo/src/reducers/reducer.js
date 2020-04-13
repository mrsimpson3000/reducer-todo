import React, { useState, useReducer } from "react";

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
          completed: false,
          id: Date.now(),
        },
      ];
    case "TOGGLE_TASK":
      return state.map((item) => {
        return action.payload === item.id
          ? { ...item, completed: !item.completed }
          : item;
      });
    default:
      return state;
  }
};
