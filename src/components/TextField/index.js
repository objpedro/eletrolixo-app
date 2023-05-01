import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { Eye, EyeOff } from 'react-native-feather';
import colors from '../../utils/colors';

export function TextField({ onChange, value, placeholder, isPassword }) {

    const [passwordField, setPasswordField] = useState(true)

    let getEyePasssword = () => {
        if (passwordField) {
            return (
                <Eye
                    width={20}
                    height={20}
                    color={colors.primario}
                />
            );
        } else {
            return (
                <EyeOff
                    width={20}
                    height={20}
                    color={colors.primario}
                />
            );
        }
    };

    return (
        <View style={styles.container}>
            {
                isPassword ?
                    <View style={styles.passwordFieldContainer}>
                        <TextInput
                            style={styles.passwordField}
                            placeholderTextColor={colors.primario}
                            cursorColor={colors.primario}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}
                            secureTextEntry={passwordField}
                        />
                        <TouchableOpacity
                            style={styles.btnEye}
                            onPress={() => { setPasswordField(!passwordField) }}>
                            {getEyePasssword()}
                        </TouchableOpacity>
                    </View>
                    :
                    <TextInput
                        style={styles.inputContainer}
                        cursorColor={colors.primario}
                        placeholderTextColor={colors.primario}
                        onChangeText={onChange}
                        value={value}
                        placeholder={placeholder}
                        secureTextEntry={false}
                    />
            }
        </View>
    )
}