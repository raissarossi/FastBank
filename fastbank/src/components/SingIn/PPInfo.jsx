import React from 'react';
import Input from "../General/Input";

function PPInfo({ formData, setFormData }) {
    // physical person
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

        </div>
    );
}

export default PPInfo;
