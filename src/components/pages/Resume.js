import React from 'react';
import '../../styles/resume.css';
import ConnorsResume from "../../assets/resume/Connor's-Resume.docx";
import FadeInSection from '../helpers/FadeInProps';

import * as HiIcons from 'react-icons/hi2';

export default function Resume() {
    return (
        <FadeInSection className="center">
            <div className="resume-description">
                <h1>
                    Resume
                </h1>
                <p>
                    This is my resume and here are some of the skills I have picked up over the course of the Bootcamp at University of Toronto:
                </p>
                <ul>
                    <li>
                        HTML
                    </li>
                    <li>
                        CSS
                    </li>
                    <li>
                        JavaScript
                    </li>
                    <li>
                        NodeJS
                    </li>
                    <li>
                        Express
                    </li>
                    <li>
                        MySQL
                    </li>
                    <li>
                        Mongoos
                    </li>
                    <li>
                        React
                    </li>
                </ul>
                <div className="center">
                    <a href="https://github.com/Connor812/Resume/raw/main/Connor's%20Resume.pdf" download>
                        <HiIcons.HiOutlineNewspaper className="resume-icon" />
                    </a>
                </div>
            </div>
        </FadeInSection>
    )
}