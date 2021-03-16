import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '8%',
  },

  text: {
    fontSize: 15.5,
    marginLeft: '6%',
    borderBottomWidth: 2,
    borderBottomColor: '#D6CFCF',

  },

  inputRow: {
    flexDirection: 'row',
    paddingVertical: '5%',
  },

  nameNCircle: {
    flexDirection: 'row',
    marginTop: '15%',
    marginBottom: '10%',
    justifyContent: 'center',
  },

  name: {
    marginTop: '5%',
    flexDirection: 'row',
    fontWeight: 'bold',
    fontSize: 18,
  },

  circle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#1C4670',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ProfileScreen = (props) => {
  const hey = '';
  return (
    <View style={styles.container}>

      <View style={styles.nameNCircle}>
        <View style={styles.circle}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> AS </Text>
        </View>
        <Text style={styles.name}> Alberta Sorriso</Text>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('EditProfile')}>
        <View style={styles.inputRow}>
          <Ionicons name="person-circle-outline" color="#000000" size={27} />
          <Text style={styles.text}>Editar Perfil</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('MyQR')}>
        <View style={styles.inputRow}>
          <Ionicons name="qr-code-outline" color="#000000" size={23} />
          <Text style={styles.text}>My QR Code</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate('Definicoes')}>
        <View style={styles.inputRow}>
          <Ionicons name="settings-outline" color="#000000" size={25} />
          <Text style={styles.text}>Definições</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => '.....'}>
        <View style={styles.inputRow}>
          <Ionicons name="log-out-outline" color="#000000" size={25} />
          <Text style={styles.text}>Terminar Sessão</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
