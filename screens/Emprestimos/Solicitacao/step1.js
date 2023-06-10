import { useEffect, useState } from "react";
import { Text, View, Pressable } from 'react-native';
import { TextInput } from "react-native";
import Saldo from "../../../components/Acoes/Saldo";
import Inputt from "../../../components/General/Input";
import VoltarBtn from "../../../components/General/VoltarBtn";
import ValorBtn from '../../../components/Acoes/ValorBtn';
import { useSession } from "../../../components/services/ApiToken";


const Step1 = ({ formEmprestimo, setFormEmprestimo, navigation }) => {
    const [valor, setValor] = useState('')
    const { user } = useSession(navigation);
    useEffect(() => {
        console.log(valor);
        if (valor.length > 0) {
            const formattedValor = valor.replace(/[^0-9.]/g, "");
            const formattedValor2 = parseFloat(formattedValor)
            setValor(formattedValor2);
        }
        else if (valor.length == 0) {
            setValor(0)
        }
        setFormEmprestimo({...formEmprestimo, valor: valor});
    }, [valor])
    return (
        <View className="h-full w-full flex items-center">
            <View className="flex justify-between items-center w-full h-1/3 py-5">
            <Inputt texto="$0,00" onChangeText={text => setValor(text)} value={valor} />
                <View className="flex flex-row w-4/5 justify-between">
                    <ValorBtn valor={1} onPress={() => setValor(valor + 1.00)} />
                    <ValorBtn valor={10} onPress={() => setValor(valor + 10.00)} />
                    <ValorBtn valor={50} onPress={() => setValor(valor + 50.00)} />
                    <ValorBtn valor={100} onPress={() => setValor(valor + 100.00)} />
                </View>
            </View>
            
            <View className="w-full flex justify-center items-center pt-3">
                <View className="w-4/5 flex items-end -mr-5">
                    <Saldo corText={"text-black"} tema={"white"} saldo={user.conta.saldo} />
                </View>
            </View>
        </View>
    );
}

export default Step1;
