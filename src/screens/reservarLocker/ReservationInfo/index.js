import React, { useContext, useState, useMemo, useCallback, useEffect } from 'react';
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
import axios from 'axios';
import { path, prop, findLastIndex } from 'ramda';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { LoginContext } from '../../../common/loginHelper/responseData';
import Header from '../../../components/HeaderReservarLocker';

const getFirst4DigitsOfPostalCode = (arg) => {
  if (prop('length', arg)) {
    const pcAsArr = arg.split('-');
    if (pcAsArr.length && pcAsArr[0].length === 4) return pcAsArr[0];
  }
};

const ReservationInfo = () => {
  const loginContext = useContext(LoginContext);

  const postalCode = path(['loginData', 'user', 'entity', 'address', 'postalCode'], loginContext);

  const navigation = useNavigation();
  const [Nome, onChangeNome] = React.useState('');
  const [Number, onChangeNumber] = React.useState('');
  const [Street, onChangeStreet] = React.useState('');
  const [Floor, onChangeFloor] = React.useState('');
  const [Door, onChangeDoor] = React.useState('');
  const [City, onChangeCity] = React.useState('');
  const [postalCodeReceiver, onChangePostalReceiverRaw] = React.useState(null);
  const [Postal2, onChangePostal2] = React.useState(null);
  const [Peso, onChangePesoRaw] = React.useState(null);
  const [Description, onChangeDescription] = React.useState('');

  const first4PCDigitUser = useMemo(() => '1600' || getFirst4DigitsOfPostalCode(postalCode), [postalCode]);

  const [precoCtt, setPrecoCtt] = useState(null);

  const withResetPreco =
    // useCallback(
    (setterBeingWrapped) => (val) => {
      setPrecoCtt(null);
      setterBeingWrapped(val);
    };
  //   ,
  //   [setterBeingWrapped, val],
  // )

  const onChangePostalReceiver = withResetPreco(onChangePostalReceiverRaw);
  const onChangePeso = withResetPreco(onChangePesoRaw);

  const getPrice = async () => {
    try {
      const { data } = await axios.post(
        `https://www.ctt.pt/feecom/app/open/shipping/price.jspx?clientId=a8a8e24d-1291-4bad-8e25-5e544d509f3c&product=EMSF056.01&weight=${Peso}&senderCp=${first4PCDigitUser}&recipientCountry=PT&recipientCp=${postalCodeReceiver}&collectionType=PCK&deliveryType=PCK`
      );
      console.log(data);
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log('error.response', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('error.request', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error.message', error.message);
      }
    }
  };

  useEffect(() => {
    const getPrice2 = async () => {
      try {
        console.log('A obter o preço');
        const { data } = await axios.post(
          `https://www.ctt.pt/feecom/app/open/shipping/price.jspx?clientId=a8a8e24d-1291-4bad-8e25-5e544d509f3c&product=EMSF056.01&weight=${Peso}&senderCp=${first4PCDigitUser}&recipientCountry=PT&recipientCp=${postalCodeReceiver}&collectionType=PCK&deliveryType=PCK`
        );
        console.log(data);
        setPrecoCtt(data);
      } catch (error) {
        setPrecoCtt(null);
        if (error.response) {
          // Request made and server responded
          console.log('error.response', error.response.data);
        } else if (error.request) {
          // The request was made but no response was received
          console.log('error.request', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error.message', error.message);
        }
      }
    };

    // condição para pedir // validar isto melhor talvez
    console.log('Peso:', Peso);
    console.log('Typeof Peso:', typeof Peso);
    const cond1 = !precoCtt;
    const cond2 = prop('length', first4PCDigitUser) === 4;
    const cond3 = prop('length', postalCodeReceiver) === 4;
    const cond4 = Peso && !isNaN(Peso);
    console.log('Peso', Peso);
    console.log('cond1', cond1);
    console.log('cond2', cond2);
    console.log('cond3', cond3);
    console.log('cond4', cond4);
    if (
      !precoCtt &&
      prop('length', first4PCDigitUser) === 4 &&
      prop('length', postalCodeReceiver) === 4 &&
      Peso &&
      !isNaN(Peso)
    ) {
      getPrice2();
    }
  }, [Peso, first4PCDigitUser, postalCodeReceiver]);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back" size={30} style={styles.icon} />
          </TouchableOpacity>

          <Text style={styles.titlePerf}> Dados de envio </Text>

          {/* <TouchableOpacity
            onPress={() => {
              navigation.navigate('ScanQrCode');
            }}
          >
            <View style={styles.viewStyle}>
              <Ionicons name="scan-outline" size={30} />
              <Text style={styles.textT}>Scan Locker</Text>
            </View>
          </TouchableOpacity> */}
        </View>

        {/* <View style={styles.mainView}> */}
        <View style={styles.container2}>
          <Text style={styles.title1}>Nome do destinatário</Text>

          <TextInput
            style={styles.TextInputStyle}
            onChangeText={onChangeNome}
            placeholder="Nome e Apelido"
            value={Nome}
          />
        </View>

        <View style={styles.container2}>
          <Text style={styles.title1}> Telemóvel</Text>
          <TextInput
            style={styles.TextInputStyle}
            onChangeText={onChangeNumber}
            value={Number}
            placeholder="Número de telemóvel"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.container2}>
          <Text style={styles.title1}>Rua, Andar, Porta</Text>

          <View style={styles.inputRow}>
            <TextInput
              type="text"
              placeholder="Rua"
              style={styles.TextInputStyleStreet}
              onChangeText={onChangeStreet}
              value={Street}
            />

            <TextInput
              placeholder="Andar"
              keyboardType="numeric"
              style={styles.TextInputStyleFloor}
              onChangeText={onChangeFloor}
              value={Floor}
            />

            <TextInput
              placeholder="Porta"
              // keyboardType="numeric"
              style={styles.TextInputStyleDoor}
              onChangeText={onChangeDoor}
              value={Door}
            />
          </View>
        </View>

        <View style={styles.container2}>
          {/* <View style={styles.row}> */}
          {/* <View style={styles.tile}> */}
          <Text style={styles.title1}>Código Postal</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.inputSmall}
              onChangeText={onChangePostalReceiver}
              value={postalCodeReceiver}
              placeholder="0000"
              keyboardType="numeric"
            />
            <Text> _{'  '}</Text>
            <TextInput
              style={styles.inputSmall}
              onChangeText={onChangePostal2}
              value={Postal2}
              placeholder="000"
              keyboardType="numeric"
            />
            {/* </View> */}
            {/* </View> */}
            {/* <View style={styles.tile}> */}
            {/* <Text style={styles.title1}>Cidade</Text> */}
            <TextInput style={styles.inputCity} onChangeText={onChangeCity} value={City} placeholder="Localidade" />
            {/* meti localidade porque no figma está assim e era o que este campo deveria representar, aliás nem era preciso
            pedir ao user que indique se temos como ir buscar a localidade através do código postal, como tínhamos
            acordado */}
          </View>
          {/* </View> */}
        </View>

        <View style={styles.container2}>
          {/* <View style={styles.tile}> */}
          <Text style={styles.title1}>Peso (kg)</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.TextInputStyleWeight}
              onChangeText={onChangePeso}
              value={Peso}
              placeholder=""
              keyboardType="numeric"
            />
            {/* </View> */}
            {/* <View style={styles.priceTile}> */}
            {/* </View> */}
            <Text style={styles.priceText}>Preço: {precoCtt}</Text>
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.title1}>Descrição</Text>
          <TextInput
            style={styles.inputFullBorder}
            placeholder="  Breve descrição da corrrespondência"
            onChangeText={onChangeDescription}
            value={Description}
          />
        </View>

        <View style={styles.buttonOK}>
          <TouchableOpacity
            onPress={() => {
              getPrice();
              navigation.navigate('CalendarReservarLocker', {
                checked: 'send',
                nome: `${Nome}`,
                number: `${Number}`,
                street: `${Street}`,
                floor: `${Floor}`,
                door: `${Door}`,
                city: `${City}`,
                postal: `${postalCodeReceiver}`,
                peso: `${Peso}`,
                description: `${Description}`,
              });
            }}
          >
            {/* <View style={styles.viewStyle}>
              <View style={styles.button}> */}
            <Text style={styles.buttonText}>Seguinte</Text>
            {/*  </View>
            </View> */}
          </TouchableOpacity>
        </View>
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
  priceTile: {
    display: 'flex',
    flexDirection: 'column',
    marginHorizontal: 40,
    marginTop: 20,
  },
  priceText: {
    fontSize: 17,
    color: '#1DC690',
    fontWeight: 'bold',
    marginLeft: '40%',
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

  buttonOK: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginVertical: '10%',
    backgroundColor: '#1C4670',
    borderRadius: 45,
    alignSelf: 'center',
  },

  input: {
    height: '5%',
    borderBottomWidth: 1,
    marginBottom: '5%',
  },
  inputSmall: {
    width: '12%',
    borderBottomWidth: 1,
    // marginHorizontal: 10,
  },
  inputCity: {
    width: '25%',
    borderBottomWidth: 1,
    // marginHorizontal: 10
    marginLeft: '10%',
  },
  inputSmallLonely: {
    width: '10%',
    marginHorizontal: 10,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputFullBorder: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    marginBottom: '5%',
    marginTop: '7%',
    textAlign: 'justify',
    textAlignVertical: 'top',
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container2: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '5%',
  },
  inputRow: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 15,
    alignItems: 'flex-start',
    justifyContent: 'center',
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

  TextInputStyle: {
    textAlign: 'left',
    width: '97%',
    marginBottom: '3%',
    marginLeft: '2%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },
  TextInputStyleWeight: {
    textAlign: 'left',
    // height: '65%',
    width: '20%',
    // marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },
  titlePerf: {
    color: 'black',
    fontSize: 22,
    marginLeft: '5%',
    fontWeight: 'bold',
  },
  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
  },
});

export default ReservationInfo;
