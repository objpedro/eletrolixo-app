import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { ArrowLeft } from 'react-native-feather';
import colors from '../../utils/colors';
//Firebase


export function HeaderEcopointer() {
    const navigation = useNavigation();
    //Firebase

    return (
        <View style={styles.container}>
            {/* <View style={styles.txtBannerContainer}>
                {
                    user !== null ?
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={styles.eco}>Olá, </Text>
                            <Text style={styles.eco}>{user.displayName.split(' ')[0]}</Text>
                        </View>
                        :
                        <>
                            <Text style={styles.eco}>Eco</Text>
                            <Text style={styles.pointer}>Pointer</Text>
                        </>
                }
            </View> */}

            <View style={styles.btnGoBack}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                    <ArrowLeft
                        width={30}
                        height={30}
                        color={colors.secundario} />
                </TouchableOpacity>
            </View>
        </View>
    )
}