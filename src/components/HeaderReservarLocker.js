import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
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

export default HeaderReserve;
