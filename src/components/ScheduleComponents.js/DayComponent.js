import styled from "styled-components";

export default function Day({day, schedule}) {

    return(
        <DayDiv>
            <div className="day-container">
            <h2>{day.nome}</h2>
            </div>
            <div className="events-container">
                {schedule.map(s => s.diaId === day.id && (
                    <p><strong>{s.hora}h</strong> - {s.nome}</p>
                ))}
            </div>
        </DayDiv>
    )
}

const DayDiv = styled.div`

    width: 300PX;
    height: 300PX;

    background-color: white;

    .day-container{

        display: flex;
        align-items: center;

        padding: 0 20px;

        height: 50px;
        width: 100%;

        background-color: rgba(42, 62, 55, 0.8);

        h2{
            color: #FFFFFF;
            font-family: 'Roboto', sans-serif;
            font-size: 20px;
            font-weight: bold;
    }
    }

    .events-container{

        padding: 20px;

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            font-weight: regular;

            line-height: 30px;
        }

        strong{
            font-weight: 800;
        }
    } 
`