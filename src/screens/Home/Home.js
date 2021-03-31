import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
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
  const [dataFromServer, setDataFromServer] = useState([]);

  const loginContext = useContext(LoginContext);
  const token = loginContext.loginData.jwt;
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
          console.log('dataUseState', dataFromServer.entries());
          // dataFromServer.push(result.rows);
        },
        (err) => {
          console.error('error', err);
        }
      );
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('correspondenciaRecebida')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Correspondência Recebida</Title>

            <Paragraph>Finanças - Autoridade Tributária</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('correspondenciaEnviada')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Correspondência Enviada</Title>

            <Paragraph>GPU - Ben-Hur Fidalgo</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('reservasMarcadas')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Reservas</Title>

            <Paragraph>15/02/2020 - Locker para envio</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('reservasMarcadas')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title style={styles.text}>Reservas</Title>

          <Paragraph>15/02/2020 - Locker para envio</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);

export default Home;
