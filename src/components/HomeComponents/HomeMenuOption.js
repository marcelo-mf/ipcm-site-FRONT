import styled from "styled-components";

export default function HomeMenuOption({text, section}) {

    const HomeMenuOptionContainer = styled.div`

        height: 100%;
        
        padding: 0 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 500;
            color: ${section === text ? 'rgba(42, 62, 55)' : '#c4c4c4'};
        }
    `

    
    return(
        <HomeMenuOptionContainer onClick={() => {

            if(text === 'Sobre Nós') {
                window.scrollTo({top: 620, behavior: "smooth"})
            } else if(text === 'Programação') {
                window.scrollTo({top: 1160, behavior: "smooth"})
            }else if(text === 'Fale Conosco') {
                window.scrollTo({top: 1760, behavior: "smooth"})
            }
            
        }}>
            <p >{text}</p>
        </HomeMenuOptionContainer>
    )
    
}

