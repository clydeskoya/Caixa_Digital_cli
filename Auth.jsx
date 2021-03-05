import React from 'react';
import { Stack } from './src/common/stack';
import RegisterForm1 from './src/screens/register/RegisterForm1'
import RegisterForm2 from './src/screens/register/RegisterForm2'
import RegisterForm3 from './src/screens/register/RegisterForm3'
import RegisterForm4 from './src/screens/register/RegisterForm4'
import LoginForm from './src/screens/login/LoginForm';


// Stack Navigator for Login and Sign up Screen
const Auth = () => (
  <Stack.Navigator initialRouteName="LoginScreen">
    <Stack.Screen
      name="LoginForm"
      component={RegisterForm3}
     /*  component={LoginForm} */
      options={{ headerShown: false }}
    />
    
    <Stack.Screen
      name="RegisterForm1"
      component={RegisterForm1}
      options={{  headerShown: false }}
    />

    <Stack.Screen
      name="RegisterForm2"
      component={RegisterForm2}
      options={{  headerShown: false }} />

    <Stack.Screen
      name="RegisterForm3"
      component={RegisterForm3}
      options={{  headerShown: false }} />

    <Stack.Screen
      name="RegisterForm4"
      component={RegisterForm4}
      options={{ headerShown: false}} />

  </Stack.Navigator>
);

export default Auth;
