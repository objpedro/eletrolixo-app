import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Telas
import { SignInScreen } from '../pages/SignInScreen';
import { SignUpScreen } from '../pages/SignUpScreen';

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
        </Stack.Navigator>
    );
}