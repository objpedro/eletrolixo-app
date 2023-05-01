import { StyleSheet } from "react-native";
import colors from '../../utils/colors'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconField: {
        marginRight: 20,
    },
    inputContainer: {
        width: '75%',
        borderRadius: 10,
        color: colors.primario,
        backgroundColor: colors.whiteBlue,
        paddingVertical: 10,
    },
    inputFieldContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        marginTop: 20,
        paddingHorizontal: 20,
        backgroundColor: colors.whiteBlue,
    },
    passwordField: {
        width: '75%',
        color: colors.primario,
        paddingVertical: 10,
    },
    btnEye: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnCadastrar: {
        color: colors.secundario,
        fontSize: RFValue(15),
    }
})

export { styles }