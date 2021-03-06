import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import NotificationScreen from "./src/screens/NotificationScreen";
import ReserveScreen from "./src/screens/ReserveScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
const Tab = createBottomTabNavigator();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Início") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "Reservar") {
              iconName = focused ? "ios-business" : "ios-business-outline";
            } else if (route.name === "Notificações") {
              iconName = focused
                ? "ios-notifications"
                : "ios-notifications-outline";
            } else if (route.name === "Perfil") {
              iconName = focused
                ? "ios-person-circle"
                : "ios-person-circle-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#1C4670",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Reservar" component={ReserveScreen} />
        <Tab.Screen name="Notificações" component={NotificationScreen} />
        <Tab.Screen name="Perfil" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/* Vector */
