import React, { useEffect, useRef, useState } from 'react';
import MapView from 'react-native-maps';
import {
    View,
    Platform,
    PermissionsAndroid
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
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

    function getMyLocation() {
        Geolocation.getCurrentPosition(info => {
            console.log("LAT", info.coords.latitude);
            console.log("LNG", info.coords.longitude);
            setLocation({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
            setOrigin({
                latitude: info.coords.latitude,
                longitude: info.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            });
        },
            () => { console.log("Deu algum erro") }, {
            enableHighAccuracy: true,
            timeout: 2000,
        })
    }

    useEffect(() => {
        getMyLocation();
    }, [])

    return (
        <>
            <HeaderEcopointer />
            <View style={styles.container}>
                {/* <MapView
                    onMapReady={() => {
                        Platform.OS === 'android' &&
                            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                                .then(() => {
                                    console.log("Usuário Aceitou!")
                                })
                    }}
                    style={styles.map}
                    region={location}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                /> */}
                <MapView
                    // onMapReady={() => {
                    //     Platform.OS === 'android' &&
                    //         PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                    //             .then(() => {
                    //                 console.log("Usuário Aceitou!")
                    //             })
                    // }}
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
                            setDestination({
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