import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/HeaderReservarLocker';

const SuccessPage = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <View style={styles.maindiv}>
        <TouchableOpacity onPress={() => navigation.navigate('scanqrcode')}>
          <View style={styles.boxwradius}>
            <Text style={styles.boxtext}>Reserva para envio de correspondências efetuada com sucesso.</Text>
            <View style={styles.check}></View>
            <Text style={styles.boxtext}>Dia 20/02/2021 - Compartimento 1</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.textr}>Sair </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    alignItems: 'center',
  },
  check: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    marginVertical: 10,
  },
  boxtext: {
    fontSize: 18,
    marginTop: 20,
    marginHorizontal: 10,
  },
  boxwradius: {
    marginTop: 50,
    width: 345,
    height: 240,
    borderRadius: 40,
    borderWidth: 5,
    borderColor: '#D6CFCF',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    width: 290,
    height: 45,
    marginTop: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#D6CFCF',
    borderRadius: 45,
  },
  textr: {
    color: 'black',
    marginVertical: 5,
    fontSize: 22,
  },
});

export default SuccessPage;
