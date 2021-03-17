import React, { useState, useEffect } from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { OrangeTest, ButtonNext } from './PaymentPageStyles';
import Header from '../../../components/HeaderReservarLocker';

function PaymentPage() {
  const navigation = useNavigation();
  return (
    <View>
      <Header />
      <Text style={{marginTop: '8%'}}>Payment page</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SucessReservarLocker')}>
        <ButtonNext>
          <Text style={styles.buttonText}>Seguinte</Text>
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
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
