import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
    Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import colors from '../../utils/colors';
import { ArrowLeft } from 'react-native-feather';
import { styles } from './styles';

const { width, height } = Dimensions.get('screen');

export function HomeScreen() {

    const [location, setLocation] = useState(null);
    const navigation = useNavigation();

    useEffect(() => {
        (async () => {
            let location = await Location.getCurrentPositionAsync({});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
        })();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.autoCompleteContainer}>
                {/* <TouchableOpacity style={styles.btnGoBack} onPress={() => { navigation.goBack() }}>
                    <ArrowLeft
                        width={30}
                        height={30}
                        color={colors.secundario} />
                </TouchableOpacity> */}
                <GooglePlacesAutocomplete
                    placeholder='Encontre Ecopoints'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyD_dcMTz21vH7x0ylilwPxPzXZmVBVjsIA',
                        language: 'pt-br',
                    }}
                    fetchDetails={true}
                    styles={{
                        textInput: styles.autoComplete,
                        listView: { height: 100 }
                    }} />
            </View>

            <View style={styles.mapViewContainer}>
                <MapView
                    onMapReady={() => {
                        Platform.OS === 'android' ?
                            PermissionsAndroid.request(
                                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
                                .then(() => {
                                    console.log('Usuário Aceitou');
                                })
                            : ''
                    }}
                    style={{ width: width, height: height }}
                    region={location}
                    zommEnable={true}
                    minZoomLevel={17}
                    showsUserLocation={true}
                    loadingEnabled={true}
                />
            </View>
        </View>
    )
}