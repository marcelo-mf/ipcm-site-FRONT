import styled from "styled-components";
import themeImg from "../../assets/Group2cover.png"

export default function Theme() {

    return(
        <ThemeDiv>
            <h1>BEM-VINDO AO SITE DA<br/>IGREJA PRESBITERIANA CENTRAL DE MAIRINQUE</h1>
        </ThemeDiv>
    )
}

const ThemeDiv = styled.div`

    margin-top: -90px;

    height: 700px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${themeImg});
    background-size: cover;

    h1{
        color: white;

        

        text-align: center;
        line-height: 60px;
        font-size: 40px;
        font-weight: 700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`