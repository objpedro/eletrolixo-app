import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    //Auto Complete
    autoCompleteContainer: {
        position: 'absolute',
        marginTop: RFValue(10),
        marginLeft: RFValue(10),
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    autoComplete: {
        textInput: {
            borderWidth: 2,
            borderColor: colors.primario,
            borderRadius: 7,
        },
        listView: { height: 100 }
    },
    //Auto Complete Icon
    autoCompleteIconContainer: {
        position: 'absolute',
    },
    autoCompleteIcon: {
        marginRight: RFValue(20),
        marginTop: RFValue(12),
    }
})

export { styles }