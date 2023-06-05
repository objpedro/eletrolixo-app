import React from "react";
import {
    View
} from 'react-native';
import { BottomNavigator } from '../../components/BottomNavigator';
import { MapScreen } from '../MapScreen';
import { ProfileScreen } from "../ProfileScreen";

export function HomeScreen() {
    return (
        <View
            style={{ flex: 1 }}>
            <BottomNavigator
                itens={[
                    { titulo: 'MapScreen', page: MapScreen, icone: require("../../../assets/tabIcons/home.png"), id: "tabFilm" },
                    { titulo: 'ProfileScreen', page: ProfileScreen, icone: require("../../../assets/tabIcons/profile.png"), id: "tabFilm" },
                ]} />
        </View>
    )
}