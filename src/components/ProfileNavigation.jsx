import React from 'react';
import ProfileScreen from '../screens/profile/ProfileScreen';
import MyQR from '../screens/profile/MyQR';
import EditProfile from '../screens/profile/EditProfile';
import Definicoes from '../screens/profile/Definicoes';
import { Stack } from '../common/stack';

const ProfileNavigation = () => (
  <Stack.Navigator initialRouteName="Perfil">
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} options={{ headerShown: false }} />

    <Stack.Screen name="MyQR" component={MyQR} options={{ headerShown: false }} />

    <Stack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />

    <Stack.Screen name="Definicoes" component={Definicoes} options={{ headerShown: false }} />
  </Stack.Navigator>
);

export default ProfileNavigation;
