import React, { useState } from 'react';
import axios from 'axios';

import { TouchableOpacity, Text, View, TextInput, Image, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors, ActivityIndicator } from 'react-native-paper';
import { styles } from './styles';

const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

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
      const { data } = await axios.post('http://localhost:1337/auth/local', {
        identifier: email,
        password: pass,
      });

      if (data.jwt) {
        props.navigation.navigate('Home');
        console.log('data', data);
        console.log('heyyyyyyyyyyyyyyyyyyyyyyy');
        setLoading(false);
      }
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log('data', error.response.data);
        setLoading(false);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('request', error.request);
        setLoading(false);
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

        {/* <TouchableOpacity onPress={login}> */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
          <View style={styles.bottomActions}>
            <Text style={styles.textLogin}> Login </Text>
          </View>
        </TouchableOpacity>

        <Text>Não tem uma conta?</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('RegisterForm1')}>
          <Text style={styles.textRegister}>Registe-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default LoginForm;

