import React, { useState, useContext } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CounterContext2 } from "../../common/context/form.register2";
import axios from "axios";
import Modal from "react-native-modal";

const RegisterForm4 = (props) => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const counterContext2 = useContext(CounterContext2);

  const [modalVisible, setModalVisible] = useState(false);
  const [textModal, setTextModal] = useState("");

/*   function IsEmail(email) {
    var exclude = /[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check = /@[w-]+./;
    var checkend = /.[a-zA-Z]{2,3}$/;
    if (
      email.search(exclude) != -1 ||
      email.search(check) == -1 ||
      email.search(checkend) == -1
    ) {
      return false;
    } else {
      return true;
    }
  } */

  const validateEmails = () => {
    if (!email || !email1) return alert("Escreva o seu email");
    else if (email1 != email) return alert("Erro de confirmação de emails");
    //else if (!IsEmail(email)) return alert("Email inválido");
  };

  const validatePasss = () => {
    if (!password || !password1) return alert("Crie uma password");
    else if (password1 != password)
      return alert("Erro de confirmação de passwords");
  };

  const formSubmitted = (confirmation) => {
    switch (confirmation) {
      case "yes":
        setTextModal("A sua conta foi criada com sucesso");
        setModalVisible(!modalVisible);
        return;

      case "no":
        setTextModal("Algo de inesperado ocorreu. Por favor tente mais tarde!");
        setModalVisible(!modalVisible);
        return;

      default:
        return;
    }
  };

  const sendToServer = async (data) => {
    fetch("https://caixa-digital-cms.herokuapp.com/auth/local/register", {
      method: "POST",
      body: data,
    })
      /* .then((response) => response.json())
    .then((responseJson) => {
      //Hide Loader
     // setLoading(false);
      console.log(responseJson);
      // If server response message same as Data Matched
      if (responseJson.status === 'success') {
        formSubmitted("yes");
        console.log(
          'Registration Successful. Please Login to proceed'
        );
      } else {
        console.log(responseJson.msg);
        formSubmitted("no");
      }
    })
    .catch((error) => {
      //Hide Loader
      setLoading(false);
      console.error(error);
    }); */
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("result", result);
          setData(result.rows);
          formSubmitted("yes");
        },
        (err) => {
          console.log("error", err);
          formSubmitted("yes");
        }
      );
  };

  const saveNnavigate = async () => {
    validateEmails();
    validatePasss();

    var dataToSend = {
      email: email,
      password: password,
      user_type: "client",
    };

    console.log(dataToSend);
    var hey = counterContext2.formData;

    var ok = hey.push(dataToSend);

    var send = counterContext2.formData;
    console.log(send);

    const form1 = send[0];
    const form2 = send[1];
    const form3 = send[2];

    var form1Values = Object.values(form1);
    var form2Values = Object.values(form2);
    var form3Values = Object.values(form3);

    console.log(Object.values(form1));
    console.log(form1Values[0]);

    var hey = {
      username: form1Values[0],
      usersurname: form1Values[1],
      dateofbirth: form1Values[2],
      gender: form1Values[3],
      street: form2Values[0],
      door: form2Values[1],
      floor: form2Values[2],
      postalCode: form2Values[3],
      locality: form2Values[4],
      district: form2Values[5],
      country: form2Values[6],
      bi: form3Values[0],
      phoneNumber: form3Values[1],
      nif: form3Values[2],
      email: email,
      password: password,
      user_type: "client",
    };
    console.log(hey);

    try {
      const { data } = await axios.post(
        "https://caixa-digital-cms.herokuapp.com/auth/local/register",
        {
          username: form1Values[0],
          usersurname: form1Values[1],
          dateofbirth: form1Values[2],
          gender: form1Values[3],
          street: form2Values[0],
          door: form2Values[1],
          floor: form2Values[2],
          postalCode: form2Values[3],
          locality: form2Values[4],
          district: form2Values[5],
          country: form2Values[6],
          bi: form3Values[0],
          phoneNumber: form3Values[1],
          nif: form3Values[2],
          email: email,
          password: password,
          user_type: "client",
        }
      );
      console.table(data);
      console.log("deu certo");
    } catch {
      console.error();
    }
    //sendToServer(final);
  };

  return (
    <>
      <View>
        <Text>Insira o seu email </Text>
        <TextInput
          type="email"
          placeholder="Email"
          id="email"
          name="email1"
          autoCapitalize="none"
          onChangeText={(Email) => setEmail1(Email)}
        />

        <Text>Confirme o seu email </Text>
        <TextInput
          type="email"
          placeholder="Email"
          id="email_confirm"
          name="email2"
          autoCapitalize="none"
          onChangeText={(Email) => setEmail(Email)}
        />

        <Text>Crie uma palavra-passe </Text>
        <TextInput
          type="password"
          placeholder="Password"
          id="pass"
          name="password1"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(Pass) => setPassword1(Pass)}
        />

        <Text>Confirme a palavra-passe </Text>
        <TextInput
          type="password"
          placeholder="Password"
          id="pass_confirm"
          name="password2"
          autoCapitalize="none"
          secureTextEntry={true}
          onChangeText={(Pass) => setPassword(Pass)}
        />

        <View style={styles.buttonOK}>
          <TouchableOpacity onPress={saveNnavigate}>
            <Text style={{ color: "white" }}> Criar conta </Text>
          </TouchableOpacity>
        </View>

        <View>
          {/* <Modal visible={modalVisible}>
            <Text>{textModal}</Text>
            <Button
              onPress={
                (props.navigation.navigate("LoginForm"),
                () => setModalVisible(!modalVisible))
              }
            >
              OK
            </Button>
          </Modal> */}
        </View>
      </View>
    </>
  );
};

export default RegisterForm4;

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
