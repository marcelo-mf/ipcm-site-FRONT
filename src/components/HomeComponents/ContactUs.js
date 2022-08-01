import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";

export default function ContactUs() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({nome:'' , telefone:'', email: '', mensagem:''});
    const [formErrors, setFormErrors] = useState({});

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function validadeForm(errors) {
        
        const telRegex =  /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
        const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        
        if(formData.nome === '') {errors.nameRequired = 'Este campo é obrigatório'};
        if(formData.telefone === '') {errors.telephoneRequired = 'Este campo é obrigatório'};
        if(formData.mensagem === '') {errors.messageRequired = 'Este campo é obrigatório'};
        if(!telRegex.test(formData.telefone)) {errors.telephoneInvalid = 'Insira um telefone válido'};
        if(formData.email !== '' && !emailRegex.test(formData.email)) {errors.emailInvalid = 'Insira um email válido'};

        setFormErrors(errors);
    }

    function sendMessage() {
        let errors = {};

        validadeForm(errors);
        
        if(Object.keys(errors).length > 0) return;

        setIsDisabled(true)

        const promise = axios.post('http://localhost:5000/addMessage', formData);

        promise.then((response) => {
            setIsDisabled(false)

            const inputs = document.querySelectorAll('.input');
            inputs.forEach(input => input.value ='');

        })

        promise.catch((error) => {
            setIsDisabled(false)
            console.log(error)
        })
    }

    return(
        <ContactUsDiv>
            <div className="inputs-div">
                <h1>Fale Conosco</h1>
                <p>Precisa de aconselhamento ou panana panana, preencha o formulario abaixo e mande sua mensagem que entraremos em contato</p>
                <div className="inputs">
                    <div className="info-inputs">
                        <label>Nome * <strong>{formErrors.nameRequired && formErrors.nameRequired}</strong></label>
                        <input className="input" type="text" name="nome" value={formData.nome} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <label>Telefone * <strong>{formErrors.telephoneRequired && formErrors.telephoneRequired} {(!formErrors.telephoneRequired && formErrors.telephoneInvalid) && formErrors.telephoneInvalid}</strong></label>
                        <input className="input" type="tel" name="telefone" value={formData.telefone} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <label>Email <strong>{(formData.email !== '' && formErrors.emailInvalid) && formErrors.emailInvalid}</strong></label>
                        <input className="input" type="text" name="email" value={formData.email} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                    </div>
                    <div className="message-input">
                        <label>Mensagem * <strong>{formErrors.messageRequired && formErrors.messageRequired}</strong></label>
                        <textarea className="input" type="text" name="mensagem" value={formData.mensagem} onChange={(e) =>handleChange(e)} disabled={isDisabled}></textarea>
                    </div>
                </div>
                <div className="enviar">
                    <p>* itens obrigatórios</p>
                    <button onClick={() => sendMessage()}>Enviar</button>
                </div>
            </div>
        </ContactUsDiv>
    )
    
}

const ContactUsDiv = styled.div`

    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: white;

    margin-bottom: 80px;

    .enviar{
        padding: 0;
        margin: 0;

        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            height: 35px;
            width: 200px;

            border: none;

            background-color: rgba(42, 62, 55);

            color: #FFFFFF;
            font-weight: 600;

            cursor: pointer;

            :hover{
                background-color: rgba(42, 62, 55, 0.9);
            }
        }
    }

    .inputs-div{
        width: 50%;
        max-width: 950px;

        padding: 90px 0;

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 40px;
            font-weight: bold;
        }

        h2{
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            font-weight: bold;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 300;
            color: #323232;
            line-height: 23px;

            margin-top: 30px;
            margin-bottom: 40px;
        }

        .inputs{

            width: 100%;
            height: 220px;

            padding: 0;

            display: flex;
            justify-content: space-between;

            gap: 20px;

            label{
                font-family: 'Roboto', sans-serif;
                font-size: 18px;
                font-weight: 400;

                strong{
                    color: red;
                    font-size: 14px;
                    font-weight: 300;

                    margin-bottom: 2px;
                }
            }

            input{
                border: none;
                background-color: #f1f1f1;

                outline: none;
            }

            .info-inputs{
                height: auto;
                width: 50%;
                padding: 0;

                display: flex;
                flex-direction: column;
                justify-content: space-between;

                input{
                    width: 100%;
                    height: 40px;

                    padding: 0 10px;
                }
            }

            .message-input{
                height: auto;
                width: 50%;
                padding: 0;

                display: flex;
                flex-direction: column;
                justify-content: space-between;

                textarea{
                    width: 100%;
                    height: 195px;

                    resize: none;

                    padding: 10px 10px;

                    border: none;
                    background-color: #f1f1f1;
                    outline: none;
                }
            }
        }
    }  
`