import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function HeaderEcopointer() {
    return (
        <View style={styles.container}>
            <Text style={styles.eco}>Eco</Text>
            <Text style={styles.pointer}>Pointer</Text>
        </View>
    )
}