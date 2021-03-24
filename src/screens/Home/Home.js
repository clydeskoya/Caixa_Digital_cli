import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
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

const Home = (props) => (
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

export default Home;
