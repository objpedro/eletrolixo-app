import React from "react";
import { Image, ImageURISource, View, Text } from 'react-native';
import { styles } from './styles';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../utils/colors";

const Tab = createBottomTabNavigator();

function renderIcons(item, focused) {
    switch (item.titulo) {
        case 'MapScreen':
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.secundario : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(13),
                    color: focused ? colors.secundario : colors.preto,
                }}>Home</Text>
            </>
        case 'ProfileScreen':
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.secundario : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(13),
                    color: focused ? colors.secundario : colors.preto,
                }}>Meu Perfil</Text>
            </>
        default:
            return <>
                <Image
                    source={item.icone}
                    resizeMode={'contain'}
                    style={{
                        alignItems: "center",
                        justifyContent: "center",
                        width: 20,
                        height: 20,
                        tintColor: focused ? colors.secundario : colors.preto,
                    }}
                />
                <Text style={{
                    fontSize: RFValue(13),
                    color: focused ? colors.secundario : colors.preto,
                }}>Default</Text>
            </>
    }
}

function montaTabs(param) {
    return param.itens.map(item => {
        return (
            <Tab.Screen
                name={item.titulo}
                component={item.page}
                key={item.titulo}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={styles.containerTabNavigation}
                            accessibilityLabel={item.id}
                        >
                            {renderIcons(item, focused)}
                        </View>
                    ),
                    headerShown: false,
                }}
            />
        )
    })
}

function BottomNavigator(param) {
    return (
        <>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: colors.primario,
                        elevation: 1,
                    },
                    tabBarHideOnKeyboard: true
                }}>
                {montaTabs(param)}
            </Tab.Navigator>
        </>
    )
}

export { BottomNavigator };