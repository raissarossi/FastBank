import { Button, Image, Pressable } from "react-native";
import { TextInput, TouchableOpacity, View, Text } from "react-native-web";
import SimpleSelectButton from 'react-native-simple-select-button';
import { Ionicons } from '@expo/vector-icons';
import { useState } from "react";
import api from "../../components/services/api";


const Login = ({ navigation }) => {
    const [cpf_cnpj, setCpf_cnpj] = useState('');
    const [senha, setSenha] = useState('');

    // const logar = () => {
    //     console.log('logar');
    //     navigation.navigate('Home', { logado: true, title: '' })
    // }

    const logar = () => {
        console.log("aaaaaaaa")
        api.post('auth/jwt/create', {
          CPF_CNPJ: cpf_cnpj,
          password: senha
        }).then((response) => {
          console.log(response)
          console.log('logar');
          localStorage.setItem('dados', JSON.stringify(response.data));
          navigation.navigate('Home', { logado: true, title: '' })
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

            {/* <View className='z-20 flex items-center w-4/5 h-1/6 justify-between'>
                <TextInput className='w-full h-12 rounded-xl border-2 border-light-grey z-20' placeholder="CPF / CNPJ" onChangeText={text => setCpf_cnpj(text)} />
                <TextInput className='w-full h-12 rounded-xl border-2 border-light-grey z-20' placeholder="Password" onChangeText={text => setSenha(text)} />
                

            </View>
            <View className='w-full h-12 flex items-center justify-center z-30'>

                <Pressable className='bg-black text-white w-5/12 h-full rounded-full flex items-center justify-center z-30 disabled:bg-light-grey1' onPress={logar}>
                    
                <Text className='text-white font-semibold text-xl'>Save</Text>
                
                </Pressable>
            </View> */}

            <View className='z-20 flex items-center w-4/5 h-1/6 justify-between'>
                <form onSubmit={(e)=>{e.preventDefault();logar()}} className='z-20 flex items-center w-4/5 h-1/6 justify-between'>
                    <label>CPF/CNPJ:
                        <TextInput className='w-full h-12 rounded-xl border-2 border-light-grey z-20' placeholder="CPF / CNPJ" onChangeText={text => setCpf_cnpj(text)} require/>
                    </label>
                    <label>Password:
                        <TextInput className='w-full h-12 rounded-xl border-2 border-light-grey z-20' placeholder="Password" onChangeText={text => setSenha(text)} require/>
                    </label>
                    <button type="submit" value="Submit" className='bg-black text-white w-5/12 h-full rounded-full flex items-center justify-center z-30 disabled:bg-light-grey1'/>
                </form>
            </View>

        </View>
    );
}

export default Login;