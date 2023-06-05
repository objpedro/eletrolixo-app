import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, } from 'react-native';
import { styles } from './styles';
import { HeaderEcopointer } from '../../components/HeaderEcopointer';
import { TextField } from "../../components/TextField";
import { Key, Code, Mail } from 'react-native-feather';
import colors from '../../utils/colors';

export function SettingsScreen() {

    return (<>
        <HeaderEcopointer />
        <View style={styles.container} >

            <Text>Settings</Text>

        </View>
    </>
    )
}