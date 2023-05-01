import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    txtRegistro: {
        color: colors.primario,
        fontSize: RFValue(40),
        fontWeight: 'bold',
    },
    txtCadastrar: {
        marginBottom: 20,
    },
    cadastrar: {
        width: '100%',
        marginTop: 100,
        marginBottom: 10,
        backgroundColor: colors.primario,
        borderRadius: 100,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnCadastrar: {
        color: colors.secundario,
        fontSize: RFValue(15),
    },
    iconField: {
        marginRight: 20,
    }
})

export { styles }