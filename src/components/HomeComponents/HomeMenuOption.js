import styled from "styled-components";

export default function HomeMenuOption({text, section, setSection}) {

    const HomeMenuOptionContainer = styled.div`

        height: 100%;
        
        padding: 0 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        border-bottom: ${section === text ? 'solid 2px white' : 'none'};

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 500;
            color: white;
        }
    `

    
    return(
        <HomeMenuOptionContainer onClick={() => {
            setSection(text)
            if(text === 'Sobre Nós') {
                window.scrollTo({top: 0, behavior: "smooth"})
            } else if(text === 'Programação') {
                window.scrollTo({top: 970, behavior: "smooth"})
            }else if(text === 'Fale Conosco') {
                window.scrollTo({top: 1940, behavior: "smooth"})
            }
            
        }}>
            <p >{text}</p>
        </HomeMenuOptionContainer>
    )
    
}

