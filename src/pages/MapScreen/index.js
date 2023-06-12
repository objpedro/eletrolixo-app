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
    const [iconVisible, setIconVisible] = useState(true);

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
                            apikey={googlePlacesAutocompleteConfig.key}
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
                                })
                            }}
                        />
                    }
                </MapView>
                <View style={styles.autoCompleteContainer}>
                    <GooglePlacesAutocomplete
                        placeholder='Encontre Ecopoints'
                        onPress={(data, details = null) => {
                            // console.log("Detalhes: ", details);
                            setDestination({
                                latitude: details.geometry.location.lat,
                                longitude: details.geometry.location.lng,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            });
                            setIconVisible(false)
                        }}
                        query={googlePlacesAutocompleteConfig}
                        enablePoweredByContainer={false}
                        fetchDetails={true}
                        styles={styles.autoComplete}
                    />
                    {
                        iconVisible &&
                        <View style={styles.autoCompleteIconContainer}>
                            <Search
                                style={styles.autoCompleteIcon}
                                width={20}
                                height={20}
                                color={colors.primario} />
                        </View>
                    }
                </View>
            </View>
        </>
    );
}