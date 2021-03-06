import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../../../components/HeaderReservarLocker';

const CardPage = () => {
  return (
    <View>
      <Header />

      <Text>CardPage</Text>

      <TouchableOpacity
        onPress={() => {
          Actions.success();
        }}
      >
        <View style={styles.button}>
          <Text style={styles.textr}>Seguinte</Text>
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
    backgroundColor: '#1c4670',
    borderRadius: 45,
  },
  textr: {
    color: 'white',
    marginVertical: 5,
    fontSize: 22,
  },
});

export default CardPage;
