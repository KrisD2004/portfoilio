import React from 'react';

const projects = [
  {
    title: 'Horned Beasts',
    description: 'Galeery of horned beasts seperated by number of horns. Used React.js to build this project',
    link: 'https://main--lustrous-valkyrie-bada22.netlify.app/',
  },
  {
    title: 'Tello Drone',
    description: 'Used Python to program the drone to do various movements. ',
    link: 'https://github.com/KrisD2004/PersonalFlyer/blob/main/mainMove.py',
  },
  {
    title: 'Tello Drone',
    description: 'Used Python to program the drone to do various movements. ',
    link: 'https://github.com/KrisD2004/PersonalFlyer/blob/main/mainMove.py',
  },
  {
    title: 'Tello Drone',
    description: 'Used Python to program the drone to do various movements. ',
    link: 'https://github.com/KrisD2004/PersonalFlyer/blob/main/mainMove.py',
  },
  {
    title: 'Tello Drone',
    description: 'Used Python to program the drone to do various movements. ',
    link: 'https://github.com/KrisD2004/PersonalFlyer/blob/main/mainMove.py',
  },
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
