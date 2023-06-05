import React from 'react';
import Input from "../../General/Input";

function ClienteInfo({ formData, setFormData }) {
    return (
        <div id='sign-up-container' className='forms'>
            {/* <input type='number' required placeholder='Email...' value={formData.email} onChange={(event)=> setFormData({...formData, email: event.target.value})}/> */}
            <Input
                sign="up"
                tipo={'text'}
                texto={'Complete Name...'}
                maxLength={100}
                required
                valuei={formData.nome}
                act={(event) => setFormData({ ...formData, nome: event.target.value })} />
            <Input
                sign="up"
                tipo={'date'}
                texto={'Date of Birth...'}
                maxLength={10}
                required
                valuei={formData.dataNascimento}
                act={(event) => setFormData({ ...formData, dataNascimento: event.target.value })} />

        </div>
    );
}

export default ClienteInfo;
