import React, { useState } from "react";
import axios from "axios";

import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
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
        "http://25586195f342.ngrok.io/auth/local",
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
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.oval}>
          <Image
            source={require("../../img/logowtxt.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.inputRow}>
          <Ionicons name="person-outline" color="#1C4670" size={35} />
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
          <Ionicons name="key-outline" color="#1C4670" size={35} />
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

       
          <TouchableOpacity onPress={login}>
          <View style={styles.bottomActions}>
            <Text style={styles.textLogin}> Login </Text>
            </View>
          </TouchableOpacity>
        
        
        <Text
          style={{
            //padding: 7,
           // marginTop: 25,
          }}
        >
          Não tem uma conta?
        </Text>
        <Text
          style={styles.textRegister}
          onPress={() => props.navigation.navigate("RegisterForm1")}
        >
          Registe-se
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginForm;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  oval: {
    width: "130%",
    height: "60%",
    top: "-20%",
    borderRadius: 700,
    backgroundColor: "#1C4670",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    //height: "85%",
    top: "20%",
  },
  inputRow: {
    flexDirection: "row",
    marginHorizontal: 55,
  },
  input: {
    margin: "3%",
    width: "80%",
    borderBottomColor: "#1C4670",
    borderBottomWidth: 1,
  },
  textRegister: {
    textDecorationLine: "underline",
  },
  textLogin: { color: "white" },
  bottomActions: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 40,
    marginVertical:"10%",
    backgroundColor: "#1C4670",
    borderRadius: 45,
  },
});
