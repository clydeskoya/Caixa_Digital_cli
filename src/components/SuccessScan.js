import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from './HeaderReservarLocker';

const SuccessScan = ({ props }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.maindiv}>
        <View style={styles.boxwradius}>
          <Text style={styles.title}>Scan efetuado com sucesso.</Text>
          <Ionicons name="checkbox" color="#1DC690" size={40} />
          <Text style={styles.text}>Locker aberto</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sair </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    alignItems: 'center',
    // height: '100%',
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '8%',
    marginTop: '8%',
  },
  text: {
    fontSize: 16,
    marginTop: '8%',
    textAlign: 'center',
  },
  boxwradius: {
    marginTop: '20%',
    width: '80%',
    height: '40%',
    borderRadius: 15,
    borderWidth: 5,
    borderColor: '#D6CFCF',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginTop: '30%',
    backgroundColor: '#D6CFCF',
    borderRadius: 45,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
});

export default SuccessScan;
