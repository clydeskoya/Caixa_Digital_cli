import React from "react";

export const CounterContext2 = React.createContext();

export const formReducerInitialState2 = "";
    
export const registerFormReducer2 = (state, action) => {
  console.log(state);
  const formData = [...state, action]
  console.log(formData)
  return formData

};
