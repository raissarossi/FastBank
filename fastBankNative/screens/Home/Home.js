import React, { useEffect, useState } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View, Switch } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../../components/Navbar/Navbar';
import AcoesBtn from "../../components/Acoes/AcoesBtn"
import Verificacao from '../../components/services/verificacao';
import Icon from 'react-native-vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons';
// import { isEnabled } from 'react-native/Libraries/Performance/Systrace';


export default function Home({ navigation }) {
    useEffect(() => {
        Verificacao(navigation);
    },[])

    const MaterialIconss = styled(MaterialIcons)
    const Saldo = 1234567.89
    const [showSaldo, setShowSaldo] = useState(false)

    return (
        <View>
            <Navbar />
            <View className={'bg-black h-32 flex justify-center'}>
                <View className={"flex justify-between flex-row px-5"}>
                    <Text className={'text-white'}>See Bank balance</Text>
                    {/* MUDAR ROTA */}
                    <TouchableOpacity onPress={() => navigation.navigate('Start')} >
                        <Text className={'text-white'}>See statement</Text>
                    </TouchableOpacity>
                </View>
                <View className={"px-4 flex flex-row items-center"}>
                    <MaterialIconss name="attach-money" size={20} color="white" />

                    <View className="flex flex-row items-center">
                        {showSaldo && <Text className={"h-7  bg-dark-blue_grey2  rounded-md text-lg text-white px-1 mr-2"}>{Saldo}</Text>}
                        {!showSaldo && <View className={"h-7 w-20 bg-dark-blue_grey2 opacity-60 rounded-md mr-2"} />}
                        {showSaldo && (
                            <Icon name="eye" size={18} color="#0072CE"  onPress={() => setShowSaldo(!showSaldo)} />
                        )}
                        {!showSaldo && (
                            <Icon name="eye-off" size={18} color="#ffffff" onPress={() => setShowSaldo(!showSaldo)} />
                        )}
                    </View>
                </View>
                <View className={"flex items-center"}>
                    {/* MINI CARROSSEL com touchable*/}
                    <View className={"h-12 w-8/12 m-4 bg-orange-500 flex justify-center  absolute rounded-lg"}>
                    </View>
                </View>


            </View>
            <AcoesBtn />
        </View>
    )
}