import React, { useState, useReducer } from "react";

export const initialState = [
  {
    task: "Learn about Reducers",
    id: Date.now(),
    completed: false,
  },

  {
    task: "Implement Reducers",
    id: Date.now(),
    completed: false,
  },

  {
    task: "Eat Dinner with the wife on our anniversary",
    id: Date.now(),
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
