import { Parallax } from "react-parallax";
import styled from "styled-components";
import img from "../../assets/1553703831392.jpeg"
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

    <Parallax className="schedule" bgImage={img} strength={900} blur={0}>
        <ScheduleDiv>
            <div>
            <h1>Programação</h1>
                {days.map(day => (
                    <Day day={day} schedule={schedule}/>
                ))}
            </div>
        </ScheduleDiv>
    </Parallax>
)

}

const ScheduleDiv = styled.h1`

    div{

        width: 730px;

        display: flex;
        flex-direction: column;

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 45px;
            font-weight: bold;
            color: #FFFFFFFF;

            margin-bottom: 40px;
        }

        h2{
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            font-weight: bold;
            color: #000000;
        }
    }
    
    margin-top: 22px;

    filter: drop-shadow(0 0 2rem black);
`

