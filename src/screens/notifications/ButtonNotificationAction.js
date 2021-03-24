import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  viewIconNText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 100 / 2,
    // backgroundColor: '#D6CFCF',
    backgroundColor: 'rgba(214, 207, 207, 0.6)',
  },

  touchableOpacityView: {
    marginLeft: '8%',
  },
});

// <ButtonNotificationAction onPress={fn} nameIcon='NomeTop' textButton='DicaTop' />

const ButtonNotificationAction = ({ onPress, nameIcon, textButton }) => (
  <TouchableOpacity style={styles.touchableOpacityView} onPress={onPress}>
    <View style={styles.viewIconNText}>
      <Ionicons name={nameIcon} color="#000" size={23} />
      <Text style={{ fontSize: 11 }}>{textButton}</Text>
    </View>
  </TouchableOpacity>
);
export default ButtonNotificationAction;
