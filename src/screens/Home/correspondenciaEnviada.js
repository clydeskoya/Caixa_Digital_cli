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
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

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
    <>
      <View style={styles.header}>
        <View style={{ width: 250, backgroundColor: '#1DC690', borderRadius: 15, alignItems: 'center' }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 22,
            }}
          >
            Correspondência Enviada
          </Text>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.cardDiv}>{cards}</ScrollView>
      </SafeAreaView>
    </>
  );
};
export default correspondenciaEnviada;
