import React, { useState } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View, Switch } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../../components/Navbar/Navbar';
import { MaterialIcons } from '@expo/vector-icons';
import AcoesBtn from '../../components/Acoes/Acoes';

export default function Home({ navigation }) {
    const MaterialIconss = styled(MaterialIcons)

    const Saldo = 121212
    const [showSaldo, setShowSaldo] = useState(false)
    return (
        <View className="">
            <Navbar />
            <View className={'bg-black h-40 flex justify-center'}>
                <View className={"flex justify-between flex-row px-5"}>
                    <Text className={'text-white'}>See Bank balance</Text>
                    {/* MUDAR ROTA */}
                    <TouchableOpacity onPress={() => navigation.navigate('Start')} >
                        <Text className={'text-white'}>See statement</Text>
                    </TouchableOpacity>
                </View>
                <View className={"px-4 flex flex-row items-center "}>
                    <MaterialIconss name="attach-money" size={20} color="white" />
                    <View className={"flex flex-row"}>
                        {showSaldo && <Text className={"bg-orange-700 h-7 w-20"}>{Saldo}</Text>}
                        {!showSaldo && <View className={"h-7 w-20 bg-slate-300"} />}
                        <Text>Saldo:</Text>
                        <Switch onValueChange={() => setShowSaldo(!showSaldo)} value={showSaldo} />
                    </View>
                </View>
                <View className={"flex items-center"}>
                    {/* MINI CARROSSEL com touchable*/}
                    <View className={"h-12 w-8/12 m-5 bg-orange-500 flex justify-center  absolute rounded-lg"}>
                    </View>
                </View>


            </View>
            <AcoesBtn />
        </View>
    )
}