import React, { useState } from 'react';
import Projects from '../helpers/exportImages.js';
import ImageComponent from '../helpers/imageComponent';
import FadeInSection from '../helpers/FadeInProps.js';

import * as AiIcons from 'react-icons/ai';
import * as TbIcons from 'react-icons/tb';

import '../../styles/projects.css';

export default function Portfolio() {

  const src = "https://images.upsplash.com/photo-1518837695005-309093ee35b?ixlib=rb-0.4.3&w=1170&q=80";

  return (
    <div className='projects-subtitle'>

      <div className='connors-projects'>
        Connor's Projects
      </div>
      <div className=''>
        This is a gallery of some of the projects I have worked on through out my time in the University of Toronto Full Stack Bootcamp.
      </div>

      <section className="projects-container">

        {Projects.map((project, index) => {
          return (
            <FadeInSection key={index} >
              <div className='project'>
                <ImageComponent
                  id={`${project.name}`}
                  className="project-img"
                  loading="lazy"
                  src={project.url}
                  alt={project.name}
                  width={500}
                  height={350}
                  hash={project.hash}
                />
                <div className='project-content-container'>
                  <div className='project-title'>
                    {project.name}
                  </div>
                  <div className="project-desc">
                    {project.desc}
                  </div>
                  <div className='link-icons'>
                    <AiIcons.AiFillGithub className='github-icon' />
                    <TbIcons.TbWorld className='website-icon' />
                  </div>
                </div>
              </div>
            </FadeInSection>

          )
        })}

      </section>

    </div>
  );
}
