import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Login/Start";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Transferencias from "./screens/Transferencias/Transferencias"
import { useState } from "react";
import TelaTransf from "./screens/Transferencias/TelaTransf";
import TelaValor from "./screens/Transferencias/TelaValor";


const Pilha = createStackNavigator()


export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator screenOptions={{ headerShown: false }}>
                <Pilha.Screen
                    name="Home"
                    component={Home}
                />
                <Pilha.Screen
                    name="Start"
                    component={Start}
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

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

