import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#0096c7',
    padding: 8,
    margin: 10,
    width: 200,
    borderRadius: 23,
  },
});

const correspondenciaRecebida = () => (
  <View style={styles.container}>
    <Text style={styles.input}>Correspondência Enviada</Text>
    <FlatList
      data={[{ key: 'SMAS Sintra, 20/11/2020' }, { key: 'Finanças, 19/11/2020' }]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
    <Text style={styles.input}>Correspondências Recebidas</Text>
    <FlatList
      data={[{ key: 'Documento, 21/11/2020' }, { key: 'Carta Luisinho, 19/11/2020' }]}
      renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    />
  </View>
);

export default correspondenciaRecebida;
