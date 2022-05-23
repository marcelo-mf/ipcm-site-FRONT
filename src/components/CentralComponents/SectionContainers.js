import styled from "styled-components";

export const SectionsContainer =  styled.div`

    min-height: 100vh;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    background-color: #f5f5f5;

    padding: 110px;
`

export const SectionContainer =  styled.div`

    width: 800px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    padding-bottom: 60px;

    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 35px;
        font-weight: bold;

        margin-bottom: 50px;
    }
`