import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "../screens/SplashScreen";
import Auth from "../../Auth";
import { Stack } from "../common/stack";
import {
  CounterContext,
  formReducerInitialState,
  registerFormReducer,
} from "../common/context/form.register";
import { Button } from "react-native";
import {
  CounterContext2,
  formReducerInitialState2,
  registerFormReducer2,
} from "../common/context/form.register2";

// import DrawerNavigationRoutes from './screens/DrawerNavigationRoutes';
export function AppBase() {
  //const [state, dispatch] = useReducer(registerFormReducer, formReducerInitialState)
  const [state2, dispatch2] = useReducer(
    registerFormReducer2,
    formReducerInitialState2
  );

  return (
    <CounterContext2.Provider
      //value={{ counterCount: state, counterDispatch: dispatch }}
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

          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </CounterContext2.Provider>
  );
}
