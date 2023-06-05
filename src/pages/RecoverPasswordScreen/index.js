import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";
import { Mail } from 'react-native-feather';
import { useNavigation } from "@react-navigation/core";
import colors from '../../utils/colors';

//Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export function RecoverPasswordScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    //Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const user = auth.currentUser;

    async function handleResetPassword() {
        await
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    Alert.alert('Um email de verificação foi encaminhado para: ', email, [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ])
                    navigation.navigate('SignIn');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    Alert.alert('Não foi enviar o email de recuperação', errorMessage, [
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
                    <Text style={styles.txtRegistro}>Recuperar Senha</Text>
                    <Text style={styles.txtCadastrar}>Cadastre uma nova senha</Text>

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
                        placeholder={'Email de recuperação'}
                    />
                    <TouchableOpacity style={styles.cadastrar}
                        onPress={() => {
                            handleResetPassword();
                            navigation.navigate('SignIn');
                        }} >
                        <Text style={styles.txtBtnCadastrar}>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}