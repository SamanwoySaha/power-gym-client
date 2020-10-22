import React from 'react';
import './GymClasses.css';
import GymClass from '../GymClass/GymClass';
import Header from '../../Shared/Header/Header';
import Banner from '../../Shared/Banner/Banner';
import Footer from '../../Shared/Footer/Footer';

const GymClasses = () => {
    return (
        <div>
            <h1>this is classes</h1>
            <Header></Header>
            <Banner></Banner>
            <GymClass></GymClass>
            <Footer></Footer>
        </div>
    );
};

export default GymClasses;