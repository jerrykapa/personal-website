import React from 'react'
import { useGlobalContext } from './context'

function About() {
    const {closeSubmenu} = useGlobalContext();
    
    return (
        <section className='about-section' onMouseOver={closeSubmenu}>
            <div className="about-container">
                <h2>About me</h2>
                <div className="about-content">
                <h3>
                    I am a young linguistics student with a passion for web development, specifically the front-end side of things. My dream is to be a front-end or fullstack developer and to take part in awesome projects, but most importantly to learn as much as possible. Besides programming, I am interested in tinkering with devices and gadgets, but also travelling, having lived in Germany for one year, and music, especially guitar. My experience only comes from completed courses, but I am confident in my ability to learn fast and dynamically and challenges don't scare me. 
                </h3>
                <h2 id='completed-courses'>Completed courses</h2>
                
                    <div className="about-courses">
                    <div className="about-course">
                        <a class='about-link' href="https://www.freecodecamp.org/certification/jerrykapa/responsive-web-design" target="_blank">
                        <h3>Responsive web design</h3>
                        </a>
                        </div>
                    <div className="about-course">
                        <a class='about-link' href="https://www.freecodecamp.org/certification/jerrykapa/javascript-algorithms-and-data-structures" target="_blank">
                        <h3>JavaScript Algorithms and Data Structures</h3>
                        </a>
                        </div>
                    <div className="about-course">
                        <a className='about-link' href="https://www.udemy.com/course/react-tutorial-and-projects-course/?referralCode=FEE6A921AF07E2563CEF" target='_blank'>
                        <h3>React.js</h3>
                        </a>
                        </div>
                    </div>
                
                </div>
            </div>
            
            
        </section>
      
    )
}

export default About
