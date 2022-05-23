import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

export default function Login({showLogin, setShowLogin}) {

    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({usuario: '', senha:''});
    const navigate = useNavigate();

    function login() {

        setIsDisabled(true)

        const promise = axios.post('http://localhost:5000/login', formData);

        promise.then((response) => {
            setIsDisabled(false)
            navigate("/central")
        })

        promise.catch((error) => {
            setIsDisabled(false)
            console.log(error)
        })
    }

    function handleClick() {
        setShowLogin(!showLogin)
    }

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return(
        <LoginDiv>
            <LoginContainer>
                <IoClose onClick={() => handleClick()} className="close" color="#000000" size={30}/>
                <h1>Fazer Login</h1>
                <input type="text" placeholder="usuario" name="usuario" value={formData.usuario} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                <input type="password" placeholder="senha" name="senha" value={formData.senha} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                <button onClick={() => login()}>Entrar</button>
            </LoginContainer>
        </LoginDiv>
    )
    
}

const LoginDiv = styled.div`

   width: 100%;
   height: 100vh;

   position: fixed;
   top: 0;
   left: 0;

   background-color: rgb(0, 0, 0, 0.4);

   z-index: 20;

   display: flex;
   justify-content: center;
   align-items: center;
    
`

const LoginContainer = styled.div`

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 20px;

    width: 400px;
    height: 600px;

    border-radius: 20px;

    background-color: #FFFFFF;

    z-index: 21;

    .close{
        position: absolute;
        top: 25px;
        right: 25px;

        cursor: pointer;
    }

    h1{
        font-family: 'Roboto';
        font-size: 30px;
        font-weight: 500;

        margin-bottom: 60px;
    }

    input{
        height: 45px;
        width: 70%;

        border: solid 1px grey;
        border-radius: 8px;

        padding: 0 10px;
    }

    button{
        height: 45px;
        width: 70%;

        border-radius: 8px;
        border: none;

        background-color: rgba(42, 62, 55);

        color: white;
        font-size: 20px;
        font-weight: 500;

        cursor: pointer;
    }
    
`