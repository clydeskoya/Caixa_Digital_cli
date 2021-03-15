import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: '50%',
    height: '7%',
    marginTop: '2%',
    backgroundColor: '#1C4670',
    borderRadius: 100,
  },

  container: {
    // flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '8%',
  },

  container2: {
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom:'20%',
    marginVertical: '5%',
  },

  text: {
    marginVertical: '4%',
    fontSize: 14,
    textDecorationLine: 'underline',
  },

  inputRow: {
    flexDirection: 'row',
    marginBottom: '3%',
  },

  mambo: {
    flexDirection: 'row',
    marginVertical: '20%',
    fontWeight: 'bold',
  },

  circle: {
    width: 61,
    height: 59,
    borderRadius: 50,
    backgroundColor: '#1C4670',
    alignItems: 'center',
    justifyContent: 'center',
    top: '9%',
    marginVertical: '5%',
    // marginHorizontal: '5%',
  },
});

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.inputRow}>
        <View style={styles.circle}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> AS </Text>
        </View>
        <Text style={styles.mambo}> Alberta Sorriso</Text>
      </View>

      <View style={styles.container2}>
      <View style={styles.inputRow}>
        <Ionicons name="person-circle-outline" color="#000000" size={25} />
        <Text style={styles.text}> Editar Perfil</Text>
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="qr-code-outline" color="#000000" size={25} />
        <Text style={styles.text}> My QR Code</Text>
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="settings-outline" color="#000000" size={25} />
        <Text style={styles.text}> Definições</Text>
      </View>
      <View style={styles.inputRow}>
        <Ionicons name="log-out-outline" color="#000000" size={25} />
        <Text style={styles.text}> Terminar Sessão</Text>
      </View>
    </View>
    </View>
  );
}
