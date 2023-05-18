import React, { useEffect } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View } from 'react-native';

import VoltarBtn from '../../components/Voltarbtn/VoltarBtn';

export default function Transferencias({ route, navigation }) {

    const { title, logado } = route.params

    console.log(`status logado: ${logado} `)
    useEffect(() => {
        if (!logado){
            navigation.navigate('Login')
        }
    }, [])
    return (
        <View className={'bg-blue-300 h'}>
            <VoltarBtn />
            {/* <Text>{title}</Text> */}
            <Text>Funcionou</Text>
        </View>
    )
}