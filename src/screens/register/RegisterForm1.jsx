import React, { useContext, useState } from "react";
import { CounterContext2 } from "../../common/context/form.register2";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { RadioButton } from "react-native-paper";

const REGEX_DATE_OF_BIRTH = /^\d{2}\/\d{2}\/\d{4}?$/;

const RegisterForm1 = (props) => {
  const [username, setUserName] = useState("Alberta");
  const [usersurname, setUserSurname] = useState("Sorriso");
  const [dateofbirth, setUserDateofbitrh] = useState("15/10/1990");
  const [gender, setGender] = useState("Feminino");

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    if (!username) {
      alert("Escreva o seu nome");
      return;
    }
    if (!usersurname) {
      alert("Escreva o seu apelido");
      return;
    }
    if (!dateofbirth || !dateofbirth.match(REGEX_DATE_OF_BIRTH)) {
      alert("Data de nascimento inválida! \n Formato DD/MM/AAAA");
      return;
    }
    if (!gender) {
      alert("Género");
      return;
    }

    var dataToSend = {
      username: username,
      usersurname: usersurname,
      dateofbirth: dateofbirth,
      gender: gender,
    };
    console.log(dataToSend);
    counterContext2.formDispatch(dataToSend);
    props.navigation.navigate("RegisterForm2");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize:22 }}> Registo </Text>
        </View>
        <Text style={styles.title}>Qual o seu nome? </Text>
        <View style={styles.inputRow}>
          <TextInput
            value={username}
            type="text"
            placeholder="Nome próprio"
            style={styles.TextInputStyle}
            name="username"
            onChangeText={(UserName) => setUserName(UserName)}
          />

          <TextInput
            value={usersurname}
            type="text"
            placeholder="Apelido"
            style={styles.TextInputStyle}
            name="usersurname"
            onChangeText={(UserSurname) => setUserSurname(UserSurname)}
          />
        </View>

        <Text style={styles.title}>Data de nascimento </Text>
        <TextInput
          value={dateofbirth}
          type="text"
          placeholder="01/01/2000"
          style={styles.TextInputStyle}
          name="dateofbirth"
          onChangeText={(dateofbirth) => setUserDateofbitrh(dateofbirth)}
        />

        <Text style={styles.title}>Género</Text>

        <RadioButton.Group
          onValueChange={(gender) => setGender(gender)}
          value={gender}
        >
          <View style={styles.inputRow}>
            <RadioButton.Item label="Feminino" value="Feminino" />
            <RadioButton.Item label="Masculino" value="Masculino" />
            <RadioButton.Item label="Outro" value="Outro" />
          </View>
        </RadioButton.Group>

        <TouchableOpacity onPress={saveNnavigate}>
        <View style={styles.buttonOK}>
            <Text style={{ color: "white" }}> Seguinte </Text>
        </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterForm1;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    width: "15%",
    height: "7%",
    backgroundColor: "#1DC690",
    paddingVertical: 10,
    borderRadius: 45,
  },
  container: {
    height: "100%",
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
    padding: 10,
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
