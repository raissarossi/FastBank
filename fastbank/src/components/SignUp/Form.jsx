import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
import ClienteInfo from './components/ClienteInfo';
import AddressInfo from './components/AddressInfo';
import ContactInfo from './components/ContactInfo';
import KindOfPerson from './components/KindOfPerson';
import PPInfo from './components/PPInfo';
import LPInfo from './components/LPInfo';
import retangulo1Light from '../../Images/Light/rectangle1Light.png';
import retangulo2Light from '../../Images/Light/rectangle2Light.png';
import retangulo1Dark from '../../Images/Dark/rectangle1Dark.png';
import retangulo2Dark from '../../Images/Dark/rectangle2Dark.png';
import ToggleTheme from '../Header/ToggleTheme';
import api from '../../services/api';



function Form() {
  const [page, setPage] = useState(0);
  const [user, setUser] = useState("");
  const rota = useNavigate()
  const FormTitles = ['Kind Of Person Infos', 'Client Info', 'Client Info', 'Address Infos', 'Contact Infos'];

  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    telefone: "",
    email: "",
    observacao: "",
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    numero: "",
    complemento: "",
    kindOfPerson: "",
    cpf_cnpj: "",

    rg: "",
    inscricaoEstadual: "",
    inscricaoMunicipal: "",

    senha: "",
  });

  const sendCliente = () => {
    api.post("bank/clientes/", {
        nome: formData.nome,
        data_nascimento: formData.dataNascimento,
        telefone: formData.telefone,
        email: formData.email,
        observacao: formData.observacao,
        logradouro: formData.logradouro,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        complemento: formData.complemento,
        type_person: formData.kindOfPerson,
        password: formData.senha,
        CPF_CNPJ: formData.cpf_cnpj
      }).then(res => {
        console.log(res);
        if (res.status == 201) {
          alert("CONTA CRIADA COM SUCESSO")
          setUser(res.data)
        } else {
          alert(res.response.data)
        }
      })
  }

  const PageDisplay = () => {
    if (page === 0) {
      return <KindOfPerson formData={formData} setFormData={setFormData} />;
    }
    else if (page === 1 && formData.kindOfPerson == 'F') {
      return <PPInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 1 && formData.kindOfPerson == 'J') {
      return <LPInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 2) {
      return <ClienteInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 3) {
      return <AddressInfo formData={formData} setFormData={setFormData} />;
    }
    else if (page === 4) {
      return <ContactInfo formData={formData} setFormData={setFormData} />;
    }
  };

  const checkInputs = () => {
    if (page === 0) {
      return formData.kindOfPerson;
    }
    else if (page === 1) {
      if (formData.rg.length == 12 && formData.cpf_cnpj.length == 14 || formData.cpf_cnpj.length == 18 && formData.inscricaoEstadual.length == 9 && formData.inscricaoMunicipal.length == 11) {
        return (formData.rg && formData.cpf_cnpj && formData.senha) || (formData.cpf_cnpj && formData.inscricaoEstadual && formData.inscricaoMunicipal && formData.senha);
      }
    }
    else if (page === 2) {
      return formData.nome && formData.dataNascimento;
    }
    else if (page === 3) {
      if (formData.cep.length == 9) {
        return formData.logradouro && formData.bairro && formData.cidade && formData.uf && formData.cep && formData.numero && formData.complemento;
      }
    }
    else if (page === 4) {
      if (formData.telefone.length == 14 && (/^\S+$/.test(formData.email) || formData.email == "")) {
        return formData.telefone || formData.email;
      }
      else if (formData.telefone == "" && (/^\S+$/.test(formData.email)) && formData.email.includes("@")) {
        return formData.telefone || formData.email;
      }
    }
    return false;
  };
  const isNextDisabled = !checkInputs();

  useEffect(() => {
    if (formData.kindOfPerson == 'J') {
      api.post("bank/contaspj/", {
        cliente: user.id,
        inscricaoEstadual: formData.inscricaoEstadual,
        inscricaoMunicipal: formData.inscricaoMunicipal,
    }).then(res=>{
      console.log(res)
      alert("PJ CRIADO COM SUCESSO")
    })
    }
    else if (formData.kindOfPerson == 'F') {
      api.post("bank/contaspf/", {
        cliente: user.id,
        rg: formData.rg,
    }).then(res=>{
      console.log(res)
      alert("PF CRIADO COM SUCESSO")
    })
    }

  }, [user])


  return (
    <div className='z-0 bg-gradient-to-b from-light-blue3 to-light-blue1 dark:from-black dark:from-10% dark:to-dark-blue3'>
      <div className='z-50 absolute'>
        <ToggleTheme />
      </div>
      <>
        <div className='absolute w-full left-0 -top-1 z-20'>
          <img src={retangulo1Light} className='dark:hidden' />
          <img src={retangulo1Dark} className='hidden dark:flex' />
        </div>
        <div className='absolute w-full left-0 -top-1 z-10'>
          <img src={retangulo2Light} className='dark:hidden' />
          <img src={retangulo2Dark} className='hidden dark:flex' />
        </div>
      </>
      <div className='flex justify-center h-screen items-center  sm:justify-end'>
        <div id="form" className="flex flex-col z-30 justify-between items-center h-5/6 bg-white p-5 rounded-3xl w-10/12 dark:bg-black dark:text-white
        sm:rounded-l-[50px] sm:rounded-r-none sm:w-6/12 sm:h-screen sm:px-10 sm:py-36">
          <>
            <div id="header" className='w-full flex flex-col h-1/6'>
              <>
                <div id="progressbar" className="h-3 flex items-center w-full rounded-full bg-light-blue_grey1 dark:bg-dark-blue_grey2">
                  <div
                    style={{
                      width:
                        page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%",
                    }}
                    className="h-3 rounded-full bg-light-blue2 dark:bg-dark-blue2" />
                </div>
              </>
              <div id="title" className="pt-4 sm:pt-10">
                <h1 className='title1'>{FormTitles[page]}</h1>
              </div>
            </div>
          </>
          <>
            <div id="form-container" className="w-full mt-3 sm:mt-4 h-full flex flex-col justify-between">
              <div id="body">
                {PageDisplay()}
              </div>
              <div className='flex flex-col items-center'>
                <div id="footer" className="flex items-center justify-between w-full">
                  <>
                    <button
                      className="btnSignUpBack" disabled={page === 0}
                      onClick={() => { setPage((currPage) => currPage - 1); }}
                    >BACK</button>
                  </>
                  <>
                    <button className="btnSignUpNext" disabled={isNextDisabled}
                      onClick={() => {
                        if (page === FormTitles.length - 1) {
                          console.log(formData);
                          sendCliente()
                          setTimeout(() => {
                            rota("/")
                          }, 2000);
                        } else {
                          setPage((currPage) => currPage + 1);
                        }
                      }}
                    >{page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}</button>
                  </>
                </div>
                <div className='flex pt-3 mt-2 sm:mt-8 text-sm sm:text-lg lg:text-xl' >
                  <h2 className='p-1'>Already have an account?</h2>
                  <button className='p-1 text-dark-blue1' onClick={() => { rota("/") }}>Sign In</button>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}

export default Form;
