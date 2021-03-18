import React, { useState, useContext } from 'react';
import { Text, TextInput, View, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CounterContext2 } from '../../common/formHelper/form.register2';

const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

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
    justifyContent: 'center',
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
    flexDirection: 'row',
    textAlign: 'left',
    justifyContent: 'flex-start',
    padding: '2.5%',
  },

  title: {
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 18,
    // marginBottom: "9%",
  },

  goBack: {
    alignSelf: 'flex-start',
    marginTop: '7%',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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

const RegisterForm3 = (props) => {
  const [bi, setBI] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nif, setNIF] = useState('');

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    if (!bi) {
      Alert.alert('Número de BI/CC');
      return;
    }
    if (!phoneNumber || !phoneNumber.match(REGEX_ONLY_NUMBERS || phoneNumber.length() !== 9)) {
      Alert.alert('Número de telefone inválido');
      return;
    }
    if (!nif || !nif.match(REGEX_ONLY_NUMBERS || nif.length() !== 9)) {
      Alert.alert('NIF inválido');
      return;
    }

    const dataToSend = {
      bi,
      phoneNumber,
      nif,
    };
    console.log(dataToSend);
    counterContext2.formDispatch(dataToSend);
    props.navigation.navigate('RegisterForm4');
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

          <View style={styles.container2}>
            <Text style={styles.title1}> Dados adicionais: </Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title}> Número de BI/CC </Text>
            <View style={styles.inputRow}>
              <TextInput
                type="text"
                placeholder="Número de BI/CC"
                style={styles.TextInputStyle}
                name="BI"
                value={bi}
                onChangeText={(BI) => setBI(BI)}
              />
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title}> Telemóvel </Text>
            <View style={styles.inputRow}>
              <TextInput
                type="text"
                placeholder="Número de telemóvel"
                style={styles.TextInputStyle}
                name="phoneNumber"
                keyboardType="numeric"
                value={phoneNumber}
                onChangeText={(Phone) => setPhoneNumber(Phone)}
              />
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title}> NIF </Text>
            <View style={styles.inputRow}>
              <TextInput
                type="text"
                placeholder="XXXXXXXXX"
                style={styles.TextInputStyle}
                name="NIF"
                keyboardType="numeric"
                value={nif}
                onChangeText={(NIF) => setNIF(NIF)}
              />
            </View>
          </View>

          <TouchableOpacity onPress={saveNnavigate}>
            <View style={styles.buttonOK}>
              <Text style={styles.buttonText}> Seguinte </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterForm3;
