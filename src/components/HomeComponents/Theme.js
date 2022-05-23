import { Parallax } from "react-parallax";
import styled from "styled-components";
import img from "../../assets/1553703831392.jpeg"

const ThemeDiv = () => (
    <Parallax className="theme" bgImage={img} strength={900}>
        <Theme><h1>Alguma frase qualquer</h1><br/><h3>Alguma frase qualquer</h3></Theme>
    </Parallax>
)

const Theme = styled.div`

    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 45px;
        font-weight: bold;
        color: white;

        text-align: center;

        margin-top: 22px;
    }

    h3{
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        font-weight: regular;
        color: white;

        text-align: center;
        margin-top: 15px;
    }

    filter: drop-shadow(0 0 2rem black);
`

export default ThemeDiv;