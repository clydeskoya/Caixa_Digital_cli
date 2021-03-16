import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HeaderReserve() {
  const navigation = useNavigation();
  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text >
          <Ionicons name="arrow-back" size={30} style={styles.icon}/>
          Go Back
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginTop: 50,
    marginLeft: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  icon: {
  marginTop: 10,
   marginRight: 30
  }
});

export default HeaderReserve;
