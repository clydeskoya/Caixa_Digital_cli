import React, { useState, useContext } from "react";
import { Button, Text, TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import { CounterContext2 } from "../../common/context/form.register2";

const REGEX_POSTAL_CODE = /^\d{4}-\d{3}?$/;
const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

const RegisterForm2 = (props) => {
  const [street, setStreet] = useState("");
  const [door, setDoor] = useState("");
  const [floor, setFloor] = useState("");
  const [postalCode, setPostalColde] = useState("");
  const [locality, setLocality] = useState("");
  const [district, setDistrict] = useState("Lisboa");
  const [country, setCountry] = useState("Portugal");

  const counterContext2 = useContext(CounterContext2);

  const getZipCode = () => {
    const zip = document.getElementById("zipcode").value.slice(0, 4);
    const code = document.getElementById("zipcode").value.slice(5, 8);

    fetch(
      `https://www.ctt.pt/feecom/app/open/common/postalcodesearch.jspx?cp4=${zip}&cp3=${code}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        //setCodigo(result.rows);
        setLocality(result);
      });
  };

  const saveNnavigate = () => {
    if (!street) {
      alert("Indique a sua rua");
      return;
    }
    if (!door || !door.match(REGEX_ONLY_NUMBERS)) {
      alert("Número de porta inválido");
      return;
    }
    if (!floor) {
      alert("Indique o seu andar");
      return;
    }
    if (!postalCode || !postalCode.match(REGEX_POSTAL_CODE)) {
      alert("Código postal inválido");
      return;
    }
    if (!district) {
      alert("Indique o distrito");
      return;
    }

    var dataToSend = {
      street: street,
      door: door,
      floor: floor,
      postalCode: postalCode,
      locality: locality,
      district: district,
      country: country,
    };

    console.log(dataToSend);
    counterContext2.formDispatch(dataToSend);
    props.navigation.navigate("RegisterForm3");
  };

  return (
    <>
      <View>
        <Text>Qual a sua morada? </Text>
        <Text>Rua, Nº Porta, Andar</Text>
        <TextInput
          type="text"
          placeholder="Rua"
          name="street"
          onChangeText={(Street) => setStreet(Street)}
        />

        <TextInput
          type="text"
          placeholder="Porta"
          name="door"
          keyboardType="numeric"
          onChangeText={(Door) => setDoor(Door)}
        />

        <TextInput
          type="text"
          placeholder="Andar"
          name="floor"
          onChangeText={(Floor) => setFloor(Floor)}
        />

        <Text>Código postal</Text>
        <TextInput
          type="text"
          placeholder="XXXX-XXX"
          name="postalCode"
          id="zipcode"
          onChangeText={
            ((e) => getZipCode(), (PostalCode) => setPostalColde(PostalCode))
          }
        />

        <Text>{locality}</Text>

        <Text>Distrito</Text>
        <TextInput
          type="text"
          defaultValue="Lisboa"
          placeholder="Distrito"
          name="district"
          onChangeText={(District) => setDistrict(District)}
        />

        <Text>Pais</Text>
        <TextInput
          type="text"
          defaultValue="Portugal"
          placeholder="Pais"
          name="country"
          editable={false}
          //onChangeText={(Country) => setCountry(Country)}
        />

        <View style={styles.buttonOK}>
          <TouchableOpacity onPress={saveNnavigate}>
            <Text style={{ color: "white" }}> Seguinte </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default RegisterForm2;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 140,
    height: 50,
    backgroundColor: "#1DC690",
    paddingVertical: 10,
    borderRadius: 45,
  },
  container: {
    height: "100%",
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  TextInputStyle: {
    textAlign: "center",
    height: 40,
    marginBottom: 10,
    borderBottomColor: "#726F6F",
    borderBottomWidth: 1,
  },
  inputRow: {
    flexDirection: "row",
    marginHorizontal: 55,
    justifyContent: "space-around",
    //alignItems:"spaceAround",
    padding: 10,
  },
  title: {
    fontWeight: "bold",
  },
  buttonOK: {
    marginHorizontal: 55,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    width: 290,
    height: 45,
    backgroundColor: "#1C4670",
    paddingVertical: 10,
    borderRadius: 45,
  },
});
