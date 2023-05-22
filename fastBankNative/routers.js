import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Start from "./screens/Login/Start";
import Login from "./screens/Login/Login";
import Home from "./screens/Home/Home";
import Transferencias from "./screens/Transferencias/Transferencias"
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";


const Pilha = createStackNavigator()


export default function Routers() {
    const [navbar, setNavbar]=useState(true)
    return (
        <NavigationContainer>
            {/* {navbar==true?<Navbar /> : <></>} */}
            <Pilha.Navigator screenOptions={{ headerShown: false }}>
                <Pilha.Screen
                    name="Transferencias"
                    component={Transferencias}
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
                    name="Home"
                    component={Home}
                />

            </Pilha.Navigator>
        </NavigationContainer>
    )
}

