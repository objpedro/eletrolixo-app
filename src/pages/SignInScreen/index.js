import React, { useState } from "react";
import {
    View,
    Text,
    Image,
    ImageBackground,
} from 'react-native';
import { TextField } from "../../components/TextField";
import { styles } from "./styles";

export function SignInScreen() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [onChangeSenha, setOnChangeSenha] = useState('');

    return (
        <>
            <ImageBackground
                source={require('../../../assets/banner_inicio.png')}
                style={{
                    flex: 1,
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                }}>
                <Image style={{
                    resizeMode: 'cover',
                    width: 150,
                    height: 150,
                }}
                    source={require('../../../assets/ecopoint_logo.png')} />
            </ImageBackground>
            <View style={styles.container}>
                <TextField
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
            </View>
        </>
    )
}