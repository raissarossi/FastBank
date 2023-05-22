import { Button, Image, Pressable } from "react-native";
import { TextInput, TouchableOpacity, View, Text } from "react-native-web";
import { useContext, useState } from "react";
import api from "../../components/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import SimpleSelectButton from 'react-native-simple-select-button';
// import { Ionicons } from '@expo/vector-icons';
// import { Context } from "../../components/services/globalContext";


const Login = ({ navigation }) => {

    const [cpf_cnpj, setCpf_cnpj] = useState('');
    const [senha, setSenha] = useState('');


    const logar = () => {
        console.log("aaaaaaaa")
        api.post('auth/jwt/create', {
            CPF_CNPJ: cpf_cnpj,
            password: senha
        }).then((response) => {
            console.log(response)
            console.log('logar');
            AsyncStorage.setItem("dados", JSON.stringify(response.data))
            navigation.navigate('Home', { logado: true })
        })
            .catch((error) => console.log(error))
    }
    return (
        <View className='flex flex-col justify-evenly items-center h-full overflow-hidden'>

            <Image source={require('../../components/img/WaveTopBlack.png')} className='w-60 h-44 ss:w-72 ss:h-52 ssm:w-80 ssm:h-60 z-10 absolute top-0 left-0' />
            <Image source={require('../../components/img/WaveBottomBlack.png')} className='w-60 h-44 ss:w-72 ss:h-52 ssm:w-80 ssm:h-60 z-10 absolute bottom-0 right-0' />
            <Image source={require('../../components/img/greyCircle.png')} className='w-72 h-72 ss:w-80 ss:h-80 z-10 absolute -right-28' />

            <View className="w-full flex items-center mt-2 z-20">
                <Image source={require('../../components/img/logob.png')} className={'w-72 h-14 ss:w-80 m-1'} />
            </View>

            <View className='z-20 flex items-center w-4/5 justify-between h-2/5'>
                <View className='w-full'>
                    <View className='w-full'>
                        <Text>CPF/CNPJ:</Text>
                        <TextInput className='w-full h-12 rounded-xl border-2 border-light-grey z-20' placeholder="CPF / CNPJ" onChangeText={text => setCpf_cnpj(text)} require />
                    </View>
                    <View className='w-full pt-2'>
                        <Text>Password:</Text>
                        <TextInput className='w-full h-12 rounded-xl border-2 border-light-grey z-20' placeholder="Password" onChangeText={text => setSenha(text)} require />
                    </View>
                </View>

                <Pressable onPress={logar} className={'bg-black w-2/4 h-12 rounded-full flex justify-center items-center'}>
                    <Text className={'text-white'}>Enter</Text>
                </Pressable>
            </View>

        </View>
    );
}

export default Login;