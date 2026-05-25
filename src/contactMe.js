import React, { useRef, useState } from 'react';
import './contactMe.css';
import emailjs from '@emailjs/browser';

export default function ContactMe(){
  const form = useRef();

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        'service_j1m8xbr',
        'template_qh3e341',
        form.current,
        {
          publicKey: 'WcsW676Cz9gXFL5S1',
        }
      )
      .then(() => {

        setSent(true);

        form.current.reset();

        setTimeout(() => setSent(false), 3000);

      })
      .catch((error) => {
        console.error(error);
      });
  };

    return(
        <>
        <div className="contact-me">

        <h1>Contact Me</h1>

        <div className={`success-msg ${sent ? "show" : ""}`}>
          ✅ Message sent successfully!
        </div>

        <form ref={form} onSubmit={sendEmail}>

          <input
            type='text'
            className='message'
            name='from_name'
            placeholder='Enter Name'
            required
          />

          <input
            type='email'
            className='message'
            name='from_email'
            placeholder='Your Email'
            required
          />

          <textarea
            className='message'
            name='message'
            placeholder='Your Message'
            rows={6}
            required
          />

          <input
            type='submit'
            className='message'
            id='btn'
            value='Send'
          />

        </form>

      </div>
        </>
    );
}