import React, { useState, useEffect } from 'react';
import './Home.css';
import myphoto from './icons/myphoto.png';
import insta from '../src/icons/instagram.png';
import github from '../src/icons/github.png';
import linkedin from '../src/icons/linkedin.png';
import youtube from '../src/icons/youtube.png';
import resume from '../src/icons/Shubham_Giri_Resume.pdf';


export default function Myport(props) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const visibility = setTimeout(() => {
      setShowImage(true);
    }, 500);
    return () => clearTimeout(visibility);
  }, []);
  return (
    <>
      <section id='home'>
        <div className='info-container'>
          <div className='img-container'>
            {showImage && (
              <img src={myphoto} alt='shubham' className='img'></img>
            )}
          </div>
          <div className="info">
            <p className='name'>Hello, I’m {props.name}</p>
            <h1>{props.role}</h1>
            <p className='intro'>I’m a Computer Engineering student with strong foundations in web development, programming, and database management. Skilled in HTML, CSS, JavaScript, React, Python, SQL, PHP, and Kotlin, I enjoy building responsive and user-friendly applications. I have developed projects such as an Online Banking System and a full-stack e-commerce platform with local shop integration. Passionate about software development, problem-solving, and continuous learning, I aim to create scalable solutions that deliver real-world value.</p>
            <a href={resume} className='resume-btn' target="_blank" rel="noopener noreferrer">Download Resume</a>
          </div>
        </div>
        <div className="social">
          <a className='insta link' href='https://www.instagram.com/shubhamgiri729/' target='_blank' rel="noreferrer"><img src={insta} alt='insta' height={50} width={50} /></a>
          <a className='linkedin link' href='https://www.linkedin.com/in/shubham-giri-96931628a/' target='_blank' rel="noreferrer"><img src={linkedin} alt='linkedin' height={50} width={50} /></a>
          <a className='github link' href='https://github.com/shubhamgiri729' target='_blank' rel="noreferrer"><img src={github} alt='facebook' height={50} width={50} /></a>
          <a className='youtube link' href='https://www.youtube.com/@ShubhamGiriAcademy/featured' target='_blank' rel="noreferrer"><img src={youtube} alt='youtube' height={50} width={50} /></a>
        </div>
      </section>
    </>
  );
}
