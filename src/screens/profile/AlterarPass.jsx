import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, Colors, ActivityIndicator, Checkbox } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { construct, prop } from 'ramda';
import { LoginContext } from '../../common/loginHelper/responseData';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '5%',
    backgroundColor: 'white',
    height: '100%',
  },

  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginVertical: '3%',
  },

  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
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
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
  },
});

const AlterarPass = (props) => {
  const [pass, setPass] = useState('');
  const [passConfirm, setPassConfirm] = useState('');

  const [verPass, setVerPass] = useState(true);
  const showPass = () => !verPass;

  const [verPassConfirm, setVerPassConfirm] = useState(true);
  const showPassConfirm = () => !verPassConfirm;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
          <Ionicons name="close" size={37} />
        </TouchableOpacity>
        <Text style={styles.titlePerf}> Alterar Password </Text>
      </View>
      <Text style={styles.title1}>
        Foi enviado um código de verificação para o seu email. {'\n'}Por favor, copie e cole no campo abaixo e defina a
        sua nova password.{'\n'}
        {'\n'}
      </Text>

      <View style={styles.container2}>
        <Text>Insira o código de verificação</Text>
        <View style={styles.inputRow1}>
          <TextInput
            style={styles.TextInputStyle1}
            value={pass}
            id="pass"
            name="password"
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(Pass) => setPass(Pass)}
          />
        </View>
      </View>

      <View style={styles.container2}>
        <Text>Escreva a sua nova password</Text>
        <View style={styles.inputRow1}>
          <TextInput
            style={styles.TextInputStyle1}
            value={pass}
            type="password"
            id="pass"
            name="password"
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry={verPass}
            onChangeText={(Pass) => setPass(Pass)}
          />
          <TouchableOpacity>
            <Ionicons name="eye" size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container2}>
        <Text>Confirme a sua nova password</Text>
        <View style={styles.inputRow1}>
          <TextInput
            style={styles.TextInputStyle1}
            value={pass}
            type="password"
            id="pass"
            name="password"
            placeholder="********"
            autoCapitalize="none"
            secureTextEntry={verPassConfirm}
            onChangeText={(Pass) => setPass(Pass)}
          />
          <TouchableOpacity onPress={showPassConfirm}>
            <Ionicons name="eye" size={20} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AlterarPass;
