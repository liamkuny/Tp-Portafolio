import React from 'react';
import uniqid from 'uniqid';
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import './ProjectContainer.css';

const ProjectContainer = ({ project, toggleFavorite }) => (
  <div className={`project ${project.isFavorite ? 'favorite' : ''}`}>
    <h3>{project.name}</h3>
    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    {/* Agrega el botón de favorito */}
    <button
      type='button'
      className='btn btn--icon project__favorite'
      onClick={() => toggleFavorite(project.name)}
      aria-label='toggle favorite'
    >
      {project.isFavorite ? '❤️' : '🤍'}
    </button>
  </div>
);

export default ProjectContainer;
