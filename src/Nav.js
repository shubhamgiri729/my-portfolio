import React from 'react';
import './Nav.css';

export default function Navbar() {
  return (
    <div className='navContainer'>
      <a href='#home' id='port' className='nav-link'>Portfolio</a>
      <a href='#home' id='Home' className='nav-link'>Home</a>
      <a href='#About' id='about' className='nav-link'>About</a>
      <a href='#Project' id='myProject' className='nav-link'>Projects</a>
      <a href='#skills' id='Skills' className='nav-link'>Skills</a>
    </div>
  );
}
