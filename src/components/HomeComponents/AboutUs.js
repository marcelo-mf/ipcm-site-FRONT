import foto from "../../assets/image 21.png"
import styled from "styled-components";

export default function AboutUs() {

    return(
        <AboutUsDiv>
            <div className="img-text">
                <img src={foto} alt='sla'/>
                <div className="text">
                    <h1>Sobre Nós</h1>
                    <p>Nossas portas estarão sempre abertas para acolhê-lo, independente de língua, raça, cultura ou tipo de caminhada espiritual.

    Queremos que você sinta-se bem em nosso meio. Nossa maior e melhor alegria será fazê-lo sentir-se especial. Você é especial para nós!<br/><br/>

    Os cerca de 30 ministérios que desenvolvemos em nossa Igreja visam compreender e atender as mais variadas necessidades. Temos certeza que aqui há um lugar que só pode ser ocupado por você.

    Se você gostaria de desenvolver uma autêntica e significativa relação com outras pessoas, você está convidado a conhecer novos pequenos grupos que estão sendo formados periodicamente.
    </p>
                </div>
            </div>
        </AboutUsDiv>
    )
    
}

const AboutUsDiv = styled.div`

    height: 550px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    .img-text{

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: white;

        //filter: drop-shadow(0 0 0.2rem rgb(0, 0, 0, 0.1));

    }

    img{
        height: 400px;
    }

    .text{
        width: 700px;
        height: 400px;
        padding: 40px 80px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-size: 30px;
            font-weight: bold;
        }

        p{
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            font-weight: 300;
            color: #323232;
            line-height: 23px;

            margin-top: 30px;
        }
    }

    
`