import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { prop } from 'ramda';
import { styles } from './styles';
import Cartao from '../../components/Cartao';
import { useNavigation } from '@react-navigation/native';

const reservasMarcadas = (props) => {
  const navigation = useNavigation();
  const today = moment(new Date()).format('YYYY-MM-DD');
  const cards = props.route.params.reserva.map((dataEntry) => {
    console.log('xxx', JSON.stringify(dataEntry));
    const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
    /* if (getIsReservaEnvio(dataEntry)) {
      return <Cartao text={`Reserva de Envio: ${date}`} />;
    }
    if (getIsReservaRecebimentoPrePago(dataEntry)) {
      return <Cartao text={`Recebimento Pago: ${dateUp}`} />;
    }
    if (getIsReservaRecebimentoNaoPago(dataEntry)) {
      return <Cartao text={`Recebimento por Pagar: ${dateUp}`} />;
    }
    if (getIsRecebimentosPorLevantar(dataEntry)) {
      return <Cartao text={`Recebimento por Levantar: ${dateUp}`} />; */
    if (date === today) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScanQrCode', { id: dataEntry.id });
          }}
        >
          <Cartao key={prop('id', dataEntry)} text={`Reserva para hoje : ${date}`} />
        </TouchableOpacity>
      );
    }
    if (date !== today) {
      return (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScanQrCode', { id: dataEntry.id });
          }}
        >
          <Cartao key={prop('id', dataEntry)} text={`Reserva para : ${date}`} />
        </TouchableOpacity>
      );
    }
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
