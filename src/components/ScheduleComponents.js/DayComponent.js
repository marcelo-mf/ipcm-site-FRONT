import styled from "styled-components";

export default function Day({day, schedule}) {

    console.log(day, schedule);

    return(
        <DayDiv>
            <h2>{day.nome}</h2>
            {schedule.map(s => s.diaId === day.id && (
                <p>{s.hora}h - {s.nome}</p>
            ))}
            
        </DayDiv>
    )
}

const DayDiv = styled.div`

    background-color: white;

    padding: 20px 30px;

    border-left: solid 6px rgba(42, 62, 55);

    width: 100%;

    margin-bottom: 20px;

    border-radius: 0px 15px 15px 0px;

    filter: drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.08));

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 20px;
        font-weight: bold;

        margin-bottom: 25px;
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: regular;

        line-height: 25px;
    }
`