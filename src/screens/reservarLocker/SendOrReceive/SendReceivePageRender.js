import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../../components/HeaderReservarLocker';
import { RadioButton } from 'react-native-paper';

const SendReceivePage = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <Header />
      <View style={styles.maindiv}>
        <Text style={styles.Simpletext}>Que finalidade da reserva?</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20, marginTop: 10 }}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <View style={styles.radiotext}>
            <Text style={styles.Simpletext}>Envio de correspondências</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: 20 }}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <View style={styles.radiotext}>
            <Text style={styles.Simpletext}>Recebimento de correspondências</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => {
            Actions.payment();
          }}
        >
          <View style={styles.button}>
            <Text style={styles.textr}>Seguinte</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    marginTop: 75,
    marginLeft: 20,
  },
  Simpletext: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    width: 290,
    height: 45,
    marginTop: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: '#1c4670',
    borderRadius: 45,
  },
  textr: {
    color: 'white',
    marginVertical: 5,
    fontSize: 22,
  },
  radiotext: {
    marginVertical: 5,
  },
});

export default SendReceivePage;
