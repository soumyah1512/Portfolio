import React from 'react'
import About from './About'
import Contact from './Contact'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'
import styles from '../Styles/styles.css'
import AboutContent from './AboutContent'

const Main = () => {
  return (
    <>
    <div class="container">
        <div style={{position: 'sticky', top: '0px',zIndex: '1'}}>
            <Navbar />
        </div>
        <section>
            <About/>
        </section>
        <section>
            <AboutContent/>
        </section>
        <section>
            <Skills/>
        </section>
        <section>
            <Projects/>
        </section>
        <section>
            <Contact/>
        </section>
    </div>
        
    </>
  )
}

export default Main