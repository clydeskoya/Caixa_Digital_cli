import React, { useState } from 'react';
import { TouchableOpacity, MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';

import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import { withTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { OrangeTest, CalendarWrapper, ButtonNext } from './CalendarPageStyles';
import Header from '../../../components/HeaderReservarLocker';

const CalendarPage = () => {
  let date;
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  const reservation = async () => {
    const { data } = await axios.get('http://10.0.2.2:1337/orders',{
      dateRequested: "2021-03-21",
      orderType: "send"
    });
    console.log(data);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <OrangeTest>Escolha uma data</OrangeTest>
      <CalendarWrapper>
        <Calendar
          markedDates={{
            [selectedDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: '#1DC690',
              selectedTextColor: '#fff',
            },
          }}
          theme={{
            backgroundColor: '#fff',
            calendarBackground: '#fff',
            textSectionTitleColor: '#D6CFCF',
            selectedDayBackgroundColor: '#1DC690',
            selectedDayTextColor: '#D6CFCF',
            todayTextColor: '#1DC690',
            dayTextColor: '#000',
            arrowColor: '#1DC690',
            dotColor: '#1DC690',
            selectedDotColor: '#1DC690',
            disabledArrowColor: '#1DC690',
            monthTextColor: '#000',
            indicatorColor: '#1DC690',
            textDayFontWeight: '300',
            textMonthFontWeight: 'bold',
            textDayHeaderFontWeight: 'bold',
            textDayFontSize: 16,
            textMonthFontSize: 16,
            textDayHeaderFontSize: 15,
          }}
          onDayPress={
            ((day) => {
              console.log('selected day', day);
            },
            (day) => setSelectedDate(day.dateString))
          }
        />
      </CalendarWrapper>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SendReceiveReservarLocker');
          reservation()
        }}
      >
        <ButtonNext>
          <Text style={styles.buttonText}>Seguinte</Text>
        </ButtonNext>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  container: {
    backgroundColor: '#FFF',
    height: '100%',
  },
});

export default CalendarPage;
