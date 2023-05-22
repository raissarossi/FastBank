import React, { useEffect } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View } from 'react-native';
import VoltarBtn from '../../components/Voltarbtn/VoltarBtn';
import Verificacao from '../../components/services/verificacao';

export default function Transferencias({navigation}) {

    // useEffect(() => {
    //     Verificacao(navigation);
    // },[])

    

    return (
        <View className={'bg-blue-300 h-full'}>
            <VoltarBtn />
            {/* <Text>{title}</Text> */}
            <Text>Funcionou</Text>
        </View>
    )
}