import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Header from '../../../components/HeaderReservarLocker';

const SendReceivePage = () => {
  
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.maindiv}>
        
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('ReservationInfo')}>
            <View style={styles.viewStyle}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Seguinte</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  maindiv: {
    marginTop: '20%',
  },
  title: {
    fontSize: 17.5,
    fontWeight: 'bold',
  },
  Simpletext: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    width: 250,
    height: 40,
    justifyContent: 'center',
    marginTop: '50%',
    backgroundColor: '#1c4670',
    borderRadius: 45,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  radiotext: {
    marginVertical: '1.8%',
  },
  viewStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewT: {
    marginLeft: '6%',
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
  }
});

export default SendReceivePage;
