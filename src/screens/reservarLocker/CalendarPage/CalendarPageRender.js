import React, { useContext, useState, useEffect } from 'react';
import { TouchableOpacity, MaskedViewComponent, StyleSheet, Text, View, Button } from 'react-native';
import moment from 'moment';
import { Calendar } from 'react-native-calendars';
import axios from 'axios';
import { withTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { LoginContext } from '../../../common/loginHelper/responseData';
import Header from '../../../components/HeaderReservarLocker';

const CalendarPage = () => {
  let date;
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');
  const [erro, setErro] = useState('Selecione data');

  const loginContext = useContext(LoginContext);
  const token = loginContext.loginData.jwt;

  let axiosConfig = {
    headers: {
      // Authorization: `Bearer ${token}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3MDMxNTE3LCJleHAiOjE2MTk2MjM1MTd9.rp1gOU7Z9fk5CiO3Y7UGLhwv_KhanBKm38b16GQbnNE`,
    },
  };

  const reservar = async () => {
    try {
      if (selectedDate >= moment().utcOffset('+00:00').format('YYYY-MM-DD')) {
        const { data } = await axios.post(
          'http://192.168.68.102:1337/orders',
          { dateRequested: `${selectedDate}`, orderType: 'send' },
          axiosConfig
        );
        setErro('Reservado');
        console.log(selectedDate);
        console.log(data);
        
      } else {
        setErro('A data selecionada encontra-se ultrapassada');
      }
    } catch (error) {
      if (error.response) {
        // Request made and server responded
        console.log('error.response', error.response.data);
        setErro(`Não existem slots disponíveis para ${selectedDate}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.log('error.request', error.request);
        setErro('Impossível de conectar ao servidor');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error.message', error.message);
        setErro('Impossível requisitar avalibilidade');
      }
    }
    console.log(erro);
  };

  return (
    <View style={styles.container}>
      <Header />
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
      {erro === 'Reservado' ? (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SendReceiveReservarLocker');
            }}
          >
            <View style={styles.buttonSeguinte}>
              <Text style={styles.buttonText}> Seguinte</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.buttonRow}>
          <TouchableOpacity
            onPress={() => {
              reservar();
              /*  navigation.navigate('SendReceiveReservarLocker'); */
            }}
          >
            <View style={styles.buttonSeguinte}>
              <Text style={styles.buttonText}> Reservar</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
      {erro.toString() !== ('Selecione data' && 'Reservado') ? (
        <View style={styles.alert}>
          <Text>{erro}</Text>
        </View>
      ) : null}
      {erro.toString() === 'Reservado' ? (
        <View style={styles.success}>
          <Text>{erro}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  alert: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'red',
  },
  success: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'green',
  },
  buttonRow: {
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonSeguinte: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginHorizontal: 'auto',
    backgroundColor: '#1c4670',
    borderRadius: 45,
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
