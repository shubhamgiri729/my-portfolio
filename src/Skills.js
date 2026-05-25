import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

import html from '../src/icons/html-5.png';
import css from '../src/icons/css-3.png';
import js from '../src/icons/js.png';
import react from '../src/icons/physics.png';
import cp from '../src/icons/c-.png';
import python from '../src/icons/python.png';
import sql from '../src/icons/database.png';
import kotlin from '../src/icons/kotlin.png';
import android from '../src/icons/android studio.png';
import GCD from '../src/icons/google cloud.png';
import github from '../src/icons/github.png';
import git from '../src/icons/git.png';
import php from '../src/icons/php.png';

export default function Skills() {
  const [show, setShow] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    // 1. Capture the current ref value locally
    const currentSkillsRef = skillsRef.current;

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

    // 2. Use the local variable to observe
    if (currentSkillsRef) {
      observer.observe(currentSkillsRef);
    }

    return () => {
      // 3. Use the local variable to unobserve safely during cleanup
      if (currentSkillsRef) {
        observer.unobserve(currentSkillsRef);
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

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={php} alt='php' className='web' />
            <p>PHP</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={kotlin} alt="kotlin" className='web' />
            <p>Kotlin</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={git} alt="git" className='web' />
            <p>Git</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={github} alt="github" className='web' />
            <p>Github</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={GCD} alt="GCD" className='web' />
            <p>Google Cloud</p>
          </div>

          <div className={`skill ${show ? "show" : ""}`}>
            <img src={android} alt='android studio' className='web' />
            <p>Android Studio</p>
          </div>

        </div>
      </div>
    </section>
  );
}