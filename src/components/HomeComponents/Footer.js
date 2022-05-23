import styled from "styled-components";
import logo from "../../assets/Vector.png";

export default function Footer({setShowLogin, showLogin}) {

    return(
        <FooterDiv>
            <div className="line-div"></div>
            <div className="footer-content">
                <img src={logo} alt="logo"/>
                <p onClick={() => setShowLogin(!showLogin)}>Central</p>
            </div>
        </FooterDiv>
    )
    
}

const FooterDiv = styled.div`

    height: 300px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: rgba(42, 62, 55);

    gap: 50px;

    .line-div{
        width: 60%;
        height: 1px;

        background-color: #FFFFFF;
    }

    .footer-content{

        width: 50%;

        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        img{
            height: 60px;
        }

        p{
            color: #D3D3D3;
            font-family: 'Roboto';
            font-weight: 400;
        }

        p:hover{
            color: #FFFFFF;
            cursor: pointer;
        }
    }

`