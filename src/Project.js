import React from 'react';
import './Project.css';

export default function Project() {
  return (
    <section id='Project'>
    <div className='project'>
      <div className="project-name" id='project-1'><h1>calculator</h1>
        <div className="pro-summary">A basic calculator web app built using HTML, CSS, and JavaScript. It performs standard arithmetic operations like addition, subtraction, multiplication, and division with a clean, responsive UI.</div>
      </div>
      <div className="project-name" id='project-2'><h1>Tic-Tac-Toe</h1>
        <div className="pro-summary">A simple 2-player Tic-Tac-Toe game developed using HTML, CSS, and JS. It includes interactive gameplay, win-check logic, and real-time updates for a smooth user experience.</div>
      </div>
      <div className="project-name" id='project-3'><h1>Amazon.in Clone</h1>
        <div className="pro-summary">A static front-end clone of Amazon’s homepage, created using HTML and CSS. It replicates the layout, header, product sections, and footer to showcase modern web UI structuring.
        </div>
      </div>
      <div className="project-name" id='project-4'><h1>Aotomobile Service Station</h1>
        <div className="pro-summary">A responsive web layout design for an automobile service station. Built using HTML and CSS, it includes sections like services, contact, and booking info to simulate a real service site structure.</div>
      </div>
      <div className="project-name" id='project-5'><h1>Guess & Win Coins Python Game</h1>
        <div className="pro-summary">A simple number guessing and coin betting game built with Python. The player starts with 100 coins and bets on a number between 1 and 5. If the guess matches the random number, they win double the bet; otherwise, they lose the coins. It uses loops, conditions, and the random module to simulate basic game logic.</div>
      </div>
    </div>
    </section>
  )
}
