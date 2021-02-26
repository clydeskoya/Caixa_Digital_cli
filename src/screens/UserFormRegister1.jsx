import React, { useState } from 'react';
import { ReactDOM, useStateMachine } from 'react-dom';
import { useForm } from 'react-hook-form';
import {
  BrowserRouter as Router, Route, Link, useLocation, useHistory,
} from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import updateAction from './updateAction';

{ /*
const schema = yup.object().shape({
    username: yup.string().required(),
    usersurname: yup.string().required(),
    dateofbirth: yup.string().required(),
    gender: yup.required(),
});
*/ }

const UserFormRegister1 = (props) => {
  const {
    register, handleSubmit, reset, errors,
  } = useForm({
    // resolver: yupResolver(schema),
  });

  const { state, action } = useStateMachine(updateAction);

  const { push } = useHistory();

  const onSubmit = (data) => {
    action(data);
    push('/UserFormRegister2');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>
          <label>Qual o seu Nome? </label>
          <p />
          <input
            type="text"
            placeholder="Nome próprio"
            name="username"
            ref={register}
          />
          {errors.username && <p>{errors.username.message}</p>}

          <input
            type="text"
            placeholder="Apelido"
            name="usersurname"
            ref={register}
          />
          {errors.usersurname && <p>{errors.usersurname.message}</p>}

        </p>
      </div>

      <div>
        <p>
          <label>Data de nascimento </label>
          <p />
          <input
            type="text"
            placeholder="01/01/2000"
            name="dateofbirth"
            ref={register}
          />
          {errors.dateofbirth && <p>{errors.dateofbirth.message}</p>}
        </p>
      </div>

      <div>
        <p>
          <label>Género </label>
          <p />
          <label>
            <input type="radio" name="gender" id="fem" value="Feminino" ref={register} />
            {' '}
            Feminino
            <input type="radio" name="gender" id="mas" value="Masculino" ref={register} />
            {' '}
            Masculino
            <input type="radio" name="gender" id="out" value="Outro" ref={register} />
            {' '}
            Outro

            {errors.gender && <p>{errors.gender.message}</p>}
          </label>

        </p>
      </div>

      <input type="submit" value="Seguinte" />

    </form>
  );
};

export default UserFormRegister1;
