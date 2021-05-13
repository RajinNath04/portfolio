import React, { Component } from 'react';
import Svg from '../Components/svg/index';
import Typed from 'react-typed';
import { Progress, Carousel } from 'antd';
import "antd/dist/antd.css";
import Navbar from '../Components/navbar/navbar';
import FirstSection from '../Components/sections/firstSection';
import SecondSection from '../Components/sections/secondSection';
import ThirdSection from '../Components/sections/thirdSection';
import FourthSection from '../Components/sections/fourthSection';
import FifthSection from '../Components/sections/fifthSection';
import SixthSection from '../Components/sections/sixthSection';
import SeventhSection from '../Components/sections/seventhSection';
import EightSection from '../Components/sections/eightSection';
import Footer from '../Components/footer/footer';
class main extends Component {


    render() {


        return (
            <div className="mainDiv">
                <i className="fa fa-bars mobile-nav-toggle d-xl-none"></i>

                <Navbar />
                <FirstSection />

                <main id="main">

                    <SecondSection />

                    <ThirdSection />

                    <FourthSection />

                    <FifthSection />

                    <SixthSection />

                    <SeventhSection />

                    <EightSection />

                </main>

                <Footer />

            </div>
        );
    }
}

export default main;