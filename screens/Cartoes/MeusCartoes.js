import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../components/Navbar/Navbar';
import Cartao from './Cartao';
import { useSession } from '../../components/services/ApiToken';
import { Pressable } from 'react-native-web';
import api from '../../components/services/api';

const MeusCartoes = ({ navigation }) => {
    const { user } = useSession(navigation)
    const [cartoes, setCartoes] = useState([{
        id: 0,
        conta: 0,
        tipo: "X",
        numero: "XXXX.XXXX.XXXX.XXXX",
        bandeira: "X"
    }])
    useEffect(() => {
        console.log(user);
    }, [user])
    useEffect(() => {
        console.log('CARTAAAAAAAAAAAO  ' + cartoes.conta);
    }, [cartoes])

    useEffect(() => {
        try {
            api.get('bank/cartoes/')
                .then((res) => {
                    console.log(res.data);
                    setCartoes(res.data)
                })

        } catch (error) {
            console.error('Erro ao buscar os cartões:', error)
        }
    }, [])

    return (
        <View className="h-full">
            <Navbar />
            <View className="">
                <Text className="text-2xl font-semibold mt-14 mb-3 px-10">
                    Meus Cartoes
                </Text>
                <Pressable className="h-10 px-10" onPress={() => { navigation.navigate("SolicitarCartao") }}>
                    <Text className="text-light-blue3">Request new card...</Text>
                </Pressable>
            </View>
            {cartoes.map((cartao) =>
                <View>
                    {cartao.conta == user.conta.id ?
                        <>
                            <Cartao key={cartao.id} tipo={cartao.tipo} num={cartao.numero} nome={user.nome}/>
                        </> :
                        <Text>2</Text>
                        /* <Text>{cartao.conta} != {user.conta.id}</Text> */
                    }
                </View>)
            }
        </View>
    );
};

export default MeusCartoes;
