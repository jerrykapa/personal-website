import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom';

const Submenu = () => {
   const {isSubmenuOpen,location,page:{page,links}} = useGlobalContext();
  const container  = useRef(null)
  const [columns,setColumns] = useState('col-2')
  
  useEffect(()=>{
    setColumns('col-2')
  const submenu = container.current;
  const {center,bottom} = location;
  submenu.style.left= `${center}px`
  submenu.style.top = `${bottom}px`
  if (links.length === 1){
    setColumns('col-1')
    
  }
  if (links.length === 2){
    setColumns('col-2')
    
  }

  if (links.length === 3){
    setColumns('col-3')
  }
  if(links.length>3){
    setColumns('col-4')
  }
  },[location,page,links])
  console.log(links);
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {links.map((link, index) => {
            const { url, icon, label,img,text } = link;
            return (
              <div key={index} className='submenu-card'>
                <a href={url} className='project-link' target='_blank'>
                {icon}
                {text}
                <h4 id='submenu-label'>{label}</h4>
              </a>
              {link.img?<a href={url} target="_blank" rel="noreferrer"><img src={img} alt="dog" className='image' /></a>:''}
                </div> 
            )
          })}
          {page==='About'?<Link to='/about'><div className="about-btn-container"><button className='about-btn'>About page</button></div></Link>:''}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
