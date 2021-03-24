import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/HeaderReservarLocker';

const SuccessPage = () => {
  const navigation = useNavigation();
  return (
    <View style= {styles.container}>
      <Header />
      <View style={styles.maindiv}>
        <View style={styles.boxwradius}>
          <Text style={styles.title}>Reserva para envio de correspondências efetuada com sucesso.</Text>
          <Ionicons name="checkbox" color="#1DC690" size={40} />
          <Text style={styles.text}>Dia 20/02/2021 - Compartimento 1</Text>
        </View>

        <TouchableOpacity /* onPress={() => navigation.navigate('S')} */>
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
    height: '48%',
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
  }
});

export default SuccessPage;
