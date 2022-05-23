import styled from "styled-components";

export default function HeaderOption({text, session, setSession}) {

    const HeaderOptionContainer = styled.div`

        height: 70px;
        
        padding: 0 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        border-bottom: ${session === text ? 'solid 2px rgba(42, 62, 55)' : 'none'};

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 600;
            color: ${session === text ? 'rgba(42, 62, 55)' : 'grey'};
        }

    `

    
    return(
        <HeaderOptionContainer onClick={() => {
            setSession(text)
            if(text === 'Sobre Nós') {
                window.scrollTo({top: 0, behavior: "smooth"})
            } else if(text === 'Programação') {
                window.scrollTo({top: 970, behavior: "smooth"})
            }else if(text === 'Fale Conosco') {
                window.scrollTo({top: 1940, behavior: "smooth"})
            }
            
        }}>
            <p >{text}</p>
        </HeaderOptionContainer>
    )
    
}