import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";


export function RecoverPasswordScreen() {

    const [token, setToken] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
        <>
            <HeaderEcopointer />
            <View style={styles.container}>
                <Text style={styles.txtRecuperar}>Recuperar Senha</Text>
                <Text style={styles.txtCadastrar}>Cadastre uma nova senha</Text>
                <TextField
                    onChange={setToken}
                    value={token}
                    placeholder={'Token'}
                    isPassword={false}
                    isToken={true}
                />
                <TextField
                    onChange={setEmail}
                    value={email}
                    placeholder={'Email'}
                    isPassword={false}
                    isToken={false}
                />

                <TextField
                    onChange={setsenha}
                    value={senha}
                    placeholder={'Senha'}
                    isPassword={true}
                    isToken={false}
                />
                <TextField
                    onChange={setConfirmarSenha}
                    value={confirmarSenha}
                    placeholder={'Confirme sua senha'}
                    isPassword={true}
                    isToken={false}
                />

                <TouchableOpacity style={styles.recuperar}
                    onPress={() => { console.log('Recuperar Senha') }} >
                    <Text style={styles.txtBtnRecuperar}>Recuperar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}