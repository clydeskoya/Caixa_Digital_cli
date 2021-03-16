import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { List } from 'react-native-paper';

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
  const [idioma, setIdioma] = useState('Português');
  const [notificacoes, setNotificacoes] = useState('Ativado');

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

          <List.Section>
            <List.Accordion title={idioma} theme={{ colors: { primary: '#1DC690' } }}>
              <List.Item title="Português" />
              <List.Item title="Inglês" />
            </List.Accordion>
          </List.Section>

          <View style={styles.inputRow1}>
            <Ionicons name="notifications" size={23} />
            <Text style={styles.text}> Notificações</Text>
          </View>

          <List.Section>
            <List.Accordion title={notificacoes} theme={{ colors: { primary: '#1DC690' } }}>
              <List.Item title="Ativado" />
              <List.Item title="Desativado" />
            </List.Accordion>
          </List.Section>

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
