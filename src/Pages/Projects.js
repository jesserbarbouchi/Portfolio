import React from 'react';
import Project from '../components/Project';
import { projectDetails } from '../Details';

function Projects() {
  return (
    <main className="container mx-auto pt-10 mb-20">
      <section>
        <h1 className="text-center display-4 font-weight-bold mb-4">Projects</h1>
        <div className="row">
          {projectDetails.map(({ title, image, description, techstack, previewLink, githubLink }) => (
            <div className="col-md-6 col-lg-4 mb-4" key={title}>
              <Project
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
