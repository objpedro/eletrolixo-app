import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import {
    View,
} from 'react-native';
import * as Location from 'expo-location';
import { HeaderEcopointer } from '../../components/HeaderEcopointer'
import { styles } from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Search } from 'react-native-feather';
import { RFValue } from 'react-native-responsive-fontsize';
import { googlePlacesAutocompleteConfig } from '../../../googlePlacesAutocompleteConfig';
import colors from '../../utils/colors';

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
        <>
            <HeaderEcopointer />
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    region={location}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    loadingEnabled={true}
                />
                <View style={styles.autoCompleteContainer}>
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
                        query={googlePlacesAutocompleteConfig}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        styles={styles.autoComplete}
                    />
                    <View style={styles.autoCompleteIconContainer}>
                        <Search
                            style={styles.autoCompleteIcon}
                            width={20}
                            height={20}
                            color={colors.primario} />
                    </View>
                </View>
            </View>
        </>
    );
}