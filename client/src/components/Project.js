import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import '../css/project.css'; // Ensure to import your CSS file

function Project({ title, image, description, techstack, previewLink, githubLink, video }) {
  const [showVideo, setShowVideo] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleVideoToggle = () => {
    setShowVideo(!showVideo);
  };

  const handleDescriptionToggle = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="project-container mb-4">
      <article className="card shadow-sm">
        <img src={image} alt={title} className="card-img-top project-image" loading="lazy" />
        <div className="card-body">
          <h2 className="project-title card-title">{title}</h2>
          <p className={`project-description card-text ${showFullDescription ? 'expanded' : 'collapsed'}`}>
            {description}
          </p>
          {!showFullDescription && description.split('\n').length > 3 && (
            <button onClick={handleDescriptionToggle} className="btn btn-link p-0">
              ... Read More
            </button>
          )}
          {showFullDescription && (
            <>
              <button onClick={handleDescriptionToggle} className="btn btn-link">
                Show Less
              </button>
            </>
          )}
          <h3 className="project-techstack">
            Tech Stack: <span className="font-weight-light">{techstack}</span>
          </h3>
          <div className="button-container text-right mt-3">
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="project-link btn btn-secondary me-2"
            >
              View Code
            </a>
            <button onClick={handleVideoToggle} className="btn btn-primary">
              {showVideo ? 'Hide Video' : 'Watch Video'}
            </button>
          </div>

          {showVideo && (
            <div className="mt-3">
              <ReactPlayer 
                url={video} 
                controls 
                width="100%"
                height="auto"
              />
            </div>
          )}
        </div>
      </article>
    </div>
  );
}

export default Project;
