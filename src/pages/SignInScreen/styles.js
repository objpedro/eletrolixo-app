import { StyleSheet } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageStyle: {
        resizeMode: 'cover',
        opacity: 0.6,
        height: '100%',
        width: '100%',
    },
    imageBackground: {
        height: '50%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageLogo: {
        marginTop: 50,
        resizeMode: 'cover',
        width: 150,
        height: 150,
    },
    header: {
        width: '100%',
        alignItems: 'center',
    },
    textWelcome: {
        fontSize: RFValue(30),
        fontWeight: 'bold',
        color: colors.primario,
    },
    textLogin: {
        color: colors.preto,
    },
    inputsContainer: {
        paddingHorizontal: 30,
        alignItems: 'flex-end',
    },
    btnEsqueceuSenha: {
        marginTop: 10,
    },
    textEsqueceuSenha: {
        fontWeight: 'bold',
        color: colors.primario,
    },
    btnLogin: {
        width: '100%',
        marginTop: 100,
        marginBottom: 10,
        backgroundColor: colors.primario,
        borderRadius: 100,
        padding: '4%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtBtnLogin: {
        color: colors.secundario,
        fontSize: RFValue(15),
    },
    cadastreseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    btnCadastrese: {
        color: colors.primario,
    },
})

export { styles }