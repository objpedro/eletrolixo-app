import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";


export function SignUpScreen() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setsenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
        <>
            <HeaderEcopointer />
            <View style={styles.container}>
                <Text style={styles.txtRegistro}>Registro</Text>
                <Text style={styles.txtCadastrar}>Cadastre uma nova conta</Text>
                <TextField
                    onChange={setNome}
                    value={nome}
                    placeholder={'Nome completo'}
                    isPassword={false}
                />
                <TextField
                    onChange={setEmail}
                    value={email}
                    placeholder={'Email'}
                    isPassword={false}
                />

                <TextField
                    onChange={setsenha}
                    value={senha}
                    placeholder={'Senha'}
                    isPassword={false}
                />
                <TextField
                    onChange={setConfirmarSenha}
                    value={confirmarSenha}
                    placeholder={'Confirme sua senha'}
                    isPassword={false}
                />

                <TouchableOpacity style={styles.cadastrar}
                    onPress={() => { console.log('Cadastro') }} >
                    <Text style={styles.txtBtnCadastrar}>Inscreva-se</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}