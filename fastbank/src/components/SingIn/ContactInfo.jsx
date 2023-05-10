import React, { useEffect, useState } from 'react';
import Input from "../General/Input";

function ContactInfo({ formData, setFormData }) {

    const [phone, setPhone] = useState(formData.numero)

    useEffect(() => {
        console.log(phone)
        if (phone.length == 11) {
            setPhone('(' + phone.substring(0, 2) + ')' + phone.substring(2, 7) + '-' + phone.substring(7, 11))
        }
        if (phone.length < 14) {
            if (phone.includes("(") || phone.includes(")") || phone.includes("-")) {
                setPhone(phone.replace("-", "").replace("(", "").replace(")", ""))
            }
        }
        setFormData({ ...formData, numero: phone })
    }, [phone])

    return (
        <div id='personal-info-container' className='forms'>
            <Input
                tipo={'num'}
                texto={'Phone Number...'}
                maxLength={11}
                required
                valuei={formData.numero}
                act={(event) => {
                    setFormData({ ...formData, numero: event.target.value });
                    setPhone(event.target.value)
                }} />

            <Input
                tipo={'email'}
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
