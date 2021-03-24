import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    padding: '3%',
    height: '100%',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    width: '85%',
    height: '35%',
    borderColor: '#D6CFCF',
    borderRadius: 15,
    marginTop: '50%',
  },

  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '8%',
  },

  content: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: '6%',
  },

  buttonSair: {
    marginTop: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: '#D6CFCF',
    borderRadius: 45,
  },
});

const levantarCorrespondencia = (props) => {
  const [title, setTitle] = useState('Locker aberto');
  const [contentText, setContentText] = useState('Já pode levantar a sua correspondência!');
  const [lockerClosed, setLockerClosed] = useState(false);

  const lockerIsClosed = () => {
    setLockerClosed(true);
    setTitle('Correspondência levantada com sucesso');
    setContentText('Obrigado pela sua preferência!');
  };

  const showButton = () => {
    if (lockerClosed) {
      return (
        <TouchableOpacity onPress={() => props.navigation.navigate('LoginForm')}>
          <View style={styles.buttonSair}>
            <Text style={{ color: 'black' }}> Sair </Text>
          </View>
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="checkbox" color="#1DC690" size={40} />
        <Text style={styles.content}>{contentText}</Text>
      </View>
      {showButton()}
      <Button title="quando o locker se fecha" onPress={lockerIsClosed} />
    </View>
  );
};

export default levantarCorrespondencia;
