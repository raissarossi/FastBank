import React, { useEffect, useState } from 'react';
import { Text, Button, Image, TouchableOpacity, TextInput, View, Switch } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Feather';
import { MaterialIcons } from '@expo/vector-icons';
const Saldo = ({ corText, tema, saldo }) => {
    // const { user } = useSession(navigation)
    const MaterialIconss = styled(MaterialIcons)
    const [showSaldo, setShowSaldo] = useState(false)
    let bg = ""
    if (tema == "white") {
        bg = "bg-black opacity-10"
    }
    if (tema == "black") {
        bg = "bg-black opacity-10"
    }

    return (
        <View>
            <View className={"flex justify-between flex-row px-5"}>
                <Text className={corText}>See Bank balance</Text>
            </View>
            <View className={"px-4 flex flex-row items-center"}>
                <MaterialIconss name="attach-money" size={20} className={corText} />

                <View className="flex flex-row items-center">
                    {showSaldo && <Text className={`h-7 rounded-md text-lg ${corText} px-1 mr-2`}>{saldo}</Text>}
                    {!showSaldo && <View className={`h-7 w-20 ${bg} rounded-md mr-2`} />}
                    {showSaldo && (
                        <Icon name="eye" size={18} className={corText} onPress={() => setShowSaldo(!showSaldo)} />
                    
                    )}
                    {!showSaldo && (
                        <Icon name="eye-off" size={18} className={corText} onPress={() => setShowSaldo(!showSaldo)} />
                    )}
                </View>
            </View>
        </View>
    );
}

export default Saldo;