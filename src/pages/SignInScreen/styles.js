import { StyleSheet, Dimensions } from "react-native";
import colors from "../../utils/colors";
import { RFValue } from 'react-native-responsive-fontsize'

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: colors.secundario,
    },
    imageStyle: {
        resizeMode: 'cover',
        opacity: 0.6,
        height: RFValue(400),
        width: '100%',
    },
    imageBackground: {
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    imageLogo: {
        marginTop: 50,
        resizeMode: 'cover',
        width: RFValue(150),
        height: RFValue(150),
    },
    header: {
        marginTop: 50,
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
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        width: '100%',
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
        justifyContent: 'center',
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
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 20,
    },
    btnCadastrese: {
        color: colors.primario,
    },
    iconField: {
        marginRight: 20,
    },
})

export { styles }