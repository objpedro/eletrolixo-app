import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";
import { User, Mail } from 'react-native-feather';
import { useNavigation } from "@react-navigation/core";
import colors from '../../utils/colors';
//Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export function SignUpScreen() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigation = useNavigation();
    //Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    function validadeInput() {
        if (nome !== '' && email !== '' && senha !== '' && confirmarSenha !== '') {
            if (senha === confirmarSenha) {
                handleSignUp();
            } else {
                Alert.alert('Senhas estão diferentes', 'Campos senha e confirmação de senha estão diferentes', [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ])
            }
        } else {
            Alert.alert('Campos vazios', 'Preencha todo os campos para continuar', [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
        }
    }

    async function handleSignUp() {
        await createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: nome,
                    photoURL: "https://matcointernacional.com/wp-content/uploads/2017/10/user_default.png"
                }).then(() => {
                    console.log("Olá: ", user.displayName);
                }).catch((error) => {
                    console.log("Erro: ", error)
                });
                navigation.navigate('SignIn')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert('Não foi possível cadastrar um usuário', errorMessage, [
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
        <View style={styles.container} >
            <HeaderEcopointer />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.containerLogin}>
                    <Text style={styles.txtRegistro}>Registro</Text>
                    <Text style={styles.txtCadastrar}>Cadastre uma nova conta</Text>
                    <TextField
                        icon={
                            <User
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setNome}
                        value={nome}
                        placeholder={'Nome completo'}
                        isPassword={false}
                    />
                    <TextField
                        icon={
                            <Mail
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setEmail}
                        value={email}
                        placeholder={'Email'}
                        isPassword={false}
                    />
                    <TextField
                        icon={
                            <Mail
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setsenha}
                        value={senha}
                        placeholder={'Senha'}
                        isPassword={true}
                    />
                    <TextField
                        icon={
                            <Mail
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setConfirmarSenha}
                        value={confirmarSenha}
                        placeholder={'Confirme sua senha'}
                        isPassword={true}
                    />
                    <TouchableOpacity style={styles.cadastrar}
                        onPress={() => {
                            console.log('Cadastro');
                            validadeInput();
                        }} >
                        <Text style={styles.txtBtnCadastrar}>Inscreva-se</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}