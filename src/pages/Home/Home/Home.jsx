import React from 'react';
import Main from '../../../layout/Main';
import AboutMe from '../AboutMe/AboutMe';
import Jumbotron from './../../../components/shared/Jumbotron/Jumbotron';

const Home = () => {
    return (
        <Main>
            <Jumbotron/>
            <AboutMe/>
        </Main>
    );
};

export default Home;