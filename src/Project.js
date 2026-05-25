import React from 'react';
import Github from './icons/github.svg';
import './Project.css';

export default function Project() {
  return (
    <>
      <section id='Project'>
        <h1 id='project-heading'>My Projects</h1>
        <div className='project'>
          <div className="project-name" id='project-1'>
            <h2>Smart Medication Assistant System </h2>
            <div className="pro-summary">An healthcare Android application designed to assist patients and doctors with medication management. It includes features like patient and doctor dashboards, prescription tracking, and smart reminders. Built using modern technologies with backend integration and user authentication.</div>
            <a
              href="https://github.com/shubhamgiri729/medAssist"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <img src={Github} alt="github" className='git-link' />
            </a>
          </div>

          <div className="project-name" id='project-2'>
            <h2>LocalKart E-Commerce Website</h2>
            <div className="pro-summary">A full-stack e-commerce web application built using PHP, MySQL, HTML, CSS, and JavaScript. It allows users to browse products, add items to cart, and place orders. Includes an admin panel for product management and database integration.</div>
            <a
              href="https://github.com/shubhamgiri729/LocalKart"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <img src={Github} alt="github" className='git-link' />
            </a>
          </div>

          <div className="project-name" id='project-3'>
            <h2>Online Banking System – Minor to Major Account Upgrade</h2>
            <div className="pro-summary">A web-based banking system that enables users to convert a minor account into a major account online. Includes form submission, document upload, and unlocking features like fund transfer after successful account upgrade.</div>

            <a
              href="https://github.com/shubhamgiri729/online-banking-system"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <img src={Github} alt="github" className='git-link' />
            </a>

          </div>

          <div className="project-name" id='project-4'>
            <h2>calculator</h2>
            <div className="pro-summary">A basic calculator web app built using HTML, CSS, and JavaScript. It performs standard arithmetic operations like addition, subtraction, multiplication, and division with a clean, responsive UI.</div>
            <a
              href="https://github.com/shubhamgiri729/calculator"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <img src={Github} alt="github" className='git-link' />
            </a>
          </div>

          <div className="project-name" id='project-5'>
            <h2>Tic-Tac-Toe</h2>
            <div className="pro-summary">A simple 2-player Tic-Tac-Toe game developed using HTML, CSS, and JS. It includes interactive gameplay, win-check logic, and real-time updates for a smooth user experience.</div>
            <a
              href="https://github.com/shubhamgiri729/TIC-TAC-TOE"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <img src={Github} alt="github" className='git-link' />
            </a>
          </div>

          <div className="project-name" id='project-6'>
            <h2>Amazon.in Clone</h2>
            <div className="pro-summary">A static front-end clone of Amazon’s homepage, created using HTML and CSS. It replicates the layout, header, product sections, and footer to showcase modern web UI structuring.
            </div>
            <a
              href="https://github.com/shubhamgiri729/Amazon-Replica"
              target="_blank"
              rel="noreferrer"
              className="github-btn"
            >
              <img src={Github} alt="github" className='git-link' />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
