import Input from "../../General/Input";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";

const Forms = () => {
  const digitInput = useRef(null);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const rota = useNavigate()

  const Logar = () => {
    api.post('auth/jwt/create', {
      CPF_CNPJ: login,
      password: senha
    }).then((response) => {
      console.log(response)
      localStorage.setItem('dados', JSON.stringify(response.data));
      rota('/infossignin')
    })
      .catch((error) => console.log(error))
  }

  return (
    <div className="bg-light-blue3 dark:bg-black flex items-center p-2">
      <Input
        sign="in"
        tipo={'num'}
        obrigatorio={true}
        texto={'CPF / CNPJ'}
        maxLength={14}
        act={(event) => setLogin(event.target.value)}
      />
      <h1 className="text-white p-2">-</h1>

      <Input
        sign="in"
        tipo={'password'}
        obrigatorio={true}
        texto={'Password'}
        maxLength={20}
        act={(event) => setSenha(event.target.value)}
      />
      <button className="text-white" onClick={Logar}>
        <h1 className="border border-white rounded-lg ml-5 px-2 hover:border-2">OK</h1>
      </button>
    </div>
  )
}

export default Forms;
