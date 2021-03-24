import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '77%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
    marginBottom: '10%',
    marginTop: '5%',
  },
  container: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'flex-start',
  },
  scrollView: {
    backgroundColor: '#278AB0',
    width: '340',
    height: '125',
  },

  cardStilo: {
    width: 280,
    height: '100%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    //   marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },

  inputRow: {
    marginTop: '5%',
    marginLeft: '5%',
    justifyContent: 'flex-start',
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
          <View style={styles.inputRow}>
            <Title style={styles.text}> GPU - Ben-Hur Fidalgo </Title>
            <Ionicons name="chevron-forward-outline" size={30} />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);
export default correspondenciaEnviada;
