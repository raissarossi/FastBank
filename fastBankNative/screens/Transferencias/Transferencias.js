import React, { useEffect } from 'react';
import { Text, View, Pressable } from 'react-native';
import Icons from '../../components/Icons/Icons';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '../../components/Navbar/Navbar'

export default function Transferencias({ navigation }) {

    // useEffect(() => {
    //     Verificacao(navigation);
    // },[])


    return (
        <View className={'h-full'}>
            {/* <Text>{title}</Text> */}
            <Navbar />
            <View className="bg-black h-1/4 flex items-center justify-around pt-6">
                <View className="flex flex-row w-full justify-evenly">
                    <Pressable onPress={() => {navigation.navigate('TelaTransf', { title: 'Phone', tipo: 'Pix' })}} className='flex items-center border border-white w-3/12 rounded-xl'>
                        <Icons classN={"p-1"} iconName={"ios-barcode-outline"} collection={Ionicons} color={"white"} size={48} />
                        <Text className="text-white p-1">Phone</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('TelaTransf', { title: 'Email', tipo: 'Pix' })} className='flex items-center border border-white w-3/12 rounded-xl'>
                        <Icons classN={"p-1"} iconName={"ios-barcode-outline"} collection={Ionicons} color={"white"} size={48} />
                        <Text className="text-white p-1">Email</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('TelaTransf', { title: 'cpf', tipo: 'Pix' })} className='flex items-center border border-white w-3/12 rounded-xl'>
                        <Icons classN={"p-1"} iconName={"ios-barcode-outline"} collection={Ionicons} color={"white"} size={48} />
                        <Text className="text-white p-1">CPF</Text>
                    </Pressable>
                </View>

                <View className="flex flex-row w-full justify-evenly py-2">
                    <Pressable onPress={() => navigation.navigate('TelaTransf', { title: 'Payment', tipo: 'Payment' })} className='flex flex-row items-center border border-white w-5/12 rounded-xl h-5/6'>
                        <Icons classN={"p-1"} iconName={"ios-barcode-outline"} collection={Ionicons} color={"white"} size={48} />
                        <Text className="text-white">Payment</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('TelaTransf', { title: 'Transfer', tipo: 'Payment' })} className='flex flex-row items-center border border-white w-5/12 rounded-xl h-5/6'>
                        <Icons classN={"p-1"} iconName={"ios-barcode-outline"} collection={Ionicons} color={"white"} size={48} />
                        <Text className="text-white">Transfer</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    )
}