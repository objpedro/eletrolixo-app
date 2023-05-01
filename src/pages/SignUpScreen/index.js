import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";
import { User, Mail } from 'react-native-feather';
import colors from '../../utils/colors';

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
                    onPress={() => { console.log('Cadastro') }} >
                    <Text style={styles.txtBtnCadastrar}>Inscreva-se</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}