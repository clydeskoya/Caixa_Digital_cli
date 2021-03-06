import React, { useContext, useState, setState } from "react";
import { CounterContext2 } from "../../common/context/form.register2";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
  const [gender, setGender] = useState("Feminino");

  var radio_props = [
    { label: "Feminino   ", value: 0 },
    { label: "Masculino   ", value: 1 },
    { label: "Outro", value: 1 },
  ];

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    if (!username) {
     Alert.alert("Escreva o seu nome");
      return;
    }
    if (!usersurname) {
     Alert.alert("Escreva o seu apelido");
      return;
    }
    if (!dateofbirth || !dateofbirth.match(REGEX_DATE_OF_BIRTH)) {
     Alert.alert("Data de nascimento inválida! \n Formato DD/MM/AAAA");
      return;
    }
    if (!gender) {
     Alert.alert("Género");
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
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 22 }}>
              {" "}
              Registo{" "}
            </Text>
          </View>

          {/* <View style={styles.container}> */}
          <Text style={styles.title}>Qual o seu nome? </Text>
          {/*</View>*/}
          <View style={styles.inputRow}>
            <TextInput
              value={username}
              type="text"
              placeholder="Nome próprio"
              style={styles.TextInputStyleName}
              name="username"
              onChangeText={(UserName) => setUserName(UserName)}
            />

            <TextInput
              value={usersurname}
              type="text"
              placeholder="Apelido"
              style={styles.TextInputStyleSurname}
              name="usersurname"
              onChangeText={(UserSurname) => setUserSurname(UserSurname)}
            />
          </View>
          {/* </View> */}

          <View style={styles.container2}>
            <Text style={styles.title}>Data de nascimento </Text>
            <View style={styles.inputRow}>
              <TextInput
                value={dateofbirth}
                type="text"
                placeholder="01/01/2000"
                style={styles.TextInputStyleDate}
                name="dateofbirth"
                onChangeText={(dateofbirth) => setUserDateofbitrh(dateofbirth)}
              />
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title1}>Género</Text>
            <RadioForm
              radio_props={radio_props}
              buttonColor="#000000"
              formHorizontal={true}
              animation={true}
              selectedButtonColor="#1DC690"
              initial={0}
              onPress={setGender}
            />
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={saveNnavigate}>
              <View style={styles.buttonOK}>
                <Text style={{ color: "white" }}> Seguinte </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterForm1;

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "8%",
    width: "50%",
    height: "7%",
    marginTop: "15%",
    backgroundColor: "#1DC690",
    borderRadius: 15,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },
  container2: {
    alignItems: "center",
    justifyContent: "center",
    padding: "5%",
  },

  TextInputStyleName: {
    height: "65%",
    width: "45%",
    marginRight: "4%",
    borderBottomColor: "#726F6F",
    borderBottomWidth: 1,
  },
  TextInputStyleSurname: {
    height: "65%",
    width: "45%",
    marginLeft: "4%",
    borderBottomColor: "#726F6F",
    borderBottomWidth: 1,
  },
  TextInputStyleDate: {
    // /* height: "65%",*/
    width: "25%",
    marginLeft: "4%",
    borderBottomColor: "#726F6F",
    borderBottomWidth: 1,
  },
  inputRow: {
    textAlign: "left",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "2.5%",
    marginLeft: "2%",
  },
  inputRowDate: {
    textAlign: "left",
    //flexDirection: "row",
    justifyContent: "space-around",
    padding: "2.5%",
    //marginLeft:"2%"
  },
  title: {
    fontWeight: "bold",
    fontSize: 15,
  },
  title1: {
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: "3%",
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
