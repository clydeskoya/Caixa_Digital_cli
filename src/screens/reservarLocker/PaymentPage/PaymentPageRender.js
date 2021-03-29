import React, { useState, useEffect } from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CreditCardInput } from 'react-native-credit-card-input';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';
import { OrangeTest, ButtonNext } from './PaymentPageStyles';
import Header from '../../../components/HeaderReservarLocker';

function PaymentPage() {
  const navigation = useNavigation();

  Stripe.setOptionsAsync({
    publishableKey: 'pk_test_51IUdQ5LbLB9ED9AWswPvcdu6TKAwDEGoRSwzhVOoyRcJFz36NchUvdYWt7jaH0R8y5XdHt7zNprb5fAKVySPxFBQ007bWMDejH', // Your key
    androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
    merchantId: 'your_merchant_id', // [optional] used for payments with ApplePay
  });

  const params = {
    // mandatory
    number: '4242424242424242',
    expMonth: 11,
    expYear: 17,
    cvc: '223',
    // optional
    name: 'Test User',
    currency: 'usd',
    addressLine1: '123 Test Street',
    addressLine2: 'Apt. 5',
    addressCity: 'Test City',
    addressState: 'Test State',
    addressCountry: 'Test Country',
    addressZip: '55555',
  };

 /*  try{
    const token = await Stripe.createTokenWithCardAsync(params);
  }catch(error){

  } */

 

  return (
    <View>
      <Header />
      <View style={{ height: 20 }} />
      <Text>One time payment card</Text>
      <View style={{ height: 20 }} />
      <CreditCardInput requiresName onChange={(cardData) => this.setState({ cardData })} />
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
    height: '100%',
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
