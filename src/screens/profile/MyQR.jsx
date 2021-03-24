import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import QRCode from 'react-native-qrcode-svg';
import data from './data';

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
  const dataa = `${data.map((dataEntry) => dataEntry.street)} ${data.map((dataEntry) => dataEntry.door)} ${data.map(
    (dataEntry) => dataEntry.floor
  )} ${data.map((dataEntry) => dataEntry.postalCode)} ${data.map((dataEntry) => dataEntry.locality)} ${data.map(
    (dataEntry) => dataEntry.city
  )}, ${data.map((dataEntry) => dataEntry.country)}
   ${data.map((dataEntry) => dataEntry.names.id1)}`;

  console.log(dataa);

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
            {data.map((dataEntry) => dataEntry.street)} {data.map((dataEntry) => dataEntry.door)}{' '}
            {data.map((dataEntry) => dataEntry.floor)}
            {'\n'} {data.map((dataEntry) => dataEntry.postalCode)} {data.map((dataEntry) => dataEntry.locality)}
            {'\n'} {data.map((dataEntry) => dataEntry.city)}, {data.map((dataEntry) => dataEntry.country)}
            {'\n'} {data.map((dataEntry) => dataEntry.names.id1)}{' '}
          </Text>
        </View>
      </View>
    </>
  );
};

export default MyQR;
