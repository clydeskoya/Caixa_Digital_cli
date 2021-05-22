import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';

import moment from 'moment';

import { prop } from 'ramda';
import { styles } from './styles';
import Cartao from '../../components/Cartao';

function reservasMarcadas(props) {
  const today = moment(new Date()).format('YYYY-MM-DD');
  const cards = props.route.params.reserva.map((dataEntry) => {
    const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
    if (date === today) {
      return <Cartao key={prop('id', dataEntry)} text={`Reserva para hoje : ${date}`} />;
    }
    if (date !== today) {
      return <Cartao key={prop('id', dataEntry)} text={`Reserva para : ${date}`} />;
    }
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Reservas </Text>
      </View>
      <View showsVerticalScrollIndicator={false} scrollEnabled>
        {cards}
      </View>
    </SafeAreaView>
  );
}
export default reservasMarcadas;
