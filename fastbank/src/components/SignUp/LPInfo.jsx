import React, { useEffect, useState } from 'react';
import Input from "../General/Input";

function LPInfo({ formData, setFormData }) {
    // Legal Person
    const [cnpj, setCnpj] = useState(formData.cnpj)
    useEffect(() => {
        // xx.xxx.xxx/xxxx-xx
        console.log(cnpj)
        if (cnpj.length == 14) {
            setCnpj(cnpj.substring(0, 2) + '.' + cnpj.substring(2, 5) + '.' + cnpj.substring(5, 8) + '/' + cnpj.substring(8, 12) + '-' + cnpj.substring(12, 14))
        }
        if (cnpj.length < 18) {
            if (cnpj.includes(".") || cnpj.includes("-") || cnpj.includes("/")) {
                setCnpj(cnpj.replace(".", "").replace("-", "").replace("/", ""))
            }
        }
        setFormData({ ...formData, cnpj: cnpj })
    }, [cnpj])

    return (
        <div id='other-info-container' className='forms'>
            <Input
                sign="up"
                tipo={'text'}
                texto={'CNPJ...'}
                maxLength={14}
                required
                valuei={formData.cnpj}
                act={(event) => {
                    setFormData({ ...formData, cnpj: event.target.value });
                    setCnpj(event.target.value)
                }} />

            <Input
                sign="up"
                tipo={'text'}
                texto={'InscricaoEstadual...'}
                maxLength={9}
                required
                valuei={formData.inscricaoEstadual}
                act={(event) => setFormData({ ...formData, inscricaoEstadual: event.target.value })} />


            <Input
                sign="up"
                tipo={'text'}
                texto={'InscricaoMunicipal...'}
                maxLength={11}
                required
                valuei={formData.inscricaoMunicipal}
                act={(event) => setFormData({ ...formData, inscricaoMunicipal: event.target.value })} />

            <Input
                sign="up"
                tipo={'password'}
                texto={'Password...'}
                maxLength={20}
                required
                valuei={formData.senha}
                act={(event) => setFormData({ ...formData, senha: event.target.value })} />
        </div>
    );
}

export default LPInfo;
