import { useEffect, useState } from "react";
import axios from "axios";
import { SectionContainer, SectionsContainer } from "../components/CentralComponents/SectionContainers";
import Member from "../components/MembersComponents/Member";
import styled from "styled-components";

export default function Members() {

    const [members, setMembers] = useState(null);
    const [refresh, setRefresh] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const [formData, setFormData] = useState({nome:'', sexo:'', email:'', telefone:''});
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {

        const promise = axios.get('http://localhost:5000/getMembers');

        promise.then((response) => {
            setMembers(response.data);
        })

        promise.catch((error) => {
            console.log(error)
        })

    }, [refresh])

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function addMember() {

        setIsDisabled(true)

        const promise = axios.post('http://localhost:5000/addMember', formData);

        promise.then((response) => {
            setShowAdd(false)
            setIsDisabled(false)
            setRefresh(!refresh)
        })

        promise.catch((error) => {
            setIsDisabled(false)
            console.log(error)
        })
    }

    while(members === null) return <h1>carregando</h1>

    console.log(formData)

    return(
        <SectionsContainer>
            <SectionContainer>
                <HeaderMembros>
                <div className="title-add">
                    <h1>Membros</h1>
                    <button onClick={()=> setShowAdd(!showAdd)}>Adicionar</button>
                </div>
                {showAdd && 
                    <div className="add-member">
                    <div className="top">
                        <input placeholder="nome" className="nome" type="text" name="nome" value={formData.nome} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <input placeholder="sexo" className="sexo" type="text" name="sexo" value={formData.sexo} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                    </div>
                    <div className="bottom">
                        <input placeholder="email" className="email" type="text" name="email" value={formData.email} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <input placeholder="telefone" className="telefone" type="text" name="telefone" value={formData.telefone} onChange={(e) =>handleChange(e)} disabled={isDisabled}/>
                        <button onClick={() => addMember()}>Enviar</button>
                    </div>
                </div>
                }
                </HeaderMembros>
                <Shadow>
                    {members.map(member=> (
                        <Member member={member} setRefresh={setRefresh} refresh={refresh}/>
                    ))}
                </Shadow>
            </SectionContainer>
        </SectionsContainer>
    )
}

const Shadow = styled.div`

    width: 100%;

    filter: drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.08));

    border-radius: 0 12px 12px 0;

    overflow: hidden;
`

const HeaderMembros = styled.div`

    width: 100%;

    .add-member{

        filter: drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.08));

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;

        gap: 15px;

        background-color: #ffffff;
        padding: 20px;

        border-radius: 8px;

        margin-bottom: 30px;

        .top{
            display: flex;
            align-items: center;
            justify-content: flex-start;

            gap: 15px;

            width: 100%;

            .nome{
                width: 90%;
            }

            .sexo{
                width: 10%;
            }
        }

        .bottom{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 15px;

            width: 100%;

            .telefone{
                width: 30%;
            }

            .email{
                width: 60%;
            }
        }

        button{
            height: 30px;
            width: 19%;
            border: none;
            border-radius: 8px;
            background-color: rgba(42, 62, 55);

            color: #ffffff;
            font-weight: 500;
            font-family: 'Roboto';

            cursor: pointer;
        }

        input{
            height: 30px;
            width: 60%;
            border: solid 1px #e7e7e7;
            border-radius: 8px;
            background-color: #f3f3f3;

            padding: 0 10px;
        }

    }

    .title-add{
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;

        button{
            margin-bottom: 50px;

            padding: 9px 30px;

            border: none;
            border-radius: 6px;
            background-color: rgba(42, 62, 55);

            color: #ffffff;
            font-weight: 500;
            font-family: 'Roboto';

            cursor: pointer;
        }
    }

`