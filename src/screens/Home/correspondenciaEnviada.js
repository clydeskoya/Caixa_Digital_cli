import React, { useState, useContext } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import dataFromServer from '../notifications/dataFromServer';
import {
  getIsCorrespondenciasEmEspera,
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
} from '../../common/businesslogic';

import { styles } from './styles';

const correspondenciaEnviada = () => {
  const cards = dataFromServer.map((dataEntry) => {
    const date = moment(dataEntry.updated_at).format('YYYY-MM-DD');
    const names = ['SAMS Sintra', 'Finanças', 'Miguel'];
    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <View style={styles.inputRow}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e ${names[].toString}  ${date}`}</Text>
              <Ionicons name="chevron-forward-outline" size={30} />
            </View>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <View style={styles.inputRow}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e destinatário  ${date}`}</Text>
              <Ionicons name="chevron-forward-outline" size={30} />
            </View>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEmEspera(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <View style={styles.inputRow}>
              <Text style={{ fontWeight: 'bold' }}> {`Descrição e destinatário  ${date}`}</Text>
              <Ionicons name="chevron-forward-outline" size={30} />
            </View>
          </Card.Content>
        </Card>
      );
    }
    if (
      !getIsCorrespondenciasEmTransito &&
      !getIsCorrespondenciasEntreguesAClientesComApp &&
      !getIsCorrespondenciasEmEspera
    ) {
      return <Text>Sem notificações</Text>;
    }
    console.log(dataEntry);
    return null;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Enviada </Text>
      </View>
      {cards}
    </View>
  );
};
export default correspondenciaEnviada;
