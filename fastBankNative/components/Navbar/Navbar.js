import React from 'react';
import { View, Text } from "react-native-web";
import VoltarBtn from '../Voltarbtn/VoltarBtn';


const Navbar = () => {
    return (
        <>
            <View className={"bg-green-400 w-full flex flex-row items-center justify-between pt-10"}>
                <View className={'w-8 px-5 py-2'}>
                    <VoltarBtn />
                </View>
                <Text>Navbar-- menu bruguer / logo / sino</Text>
            </View>
        </>
    );
}

export default Navbar;