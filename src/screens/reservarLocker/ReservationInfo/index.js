import React from 'react';
import {
  MaskedViewComponent,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/Header';
import { findLastIndex } from 'ramda';

const ReservationInfo = () => {
  const navigation = useNavigation();
  const [Nome, onChangeNome] = React.useState('');
  const [Number, onChangeNumber] = React.useState('');
  const [Street, onChangeStreet] = React.useState('');
  const [Floor, onChangeFloor] = React.useState('');
  const [Door, onChangeDoor] = React.useState('');
  const [City, onChangeCity] = React.useState('');
  const [Postal, onChangePostal] = React.useState(null);
  const [Peso, onChangePeso] = React.useState(null);
  const [Description, onChangeDescription] = React.useState('');
  return (
    <ScrollView>
      <View style={styles.rowHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text>
            <Ionicons name="arrow-back" size={30} style={styles.icon} />
            {/* Go Back */}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScanQrCode');
          }}
        >
          <View style={styles.viewStyle}>
            <Ionicons name="scan-outline" size={30} />
            <Text style={styles.textT}>Scan Locker</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.mainView}>
        <Text style={styles.firsttitle}>Nome completo</Text>
        <TextInput style={styles.input} onChangeText={onChangeNome} value={Nome} />
        <Text style={styles.title}>Número Telemóvel</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={Number}
          placeholder=""
          keyboardType="numeric"
        />
        <Text style={styles.title}>Rua</Text>
        <TextInput style={styles.input} onChangeText={onChangeStreet} value={Street} />
        <View style={styles.row}>
          <View style={styles.tile}>
            <Text style={styles.title}>Andar</Text>
            <TextInput
              style={styles.inputSmall}
              onChangeText={onChangeFloor}
              value={Floor}
              placeholder=""
              keyboardType="numeric"
            />
          </View>
          <View style={styles.tile}>
            <Text style={styles.title}>Porta</Text>
            <TextInput
              style={styles.inputSmall}
              onChangeText={onChangeDoor}
              value={Door}
              placeholder=""
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.tile}>
            <Text style={styles.title}>Cidade</Text>
            <TextInput style={styles.inputSmall} onChangeText={onChangeCity} value={City} />
          </View>
          <View style={styles.tile}>
            <Text style={styles.title}>Código Postal</Text>
            <TextInput
              style={styles.inputSmall}
              onChangeText={onChangePostal}
              value={Postal}
              placeholder=""
              keyboardType="numeric"
            />
          </View>
        </View>
        <Text style={styles.title}>Peso (kg)</Text>
        <TextInput
          style={styles.inputSmallLonely}
          onChangeText={onChangePeso}
          value={Peso}
          placeholder=""
          keyboardType="numeric"
        />
        <Text style={styles.title}>Descrição</Text>
        <TextInput style={styles.inputFullBorder} onChangeText={onChangeDescription} value={Description} />
        <TouchableOpacity
          onPress={() => {
            console.log(Number);
            navigation.navigate('CalendarReservarLocker', {
              checked: 'send',
              nome: `${Nome}`,
              number: `${Number}`,
              street: `${Street}`,
              floor: `${Floor}`,
              door: `${Door}`,
              city: `${City}`,
              postal: `${Postal}`,
              peso: `${Peso}`,
              description: `${Description}`,
            });
          }}
        >
          <View style={styles.viewStyle}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Seguinte</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  rowHeader: {
    marginTop: 50,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  tile: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  firsttitle: {
    marginTop: 30,
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
    borderBottomWidth: 1,
    marginHorizontal: '10%',
  },
  inputSmallLonely: {
    width: '10%',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputFullBorder: {
    height: 100,
    borderWidth: 1,
    marginBottom: '10%',
  },
});

export default ReservationInfo;
