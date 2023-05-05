import React from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View } from 'react-native';
import { styled } from 'nativewind';MaterialIcons
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Start({ navigation }) {

    const IconsM = styled(MaterialIcons)
    const IconsI = styled(Ionicons)

    // const btAccess = () =>{
    //     navigation.navigate('Home')
    // }
    return (
        <>
            <View className={"flex items-center h-full overflow-hidden w-full"}>

                <View className={"bg-black h-3/5 w-[500] rounded-b-full flex items-center justify-center"}>
                    <Image source={require('../../components/img/logow.png')}
                        className={"min-h-[70] m-5 w-[300]"} />
                </View>

                <View className={'w-full h-2/5 flex justify-end'}>

                    <View className={"pr-4 pl-4 w-full flex justify-around"}>
                        <View className={'mb-9'}>
                            <View className={'flex flex-row justify-between pb-4 pt-7'}>
                                <Text>Name</Text>
                                <IconsM name="keyboard-arrow-down" size={24} color="black" />
                            </View>
                            <View className={'flex flex-row justify-between'}>
                                <Text>Agency: </Text>
                                <Text>Account: </Text>
                            </View>
                        </View>

                        <View className={'flex items-center flex-row justify-evenly'}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} className={'bg-black w-1/4 h-12 rounded-full flex justify-center items-center'}>
                                <Text className={'text-white'}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Create')} className={'bg-black w-1/4 h-12 rounded-full flex justify-center items-center'}>
                                <Text className={'text-white'}>Create</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className={'bg-black w-full mt-4'}>
                        <View className={'flex justify-around flex-row m-3'}>
                            <View className={'border-2 border-white rounded-lg'}>
                                <TouchableOpacity title='key' onPress={() => navigation.navigate('Transferencias', { title: 'Security Key' })} >
                                    <IconsI name="lock-closed-outline" size={24} className={'p-9 text-white'} />
                                </TouchableOpacity>
                            </View>

                            <View className={'border-2 border-white  rounded-lg'}>
                                <TouchableOpacity onPress={() => navigation.navigate('Transferencias', { title: 'Bar Code' })} >
                                    <IconsI name="ios-barcode-outline" size={24} className={'p-9 text-white'} />
                                </TouchableOpacity>
                            </View>

                            <View className={'border-2 border-white  rounded-lg'}>
                                <TouchableOpacity onPress={() => navigation.navigate('Transferencias', { title: 'PIX' })} >
                                    <Image source={require('../../components/img/logoPix.png')} className={'h-5 w-5 m-9'}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>

            </View>
        </>
    )
}
