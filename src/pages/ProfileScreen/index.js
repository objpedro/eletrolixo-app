import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Alert,
    Button,
    Modal,
    Pressable
} from 'react-native';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";
import { Snackbar } from "@react-native-material/core";
import { Mail, Lock, LogOut } from 'react-native-feather';
import { useNavigation } from "@react-navigation/core";
import colors from '../../utils/colors';
import { styles } from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

//Firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../firebaseConfig";
import {
    getAuth,
    sendEmailVerification,
    updateEmail,
} from "firebase/auth";

export function ProfileScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    //Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const user = auth.currentUser;

    //Resetar senha
    async function handleResetPassword() {
        navigation.navigate('RecoverPassword');
    }

    //Alterar email
    async function handleUpdateEmail() {
        updateEmail(auth.currentUser, "user@example.com").then(() => {
            // Email updated!
            console.log("Email alterado!")
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    //Verificar Email
    async function handleSendEmail() {
        await
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    Alert.alert('Um email de verificação foi encaminhado para: ', user.email, [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ])
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
    }

    //Deslogar
    async function handleSignOut() {
        await auth.signOut();
        navigation.navigate('SignIn');
    }

    return (
        <>
            <HeaderEcopointer />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container} >
                    <Text>Nome: {user.displayName}</Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text>Email: {user.email}</Text>
                        {user.emailVerified == false &&
                            < Text style={{
                                color: colors.error
                            }}> Email não verificado</Text>
                        }
                    </View>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { handleSendEmail(); }}>
                        <Text style={styles.txtButton}>Verificar Email</Text>
                        <Mail
                            width={20}
                            height={20}
                            color={colors.secundario} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { handleResetPassword(); }}>
                        <Text style={styles.txtButton}>Redefinir senha</Text>
                        <Lock
                            width={20}
                            height={20}
                            color={colors.secundario} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { setModalVisible(true) }}>
                        <Text style={styles.txtButton}>Alterar email</Text>
                        <Mail
                            width={20}
                            height={20}
                            color={colors.secundario} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { handleSignOut(); }}>
                        <Text style={styles.txtButton}>Deslogar</Text>
                        <LogOut
                            width={20}
                            height={20}
                            color={colors.secundario} />
                    </TouchableOpacity>

                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert('Modal has been closed.');
                                setModalVisible(!modalVisible);
                            }}>
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Digite um email válido</Text>
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
                                    <Pressable
                                        style={[styles.buttonModal, styles.buttonClose]}
                                        onPress={() => {
                                            handleUpdateEmail();
                                            setModalVisible(!modalVisible)
                                        }}>
                                        <Text style={styles.textStyle}>Concluir</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </Modal>
                    </View>
                </View>
            </ScrollView >

        </>
    )
}