import React from 'react';
import { Stack } from '../../common/stack';
// eslint-disable-next-line import/no-cycle
import Home from './ReservasHome';

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default HomeStack;
