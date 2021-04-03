import { StyleSheet, TouchableOpacity, Text, TextInput, View, ScrollView, Alert } from 'react-native';
import { prop } from 'ramda';
import React, { useState, useContext, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { CounterContext2 } from '../../common/formHelper/form.register2';

const REGEX_POSTAL_CODE = /^\d{4}-\d{3}?$/;
const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

const RegisterForm2 = (props) => {
  const [street, setStreet] = useState('Rua António Janeiro');
  const [door, setDoor] = useState('D');
  const [floor, setFloor] = useState('3');
  const [postalCode, setPostalColde] = useState('2735-272');
  const [locality, setLocality] = useState('');
  const [city, setCity] = useState('lisboa');
  const [country, setCountry] = useState('Portugal');

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    if (!street) {
      Alert.alert('Indique a sua rua');
      return;
    }
    // if (!door || !door.match(REGEX_ONLY_NUMBERS)) {
    if (!door) {
      Alert.alert('Indique o seu número de porta');
      return;
    }
    if (!floor) {
      Alert.alert('Indique o seu andar');
      return;
    }
    if (!postalCode || !postalCode.match(REGEX_POSTAL_CODE)) {
      Alert.alert('Código postal inválido');
      return;
    }
    if (!city) {
      Alert.alert('Selecione a sua cidade');
      return;
    }

    const dataToSend = {
      street,
      door,
      floor,
      postalCode,
      locality,
      city,
      country,
    };

    console.log(dataToSend);
    counterContext2.formDispatch(dataToSend);
    props.navigation.navigate('RegisterForm3');
  };

  useEffect(() => {
    async function fetchData() {
      const zip = postalCode.slice(0, 4);
      const code = postalCode.slice(5, 8);
      await fetch(`https://www.ctt.pt/feecom/app/open/common/postalcodesearch.jspx?cp4=${zip}&cp3=${code}`)
        .then(
          (res) => res.json(),
          (error) => console.error(error)
        )
        .then(
          (result) => {
            console.log('result', result);
            setLocality(prop('value', result));
          },
          (error) => console.error(error)
        );
    }
    if (REGEX_POSTAL_CODE.test(postalCode)) {
      fetchData();
    } else if (locality.length) {
      setLocality('');
    }
  }, [postalCode]);

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
            <Text style={styles.title}>Indique a sua morada </Text>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title1}>Rua, Nº de Porta, Andar</Text>
            <View style={styles.inputRow}>
              <TextInput
                value={street}
                type="text"
                placeholder="Rua"
                style={styles.TextInputStyleStreet}
                name="street"
                onChangeText={(Street) => setStreet(Street)}
              />

              <TextInput
                value={floor}
                type="text"
                placeholder="Andar"
                style={styles.TextInputStyleFloor}
                name="floor"
                onChangeText={(Floor) => setFloor(Floor)}
              />

              <TextInput
                value={door}
                type="text"
                placeholder="Porta"
                style={styles.TextInputStyleDoor}
                name="door"
                keyboardType="numeric"
                onChangeText={(Door) => setDoor(Door)}
              />
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title1}>Código Postal</Text>
            <View style={styles.inputRow}>
              <TextInput
                value={postalCode}
                type="text"
                placeholder="XXXX-XXX"
                style={styles.TextInputStyleZipcode}
                name="postalCode"
                id="zipcode"
                keyboardType="numeric"
                onChangeText={(PostalCode) => setPostalColde(PostalCode)}
              />
              <Text style={styles.titleLocality}>{locality}</Text>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title1}>Cidade</Text>
            <View style={styles.inputRow}>
              <Picker
                selectedValue={city}
                // style={{ height: 50, width: 150 }}
                style={styles.TextInputStyleCity}
                onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
              >
                <Picker.Item label="Lisboa" value="lisboa" />
                <Picker.Item label="Porto" value="porto" />
                <Picker.Item label="Algarve" value="algarve" />
                <Picker.Item label="Braga" value="braga" />
                <Picker.Item label="Coimbra" value="coimbra" />
              </Picker>
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title1}>Pais</Text>
            <View style={styles.inputRow}>
              <TextInput
                type="text"
                placeholder="Portugal"
                value="Portugal"
                style={styles.TextInputStyle}
                name="country"
                editable={false}
                onChangeText={(Country) => setCountry(Country)}
              />
            </View>
          </View>

          <View style={styles.buttonOK}>
            <TouchableOpacity onPress={saveNnavigate}>
              <Text style={styles.buttonText}> Seguinte </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterForm2;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: '50%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 45,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },

  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: '2.5%',
  },

  TextInputStyle: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleCity: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleStreet: {
    textAlign: 'left',
    width: '50%',
    marginBottom: '3%',
    marginRight: '5%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleDoor: {
    textAlign: 'left',
    width: '20%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleFloor: {
    textAlign: 'left',
    width: '20%',
    marginRight: '5%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleZipcode: {
    textAlign: 'left',
    width: '22%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  inputRow: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 17,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2%',
    paddingBottom: '6.5%',
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 13,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  titleLocality: {
    fontSize: 12.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    textAlign: 'left',
    flexDirection: 'row',
    padding: '2.5%',
    marginRight: '41%',
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
    marginVertical: '10%',
    backgroundColor: '#1C4670',
    borderRadius: 45,
  },
});
