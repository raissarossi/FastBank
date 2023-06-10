import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Login/Start";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Transferencias from "./screens/Transferencias/Transferencias"
import { useState } from "react";
import TelaTransf from "./screens/Transferencias/TelaTransf";
import TelaValor from "./screens/Transferencias/TelaValor";
import MeusCartoes from "./screens/Cartoes/MeusCartoes";
import SolicitarCartao from "./screens/Cartoes/SolicitarCartao";
import TelaEndTransf from "./screens/Transferencias/TelaEndTransf";
import Emprestimo from "./screens/Emprestimos/Emprestimo";
import StatusEmprestimo from "./screens/Emprestimos/StatusEmprestimo";


const Pilha = createStackNavigator()


export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator screenOptions={{ headerShown: false }}>
                <Pilha.Screen
                    name="StatusEmprestimo"
                    component={StatusEmprestimo}
                />
                <Pilha.Screen
                    name="Emprestimo"
                    component={Emprestimo}
                />

                <Pilha.Screen
                    name="Start"
                    component={Start}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                />


                <Pilha.Screen
                    name="Transferencias"
                    component={Transferencias}
                />
                <Pilha.Screen
                    name="TelaTransf"
                    component={TelaTransf}
                    initialParams={{ title: 'pix' }}
                />
                <Pilha.Screen
                    name="TelaValor"
                    component={TelaValor}
                />
                <Pilha.Screen
                    name="TelaEndTransf"
                    component={TelaEndTransf}
                />


                <Pilha.Screen
                    name="MeusCartoes"
                    component={MeusCartoes}
                />

                <Pilha.Screen
                    name="SolicitarCartao"
                    component={SolicitarCartao}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

