import logo from "../../assets/Group 12.png";
import styled from "styled-components";

export default function Header() {

    return(
        <HeaderDiv>
            <img src={logo} alt="logo"/>
        </HeaderDiv>
    )
    
}

const HeaderDiv = styled.div`

    height: 120px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    
    z-index: 10;


    img{
        height: 55px;
        width: 221px;
    }

`