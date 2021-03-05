import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Header } from "../components/Header";
import Calendar from "./reservarLocker/CalendarPage/index";
export default function Reserve() {
  return (
    <View style={styles.container}>
      <Header />
      <Calendar />
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
