import React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

const VoltarBtn = ({ title }) => {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.goBack();
    };

    return (

        <TouchableOpacity onPress={handlePress} className={'bg-black w-1/4 h-12 rounded-full flex justify-center items-center'}>
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
    );
}

export default VoltarBtn;