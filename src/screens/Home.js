import React from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
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
      <TouchableOpacity onPress={() => Actions.dogScreen()}></TouchableOpacity>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Correspondência Enviada</Title>

          <Paragraph></Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Correspondência Recebida</Title>

          <Paragraph></Paragraph>
        </Card.Content>
      </Card>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <Title>Reservas</Title>

          <Paragraph>
            27/03/2020-Locker domiciliário reservado para envio
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 3,
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
  cardStilo: {
    width: "90%",
    borderRadius: 12,
    alignSelf: "center",
    marginBottom: 10,
    backgroundColor: "#C5DFEA",
    borderColor: "#2C8DB2",
  },
});
