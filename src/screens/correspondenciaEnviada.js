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
    backgroundColor: '#FFFFFF',
    borderColor: '#7DE24E',
  },
});

const correspondenciaEnviada = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Enviada </Text>
    </View>
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('detalhesCarta2')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>GPU - Ben-Hur Fidalgo</Title>

          <Paragraph>12/02/2021</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    <TouchableOpacity activeOpacity={0.1} onPress={() => props.navigation.navigate('detalhesCarta1')}>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Cabaz de Ano Novo atrasado</Title>

          <Paragraph>15/01/2021</Paragraph>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);
export default correspondenciaEnviada;
