import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph, Dialog, Portal, Provider, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '77%',
    height: '7%',
    backgroundColor: '#1DC690',
    borderRadius: 15,
    marginBottom: '10%',
    marginTop: '15%',
  },
  container: {
    flex: 3,
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollView: {
    backgroundColor: '#278AB0',
    width: '340',
    height: '125',
  },

  cardStilo: {
    width: 280,
    height: '100%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    //   marginTop: '5%',
  },

  text: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },

  inputRow: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    // justifyContent:'flex-start',
    width: '100%',
    justifyContent: 'space-between',
  },
});

const correspondenciaRecebida = () => {
  // const [visible, setVisible] = useState(false);
  // const showDialog = () => setVisible(true);
  // const hideDialog = () => setVisible(false);
  // const [dialogTextTitle, setDialogTextTitle] = useState('');
  // const [dialogTextContent, setDialogTextContent] = useState('');

  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Recebida </Text>
    </View>
    <TouchableOpacity activeOpacity={0.1} /* onPress={() => props.navigate.Home} */>
      <Card style={styles.cardStilo}>
        <Card.Content>
          <View style={styles.inputRow}>
            <Title style={styles.text}> Finanças - Autoridade Tributária </Title>
            <Ionicons name="chevron-forward-outline" size={30} />
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
    {/* <Provider>
      <View>
        <Portal>
          <Dialog visible={visible}>
            <Dialog.Title>Mensagem</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Detalhes</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button color="#1C4670" onPress={hideDialog}>
                OK{' '}
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider> */}
  </View>;
};
export default correspondenciaRecebida;
