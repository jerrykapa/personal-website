import React from 'react'
import {useGlobalContext} from './context'
 
function Projects() {
    const {datalinks,closeSubmenu} = useGlobalContext();
    
    return (
        <section className='projects-section' onMouseOver={closeSubmenu}>

        
        <div className='hero-center'>
            <div className='projects-container'>

            
            {
                datalinks[1].links.map((item,index)=>{
                    const {label,url,img,description} = item;
                    return <a href={url} target='_blank' className='project-link'>
                        <div key={index} className='project-card'>
                        <img className='project-img' src={img} alt="project" />
                        <div className="project-info">
                        <h2 className='project-title'>{label}</h2>
                        <h3 id='project-text'>{description}</h3>
                        </div>
                    </div>
                    </a>
                })
            }
            </div>
        </div>
        </section>
    )
}

export default Projects
