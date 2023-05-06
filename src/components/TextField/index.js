import React, { useState } from "react";
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { styles } from "./styles";
import { Eye, EyeOff, Lock, Mail, Shield, User, Flag, MapPin, Sun, Moon } from 'react-native-feather';
import colors from '../../utils/colors';

export function TextField({ onChange, value, placeholder, isPassword, isToken, isUser, isPoint, isNome, isEndereco, isAbre }) {

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
                
                isPassword && !isToken ?
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
                    : !isPassword && isToken ?
                    <View style={styles.inputFieldContainer}>
                        <Shield
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    : !isPassword && isUser ?
                    <View style={styles.inputFieldContainer}>
                        <User
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    : isPoint && isNome && !isAbre && !isEndereco ?
                    <View style={styles.inputFieldContainer}>
                        <Flag
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    : isPoint && !isNome && !isAbre && isEndereco ?
                    <View style={styles.inputFieldContainer}>
                        <MapPin
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    : isPoint && !isNome && isAbre && !isEndereco ?
                    <View style={styles.inputFieldContainer}>
                        <Sun
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    : isPoint && !isNome && !isAbre && !isEndereco ?
                    <View style={styles.inputFieldContainer}>
                        <Moon
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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
                    :
                    <View style={styles.inputFieldContainer}>
                        <Mail
                            style={styles.iconField}
                            width={15}
                            height={15}
                            color={colors.primario}
                        />
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