import { FaCreditCard, FaBook, FaBriefcase, FaPhoneAlt, FaEnvelope, FaCode} from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'About',
    links: [
      { text: 'Bachelor student with a huge passion for programming.' },
               
      { text: 'Learning Front End but curious about everything.' },
     
    ],
  },
  {
    page: 'Projects',
    links: [
      { label: 'Personal website',description:'This website! Built with ReactJS', url: '/', img:"https://i.imgur.com/vpeDVEX.png"   },
      { label: 'Shopping cart JS',description:'Functional cart component', url: 'https://relaxed-curran-8bf11b.netlify.app/', img:"https://i.imgur.com/7cLXi3V.png"   },
      { label: 'Color generator',description:'Generates shades of colors', url: 'https://epic-wright-98b54f.netlify.app/', img:"https://i.imgur.com/SrLw4OM.png"  },
      { label: 'Product reviews',description:'Reviews component for products', url: 'https://youthful-snyder-3139e5.netlify.app/', img:"https://i.imgur.com/Eyp1Xqa.png"   },
    ],
  },
  {
    page: 'Contact',
    links: [
      { label: '+40756573159', icon: <FaPhoneAlt /> },
      ,
      { label: 'opariuccristian', icon: <FaEnvelope /> },
      { label: 'Freecodecamp', icon: <FaCode />, url: 'https://www.freecodecamp.org/jerrykapa' },
      ,
      
    ],
  },
];

export default sublinks;
