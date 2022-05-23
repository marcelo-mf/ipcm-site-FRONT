import styled from "styled-components";
import { useState } from 'react';
import axios from "axios";

export default function ContactUs() {

    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({nome:'' , telefone:'', email: '', mensagem:''});

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function sendMessage() {

        setIsDisabled(true)

        const promise = axios.post('http://localhost:5000/addMessage', formData);

        promise.then((response) => {
            setIsDisabled(false)

            const inputs = document.querySelectorAll('input');

            inputs.forEach(input => input.value ='');
        })

        promise.catch((error) => {
            setIsDisabled(false)
            console.log(error)
        })
    }

    console.log(formData);

    return(
        <ContactUsDiv>
            <div>
                <h1>Fale Conosco</h1>
                <p>Precisa de aconselhamento ou panana panana, preencha o formulario abaixo e mande sua mensagem que entraremos em contato</p>
                <div className="inputs">
                    <div className="info-inputs">
                        <label>Nome</label>
                        <input type="text" name="nome" value={formData.nome} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <label>Telefone</label>
                        <input type="text" name="telefone" value={formData.telefone} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <label>Email</label>
                        <input type="text" name="email" value={formData.email} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                    </div>
                    <div className="message-input">
                        <label>Mensagem</label>
                        <input type="text" name="mensagem" value={formData.mensagem} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                    </div>
                </div>
                <div className="enviar">
                    <p>* itens obrigatórios</p>
                    <button onClick={() => sendMessage()}>Enviar</button>
                </div>
            </div>
            <div className="separator"></div>
            <div className="info-map">
                <div className="infos">
                    <h2>Localização</h2>
                    <p>R. Nove de Julho, 348 <br/> Centro, Mairinque - SP <br/> 18120-000</p>
                    <h2>Telefone</h2>
                    <p>(11) 97540-0050</p>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.54107130336!2d-47.18240049881134!3d-23.54900322318405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc23003ede17cefd9!2sIgreja%20presbiteriana%20Central%20de%20Mairinque!5e0!3m2!1spt-BR!2sbr!4v1652470100625!5m2!1spt-BR!2sbr" title="map" width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
            border-radius: 8px;

            background-color: rgba(42, 62, 55);

            color: #FFFFFF;
            font-weight: 600;

            cursor: pointer;
        }
    }

    .separator{
        
        width: 100%;
        height: 1px;

        padding: 0;

        background-color: grey;
    }

    .info-map{
        width: 730px;

        padding: 0;

        display: flex;
        justify-content: space-between;

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

        iframe{
            
            border-radius: 15px;
            filter: drop-shadow(0 0 0.2rem #e5e5e5);
        }
    }

    div{
        width: 730px;

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
            }

            input{
                border-radius: 8px;

                border: solid 1px grey;
            }

            .info-inputs{
                height: auto;

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

                padding: 0;

                display: flex;
                flex-direction: column;
                justify-content: space-between;

                input{
                    width: 100%;
                    height: 195px;

                    padding: 0 10px;
                }
            }
        }
    }  
`