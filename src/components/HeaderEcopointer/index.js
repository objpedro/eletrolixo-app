import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'react-native-feather';
import colors from '../../utils/colors';

export function HeaderEcopointer() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.txtBanner}>
                <Text style={styles.eco}>Eco</Text>
                <Text style={styles.pointer}>Pointer</Text>
            </View>

            <TouchableOpacity style={styles.btnGoBack} onPress={() => { navigation.goBack() }}>
                <ArrowLeft
                    width={30}
                    height={30}
                    color={colors.secundario}
                />
            </TouchableOpacity>
        </View>
    )
}