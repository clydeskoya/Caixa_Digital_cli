import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../img/txtlogo.png")}
        style={{
          position: "absolute",
          width: 123,
          height: 51,
          top: 35,
        }}
      />
      <ScrollView style={styles.scrollView}>
        <Text>Correspondência Enviada</Text>
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        <Text>Correspondência Recebida</Text>
      </ScrollView>
      <ScrollView style={styles.scrollView}>
        <Text>Reservas</Text>
      </ScrollView>
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
  scrollView: {
    backgroundColor: "#278AB0",
    width: "340",
    height: "125",
  },
});
