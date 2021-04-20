import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { Button, Dialog, Portal, Provider, Colors, ActivityIndicator } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-community/picker';
import { prop } from 'ramda';
import { LoginContext } from '../../common/loginHelper/responseData';
import { API_URL } from '../../common/constants/api';

const REGEX_POSTAL_CODE = /^\d{4}-\d{3}?$/;
const REGEX_ONLY_NUMBERS = /^[0-9]+$/;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '5%',
    backgroundColor: 'white',
    height: '100%',
  },

  container2: {
    // marginVertical: '5%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginBottom: '2.5%',
  },

  TextInputStyle: {
    height: '65%',
    width: '45%',
    marginRight: '4%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  inputRow: {
    textAlign: 'left',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '2.5%',
    paddingBottom: '6.5%',
  },

  header: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: '7%',
    padding: '5%',
  },

  title: {
    //  fontWeight: 'bold',
    fontSize: 15.5,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1DC690',
    padding: '2%',
    // paddingBottom: '6.5%',
  },

  titlePerf: {
    color: 'black',
    fontSize: 19,
    marginLeft: '3%',
    marginTop: '2%',
    marginBottom: '5%',
    fontWeight: 'bold',
  },

  TextInputStyleCity: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleStreet: {
    textAlign: 'left',
    width: '50%',
    marginBottom: '3%',
    marginRight: '5%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleDoor: {
    textAlign: 'left',
    width: '20%',
    marginRight: '5%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleFloor: {
    textAlign: 'left',
    width: '20%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  TextInputStyleZipcode: {
    textAlign: 'left',
    width: '25%',
    marginBottom: '3%',
    borderBottomColor: '#726F6F',
    borderBottomWidth: 1,
  },

  title1: {
    fontWeight: 'bold',
    fontSize: 13,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  title2: {
    fontWeight: 'bold',
    fontSize: 13,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: '5%',
  },

  titleLocality: {
    fontSize: 12.5,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    textAlign: 'left',
    flexDirection: 'row',
    padding: '2.5%',
  },
});

