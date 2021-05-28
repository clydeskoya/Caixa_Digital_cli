import React, { useContext, useState, useEffect } from 'react';
import { TouchableOpacity, MaskedViewComponent, StyleSheet, Text, ScrollView, View, Button } from 'react-native';

import { Calendar } from 'react-native-calendars';
import moment from 'moment';
import axios from 'axios';
import { withTheme } from 'styled-components/native';
import { useNavigation, useNavigationParam } from '@react-navigation/native';
import { path } from 'ramda';
import { API_URL } from '../../../common/constants/api';
import { LoginContext } from '../../../common/loginHelper/responseData';
import Header from '../../../components/HeaderReservarLocker';

function CalendarPage(props) {
  let date;
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  const [erro, setErro] = useState('Selecione data');

  const loginContext = useContext(LoginContext);
  const token = loginContext.loginData.jwt;

  const axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const reservar = async () => {
    try {
      if (selectedDate >= moment().utcOffset('+00:00').format('YYYY-MM-DD')) {
        if (props.route.params.checked == 'send') {
          const { data } = await axios.post(
            `${API_URL}/orders`,
            {
              dateRequested: selectedDate,
              orderType: path(['route', 'params', 'checked'], props),
              phoneNumber: path(['route', 'params', 'number'], props),
              street: path(['route', 'params', 'street'], props),
              floor: path(['route', 'params', 'floor'], props),
              door: path(['route', 'params', 'door'], props),
              city: path(['route', 'params', 'city'], props),
              postalCode: path(['route', 'params', 'postal'], props),
              weight: path(['route', 'params', 'peso'], props),
              price: '11.23',
              locality: 'LISBOA',
              description: path(['route', 'params', 'description'], props),
            },
            axiosConfig
          );
          console.log(data);
        } else {
          const { data1 } = await axios.post(
            `${API_URL}/orders`,
            {
              dateRequested: selectedDate,
              orderType: path(['route', 'params', 'checked'], props),
            },
            axiosConfig
          );
          console.log(data1);
        }

        setErro('Reservado');
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
        setErro('Impossível requisitar disponibilidade');
      }
    }
    console.log(erro);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header scanLocker={true} />
        <Calendar
          style={{ marginTop: 20 }}
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
                navigation.navigate('SuccessReservarLocker');
                setSelectedDate('');
                setErro('Selecione data');
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewT: {
    marginTop: 30,
    marginLeft: '6%',
  },
  alert: {
    marginTop: 20,
    alignItems: 'center',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
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
  },
});

export default CalendarPage;
