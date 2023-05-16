import Table from "./components/table"
import Navbar from "../Header/Navbar"
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../../services/api";
import axios from 'axios';

const InfosSignIn = () => {
    const rota = useNavigate()
    const { pathname } = useLocation();
    // const [exibirBotao, setExibirBotao] = useState();

    // if (pathname === '/infosignin'){
    //     setExibirBotao(false)
    // }

    useEffect(() => {
        let user = JSON.parse(localStorage.getItem("dados"))
        console.log(user);
        if (!user) {
            rota("/")
        }
        else{

            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${user['access']}`
              }
    
            axios.get('http://localhost:8000/auth/users/me/', 
            {headers}).then((res) => {
                console.log(res)
                if (res.status != 200){
                    rota("/")
                }
            }).catch((err) => {
                rota("/")
            })
        }
    })

    return (
        <div className="dark:bg-black h-screen">
            <Navbar  exibirBotao={false}/>
            <div className="flex justify-between">
                <div className="hidden sm:flex sm:w-3/12">

                </div>
                <div className="flex sm:w-8/12">
                    <Table />
                </div>
            </div>
        </div>
    );
}

export default InfosSignIn;