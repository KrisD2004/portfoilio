import React from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of Project 1',
    link: 'https://example.com/project1',
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2',
    link: 'https://example.com/project2',
  },
  // Add more project objects
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
