
import styled from "styled-components";

export default function AboutUs() {

    return(
        <AboutUsDiv>
            <div>
                <h1>Sobre Nós</h1>
                <p>Nossas portas estarão sempre abertas para acolhê-lo, independente de língua, raça, cultura ou tipo de caminhada espiritual.

Queremos que você sinta-se bem em nosso meio. Nossa maior e melhor alegria será fazê-lo sentir-se especial. Você é especial para nós!<br/><br/>

Os cerca de 30 ministérios que desenvolvemos em nossa Igreja visam compreender e atender as mais variadas necessidades. Temos certeza que aqui há um lugar que só pode ser ocupado por você.

Se você gostaria de desenvolver uma autêntica e significativa relação com outras pessoas, você está convidado a conhecer novos pequenos grupos que estão sendo formados periodicamente.<br/><br/>

Se você gostaria de conhecer mais acerca daquEle que conhece todas as nossas indagações – DEUS, ou se quer saber sobre as raízes da sua fé, com profundidade, seriedade e compromisso, você pode encontrar aqui uma família – A IPALPHA.

</p>
            </div>
        </AboutUsDiv>
    )
    
}

const AboutUsDiv = styled.div`

    height: 480px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;

    div{
        height: 100%;
        width: 730px;

        padding: 50px 0;

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