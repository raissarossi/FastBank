import React from 'react';
import Input from "../General/Input";

function AddressInfo({ formData, setFormData }) {
    return (
        <div id='other-info-container' className='forms'>
            <Input
                tipo={'text'}
                texto={'Address...'}
                maxLength={100}
                required
                valuei={formData.logradouro}
                act={(event) => setFormData({ ...formData, logradouro: event.target.value })} />

            <Input
                tipo={'text'}
                texto={'Neighborhood...'}
                maxLength={50}
                required
                valuei={formData.bairro}
                act={(event) => setFormData({ ...formData, bairro: event.target.value })} />

            <Input
                tipo={'text'}
                texto={'City...'}
                maxLength={50}
                required
                valuei={formData.cidade}
                act={(event) => setFormData({ ...formData, cidade: event.target.value })} />

            <Input
                tipo={'text'}
                texto={'UF...'}
                maxLength={2}
                required
                valuei={formData.uf}
                act={(event) => setFormData({ ...formData, uf: event.target.value })} />

            <Input
                tipo={'text'}
                texto={'Zip Code...'}
                maxLength={10}
                required
                valuei={formData.cep}
                act={(event) => setFormData({ ...formData, cep: event.target.value })} />

            <Input
                tipo={'text'}
                texto={'Complement...'}
                maxLength={100}
                required
                valuei={formData.complemento}
                act={(event) => setFormData({ ...formData, complemento: event.target.value })} />

        </div>
    );
}

export default AddressInfo;
