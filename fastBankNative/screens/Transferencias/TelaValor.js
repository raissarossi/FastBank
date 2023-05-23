import { Text, View, Pressable } from 'react-native';
import Inputt from "../../components/General/Input";
import VoltarBtn from "../../components/General/VoltarBtn";
import { useEffect, useState } from 'react';
import ValorBtn from '../../components/Acoes/ValorBtn';

const TelaValor = () => {
    const [valor, setValor] = useState(0)
    useEffect(() => {
        console.log(valor);
        if (valor.length > 0) {
            const formattedValor = valor.replace(/[^0-9]/g, "");
            setValor(formattedValor);
        }
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
            <Text>How Much?</Text>
            <Inputt texto="$0,00" onChangeText={text => setValor(text)} value={valor} />
            <View className="flex justify-center items-center w-full py-5">
                <View className="flex flex-row w-4/5 justify-between">
                    <ValorBtn valor={1} />
                    <ValorBtn valor={10} />
                    <ValorBtn valor={50} />
                    <ValorBtn valor={100} />
                </View>
            </View>
        </View>
    );
}

export default TelaValor;