import React, { useState } from "react";
import axios from "axios";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");


  const login = async () => {
    try {
      const { data } = await axios.post(
        "https://caixa-digital-cms.herokuapp.com/auth/local",
        {
          identifier: email,
          password: pass,
        }
      );
     
      if (data.jwt) {
        props.navigation.navigate("Home");
      }
      } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log("data", error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log("request", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error.message", error.message);
      }
    }
  };


 /*  const login = async () => {
    var dataToSend = {
      identifier: email,
      password: pass,
    };

    console.log(dataToSend);
  //  console.log(formBody);

    fetch("https://caixa-digital-cms.herokuapp.com/auth/local", {
      method: "POST",
      body: formBody,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.status === "success") {
          AsyncStorage.setItem("user_id", responseJson.data.email);
          console.log(responseJson.data.email);
          props.navigation.navigate("Home");
        } else {
          alert("Email ou password inválidos");
          console.log("Email ou password inválidos");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }; */

  return (
    <>
      <View style={styles.container}>
        {/* <Icon name="person-outline"></Icon> */}
        <TextInput
          style={styles.input}
          type="email"
          id="inputEmail"
          name="identifier"
          placeholder="Email"
          onChangeText={(Email) => setEmail(Email)}
        />

        {/* <Icon name="key-outline"></Icon> */}
        <TextInput
          style={styles.input}
          type="password"
          id="inputPassword"
          name="password"
          placeholder="Password"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(Pass) => setPass(Pass)}
        />

        <Button onPress={login}>Login</Button>

        <Text>Não tem uma conta?</Text>
        <Text onPress={() => props.navigation.navigate("RegisterForm1")}>
          Registe-se
        </Text>
      </View>
    </>
  );
};

export default LoginForm;
const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#0096c7",
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 23,
  },
});
