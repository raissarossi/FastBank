import React from 'react';
import Input from "../General/Input";

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
                valuei={formData.nome_razaoSocial}
                act={(event) => setFormData({ ...formData, nome_razaoSocial: event.target.value })} />
            <Input
                sign="up"
                tipo={'text'}
                texto={'Nickname...'}
                maxLength={100}
                required
                valuei={formData.nomeSocial_fantasia}
                act={(event) => setFormData({ ...formData, nomeSocial_fantasia: event.target.value })} />
            <Input
                sign="up"
                tipo={'date'}
                texto={'Date of Birth...'}
                maxLength={10}
                required
                valuei={formData.data}
                act={(event) => setFormData({ ...formData, data: event.target.value })} />

        </div>
    );
}

export default ClienteInfo;
