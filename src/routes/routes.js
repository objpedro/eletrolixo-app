import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Telas
import { SignInScreen } from '../pages/SignInScreen';
import { SignUpScreen } from '../pages/SignUpScreen';
import { HomeScreen } from '../pages/HomeScreen';
import { RecoverPasswordScreen } from '../pages/RecoverPasswordScreen';
import { MapScreen } from '../pages/MapScreen';

const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator initialRouteName={'Login'}>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                    title: 'Login',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    title: 'Registro',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Recuperar Senha',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                    title: 'Map',
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="RecoverPassword"
                component={RecoverPasswordScreen}
                options={{
                    title: 'Recuperar Senha',
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}