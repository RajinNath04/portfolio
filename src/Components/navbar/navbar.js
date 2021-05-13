import React, { useEffect } from 'react'
import Svg from '../svg/index';

const Navbar = (props) => {
    useEffect(() => {
        let select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        const onscroll = (el, listener) => {
            el.addEventListener('scroll', listener)
        }

        let navbarlinks = select('#navbar .scrollto', true)
        const navbarlinksActive = () => {
            let position = window.scrollY + 200
            navbarlinks.forEach(navbarlink => {
                if (!navbarlink.hash) return
                let section = select(navbarlink.hash)
                if (!section) return
                if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                    navbarlink.classList.add('active')
                } else {
                    navbarlink.classList.remove('active')
                }
            })
        }
        window.addEventListener('load', navbarlinksActive)
        onscroll(document, navbarlinksActive)
    }, [])
    return (
        <header id="header" className="d-flex flex-column justify-content-center">

            <nav id="navbar" className="navbar nav-menu">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"> <Svg.Home /> <span>Home</span></a></li>
                    <li><a href="#about" className="nav-link scrollto"><Svg.User /> <span>About</span></a></li>
                    <li><a href="#resume" className="nav-link scrollto"><Svg.Resume /> <span>Resume</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><Svg.PortFolio /> <span>Portfolio</span></a></li>
                    <li><a href="#services" className="nav-link scrollto"><Svg.Services /> <span>Services</span></a></li>
                    <li><a href="#contact" className="nav-link scrollto"><Svg.Contacts /> <span>Contact</span></a></li>
                </ul>
            </nav>

        </header>
    )
}

export default Navbar
