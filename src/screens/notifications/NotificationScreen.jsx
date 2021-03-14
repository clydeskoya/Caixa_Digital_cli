import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import data from './data'; // como gostava de receber os dados do server :)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: '3%',
    height: '100%',
  },

  cardStyle: {
    marginTop: '3%',
    backgroundColor: '#EFEFEF',
    borderBottomWidth: 3,
    borderColor: '#D6CFCF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '13.5%',
    width: '100%',
    borderRadius: 5,
  },

  cardContentText: {
    fontSize: 14,
    width: '80%',
    lineHeight: 18.5,
  },

  cardContentText2: {
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  cardTitleText: {
    fontSize: 23,
  },

  cardTimeText: {
    fontSize: 10.5,
  },

  cardContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  viewIconNText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    // backgroundColor: '#D6CFCF',
    backgroundColor: 'rgba(214, 207, 207, 0.6)',
  },

  touchableOpacityView: {
    marginLeft: '8%',
  },
});

const Notification = (props) => {
  const [dataFromServer, setDataFromServer] = useState('');

  const receiveFromServer = async () => {
    await fetch('https://caixa-digital-cms.herokuapp.com/....................', {
      method: 'GET',
      headers: {
        // ???????
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setDataFromServer(result.rows);
        },
        (err) => {
          console.error('error', err);
        }
      );
  };

  const goToReservas = () => {
    props.navigation.navigate('......'); // não se fez ainda o ecrã das reservas (NÃO É o reservar locker)
  };

  const goToScanLocker = () => {
    props.navigation.navigate('......'); // não se fez ainda o ecrã para scannear o qr code do locker
  };

  const goToCorrespondenciasEnviadas = () => {
    props.navigation.navigate('correspondenciaEnviada');
  };

  const diffDates = (date) => {
    const now = moment(new Date()); // 2021-03-12T22:18:37.672Z
    const date2 = moment(date);
    const duration = moment.duration(now.diff(date2));
    const days = `há ${Math.ceil(duration.asDays()) - 1} dias`;
    const hours = `há ${Math.ceil(duration.asHours()) - 1} horas`;

    if (duration.asHours() < 24) {
      return hours;
    }
    return days;
  };

  const getIsReminder = (dataArg) => dataArg.type === 'reminder';
  const getIsNewCorresp = (dataArg) => dataArg.type === 'newCorresp';
  const getIsCorrespSent = (dataArg) => dataArg.type === 'correspSent';

  // o data deve ser substituído por dataFromServer
  const cards = data.map((dataEntry) => {
    if (getIsReminder(dataEntry)) {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
              Tem uma reserva para hoje
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.details.datetimeNotification)}
              </Text>
            </Text>

            <TouchableOpacity style={styles.touchableOpacityView} onPress={goToReservas}>
              <View style={styles.viewIconNText}>
                <Ionicons name="business-outline" color="#000" size={23} />
                <Text style={{ fontSize: 11 }}>Ver</Text>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsNewCorresp(dataEntry)) {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA NOVA: {'\n'}</Text>
              Tem uma correspondência nova no locker de <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.details.from}</Text>
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.details.datetimeNotification)}
              </Text>
            </Text>

            <TouchableOpacity style={styles.touchableOpacityView} onPress={goToScanLocker}>
              <View style={styles.viewIconNText}>
                <Ionicons name="arrow-up-outline" color="#000" size={23} />
                <Text style={{ fontSize: 11 }}>Levantar</Text>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespSent(dataEntry)) {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA LEVANTADA: {'\n'}</Text>A correspondência de
              <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.details.when}</Text> <Text> </Text>
              para <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.details.to}</Text> foi levantada para envio
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.details.datetimeNotification)}
              </Text>
            </Text>
            <TouchableOpacity style={styles.touchableOpacityView} onPress={goToCorrespondenciasEnviadas}>
              <View style={styles.viewIconNText}>
                <Ionicons name="mail-outline" color="#000" size={23} />
                <Text style={{ fontSize: 11 }}>Ver</Text>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
  });

  return (
    <View style={styles.container}>
      <View style={{ marginTop: '12%' }} />
      {cards}
    </View>
  );
};

export default Notification;
