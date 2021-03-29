import React, { useContext, useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Card, Badge, Colors } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import notificationStyles from './styles';
// import dataFromServer from './dataFromServer';
import serverResponse from '../login/serverResponse';
import { API_URL } from '../../common/constants/api';
import { diffDates } from './helper';
import {
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
  getIsRecebimentosPorLevantar,
  getIsReservaEnvio,
  getIsReservaRecebimentoNaoPago,
  getIsReservaRecebimentoPrePago,
} from '../../common/businesslogic';
import ButtonNotificationAction from './ButtonNotificationAction';
import { LoginContext } from '../../common/loginHelper/responseData';

const styles = StyleSheet.create(notificationStyles);

const Notification = (props) => {
  const [dataFromServer, setDataFromServer] = useState([]);
  // const dataFromServer = [];

  const loginContext = useContext(LoginContext);

  // routing functions
  const goToReservas = () => {
    props.navigation.navigate('reservasMarcadas');
  };

  const goToScanLocker = () => {
    props.navigation.navigate('ScanQrCode');
  };

  const goToCorrespondenciasEnviadas = () => {
    props.navigation.navigate('correspondenciaEnviada');
  };
  //

  // const getToken = () => {
  console.log('dados context', loginContext.loginData);
  const token = loginContext.loginData.jwt;

  console.log(token);

  useEffect(() => {
    fetch(`${API_URL}/orders/user`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setDataFromServer(result);
          console.log('dataUseState', dataFromServer);
          // dataFromServer.push(result.rows);
        },
        (err) => {
          console.error('error', err);
        }
      );
  }, []);

  // };

  const getIsNewNotification = (date) => {
    const dateLastLogin = serverResponse.map((row) => row.user.lastLogin);
    if (moment(date).isAfter(moment(dateLastLogin))) {
      return true;
    }
    return false;
  };

  const cards = dataFromServer.map((dataEntry) => {
    if (getIsReservaEnvio(dataEntry)) {
      const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
      const isNotification = date === moment(new Date()).format('YYYY-MM-DD');
      // if (newNot(dataEntry.created_at)) {
      return (
        <Card style={styles.cardStyle}>
          {isNotification && <Badge size={15} style={styles.badgeStyle} />}
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
    if (getIsReservaRecebimentoPrePago(dataEntry)) {
      const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
      console.log(date);
      // console.log('dados context', loginContext.loginData);
      const isNotification = date === moment(new Date()).format('YYYY-MM-DD');
      // if (newNot(dataEntry.created_at)) {
      return (
        <Card style={styles.cardStyle}>
          {isNotification && <Badge size={15} style={styles.badgeStyle} />}
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

            <ButtonNotificationAction onPress={goToReservas} nameIcon="business-outline" textButton="Ver" />
          </Card.Content>
        </Card>
      );

      // }
    }
    if (getIsReservaRecebimentoNaoPago(dataEntry)) {
      const date = moment(dataEntry.dateRequested);
      const now = moment(new Date());
      const duration = moment.duration(now.diff(date));
      console.log(duration.asDays());

      const isPaymentDueNotification = Math.abs(duration.asDays()) === 1;
      // if (newNot(dataEntry.created_at)) {
      return (
        <Card style={styles.cardStyle}>
          {isPaymentDueNotification && <Badge size={15} style={styles.badgeStyle} />}
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

            <ButtonNotificationAction onPress={goToReservas} nameIcon="business-outline" textButton="Ver" />
          </Card.Content>
        </Card>
      );
      // }
    }
    if (getIsRecebimentosPorLevantar(dataEntry)) {
      // shouldRenderBadge, textTitle,
      return (
        <Card style={styles.cardStyle}>
          {getIsNewNotification(dataEntry.created_at) && <Badge size={15} style={styles.badgeStyle} />}
          <Card.Content style={styles.cardContent}>
            <Text style={styles.cardContentText}>
              <Text style={{ fontWeight: 'bold' }}> CORRESPONDÊNCIA NOVA: {'\n'}</Text>
              {'Tem uma correspondência nova no locker de '}
              <Text style={styles.cardContentText2}>{dataEntry.from}</Text>
              <Text style={styles.cardTimeText}>
                {'\n'}
                {diffDates(dataEntry.created_at)}
              </Text>
            </Text>
            <ButtonNotificationAction onPress={goToScanLocker} nameIcon="arrow-up-outline" textButton="Levantar" />
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return (
        <Card style={styles.cardStyle}>
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
            <ButtonNotificationAction onPress={goToCorrespondenciasEnviadas} nameIcon="mail-outline" textButton="Ver" />
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
            <ButtonNotificationAction onPress={goToCorrespondenciasEnviadas} nameIcon="mail-outline" textButton="Ver" />
          </Card.Content>
        </Card>
      );
    }
    if (
      !getIsReservaEnvio &&
      !getIsCorrespondenciasEmTransito &&
      !getIsRecebimentosPorLevantar &&
      !getIsReservaRecebimentoNaoPago &&
      !getIsReservaRecebimentoPrePago &&
      !getIsCorrespondenciasEntreguesAClientesComApp
    ) {
      return <Text style={styles.semNotif}>Sem notificações</Text>;
    }
    return null;
  });

  return (
    <View style={styles.container}>
      <View style={{ marginTop: '12%' }} />
      {/* {receiveFromServer()} */}
      {/* {getToken()} */}
      {cards}
    </View>
  );
};

export default Notification;
