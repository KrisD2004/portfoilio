import React from 'react';

const skills = [
  'MongoDB',
  'SQL',
  'HTML',
  'CSS',
  'React.js',
  'JavaScript',
  'C#',
  '.NET',
  'Python',
  'SASS',
];

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
