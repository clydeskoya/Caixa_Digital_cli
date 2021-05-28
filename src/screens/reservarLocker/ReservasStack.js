import React from 'react';
import { Stack } from '../../common/stack';
// eslint-disable-next-line import/no-cycle
import CalendarReservarLocker from './CalendarPage';
/* 

import PaymentReservarLocker from '../PaymentPage';
*/
import SendReceiveReservarLocker from './SendOrReceive';
import ScanQrCode from '../../components/ScanQrCode';
import ReservationInfo from './ReservationInfo';
import SucessReservarLocker from './SuccessPage';
import Home from './ReservasHome';

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={SendReceiveReservarLocker} options={{ headerShown: false }} />
    <Stack.Screen
      name="SendReceiveReservarLocker"
      component={SendReceiveReservarLocker}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="ReservationInfo" component={ReservationInfo} options={{ headerShown: false }} />
    <Stack.Screen name="CalendarReservarLocker" component={CalendarReservarLocker} options={{ headerShown: false }} />
    <Stack.Screen name="SuccessReservarLocker" component={SucessReservarLocker} options={{ headerShown: false }} />
    <Stack.Screen name="ScanQrCode" component={ScanQrCode} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default HomeStack;
