import React from 'react';
import '../../styles/profolio.css';
import Project_1 from '../../assets/images/project-1.jpg';
import Project_2 from '../../assets/images/project-2.jpg';
import Project_3 from '../../assets/images/project-3.jpg';
import Project_4 from '../../assets/images/project-4.jpg';
import Project_5 from '../../assets/images/project-5.jpg';
import Project_6 from '../../assets/images/project-6.jpg';


export default function About() {
  return (
    <div className='center'>
      <div className='profolio-container'>
        <h1>Profolio</h1>
        <div className='row'>
          <div className='col display-btn'>
            <img className='project-img mx-auto d-block' src={Project_1} alt='project-1' />
            <button className='github-btn hover-btn'>Github</button>
            <button className='link-btn hover-btn'>Deployed Link</button>
          </div>
          <div className='col display-btn'>
            <img className='project-img mx-auto d-block' src={Project_2} alt='project-2' />
            <button className='github-btn hover-btn'>Github</button>
            <button className='link-btn hover-btn'>Deployed Link</button>
          </div>
        </div>
        <div className='row'>
          <div className='col display-btn'>
            <img className='project-img mx-auto d-block' src={Project_3} alt='project-3' />
            <button className='github-btn hover-btn'>Github</button>
            <button className='link-btn hover-btn'>Deployed Link</button>
          </div>
          <div className='col display-btn'>
            <img className='project-img mx-auto d-block' src={Project_4} alt='project-4' />
            <button className='github-btn hover-btn'>Github</button>
            <button className='link-btn hover-btn'>Deployed Link</button>
          </div>
        </div>
        <div className='row'>
          <div className='col display-btn'>
            <img className='project-img mx-auto d-block' src={Project_5} alt='project-5' />
            <button className='github-btn hover-btn'>Github</button>
            <button className='link-btn hover-btn'>Deployed Link</button>
          </div>
          <div className='col display-btn'>
            <img className='project-img mx-auto d-block' src={Project_6} alt='project-6' />
            <button className='github-btn hover-btn'>Github</button>
            <button className='link-btn hover-btn'>Deployed Link</button>
          </div>
        </div>

      </div>
    </div>
  );
}