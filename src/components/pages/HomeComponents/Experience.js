import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/experience.css';
import * as PiIcons from 'react-icons/pi' 

function Experience() {
    return (
        <div className='experience-container'>
            <div className='experience-content-wrapper'>
                <div className='experience-title'>
                    Experience
                </div>
                <div className='experience-content'>
                    <Link to="/projects" className='btn'>
                        View All Projects <PiIcons.PiProjectorScreenChart className='projects-icon'/>
                    </Link>
                        <p>
                            I've been coding for just over a year now and I have plenty of projects I've worked on during this time.
                        </p>
                        <p>
                            My most memorable projects have been <b>Space-Quest</b>, which was my first collaborative project with a partner. It was also my first time interacting with an api.
                        </p>
                        <p>
                            My Second project was <b>Cassie's Cook Book</b>. This was my first time using a framework to build a dynamic website that didn't need to be re-render when changes were made to the DOM and it had a server database.
                        </p>
                        <p>
                            Finally my final project in school was a a React application called <b>Manga-Verse</b>. It was very dynamic, build with our own database, and I used graphQL to communicate to the database. This application also taught me a lot about CSS styling.
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Experience