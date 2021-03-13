import React, { useState, useEffect } from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { OrangeTest, ButtonNext } from './PaymentPageStyles';
import Header from '../../../components/HeaderReservarLocker';
import { PaymentsStripe as Stripe } from 'expo-payments-stripe';

function PaymentPage() {
  Stripe.setOptionsAsync({
    publishableKey:
      'pk_test_51IUdQ5LbLB9ED9AWswPvcdu6TKAwDEGoRSwzhVOoyRcJFz36NchUvdYWt7jaH0R8y5XdHt7zNprb5fAKVySPxFBQ007bWMDejH', // Your key
    androidPayMode: 'test', // [optional] used to set wallet environment (AndroidPay)
    merchantId: 'your_merchant_id', // [optional] used for payments with ApplePay
  });

  const options = {
    requiredBillingAddressFields: 'full',
    prefilledInformation: {
      billingAddress: {
        name: 'Gunilla Haugeh',
        line1: 'Canary Place',
        line2: '3',
        city: 'Macon',
        state: 'Georgia',
        country: 'US',
        postalCode: '31217',
      },
    },
  };

  const token = async () => {
    await stripe.paymentRequestWithCardFormAsync(options);
  };

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
