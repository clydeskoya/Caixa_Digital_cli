import React from 'react';
import { View, Text } from 'react-native';
import moment from 'moment';
import dataFromServer from '../notifications/dataFromServer';
import { getIsCorrespondenciasLevantadas } from '../../common/businesslogic';
import { styles } from './styles';
import Cartao from '../../components/Cartao';

const correspondenciaRecebida = (route, navigation) => {
  const orders = route.params;
  console.log(orders,'Aqui tao as receives')
  const cards = dataFromServer.map((dataEntry) => {
    const dateUp = moment(dataEntry.updated_at).format('YYYY-MM-DD');

    if (getIsCorrespondenciasLevantadas(dataEntry)) {
      return <Cartao text={`Recebida: ${dateUp}`} />;
    }
    if (!getIsCorrespondenciasLevantadas(dataEntry)) {
      return <Text>Sem notificações</Text>;
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
