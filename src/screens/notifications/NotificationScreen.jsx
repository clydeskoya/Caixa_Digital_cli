import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Badge, Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import data from './data';
import dataFromServer from './dataFromServer';
import serverResponse from '../login/serverResponse';

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

  semNotif: {
    fontSize: 20,
    marginTop: '15%',
    textAlign: 'center',
  },

  badgeStyle: {
    backgroundColor: '#1DC690',
    alignSelf: 'flex-start',
    marginTop: '-1.5%',
    marginLeft: '-1.5%',
  },
});

const Notification = (props) => {
  // const [dataFromServer, setDataFromServer] = useState([]);
  // const dataFromServer = [];

  const receiveFromServer = async () => {
    await fetch('https://caixa-digital-cms.herokuapp.com/orders/....ID....', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          //  setDataFromServer(result.rows);
          // dataFromServer.push(result.rows);
        },
        (err) => {
          console.error('error', err);
        }
      );
  };

  const goToReservas = () => {
    props.navigation.navigate('reservasMarcadas');
  };

  const goToScanLocker = () => {
    props.navigation.navigate('ScanQrCode');
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

  const getReservaEnvio = (dataArg) => dataArg.orderType === 'send' && dataArg.isDeposited === false;

  const getReservaRecebimentoPrePago = (dataArg) =>
    dataArg.orderType === 'receive' && dataArg.isDeposited === false && dataArg.state === 'paid';

  const getReservaRecebimentoNaoPago = (dataArg) =>
    dataArg.orderType === 'receive' && dataArg.isDeposited === false && dataArg.state === 'unpaid';

  const getRecebimentosPorLevantar = (dataArg) =>
    dataArg.orderType === 'receive' &&
    dataArg.isDeposited === true &&
    dataArg.state === 'paid' &&
    dataArg.isWithdrawn === false;

  const getCorrespondenciasEmTransito = (dataArg) =>
    dataArg.orderType === 'send' && dataArg.isDeposited === true && dataArg.isWithdrawn === true;

  const getCorrespondenciasEntreguesAClientesComApp = (dataArg) =>
    dataArg.orderType === 'send' &&
    dataArg.isDeposited === true &&
    dataArg.isWithdrawn === true &&
    dataArg.matching_receive_order === true;

  const newNot = (date) => {
    const dateLastLogin = serverResponse.map((row) => row.user.lastLogin);
    if (moment(date).isAfter(moment(dateLastLogin))) {
      return true;
    }
    return false;
  };

  const cards = dataFromServer.map((dataEntry) => {
    if (getReservaEnvio(dataEntry)) {
      const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
      if (date === moment(new Date()).format('YYYY-MM-DD')) {
        // if (newNot(dataEntry.created_at)) {
        return (
          <Card style={styles.cardStyle}>
            <Badge size={15} style={styles.badgeStyle} />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardContentText}>
                <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
                Tem uma reserva de envio para hoje:
                <Text style={styles.cardContentText2}> {date} </Text>
                <Text style={styles.cardTimeText}>
                  {'\n'}
                  {diffDates(dataEntry.dateRequested)}
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
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
              Tem uma reserva de envio para hoje:
              <Text style={styles.cardContentText2}> {date} </Text>
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.dateRequested)}
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
      // }
    }
    if (getReservaRecebimentoPrePago(dataEntry)) {
      const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
      console.log(date);
      if (date === moment(new Date()).format('YYYY-MM-DD')) {
        // if (newNot(dataEntry.created_at)) {
        return (
          <Card style={styles.cardStyle}>
            <Badge size={15} style={styles.badgeStyle} />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardContentText}>
                <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
                Tem uma reserva de recebimento para hoje:
                <Text style={styles.cardContentText2}> {date} </Text>
                <Text style={styles.cardTimeText}>
                  {'\n'}
                  {diffDates(dataEntry.dateRequested)}
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
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
              Tem uma reserva de recebimento para hoje:
              <Text style={styles.cardContentText2}> {date} </Text>
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.dateRequested)}
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
      // }
    }
    if (getReservaRecebimentoNaoPago(dataEntry)) {
      const date = moment(dataEntry.dateRequested);
      const now = moment(new Date());
      const duration = moment.duration(now.diff(date));
      console.log(duration.asDays());

      if (Math.abs(duration.asDays()) === 1) {
        // if (newNot(dataEntry.created_at)) {
        return (
          <Card style={styles.cardStyle}>
            <Badge size={15} style={styles.badgeStyle} />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardContentText}>
                <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
                Tem uma reserva de recebimento para amanhã:
                <Text style={styles.cardContentText2}> {date.format('YYYY-MM-DD')} </Text> Tem de efetuar o pagamento
                senão perde a reserva.
                <Text style={styles.cardTimeText}>
                  {'\n'}
                  {diffDates(moment(dataEntry.dateRequested).subtract(1, 'days'))}
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
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> LEMBRETE: {'\n'}</Text>
              Tem uma reserva de recebimento para amanhã:
              <Text style={styles.cardContentText2}> {date.format('YYYY-MM-DD')} </Text> Tem de efetuar o pagamento
              senão perde a reserva.
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(moment(dataEntry.dateRequested).subtract(1, 'days'))}
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
      // }
    }
    if (getRecebimentosPorLevantar(dataEntry)) {
      if (newNot(dataEntry.created_at)) {
        return (
          <Card style={styles.cardStyle}>
            <Badge size={15} style={styles.badgeStyle} />
            <Card.Content style={styles.cardContent}>
              <Text style={styles.cardContentText}>
                <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA NOVA: {'\n'}</Text>
                Tem uma correspondência nova no locker de <Text> </Text>
                <Text style={styles.cardContentText2}>{dataEntry.from}</Text>
                <Text style={styles.cardTimeText}>
                  {'\n'}
                  {diffDates(dataEntry.created_at)}
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
      return (
        <Card style={styles.cardStyle}>
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA NOVA: {'\n'}</Text>
              Tem uma correspondência nova no locker de <Text> </Text>
              <Text style={styles.cardContentText2}>{dataEntry.from}</Text>
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.created_at)}
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
    if (getCorrespondenciasEmTransito(dataEntry)) {
      if (newNot(dataEntry.created_at)) {
        return (
          <Card style={styles.cardStyle}>
            <Badge size={15} style={styles.badgeStyle} />
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
      return (
        <Card style={styles.cardStyle}>
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
    if (getCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      if (newNot(dataEntry.created_at)) {
        return (
          <Card style={styles.cardStyle}>
            <Badge size={15} style={styles.badgeStyle} />
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
    if (
      !getReservaEnvio &&
      !getCorrespondenciasEmTransito &&
      !getRecebimentosPorLevantar &&
      !getReservaRecebimentoNaoPago &&
      !getReservaRecebimentoPrePago &&
      !getCorrespondenciasEntreguesAClientesComApp
    ) {
      return <Text style={styles.semNotif}>Sem notificações</Text>;
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
