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
      <View>
        <Text>Dados adicionais: </Text>
        <Text>Número de BI/CC </Text>
        <TextInput
          type="text"
          placeholder="Número de BI/CC"
          name="BI"
          onChangeText={(BI) => setBI(BI)}
        />

        <Text>Telemóvel </Text>
        <TextInput
          type="text"
          placeholder="Número de telemóvel"
          name="phoneNumber"
          keyboardType="numeric"
          //maxLength="9"
          onChangeText={(Phone) => setPhoneNumber(Phone)}
        />

        <Text>NIF </Text>
        <TextInput
          type="text"
          placeholder="XXXXXXXXX"
          name="NIF"
          keyboardType="numeric"
          //maxLength="9"
          onChangeText={(NIF) => setNIF(NIF)}
        />

        <View style={styles.buttonOK}>
          <TouchableOpacity onPress={saveNnavigate}>
            <Text style={{ color: "white" }}> Seguinte </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default RegisterForm3;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 140,
    height: 50,
    backgroundColor: "#1DC690",
    paddingVertical: 10,
    borderRadius: 45,
  },
  container: {
    height: "100%",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  TextInputStyle: {
    textAlign: "center",
    height: 40,
    marginBottom: 10,
    borderBottomColor: "#726F6F",
    borderBottomWidth: 1,
  },
  inputRow: {
    flexDirection: "row",
    marginHorizontal: 55,
    justifyContent: "space-around",
    //alignItems:"spaceAround",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  buttonOK: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 290,
    height: 45,
    backgroundColor: "#1C4670",
    paddingVertical: 10,
    borderRadius: 45,
  },
});
