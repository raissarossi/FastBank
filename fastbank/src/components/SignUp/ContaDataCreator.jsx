import { useState } from "react";
import api from "../../services/api";


function ContaDataCreator(cliente){

    let saldo = 0

    const sorteador=(qtd)=>{
        let num = '';
        for (let x = 0; x < qtd; x++) {
            num +=Math.floor(Math.random() * 10);
            console.log(num);
           
        }
        return num
    }
    const sorteadorSaldo=()=>{
        let num = Math.floor(Math.random() * 100000) + 1500;
        saldo = num
        return num
    }
    const definirLimite=()=>{
        let num = saldo*0.25;
        return num
    }

    const conta = {
        cliente: cliente,
        agencia:sorteador(4),
        numero:sorteador(7),
        digito:sorteador(1),
        saldo:sorteadorSaldo(),
        limite:definirLimite(),
        ativa:true,
    }

    const createAccount = () => {
        api
          .post("bank/conta/", {
            cliente: conta.cliente, 
            agencia: conta.agencia, 
            numero: conta.numero, 
            digito: conta.digito, 
            saldo: conta.saldo, 
            limite: conta.limite, 
            ativa: conta.ativa, 
          }).then(res => {
            console.log(res);
            if (res.status == 201){
                alert(res);
            }
        })
      }


    
    createAccount()
    
}

export default ContaDataCreator;
