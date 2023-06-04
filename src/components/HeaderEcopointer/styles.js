import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: colors.primario,
        paddingVertical: 20,
        alignItems: 'center',
    },
    txtBannerContainer: {
        width: '100%',
        flexDirection: 'row',
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
    btnGoBack: {
        position: 'absolute',
        marginLeft: 20,
        paddingTop: 20,
    }
})

export { styles }