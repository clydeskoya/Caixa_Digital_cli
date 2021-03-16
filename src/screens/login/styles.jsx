import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  oval: {
    width: '130%',
    height: '60%',
    top: '-20%',
    borderRadius: 700,
    backgroundColor: '#1C4670',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: '70%',
    // height: "85%",
    top: '20%',
  },
  inputRow: {
    flexDirection: 'row',
    marginHorizontal: 55,
  },
  input: {
    margin: '3%',
    width: '80%',
    borderBottomColor: '#1C4670',
    borderBottomWidth: 1,
  },
  textRegister: {
    textDecorationLine: 'underline',
  },
  textLogin: { color: 'white' },
  bottomActions: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 40,
    marginVertical: '10%',
    backgroundColor: '#1C4670',
    borderRadius: 45,
  },
});
