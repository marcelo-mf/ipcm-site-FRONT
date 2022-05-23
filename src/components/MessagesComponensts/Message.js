import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import axios from "axios";

export default function Message({message, setRefresh, refresh}) {

    function removeMessage(id) {

        const promise = axios.delete(`http://localhost:5000/removeMessage/${id}`);

        promise.then((response) => {
            setRefresh(!refresh)
        })

        promise.catch((error) => {
            console.log(error)
        })
    }

    function markAsRead(id, value) {

        const promise = axios.put(`http://localhost:5000/markAsRead/${id}`, {value: value});

        promise.then((response) => {
            setRefresh(!refresh)
        })

        promise.catch((error) => {
            console.log(error)
        })
    }

    return(
        <DayDiv key={message.id} read={message.read}>
                <IoClose className="close" color="#000000" size={25} onClick={() => removeMessage(message.id)}/>
                <button onClick={() => markAsRead(message.id, message.read)}>{message.read === 0 ? 'Marcar como lida' : 'Marcar como não lida'}</button>
                <h2>{message.nome}</h2>
                <spam>{message.telefone}</spam>
                <spam>{message.email}</spam>
                <p>{message.mensagem}</p>
        </DayDiv>
    )
}

const DayDiv = styled.div`

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    background-color: ${props => props.read === 1 ? '#f9f9f9' : '#FFFFFF'};

    padding: 20px 30px;

    border: ${props => props.read === 1 ? 'solid 1px #d6d6d6' : ''};

    border-left: ${props => props.read === 1 ? 'solid 6px #d6d6d6' : 'solid 6px rgba(42, 62, 55)'};

    width: 100%;

    margin-bottom: 20px;

    

    border-radius: 0px 15px 15px 0px;

    filter: ${props => props.read === 1 ? '' : 'drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.08))'};

    button{
        position: absolute;
        top: 20px;
        right: 60px;

        border-radius: 6px;
        border: solid 1px #d9d9d9;

        background-color: ${props => props.read === 1 ? '#f9f9f9' : '#FFFFFF'};

        padding: 5px;

        cursor: pointer;
    }

    button:hover{
        border: solid 1px rgba(42, 62, 55);
        background-color: rgba(42, 62, 55);

        color: #FFFFFF;
    }

    .close{
        position: absolute;

        top: 20px;
        right: 20px;

        cursor: pointer;
    }

    spam{
        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: 300;
        line-height: 20px;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;

        margin-bottom: 10px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: regular;

        padding-top: 20px;

        line-height: 25px;
    }
`