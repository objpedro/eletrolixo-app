import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    btnLogin: {
        width: '100%',
        marginTop: 20,
        backgroundColor: colors.primario,
        borderRadius: 10,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnLogin: {
        color: colors.whiteBlue,
        fontSize: RFValue(15),
    },
    forgotPasswordContainer: {
        marginTop: 10,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
    },
})

export { styles }