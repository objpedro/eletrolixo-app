import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { Eye, EyeOff, Lock, Mail } from 'react-native-feather';
import colors from '../../utils/colors';

export function TextField({ icon, onChange, value, placeholder, isPassword }) {

    const [passwordField, setPasswordField] = useState(true)

    let getEyePasssword = () => {
        if (passwordField) {
            return (
                <EyeOff
                    width={20}
                    height={20}
                    color={colors.primario}
                />
            );
        } else {
            return (
                <Eye
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
                    <View style={styles.inputFieldContainer}>
                        <Lock
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    <View style={styles.inputFieldContainer}>
                        {icon}
                        <TextInput
                            style={styles.inputContainer}
                            cursorColor={colors.primario}
                            placeholderTextColor={colors.primario}
                            onChangeText={onChange}
                            value={value}
                            placeholder={placeholder}
                            secureTextEntry={false}
                        />
                    </View>
            }
        </View>
    )
}