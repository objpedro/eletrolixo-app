import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.primario,
        paddingVertical: 20,
        justifyContent: 'center',
        marginBottom: 5,
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
    }
})

export { styles }