import React, { useState, useEffect, useRef } from "react";
import { ReactDOM , useStateMachine } from "react-dom";
import { BrowserRouter as Router, Route, Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import updateAction from "./updateAction";

const REGEX_POSTAL_CODE = /^\d{4}-\d{3}?$/;


const schema = yup.object().shape({
    street: yup.string().required(),
    door: yup.number().positive().required(),
    floor: yup.string().required(),
    postalCode: yup.string().required().matches(REGEX_POSTAL_CODE),
    district: yup.string().required(),
    country: yup.string().required(),
});

const UserFormRegister2 = (props) => {

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    const {state, action} = useStateMachine(updateAction);

    const {push} = useHistory();

    const onSubmit = data => {
        action(data);
        push('/UserFormRegister3')
        console.log(data);
    };

    const [codigo, setCodigo] = useState('');

    const getZipCode = () => {

        console.log("i'm hereeee")
        const zip = document.getElementById("zipcode").value.slice(0, 4);
        console.log("hey zip"+ zip + "------------");
        const code = document.getElementById("zipcode").value.slice(5, 8);
        console.log("hey code"+ code);

        fetch(`https://www.ctt.pt/feecom/app/open/common/postalcodesearch.jspx?cp4=${zip}&cp3=${code}`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setCodigo(result.rows)
            });

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <p>
                    <label>Qual a sua morada? </label> <p></p>
                    <label>Rua, Nº Porta, Andar</label>
                    <p>
                        <input
                            type="text"
                            placeholder="Rua"
                            name="street"
                            ref={register}
                        />
                        {errors.street && <p>{errors.street.message}</p>}

                        <input
                            type="text"
                            placeholder="Porta"
                            name="door"
                            ref={register}
                        />
                        {errors.door && <p>{errors.door.message}</p>}

                        <input
                            type="text"
                            placeholder="Andar"
                            name="floor"
                            ref={register}
                        />
                        {errors.floor && <p>{errors.floor.message}</p>}
                    </p>

                    <label>Código postal</label>
                    <p>
                        <input
                            type="text"
                            placeholder="XXXX-XXX"
                            name="postalCode"
                            id="zipcode"
                            ref={register}
                            onChange={e => getZipCode()}
                            
                        />
                        {errors.postalCode && <p>{errors.postalCode.message}</p>}

                        <label> {codigo} </label>

                    </p>

                    <label>Distrito</label>
                    <p>
                        <input
                            type="text"
                            defaultValue="Lisboa"
                            placeholder="Distrito"
                            name="district"
                            ref={register}
                        />
                        {errors.district && <p>{errors.district.message}</p>}
                    </p>

                    <label>Pais</label>
                    <p>
                        <input
                            type="text"
                            defaultValue="Portugal"
                            placeholder="Pais"
                            name="country"
                            ref={register}
                        />
                        {errors.country && <p>{errors.country.message}</p>}
                    </p>

                </p>
            </div>

            <input type="submit" value="Seguinte" />

        </form>
    )
}

export default UserFormRegister2;
