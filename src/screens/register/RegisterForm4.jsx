import React, { useState, useContext } from "react";
import { Button, Text, TextInput, View } from "react-native";
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

  const validateEmails = () => {
    if (!email || !email1) return alert("Escreva o seu email");
    if (email1 != email) return alert("Erro de confirmação de emails");
  };

  const validatePasss = () => {
    if (!password || !password1) return alert("Crie uma password");
    if (password1 != password) return alert("Erro de confirmação de passwords");
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

  function valor(obj, val) {
    for (var valor in obj) {
      if (obj[valor] === val && obj.hasOwnProperty(valor)) {
        return valor;
      }
    }
  }

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
    console.log("heyy");
    console.log(hey);

    var ok = hey.push(dataToSend);
    console.log("okkkk");

    var send = counterContext2.formData;
    console.log(send);
    /* var send1 = send.toString();
    console.log(send1);  */
    console.log(send);

    //var arr = send.values();
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
      {/*   <View>
        <Modal visible={modalVisible}>
          <Text>{textModal}</Text>
          <Button
            onPress={props.navigation.navigate("LoginForm"), () => setModalVisible(!modalVisible)}
          >OK</Button>
        </Modal>
      </View> */}

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
      </View>

      <View>
        <Button onPress={saveNnavigate}>Criar conta</Button>
      </View>
    </>
  );
};

export default RegisterForm4;
