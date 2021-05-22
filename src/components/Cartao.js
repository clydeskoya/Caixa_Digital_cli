/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { View, Text } from 'react-native';

import { Card } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../screens/Home/styles';

function Cartao({ text, id }) {
  return (
    <Card style={styles.cardStilo}>
      <Card.Content>
        <View style={styles.inputRow}>
          <Text style={{ fontWeight: 'bold' }}>{text}</Text>
          <Ionicons name="chevron-forward-outline" size={30} style={{ margin: 5 }} />
        </View>
      </Card.Content>
    </Card>
  );
}
export default Cartao;
