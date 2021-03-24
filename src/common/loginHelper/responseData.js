import React from 'react';

export const LoginContext = React.createContext();

export const loginReducerInitialState = [];

export const loginReducer = (state, action) => {
  const loginData = [...state, action];
  console.log('LoginContextData', loginData);
  return loginData;
};
