import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import Auth from '../../Auth';
import { Stack } from '../common/stack';

// import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
export const AppBase = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="SplashScreen">

      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        // Hiding header for Splash Screen
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Auth"
        component={Auth}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  </NavigationContainer>
);
