import React, { useReducer } from 'react'; // , { useReducer }
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Auth from '../../Auth';
import { Stack } from '../common/stack';
import { CounterContext2, formReducerInitialState2, registerFormReducer2 } from '../common/formHelper/form.register2';
import Home from '../screens/Home';
import ProfileNavigation from '../ProfileNavigation';

const AppBase = () => {
  const [state2, dispatch2] = useReducer(registerFormReducer2, formReducerInitialState2);

  return (
    <CounterContext2.Provider value={{ formData: state2, formDispatch: dispatch2 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="SplashScreen" component={ProfileNavigation} options={{ headerShown: false }} />

          <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Perfil" component={ProfileNavigation} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </CounterContext2.Provider>
  );
};
// import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
export default AppBase;
