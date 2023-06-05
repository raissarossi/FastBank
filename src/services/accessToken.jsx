import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import api from "./api";

export function useSession(navigation) {

    const [user, setUser] = useState({
        nome_cliente: "Loading...",
        conta: {
            saldo: "Loading..."
        }
    });
    useEffect(() => {
        JSON.parse(localStorage.getItem('dados'))
            .then(token => {
                if (!token) {
                    console.log('TOKEEEEEEEEEEN');
                    console.log('Oops you are not authenticated');
                    navigation.navigate('Login');
                }

                api.get("/auth/users/me/", {
                    headers: {
                        Authorization: `JWT ${JSON.parse(token).access}`,
                    },
                })
                    .then((res) => {
                        api.get(`bank/contas/${res.data.id}/`)
                            .then((resConta) => {
                                setUser({ ...res.data, conta: { ...resConta.data } });
                            });
                    })
                    .catch((res) => {
                        console.log(res);

                        alert("Your session has expired");
                        AsyncStorage.removeItem("dados");

                        navigation.navigate("Login");
                    });
            });
    }, []);

    return { user };
}