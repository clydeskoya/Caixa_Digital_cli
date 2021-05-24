import React, { useContext, useState } from 'react';
import axios from 'axios';

import { TouchableOpacity, Text, View, TextInput, Image, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, ActivityIndicator, Dialog, Portal, Provider, Paragraph, Button } from 'react-native-paper';
import { API_URL } from '../../common/constants/api';
import { styles } from './styles';
import { LoginContext } from '../../common/loginHelper/responseData';

const LoginForm = (props) => {
  const [email, setEmail] = useState('clientsmilley4@gmail.com');
  const [pass, setPass] = useState('strapiPassword');
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const loginContext = useContext(LoginContext);

  const login = async () => {
    if (!email) {
      Alert.alert('Indique o seu email');
      return;
    }
    if (!pass) {
      Alert.alert('Forneça a sua password');
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API_URL}/auth/local`, {
        identifier: email,
        password: pass,
      });
      if (data.jwt) {
       // console.log('data', data);
        loginContext.loginDispatch(data);
        setLoading(false);
        props.navigation.navigate('Home');
      }
    } catch (error) {
      setLoading(false);
      showDialog();
      if (error.response) {
        // Request made and server responded
        console.log('error.response', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('error.request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error.message', error.message);
      }
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.oval}>
          <Image source={require('../../img/logowtxt.png')} style={styles.logo} />
        </View>
        {loading && (
          <View>
            <ActivityIndicator animating color={Colors.blue800} size="large" />
          </View>
        )}
        <View style={styles.inputRow}>
          <Ionicons name="person-outline" color="#1C4670" size={35} />
          <TextInput
            style={styles.input}
            type="email"
            id="inputEmail"
            name="identifier"
            placeholder="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            onChangeText={(Email) => setEmail(Email)}
            value={email}
          />
        </View>

        <View style={styles.inputRow}>
          <Ionicons name="key-outline" color="#1C4670" size={35} />
          <TextInput
            style={styles.input}
            type="password"
            id="inputPassword"
            name="password"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(Pass) => setPass(Pass)}
            value={pass}
          />
        </View>

        <TouchableOpacity onPress={login}>
          <View style={styles.bottomActions}>
            <Text style={styles.textLogin}> Login </Text>
          </View>
        </TouchableOpacity>

        <Text>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('RegisterForm1')}>
          <Text style={styles.textRegister}>Registe-se</Text>
        </TouchableOpacity>
      </View>

      <Provider>
        <View>
          <Portal>
            <Dialog visible={visible} dismissable={false}>
              <Dialog.Title>Erro!</Dialog.Title>
              <Dialog.Content>
                <Paragraph>Algo de inesperado ocorreu. Por favor tente mais tarde!</Paragraph>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color="#1C4670" onPress={hideDialog}>
                  OK
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
    </ScrollView>
  );
};

export default LoginForm;
