import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

function ReservasHome(props) {
  return (
    <View style={styles.maindiv}>
      <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('reservasMarcadas')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Reservas</Title>
            <Paragraph>06/04/2021 - Locker para envio {'\n'}04/04/2021 - Locker para recebimento</Paragraph>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  maindiv: {
    width: '100%',
    backgroundColor: 'orange',
    height: '100%',
  },
});
export default ReservasHome;
