import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import { Button, Text, TextInput, View } from "react-native";

const LoginForm = (props) => {

  const [email,setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {

    var dataToSend = {
      identifier: email,
      password: pass,
    };

    console.log(dataToSend)
    const data = JSON.stringify(dataToSend)
    console.log(data);

    fetch('https://caixa-digital-cms.herokuapp.com/auth/local', {
      method: 'POST',
      body: data
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          props.navigation.navigate("Home")
        } else {
          alert ('Email ou password inválidos')
          console.log('Email ou password inválidos');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <View>
        <Text>E-mail</Text>
        <TextInput
          type="email"
          id="inputEmail"
          name="identifier"
          placeholder="Email"
          onChangeText ={(Email) => setEmail(Email)}
        />
      </View>

      <View>
        <Text>Password</Text>
        <TextInput
          type="password"
          id="inputPassword"
          name="password"
          placeholder="Password"
          onChangeText={(Pass) => setPass(Pass)}
        />
      </View>

      <Button 
        onPress={login}
      >Login</Button>

      <View>
        <Text>Não tem uma conta?</Text>
        <Text
          onPress={() => props.navigation.navigate('RegisterForm1')}>
          Registe-se
        </Text>
      </View>

    </>
  );
};

export default LoginForm;