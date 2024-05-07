import "antd/dist/antd.min.css";
import React, { Component } from 'react';
import Footer from '../Components/footer/footer';
import Navbar from '../Components/navbar/navbar';
import EightSection from '../Components/sections/eightSection';
import FifthSection from '../Components/sections/fifthSection';
import FirstSection from '../Components/sections/firstSection';
import FourthSection from '../Components/sections/fourthSection';
import SecondSection from '../Components/sections/secondSection';
import SeventhSection from '../Components/sections/seventhSection';
import SixthSection from '../Components/sections/sixthSection';
import ThirdSection from '../Components/sections/thirdSection';
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