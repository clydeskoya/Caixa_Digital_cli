import React from 'react';
import { MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { withTheme } from 'styled-components/native';
import { OrangeTest, CalendarWrapper, ButtonNext } from './CalendarPageStyles';

const CalendarPage = () => {
  let date;
  return (
    <View>
      <OrangeTest>Escolha uma data</OrangeTest>
      <CalendarWrapper>
        <Calendar
          onDayPress={(day) => {
            console.log('selected day', day);
          }}
        />
      </CalendarWrapper>
      <ButtonNext onPress={() => Alert.alert('Simple ButtonNext pressed')}>
        <Text style={styles.textr}>Seguinte</Text>
      </ButtonNext>
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
