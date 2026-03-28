import React from 'react';
import './Project.css';

export default function Project() {
  return (
    <section id='Project'>

      <div className='project'>
        <div className="project-name" id='project-1'>
          <h1>Smart Medication Assistant System</h1>
          <div className="pro-summary">An healthcare Android application designed to assist patients and doctors with medication management. It includes features like patient and doctor dashboards, prescription tracking, and smart reminders. Built using modern technologies with backend integration and user authentication.</div>
        </div>

        <div className="project-name" id='project-2'>
          <h1>LocalKart E-Commerce Website</h1>
          <div className="pro-summary">A full-stack e-commerce web application built using PHP, MySQL, HTML, CSS, and JavaScript. It allows users to browse products, add items to cart, and place orders. Includes an admin panel for product management and database integration.</div>
        </div>

        <div className="project-name" id='project-3'>
          <h1>Online Banking System – Minor to Major Account Upgrade</h1>
          <div className="pro-summary">A web-based banking system that enables users to convert a minor account into a major account online. Includes form submission, document upload, and unlocking features like fund transfer after successful account upgrade.</div>
        </div>

        <div className="project-name" id='project-4'>
          <h1>calculator</h1>
          <div className="pro-summary">A basic calculator web app built using HTML, CSS, and JavaScript. It performs standard arithmetic operations like addition, subtraction, multiplication, and division with a clean, responsive UI.</div>
        </div>

        <div className="project-name" id='project-5'>
          <h1>Tic-Tac-Toe</h1>
          <div className="pro-summary">A simple 2-player Tic-Tac-Toe game developed using HTML, CSS, and JS. It includes interactive gameplay, win-check logic, and real-time updates for a smooth user experience.</div>
        </div>
        <div className="project-name" id='project-6'>
          <h1>Amazon.in Clone</h1>
          <div className="pro-summary">A static front-end clone of Amazon’s homepage, created using HTML and CSS. It replicates the layout, header, product sections, and footer to showcase modern web UI structuring.
          </div>
        </div>
      </div>
    </section>
  )
}
