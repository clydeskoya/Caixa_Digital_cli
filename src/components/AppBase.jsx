import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Auth from '../../Auth';
import { Stack } from '../common/stack';
import TabNavigator from '../screens/Home/TabNavigator';
import CalendarReservarLocker from '../screens/reservarLocker/CalendarPage';
import SendReceiveReservarLocker from '../screens/reservarLocker/SendOrReceive';
import ReservationInfo from '../screens/reservarLocker/ReservationInfo';
import PaymentReservarLocker from '../screens/reservarLocker/PaymentPage';
import SucessReservarLocker from '../screens/reservarLocker/SuccessPage';
import ScanQrCode from './ScanQrCode';
import { CounterContext2, formReducerInitialState2, registerFormReducer2 } from '../common/formHelper/form.register2';
import ProfileNavigation from './ProfileNavigation';
import { LoginContext, loginReducer, loginReducerInitialState } from '../common/loginHelper/responseData';

const AppBase = () => {
  const [state2, dispatch2] = useReducer(registerFormReducer2, formReducerInitialState2);
  const [state, dispatch] = useReducer(loginReducer, loginReducerInitialState);

  return (
    <CounterContext2.Provider value={{ formData: state2, formDispatch: dispatch2 }}>
      {/*   <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen
            name="CalendarReservarLocker"
            component={CalendarReservarLocker}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SendReceiveReservarLocker"
            component={SendReceiveReservarLocker}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="ReservationInfo" component={ReservationInfo} options={{ headerShown: false }} />
          <Stack.Screen
            name="PaymentReservarLocker"
            component={PaymentReservarLocker}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="SucessReservarLocker" component={SucessReservarLocker} options={{ headerShown: false }} />
          <Stack.Screen name="ScanQrCode" component={ScanQrCode} options={{ headerShown: false }} />

          <Stack.Screen name="Perfil" component={ProfileNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>  */}
      <LoginContext.Provider value={{ loginData: state, loginDispatch: dispatch }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
            <Stack.Screen
              name="CalendarReservarLocker"
              component={CalendarReservarLocker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendReceiveReservarLocker"
              component={SendReceiveReservarLocker}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ReservationInfo" component={ReservationInfo} options={{ headerShown: false }} />
            <Stack.Screen
              name="PaymentReservarLocker"
              component={PaymentReservarLocker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SucessReservarLocker"
              component={SucessReservarLocker}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="ScanQrCode" component={ScanQrCode} options={{ headerShown: false }} />
            <Stack.Screen name="Perfil" component={ProfileNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </LoginContext.Provider>
    </CounterContext2.Provider>
  );
};
// import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
export default AppBase;
