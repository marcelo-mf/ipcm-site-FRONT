import logo from "../../assets/Group 12.png";
import styled from "styled-components";
import HeaderOption from "./HeaderOption";
import { IoPersonCircle } from "react-icons/io5";

export default function CentralHeader({section, setSection}) {

    return(
        <HeaderDiv>
            <img src={logo} alt="logo"/>
            <div className="header-options">
                <HeaderOption text="Programação" session={section} setSession={setSection}/>
                <HeaderOption text="Mensagens" session={section} setSession={setSection}/>
                <HeaderOption text="Membros" session={section} setSession={setSection}/>
            </div>
            <div className="profile">
                <p>Olá, admin</p>
                <IoPersonCircle size={35}/>
            </div>
        </HeaderDiv>
    )
    
}

const HeaderDiv = styled.div`

    .header-options{

        height: 100%;

        gap: 40px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

   .profile{
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 15px;
    }

    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #FFFFFF;

    padding: 0 40px;
    
    z-index: 10;

    position: fixed;
    top: 0;

    filter: drop-shadow(0px 0px 10px rgb(0, 0, 0, 0.1));

    img{
        height: 40px;
        width: 160px;
    }

    p{
        font-family: 'Roboto';
        font-size: 17px;
    }

`