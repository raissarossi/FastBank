import React, { useState } from 'react';
import Input from "../General/Input";

function PPInfo({ formData, setFormData }) {
    // physical person
    const [senha, setSenha] = useState('')
    const verify = () => {
        let confirm = false
        if(senha == formData.senha){
            confirm == true
        }
    }

    return (
        <div id='other-info-container' className='forms'>
            <Input
                tipo={'text'}
                texto={'CPF...'}
                maxLength={11}
                required
                valuei={formData.cpf}
                act={(event) => setFormData({ ...formData, cpf: event.target.value })} />

            <Input
                tipo={'text'}
                texto={'RG...'}
                maxLength={10}
                required
                valuei={formData.rg}
                act={(event) => setFormData({ ...formData, rg: event.target.value })} />

            <Input
                tipo={'password'}
                texto={'Password...'}
                maxLength={10}
                required
                valuei={formData.senha}
                act={(event) => setFormData({ ...formData, senha: event.target.value })} />
            
            {/* <Input
                tipo={'password'}
                texto={'Confirm Password...'}
                maxLength={10}
                required
                valuei={senha}
                act={(event) => {setSenha(event.target.value), verify()}} /> */}

        </div>
    );
}

export default PPInfo;
