import styled from "styled-components";
import youtube from "../../assets/youtube.png";
import Instagram from "../../assets/Instagram.png";
import Facebook from "../../assets/Group 1.png";

export default function SocialLinks() {

    const socialMedia = [
        {image: youtube, link:"https://www.youtube.com/c/IgrejaPresbiterianaCentraldeMairinque", name: "youtube"},
        {image: Instagram, link: "https://www.instagram.com/ipcmairinque/", name: "instagram"},
        {image: Facebook, link:"https://www.facebook.com/ipcmairinque/", name: "facebook"}
    ];

    function redirect(link) {
        window.open(link);
    }

    return(
        <SocialDiv>
            <div>
                {
                    socialMedia.map(rede => (
                        <img src={rede.image} className={rede.name} alt={rede.name} onClick={() => redirect(rede.link)}/>
                    ))
                }
            </div>
        </SocialDiv>
    )
}

const SocialDiv = styled.div`

    height: 90px;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: rgba(42, 62, 55);

    div{
        width: 700px;

        display: flex;
        justify-content: space-between;

        img{
            height: 25px;

            cursor: pointer;

            :hover{
                opacity: 0.6;
            }
        }

        .instagram {
            height: 30px;

            cursor: pointer;
        }

        .facebook {
            height: 30px;

            cursor: pointer;
        }
    }
    
`