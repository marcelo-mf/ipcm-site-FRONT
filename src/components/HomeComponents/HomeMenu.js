import styled from "styled-components";
import { useState} from "react";
import HomeMenuOption from "../HomeComponents/HomeMenuOption";

export default function HomeMenu() {

    const [section, setSection] = useState('Sobre Nós');
    // const [y, setY] = useState(window.pageYOffset)

    // window.addEventListener("scroll", (event) => {
    //     setY(window.scrollY);
    //     console.log(y);
    // });
    return(
        <HomeMenuDiv>
                <HomeMenuOption text="Sobre Nós" section={section} setSection={setSection}/>
                <HomeMenuOption text="Programação" section={section} setSection={setSection}/>
                <HomeMenuOption text="Fale Conosco" section={section} setSection={setSection}/>
        </HomeMenuDiv>
    )
}

const HomeMenuDiv = styled.div`

    height: 45px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(42, 62, 55);

    gap: 75px;

    z-index: 10;

    position: sticky;
    top: 0px

`