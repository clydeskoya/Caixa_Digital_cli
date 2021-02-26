import React from 'react';
import { Stack } from './src/common/stack';
import LoginScreen from './src/screens/LoginScreen';
import UserFormRegister1 from './src/screens/UserFormRegister1';

// Stack Navigator for Login and Sign up Screen
const Auth = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RegisterScreen"
      component={UserFormRegister1}
      options={{
        title: 'Register',
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);

export default Auth;
