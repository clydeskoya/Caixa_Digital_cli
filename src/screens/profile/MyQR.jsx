import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

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

  boxSimple: {
    marginTop: '20%',
    alignSelf: 'center',
    borderRadius: 15,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    width: 270,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    fontWeight: 'bold',
  },

  text: {
    color: 'black',
    fontSize: 16,
    marginLeft: '5%',
    marginTop: '2%',
   // fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 25,
  },
});

const MyQR = (props) => (
  <>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
          <Ionicons name="close" size={37} />
        </TouchableOpacity>
        <Text style={styles.titlePerf}> My QR Code </Text>
      </View>

      <View style={styles.boxSimple}>
        <Ionicons name="qr-code-sharp" size={85} style={{marginBottom: '5%'}}/>
        <Text style={styles.text}>
          Rua Elias Garcia, 2 4D {'\n'}2751-729 São Marcos {'\n'} Lisboa, Portugal {'\n'} Alberta Sorriso{' '}
        </Text>
      </View>
    </View>
  </>
);

export default MyQR;
