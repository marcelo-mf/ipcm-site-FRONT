import styled from "styled-components";
import { useState, useEffect } from "react";
import Day from "../ScheduleComponents.js/DayComponent";
import axios from "axios";

export default function Schedule(){ 
    
    const [schedule, setSchedule] = useState(null);
    const [days, setDays] = useState(null);

    useEffect(() => {

        const promise = axios.get('http://localhost:5000/getSchedule');

        promise.then((response) => {
            setSchedule(response.data.schedule);
            setDays(response.data.days);
        })

        promise.catch((error) => {
            console.log(error)
        })

    }, [])

    while(days === null) return <h1>carregando</h1>
    while(schedule === null) return <h1>carregando</h1>

    return (
    <ScheduleDiv>
        <div className="schedule-container">
            {days.map(day => (
                <Day day={day} schedule={schedule}/>
            ))}
        </div>
    </ScheduleDiv>

)

}

const ScheduleDiv = styled.h1`

    .schedule-container{

        width: 100%;
        height: 500PX;

        display: flex;
        justify-content: center;
        align-items: center;

        gap: 30px;

        padding: 50px 0;

        background-color: rgba(42, 62, 55, 0.9);

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 45px;
            font-weight: bold;
            color: #FFFFFFFF;

            margin-bottom: 40px;
        }
    }
`

