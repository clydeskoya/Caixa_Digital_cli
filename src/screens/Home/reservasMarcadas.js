import React, { useState, useContext } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';
import dataFromServer from '../notifications/dataFromServer';
import {
  getIsCorrespondenciasEmEspera,
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
  getIsRecebimentosPorLevantar,
  getIsReservaEnvio,
  getIsReservaRecebimentoNaoPago,
  getIsReservaRecebimentoPrePago,
} from '../../common/businesslogic';
import { API_URL } from '../../common/constants/api';
import { diffDates } from '../notifications/helper';
import ButtonNotificationAction from '../notifications/ButtonNotificationAction';

import { styles } from './styles';

const reservasMarcadas = () => {
  const cards = dataFromServer.map((dataEntry) => {
    const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
    const type = dataEntry.orderType;
    if (getIsReservaEnvio(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Reserva para envio: {date} </Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsReservaRecebimentoPrePago(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
          <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Recebimento pago: {date} </Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsReservaRecebimentoNaoPago(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content style={styles.cardContent}>
          <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Recebimento por pagar: {date} </Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsRecebimentosPorLevantar(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
          <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Recebimento por levantar: {date} </Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEmEspera(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Depositada: {dataEntry.updated_at.format('YYYY-MM-DD')}</Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Em trânsito: {date}</Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      return (
        <Card style={styles.cardStilo}>
          <Card.Content>
            <TouchableOpacity>
              <View style={styles.inputRow}>
                <Text style={{ fontWeight: 'bold' }}> Entregue: {date}</Text>
                <Ionicons name="chevron-forward-outline" size={30} />
              </View>
            </TouchableOpacity>
          </Card.Content>
        </Card>
      );
    }
    if (
      !getIsCorrespondenciasEmTransito(dataEntry) &&
      !getIsCorrespondenciasEntreguesAClientesComApp(dataEntry) &&
      !getIsReservaRecebimentoPrePago(dataEntry) &&
      !getIsCorrespondenciasEmEspera(dataEntry) &&
      !getIsRecebimentosPorLevantar(dataEntry) &&
      !getIsReservaRecebimentoNaoPago(dataEntry) &&
      !getIsReservaEnvio(dataEntry)
    ) {
      return <Text>Sem notificações</Text>;
    }
    return null;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Reservas </Text>
      </View>
      {cards}
    </View>
  );
};
export default reservasMarcadas;
