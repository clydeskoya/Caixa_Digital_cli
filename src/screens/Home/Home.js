import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Title } from 'react-native-paper';
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

const Home = (props) => {
  const [pedido, setPedido] = useState('false');
  const loginContext = useContext(LoginContext);
  const token = loginContext.loginData.jwt;
  const [ordersSent, setOrdersSent] = useState([]);
  const [ordersReceived, setOrdersReceived] = useState([]);
  const [ordersAsReservation, setOrdersAsReservation] = useState([]);

  const orders = async () => {
    try {
      console.log('entrei');
      const { data: orderlist } = await axios.get(`${API_URL}/orders/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('obtive resposta');

      if (Array.isArray(orderlist)) {
        setOrdersSent(orderlist.filter((order) => order.orderType === 'send' && order.isDeposited));
        setOrdersReceived(orderlist.filter((order) => order.orderType === 'receive' && order.isDeposited));
        setOrdersAsReservation(orderlist.filter((order) => !order.isWithdrawn && !order.isDeposited));
        console.log('fui buscar as orders', ordersAsReservation.length, Date.now());
      } else {
        console.error('deu merda');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={() => {
          orders().then(props.navigation.navigate('correspondenciaRecebida', { receive: ordersSent }));
        }}
      >
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Correspondência Recebida</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={() => props.navigation.navigate('correspondenciaEnviada', { send: ordersReceived })}
      >
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Correspondência Enviada</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.1}
        onPress={() =>
          orders().then(() => props.navigation.navigate('reservasMarcadas', { reserva: ordersAsReservation }))
        }
      >
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
