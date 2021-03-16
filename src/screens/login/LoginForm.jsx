import React, { useState } from 'react';
import axios from 'axios';

import { TouchableOpacity, Text, View, TextInput, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles';


const LoginForm = (props) => {
  const [email, setEmail] = useState('albertasorriso@gmail.com');
  const [pass, setPass] = useState('strapiPassword');

  const login = async () => {
    if (!email) {
      Alert.alert('Indique o seu email');
      return;
    }
    if (!pass) {
      Alert.alert('Forneça a sua password');
      return;
    }

    try {
      const { data } = await axios.post('https://caixa-digital-cms.herokuapp.com/auth/local', {
        identifier: email,
        password: pass,
      });

      if (data.jwt) {
        props.navigation.navigate('Home');
        console.log('data', data);
      }
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log('data', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('request', error.request);
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
        <Text style={styles.textRegister} onPress={() => props.navigation.navigate('RegisterForm1')}>
          Registe-se
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginForm;

