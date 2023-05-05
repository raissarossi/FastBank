import React from 'react';
import Input from "../General/Input";

function ContactInfo({ formData, setFormData }) {
    return (
        <div id='personal-info-container' className='forms'>
            <Input
                tipo={'phone'}
                texto={'Phone Number...'}
                maxLength={15}
                required
                valuei={formData.numero}
                act={(event) => setFormData({ ...formData, numero: event.target.value })} />
           
            <Input
                tipo={'text'}
                texto={'Email...'}
                maxLength={100}
                required
                valuei={formData.email}
                act={(event) => setFormData({ ...formData, email: event.target.value })} />
            
            <Input
                tipo={'text'}
                texto={'Comments...'}
                maxLength={100}
                required
                valuei={formData.observacao}
                act={(event) => setFormData({ ...formData, observacao: event.target.value })} />

        </div>
    );
}

export default ContactInfo;
