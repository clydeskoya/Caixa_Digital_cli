import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import dataFromServer from './notifications/dataFromServer';
import {
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
} from '../common/businesslogic';
import { API_URL } from '../common/constants/api';
import { diffDates } from './notifications/helper';
import ButtonNotificationAction from './notifications/ButtonNotificationAction';
import serverResponse from './login/serverResponse';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '77%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
    marginBottom: '10%',
    marginTop: '5%',
  },
  container: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    backgroundColor: '#278AB0',
    width: '340',
    height: '125',
  },

  cardStilo: {
    width: '80%',
    height: '20%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    flexDirection: 'column',
    alignItems: 'center',
  },

  text: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },

  inputRow: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    // justifyContent:'flex-start',
    width: '80%',

    justifyContent: 'space-between',
  },
  badgeStyle: {
    backgroundColor: '#1DC690',
    alignSelf: 'flex-start',
    marginTop: '-1.5%',
    marginLeft: '-1.5%',
  },
});

const correspondenciaRecebida = () => {
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
          {getIsNewNotification(dataEntry.created_at) && <Badge size={15} style={styles.badgeStyle} />}
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
    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      return (
        <Card style={styles.cardStyle}>
          {getIsNewNotification(dataEntry.created_at) && <Badge size={15} style={styles.badgeStyle} />}
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
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Recebida </Text>
      </View>
      {cards}
    </View>
  );
};
export default correspondenciaRecebida;
