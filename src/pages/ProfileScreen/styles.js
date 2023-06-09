import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  //Botoes
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    borderRadius: 10,
    padding: 20,
    backgroundColor: colors.primario,
  },
  txtButton: {
    color: colors.secundario,
    fontSize: RFValue(15),
  },

  //Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonCloseContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'flex-end',
    marginTop: 10
  },
  buttonModal: {
    borderRadius: 10,
    marginTop: 15,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: colors.primario,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    fontSize: RFValue(15),
    textAlign: 'center',
  },
  iconField: {
    marginRight: 15,
  },
  iconModalClose: {
    marginVertical: 10,
  },
})

export { styles }