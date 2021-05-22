import React from 'react';

import SendOrReceive from './SendOrReceive';
import CalendarPage from './CalendarPage';
import ReservationInfo from './ReservationInfo';
import PaymentPage from './PaymentPage';
import OptionScreen from './OptionScreen';
import { Stack } from '../../common/stack';
import ScanQRCode from '../../components/ScanQrCode';

const ReserveNavigation = () => (
  <Stack.Navigator initialRouteName="OptionScreen">
    <Stack.Screen name="OptionScreen" component={OptionScreen} options={{ headerShown: false }} />

    <Stack.Screen name="PaymentPage" component={PaymentPage} options={{ headerShown: false }} />

    <Stack.Screen name="ReservationInfo" component={ReservationInfo} options={{ headerShown: false }} />

    <Stack.Screen name="CalendarPage" component={CalendarPage} options={{ headerShown: false }} />

    <Stack.Screen name="SendOrReceive" component={SendOrReceive} options={{ headerShown: false }} />

    <Stack.Screen name="ScanQRCode" component={ScanQRCode} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default ReserveNavigation;
