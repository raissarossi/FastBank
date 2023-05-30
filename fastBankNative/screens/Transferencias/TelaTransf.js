import React, { useEffect, useState } from 'react';
import { Text, View, Pressable } from 'react-native';
import VoltarBtn from '../../components/General/VoltarBtn';
import Inputt from '../../components/General/Input';
import { useSession } from '../../components/services/ApiToken';
import api from '../../components/services/api';


export default function TelaTransf({ navigation, route }) {
    const {user} = useSession(navigation)
    const [key, setKey] = useState('')
    const { title, tipo } = route.params;

    useEffect(() => {
        console.log(key.length);
        if (title == "Phone") {
            if (key.length === 11) {
                const formattedKey =
                    '(' + key.substring(0, 2) +
                    ')' + key.substring(2, 7) +
                    '-' + key.substring(7, 11);
                setKey(formattedKey);
            }
            if (key.length < 14) {
                if (key.includes("(") || key.includes(")") || key.includes("-")) {
                    const formattedKey = key.replace("-", "").replace("(", "").replace(")", "");
                    setKey(formattedKey);
                }
            }
            console.log(key);

        }
        if (title == "cpf") {
            if (key.length === 11) {
                const formattedKey =
                    key.substring(0, 3) +
                    '.' +
                    key.substring(3, 6) +
                    '.' +
                    key.substring(6, 9) +
                    '-' +
                    key.substring(9, 11);
                setKey(formattedKey);
            }
            if (key.length < 14) {
                if (key.includes(".") || key.includes("-")) {
                    const formattedKey = key.replace(".", "").replace("-", "");
                    setKey(formattedKey);
                }
            }

        }

    }, [key])

    const verificarKey = () =>{
        api.get(`bank/contas/${key}`).then((res)=>{
            console.log(res.data);
            if (res.data[0].agencia == undefined){
                return
            }
            navigation.navigate('TelaValor', {tipo:{tipo}, key: {key}})
        })
        
    }

    return (
        <View className='h-full'>
            <View className="flex flex-row bg-black items-center justify-between pt-10 pb-6">
                <View className='w-8 px-5 py-2 '>
                    <VoltarBtn />
                </View>
                <Text className="text-white text-lg">{tipo}</Text>
                <View className='w-8 px-5 py-2 '>
                </View>
            </View>
            <View className="flex items-center">
                <View className="h-14 w-8/12 -m-7 bg-white shadow-md flex justify-center  absolute rounded-lg">
                    <View className="bg-black w-14 h-14 border-2 border-white rounded-l-md">
                    </View>
                </View>
            </View>
            {tipo == "Pix"
                ? <>
                    <Text className="text-2xl font-semibold mt-14 mb-5 px-10">Insert the key of who will receive...</Text>
                    <Inputt texto={title+"..."} onChangeText={text => setKey(text)} value={key} />
                </>
                :
                <>
                    <Text className="text-xl font-semibold mt-14 mb-2 px-10">Insert the agency of who will receive...</Text>
                    <Inputt texto="Agency..." onChangeText={text => setKey(text)} value={key} max={10}/>
                    <Text className="text-xl font-semibold mt-8 mb-2 px-10">And the account...</Text>
                    <Inputt texto="Account..." onChangeText={text => setKey(text)} value={key} />
                </>
            }
            <View className="w-full flex items-center absolute bottom-16">
                <Pressable onPress={() => {
                    verificarKey()
                    }} className="bg-black w-4/5 h-10 flex items-center justify-center rounded-full">
                    <Text className="text-white">Next</Text>
                </Pressable>
            </View>

        </View>
    )
}