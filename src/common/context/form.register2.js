import React, { useReducer } from 'react';

export const CounterContext2 = React.createContext();

export const formReducerInitialState2 = '';

/* export const formReducerInitialState2 = {
  username: "",
  usersurname: "",
  dateofbirth: "",
  gender: "",
  street: "",
  door: "",
  floor: "",
  postalCode: "",
  locality: "",
  district: "",
  country: "",
  bi: "",
  phoneNumber: "",
  nif: ""
}; */

export const registerFormReducer2 = (state, action) => {
  console.log(state);
  const formData = [...state, action];
  console.log(formData);
  return formData;
};

/* export const registerFormReducer = (state, action) => {
  switch (action.key) {
    case "username":
      return [...state, {username: action.paylod}];
    case "usersurname":
      return [...state, {usersurname: action.paylod}];
     case "dateofbirth":
     return {...state, dateofbirth: action.paylod};
    case "gender":
      return {...state, gender: action.paylod};
    case "street":
      return {...state, street: action.paylod};
    case "door":
      return {...state, door: action.paylod};
    case "floor":
      return {...state, floor: action.paylod};
    case "postalCode":
      return {...state, postalCode: action.paylod};
    case "locality":
      return {...state, locality: action.paylod};
    case "district":
      return {...state, district: action.paylod};
    case "country":
      return {...state, country: action.paylod};
    case "bi":
      return {...state, bi: action.paylod};
    case "phoneNumber":
      return {...state, phoneNumber: action.paylod};
    case "nif":
      return {...state, nif: action.paylod}; 
    default:
      return state;
  }
}; */
