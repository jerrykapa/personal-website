import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

const Sidebar = () => {
  const {closeSidebar,isSidebarOpen} = useGlobalContext();
  return <aside className={`${isSidebarOpen?'sidebar-wrapper show':'sidebar-wrapper'}`}>
    <div className="sidebar">
      <button className='close-btn' onClick={closeSidebar}><FaTimes/></button>
      <div className="sidebar-links">
        {sublinks.map((item,index)=>{
          const {links,page} = item;
          return <article key={index}>
            <h4>{page}</h4>
            <div className="sidebar-sublinks">
              {links.map((link,index)=>{
                const {url, icon, label,img,text} = link;
                return (<div key={index} ><a  href={url} target='_blank' rel='noreferer' className='project-link'>
                    {text}
                    {icon}
                    <h4>{label}</h4>
                    </a>
              {link.img?<a href={url} target='_blank' rel='noreferer' className='project-link'><img src={img} alt="project_img" className='sidebar-img' /></a> :''}
                </div>
                )
              })}
            </div>
          </article>
        })}
      </div>
    </div>
  </aside>
}

export default Sidebar
