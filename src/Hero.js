import React from 'react';

import { useGlobalContext } from './context';

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className='hero' onMouseOver={closeSubmenu}>
      <div className='hero-center'>
        <article className='hero-info'>
         <h1>I'm Opăriuc Cristian</h1>
         <h2>A front-end web developer</h2>
        </article>
      </div>
    </section>
  );
};

export default Hero;
