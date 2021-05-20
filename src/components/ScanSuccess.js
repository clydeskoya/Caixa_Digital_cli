import React from 'react';
import { View, Text } from 'react-native';

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
    width: '80%',
    height: '8%',
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#D6CFCF',
    flexDirection: 'column',
    justifyContent: 'center',

    marginBottom: '10%',
  },

  text: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },

  inputRow: {
    flexDirection: 'row',
    marginHorizontal: '6%',
    justifyContent: 'space-between',
    width: '90%',
  },
  badgeStyle: {
    backgroundColor: '#1DC690',
    alignSelf: 'flex-start',
    marginTop: '-1.5%',
    marginLeft: '-1.5%',
  },
});
const ScanSuccess = () => (
  <View style={styles.container}>
    <Text>Tem não sei quantas reservas</Text>
  </View>
);

export default ScanSuccess;
