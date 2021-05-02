import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Header } from '../../components/Header';

function ReservasHome(props) {
  return (
    <View style={styles.maindiv}>
        <Header />
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('SendReceiveReservarLocker')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Nova Reserva</Title>
           
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('ScanQrCode')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Scanear Locker</Title>
            <Paragraph>06/04/2021 - Locker para envio {'\n'}04/04/2021 - Locker para recebimento</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maindiv: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
});
export default ReservasHome;
