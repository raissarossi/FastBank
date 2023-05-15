import React, { useEffect, useState } from 'react';
import Input from "../General/Input";
import axios from 'axios';

function AddressInfo({ formData, setFormData }) {
    const [cep, setCep] = useState(formData.cep)

    useEffect(() => {
        console.log(cep)
        if (cep.length == 8) {
            setCep(cep.substring(0, 5) + '-' + cep.substring(5, 8))
        }
        if (cep.includes("--")) {
            setCep(cep.replace("--", ""))
        }

        if (cep.length == 9) {
            consumirAPI()
        }

        if (cep.length < 9) {
            setFormData({ ...formData, logradouro: '', uf: '', bairro: '', cidade: '', complemento:''})
        }
    }, [cep])


    const consumirAPI = () => {
        axios.get(`https://cdn.apicep.com/file/apicep/${cep}.json`)
            .then(({data}) => {
                setFormData({ ...formData, logradouro: data.address, uf:data.state, bairro:data.district, cidade: data.city })
                console.log(formData);
            })
    }

    return (
        <div id='other-info-container' className='forms'>
            <Input
                tipo={'text'}
                texto={'Zip Code...'}
                maxLength={10}
                required
                // value={cep}
                // valuei={cep}
                valuei={formData.cep}
                act={
                    (event) => {
                        setFormData({ ...formData, cep: event.target.value });
                        setCep(event.target.value)
                    }
                } />

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
                texto={'Complement...'}
                maxLength={100}
                required
                valuei={formData.complemento}
                act={(event) => setFormData({ ...formData, complemento: event.target.value })} />

        </div>
    );
}

export default AddressInfo;