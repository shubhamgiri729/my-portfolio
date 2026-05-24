import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

import html from '../src/icons/html-5.png';
import css from '../src/icons/css-3.png';
import js from '../src/icons/js.png';
import react from '../src/icons/physics.png';
import cp from '../src/icons/c-.png';
import python from '../src/icons/python.png';
import sql from '../src/icons/database.png';

export default function Skills() {

  const [show, setShow] = useState(false);

  const skillsRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(

      ([entry]) => {

        if (entry.isIntersecting) {
          setShow(true);
        }

      },

      {
        threshold: 0.2,
      }

    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {

      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }

    };

  }, []);

  return (

    <section id='skills' ref={skillsRef}>

      <div className="skills-container">

        <h1 className='skills-heading'>
          My Skills
        </h1>

        <div className='skill-list'>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={html} alt='html' className='web' />
            <p>HTML</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={css} alt='css' className='web' />
            <p>CSS</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={js} alt='javascript' className='web' />
            <p>JavaScript</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={react} alt='react' className='web' />
            <p>React JS</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={cp} alt='c' className='web' />
            <p>C Programming</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={python} alt='python' className='web' />
            <p>Python</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={sql} alt='sql' className='web' />
            <p>SQL</p>
          </div>

        </div>

      </div>

    </section>
  );
}