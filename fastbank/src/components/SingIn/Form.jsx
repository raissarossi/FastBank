import React, { useEffect } from 'react';
import { useState } from 'react';
import ClienteInfo from './ClienteInfo';
// import PersonalInfo from './ContactInfo';
// import OtherInfo from './AddressInfo';
import AddressInfo from './AddressInfo';
import ContactInfo from './ContactInfo';
import KindOfPerson from './KindOfPerson';
import PPInfo from './PPInfo';
import LPInfo from './LPInfo';
import api from '../../services/api';
import ContaDataCreator from './ContaDataCreator';
import { useNavigate } from 'react-router-dom';


function Form() {
  const [page, setPage] = useState(0);
  const rota = useNavigate()
  const FormTitles = ['Cliente Info', 'Address Infos', 'Contact Infos', 'Kind Of Person Infos', 'Other Infos'];
  const [formData, setFormData] = useState({
    //NAME
    nome_razaoSocial: "",
    nomeSocial_fantasia: "",
    data: "",
    senha: "",
    //CONTACT
    numero: "",
    email: "",
    observacao: "",
    //ADDRESS
    logradouro: "",
    bairro: "",
    cidade: "",
    uf: "",
    cep: "",
    //KIND OF PERSON
    kindOfPerson: "",
    //PHYSICAL PERSON
    cpf: "",
    rg: "",
    //LEGAL PERSON
    cnpj: "",
    inscricaoEstadual: "",
    inscricaoMunicipal: "",
  });

  // GET -> loja/clientes?numero=99999999
  //SE RETORNAR 0 = NÃO EXISTE NENHUM CADASTRO COM ESSE NÚMERO
  useEffect(()=>{
    if (formData.email){
      emailIsValid = true
    }
  }, [formData.email])

  const sendCliente = () => {
    api
      .post("bank/clientes/", {
        nome: formData.nome_razaoSocial,
        nomeSocial: formData.nomeSocial_fantasia,
        data_nascimento: formData.data,
        senha: formData.senha,
        telefone: formData.numero,
        email: formData.email,
        observacao: formData.observacao,
        logradouro: formData.logradouro,
        bairro: formData.bairro,
        cidade: formData.cidade,
        uf: formData.uf,
        cep: formData.cep,
        complemento: formData.complemento,
        type_person: formData.kindOfPerson,
        cpf: formData.cpf == "" ? null : formData.cpf,
        rg: formData.rg == "" ? null : formData.rg,
        cnpj: formData.cnpj == "" ? null : formData.cnpj,
        inscricaoEstadual: formData.inscricaoEstadual == "" ? null : formData.inscricaoEstadual,
        inscricaoMunicipal: formData.inscricaoMunicipal == "" ? null : formData.inscricaoMunicipal,

      }).then(res => {
        console.log(res);
        if (res.status == 201) {
          /*CRIAR CONTA*/
          ContaDataCreator(res.data.id)
          // <ContaDataCreator cliente={formData.nome}/>
          alert("CONTA CRIADA COM SUCESSO \nSUA CONTA É: ")
          /*REDIRECIONAMENTO*/

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
      return (formData.rg && formData.cpf && formData.senha) || (formData.cnpj && formData.inscricaoEstadual && formData.inscricaoMunicipal && formData.senha);
    }
    else if (page === 2) {
      return formData.nome_razaoSocial && formData.nomeSocial_fantasia && formData.data;
    }
    else if (page === 3) {
      return formData.logradouro && formData.bairro && formData.cidade && formData.uf && formData.cep && formData.complemento;
    }
    else if (page === 4) {
      return formData.numero && emailisvalid;
    }
    return false;
  };
  const isNextDisabled = !checkInputs();



  return (
    <div className='flex justify-end'>
      <div id="form" className="flex flex-col w-9/12 justify-center items-center h-screen bg-green-500">
        <div id="progressbar" className="h-3 bg-orange-500 flex items-center w-full rounded-full">
          <div
            style={{
              width:
                page === 0 ? "20%" : page === 1 ? "40%" : page === 2 ? "60%" : page === 3 ? "80%" : "100%",
            }}
            className="h-3 bg-black rounded-full"
          ></div>
        </div>
        <div id="form-container" className="w-full h-4/6 bg-red-400 flex flex-col justify-between">
          <div id="header" className="">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div id="body" className="">
            {PageDisplay()}
          </div>
          <div id="footer" className="">
            <button
              className="border hover:bg-slate-400 m-1 disabled:hidden"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              PREV
            </button>
            <button
              className="border bg-slate-300 hover:bg-slate-400 m-1 disabled:bg-slate-900"
              disabled={isNextDisabled}
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
            >
              {page === FormTitles.length - 1 ? "SUBMIT" : "NEXT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
