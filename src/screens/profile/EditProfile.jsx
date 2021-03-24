import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '5%',
  },

  container2: {
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

  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
  },

  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
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

  buttonSair: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    backgroundColor: '#D6CFCF',
    borderRadius: 45,
    marginLeft: '17%',
  },

  buttonTextOK: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  buttonTextSair: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const EditProfile = (props) => {
  const [username, setUserName] = useState('');
  const [usersurname, setUserSurname] = useState('');
  const [adress, setAdress] = useState('');
  const [pass, setPass] = useState('');

  return (
    <>
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
            <Ionicons name="close" size={37} />
          </TouchableOpacity>
          <Text style={styles.titlePerf}> Editar Perfil </Text>
        </View>

        <View style={styles.container2}>
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
        </View>

        <View style={styles.container2}>
          <Text style={styles.title}>Alterar morada</Text>
          <View style={styles.inputRow1}>
            <TextInput
              type="text"
              placeholder="Rua Elias Garcia, 2 4D, 2751-729 Agualva-Cacém, Lisboa, Portugal"
              value={adress}
              style={styles.TextInputStyle1}
              multiline
              name="adress"
              onChangeText={(Adress) => setAdress(Adress)}
            />
          </View>
        </View>

        <View style={styles.container2}>
          <Text style={styles.title}>Alterar password</Text>

          <View style={styles.inputRow1}>
            <TextInput
              style={styles.TextInputStyle1}
              value={pass}
              type="password"
              id="pass"
              name="password"
              placeholder="********"
              autoCapitalize="none"
              secureTextEntry
              onChangeText={(Pass) => setPass(Pass)}
            />
            <TouchableOpacity>
              <Ionicons name="eye" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity>
        <View style={styles.buttonOK}>
          <Text style={styles.buttonTextOK}> Guardar </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.buttonSair}>
          <Text style={styles.buttonTextSair}> Cancelar </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default EditProfile;
