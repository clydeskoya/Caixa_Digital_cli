import { useState } from 'react';

const formDataReducer = (data) => {
  const [formData, setformData] = useState('null');
  console.log('data2');
  setformData = data;
  console.log(formData);
  return formData;
};

/* function formDataReducer(state = [], action) {
        console.log("nsa li")
        state = JSON.parse(JSON.stringify(action.payload));
        console.log(state)
        console.log("nsa li")
         
    }
     */

export default formDataReducer;
