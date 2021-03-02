import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Button, Text, View, TextInput } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    var dataToSend = {
      identifier: email,
      password: pass,
    };

    console.log(dataToSend);
    const data = JSON.stringify(dataToSend);
    console.log(data);

    fetch("https://caixa-digital-cms.herokuapp.com/auth/local", {
      method: "POST",
      body: data,
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
  };

  return (
    <>
      <View style={styles.container}>
        <Icon name="person-outline"></Icon>
        <TextInput
          style={styles.input}
          type="email"
          id="inputEmail"
          name="identifier"
          placeholder="Email"
          onChangeText={(Email) => setEmail(Email)}
        />

        <Icon name="key-outline"></Icon>
        <TextInput
          style={styles.input}
          type="password"
          id="inputPassword"
          name="password"
          placeholder="Password"
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
