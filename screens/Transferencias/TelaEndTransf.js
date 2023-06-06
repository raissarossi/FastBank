import React, { useEffect, useState } from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TelaEndTransf = ({ route }) => {
    const { result } = route.params ?? {};
    const navigation = useNavigation();

    return (
        <View className='h-full'>
            <View className="flex flex-row bg-black items-center justify-around pt-10 pb-6">
                <View className='w-8 px-5 py-2 '>
                </View>
                <View className="">
                    <Image source={require('../../components/img/logow.png')} className='w-36 h-7' />
                </View>
                <Pressable className='w-8 px-5 py-2' onPress={() => (navigation.navigate("Home"))}>
                    <Ionicons name="arrow-forward" size={24} color="white" />
                </Pressable>
            </View>
            {result == true ?
                <>
                    <Text className="text-2xl font-semibold mt-14 mb-5 px-10">All right... the money was successfully transferred!</Text>
                    <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-3/6' />
                </>
                :
                <>
                    <Text className="text-2xl font-semibold mt-14 mb-5 px-10">All right... the money was successfully transferred!</Text>
                    <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-3/6' />
                </>}


        </View>
    );
}

export default TelaEndTransf;
