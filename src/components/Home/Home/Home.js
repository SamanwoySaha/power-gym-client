import React from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import Banner from '../../Shared/Banner/Banner';
import Features from '../Features/Features';
import About from '../About/About';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import Footer from '../../Shared/Footer/Footer';
import Sessions from '../Sessions/Sessions';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <Sessions></Sessions>
            <WhyChooseUs></WhyChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;