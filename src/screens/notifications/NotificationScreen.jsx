import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import data from './data';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: '3%',
    height: '100%',
  },

  cardStyle: {
    marginTop: '3%',
    backgroundColor: '#EFEFEF',
    borderBottomWidth: 3,
    borderColor: '#D6CFCF',
    // borderTopWidth:2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: '13.5%',
    width: '100%',
    borderRadius: 5,
  },

  cardContentText: {
    fontSize: 15,
    // fontWeight: 'bold',
    width: '80%',
    // alignSelf: 'stretch',
  },

  cardTitleText: {
    fontSize: 25,
    // fontWeight: 'bold',
    // width: '80%',
    // alignSelf: 'stretch',
  },

  cardTimeText: {
    fontSize: 12,
  },

  cardContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },

  viewIconNText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Notification = (props) => {
  const [dataFromServer, setDataFromServer] = useState('');

  // const receiveFromServer = async () => {
  /* await */
  fetch('https://caixa-digital-cms.herokuapp.com/....................', {
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
  // };

  const goToReservas = () => {
    props.navigation.navigate('......'); // não se fez ainda o ecrã das reservas (NÃO É o reservar locker)
    console.log(new Date());
    console.log(new Date().getTime());
  };

  const goToScanLocker = () => {
    props.navigation.navigate('......'); // não se fez ainda o ecrã para scannear o qr code do locker
  };

  const goToCorrespondenciasEnviadas = () => {
    props.navigation.navigate('correspondenciaEnviada');
  };

  const daysP = (date) => {
    const now = new Date(); // 2021-03-12T22:18:37.672Z
    const diff = Math.abs(now.getTime() - date.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    const hours = Math.ceil(diff / (1000 * 60 * 60));
    if (now.getDay === date.getDay && now.getMonth === date.getMonth && now.getFullYear === date.getFullYear) {
      return hours;
    }
    return days;
  };

  // o data deve ser substituído por dataFromServer
  const cards = data.map((dataa) => {
    if (dataa.type === 'reminder') {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}>LEMBRETE: {'\n'}</Text>
              Tem uma reserva para hoje
              {/* <Text style={styles.cardTimeText}>há {'\n'}</Text> */}
            </Text>

            <TouchableOpacity style={{ marginLeft: '14%' }} onPress={goToReservas}>
              <View style={styles.viewIconNText}>
                <Ionicons name="business-outline" color="#000" size={23} />
                <Text style={{ fontSize: 11 }}>Ver</Text>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (dataa.type === 'newCorresp') {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}>CORRESPONDÊNCIA NOVA: {'\n'}</Text>
              Tem uma correspondência nova no locker de {dataa.details.from}
            </Text>

            <TouchableOpacity style={{ marginLeft: '10%' }} onPress={goToScanLocker}>
              <View style={styles.viewIconNText}>
                <Ionicons name="arrow-up-outline" color="#000" size={23} />
                <Text style={{ fontSize: 11 }}>Levantar</Text>
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (dataa.type === 'correspSent') {
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}>CORRESPONDÊNCIA LEVANTADA: {'\n'}</Text>A sua correspondência
              depositada no dia {dataa.details.when} para {dataa.details.to} foi levantada para envio
            </Text>
            <TouchableOpacity style={{ marginLeft: '14%' }} onPress={goToCorrespondenciasEnviadas}>
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
