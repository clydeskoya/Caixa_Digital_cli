import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { API_URL } from '../../common/constants/api';
import { LoginContext } from '../../common/loginHelper/responseData';
import { Header } from '../../components/Header';

// eslint-disable-next-line import/no-cycle
/* import NotificationScreen from '../NotificationScreen';
import ReserveScreen from '../ReserveScreen';
import ProfileScreen from '../ProfileScreen';
import TabNavigator from './TabNavigator'; */
// eslint-disable-next-line import/no-cycle

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: '#278AB0',
    width: '340',
    height: '125',
  },

  cardStilo: {
    width: 280,
    borderRadius: 12,
    marginBottom: '8%',
    backgroundColor: '#C5DFEA',
    borderWidth: 4,
    borderColor: '#2C8DB2',
    alignSelf: 'center',
  },

  text: {
    fontSize: 17,
    alignSelf: 'center',
  },
});
// onPress={() => {
//   if (this.state.newRating===""){ alert("try again"); }
//   else { props.navigation.navigate('correspondenciaRecebida') }
const Home = (props) => {
  const [dataFromServer, setDataFromServer] = useState('EMPTY');
  const [send, setSend] = useState([]);
  const [receive, setReceive] = useState([]);
  const [reserva, setReserva] = useState([]);

  const loginContext = useContext(LoginContext);
  const token = loginContext.loginData.jwt;
  const ordersSend = [];
  const ordersReceive = [];
  const ordersReservation = [];

  const orders = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/orders/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const orderlist = data.entries();
      // eslint-disable-next-line no-restricted-syntax
      for (order of orderlist) {
       /*  if (order[1].orderType == 'send' && order[1].isDeposited) {
          console.log('send');
          send.push(order[1]);
        }
        if (order[1].orderType == 'receive' && order[1].isWithdrawn) {
          console.log('Recieve');
          receive.push(order[1]);
        }
        if (!order[1].isDeposited && !order[1].isWithdrawn) { */
          console.log('RESERVA');
          reserva.push(order[1]);
       /*  } */
      }

      setDataFromServer(orderlist);
      console.log(send, 'OS SENDS');
      console.log(receive, 'OS ENVIADOS');
      console.log(reserva, 'AS RESERVAS')
    } catch (error) {
      console.error('error', error);
    }
  };

  if (dataFromServer === 'EMPTY') {
    orders();
  }

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={() => props.navigation.navigate('correspondenciaRecebida', { receive })}
      >
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Correspondência Recebida</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={() => props.navigation.navigate('correspondenciaEnviada', { send })}
      >
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Correspondência Enviada</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('reservasMarcadas', { reserva })}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Reservas</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
