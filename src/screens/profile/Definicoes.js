import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Picker } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  inputRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: '5%',
    marginTop: '1%',
  },
  inputRow1: {
    flexDirection: 'row',
    // marginBottom: '1%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '5%',
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: '20%',
  },
});

const Definicoes = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <>
      <View style={styles.header}>
        <View style={styles.inputRow}>
          <Ionicons name="close" size={30} />
          <Text style={{ color: 'black', fontSize: 19, marginLeft: '7%', marginTop: '2%' }}> Definições </Text>
        </View>

        <View style={styles.inputRow1}>
          <Ionicons name="globe-outline" size={20} />
          <Text style={{ color: 'black', fontSize: 15, marginTop: '1%', marginLeft: '1%' }}> Idioma</Text>
        </View>

        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: '130%', width: '40%' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Português" />
            <Picker.Item label="Inglês" />
          </Picker>
        </View>

        <View style={styles.inputRow1}>
          <Ionicons name="notifications" size={20} />
          <Text style={{ color: 'black', fontSize: 15, marginLeft: '1%' }}> Notificações</Text>
        </View>

        <View style={styles.container}>
          <Picker
            selectedValue={selectedValue}
            style={{ height: '130%', width: '40%' }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Ativado" />
            <Picker.Item label="Desativado" />
          </Picker>
        </View>

        <View style={styles.inputRow1}>
          <Ionicons name="phone-portrait-outline" size={20} />
          <Text style={{ color: 'black', fontSize: 15, marginLeft: '1%' }}> Acerca de</Text>
        </View>
        <Text style={{ color: 'black', fontSize: 12, marginLeft: '20%' }}> Nome da App: Caixa Digital (Cliente) </Text>
        <Text style={{ color: 'black', fontSize: 12, marginLeft: '20%' }}> Versão da App: 1.0</Text>
      </View>
    </>
  );
};

export default Definicoes;
