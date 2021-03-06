import React from 'react'; // , { useReducer }
import { NavigationContainer } from '@react-navigation/native';
// import { Button } from 'react-native';
import SplashScreen from '../screens/SplashScreen';
import Auth from '../../Auth';
import { Stack } from '../common/stack';
// import { CounterContext, formReducerInitialState, registerFormReducer } from '../common/context/form.register';
import { CounterContext2, dispatch2, state2 } from '../common/context/form.register2';

const AppBase = () => (
  <CounterContext2.Provider
    // value={{ counterCount: state, counterDispatch: dispatch }}
    value={{ formData: state2, formDispatch: dispatch2 }}
  >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  </CounterContext2.Provider>
);
// import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
export default AppBase;
