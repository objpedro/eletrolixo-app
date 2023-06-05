import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles } from './styles';

export function CustomButton({ onPress, txtButton }) {
    return (
        <TouchableOpacity
            style={styles.btnLogin}
            onPress={onPress}>
            <Text>{txtButton}</Text>
        </TouchableOpacity>
    )
}
