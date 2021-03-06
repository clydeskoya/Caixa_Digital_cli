import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Header } from '../components/Header';

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

const Home = () => (
  <View style={styles.container}>
    <Header />
    <TouchableOpacity onPress={() => Actions.dogScreen()} />
    <Card style={styles.cardStilo}>
      <Card.Content>
        <Title>Correspondência Enviada</Title>

        <Paragraph>Batatas com lenha</Paragraph>
      </Card.Content>
    </Card>
    <Card style={styles.cardStilo}>
      <Card.Content>
        <Title>Correspondência Recebida</Title>

        <Paragraph>Dildo</Paragraph>
      </Card.Content>
    </Card>
    <Card style={styles.cardStilo}>
      <Card.Content>
        <Title>Reservas</Title>

        <Paragraph>27/03/2020-Locker domiciliário reservado para envio</Paragraph>
      </Card.Content>
    </Card>
  </View>
);
export default Home;
