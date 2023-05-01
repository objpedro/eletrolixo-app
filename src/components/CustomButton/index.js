import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Loading } from '../Loading';
import { RFValue } from 'react-native-responsive-fontsize';
import { styles } from './style';

export function CustomButton({ onPress, txtButton, isLoading }) {
    return (
        <>
            <TouchableOpacity
                style={styles.btnLogin}
                onPress={onPress}>
                {
                    isLoading ?
                        <Loading isVisible={isLoading} size={RFValue(20)} />
                        :
                        <Text style={styles.txtBtnLogin}>
                            {txtButton}
                        </Text>
                }
            </TouchableOpacity>
        </>
    )
}
