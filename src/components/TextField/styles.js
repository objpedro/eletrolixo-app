import { StyleSheet } from "react-native";
import colors from '../../utils/colors'
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        width: '100%',
        borderRadius: 10,
        color: colors.preto,
        paddingHorizontal: 20,
        backgroundColor: colors.whiteBlue,
        marginTop: 10,
        paddingVertical: 10,
    },
    passwordFieldContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 10,
        marginTop: 10,
        paddingLeft: 20,
        backgroundColor: colors.whiteBlue,
    },
    passwordField: {
        width: '80%',
        color: colors.preto,
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