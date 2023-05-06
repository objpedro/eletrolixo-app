import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Home, User, } from 'react-native-feather';
import colors from '../../utils/colors';

export function BottomBar() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.inicio}
                onPress={() => { console.log('Tela Principal') }} >
                    <Home
                        width={40}
                        height={40}
                        color={colors.secundario}
                    />
            </TouchableOpacity>
            <TouchableOpacity style={styles.usuario}
                onPress={() => { console.log('Perfil do Usuário') }} >
                <User
                    width={40}
                    height={40}
                    color={colors.secundario}
                />
            </TouchableOpacity>
        </View>
    )
}