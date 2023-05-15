import React, { useEffect, useState } from 'react';
import Input from "../../General/Input";

function PPInfo({ formData, setFormData }) {
    // physical person

    const [cpf, setCpf] = useState(formData.cpf)
    useEffect(() => {
        // xxx.xxx.xxx-xx
        console.log(cpf)
        if (cpf.length == 11) {
            setCpf(cpf.substring(0, 3) + '.' + cpf.substring(3, 6) + '.' + cpf.substring(6, 9) + '-' + cpf.substring(9, 11))
        }
        // else if (cpf.length != 14) {
        //         setFormData({ ...formData, cpf: "" })
        // }
        if (cpf.length < 14) {
            if (cpf.includes(".") || cpf.includes("-")) {
                setCpf(cpf.replace(".", "").replace("-", ""))
            }
        }
        setFormData({ ...formData, cpf: cpf })
    }, [cpf])

    const [rg, setRg] = useState(formData.rg)
    useEffect(() => {
        // xx.xxx.xxx-x
        console.log(rg)
        if (rg.length == 9) {
            setRg(rg.substring(0, 2) + '.' + rg.substring(2, 5) + '.' + rg.substring(5, 8) + '-' + rg.substring(8, 9))
        }
        if (rg.length < 12) {
            if (rg.includes(".") || rg.includes("-")) {
                setRg(rg.replace(".", "").replace("-", ""))
            }
        }
        setFormData({ ...formData, rg: rg })
    }, [rg])

    return (
        <div className='forms'>
            <Input
                sign="up"
                tipo={'num'}
                texto={'CPF...'}
                maxLength={11}
                required
                valuei={formData.cpf}
                act={(event) => {
                    setFormData({ ...formData, cpf: event.target.value });
                    setCpf(event.target.value)
                }} />

            <Input
                sign="up"
                tipo={'num'}
                texto={'RG...'}
                maxLength={9}
                required
                valuei={formData.rg}
                act={(event) => {
                    setFormData({ ...formData, rg: event.target.value })
                    setRg(event.target.value)
                }} />

            <Input
                sign="up"
                tipo={'password'}
                texto={'Password...'}
                maxLength={20}
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
