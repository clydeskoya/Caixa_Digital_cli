import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { OrangeTest, ButtonNext } from './PaymentPageStyles';
import Header from '../../../components/HeaderReservarLocker';

const PaymentPage = () => {
  return (
    <View>
      <Header />
      <Text>Payment</Text>
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
};

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    fontSize: 22,
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
});

export default PaymentPage;
