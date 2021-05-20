/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import dataFromServer from '../notifications/dataFromServer';
import {
  getIsCorrespondenciasEmEspera,
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
} from '../../common/businesslogic';

import { styles } from './styles';
import Cartao from '../../components/Cartao';

const correspondenciaEnviada = (route, navigation) => {
  console.log('entrei');
  const orders = route.params;
  console.log(orders,'Aqui tao as enviadas')
  const cards = dataFromServer.map((dataEntry) => {
    const date = moment(dataEntry.updated_at).format('YYYY-MM-DD');
    const names = ['SAMS Sintra', 'Finanças', 'Miguel'];

    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return <Cartao text={`Em trânsito: ${date}`} />;
    }

    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      return <Cartao text={`Entregue: ${date}`} />;
    }
    if (getIsCorrespondenciasEmEspera(dataEntry)) {
      return <Cartao text={`Depositada por levantar:  ${date}`} />;
    }
    if (
      !getIsCorrespondenciasEmTransito &&
      !getIsCorrespondenciasEntreguesAClientesComApp &&
      !getIsCorrespondenciasEmEspera
    ) {
      return <Text>Sem notificações</Text>;
    }

    return null;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Enviada </Text>
      </View>
      {cards}
    </View>
  );
};
export default correspondenciaEnviada;
