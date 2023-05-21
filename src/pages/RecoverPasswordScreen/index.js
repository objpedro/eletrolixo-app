import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";
import { Key, Code } from 'react-native-feather';
import colors from '../../utils/colors';

export function RecoverPasswordScreen() {
    const [token, setToken] = useState('');
    const [senhaAntiga, setSenhaAntiga] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    return (
        <View style={styles.container} >
            <HeaderEcopointer />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.containerLogin}>
                    <Text style={styles.txtRegistro}>Recuperar Senha</Text>
                    <Text style={styles.txtCadastrar}>Cadastre uma nova senha</Text>
                    <TextField
                        icon={
                            <Key
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setToken}
                        value={token}
                        placeholder={'Token'}
                        isPassword={false}
                    />
                    <TextField
                        icon={
                            <Code
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setSenhaAntiga}
                        value={senhaAntiga}
                        placeholder={'Senha Antiga'}
                        isPassword={true}
                    />
                    <TextField
                        icon={
                            <Code
                                style={styles.iconField}
                                width={15}
                                height={15}
                                color={colors.primario} />
                        }
                        onChange={setSenha}
                        value={senha}
                        placeholder={'Senha'}
                        isPassword={true}
                    />
                    <TextField
                        icon={
                            <Code
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
            </ScrollView>
        </View>
    )
}