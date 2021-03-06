import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default function Notification() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Notification Screen</Text>
    </View>
  );
}
