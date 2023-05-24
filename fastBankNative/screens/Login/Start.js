import React, { useEffect } from 'react';
import { Text, Button, Image, Pressable, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Icons from '../../components/Icons/Icons';

export default function Start({ navigation }) {

    const btAccess = () =>{
        navigation.navigate('Home')
    }
    return (
        <>
            <View className={"flex items-center h-full overflow-hidden w-full"}>

                <View className={"bg-black h-3/5 w-[500] rounded-b-full flex items-center justify-center"}>
                    <Image source={require('../../components/img/logow.png')}
                        className={"min-h-[70] m-5 w-[300]"} />
                </View>

                <View className={'w-full h-2/5 flex justify-end'}>

                    <View className={"pr-4 pl-4 w-full flex justify-around"}>
                        <View className={'ss:mb-9'}>
                            <View className={'flex flex-row justify-between pb-4 pt-7 items-center'}>
                                <Text>Name</Text>
                                <Icons iconName={"keyboard-arrow-down"} collection={MaterialIcons} color={"black"} size={24} classN={"p-9"} />
                            </View>
                            <View className={'flex flex-row justify-between'}>
                                <Text>Agency: </Text>
                                <Text>Account: </Text>
                            </View>
                        </View>

                        <View className={'flex items-center flex-row justify-evenly'}>
                            <Pressable onPress={() => navigation.navigate('Home')} className={'bg-black w-1/4 h-12 rounded-full flex justify-center items-center'}>
                                <Text className={'text-white'}>Access</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View className={'bg-black w-full mt-4'}>
                        <View className={'flex justify-around flex-row m-3'}>
                            <View className={'border-2 border-white rounded-lg'}>
                                <Pressable title='key' onPress={() => navigation.navigate('Transferencias', { title: 'Security Key' })} >
                                    <Icons iconName={"lock-closed-outline"} collection={Ionicons} color="white" size={24} classN={"p-9"} />
                                </Pressable>
                            </View>

                            <View className={'border-2 border-white  rounded-lg'}>
                                <Pressable onPress={() => navigation.navigate('Transferencias', { title: 'Bar Code' })} >
                                    <Icons iconName={"ios-barcode-outline"} collection={Ionicons} color="white" size={24} classN={"p-9"} />
                                </Pressable>
                            </View>

                            <View className={'border-2 border-white  rounded-lg'}>
                                <Pressable onPress={() => navigation.navigate('Transferencias', { title: 'PIX' })} >
                                    <Image source={require('../../components/img/logoPix.png')} className={'h-5 w-5 m-9'} />
                                </Pressable>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </>
    )
}
