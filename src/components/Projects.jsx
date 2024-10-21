import React, {useState} from 'react';
import projectsData from '../projectsData.js';
import Project from './Project'; 
import '../assets/styles/style.css';
import modalData from '../modalData';
import Modal from './Modal';
import Filter from './Filter';

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleProjectClick = (id) => {
    const selectedModalData = modalData.find(project => project.id === id);
    setCurrentModalData(selectedModalData); 
    setIsModalOpen(true); 
    console.log(selectedModalData);
    console.log(currentModalData);
    console.log(isModalOpen);
    console.log(id);
  };

  const filteredProjects = projectsData.filter(project => 
    selectedCategory === 'all' || project.category === selectedCategory
  );

  
  return (
    <section className="project-section" id="project-section">
      <h2>My Projects</h2>
      <Filter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      <div className="projects">
        {filteredProjects.map(project => (
          <Project 
            id={project.id}
            title={project.title}
            imgSrc={project.imgSrc}
            description={project.description}
            link={project.link}
            onProjectClick={handleProjectClick}
          />
        ))}
      </div>

      {isModalOpen && currentModalData && (
        <Modal 
          title={currentModalData.title} 
          imgSrc={currentModalData.imgSrc} 
          description={currentModalData.description} 
          link={currentModalData.link} 
          onClose={() => setIsModalOpen(false)} 
        />
      )}
    </section>
  );
}

export default Projects;
