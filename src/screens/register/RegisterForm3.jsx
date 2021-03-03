import React, { useState, useContext } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { CounterContext2 } from "../../common/context/form.register2";

const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

const RegisterForm3 = (props) => {
  const [bi, setBI] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [nif, setNIF] = useState("");

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    var dataToSend = {
      bi: bi,
      phoneNumber: phoneNumber,
      nif: nif,
    };
    console.log(dataToSend);

    counterContext2.formDispatch(dataToSend);
    var hey = counterContext2.formData;

    console.log(hey);
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
          onChangeText={(Phone) => setPhoneNumber(Phone)}
        />

        <Text>NIF </Text>
        <TextInput
          type="text"
          placeholder="XXXXXXXXX"
          name="NIF"
          keyboardType="numeric"
          onChangeText={(NIF) => setNIF(NIF)}
        />

        <TouchableOpacity onPress={saveNnavigate}>
          <Text style={{ color: "white" }}> Seguinte </Text>
        </TouchableOpacity>
        
      </View>
    </>
  );
};

export default RegisterForm3;
