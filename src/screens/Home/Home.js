import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from '../../components/Header';

// eslint-disable-next-line import/no-cycle
import NotificationScreen from '../NotificationScreen';
import ReserveScreen from '../ReserveScreen';
import ProfileScreen from '../ProfileScreen';
import TabNavigator from './TabNavigator';
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
    width: '90%',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#C5DFEA',
    borderColor: '#2C8DB2',
  },
});

const Home = (props) => (
  <View style={styles.container}>
    <Header />
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('correspondenciaEnviada')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Correspondência Enviada</Title>

          <Paragraph>Batatas com lenha</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('correspondenciaRecebida')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Correspondência Recebida</Title>

          <Paragraph>Foste buscar</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('reservasMarcadas')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Reservas</Title>

          <Paragraph>27/03/2020-Locker domiciliário reservado para envio</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);
export default Home;
