import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  inputRow: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    padding: '5%',
  },

  inputRow1: {
    alignItems: 'center',
    marginTop: '20%',
  },

  boxSimple: {
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#C4C4C4',
    margin: '13%',
    width: '75%',
    height: '76%',
  },
});

const MyQR = () => (
  <>
    <View style={styles.header}>
      <View style={styles.inputRow}>
        <Ionicons name="close" size={30} />
        <Text style={{ color: 'black', fontSize: 19, marginLeft: '7%', marginTop: '2%' }}> My QR Code </Text>
      </View>
      <View style={styles.boxSimple}>
        <View style={styles.inputRow1}>
          <Ionicons name="qr-code-sharp" size={85} />
          <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%', marginTop: '2%' }}>
            {' '}
            Rua Elias Garcia, 2 4D{' '}
          </Text>
          <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%', marginTop: '2%' }}> 2751-729 </Text>
          <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%', marginTop: '2%' }}> São Marcos </Text>
          <Text style={{ color: 'black', fontSize: 15, marginLeft: '5%', marginTop: '2%' }}> Lisboa, Portugal </Text>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, marginLeft: '7%', marginTop: '2%' }}>
            {' '}
            Alberta Sorriso{' '}
          </Text>
        </View>
      </View>
    </View>
  </>
);

export default MyQR;