const EditProfile = (props) => {
  const loginContext = useContext(LoginContext);

  const { name } = loginContext.loginData.user.entity;
  const names = name.split(' ');

  const [username, setUserName] = useState(names[0]);
  const [usersurname, setUserSurname] = useState(names[1]);
  const [street, setStreet] = useState(loginContext.loginData.user.entity.address.street);
  const [door, setDoor] = useState(loginContext.loginData.user.entity.address.door);
  const [floor, setFloor] = useState(loginContext.loginData.user.entity.address.floor);
  const [postalCode, setPostalColde] = useState(loginContext.loginData.user.entity.address.postalCode);
  const [locality, setLocality] = useState(loginContext.loginData.user.entity.address.locality);
  const [city, setCity] = useState(loginContext.loginData.user.entity.address.city);
  const [phone, setPhoneNumber] = useState(loginContext.loginData.user.entity.phoneNumber);

  const [dialogTitle, setDialogTitle] = useState('');

  const [dialogTitle1, setDialogTitle1] = useState('');
  const [dialogContent, setDialogContent] = useState('');
  const [successDialogVisibility, setSuccessDialogVisibility] = useState(false);
  const showSuccessDialog = () => setSuccessDialogVisibility(true);
  const hideSuccessDialog = () => setSuccessDialogVisibility(false);

  const [loading, setLoading] = useState(false);

  const [dadosPessoais, setDadosPessoais] = useState(false);
  const dadosPessoaisOn = () => setDadosPessoais(true);
  const dadosPessoaisOff = () => setDadosPessoais(false);

  const [dadosMorada, setDadosMorada] = useState(false);
  const dadosMoradaOn = () => setDadosMorada(true);
  const dadosMoradaOff = () => setDadosMorada(false);

  const [dialogVisibility, setDialogVisibility] = useState(false);
  const showDialog = () => setDialogVisibility(true);
  const hideDialog = () => {
    setDialogVisibility(false);
    dadosPessoaisOff();
    dadosMoradaOff();
  };

  const hideDialogNSendData = () => {
    setDialogVisibility(false);
    if (dadosPessoais || dadosMorada) {
      sendDataToServer();
    }
    dadosPessoaisOff();
    dadosMoradaOff();
  };

  const [passDialogVisibility, setPassDialogVisibility] = useState(false);
  const showPassDialog = () => {
    setPassDialogVisibility(true);
  };
  const hidePassDialog = () => {
    setPassDialogVisibility(false);
  };

  const hidePassDialogNNavigate = () => {
    forgotPass();
  };

  const showDadosPessoaisDialog = () => {
    setDialogTitle('Editar Dados Pessoais');
    dadosPessoaisOn();
    showDialog();
  };

  const showDadosMoradaDialog = () => {
    setDialogTitle('Editar Dados de Morada');
    dadosMoradaOn();
    showDialog();
  };

  useEffect(() => {
    async function fetchData() {
      const zip = postalCode.slice(0, 4);
      const code = postalCode.slice(5, 8);
      await fetch(`https://www.ctt.pt/feecom/app/open/common/postalcodesearch.jspx?cp4=${zip}&cp3=${code}`)
        .then(
          (res) => res.json(),
          (error) => console.error(error)
        )
        .then(
          (result) => {
            console.log('result', result);
            setLocality(prop('value', result));
          },
          (error) => console.error(error)
        );
    }
    if (REGEX_POSTAL_CODE.test(postalCode)) {
      fetchData();
    } else if (prop('length', locality)) {
      setLocality('');
    }
  }, [postalCode]);

  const sendToServer = async (formData) => {
    setLoading(true);
    const token = loginContext.loginData.jwt;
    const url = dadosPessoais ? `${API_URL}/entities` : `${API_URL}/addresses`;

    await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          setLoading(false);
          setDialogTitle1('Sucesso!');
          setDialogContent('Os seus dados foram alterados com sucesso!');
          showSuccessDialog();
        },
        (err) => {
          console.error('error', err);
          setLoading(false);
          setDialogTitle1('Erro!');
          setDialogContent('Algo de inesperado ocorreu. Por favor tente mais tarde!');
          showSuccessDialog();
        }
      );

    dadosPessoaisOff();
    dadosMoradaOff();
  };

  const forgotPass = async () => {
    setLoading(true);
    const mail = loginContext.loginData.user.entity.email;
    const data = { email: mail };
    await fetch(`${API_URL}/auth/forgot-password`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log('result', result);
          props.navigation.navigate('AlterarPass');
          setPassDialogVisibility(false);
          setLoading(false);
        },
        (err) => {
          console.error('error', err);
          setLoading(false);
        }
      );
  };

  const sendDataToServer = () => {
    if (dadosPessoais) {
      if (!username || !usersurname) {
        Alert.alert('Escreva o seu nome');
        return;
      }
      if (!phone) {
        Alert.alert('Indique o seu número de telemóvel');
        return;
      }

      const dataToSend = {
        name: `${username} ${usersurname}`,
        phoneNumber: phone,
      };

      sendToServer(dataToSend);
    } else if (dadosMorada) {
      if (!street) {
        Alert.alert('Indique a sua rua');
        return;
      }
      if (!door || !door.match(REGEX_ONLY_NUMBERS)) {
        Alert.alert('Número de porta inválido');
        return;
      }
      if (!floor) {
        Alert.alert('Indique o seu andar');
        return;
      }
      if (!postalCode || !postalCode.match(REGEX_POSTAL_CODE)) {
        Alert.alert('Código postal inválido');
        return;
      }
      if (!city) {
        Alert.alert('Selecione a sua cidade');
        return;
      }

      const dataToSend = {
        street,
        door,
        floor,
        postalCode,
        locality,
        city,
      };
      sendToServer(dataToSend);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.navigate('ProfileScreen')}>
            <Ionicons name="close" size={37} />
          </TouchableOpacity>
          <Text style={styles.titlePerf}> Editar Perfil </Text>
        </View>

        {loading && (
          <View>
            <ActivityIndicator animating color={Colors.blue800} size="large" />
          </View>
        )}

        <View>
          <TouchableOpacity onPress={showDadosPessoaisDialog}>
            <View style={styles.inputRow}>
              <Ionicons name="ellipsis-horizontal-circle-outline" color="#000000" size={27} />
              <Text style={styles.title}>Editar Dados Pessoais </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={showDadosMoradaDialog}>
            <View style={styles.inputRow}>
              <Ionicons name="location-outline" color="#000000" size={27} />
              <Text style={styles.title}>Alterar morada</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity onPress={showPassDialog}>
            <View style={styles.inputRow}>
              <Ionicons name="key-outline" color="#000000" size={27} />
              <Text style={styles.title}>Alterar password</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Provider>
        <View>
          <Portal>
            <Dialog visible={dialogVisibility} dismissable={false}>
              <Dialog.Title>{dialogTitle}</Dialog.Title>
              <Dialog.Content>
                {dadosPessoais && (
                  <View style={styles.container2}>
                    <Text style={styles.title2}> Nome </Text>
                    <View style={styles.inputRow}>
                      <TextInput
                        value={username}
                        type="text"
                        placeholder="Nome"
                        style={styles.TextInputStyle}
                        name="username"
                        onChangeText={(UserName) => setUserName(UserName)}
                      />

                      <TextInput
                        value={usersurname}
                        type="text"
                        placeholder="Apelido"
                        style={styles.TextInputStyle}
                        name="usersurname"
                        onChangeText={(UserSurname) => setUserSurname(UserSurname)}
                      />
                    </View>

                    <Text style={styles.title2}> Telemóvel </Text>
                    <View style={styles.inputRow}>
                      <TextInput
                        type="text"
                        placeholder="Número de telemóvel"
                        style={styles.TextInputStyle}
                        name="phone"
                        keyboardType="numeric"
                        value={phone}
                        onChangeText={(Phone) => setPhoneNumber(Phone)}
                      />
                    </View>
                  </View>
                )}

                {dadosMorada && (
                  <>
                    <View style={styles.container2}>
                      <Text style={styles.title1}>Rua, Andar, Apartamento</Text>
                      <View style={styles.inputRow}>
                        <TextInput
                          value={street}
                          type="text"
                          placeholder="Rua"
                          style={styles.TextInputStyleStreet}
                          name="street"
                          onChangeText={(Street) => setStreet(Street)}
                        />

                        <TextInput
                          value={floor}
                          type="text"
                          placeholder="Andar"
                          style={styles.TextInputStyleFloor}
                          name="floor"
                          onChangeText={(Floor) => setFloor(Floor)}
                        />

                        <TextInput
                          value={door}
                          type="text"
                          placeholder="Apartamento"
                          style={styles.TextInputStyleDoor}
                          name="door"
                          keyboardType="numeric"
                          onChangeText={(Door) => setDoor(Door)}
                        />
                      </View>
                    </View>

                    <View style={styles.container2}>
                      <Text style={styles.title1}>Código Postal</Text>
                      <View style={styles.inputRow}>
                        <TextInput
                          value={postalCode}
                          type="text"
                          placeholder="XXXX-XXX"
                          style={styles.TextInputStyleZipcode}
                          name="postalCode"
                          id="zipcode"
                          keyboardType="numeric"
                          onChangeText={(PostalCode) => setPostalColde(PostalCode)}
                        />
                        <Text style={styles.titleLocality}>{locality}</Text>
                      </View>
                    </View>
                    <View style={styles.container2}>
                      <Text style={styles.title1}>Cidade</Text>
                      <View style={styles.inputRow}>
                        <Picker
                          selectedValue={city}
                          style={styles.TextInputStyleCity}
                          onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                        >
                          <Picker.Item label="Lisboa" value="Lisboa" />
                          <Picker.Item label="Porto" value="Porto" />
                          <Picker.Item label="Algarve" value="Algarve" />
                          <Picker.Item label="Braga" value="Braga" />
                          <Picker.Item label="Coimbra" value="Coimbra" />
                        </Picker>
                      </View>
                    </View>
                  </>
                )}
              </Dialog.Content>
              <Dialog.Actions>
                <Button color="#1C4670" onPress={hideDialogNSendData}>
                  Guardar{' '}
                </Button>
                <Button color="#1C4670" onPress={hideDialog}>
                  Cancelar{' '}
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
        <View>
          <Portal>
            <Dialog visible={passDialogVisibility} dismissable={false}>
              <Dialog.Title>Alterar Password</Dialog.Title>
              <Dialog.Content>
                <Text>Quer alterar a sua password?</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color="#1C4670" onPress={hidePassDialogNNavigate}>
                  OK{' '}
                </Button>
                <Button color="#1C4670" onPress={hidePassDialog}>
                  Cancelar{' '}
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
        <View>
          <Portal>
            <Dialog visible={successDialogVisibility} dismissable={false}>
              <Dialog.Title>{dialogTitle1}</Dialog.Title>
              <Dialog.Content>
                <Text>{dialogContent}</Text>
              </Dialog.Content>
              <Dialog.Actions>
                <Button color="#1C4670" onPress={hideSuccessDialog}>
                  OK{' '}
                </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </Provider>
      {/* </View> */}
    </>
  );
};

export default EditProfile;
