import styled from "styled-components";
import AboutUs from "../components/HomeComponents/AboutUs";
import HomeMenu from "../components/HomeComponents/HomeMenu";
import Schedule from "../components/HomeComponents/Schedule";
import ContactUs from "../components/HomeComponents/ContactUs";
import Footer from "../components/HomeComponents/Footer";
import SocialLinks from "../components/HomeComponents/SocialLinks";
import { useState } from "react";
import Login from "../components/HomeComponents/Login";
import Theme from "../components/HomeComponents/Theme";
import Map from "../components/HomeComponents/Map";


export default function Home() {

    const [showLogin, setShowLogin] = useState(false);

    return(
        <HomeContainer>
            <HomeMenu />
            <Theme />
            <AboutUs />
            <Schedule />
            <SocialLinks />
            <ContactUs />
            <Map />
            <Footer setShowLogin={setShowLogin} showLogin={showLogin}/>
            {showLogin && <Login setShowLogin={setShowLogin} showLogin={showLogin}/>}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`

    height: 3000px;
    width: 100%;

    background-color: #FFFFFF;

    .schedule{
        height: 970px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`