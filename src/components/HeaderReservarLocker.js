import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

function HeaderReserve() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
         navigation.goBack();
        }}
      >
        <Text style={styles.textr}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  textr: {
    marginTop: 50,
    marginLeft: 20
  },
});

export default HeaderReserve;
