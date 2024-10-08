import React from 'react';

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <div className="project-container mb-4"> 
      <article className="card shadow-sm">
        <img src={image} alt={title} className="card-img-top project-image" loading="lazy" />
        <div className="card-body">
          <h2 className="project-title card-title">{title}</h2>
          <p className="project-description card-text">{description}</p>
          <h3 className="project-techstack">
            Tech Stack: <span className="font-weight-light">{techstack}</span>
          </h3>
          <div className="text-right mt-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="project-link"
            >
              View Code
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Project;
