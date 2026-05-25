import React from 'react';
import './About.css';

export default function About() {
  return (

    <section id="About">

      <h1 className="about-heading">
        About Me
      </h1>

      <div className="about-cards">

        <div className="about-card intro-card">

          <h2>👤 Introduction</h2>

          <p><strong>Full Name:</strong> Shubham Rajkumar Giri</p>
          <p><strong>Age:</strong> 20</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Phone:</strong> +91 81046 25140</p>
          <p><strong>Email:</strong> shubhamgiri729@gmail.com</p>
          <p><strong>Location:</strong> Mumbai, India</p>

        </div>
        
        <div className="about-card qualification-card">

          <h2>🎓 Education</h2>

          <p><strong>Degree:</strong> B.E. Computer Engineering</p>
          <p><strong>University:</strong> Mumbai University</p>
          <p><strong>College:</strong> Terna Engineering College</p>
          <p><strong>Semester:</strong> 7th</p>
          <p><strong>CGPA:</strong> 7.84</p>
          <p><strong>SSC:</strong> 89.60%</p>
          <p><strong>HSC:</strong> 65.59%</p>

        </div>

        <div className="about-card hobby-card">

          <h2>🎯 Hobbies</h2>

          <p>Creating educational content on YouTube</p>
          <p>Creating AI-generated visual content</p>
          <p>Learning new languages</p>
          <p>Exploring cricket content</p>

        </div>

      </div>

    </section>
  );
}