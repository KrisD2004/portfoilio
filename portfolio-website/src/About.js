import React from 'react';
import Skills from './Skills';

function About() {
  return (
    <section id="about">
      <h2>Kristian Dotson</h2>
      <div className="profile">
        <img src={require('./headshot.jpg')} alt="Kristian Dotson" className="profile-image" />
        <p className="profile-description">
          Welcome to my portfolio website. I'm a passionate developer with experience in web development. I love creating amazing web experiences.
        </p>
      </div>
      <h3>Education</h3>
      <p>Software Engineering</p>
      <p>CodeCrew Code School</p>
      <p>Memphis, TN</p>
      <p>Ridgeway High School</p>
      <p>Memphis, TN</p>
      <Skills />
    </section>
  );
}

export default About;
