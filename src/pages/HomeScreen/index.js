import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import {
    View,
    Text,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import Device from 'expo-device';
import * as Location from 'expo-location';
import { HeaderEcopointer } from '../../components/HeaderEcopointer'
import { styles } from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export function HomeScreen() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            <HeaderEcopointer />
            <Text>{text}</Text>
            <GooglePlacesAutocomplete
                placeholder='Encontre Ecopoints'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    // console.log(data, details);
                    console.log('LAT selected: ', details.geometry.location.lat);
                    console.log('LOG selected: ', details.geometry.location.lng);
                    setLocation({
                        latitude: details.geometry.location.lat,
                        longitude: details.geometry.location.lng,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    });
                }}
                query={{
                    key: 'AIzaSyD_dcMTz21vH7x0ylilwPxPzXZmVBVjsIA',
                    language: 'pt-br',
                }}
                enablePoweredByContainer={false}
                fetchDetails={true}
                styles={{
                    listView: { height: 100 }
                }}
            />
            <MapView
                style={styles.map}
                region={location}
                zoomEnabled={true}
                showsUserLocation={true}
                loadingEnabled={true}
            />
        </View>
    );
}