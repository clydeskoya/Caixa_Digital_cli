import React, { useState, useContext } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, Colors, ActivityIndicator, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { set } from 'ramda';
import { CounterContext2 } from '../../common/formHelper/form.register2';
import terms from './terms';
import { API_URL } from '../../common/constants/api';

// eslint-disable-next-line no-control-regex
const REGEX_EMAIL = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: '50%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5%',
  },
  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: '3%',
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
  goBack: {
    alignSelf: 'flex-start',
    marginTop: '7%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  termos: {
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: '1.5%',
  },
  verTermos: {
    fontWeight: 'bold',
    fontSize: 12,
    textDecorationLine: 'underline',
    backgroundColor: '#D6CFCF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10%',
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
  const [pass, setPassword] = useState('');
  const [data, setData] = useState(null);

  const counterContext2 = useContext(CounterContext2);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [visib, setVisib] = useState(false);
  const showTermsDialog = () => setVisib(true);
  const hideTermsDialog = () => setVisib(false);

  const [dialogTextTitle, setDialogTextTitle] = useState('');
  const [dialogTextContent, setDialogTextContent] = useState('');

  const [checked, setChecked] = useState(false);

  const [verPass, setVerPass] = useState(true);
  const showPass = () => setVerPass(!verPass);

  const [verPassConfirm, setVerPassConfirm] = useState(true);
  const showPassConfirm = () => setVerPassConfirm(!verPassConfirm);

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
    await fetch(`${API_URL}/auth/local/register`, {
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

    if (!pass || !password1) {
      Alert.alert('Crie uma password');
      return;
    }
    if (password1 !== pass) {
      Alert.alert('Erro de confirmação de passwords');
      return;
    }
    if (pass.length < 6) {
      Alert.alert('Número mínimo de caracteres da password: 6');
      return;
    }
    if (checked === false) {
      Alert.alert('Aceite os termos e condições');
      return;
    }

    const dataToSend = {
      identifier: email,
      password: pass,
      user_type: 'client',
    };

    console.log(dataToSend);
    const hey = counterContext2.formData;

    hey.push(dataToSend);

    const forms = counterContext2.formData;
    console.log(forms);

    const form1Values = Object.values(forms[0]);
    const form2Values = Object.values(forms[1]);
    const form3Values = Object.values(forms[2]);

    const dataToSend2 = {
      name: `${form1Values[0]} ${form1Values[1]}`,
      username: email,
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
      identifier: email,
      password: pass,
      user_type: 'client',
    };

    console.log(dataToSend2);
    sendToServer(dataToSend2);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={37} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Registo </Text>
          </View>

          {loading && (
            <View>
              <ActivityIndicator animating color={Colors.blue800} size="large" />
            </View>
          )}

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
                keyboardType="email-address"
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
                keyboardType="email-address"
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
                secureTextEntry={verPass}
                onChangeText={(Pass) => setPassword1(Pass)}
              />
              <TouchableOpacity onPress={showPass}>
                <Ionicons name="eye" size={20} />
              </TouchableOpacity>
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
                secureTextEntry={verPassConfirm}
                onChangeText={(Pass) => setPassword(Pass)}
              />
              <TouchableOpacity onPress={showPassConfirm}>
                <Ionicons name="eye" size={20} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxContainer}>
            <Checkbox
              color="#1DC690"
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
            />
            <Text style={styles.termos}>Aceita os termos e condições da ABAJI? </Text>
            <TouchableOpacity onPress={showTermsDialog}>
              <Text style={styles.verTermos}>VER</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={saveNnavigate}>
            <View style={styles.buttonOK}>
              <Text style={styles.buttonText}> Criar conta </Text>
            </View>
          </TouchableOpacity>
        </View>

        <Provider>
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

          <View>
            <Portal>
              <Dialog visible={visib} dismissable={false}>
                <Dialog.Title>Termos e condições ABAJI</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>{terms}</Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button color="#1C4670" onPress={() => hideTermsDialog()}>
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
