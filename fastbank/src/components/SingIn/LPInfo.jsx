import React from 'react';
import Input from "../General/Input";

function LPInfo({formData, setFormData}) {
    // Legal Person
    return (
        <div id='other-info-container' className='forms'>
            <Input
                tipo={'text'}
                texto={'CNPJ...'}
                maxLength={25}
                required
                valuei={formData.cnpj}
                act={(event) => setFormData({ ...formData, cnpj: event.target.value })} />

                <Input
                tipo={'text'}
                texto={'InscricaoEstadual...'}
                maxLength={30}
                required
                valuei={formData.inscricaoEstadual}
                act={(event) => setFormData({ ...formData, inscricaoEstadual: event.target.value })} />
            

                <Input
                tipo={'text'}
                texto={'InscricaoMunicipal...'}
                maxLength={30}
                required
                valuei={formData.inscricaoMunicipal}
                act={(event) => setFormData({ ...formData, inscricaoMunicipal: event.target.value })} />
            
            <Input
                tipo={'password'}
                texto={'Password...'}
                maxLength={10}
                required
                valuei={formData.senha}
                act={(event) => setFormData({ ...formData, senha: event.target.value })} />
        </div>
    );
}

export default LPInfo;
