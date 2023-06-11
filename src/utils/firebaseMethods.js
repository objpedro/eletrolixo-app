import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from "@react-navigation/core";

export async function firebaseSignIn(email, senha) {
    await auth().signInWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            console.log(userCredential);
            return userCredential;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert('Não foi possível fazer o login', errorMessage, [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
        });
}

export async function firebaseSignUp(nome, email, senha) {
    await auth().createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            console.log(userCredential);
            return userCredential;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Alert.alert('Não foi possível cadastrar um usuário', errorMessage, [
                {
                    text: 'Cancelar',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ])
        });
}