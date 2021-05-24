import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { prop } from 'ramda';
import { styles } from './styles';
import Cartao from '../../components/Cartao';

const correspondenciaRecebida = (props) => {
  const cards = props.route.params.receive.map((dataEntry) => {
    const dateUp = moment(dataEntry.updated_at).format('YYYY-MM-DD');

    return <Cartao key={prop('id', dataEntry)} text={`Recebida: ${dateUp}`} />;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Recebida </Text>
      </View>
      {cards}
    </View>
  );
};
export default correspondenciaRecebida;
