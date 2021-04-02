import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
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

const correspondenciaRecebida = () => {
  const cards = dataFromServer.map((dataEntry) => {
    const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');

    if (getIsRecebimentosPorLevantar(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <View style={styles.inputRow}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e emissor  ${date}`}</Text>
              <Ionicons name="chevron-forward-outline" size={30} />
            </View>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasLevantadas(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <View style={styles.inputRow}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e emissor  ${date}`}</Text>
              <Ionicons name="chevron-forward-outline" size={30} />
            </View>
          </Card.Content>
        </Card>
      );
    }
    if (!getIsRecebimentosPorLevantar && !getIsCorrespondenciasLevantadas) {
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
