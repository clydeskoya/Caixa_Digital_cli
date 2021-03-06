import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../../components/HeaderReservarLocker';

const SuccessPage = () => {
  return (
    <View>
      <Header />

      <Text>Success Page</Text>

      <TouchableOpacity
        onPress={() => {
          Actions.home();
        }}
      >
        <View style={styles.button}>
          <Text style={styles.textr}>Sucesso </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    width: 290,
    height: 45,
    marginTop: 200,
    marginRight: 'auto',
    marginLeft: 'auto',
    backgroundColor: 'grey',
    borderRadius: 45,
  },
  textr: {
    color: 'green',
    marginVertical: 5,
    fontSize: 22,
  },
});

export default SuccessPage;
