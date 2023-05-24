import { Text, View, Pressable } from 'react-native';
import Inputt from "../../components/General/Input";
import VoltarBtn from "../../components/General/VoltarBtn";
import { useEffect, useState } from 'react';
import ValorBtn from '../../components/Acoes/ValorBtn';
import { TextInput } from 'react-native-web';
import Saldo from '../../components/Acoes/Saldo';
import { useSession } from '../../components/services/ApiToken';

const TelaValor = ({navigation}) => {
    const {user} = useSession(navigation)
    const [valor, setValor] = useState('')
    const Saldo = 10
    useEffect(() => {
        console.log(valor);
        // if (valor.length > 0) {
        //     const formattedValor = valor.replace(/[^0-9]/g, "")
        //     const formattedValor2 = parseFloat(formattedValor)
        //     const formattedValor3 = (formattedValor2 * (0.01))
        //     setValor(formattedValor3);
        // }
        // else if (valor.length == 0) {
        //     setValor('')
        // }
    }, [valor])
    return (
        <View className='h-full'>
            <View className="flex flex-row bg-black items-center justify-between pt-10 pb-6">
                <View className='w-8 px-5 py-2 '>
                    <VoltarBtn />
                </View>
                <Text className="text-white text-lg">tipo</Text>
                <View className='w-8 px-5 py-2 '></View>
            </View>
            <Text className="text-2xl font-semibold mt-14 mb-5 px-10">How Much?</Text>
            <Inputt texto="$0,00" onChangeText={text => setValor(text)} value={valor} keyboardType="numeric"/>
            <View className="flex justify-center items-center w-full py-5">
                <View className="flex flex-row w-4/5 justify-between">
                    <ValorBtn valor={1} onPress={() => setValor(valor + 1)} />
                    <ValorBtn valor={10} onPress={() => setValor(valor + 10)} />
                    <ValorBtn valor={50} onPress={() => setValor(valor + 50)} />
                    <ValorBtn valor={100} onPress={() => setValor(valor + 100)} />
                </View>
            </View>
            <Text className="text-2xl font-semibold mt-8 px-10">Description</Text>
            <View className="w-full flex justify-center items-center">
                <TextInput placeholder="Description" keyboardType="numeric"
                className='w-4/5 h-12 border-b-2 pl-2 placeholder:text-dark-grey1 placeholder:font-semibold placeholder:italic placeholder:text-xl '></TextInput>
            </View>
            <View className="w-full flex justify-center items-center pt-3">
                <View className="w-4/5 flex items-end -mr-5">
                    <Saldo corText={"text-black"} tema={"white"} />
                </View>
            </View>
            <View className="w-full flex items-center absolute bottom-16">
                <Pressable onPress={() => navigation.navigate('Transferencias')} className="bg-black w-4/5 h-10 flex items-center justify-center rounded-full">
                    <Text className="text-white">Next</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default TelaValor;