import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../portfolio';
import './FavoriteProjectsPage.css';

const FavoriteProjectsPage = () => {
  const [favoriteProjects, setFavoriteProjects] = useState([]);

  // Get favorite projects based on local storage
  const getFavoriteProjects = () => {
    const favoriteProjectIds = JSON.parse(localStorage.getItem('favoriteProjects')) || [];
    const filteredProjects = projects.filter((project) => {
      const projectName = project.name;
      return favoriteProjectIds.includes(projectName);
    });
    return filteredProjects.map((project) => ({
      id: project.id,
      name: project.name,
      title: project.name,
      description: project.description,
    }));
  };

  // Handle favorite toggle
  const handleFavoriteToggle = (projectId) => {
    const updatedFavoriteProjects = [...favoriteProjects];

    if (updatedFavoriteProjects.includes(projectId)) {
      updatedFavoriteProjects.splice(updatedFavoriteProjects.indexOf(projectId), 1);
    } else {
      updatedFavoriteProjects.push(projectId);
    }

    setFavoriteProjects(updatedFavoriteProjects);

    // Update local storage
    localStorage.setItem('favoriteProjects', JSON.stringify(updatedFavoriteProjects));
  };

  return (
    <div className="favorite-projects-page">
      <div className="back-to-projects-btn-container">
        <Link to="/projects" className="back-to-projects-btn">
          Back to Projects
        </Link>
      </div>

      <div className="favorite-projects-list">
        {getFavoriteProjects().map((project) => (
          <div key={project.id} className="favorite-project-card">
            <h3 className="favorite-project-title">{project.title}</h3>
            <p className="favorite-project-description">{project.description}</p>
            <button
              type="button"
              onClick={() => handleFavoriteToggle(project.id)}
              className="favorite-project-toggle-btn"
            >
              {favoriteProjects.includes(project.id) ? 'remove from favorites' : 'Sacar de favoritos' }
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProjectsPage;
