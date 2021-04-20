import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import { LoginContext } from '../../common/loginHelper/responseData';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '5%',
  },

  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
  },

  boxSimple: {
    marginTop: '20%',
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    width: 270,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
  },

  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: '5%',
    marginTop: '7%',
    textAlign: 'center',
    lineHeight: 25,
  },
});

const MyQR = (props) => {
  const loginContext = useContext(LoginContext);
  const { address } = loginContext.loginData.user.entity;
  const { name } = loginContext.loginData.user.entity;

  const city0 = address.city.charAt(0).toUpperCase();
  console.log(city0);
  const city = city0 + address.city.slice(1, address.city.length);

  const dataa = `${address.street} ${address.door} ${address.floor} ${address.postalCode} ${address.locality} ${city}, ${address.country}
   ${name}`;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
            <Ionicons name="close" size={37} />
          </TouchableOpacity>
          <Text style={styles.titlePerf}> My QR Code </Text>
        </View>

        <View style={styles.boxSimple}>
          <QRCode value={dataa} />
          <Text style={styles.text}>
            {address.street} {address.door} {address.floor}
            {'\n'} {address.postalCode} {address.locality}
            {'\n'} {city}, Portugal
            {'\n'} {name}{' '}
          </Text>
        </View>
      </View>
    </>
  );
};

export default MyQR;
