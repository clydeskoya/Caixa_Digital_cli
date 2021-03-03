import React, { useContext, useState } from "react";
import { CounterContext2 } from "../../common/context/form.register2";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { RadioButton } from "react-native-paper";
import RadioGroup from "react-native-radio-button-group";

const REGEX_DATE_OF_BIRTH = /^\d{2}-\d{2}\/d{4}?$/;

const REGEX_POSTAL_CODE = /^\d{4}-\d{3}?$/;

const RegisterForm1 = (props) => {
  const [username, setUserName] = useState("");
  const [usersurname, setUserSurname] = useState("");
  const [dateofbirth, setUserDateofbitrh] = useState("");
  const [gender, setGender] = useState("");

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
    /*   if (!dateofbirth || !dateofbirth.match(REGEX_DATE_OF_BIRTH)) {
      alert('Data de nascimento inválida');
      return; 
    } 
    if (!gender) {
      alert('Género');
      return;
    } */

    var dataToSend = {
      username: username,
      usersurname: usersurname,
      dateofbirth: dateofbirth,
      gender: gender,
    };
    console.log(dataToSend);

    counterContext2.formDispatch(dataToSend);

    /* counterContext2.formDispatch({key:"username", payload: username});
    counterContext2.formDispatch({key:"usersurname", payload: usersurname});
    counterContext2.formDispatch({key:"dateofbirth", payload: dateofbirth});
    counterContext2.formDispatch({key:"gender", payload: gender}); */

    var hey = counterContext2.formData;
    console.log("heyy");
    console.log(hey);
    props.navigation.navigate("RegisterForm2");
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={{ color: "white", fontWeight: "bold" }}> Registo </Text>
        </View>
        <Text style={styles.title}>Qual o seu Nome? </Text>
        <View style={styles.inputRow}>
          <TextInput
            type="text"
            placeholder="Nome próprio"
            style={styles.TextInputStyle}
            name="username"
            onChangeText={(UserName) => setUserName(UserName)}
          />

          <TextInput
            type="text"
            placeholder="Apelido"
            style={styles.TextInputStyle}
            name="usersurname"
            onChangeText={(UserSurname) => setUserSurname(UserSurname)}
          />
        </View>

        <Text style={styles.title}>Data de nascimento </Text>
        <TextInput
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
          <Text style={{ color: "white" }}> Seguinte </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default RegisterForm1;
const styles = StyleSheet.create({
  header: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
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
      textAlign: 'center',  
      height: 40,    
      marginBottom: 10,
      borderBottomColor: '#726F6F',
      borderBottomWidth: 1,  
   } ,
  inputRow:{
    flexDirection:"row",
    marginHorizontal:55, 
    justifyContent: "space-around",
    //alignItems:"spaceAround",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
