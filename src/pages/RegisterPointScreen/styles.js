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
    txtCadastrar: {
        color: colors.primario,
        fontSize: RFValue(40),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    enviar: {
        width: '100%',
        marginTop: 64,
        marginBottom: 0,
        backgroundColor: colors.primario,
        borderRadius: 100,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnEnviar: {
        color: colors.secundario,
        fontSize: RFValue(15),
    },
})

export { styles }