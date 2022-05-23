import styled from "styled-components";

export default function LoginButton({setShowLogin, showLogin}) {

    function handleClick() {
        setShowLogin(!showLogin)
    }

    return(
        <LoginButtonContainer onClick={() => handleClick()}>
            <p>Fazer Login</p>
        </LoginButtonContainer>
    )
    
}

const LoginButtonContainer = styled.div`

        height: 30px;
        width: 150px;

        background-color: white;
        
        padding: 0 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        border-radius: 8px;

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 500;
            color: #2A3E37;
        }
    `