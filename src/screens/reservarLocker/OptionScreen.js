import React, { useContext, useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card, Title } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    height: '80%',
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
  title: {
    fontSize: 17,
    alignSelf: 'flex-start',
    paddingBottom: 10,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
});
const OptionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que deseja fazer?</Text>
      <TouchableOpacity activeOpacity={0.1} onPress={() => navigation.navigate('SendOrReceive')}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Reservar uma slot</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.1} onPress={() => navigation.navigate('ScanQRCode', { type: 'receber' })}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Levantar Encomenda</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.1} onPress={() => navigation.navigate('ScanQRCode', { type: 'enviar' })}>
        <Card style={styles.cardStilo}>
          <Card.Content>
            <Title style={styles.text}>Depositar Encomenda</Title>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </View>
  );
};
export default OptionScreen;
