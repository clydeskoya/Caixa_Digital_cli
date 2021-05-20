import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import moment from 'moment';
import {
  getIsCorrespondenciasEmEspera,
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
  getIsRecebimentosPorLevantar,
  getIsReservaEnvio,
  getIsReservaRecebimentoNaoPago,
  getIsReservaRecebimentoPrePago,
} from '../../common/businesslogic';

import { styles } from './styles';
import Cartao from '../../components/Cartao';
import dataFromServer from '../notifications/dataFromServer';
import { prop } from 'ramda';

function reservasMarcadas(props) {
  console.log('reservas', JSON.stringify(props.route.params.reserva));
  const cards = props.route.params.reserva.map((dataEntry) => {
    console.log('xxx', JSON.stringify(dataEntry));
    const date = moment(dataEntry.dateRequested).format('YYYY-MM-DD');
    const dateUp = moment(dataEntry.updated_at).format('YYYY-MM-DD');
    /* if (getIsReservaEnvio(dataEntry)) {
      return <Cartao text={`Reserva de Envio: ${date}`} />;
    }
    if (getIsReservaRecebimentoPrePago(dataEntry)) {
      return <Cartao text={`Recebimento Pago: ${dateUp}`} />;
    }
    if (getIsReservaRecebimentoNaoPago(dataEntry)) {
      return <Cartao text={`Recebimento por Pagar: ${dateUp}`} />;
    }
    if (getIsRecebimentosPorLevantar(dataEntry)) {
      return <Cartao text={`Recebimento por Levantar: ${dateUp}`} />;
    }
    if (getIsCorrespondenciasEmEspera(dataEntry)) {
      return <Cartao text={`Depositada: ${dateUp}`} />;
    }
    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return <Cartao text={`Em Trânsito: ${date}`} />;
    }
    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) { */
    return <Cartao key={prop('id', dataEntry)} text={`Entregue: ${date}`} />;
    /*   } */
    /* if (
      !getIsCorrespondenciasEmTransito &&
      !getIsCorrespondenciasEntreguesAClientesComApp &&
      !getIsReservaRecebimentoPrePago &&
      !getIsCorrespondenciasEmEspera &&
      !getIsRecebimentosPorLevantar &&
      !getIsReservaRecebimentoNaoPago &&
      !getIsReservaEnvio
    ) {
      return <Text>Ainda sem reservas efetuadas</Text>;
    } */
    /*  return null; */
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Reservas </Text>
      </View>
      <View style={{ display: 'flex', flexDirection: 'column' }}>{cards}</View>
    </View>
  );
}
export default reservasMarcadas;
