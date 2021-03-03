import React from "react";

export const CounterContext = React.createContext();

export const formReducerInitialState = 0;
export const registerFormReducer = (state,action)=>{
    switch (action) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state-1;
        case 'reset':
            return formReducerInitialState;
        default:
           return state;
    }
};