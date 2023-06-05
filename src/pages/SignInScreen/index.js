import React, { useState } from "react";
import {
    View,
    Text,
    Alert,
    Image,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';
import { TextField } from "../../components/TextField";
import { Mail } from 'react-native-feather';
import { styles } from "./styles";
import colors from "../../utils/colors";
import { useNavigation } from "@react-navigation/core";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export function SignInScreen() {
    const app = initializeApp(firebaseConfig);
    const [email, setEmail] = useState('pedro@pedro.com');
    const [senha, setSenha] = useState('123456789');
    const navigation = useNavigation();
    const auth = getAuth(app);

    async function handleSignin() {
        await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("user: ", user);
                navigation.navigate('Home');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Não foi possível fazer o login', errorMessage, [
                    {
                        text: 'Cancelar',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ])
            });
    }

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
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
                            onPress={() => { navigation.navigate('RecoverPassword'); }}>
                            <Text style={styles.textEsqueceuSenha}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnLogin}
                            onPress={() => {
                                handleSignin();
                                // navigation.navigate('Home');
                            }}>
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
                </ImageBackground>
            </ScrollView>
        </View>
    )
}