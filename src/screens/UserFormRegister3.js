import React, { useState } from "react";
import { ReactDOM, useStateMachine } from "react-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BrowserRouter as Router, Route, Link, useLocation, useHistory } from "react-router-dom";
import updateAction from "./updateAction";

{/*
const schema = yup.object().shape({
    BI: yup.string().required(),
    NIF: yup.required(),
    phoneNumber: yup.number().required().integer().min(9).max(9),
});
*/}
const UserFormRegister3 = (props) => {

    const { register, handleSubmit, reset, errors } = useForm({
        // resolver: yupResolver(schema),
    });

    const {state, action} = useStateMachine(updateAction);

    const {push} = useHistory();

    const onSubmit = data => {
        action(data);
        push('/UserFormRegister4')
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
            <label>Dados adicionais: </label>
                <p>
                    <label>Número de BI/CC </label><p></p>
                        <input
                            type="text"
                            placeholder="Número de BI/CC"
                            name="BI"
                            ref={register}
                        />
                    {errors.BI && <p>{errors.BI.message}</p>}
                </p>
            </div>

            <div>
                <p>
                    <label>Telemóvel </label><p></p>
                    <input
                        type="text"
                        placeholder="Número de telemóvel"
                        name="phoneNumber"
                        ref={register}
                    />
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </p>
            </div>

            <div>
                <p>
                    <label>NIF </label><p></p>
                    <input
                        type="text"
                        placeholder="XXXXXXXXX"
                        name="NIF"
                        ref={register}
                    />
                    {errors.NIF && <p>{errors.NIF.message}</p>}

                </p>
            </div>

            <input type="submit" value="Seguinte" />

        </form>
    )
}

export default UserFormRegister3;
