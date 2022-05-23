import styled from "styled-components";
import AboutUs from "../components/HomeComponents/AboutUs";
import Header from "../components/HomeComponents/Header";
import HomeMenu from "../components/HomeComponents/HomeMenu";
import Schedule from "../components/HomeComponents/Schedule";
import ThemeDiv from "../components/HomeComponents/Theme";
import ContactUs from "../components/HomeComponents/ContactUs";
import Footer from "../components/HomeComponents/Footer";
import { useState } from "react";
import Login from "../components/HomeComponents/Login";


export default function Home() {

    const [showLogin, setShowLogin] = useState(false);

    return(
        <HomeContainer>
            <Header />
            <HomeMenu />
            <ThemeDiv />
            <AboutUs />
            <Schedule />
            <ContactUs />
            <Footer setShowLogin={setShowLogin} showLogin={showLogin}/>
            {showLogin && <Login setShowLogin={setShowLogin} showLogin={showLogin}/>}
        </HomeContainer>
    )
}

const HomeContainer = styled.div`

    height: 3000px;
    width: 100%;

    background-color: #FFFFFF;

    .theme{
        height: 370px;

        margin-top: -45px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .schedule{
        height: 970px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`