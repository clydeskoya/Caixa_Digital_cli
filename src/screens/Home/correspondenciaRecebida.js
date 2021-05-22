import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import { prop } from 'ramda';
import { getIsCorrespondenciasLevantadas } from '../../common/businesslogic';
import { styles } from './styles';
import Cartao from '../../components/Cartao';

const correspondenciaRecebida = (props) => {
  const cards = props.route.params.send.map((dataEntry) => {
    const dateUp = moment(dataEntry.updated_at).format('YYYY-MM-DD');

    if (getIsCorrespondenciasLevantadas(dataEntry)) {
      return <Cartao key={prop('id', dataEntry)} text={`Recebida: ${dateUp}`} />;
    }
    return null;
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
