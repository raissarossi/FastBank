import React from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View } from 'react-native';

import VoltarBtn from '../../components/Voltarbtn/VoltarBtn';

export default function Transferencias({ route, navigation }) {

    const { title } = route.params
    return (
        <View className={'bg-blue-300 h'}>
            <VoltarBtn />
            <Text>{title}</Text>
        </View>
    )
}