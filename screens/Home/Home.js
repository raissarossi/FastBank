import React, { useEffect, useState } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View, Switch } from 'react-native';
import { styled } from 'nativewind';
import Navbar from '../../components/Navbar/Navbar';
import AcoesBtn from "../../components/Acoes/AcoesBtn"
import Icon from 'react-native-vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons';
import { useSession } from '../../components/services/ApiToken';
import Saldo from '../../components/Acoes/Saldo';


export default function Home({ navigation }) {
    const { user } = useSession(navigation)
    const MaterialIconss = styled(MaterialIcons)
    const [showSaldo, setShowSaldo] = useState(false)
    

    return (
        <View>
            <Navbar />
            <View className={'bg-black h-32 flex justify-center'}>
                <View className={"flex justify-between flex-row px-5"}>
                    {/* MUDAR ROTA */}
                    <View className="-ml-5">
                        <Saldo corText={"text-white"} tema={"black"} saldo={user.conta.saldo}/>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Start')}>
                        <Text className={'text-white'}>See statement</Text>
                    </TouchableOpacity>
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