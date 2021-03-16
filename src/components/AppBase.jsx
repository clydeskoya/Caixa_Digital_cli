import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Auth from '../../Auth';
import { Stack } from '../common/stack';
import TabNavigator from '../screens/Home/TabNavigator';
import { CounterContext2, formReducerInitialState2, registerFormReducer2 } from '../common/formHelper/form.register2';
import ProfileNavigation from '../ProfileNavigation';

const AppBase = () => {
  const [state2, dispatch2] = useReducer(registerFormReducer2, formReducerInitialState2);
  return (
    <CounterContext2.Provider value={{ formData: state2, formDispatch: dispatch2 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={ProfileNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CounterContext2.Provider>
  );
};
// import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
export default AppBase;
