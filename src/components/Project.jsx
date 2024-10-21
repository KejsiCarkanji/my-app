import React from 'react';
import '../assets/styles/style.css'


function Project({ title, imgSrc, description, link, id, onProjectClick }) { 
  return (
    <div className="project-no" onClick={() => onProjectClick(id)}>
      <h2>{title}</h2>
      <img src={imgSrc} alt={title} />
      <p>{description}</p>
      <a href={link}>See project</a>
    </div>
  );
}

export default Project;
