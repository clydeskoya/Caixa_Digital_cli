import React from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import moment from 'moment';
import { prop } from 'ramda';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './styles';
import Cartao from '../../components/Cartao';

const correspondenciaRecebida = (props) => {
  const navigation = useNavigation();
  props.route.params.receive.forEach((order) => console.log('recebidas', order?.id));
  const cards = props.route.params.receive.map((dataEntry) => {
    if (!dataEntry.isWithdrawn) {
      <TouchableOpacity
        key={prop('id', dataEntry.id)}
        onPress={() => {
          navigation.navigate('ScanQrCode', { id: dataEntry.id });
        }}
      >
        <Cartao text={`Recebimento em: ${dataEntry.id} `} />
      </TouchableOpacity>;
    }
    const dateUp = moment(dataEntry.updated_at).format('YYYY-MM-DD');
    return <Cartao key={prop('id', dataEntry)} text={`Recebimento id: ${dataEntry.id} `} />;
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ width: 300, backgroundColor: '#1DC690', borderRadius: 15, alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22 }}> Correspondência Recebida </Text>
        </View>
      </View>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.cardDiv}>{cards}</ScrollView>
      </SafeAreaView>
    </View>
  );
};
export default correspondenciaRecebida;
