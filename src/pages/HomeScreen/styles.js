import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secundario,
    },
    autoCompleteContainer: {
        height: '10%',
        padding: 20,
        backgroundColor: colors.primario,
    },
    autoComplete: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: colors.primario,
        borderRadius: 90,
        paddingHorizontal: 20,
        width: '100%'
    },
    mapView: {
        height: '90%',
    },
    btnGoBack: {
        position: 'absolute',
        marginLeft: 20,
    }
})

export { styles }