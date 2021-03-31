import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '5%',
  },

  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
  },

  container2: {
    marginVertical: '5%',
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
  },

  inputRow1: {
    flexDirection: 'row',
    marginTop: '5%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // padding: '5%',
  },

  text: {
    color: 'black',
    fontSize: 15,
    marginTop: '1%',
    marginLeft: '1%',
  },

  text1: {
    color: 'black',
    fontSize: 13,
    marginTop: '1%',
    marginLeft: '7%',
    lineHeight: 18,
  },
});

const Definicoes = (props) => {
  const [selectedIdioma, setSelectedIdioma] = useState('Portugues');
  const [selectedNotificacoes, setSelectedNotificacoes] = useState('Ativado');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
            <Ionicons name="close" size={37} />
          </TouchableOpacity>
          <Text style={styles.titlePerf}> Definições </Text>
        </View>

        <View style={styles.container2}>
          <View style={styles.inputRow1}>
            <Ionicons name="globe-outline" size={23} />
            <Text style={styles.text}> Idioma</Text>
          </View>

          <Picker
            selectedValue={selectedIdioma}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedIdioma(itemValue)}
          >
            <Picker.Item label="Português" value="pt" />
            <Picker.Item label="Inglês" value="en" />
          </Picker>

          <View style={styles.inputRow1}>
            <Ionicons name="notifications" size={23} />
            <Text style={styles.text}> Notificações</Text>
          </View>

          <Picker
            selectedValue={selectedNotificacoes}
            style={{ height: 50, width: 150 }}
            onValueChange={(itemValue, itemIndex) => setSelectedNotificacoes(itemValue)}
          >
            <Picker.Item label="Ativado" value="ativ" />
            <Picker.Item label="Desativado" value="desativ" />
          </Picker>

          <View style={styles.inputRow1}>
            <Ionicons name="phone-portrait-outline" size={23} />
            <Text style={styles.text}> Acerca de</Text>
          </View>
          <Text style={styles.text1}>Nome da App: Caixa Digital (Cliente){'\n'} Versão da App: 1.0</Text>
        </View>
      </View>
    </>
  );
};

export default Definicoes;
