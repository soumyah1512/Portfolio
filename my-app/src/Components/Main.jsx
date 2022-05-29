import React, { useRef } from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import styles from '../Styles/styles.css'
import AboutContent from './AboutContent'

const Main = () => {
    const about = useRef(null)
    const skills = useRef(null)
    const projects = useRef(null)
    const contact = useRef(null)

    const scrollToSection = (elementRef) => {
        console.log(elementRef)
        document.getElementById(elementRef).scrollIntoView({
            behavior: 'smooth'
            });
    }
  return (
    <>
    <div class="container">
        <div style={{position: 'sticky', top: '0px',zIndex: '1'}}>
            <Navbar onClick={(e)=>scrollToSection(e)}/>
        </div>
        <div id='home'>
            <section>
                <About/>
            </section>
        </div>
        <div id='about'>
            <section >
                <AboutContent/>
            </section>
        </div>
        <div id='skills'>
            <section >
                <Skills/>
            </section>
        </div>
        <div id='projects'>
            <section>
                <Projects/>
            </section>
        </div>
        <div id='contact'>
            <section>
                <Contact/>
            </section>
        </div>
    </div>
        
    </>
  )
}

export default Main