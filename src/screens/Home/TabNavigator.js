import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle

import NotificationScreen from '../NotificationScreen';
import ReserveScreen from '../ReserveScreen';
import ProfileScreen from '../ProfileScreen';
// eslint-disable-next-line import/no-cycle
import HomeStack from './HomeStack';
// eslint-disable-next-line import/no-cycle

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Início') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Reservar') {
          iconName = focused ? 'ios-business' : 'ios-business-outline';
        } else if (route.name === 'Notificações') {
          iconName = focused ? 'ios-notifications' : 'ios-notifications-outline';
        } else if (route.name === 'Perfil') {
          iconName = focused ? 'ios-person-circle' : 'ios-person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#1C4670',
      inactiveTintColor: 'grey',
    }}
  >
    <Tab.Screen name="Início" component={HomeStack} />
    <Tab.Screen name="Reservar" component={ReserveScreen} />
    <Tab.Screen name="Notificações" component={NotificationScreen} />
    <Tab.Screen name="Perfil" component={ProfileScreen} />
  </Tab.Navigator>
);

export default TabNavigator;
/* Vector */
