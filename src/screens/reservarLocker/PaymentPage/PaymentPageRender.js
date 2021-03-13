import React, { useState, useEffect } from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { OrangeTest, ButtonNext } from './PaymentPageStyles';
import Header from '../../../components/HeaderReservarLocker';

function PaymentPage() {
  return (
    <View>
      <Header />

      <TouchableOpacity
        onPress={() => {
          Actions.success();
        }}
      >
        <ButtonNext>
          <Text style={styles.textr}>Seguinte</Text>
        </ButtonNext>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    fontSize: 22,
  },
  scan: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textr: {
    color: 'white',
    marginVertical: 5,
    fontSize: 22,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  barCodeView: {
    width: '100%',
    height: '50%',
    marginBottom: 40,
  },
});

export default PaymentPage;
