import React from 'react';
import './contact.css';
const Contact = () => {
  return (
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p className='subtitle'>
        Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      </p>
      <div className="flex">
        <form action="">
          <div className='flex'>
            <label htmlFor="email">Email Adress:</label>
            <input required type="email" name='' id='email'/>
          </div>
          <div className='flex' style={{marginTop: 24}}>
            <label htmlFor="message">Your Message:</label>
            <textarea required name="" id="message"></textarea>
          </div>
          <button className='submit'>Submit</button>
        </form>
        <div className="animation">animation</div>
      </div>

    </section>
  );
};

export default Contact;