import React from 'react';
import Typed from 'react-typed';
import Svg from '../svg/index';

const FirstSection = (props) => {

    return (
        <section id="hero" class="d-flex flex-column justify-content-center">
            <div class="container" style={{ textAlign: 'left', marginRight: '20px' }} data-aos="zoom-in" data-aos-delay="100">
                <h1>Rajin Nath</h1>
                <p>I'm  <Typed
                    strings={['Designer', 'Developer', 'Freelancer', 'Photographer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                /> </p>
                <div class="social-links">
                    <a href="https://www.facebook.com/" class="facebook"><Svg.Facebook /></a>
                    <a href="https://www.instagram.com/" class="instagram"><Svg.Instagram /></a>
                    <a href="https://www.linkedin.com/in/rajin-nath-a93783117/" class="linkedin"><Svg.Linkdin /></a>
                </div>
            </div>
        </section>
    )
}

export default FirstSection
