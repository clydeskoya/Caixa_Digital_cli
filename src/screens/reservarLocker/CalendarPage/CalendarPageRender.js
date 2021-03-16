import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';

import { withTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { OrangeTest, CalendarWrapper, ButtonNext } from './CalendarPageStyles';
import Header from '../../../components/HeaderReservarLocker'

const CalendarPage = () => {
  var date;
  const navigation = useNavigation();
  return (
    <View>
      <Header/>
      <OrangeTest>Escolha uma data</OrangeTest>
      <CalendarWrapper>
        <Calendar
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
        />
      </CalendarWrapper>
      <TouchableOpacity onPress={() => navigation.navigate('SendReceiveReservarLocker')}>
        <ButtonNext>
          <Text style={styles.textr}>Seguinte</Text>
        </ButtonNext>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textr: {
    color: 'white',
    marginVertical: 5,
    fontSize: 22,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default CalendarPage;
