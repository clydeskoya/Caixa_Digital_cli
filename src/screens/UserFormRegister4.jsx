import React, { useRef, useState } from 'react';
import { ReactDOM, useStateMachine } from 'react-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

{ /*
const schema = yup.object().shape({
    email1: yup.required(),
    email2: yup.required(),
    password1: yup.required().min(6),
    password2: yup.required().min(6)
});
*/ }

const UserFormRegister4 = () => {
  const { register, handleSubmit, errors } = useForm({
    //  resolver: yupResolver(schema),
  });

  const [data, setData] = useState('');

  { /*
    const {state, action} = useStateMachine(updateAction);

    const {push} = useHistory();

    const onSubmit = data => {
        action(data);
        push('/UserFormRegisterResult')
        console.log(data);
    };
*/ }
  /*
    // state // eram as cenas que vieram do step 1
    const dadosAntMaisOsNovos = { ...state, ...data }
    // questao, o que é o "spread operator" ...   VERRRRRRRRRRRRRRRRRRRRR
         action(dadosAntMaisOsNovos)
     */

  const inputEmail = useRef(null);
  const inputPass = useRef(null);

  const onSubmit = async (body) => {
    fetch('https://caixa-digital-cms.herokuapp.com/auth/local/register', {
      method: 'POST',
      body,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('result', result);
        setData(result.rows);
      }, (err) => console.log('error', err));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p>
          <label>Insira o seu email </label>
          <p>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email1"
              ref={inputEmail}
            />
            {errors.email1 && <p>{errors.email1.message}</p>}
          </p>

          <label>Confirme o seu email </label>
          <p>
            <input
              type="email"
              placeholder="Email"
              id="email_confirm"
              name="email2"
              ref={register({
                validate: {
                  emailEqual: (value) => (value === inputEmail.current.value || alert('Erro de confirmação de emails')),
                },
              })}
            />
            {errors.email2 && <p>{errors.email2.message}</p>}

          </p>

          <label>Crie uma palavra-passe </label>
          <p>
            <input
              type="password"
              placeholder="Password"
              id="pass"
              name="password1"
              ref={inputPass}
            />
            {errors.password1 && <p>{errors.password1.message}</p>}
          </p>

          <label>Confirme a palavra-passe </label>
          <p>
            <input
              type="password"
              placeholder="Password"
              id="pass_confirm"
              name="password2"
              ref={register({
                validate: {
                  emailEqual: (value) => (value === inputPass.current.value || alert('Erro de confirmação de passwords')),
                },
              })}
            />
            {errors.password2 && <p>{errors.password2.message}</p>}
          </p>

        </p>
      </div>

      <input type="submit" value="Criar conta" />

    </form>
  );
};

export default UserFormRegister4;
