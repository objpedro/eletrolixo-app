import React from "react";
import {
    View
} from 'react-native';
import { BottomNavigator } from '../../components/BottomNavigator';

import { MapScreen } from '../MapScreen';
import { SettingsScreen } from "../SettingsScreen";

export function HomeScreen() {
    return (
        <View
            style={{ flex: 1 }}>
            <BottomNavigator
                itens={[
                    { titulo: 'MapScreen', page: MapScreen, icone: require("../../../assets/tabIcons/home.png"), id: "tabFilm" },
                    { titulo: 'SettingsScreen', page: SettingsScreen, icone: require("../../../assets/tabIcons/profile.png"), id: "tabFilm" },
                ]} />
        </View>
    )
}