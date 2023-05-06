import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.primario,
        paddingVertical: 10,
        justifyContent: 'center'
    },
    eco: {
        color: colors.secundario,
        fontSize: RFValue(20),
        fontWeight: 'bold',
    },
    pointer: {
        color: colors.secundario,
        fontSize: RFValue(20),
        fontWeight: '300',
    },
    inicio: {
        width: 1,
        height: 1,
        marginTop: 1,
        marginRight: '25%',
        marginBottom: 0,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    usuario: {
        width: 1,
        height: 1,
        marginTop: 1,
        marginLeft: '25%',
        marginBottom: 1,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export { styles }