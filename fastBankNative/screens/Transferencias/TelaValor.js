import { Text, View, Pressable } from 'react-native';
import Inputt from "../../components/General/Input";
import VoltarBtn from "../../components/General/VoltarBtn";
import { useEffect, useState } from 'react';
import ValorBtn from '../../components/Acoes/ValorBtn';
import { TextInput } from 'react-native-web';
import Saldo from '../../components/Acoes/Saldo';
import { useSession } from '../../components/services/ApiToken';
import api from '../../components/services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TelaValor = ({ navigation, route }) => {
    const { user } = useSession(navigation)
    const [valor, setValor] = useState('')
    const [token, setToken] = useState('')
    const { key, tipo } = route.params;
    const [mov, setMov] = useState({
        conta: user.id,
        chavePix: key,
        tipo: tipo,
        valor: valor,
        descricao: '',
    })

    useEffect(()=>{
        AsyncStorage.getItem("dados").then((res)=>{setToken(JSON.parse(res).access)})
    },[])

    useEffect(() => {
        console.log(valor);
        if (valor.length > 0) {
            const formattedValor = valor.replace(/[^0-9.]/g, "");
            const formattedValor2 = parseFloat(formattedValor)
            setValor(formattedValor2);
        }
        else if (valor.length == 0) {
            setValor('')
        }
    }, [valor])

    const sendTransf = () => {
        console.log(user);
        
        api.post("bank/movimentacao/", {
            conta: mov.conta ,
            chavePix: mov.chavePix ,
            tipo: mov.tipo ,
            valor: mov.valor ,
            descricao: mov.descricao ,
        },{headers:{
            Authorization: 'JWT '+ token
        }})
    }
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
            <Inputt texto="$0,00" onChangeText={text => setValor(text)} value={valor} keyboardType="numeric" />
            <View className="flex justify-center items-center w-full py-5">
                <View className="flex flex-row w-4/5 justify-between">
                    <ValorBtn valor={1} onPress={() => setValor(valor + 1.00)} />
                    <ValorBtn valor={10} onPress={() => setValor(valor + 10.00)} />
                    <ValorBtn valor={50} onPress={() => setValor(valor + 50.00)} />
                    <ValorBtn valor={100} onPress={() => setValor(valor + 100.00)} />
                </View>
            </View>
            <Text className="text-2xl font-semibold mt-8 px-10">Description</Text>
            <View className="w-full flex justify-center items-center">
                <TextInput placeholder="Description" onChangeText={(text) => setMov({ ...mov, descricao: text })} keyboardType="numeric"
                    className='w-4/5 h-12 border-b-2 pl-2 placeholder:text-dark-grey1 placeholder:font-semibold placeholder:italic placeholder:text-xl '></TextInput>
            </View>
            <View className="w-full flex justify-center items-center pt-3">
                <View className="w-4/5 flex items-end -mr-5">
                    <Saldo corText={"text-black"} tema={"white"} saldo={user.conta.saldo} />
                </View>
            </View>
            <View className="w-full flex items-center absolute bottom-16">
                <Pressable onPress={()=>sendTransf()} className="bg-black w-4/5 h-10 flex items-center justify-center rounded-full">
                    <Text className="text-white">Next</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default TelaValor;