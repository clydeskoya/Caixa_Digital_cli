import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, Colors, ActivityIndicator } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { API_URL } from '../../common/constants/api';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '5%',
    backgroundColor: 'white',
    height: '100%',
  },

  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: '3%',
    alignSelf: 'flex-start',
  },

  container3: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },

  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
    alignSelf: 'flex-start',
  },

  inputRow1: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
    width: '100%',
  },

  TextInputStyle1: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: '5%',
    lineHeight: 23,
    textAlign: 'justify',
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 15,
  },

  buttonOK: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: '#1C4670',
    borderRadius: 45,
    alignSelf: 'center',
    marginTop: '10%',
  },
});

const AlterarPass = (props) => {
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');
  const [codigoVerificacao, setCodigoVerificacao] = useState('');

  const [verPass, setVerPass] = useState(true);
  const showPass = () => setVerPass(!verPass);

  const [verPassConfirm, setVerPassConfirm] = useState(true);
  const showPassConfirm = () => setVerPassConfirm(!verPassConfirm);

  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [dialogTextTitle, setDialogTextTitle] = useState('');
  const [dialogTextContent, setDialogTextContent] = useState('');

  const resetPass = async (data) => {
    setLoading(true);

    await fetch(`${API_URL}/auth/reset-password`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setLoading(false);
          setDialogTextTitle('Sucesso!');
          setDialogTextContent('Password alterada com sucesso');
          showDialog();
        },
        (err) => {
          console.error('error', err);
          setLoading(false);
          setDialogTextTitle('Erro!');
          setDialogTextContent('Algo de inesperado ocorreu. Por favor tente mais tarde!');
          showDialog();
        }
      );
  };

  const sendData = () => {
    if (!codigoVerificacao) {
      Alert.alert('Indique o código de verificação');
      return;
    }
    if (!pass || !passConfirm) {
      Alert.alert('Crie uma password');
      return;
    }
    if (passConfirm !== pass) {
      Alert.alert('Erro de confirmação de passwords');
      return;
    }
    if (pass.length < 6) {
      Alert.alert('Número mínimo de caracteres da password: 6');
      return;
    }
    const data = {
      code: codigoVerificacao,
      password: pass,
      passwordConfirmation: passConfirm,
    };

    resetPass(data);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
            <Ionicons name="close" size={37} />
          </TouchableOpacity>
          <Text style={styles.titlePerf}> Alterar Password </Text>
        </View>

        {loading && (
          <View>
            <ActivityIndicator animating color={Colors.blue800} size="large" />
          </View>
        )}

        <Text style={styles.title1}>
          {' '}
          Foi enviado um código de verificação para o seu email. Por favor, copie e cole no campo abaixo e defina a sua
          nova password.{'\n'}
          {'\n'}
        </Text>

        <View style={styles.container2}>
          <Text style={styles.text}>Insira o código de verificação</Text>
          <View style={styles.inputRow1}>
            <TextInput
              style={styles.TextInputStyle1}
              value={codigoVerificacao}
              id="code"
              name="code"
              placeholder="Código de verificação"
              autoCapitalize="none"
              onChangeText={(Code) => setCodigoVerificacao(Code)}
            />
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Escreva a sua nova password</Text>
          <View style={styles.inputRow1}>
            <TextInput
              style={styles.TextInputStyle1}
              value={pass}
              type="password"
              id="pass"
              name="pass"
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={verPass}
              onChangeText={(Pass) => setPass(Pass)}
            />
            <TouchableOpacity onPress={showPass}>
              <Ionicons name="eye" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.text}>Confirme a sua nova password</Text>
          <View style={styles.inputRow1}>
            <TextInput
              style={styles.TextInputStyle1}
              value={passConfirm}
              type="password"
              id="passConfirm"
              name="passConfirm"
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry={verPassConfirm}
              onChangeText={(Pass) => setPassConfirm(Pass)}
            />
            <TouchableOpacity onPress={showPassConfirm}>
              <Ionicons name="eye" size={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.container3}>
          <TouchableOpacity onPress={sendData}>
            <View style={styles.buttonOK}>
              <Text style={styles.buttonText}> Guardar</Text>
            </View>
          </TouchableOpacity>
        </View>
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
      </Provider>
    </>
  );
};

export default AlterarPass;
