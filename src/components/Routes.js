import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../TabNavigator';
import Payment from '../screens/reservarLocker/PaymentPage';
import SendOrReceive from '../screens/reservarLocker/SendOrReceive';
import ScanQR from '../screens/reservarLocker/ScanQrCode';
import Success from '../screens/reservarLocker/SuccessPage';
import Login from './AppBase';

const Stack = createStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="sendReceive" component={SendOrReceive} />
      <Stack.Screen name="payment" component={Payment} title="Payment" />
      <Stack.Screen name="scanqrcode" component={ScanQR} title="Scan" />
      <Stack.Screen name="success" component={Success} title="Success" />
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routes;
