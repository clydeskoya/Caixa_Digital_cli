import React, { useContext, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, ScrollView, View, Alert } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { Ionicons } from '@expo/vector-icons';
import { CounterContext2 } from '../../common/formHelper/form.register2';

const REGEX_DATE_OF_BIRTH = /^\d{2}\/\d{2}\/\d{4}?$/;

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '8%',
    width: '50%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5%',
  },

  TextInputStyleName: {
    height: '65%',
    width: '45%',
    marginRight: '4%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },
  TextInputStyleSurname: {
    height: '65%',
    width: '45%',
    marginLeft: '4%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },
  TextInputStyleDate: {
    // /* height: "65%",*/
    width: '40%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
    alignSelf: 'center'
  },
  inputRow: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
    marginLeft: '2%',
  },
  inputRowDate: {
    textAlign: 'left',
    // flexDirection: "row",
    justifyContent: 'space-around',
    padding: '2.5%',
    // marginLeft:"2%"
  },
  title: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  title1: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: '3%',
  },
  goBack: {
    alignSelf: 'flex-start',
    marginTop: '7%',
  },
  buttonOK: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginVertical: '10%',
    backgroundColor: '#1C4670',
    borderRadius: 45,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  progressBar: {
    height: '1.5%',
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 0,
    borderRadius: 5,
    // marginTop: 30,
    marginBottom: '8%',
  },
});

const RegisterForm1 = (props) => {
  const [username, setUserName] = useState('');
  const [usersurname, setUserSurname] = useState('');
  const [dateofbirth, setUserDateofbitrh] = useState('');
  const [gender, setGender] = useState('Feminino');

  const radioProps = [
    { label: 'Feminino   ', value: 'Feminino' },
    { label: 'Masculino   ', value: 'Masculino' },
    { label: 'Outro', value: 'Outro' },
  ];

  const counterContext2 = useContext(CounterContext2);

  const saveNnavigate = () => {
    if (!username) {
      Alert.alert('Escreva o seu nome');
      return;
    }
    if (!usersurname) {
      Alert.alert('Escreva o seu apelido');
      return;
    }
    if (!dateofbirth || !dateofbirth.match(REGEX_DATE_OF_BIRTH)) {
      Alert.alert('Data de nascimento inválida! \n Formato DD/MM/AAAA');
      return;
    }
    if (!gender) {
      Alert.alert('Género');
      return;
    }

    const dataToSend = {
      username,
      usersurname,
      dateofbirth,
      gender,
    };
    console.log(dataToSend);
    counterContext2.formDispatch(dataToSend);
    props.navigation.navigate('RegisterForm2');
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.goBack}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Ionicons name="arrow-back-outline" size={37} />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Registo </Text>
          </View>
          {/* <View style={styles.progressBar}></View> */}

          {/* <View>
          <ProgressBar progress={0.5} color={Colors.blue700} />
          </View> */}

          {/* <View style={styles.container}> */}
          <Text style={styles.title}>Qual o seu nome? </Text>
          {/* </View> */}
          <View style={styles.inputRow}>
            <TextInput
              value={username}
              type="text"
              placeholder="Nome próprio"
              style={styles.TextInputStyleName}
              name="username"
              textAlign="center"
              onChangeText={(UserName) => setUserName(UserName)}
            />

            <TextInput
              value={usersurname}
              type="text"
              placeholder="Apelido"
              style={styles.TextInputStyleSurname}
              name="usersurname"
              onChangeText={(UserSurname) => setUserSurname(UserSurname)}
            />
          </View>

          <View style={styles.container2}>
            <Text style={styles.title}>Data de nascimento </Text>
            <View style={styles.inputRow}>
              <TextInput
                value={dateofbirth}
                type="text"
                placeholder="DD/MM/AAAA"
                style={styles.TextInputStyleDate}
                name="dateofbirth"
                onChangeText={(dateofbirthArg) => setUserDateofbitrh(dateofbirthArg)}
              />
            </View>
          </View>

          <View style={styles.container2}>
            <Text style={styles.title1}>Género</Text>
            <RadioForm
              radio_props={radioProps}
              buttonColor="#000000"
              formHorizontal
              animation
              selectedButtonColor="#1DC690"
              initial={0}
              onPress={setGender}
            />
          </View>

          <View style={styles.container}>
            <TouchableOpacity onPress={saveNnavigate}>
              <View style={styles.buttonOK}>
                <Text style={styles.buttonText}> Seguinte </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterForm1;
