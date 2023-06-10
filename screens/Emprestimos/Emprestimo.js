import { Pressable, View, Text, Image } from "react-native";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect, useState } from "react";
import Step0 from "./Solicitacao/step0";
import Step1 from "./Solicitacao/step1";
import Step2 from "./Solicitacao/step2";
import StatusEmprestimo from "./StatusEmprestimo"
import { useSession } from "../../components/services/ApiToken";
import api from "../../components/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Emprestimo = ({ navigation }) => {
    const { user } = useSession(navigation)
    const [page, setPage] = useState(0)
    const [token, setToken] = useState('')
    const [aprovado, setAprovado] = useState(false)

    const FormTitles = ['Request your loan right now...', 'How much do you want?', 'Are you sure about this action?', 'foi'];

    // 'Ready... the money is already in your account!'

    const [formEmprestimo, setFormEmprestimo] = useState({
        conta: user.id,
        valor: 0,
        juros: '',
        valorPagar: '',
        aprovado: false
    })

    useEffect(() => {
        AsyncStorage.getItem("dados").then((res) => { setToken(JSON.parse(res).access) })
    }, [])

    const PageDisplay = () => {
        if (page === 0) {
            return <Step0 />
        }
        else if (page === 1) {
            return <Step1 formEmprestimo={formEmprestimo} setFormEmprestimo={setFormEmprestimo} />
        }
        else if (page === 2) {
            return <Step2 formEmprestimo={formEmprestimo} setFormEmprestimo={setFormEmprestimo} />
        }
        else if (page === 3 ){
            if (aprovado === false) {
                return (
                    <View>
                        <Text></Text>
                        <View className="h-full w-full flex justify-center items-center">
                            <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-full' />
                        </View>
                    </View>
                )
            }
            else if (aprovado === true) {
                return (
                    <View className="h-full w-full flex justify-center items-center">
                        <Image source={require('../../components/img/People/HappyMen.png')} className='w-full h-full' />
                    </View>
                )
            }
        }
    }
    const CheckInput = () => {
        if (page === 0) {
            return true
        }
        if (page === 1) {
            return true
        }
        if (page === 2) {
            return true
        }
        if (page === 3) {
            return true
        }
        return false

    }
    const isNextDisabled = !CheckInput()


    const sendEmprestimoToAPI = (tipo) => {
        api.post(
            'bank/emprestimo/',
            {
                conta: user.id,
                valor: formEmprestimo.valor,
            },
            {
                headers: { Authorization: 'JWT ' + token }
            }
        ).then((res) => {
            console.log(res);
            setAprovado(res.data.aprovado)
        })
    };


    return (
        <View className="w-full h-full">
            <Navbar />
            <View className="w-full h-1/6">
                <Text className="text-2xl font-semibold mt-14 mb-5 px-10">{FormTitles[page]}</Text>
            </View>
            <View id='body' className="w-full h-3/6">
                {PageDisplay()}
            </View>
            <View className="w-full h-2/6 bottom-0 flex items-center">
                <Pressable disabled={isNextDisabled} className={`bg-black w-4/5 h-10 flex items-center justify-center rounded-full ${isNextDisabled ? "bg-dark-grey1" : "bg-black"}`}
                    onPress={() => {
                            setPage((currPage) => currPage + 1)
                            if (page === 2){
                                sendEmprestimoToAPI()
                            }
                            if (page === 3){
                                navigation.navigate('Home')
                            }
                    }}>
                    <Text className="text-white">
                        {page === 2 ? "REQUEST" : page === 3 ? "EXIT" : "NEXT"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

export default Emprestimo