import React, { useState,  useContext } from "react";
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
    const dataJSON = JSON.stringify(dataToSend);
    console.log(dataJSON);
    const dataStrapi = dataJSON.slice(1, dataJSON.length - 1);
    console.log(dataStrapi);
    counterContext2.formDispatch(dataStrapi);
    const hey = counterContext2.formData;
    console.log("heyy");
    console.log(hey)
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
      </View>

      <View>
        <Text>Telemóvel </Text>
        <TextInput
          type="text"
          placeholder="Número de telemóvel"
          name="phoneNumber"
          keyboardType="numeric"
          onChangeText={(Phone) => setPhoneNumber(Phone)}
        />
      </View>

      <View>
        <Text>NIF </Text>
        <TextInput
          type="text"
          placeholder="XXXXXXXXX"
          name="NIF"
          keyboardType="numeric"
          onChangeText={(NIF) => setNIF(NIF)}
        />
      </View>

      <View>
        <Button onPress={saveNnavigate}>Seguinte</Button>
      </View>
    </>
  );
};

export default RegisterForm3;
