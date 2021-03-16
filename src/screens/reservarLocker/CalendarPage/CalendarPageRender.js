import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Actions } from 'react-native-router-flux';
import { withTheme } from 'styled-components/native';
import { OrangeTest, CalendarWrapper, ButtonNext } from './CalendarPageStyles';

const CalendarPage = () => {
  var date;
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
      <TouchableOpacity
        onPress={() => {
          Actions.sendReceive();
        }}
      >
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
