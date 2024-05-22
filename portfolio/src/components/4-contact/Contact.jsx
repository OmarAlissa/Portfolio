import React, { useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import Lottie from "lottie-react";
// @ts-ignore
import doneAnimation from '../../animation/done.json';
// @ts-ignore
import emailAnimation from '../../animation/email.json';
const Contact = () => {
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
      e.preventDefault();
      
      // E-Mail Adresse validieren
      const emailInput = e.target.email;
      const email = emailInput.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      
      if (!emailPattern.test(email)) {
          setStatusMessage('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
          return;
      }

      emailjs.sendForm('service_j8a4qz7', 'template_7y85gzr', e.target, 'GbLuUHp3rgqUVpJ-q')
          .then((result) => {
              console.log(result.text);
              // Felder leeren
              e.target.reset();
              // Erfolgsmeldung anzeigen
              setStatusMessage('E-Mail erfolgreich gesendet!');
          }, (error) => {
              console.log(error.text);
              // Fehlermeldung anzeigen
              setStatusMessage('Fehler beim Senden der E-Mail. Bitte versuchen Sie es erneut.');
          });
  };
  return (
    
    <section className='contact-us'>
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p className='subtitle'>
        Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum
      </p>
      <div style={{justifyContent: "space-between"}}className="flex">
        <form action="" onSubmit={sendEmail}>
          <div className='flex'>
            <label htmlFor="email">Email Adress:</label>
            <input required type="email" name='email' id='email'/>
          </div>
          <div className='flex' style={{marginTop: 24}}>
            <label htmlFor="message">Your Message:</label>
            <textarea name="message" id="message"></textarea>
          </div>
          <button className='submit'>Submit</button>
          {statusMessage && <p className='flex' style={{marginTop: '18px'}}>
            <Lottie animationData={doneAnimation} loop={false} style={{height: 30, marginRight: 9}}/>
            {statusMessage}</p>}
        </form>
        <div className="animation">
        <Lottie className='emailAnimation' animationData={emailAnimation}/>
        </div>
      </div>

    </section>
  );
};

export default Contact;