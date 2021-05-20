/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { Image, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/core';
import base64 from 'react-native-base64';
import { prop } from 'ramda';
import { LoginContext } from '../common/loginHelper/responseData';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;
const REGEX_CODE = /[A-Za-z0-9+/=]/;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  qr: {
    marginTop: '20%',
    marginBottom: '20%',
    width: qrSize,
    height: qrSize,
  },
  description: {
    fontSize: width * 0.09,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  cancel: {
    fontSize: width * 0.05,
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
});

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const loginContext = useContext(LoginContext);
  const handleBarCodeScanned = ({ data }) => {
    try {
      if (REGEX_CODE.test(data)) {
        const dcode = base64.decode(data);
        const dataParsed = JSON.parse(dcode);
        const postalCodeLogin = loginContext.loginData.user.entity.address.postalCode;
        const postalCodeParsed = prop('postalCode', dataParsed);
        if (postalCodeParsed === postalCodeLogin) {
          setScanned(true);

          navigation.navigate('ScanSuccess');
        } else {
          setScanned(true);
          alert('O locker não está associado à sua conta!');
        }
      }
    } catch (error) {
      alert('O código QR não está associado a nenhum locker');
      console.log('erro do catch', error);
    }

    if (hasPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
      return <Text>No access to camera</Text>;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.container]}
      >
        <Text style={styles.description}>Scaneie o locker</Text>
        <Image style={styles.qr} source={require('../img/qr.png')} />
        <Text onPress={() => navigation.goBack()} style={styles.cancel}>
          Cancelar
        </Text>
      </BarCodeScanner>
      {scanned && <Button title="Tap to Scan Again" onPress={() => setScanned(false)} />}
    </View>
  );
}
