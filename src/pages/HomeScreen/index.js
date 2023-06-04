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
                <View style={{
                    position: 'absolute',
                    marginTop: RFValue(10),
                    marginLeft: RFValue(10),
                    width: '80%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}>
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
                            textInput: {
                                borderWidth: 3,
                                borderColor: colors.primario,
                                borderRadius: 10,
                            },
                            listView: { height: 100 }
                        }}
                    />
                    <View style={{
                        position: 'absolute',
                    }}>
                        <Search
                            style={{
                                marginRight: RFValue(20),
                                marginTop: RFValue(12),
                            }}
                            width={20}
                            height={20}
                            color={colors.primario} />
                    </View>
                </View>
            </View>
        </>
    );
}