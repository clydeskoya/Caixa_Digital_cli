import React, { useContext, useState } from "react";
import { CounterContext2 } from "../../common/context/form.register2";
import { Button, Text, TextInput, View, RadioButton } from "react-native";
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
      alert('Escreva o seu nome');
      return;
    }
    if (!usersurname) {
      alert('Escreva o seu apelido');
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
    console.log(hey)
    props.navigation.navigate("RegisterForm2");
  };

  return (
    <>
      <View>
        <Text>Qual o seu Nome? </Text>

        <TextInput
          type="text"
          placeholder="Nome próprio"
          name="username"
          onChangeText={(UserName) => setUserName(UserName)}
        />

        <TextInput
          type="text"
          placeholder="Apelido"
          name="usersurname"
          onChangeText={(UserSurname) => setUserSurname(UserSurname)}
        />
      </View>

      <View>
        <Text>Data de nascimento </Text>
        <TextInput
          type="text"
          placeholder="01/01/2000"
          name="dateofbirth"
          onChangeText={(dateofbirth) => setUserDateofbitrh(dateofbirth)}
        />
      </View>
     

      <View>
        <Button onPress={saveNnavigate}>Seguinte</Button>
      </View>
    </>
  );
};

export default RegisterForm1;
