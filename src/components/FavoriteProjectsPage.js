import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../portfolio';
import './FavoriteProjectsPage.css';

const FavoriteProjectsPage = () => {
  const [favoriteProjects, setFavoriteProjects] = useState(
    JSON.parse(localStorage.getItem('favoriteProjects')) || []
  );

  const handleFavoriteToggle = (projectId) => {
    const updatedFavorites = [...favoriteProjects];

    if (updatedFavorites.includes(projectId)) {
      updatedFavorites.splice(updatedFavorites.indexOf(projectId), 1);
    } else {
      updatedFavorites.push(projectId);
    }

    localStorage.setItem('favoriteProjects', JSON.stringify(updatedFavorites));
    setFavoriteProjects(updatedFavorites);
  };

  const getFavoriteProjectsDetails = () => {
    return projects.filter((project) => favoriteProjects.includes(project.id));
  };

  return (
    <div className="favorite-projects-page">
      <div className="back-to-projects-btn-container">
        <Link to="/projects" className="back-to-projects-btn">
          Back to Projects
        </Link>
      </div>

      <div className="favorite-projects-list">
        {getFavoriteProjectsDetails().map((project) => (
          <div key={project.id} className="favorite-project-card">
            <h3 className="favorite-project-title">{project.title}</h3>
            <p className="favorite-project-description">{project.description}</p>
            <button
              type="button"
              onClick={() => handleFavoriteToggle(project.id)}
              className="favorite-project-toggle-btn"
            >
              {favoriteProjects.includes(project.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoriteProjectsPage;
