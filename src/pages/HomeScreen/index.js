import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import {
    Text,
    View,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import * as Location from 'expo-location';
import { HeaderEcopointer } from '../../components/HeaderEcopointer'
import { styles } from './styles';

export function HomeScreen() {

    const [location, setLocation] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            console.log("LAT: ", location.coords.latitude);
            console.log("LOG: ", location.coords.longitude);
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
        })();
    }, []);

    return (
        <View style={styles.container}>
            <HeaderEcopointer />
            <MapView
                onMapReady={() => {
                    Platform.OS === 'android' ?
                        PermissionsAndroid.request(
                            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                            .then(() => {
                                console.log("USUÁRIO ACEITOU!!!!!!!!1");
                            })
                        : ''
                }}
                style={styles.map}
                region={location}
                zoomEnabled={true}
                showsUserLocation={true}
                loadingEnabled={true}
            />
        </View>
    );
}