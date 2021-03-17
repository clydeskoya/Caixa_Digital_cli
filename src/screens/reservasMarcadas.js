import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: '50%',
    height: '7%',
    marginTop: '15%',
    backgroundColor: '#7DE24E',
    borderColor: '#7DE24E',
    borderRadius: 15,
  },
  container: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardStilo: {
    width: '90%',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
    borderColor: '#7DE24E',
  },
});

const reservasMarcadas = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Reserva Cacifos </Text>
    </View>
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('detalhesCarta1')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Reserva para entrega</Title>

          <Paragraph>15/02/2021</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('detalhesCarta2')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Reserva para entrada</Title>

          <Paragraph>19/02/2021</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);
export default reservasMarcadas;
