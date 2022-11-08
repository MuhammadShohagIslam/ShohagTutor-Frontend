import React from "react";
import Main from "../../../layout/Main";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import Services from "../Services/Services";
import Jumbotron from "./../../../components/shared/Jumbotron/Jumbotron";

const Home = () => {
    return (
        <Main>
            <Jumbotron />
            <AboutMe />
            <Services />
            <Contact/>
        </Main>
    );
};

export default Home;
