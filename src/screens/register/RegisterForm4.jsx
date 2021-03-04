import React, { useState, useContext } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { CounterContext2 } from "../../common/context/form.register2";
import axios from "axios";
import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";
import * as ramda from "ramda";

const REGEX_EMAIL = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/;

const RegisterForm4 = (props) => {
  const [email1, setEmail1] = useState("");
  const [password1, setPassword1] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const counterContext2 = useContext(CounterContext2);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [dialogTextTitle, setDialogTextTitle] = useState("");
  const [dialogTextContent, setDialogTextContent] = useState("");

  const formSubmitted = (confirmation) => {
    switch (confirmation) {
      case "yes":
        setDialogTextTitle("Sucesso!");
        setDialogTextContent("A sua conta foi criada com sucesso");
        showDialog;
        return;

      case "no":
        setDialogTextTitle("Erro!");
        setDialogTextContent(
          "Algo de inesperado ocorreu. Por favor tente mais tarde!"
        );
        showDialog;
        return;

      default:
        return;
    }
  };

  const sendToServer = async (data) => {
    fetch("https://caixa-digital-cms.herokuapp.com/auth/local/register", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data),
    })
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

  
  const saveNnavigate = () => {
    
    if (!email || !email1) {
      alert("Escreva o seu email");
      return;
    } else if (email1 != email) {
      alert("Erro de confirmação de emails");
      return;
    } else if (!email.match(REGEX_EMAIL)) {
      alert("Email inválido");
      return;
    }

    if (!password || !password1) {
      alert("Crie uma password");
      return;
    } else if (password1 != password) {
      alert("Erro de confirmação de passwords");
      return;
    } else if (password.length < 6) {
      alert("Número mínimo de caracteres: 6");
      return;
    }

    var dataToSend = {
      email: email,
      password: password,
      user_type: "client",
    };

    console.log(dataToSend);
    var hey = counterContext2.formData;

    var ok = hey.push(dataToSend);

    var forms = counterContext2.formData;
    console.log(forms);

    var form1Values = Object.values(forms[0]);
    var form2Values = Object.values(forms[1]);
    var form3Values = Object.values(forms[2]);

   // console.log(form1Values[0]);

    const data = {
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
    
   sendToServer(data);
    
  };

  return (
    <>
      <Provider>
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
            <Portal>
              {/* <Button onPress={showDialog}>Show Dialog</Button> */}
              <Dialog visible={visible} dismissable={false}>
               {/*  <Dialog.Title>Heyy</Dialog.Title> */}
                 <Dialog.Title>{dialogTextTitle}</Dialog.Title> 
                <Dialog.Content>
                  {/* <Paragraph>Sou a Irina</Paragraph> */}
                   <Paragraph>{dialogTextContent}</Paragraph> 
                </Dialog.Content>
                <Dialog.Actions>
                  <Button
                    color="#1C4670"
                    onPress={
                      (hideDialog, () => props.navigation.navigate("LoginForm"))
                    }
                  >OK </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </View>
      </Provider>
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
