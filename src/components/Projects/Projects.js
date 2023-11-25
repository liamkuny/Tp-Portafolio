import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import { projects as allProjects } from '../../portfolio';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState(allProjects);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteProjects')) || [];
    const updatedProjects = allProjects.map(project => ({
      ...project,
      isFavorite: savedFavorites.includes(project.name),
    }));
    setProjects(updatedProjects);
  }, []);

  const toggleFavorite = (projectName) => {
    const updatedProjects = projects.map(project => {
      if (project.name === projectName) {
        return {
          ...project,
          isFavorite: !project.isFavorite,
        };
      }
      return project;
    });
    setProjects(updatedProjects);
    const updatedFavorites = updatedProjects.filter(project => project.isFavorite).map(project => project.name);
    localStorage.setItem('favoriteProjects', JSON.stringify(updatedFavorites));
  };

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Mis Proyectos</h2>
      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer
            key={uniqid()}
            project={project}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

