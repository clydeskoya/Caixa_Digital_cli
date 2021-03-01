import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from "../components/Header";
export default function Notification() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Notification Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
