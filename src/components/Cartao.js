/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../screens/Home/styles';

function Cartao({ text }) {
  return (
    <Card style={styles.cardStilo}>
      <Card.Content>
        <TouchableOpacity>
          <View style={styles.inputRow}>
            <Text style={{ fontWeight: 'bold' }}>{text}</Text>
            <Ionicons name="chevron-forward-outline" size={30} />
          </View>
        </TouchableOpacity>
      </Card.Content>
    </Card>
  );
}
export default Cartao;
