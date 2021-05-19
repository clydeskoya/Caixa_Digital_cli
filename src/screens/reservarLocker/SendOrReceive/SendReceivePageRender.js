import React, { useContext, useState, useEffect } from 'react';
import { MaskedViewComponent, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../../../components/HeaderReservarLocker';
import { styles } from './styles';
const SendReceivePage = () => {
  const [why, setWhy] = useState('deposit');
  const [checked, setChecked] = useState('send');
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Header scanLocker={false} />
      <View style={styles.maindiv}>
        <View style={styles.viewT}>
          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: '5%', marginTop: '4%' }}>
            <RadioButton
              value="send"
              status={checked === 'send' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('send')}
            />
            <View style={styles.radiotext}>
              <Text style={styles.Simpletext}>Envio de correspondências</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', marginLeft: '5%' }}>
            <RadioButton
              value="receive"
              status={checked === 'receive' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('receive')}
            />
            <View style={styles.radiotext}>
              <Text style={styles.Simpletext}>Recebimento de correspondências</Text>
            </View>
          </View>
        </View>

        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ReservationInfo');
            }}
          >
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



export default SendReceivePage;
