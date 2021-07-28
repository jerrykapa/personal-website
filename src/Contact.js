import React from 'react'
import {useGlobalContext} from './context'
function Contact() {
    const {closeSubmenu} = useGlobalContext();
    return (
        <div className="contact-container" onMouseOver={closeSubmenu}>
        <section className='contact-section' >
            <div className="contact-title">
                <h2>Contact information</h2>
                </div>
               
                 <div className='contact-methods'>
                     <h3>opariuccristian@gmail.com</h3>
                     <h3>ocrsti@gmail.com</h3>
                     <h3>+40756473159</h3>
                     <a className='contact-link'href="https://www.linkedin.com/in/cristian-andrei-opariuc-1b7748184/" target='_blank'><h3>Linkedin profile</h3></a>
                     <a className='contact-link'href="https://github.com/jerrykapa" target='_blank'><h3>GitHub page</h3></a>
                     <a className='contact-link'href="https://www.freecodecamp.org/jerrykapa" target='_blank'><h3>Freecodecamp profile</h3></a>
                 </div>
                
                
            
            
            
        </section>
      </div>
    )
    
}

export default Contact
