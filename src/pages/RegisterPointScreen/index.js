import React, { useState } from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { BottomBar } from '../../components/BottomBar'
import { TextField } from "../../components/TextField";


export function RegisterPointScreen() {

    const [nome, setNome] = useState('');
    const [endereco, setEndereco] = useState('');
    const [abre, setAbre] = useState('');
    const [fecha, setFecha] = useState('');

    return (
        <>
            <HeaderEcopointer />
            <View style={styles.container}>
                <Text style={styles.txtCadastrar}>Cadastre um {'\n'}novo ponto</Text>
                <TextField
                    onChange={setNome}
                    value={nome}
                    placeholder={'Nome'}
                    isPoint={true}
                    isNome={true}
                />
                <TextField
                    onChange={setEndereco}
                    value={endereco}
                    placeholder={'Endereço'}
                    isPoint={true}
                    isNome={false}
                    isEndereco={true}
                />

                <TextField
                    onChange={setAbre}
                    value={abre}
                    placeholder={'Abre'}
                    isPoint={true}
                    isAbre={true}
                />
                <TextField
                    onChange={setFecha}
                    value={fecha}
                    placeholder={'Fecha'}
                    isPoint={true}
                    isAbre={false}
                />

                <TouchableOpacity style={styles.enviar}
                    onPress={() => { console.log('Cadastrar Ponto') }} >
                    <Text style={styles.txtBtnEnviar}>Enviar</Text>
                </TouchableOpacity>
            </View>
            <BottomBar />
        </>
    )
}