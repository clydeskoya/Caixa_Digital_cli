import React, { useContext, useState, setState } from "react";
import { CounterContext2 } from "../../common/context/form.register2";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { RadioButton } from "react-native-paper";
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from "react-native-simple-radio-button";
const REGEX_DATE_OF_BIRTH = /^\d{2}\/\d{2}\/\d{4}?$/;
const RegisterForm1 = (props) => {
  const [username, setUserName] = useState("Irina");
  const [usersurname, setUserSurname] = useState("Fernandes");
  const [dateofbirth, setUserDateofbitrh] = useState("07/11/1998");
  const [gender, setGender] = useState("-1");

  var radio_props = [
    { label: "Feminino", value: 0 },
    { label: "Masculino", value: 1 },
    { label: "Outro", value: 1 }
  ];

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
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
            {" "}
            Registo{" "}
          </Text>
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

        <RadioForm
          radio_props={radio_props}
          initial={0}
          onPress={setGender}
        />

        {/* <RadioButton.Group
          onValueChange={(gender) => setGender(gender)}
          value={gender}
          
        > 
        
           
            {/* <RadioButton.Item label="Feminino" value="Feminino" />
            <RadioButton.Item label="Masculino" value="Masculino" />
            <RadioButton.Item label="Outro" value="Outro" />

            
        </RadioButton.Group> */}

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
    width: "50%",
    height: "7%",
    backgroundColor: "#1DC690",
    paddingVertical: 10,
    borderRadius: 15,
  },
  container: {
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
    justifyContent: "center",
    flexDirection: "row",
    marginHorizontal: 55,
    justifyContent: "space-between",
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
    marginVertical: "10%",
    backgroundColor: "#1C4670",
    borderRadius: 45,
  },
});
