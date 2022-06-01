import React, { useRef } from 'react'

import Navbar from './MNavbar'
import MAbout from './MAbout'
import MAboutContent from './MAboutContent'
import MSkills from './MSkills'
import MProjects from './MProjects'
import MContact from './MContact'

const Mobile = () => {
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
                <MAbout/>
            </section>
        </div>
        <div id='about'>
            <section >
                <MAboutContent/>
            </section>
        </div>
        <div id='skills'>
            <section >
                <MSkills/>
            </section>
        </div>
        <div id='projects'>
            <section>
                <MProjects/>
            </section>
        </div>
        <div id='contact'>
            <section>
                <MContact/>
            </section>
        </div>
    </div>
        
    </>
  )
}

export default Mobile