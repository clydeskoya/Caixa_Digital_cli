import React, { useState, useContext } from "react";
import { Button, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { CounterContext2 } from "../../common/context/form.register2";

const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

const RegisterForm3 = (props) => {
  const [bi, setBI] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nif, setNIF] = useState("");

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    if (!bi) {
      alert("Número de BI/CC");
      return;
    }
    if (!phoneNumber || !phoneNumber.match(REGEX_ONLY_NUMBERS)) {
      alert("Número de telefone inválido");
      return;
    }
    if (!nif || !nif.match(REGEX_ONLY_NUMBERS)) {
      alert("NIF inválido");
      return;
    }

    var dataToSend = {
      bi: bi,
      phoneNumber: phoneNumber,
      nif: nif,
    };
    console.log(dataToSend);
    counterContext2.formDispatch(dataToSend);
    props.navigation.navigate("RegisterForm4");
  };

  return (
    <> 
      <View style={styles.container}>

      <View style={styles.header}>
         <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}> Registo </Text>
      </View>

      <Text style={{ color: "black", fontWeight:"bold" }}> Dados adicionais: </Text>


      <Text style={{ color: "black", fontWeight:"bold" }}> Número de BI/CC </Text>
        <TextInput
          type="text"
          placeholder="Número de BI/CC"
          style={styles.TextInputStyle}
          name="BI"
          onChangeText={(BI) => setBI(BI)}
        />

        <Text style={{ color: "black", fontWeight:"bold" }}> Telemóvel </Text>
        <TextInput
          type="text"
          placeholder="Número de telemóvel"
          style={styles.TextInputStyle}
          name="phoneNumber"
          keyboardType="numeric"
          //maxLength="9"
          onChangeText={(Phone) => setPhoneNumber(Phone)}
        />

        <Text style={{ color: "black", fontWeight:"bold" }}> NIF </Text>
        <TextInput
          type="text"
          placeholder="XXXXXXXXX"
          style={styles.TextInputStyle}
          name="NIF"
          keyboardType="numeric"
          //maxLength="9"
          onChangeText={(NIF) => setNIF(NIF)}
        />

          <TouchableOpacity onPress={saveNnavigate}>
          <View style={styles.buttonOK}>
            <Text style={{ color: "white" }}> Seguinte </Text>
            </View>
          </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterForm3;

const styles = StyleSheet.create({
  
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: '3%',
    width: '50%',
    height: '7%',
    backgroundColor: "#1DC690",
    paddingVertical: 10,
    borderRadius: 45,
  },

  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  TextInputStyle: {
    textAlign: "center",
    height: "65%",
    width: "100%",
    marginBottom: '1%',
    borderBottomColor: "#726F6F",
    borderBottomWidth: 1,
  },

  inputRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    //alignItems:"spaceAround",
    padding: "2.5%",
  },

  title: {
    fontWeight: "bold",
  },

  buttonOK: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 40,
    marginVertical:"10%",
    backgroundColor: "#1C4670",
    borderRadius: 45,
  },

});
