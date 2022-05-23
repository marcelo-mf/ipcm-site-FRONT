import styled from "styled-components";
import { IoClose, IoAddSharp } from "react-icons/io5";
import axios from "axios";
import { useState } from "react";

export default function CentralDay({day, schedule, showAdd, setShowAdd, refresh, setRefresh}) {

    const [isDisabled, setIsDisabled] = useState(false);
    const [formData, setFormData] = useState({nome:'' , hora:'', diaId: showAdd});

    function handleChange(e, dayId) {
        setFormData({...formData, [e.target.name]: e.target.value, diaId: dayId})
    }

    console.log(formData);

    function addEvent() {

        setIsDisabled(true)

        const promise = axios.post('http://localhost:5000/addEvent', formData);

        promise.then((response) => {
            setShowAdd(0)
            setIsDisabled(false)
            setRefresh(!refresh)
        })

        promise.catch((error) => {
            setIsDisabled(false)
            console.log(error)
        })
    }

    function removeEvent(id) {

        console.log(id)

        const promise = axios.delete(`http://localhost:5000/removeEvent/${id}`);

        promise.then((response) => {
            setRefresh(!refresh)
        })

        promise.catch((error) => {
            console.log(error)
        })
    }

    function setShowAdds(dayId) {
        if(showAdd === dayId) {
            setShowAdd(0)
            return
        }

        setShowAdd(dayId)
    }

    return(
        <DayDiv>
            <div className="weekname-div">
                <h2>{day.nome}</h2>
                <IoAddSharp className="add" color="#000000" size={15} onClick={() => setShowAdds(day.id)}/>
            </div>
            {showAdd === day.id &&
                <div className="create">
                <input placeholder="Nome" type="text" name="nome" value={formData.nome} onChange={(e) =>handleChange(e, day.id)} disabled={isDisabled}/>
                <input placeholder="Hora" className="hora" type="text" name="hora" value={formData.hora} onChange={(e) =>handleChange(e, day.id)} disabled={isDisabled}/>
                <button onClick={() => addEvent()} isDisabled={isDisabled}>Adicionar</button>
            </div>
            }
            <div>
                {schedule.map(s => s.diaId === day.id && (
                    <div className="evento">
                        <p>{s.hora}h - {s.nome}</p>
                        <IoClose className="close" color="#000000" size={15} onClick={() => removeEvent(s.id)}/>
                    </div>
                ))}
            </div>
        </DayDiv>
    )
}

const DayDiv = styled.div`

    display: flex;
    flex-direction: column;

    background-color: white;

    padding: 0 30px;

    border-left: solid 6px rgba(42, 62, 55);

    width: 100%;

    margin-bottom: 20px;

    border-radius: 0px 15px 15px 0px;

    filter: drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.08));

    .create{
        margin-bottom: 20px;

        display: flex;
        justify-content: flex-start;
        align-items: center;

        gap: 1%;

        input{
            height: 30px;
            width: 60%;
            border: solid 1px #e7e7e7;
            border-radius: 8px;
            background-color: #f3f3f3;

            padding: 0 10px;
        }

        .hora{
            width: 19%;
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
    }

    .weekname-div{
        display: flex;
        align-items: center;
        justify-content: flex-start;

        gap: 10px;

        .add{
           
            border-radius: 200px;

            background-color: #e7e7e7;

            padding: 1px;

            cursor: pointer;
        }

    }

    .evento{
        background-color: #FFFFFF; 
        margin-bottom: 20px;

        padding: 5px 10px;

        border-radius: 8px;
        border: solid 1px #d9d9d9;

        display: flex;
        justify-content: space-between;
        align-items: center;

        //filter: drop-shadow(0px 0px 3px rgb(0, 0, 0, 0.2));

        .close{
            cursor: pointer;
        }

    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;

        padding: 20px 0;

    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: 500;

        color: #000000;

        line-height: 25px;

        padding-left: 5px;
    }
`