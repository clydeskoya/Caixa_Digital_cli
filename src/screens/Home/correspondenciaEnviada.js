import React, { useState, useContext } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import dataFromServer from '../notifications/dataFromServer';
import {
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
} from '../../common/businesslogic';
import { API_URL } from '../../common/constants/api';
import { diffDates } from '../notifications/helper';

import serverResponse from '../login/serverResponse';
import { styles } from './styles';

const correspondenciaEnviada = () => {
  const getIsNewNotification = (date) => {
    const dateLastLogin = serverResponse.map((row) => row.user.lastLogin);
    if (moment(date).isAfter(moment(dateLastLogin))) {
      return true;
    }
    return false;
  };

  const cards = dataFromServer.map((dataEntry) => {
    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
      return (
        <Card style={styles.cardStilo}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e destinatário  ${date}`}</Text>
              <Text style={styles.cardContentText2}>{dataEntry.depositedAt}</Text>
            </Text>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
      return (
        <Card style={styles.cardStilo}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e destinatário  ${date}`}</Text>
              <Text style={styles.cardContentText2}>{dataEntry.depositedAt}</Text>
            </Text>
          </Card.Content>
        </Card>
      );
    }
    if (!getIsCorrespondenciasEmTransito && !getIsCorrespondenciasEntreguesAClientesComApp) {
      return <Text style={styles.semNotif}>Sem notificações</Text>;
    }
    console.log(dataEntry);
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
