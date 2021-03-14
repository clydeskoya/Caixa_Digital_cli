import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '7%',
    marginVertical: '5%',
  },

  TextInputStyle: {
    height: '65%',
    width: '45%',
    marginRight: '4%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyle1: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
    multilines: 'true',
    textAlignVertical: 'top',
  },

  inputRow: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
  },

  inputRow1: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
    width: '100%',
  },

  inputRow2: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: '5%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  buttonOK: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginVertical: '5%',
    backgroundColor: '#1C4670',
    borderRadius: 45,
    marginLeft: '17%',
  },

  buttonOK1: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: '#D6CFCF',
    borderRadius: 45,
    marginLeft: '17%',
  },
});

const EditProfile = () => {
  const [username, setUserName] = useState('');
  const [usersurname, setUserSurname] = useState('');
  const [adress, setAdress] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <View style={styles.header}>
        <View style={styles.inputRow2}>
          <Ionicons name="close" size={30} />
          <Text style={{ color: 'black', fontSize: 19, marginLeft: '7%', marginTop: '2%' }}> Editar Perfil </Text>
        </View>
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Editar nome </Text>

        <View style={styles.inputRow}>
          <TextInput
            value={username}
            type="text"
            placeholder="Alberta"
            style={styles.TextInputStyle}
            name="username"
            onChangeText={(UserName) => setUserName(UserName)}
          />

          <TextInput
            value={usersurname}
            type="text"
            placeholder="Sorriso"
            style={styles.TextInputStyle}
            name="usersurname"
            onChangeText={(UserSurname) => setUserSurname(UserSurname)}
          />
        </View>

        <Text style={styles.title}>Alterar morada</Text>

        <View style={styles.inputRow1}>
          <TextInput
            type="text"
            placeholder="Rua Elias Garcia, 2 4D,
            2751-729 Agualva-Cacém, Lisboa, Portugal"
            value={adress}
            style={styles.TextInputStyle1}
            name="adress"
            onChangeText={(Adress) => setAdress(Adress)}
          />
        </View>

        <Text style={styles.title}>Alterar password</Text>

        <View style={styles.inputRow1}>
          <TextInput
            style={styles.TextInputStyle1}
            value={pass}
            type="password"
            id="pass"
            name="password"
            autoCapitalize="none"
            secureTextEntry
            onChangeText={(Pass) => setPass(Pass)}
          />
          <Ionicons name="eye" size={20} />
        </View>
      </View>
      <View style={styles.buttonOK}>
        <Text style={{ color: 'white' }}> Guardar </Text>
      </View>
      <View style={styles.buttonOK1}>
        <Text style={{ color: 'black' }}> Cancelar </Text>
      </View>
    </>
  );
};

export default EditProfile;
