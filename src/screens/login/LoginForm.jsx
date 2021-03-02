import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Text } from "react-native";

const LoginForm = (props) => {

  /*  const [email,setEmail] = useState("");
   const [pass, setPass] = useState("");
  */
  const { register, handleSubmit, errors } = useForm();

  const onLogin = async (body) => {
    console.log(body)

    fetch('https://caixa-digital-cms.herokuapp.com/auth/local', {
      method: 'POST',
      body
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          props.navigation.navigate("Home")
        } else {
          console.log('Email ou password inválidos');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onLogin)}>
      <div>
        <label>E-mail</label>
        <input
          type="email"
          id="inputEmail"
          name="identifier"
          // onChange ={e => (setEmail = e.target.value)}
          ref={register({ required: true })}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          id="inputPassword"
          name="password"
          // onChange ={e => (setPass = e.target.value)}
          ref={register({ required: true })}
        />
      </div>

      <input type="submit" value="Login" />

      <div>

        <Text
          onPress={() => props.navigation.navigate('RegisterForm1')}>
          Não tem uma conta? Registe-se
        </Text>


      </div>


    </form>
  );
};

export default LoginForm;