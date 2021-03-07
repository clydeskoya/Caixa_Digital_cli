import React, { useState, useContext } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, Colors, ActivityIndicator } from 'react-native-paper';
import { CounterContext2 } from '../../common/context/form.register2';

// eslint-disable-next-line no-control-regex
const REGEX_EMAIL = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: '50%',
    height: '7%',
    marginTop: '15%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '3%',
  },
  TextInputStyle: {
    textAlign: 'left',
    height: '65%',
    width: '100%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },
  inputRow: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonOK: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: '#1C4670',
    borderRadius: 45,
  },
});

const RegisterForm4 = (props) => {
  const [email1, setEmail1] = useState('');
  const [password1, setPassword1] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState(null);

  const counterContext2 = useContext(CounterContext2);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [dialogTextTitle, setDialogTextTitle] = useState('');
  const [dialogTextContent, setDialogTextContent] = useState('');

  const formSubmitted = (confirmation) => {
    switch (confirmation) {
      case 'yes':
        setDialogTextTitle('Sucesso!');
        setDialogTextContent('A sua conta foi criada com sucesso');
        showDialog();
        return;

      case 'no':
        setDialogTextTitle('Erro!');
        setDialogTextContent('Algo de inesperado ocorreu. Por favor tente mais tarde!');
        showDialog();
        break;

      default:
        /*
            throw Error('Bad usade of "formSubmitted")
          */
        break;
    }
  };
  const [loading, setLoading] = useState(false);
  const sendToServer = async (formData) => {
    setLoading(true);
    await fetch('http://25586195f342.ngrok.io/auth/local/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setData(result.rows);
          console.log(data);
          formSubmitted('yes');
          setLoading(false);
        },
        (err) => {
          console.error('error', err);
          formSubmitted('no');
          setLoading(false);
        }
      );
  };

  const saveNnavigate = () => {
    if (!email || !email1) {
     Alert.alert('Escreva o seu email');
      return;
    }
    if (email1 !== email) {
     Alert.alert('Erro de confirmação de emails');
      return;
    }
    if (!email.match(REGEX_EMAIL)) {
     Alert.alert('Email inválido');
      return;
    }

    if (!password || !password1) {
     Alert.alert('Crie uma password');
      return;
    }
    if (password1 !== password) {
     Alert.alert('Erro de confirmação de passwords');
      return;
    }
    if (password.length < 6) {
     Alert.alert('Número mínimo de caracteres: 6');
      return;
    }

    const dataToSend = {
      email,
      password,
      user_type: 'client',
    };

    console.log(dataToSend);
    const hey = counterContext2.formData;

    const ok = hey.push(dataToSend);

    const forms = counterContext2.formData;
    console.log(forms);

    const form1Values = Object.values(forms[0]);
    const form2Values = Object.values(forms[1]);
    const form3Values = Object.values(forms[2]);

    const dataToSend2 = {
      name: `${form1Values[0]} ${form1Values[1]}`,
      username: 'chachada',
      dateofbirth: form1Values[2],
      gender: form1Values[3],
      street: form2Values[0],
      door: form2Values[1],
      floor: form2Values[2],
      postalCode: form2Values[3],
      locality: form2Values[4],
      city: form2Values[5],
      country: form2Values[6],
      bi: form3Values[0],
      phoneNumber: form3Values[1],
      nif: form3Values[2],
      email,
      password,
      user_type: 'client',
    };

    console.log(dataToSend2);
    sendToServer(dataToSend2);
  };

  return (
    <>
      <ScrollView>
        <Provider>
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Registo </Text>
            </View>

            {loading 
            && <View>
                <ActivityIndicator animating={true} color={Colors.blue800} size={'large'}/>
              </View>}

            <View style={styles.container2}>
              <Text style={styles.title}>Insira o seu email </Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.TextInputStyle}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email1"
                  autoCapitalize="none"
                  onChangeText={(Email) => setEmail1(Email)}
                />
              </View>
            </View>

            <View style={styles.container2}>
              <Text style={styles.title}>Confirme o seu email </Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.TextInputStyle}
                  type="email"
                  placeholder="Email"
                  id="email_confirm"
                  name="email2"
                  autoCapitalize="none"
                  onChangeText={(Email) => setEmail(Email)}
                />
              </View>
            </View>

            <View style={styles.container2}>
              <Text style={styles.title}>Crie uma palavra-passe </Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.TextInputStyle}
                  type="password"
                  placeholder="Password"
                  id="pass"
                  name="password1"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={(Pass) => setPassword1(Pass)}
                />
              </View>
            </View>

            <View style={styles.container2}>
              <Text style={styles.title}>Confirme a palavra-passe </Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.TextInputStyle}
                  type="password"
                  placeholder="Password"
                  id="pass_confirm"
                  name="password2"
                  autoCapitalize="none"
                  secureTextEntry
                  onChangeText={(Pass) => setPassword(Pass)}
                />
              </View>
            </View>

            <TouchableOpacity onPress={saveNnavigate}>
              <View style={styles.buttonOK}>
                <Text style={{ color: 'white' }}> Criar conta </Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <Portal>
              <Dialog visible={visible} dismissable={false}>
                <Dialog.Title>{dialogTextTitle}</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>{dialogTextContent}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button color="#1C4670" onPress={(hideDialog, () => props.navigation.navigate('LoginForm'))}>
                    OK{' '}
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </Provider>
      </ScrollView>
    </>
  );
};

export default RegisterForm4;
