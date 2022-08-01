import styled from "styled-components";

export default function Map() {

    return(
        <MapDiv>
            <div className="infos">
                <div className="info-container">
                    <h2>Localização</h2>
                    <p>R. Nove de Julho, 348 <br/> Centro, Mairinque-SP - CEP:18120-000</p>
                </div>
                <div className="separator"></div>
                <div className="info-container">
                    <h2>Telefone</h2>
                    <p>(11) 97540-0050</p>
                </div>
            </div>
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3657.54107130336!2d-47.18240049881134!3d-23.54900322318405!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc23003ede17cefd9!2sIgreja%20presbiteriana%20Central%20de%20Mairinque!5e0!3m2!1spt-BR!2sbr!4v1652470100625!5m2!1spt-BR!2sbr" title="map" width="450" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </MapDiv>
    )
}

const MapDiv = styled.div`

    width: 100%;
    height: 600px;

    background-color: red;

    position: relative;

    .separator{
        height: 100%;
        width: 1px;

        background-color: white;
    }

    .info-container{

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;


        height: 100%;
        width: 45%;
        padding-left: 40px;

        gap: 20px;

        h2{
            color: #FFFFFF;
            font-family: 'Roboto', sans-serif;
            font-size: 25px;
            font-weight: bold;
        }

        p{
            color: #FFFFFF;
            font-family: 'Roboto', sans-serif;
            font-size: 17px;
            font-weight: 400;
            line-height: 25px;
        }

        
    }

    .infos{

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: rgba(42, 62, 55);
        width: 50%;
        height: 30%;

        padding: 40px;

        position: absolute;

        top: -15%;
        left: 25%;

        color: white;
    }

    iframe{
        width: 100%;
        height: 600px;
    }

`