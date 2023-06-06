// import { View, Text } from "react-native"
// import Navbar from "../../components/Navbar/Navbar";
// import Cartao from "./Cartao";
// import { useSession } from "../../components/services/ApiToken";

// const MeusCartoes = ({ navigation }) => {
//     const {user} = useSession(navigation)
//     return (
//         <View>
//             <Navbar />
//             <View className="">
//                 <Text className="text-2xl font-semibold mt-14 mb-5 px-10">Meus Cartoes</Text>
//             </View>
//             <Cartao tipo="d" />
//             <Cartao tipo="c" />

//         </View>
//     );
// }

// export default MeusCartoes;

import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Navbar from '../../components/Navbar/Navbar';
import Cartao from './Cartao';
import { useSession } from '../../components/services/ApiToken';
import { Pressable } from 'react-native-web';

const MeusCartoes = ({ navigation }) => {
    const { user } = useSession(navigation);
    const [cartoes, setCartoes] = useState([]);

    useEffect(() => {
        fetchCartoes();
    }, []);

    const fetchCartoes = async () => {
        try {
            const response = await fetch(
                'http://rai-fastbank.azurewebsites.net/bank/cartoes/'
            );
            const data = await response.json();
            setCartoes(data);
        } catch (error) {
            console.error('Erro ao buscar os cartões:', error);
        }
    };

    const renderCartoes = () => {
        return cartoes.map((cartao) => (
            <Cartao key={cartao.id} tipo={cartao.tipo} />
        ));
    };

    return (
        <View>
            <Navbar />
            <View className="">
                <Text className="text-2xl font-semibold mt-14 mb-3 px-10">
                    Meus Cartoes
                </Text>
            <Pressable className="h-10 px-10" onPress={()=>{navigation.navigate("SolicitarCartao")}}>
                    <Text className="text-light-blue3">Request new card...</Text>
                </Pressable>
            </View>
            {renderCartoes()}
        </View>
    );
};

export default MeusCartoes;
