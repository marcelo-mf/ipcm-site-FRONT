import styled from "styled-components";

const DayDiv = styled.div`

    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: white;

    padding: 20px 30px;

    border-left: ${props => props.member.sexo === 'M' ? 'solid 6px rgba(42, 62, 55)' : 'solid 6px rgba(42, 62, 55, 0.5)'};
    border-bottom: solid 1px #e7e7e7;

    width: 100%;

    button{
        position: absolute;
        top: 20px;
        right: 60px;

        border: none;
        border-radius: 6px;

        background-color: #FFFFFF;

        padding: 5px;

        cursor: pointer;

        //filter: drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.08));

        border: solid 1px #d9d9d9;
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
    }

    p{
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: regular;

        padding-top: 20px;

        line-height: 25px;
    }
`

export default DayDiv;