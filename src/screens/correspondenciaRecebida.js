import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph, Dialog, Portal, Provider, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '77%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
    marginBottom: '10%',
    marginTop: '15%',
  },
  container: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    backgroundColor: '#278AB0',
    width: '340',
    height: '125',
  },

  cardStilo: {
    width: 280,
    height: '30%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    //   marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },

  inputRow: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    // justifyContent:'flex-start',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const correspondenciaRecebida = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Recebida </Text>
    </View>
    <TouchableOpacity activeOpacity={0.1} /* onPress={() => props.navigate.Home} */>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <View style={styles.inputRow}>
            <Text style={styles.text}>
              {' '}
              Finanças - Autoridade Tributária
              <Ionicons name="chevron-forward-outline" size={30} />
            </Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  </View>
);
export default correspondenciaRecebida;
