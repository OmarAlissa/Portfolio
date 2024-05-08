import React from 'react';
import './hero.css';
const Hero = () => {
  return (
    <section className='hero flex'>
      <div className='left-section'>
        <div className="parent-avatar flex">
          <img src='./b.png' className='avatar' alt='' />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p className='subtitle'>
          Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem.
        </p>
        <div className='all-icons flex'>
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className='right-section animation'>
      animation
      </div>
    </section>
  );
};

export default Hero;