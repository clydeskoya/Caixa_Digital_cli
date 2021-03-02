import React, { useState, useContext } from "react";
import { Button, Text, TextInput, View, ViewComponent } from "react-native";
import { CounterContext2 } from "../../common/context/form.register2";
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
  }

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
          console.log("error", err)
          formSubmitted("yes");
        }
      ); 
  };

  const saveNnavigate = () => {
    validateEmails();
    validatePasss();

    var dataToSend = {
      email: email,
      password: password,
    };

    console.log(dataToSend);
    const dataJSON = JSON.stringify(dataToSend);
    console.log(dataJSON);
    const dataStrapi = dataJSON.slice(1, dataJSON.length-1);
    console.log(dataStrapi);
    counterContext2.formDispatch(dataStrapi);
    const hey = (counterContext2.formData);
    const ok = hey.toString();
    //const ok = ok.concat(",");
    const final = ok + dataStrapi + "," + "\"user_type\": \"client\"}";
    console.log("heyy");
    console.log(hey);
    console.log(final);
    sendToServer(final);
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
