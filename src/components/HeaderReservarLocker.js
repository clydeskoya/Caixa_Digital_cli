import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/Ionicons';

function HeaderReserve(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text>
          <Ionicons name="arrow-back" size={30} style={styles.icon} />
          {/* Go Back */}
        </Text>
      </TouchableOpacity>
      {!!props.scanLocker ? (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScanQrCode');
          }}
        >
          <View style={styles.viewStyle}>
            <Ionicons name="scan-outline" size={30} />
            <Text style={styles.textT}>Scan Locker</Text>
          </View>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 50,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    marginTop: 10,
    marginRight: 30,
  },
  viewStyle: {
    alignItems: 'center',
    marginRight: 20,
  },
  textT: {
    fontSize: 10,
    backgroundColor: 'rgba(214, 207, 207, 0.6)',
    borderRadius: 5,
  },
});

export default HeaderReserve;
