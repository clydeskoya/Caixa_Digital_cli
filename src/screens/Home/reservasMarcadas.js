import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
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
import ButtonNotificationAction from '../notifications/ButtonNotificationAction';
import serverResponse from '../login/serverResponse';
import { styles } from './styles';

const reservasMarcadas = () => {
  const getIsNewNotification = (date) => {
    const dateLastLogin = serverResponse.map((row) => row.user.lastLogin);
    if (moment(date).isAfter(moment(dateLastLogin))) {
      return true;
    }
    return false;
  };

  const cards = dataFromServer.map((dataEntry) => {
    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA LEVANTADA: {'\n'}</Text>A correspondência de
              <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.depositedAt}</Text> <Text> </Text>
              para <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.to}</Text> foi levantada para envio.
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.created_at)}
              </Text>
            </Text>
          </Card.Content>
        </Card>
      );
    }
    if (dataEntry) {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA ENTREGUE: {'\n'}</Text>A correspondência de
              <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.depositedAt}</Text> <Text> </Text>
              para <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.to}</Text> foi entregue ao destinatário.
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.created_at)}
              </Text>
            </Text>
          </Card.Content>
        </Card>
      );
    }
    if (!getIsCorrespondenciasEmTransito && !getIsCorrespondenciasEntreguesAClientesComApp) {
      return <Text style={styles.semNotif}>Sem notificações</Text>;
    }
    return null;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Reservas </Text>
      </View>
      {cards}
    </View>
  );
};
export default reservasMarcadas;
