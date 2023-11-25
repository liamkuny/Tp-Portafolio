import React from 'react';
import { Link } from 'react-router-dom'; 
import { projects } from '../../portfolio'; // Asegúrate de tener la ruta correcta


const Favorites = () => {
  const getFavoriteProjectsDetails = () => {
    const favoriteProjects = JSON.parse(localStorage.getItem('favoriteProjects')) || [];
    return projects.filter((project) => favoriteProjects.includes(project.name));
  };

  return (
    <div>
      <h2>Favorite Projects</h2>
      <ul>
        {getFavoriteProjectsDetails().map((project) => (
          <li key={project.name}>
            {project.name}
          </li>
        ))}
      </ul>
      <Link to="/projects">Back to Projects</Link>
    </div>
  );
};

export default Favorites;
