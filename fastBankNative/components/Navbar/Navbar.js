import React from 'react';
import { View, Text, Image } from "react-native-web";
import VoltarBtn from '../Voltarbtn/VoltarBtn';


const Navbar = () => {
    return (
        <View className="flex flex-row bg-black items-center justify-between pt-10">
            <View className={'w-8 px-5 py-2'}>
                <VoltarBtn />
            </View>
            <View className="">
                <Image source={require('../../components/img/logow.png')} className='w-48 h-10' />
            </View>
            <View className={'w-8 px-5 py-2'}>
            </View>
        </View>
    );
}

export default Navbar;