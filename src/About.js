import React, { useState, useRef } from 'react';
import './About.css';
import emailjs from '@emailjs/browser';

export default function About() {
  const [openSection, setOpenSection] = useState(null);
  const [sent, setSent] = useState(false);

  const handleToggle = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j1m8xbr', 'template_qh3e341', form.current, {
        publicKey: 'WcsW676Cz9gXFL5S1',
      })
      .then(
        () => {
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 3000);
        },
        (error) => {
          console.error(error);
          alert('Failed to send message');
        },
      );
  };
  return (
    <>
      <section id='About'>
        <div className="aboutMe">
          <details className="section" id='intro' open={openSection === 'intro'}>
            <summary onClick={(e) => { e.preventDefault(); handleToggle('intro'); }}>👤 Introduction </summary>
            <div className="section-content">
              <p><strong>Full Name:</strong> Shubham Rajkumar Giri</p>
              <p><strong>Age:</strong> 19</p>
              <p><strong>Gender:</strong> Male</p>
              <p><strong>Role:</strong> Frontend Web Developer</p>
              <p><strong>Phone:</strong> +91 81046 25140</p>
              <p><strong>Email:</strong> <a href="mailto:shubhamgiri729@gmail.com">shubhamgiri729@gmail.com</a></p>
              <p><strong>Location:</strong> Mumbai, India</p>
            </div>
          </details>

          <details className="section" open={openSection === 'qualification'}>
            <summary onClick={(e) => { e.preventDefault(); handleToggle('qualification'); }}>🎓 Qualification </summary>
            <div className="section-content">
              <p><strong>Degree:</strong> B.Tech in Computer Engineering</p>
              <p><strong>University:</strong> Mumbai University</p>
              <p><strong>College:</strong> Terna College of Engineering, Nerul</p>
              <p><strong>Current Semester:</strong> 5th</p>
              <p><strong>SGPA (Sem I to IV):</strong> 6.78, 8.10, 8.30, 8.00 <br /> <strong>CGPA:</strong> 7.79</p>
              <p><strong>SSC:</strong> 89.60% (2020)</p>
              <p><strong>HSC:</strong> 65.59% (2023)</p>
            </div>
          </details>

          <details className="section" open={openSection === 'hobby'}>
            <summary onClick={(e) => { e.preventDefault(); handleToggle('hobby'); }}>🎯 Hobbies </summary>
            <div className="section-content">
              <p>Creating educational YouTube videos</p>
              <p>Exploring and making cricket-related content</p>
              <p>Traveling and experiencing new places</p>
              <p>Learning basic Japanese (日本語)</p>
            </div>
          </details>
        </div>

        <div className="contact-me">
          <h1>contact me</h1>
          <div className={`success-msg ${sent ? "show" : ""}`}>
            ✅ Message sent successfully!
          </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type='text' className='message' id='name' name='from_name' placeholder='Enter Name' required />
            <input type='email' className='message' id='mail' name='from_email' placeholder='Your Email' required />
            <textarea className='message' id='message-area' name='message' placeholder='your message' rows={20} required></textarea>
            <input type='submit' className='message' id='btn' value="send" />
          </form>
        </div>
      </section>
    </>
  );
}
