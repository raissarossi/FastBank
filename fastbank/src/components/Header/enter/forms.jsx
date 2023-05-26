import Input from "../../General/Input";
import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
      // xxx.xxx.xxx-xx
      console.log(login)
      if (login.length == 11) {
          setLogin(login.substring(0, 3) + '.' + login.substring(3, 6) + '.' + login.substring(6, 9) + '-' + login.substring(9, 11))
      }
      if (login.length < 14) {
          if (login.includes(".") || login.includes("-")) {
              setLogin(login.replace(".", "").replace("-", ""))
          }
      }
  }, [login])

  return (
    <div className="bg-light-blue3 dark:bg-black flex items-center p-2 justify-between">
      <div className="flex">
        <Input
          sign="in"
          tipo={'num'}
          obrigatorio={true}
          texto={'CPF / CNPJ'}
          maxLength={14}
          valuei={login}
          act={(event) => setLogin(event.target.value)}
        />
        <h1 className="text-white p-2">-</h1>

        <Input
          sign="in"
          tipo={'password'}
          obrigatorio={true}
          texto={'Password'}
          maxLength={20}
          valuei={senha}
          act={(event) => setSenha(event.target.value)}
        />
        <button className="text-white" onClick={()=>Logar()}>
          <h1 className="border border-white rounded-lg ml-5 px-2 hover:border-2">OK</h1>
        </button>
      </div>
      <button className="text-white" onClick={()=>rota('/signup')}>
        <h1 className="border border-white rounded-lg ml-5 px-2 hover:border-2">Start an account</h1>
      </button>
    </div>
  )
}

export default Forms;
