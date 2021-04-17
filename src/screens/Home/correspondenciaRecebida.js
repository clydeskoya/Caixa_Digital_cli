import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import { once } from 'ramda';
import dataFromServer from '../notifications/dataFromServer';
import {
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
  getIsCorrespondenciasLevantadas,
  getIsRecebimentosPorLevantar,
} from '../../common/businesslogic';
import { API_URL } from '../../common/constants/api';
import { diffDates } from '../notifications/helper';
import ButtonNotificationAction from '../notifications/ButtonNotificationAction';
import serverResponse from '../login/serverResponse';
import { styles } from './styles';
import Cartao from './Cartao';

const correspondenciaRecebida = () => {
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
