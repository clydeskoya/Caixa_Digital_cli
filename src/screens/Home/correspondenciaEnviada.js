/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import { View, Text } from 'react-native';

import moment from 'moment';

import {
  getIsCorrespondenciasEmEspera,
  getIsCorrespondenciasEmTransito,
  getIsCorrespondenciasEntreguesAClientesComApp,
} from '../../common/businesslogic';

import { styles } from './styles';
import Cartao from '../../components/Cartao';

const correspondenciaEnviada = (props) => {
  const cards = props.route.params.send.map((dataEntry) => {
    const date = moment(dataEntry.updated_at).format('YYYY-MM-DD');

    if (getIsCorrespondenciasEmTransito(dataEntry)) {
      return <Cartao text={`Em trânsito: ${date}`} />;
    }

    if (getIsCorrespondenciasEntreguesAClientesComApp(dataEntry)) {
      return <Cartao text={`Entregue: ${date}`} />;
    }
    if (getIsCorrespondenciasEmEspera(dataEntry)) {
      return <Cartao text={`Depositada por levantar:  ${date}`} />;
    }
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
