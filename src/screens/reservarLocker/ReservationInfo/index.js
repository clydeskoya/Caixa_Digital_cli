import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/HeaderReservarLocker';
import { findLastIndex } from 'ramda';

const ReservationInfo = () => {
  const navigation = useNavigation();
  const [Nome, onChangeNome] = React.useState('');
  const [Morada, onChangeMorada] = React.useState('');
  const [Postal, onChangePostal] = React.useState(null);
  const [Peso, onChangePeso] = React.useState(null);
  const [Description, onChangeDescription] = React.useState('');
  return (
    <View style={styles.mainView}>
      <Header />
      <Text style={styles.title}>Nome completo do destinatário</Text>
      <TextInput style={styles.input} onChangeText={onChangeNome} value={Nome} />
      <Text style={styles.title}>Morada completa</Text>
      <TextInput style={styles.input} onChangeText={onChangeMorada} value={Morada} />
      <Text style={styles.title}>Código Postal</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangePostal}
        value={Postal}
        placeholder=""
        keyboardType="numeric"
      />
      <Text style={styles.title}>Peso (kg)</Text>

      <TextInput
        style={styles.inputSmall}
        onChangeText={onChangePeso}
        value={Peso}
        placeholder=""
        keyboardType="numeric"
      />

      <Text style={styles.title}>Descrição</Text>
      <TextInput style={styles.inputFullBorder} onChangeText={onChangeDescription} value={Description} />
      <TouchableOpacity onPress={() => navigation.navigate('PaymentReservarLocker')}>
        <View style={styles.viewStyle}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Seguinte</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  Simpletext: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#1c4670',
    borderRadius: 45,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    height: '5%',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  inputSmall: {
    width: '10%',
    height: '5%',

    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  inputFullBorder: {
    height: 100,

    borderWidth: 1,
    marginBottom: '10%',
  },
});

export default ReservationInfo;
