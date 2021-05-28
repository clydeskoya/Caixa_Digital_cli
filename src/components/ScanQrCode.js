/* eslint-disable no-undef */
import React, { useState, useEffect, useContext } from 'react';
import { Image, Text, View, StyleSheet, Button, Dimensions } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import base64 from 'react-native-base64';

import axios from 'axios';
import { API_URL } from '../common/constants/api';
import { LoginContext } from '../common/loginHelper/responseData';

const { width } = Dimensions.get('window');
const qrSize = width * 0.7;
const REGEX_CODE = /[A-Za-z0-9+/=]/;

const ScanQrCode = (props) => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const loginContext = useContext(LoginContext);
  const token = loginContext.loginData.jwt;
  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const handleBarCodeScanned = async ({ data }) => {
    setScanned(true);
    try {
      if (REGEX_CODE.test(data) && !scanned) {
        const dcode = base64.decode(data);
        // const dataParsed = JSON.parse(dcode);
        console.log('idlocker', JSON.stringify(props));
        try {
          await axios.post(
            `${API_URL}/orders/sendPackage`,
            {
              id: props.route.params.id,
            },
            axiosConfig
          );

          navigation.navigate('ScanQrSuccess');
        } catch (error) {
          console.log('erro', JSON.stringify(error));
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
};

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

export default ScanQrCode;
