import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Image, View } from "react-native";
export function Header() {
  return (
    <Image
      source={require("../img/txtlogo.png")}
      style={{
        position: "absolute",
        width: 123,
        height: 51,
        top: 35,
      }}
    />
  );
}
