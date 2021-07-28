import React from 'react'
import {FaGithubSquare, FaFacebookSquare, FaLinkedin,FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import navsvg from './images/navpng.png'

import {useGlobalContext} from './context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();
  const displaySubmenu = (e)=>{
  const text = e.target.textContent;
  const tempBtn = e.target.getBoundingClientRect();
  const center = (tempBtn.left + tempBtn.right)/2;
  const bottom = tempBtn.bottom - 3;
  openSubmenu(text, { center, bottom });
  }
  

  const handleSubmenu = (e)=>{
   if(!e.target.classList.contains('link-btn')){
     closeSubmenu();
   }
  }

  return <nav className="nav" onMouseOver={handleSubmenu}>
    <Link to='/'><img src={navsvg} alt="logo" className='nav-logo' /></Link>
    <div className="nav-center">
     
      <div className="nav-links">
       <Link to='/about'><button className='link-btn' onMouseOver={displaySubmenu}>About</button></Link>
        <Link to='/projects'><button className='link-btn'onMouseOver={displaySubmenu}>Projects</button></Link>
      <Link to='/contact'><button className='link-btn'  onMouseOver={displaySubmenu}>Contact</button></Link>
       
      </div>
     
    </div>
    <ul className="socials">
      <li><a href="https://www.facebook.com/Opariuc.Cristian/" target="_blank"><FaFacebookSquare className='icon' /></a>
      </li>
      <li><a href="https://github.com/jerrykapa" target="_blank"><FaGithubSquare className='icon' /></a>
      </li>
      <li><a href="https://www.linkedin.com/in/cristian-andrei-opariuc-1b7748184/" target="_blank"><FaLinkedin className='icon' /></a>
      </li>
   
    </ul>
    <button className='btn toggle-btn' onClick={openSidebar}>
    <FaBars/>
    </button>
  </nav>
}

export default Navbar
