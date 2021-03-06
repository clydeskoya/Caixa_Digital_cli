import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { OrangeTest, CalendarWrapper, ButtonNext } from './CalendarPageStyles';

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

const CalendarPage = () => (
  <View>
    <OrangeTest>Escolha uma data</OrangeTest>
    <CalendarWrapper>
      <Calendar
        onDayPress={(day) => {
          console.log('selected day', day);
        }}
      />
    </CalendarWrapper>
    <ButtonNext onPress={() => Alert.alert.alert('Simple ButtonNext pressed')}>
      <Text style={styles.textr}>Seguinte</Text>
    </ButtonNext>
  </View>
);

export default CalendarPage;
