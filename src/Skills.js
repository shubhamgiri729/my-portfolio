import React from 'react';
import './Skills.css';
import html from '../src/icons/html-5.png';
import css from '../src/icons/css-3.png';
import js from '../src/icons/js.png';
import react from '../src/icons/physics.png'
import cp from '../src/icons/c-.png';
import python from '../src/icons/python.png';
import sql from '../src/icons/database.png';
export default function Skills() {
  return (
    <section id='skills'>
    <div>
      <div className="Skills">
        <ul className='skill-list'>
          <li className='skill'><img className='html web' src={html} alt='html' height={140} width={140} /> HTML</li>
          <li className='skill'><img className='css web' src={css} alt='css' height={140} width={140} /> CSS</li>
          <li className='skill'><img className='js web' src={js} alt='js' height={140} width={140} />JAVASCRIPT</li>
          <li className='skill'><img className='react web' src={react} alt='react' height={140} width={140} /> REACT JS</li>
          <li className='skill'><img className='c web' src={cp} alt='c programming' height={140} width={140} /> C Programming</li>
          <li className='skill'><img className='python web' src={python} alt='python' height={140} width={140} /> Python</li>
          <li className='skill'><img className='sql web' src={sql} alt='sql' height={140} width={140} /> SQL</li>
        </ul>
      </div>
    </div>
    </section>
  )
}
