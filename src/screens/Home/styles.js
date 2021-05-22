import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    marginBottom: '10%',
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  scrollView: {
    backgroundColor: '#278AB0',
  },
  container: {
    height: '100%',
    backgroundColor: '#fff',
  },
  cardDiv: {
    display: 'flex',
    flexDirection: 'column',
  },
  cardStilo: {
    borderRadius: 40,
    borderWidth: 4,
    borderColor: '#D6CFCF',

    margin: 20,
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
