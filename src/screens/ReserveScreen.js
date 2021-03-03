import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Reserve() {
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
      <Text>Reserve Screen</Text>
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
