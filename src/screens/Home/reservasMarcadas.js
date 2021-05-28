import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { prop } from 'ramda';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import Cartao from '../../components/Cartao';

const reservasMarcadas = (props) => {
  const navigation = useNavigation();
  const today = moment(new Date()).format('YYYY-MM-DD');

  const cards = props.route.params.reserva.map((dataEntry) => {
    const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');

    if (date === today) {
      return (
        <TouchableOpacity
          key={prop('id', dataEntry.id)}
          onPress={() => {
            navigation.navigate('ScanQrCode', { id: dataEntry.id });
          }}
        >
          <Cartao text={`Reserva para hoje : ${date}`} />
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity key={prop('id', dataEntry.id)}>
        <Cartao text={`Reserva com id: ${dataEntry.id} para  : ${date}`} />
      </TouchableOpacity>
    );
  });

  return (
    <>
      <View style={styles.header}>
        <View style={{ width: 150, backgroundColor: '#1DC690', borderRadius: 15, alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 22,
            }}
          >
            Reservas
          </Text>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.cardDiv}>{cards}</ScrollView>
      </SafeAreaView>
    </>
  );
};
export default reservasMarcadas;
