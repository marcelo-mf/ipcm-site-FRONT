import styled from "styled-components";
import { useEffect, useState} from "react";
import { animateScroll } from "react-scroll";
import logoVerde from "../../assets/Group 12.png";
import logoBranco from "../../assets/Vector.png";
import HomeMenuOption from "./HomeMenuOption";

export default function HomeMenu() {

    const [section, setSection] = useState('');
    const [scroll, setScroll] = useState(false);

    const changeNav = () => {

        const y = window.scrollY;

        if(y >= 90) {
            setScroll(true);
        } else if(y < 90){
            setScroll(false);
        }

        if(y < 20) {
            setSection('');
        } else if( y > 300 && y < 900) {
            setSection('Sobre Nós')
        } else if( y > 900 && y < 1550) {
            setSection('Programação')
        } else if( y > 1550) {
            setSection('Fale Conosco')
        } 

    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        animateScroll.scrollToTop();
    }

    return(
        <HomeNavbar scrollNav={scroll}>
                <Logo src={scroll === false ? logoBranco : logoVerde} alt="logo" onClick={toggleHome}/>
                <HomeMenuOption text="Sobre Nós" section={section} setSection={setSection} scroll={scroll}/>
                <HomeMenuOption text="Programação" section={section} setSection={setSection} scroll={scroll}/>
                <HomeMenuOption text="Fale Conosco" section={section} setSection={setSection} scroll={scroll}/>
        </HomeNavbar>
    )
}

const HomeNavbar = styled.div`

    height: 90px;
    width: 100%;

    border-bottom: ${props => props.scrollNav ? 'solid 1px #f5f5f5' : 'trasnparent'};

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.scrollNav ? '#FFFFFF' : 'trasnparent'};

    gap: 75px;

    z-index: 10;

    position: sticky;
    top: 0px;

    transition: 0.25s all ease;
    
`

const Logo = styled.img`

    height: 40px;
    cursor: pointer;

`