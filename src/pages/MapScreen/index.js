import React, { useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';
import {
    View,
} from 'react-native';
import * as Location from 'expo-location';
import { HeaderEcopointer } from '../../components/HeaderEcopointer'
import { styles } from './styles';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Search } from 'react-native-feather';
import { googlePlacesAutocompleteConfig } from '../../../googlePlacesAutocompleteConfig';
import MapViewDirections from 'react-native-maps-directions';
import colors from '../../utils/colors';

export function MapScreen() {
    const [location, setLocation] = useState(null);
    const mapEl = useRef(null);
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    // const origin = {
    //     latitude: 37.3318456,
    //     longitude: -122.0296002
    // };
    // const destination = {
    //     latitude: 37.771707,
    //     longitude: -122.4053769
    // };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setOrigin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            })
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
                    ref={mapEl}>
                    {
                        destination &&
                        <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={'AIzaSyD_dcMTz21vH7x0ylilwPxPzXZmVBVjsIA'}
                            strokeWidth={3}
                            onReady={result => {
                                mapEl.current.fitToCoordinates(
                                    result.coordinates, {
                                    edgePadding: {
                                        top: 50,
                                        bottom: 50,
                                        left: 50,
                                        right: 50,
                                    }
                                }
                                )
                            }}
                        />
                    }
                </MapView>
                <View style={styles.autoCompleteContainer}>
                    <GooglePlacesAutocomplete
                        placeholder='Encontre Ecopoints'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            // console.log(data, details);
                            console.log('LAT selected: ', details.geometry.location.lat);
                            console.log('LOG selected: ', details.geometry.location.lng);
                            setDestination({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            });
                            console.log(destination)
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