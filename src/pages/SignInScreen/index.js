import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { TextField } from "../../components/TextField";
import { Mail } from 'react-native-feather';
import { styles } from "./styles";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/core";

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <ImageBackground
                    source={require('../../../assets/banner_inicio.png')}
                    imageStyle={styles.imageStyle}
                    style={styles.imageBackground}>
                    <Image style={styles.imageLogo}
                        source={require('../../../assets/ecopoint_logo.png')} />
                    <View style={styles.header}>
                        <Text style={styles.textWelcome}>Seja bem vindo</Text>
                        <Text style={styles.textLogin}>Faça login na sua conta</Text>
                    </View>
                </ImageBackground>

                <View style={styles.inputsContainer}>
                    <TextField
                        icon={<Mail
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario} />}
                        onChange={setEmail}
                        value={email}
                        placeholder={'Email'}
                        isPassword={false}
                    />

                    <TextField
                        onChange={setSenha}
                        value={senha}
                        placeholder={'Senha'}
                        isPassword={true}
                    />

                    <TouchableOpacity style={styles.btnEsqueceuSenha}
                        onPress={() => { console.log('Esqueci a senha') }}>
                        <Text style={styles.textEsqueceuSenha}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnLogin}
                        onPress={() => { console.log('Login') }} >
                        <Text style={styles.txtBtnLogin}>Login</Text>
                    </TouchableOpacity>

                    <View style={styles.cadastreseContainer}>
                        <Text>É seu primeiro acesso? </Text>
                        <TouchableOpacity style={styles.btnCadastrese}
                            onPress={() => { navigation.navigate('SignUp'); }}>
                            <Text style={styles.textEsqueceuSenha}>Cadastre-se aqui.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}