import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import api from "./api";

export function useSession({navigation}) {
    const [user, setUser] = useState({
        nome_cliente: "Loading...",
        conta: { 
            saldo: "Loading..."
        }
    });
    useFocusEffect(() => {
        AsyncStorage.getItem("dados")
            .then(token => {
                if (!token) {
                    alert('Oops you are not authenticated');
                    return navigation.navigate('Login');
                }
                api.get("auth/users/me/", {
                    headers: {
                        "Authorization": `JWT ${JSON.parse(token).access}`
                    }
                })
                .then(res => {
                    api.get(`bank/contas/${res.data.id}/`)
                    .then(resConta => {
                        setUser({...res.data, conta: {...resConta.data}});
                    })
                })
            })
    });

    return { user };
}