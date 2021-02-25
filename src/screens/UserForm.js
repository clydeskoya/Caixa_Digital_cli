import React from "react";
import {ReactDom, useStateMachine} from "react-dom";
import { BrowserRouter as Router, Route, Link, useLocation, useHistory } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import { DevTool } from 'little-state-machine-devtools'
import UserFormRegister1 from "./UserFormRegister1";
import UserFormRegister2 from "./UserFormRegister2";
import UserFormRegister3 from "./UserFormRegister3";
import UserFormRegister4 from "./UserFormRegister4";
import UserFormRegisterResult from "./UserFormRegisterResult";


createStore({
  data: {
    username: "",
    usersurname: "",
    dateofbirth: "",
    gender: "",
    street: "",
    door: "",
    floor: "",
    zipcode: "",
    locality: "",
    district: "",
    country: "",
    BI: "",
    phoneNumber: "",
    NIF: "",
    email: "",
    password: ""
  }
});


const UserForm = () => {
  const location = useLocation();
  return (
   
        <>
         {/*  <nav className="container">
            <ul className="steps">

              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">UserFormRegister1</Link>
              </li>

              <li className={location.pathname === "/UserFormRegister2" ? "active" : ""}>
                <Link to="/">UserFormRegister2</Link>
              </li>

              <li className={location.pathname === "/UserFormRegister3" ? "active" : ""}>
                <Link to="/">UserFormRegister3</Link>
              </li>

              <li className={location.pathname === "/UserFormRegister4" ? "active" : ""}>
                <Link to="/">UserFormRegister4</Link>
              </li>

              <li className={location.pathname === "/UserFormRegisterResult" ? "active" : ""}>
                <Link to="/">UserFormRegisterResult</Link>
              </li>

            </ul>
          </nav> */}


          <Route exact path="/" component={UserFormRegister1} />
          <Route path="/UserFormRegister2" component={UserFormRegister2} />
          <Route path="/UserFormRegister3" component={UserFormRegister3} />
          <Route path="/UserFormRegister4" component={UserFormRegister4} />
          <Route path="/UserFormRegisterResult" component={UserFormRegisterResult} />

        </>
    
  );
}


export default UserForm; 