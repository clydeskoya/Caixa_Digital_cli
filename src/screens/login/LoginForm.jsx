import React, { useState } from "react";
import axios from "axios";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const login = async () => {
    if (!email) {
      alert("Indique o seu email");
      return;
    }
    if (!pass) {
      alert("Forneça a sua password");
      return;
    }

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
      <View style={{ height: "100%" }}>
        {/*  <View style={styles.oval}>
          <Image
            source={require("../../img/logowtxt.png")}
            style={{
              position: "absolute",
              width: 100,
              height: 295,
              marginTop: 150,
            }}
          />
        </View> */}
        <Image
          source={require("../../img/logowtxt.png")}
          style={{
            position: "absolute",
            width: 100,
            height: 295,
            marginTop: 150,
          }}
        />
        <View style={styles.inputMainRow}>
          <View style={styles.inputRow}>
            <Ionicons
              name="person-outline"
              color="#1C4670"
              size={35}
              style={{ marginTop: 20 }}
            />
            <TextInput
              style={styles.input}
              type="email"
              id="inputEmail"
              name="identifier"
              placeholder="Email"
              onChangeText={(Email) => setEmail(Email)}
            />
          </View>

          <View style={styles.inputRow}>
            <Ionicons
              name="key-outline"
              color="#1C4670"
              size={35}
              style={{ marginTop: 20 }}
            />
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
          </View>
        </View>
        <View
          style={{
            marginHorizontal: 55,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            width: 290,
            height: 45,
            backgroundColor: "#1C4670",
            paddingVertical: 10,
            borderRadius: 45,
          }}
        >
          <TouchableOpacity onPress={login}>
            <Text style={{ color: "white" }}> Login </Text>
          </TouchableOpacity>
        </View>
        <Text
          style={{
            padding: 7,
            marginTop: 25,
          }}
        >
          Não tem uma conta?
        </Text>
        <Text
          style={{
            textDecorationLine: "underline",
          }}
          onPress={() => props.navigation.navigate("RegisterForm1")}
        >
          Registe-se
        </Text>
      </View>
    </>
  );
};

export default LoginForm;
const styles = StyleSheet.create({
  input: {
    // borderWidth: 1,
    // borderColor: "#0096c7",
    padding: 5,
    margin: 10,
    width: 200,
    alignItems: "center",

    // borderRadius: 23,
    borderBottomColor: "#1C4670",
    borderBottomWidth: 1,
  },
  inputRow: {
    flexDirection: "row",
    marginHorizontal: 55,
  },
  inputMainRow: {
    flexDirection: "column",
    marginHorizontal: "auto",
  },
  oval: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    // left: -120,
    top: -189,
    borderRadius: 700,
    backgroundColor: "#1C4670",
    transform: [{ scaleX: 1 }],
  },
});
