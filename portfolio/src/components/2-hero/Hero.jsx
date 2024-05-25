import React, { useRef } from 'react';
import './hero.css';
import Lottie from "lottie-react";
// @ts-ignore
import heroAnimation from '../../animation/hero.json';


// <div className="icon icon-twitter"></div>
const Hero = () => {
  const lootieRef = useRef();
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className="parent-avatar flex">
          <img src='./images/profile.png' className='avatar' alt='' />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>Wirtschaftsinformatik Student, Python Enthusiast, and React Developer.</h1>
        <p className='subtitle'>
          I am Omar Alissa, a Wirtschaftsinformatik student from Um.
          I am passionate about learning new technologies and currently focused on experimenting with Python and React.
          My dedication to software development drives me to continually expand my skills and explore new possibilities.
        </p>
        <div className='all-icons flex'>
          <a href="https://www.instagram.com/omar_alissa963" target="_blank" rel="noopener noreferrer">
            <div className="icon icon-instagram"></div>
          </a>

          <a href="https://github.com/OmarAlissa?tab=repositories" target="_blank" rel="noopener noreferrer">
        <div className="icon icon-github"></div>
      </a>
      <a href="https://www.linkedin.com/in/omar-alissa-a8a244301" target="_blank" rel="noopener noreferrer">
        <div className="icon icon-linkedin"></div>
      </a>
        </div>
      </div>

      <div className='right-section animation'>
        <Lottie animationData={heroAnimation}
          className='emailAnimation'
          lottieRef={lootieRef}
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lootieRef.current.setSpeed(0.5)
          }} />
      </div>
    </section>
  );
};

export default Hero;