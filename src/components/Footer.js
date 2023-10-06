import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';


import '../styles/footer.css';


export default function Footer() {
    return (
        <footer className="footer">
            <div className='footer-icon-container'>
                <a href='https://github.com/Connor812'>
                    <AiIcons.AiOutlineGithub className="github-icon" />
                </a>
                <a href="https://www.instagram.com/connor_savoy/?hl=en">
                    <BsIcons.BsInstagram className='insta-icon' />
                </a>
                <a href="https://profile.indeed.com/?hl=en_CA&co=CA&from=gnav-homepage&_ga=2.219757593.1633558135.1693538032-1577985438.1682538396&_gac=1.191290968.1693538032.Cj0KCQjw9MCnBhCYARIsAB1WQVVCZ_wcVtS7ibJE3fPuAbthSEt8oAcPoZ-wJyiLlqrRASKarO_-i_caAobXEALw_wcB">
                    <SiIcons.SiIndeed className='indeed-icon' />
                </a>
                <a href="#">
                    <AiIcons.AiFillLinkedin className="linkedin-icon" />
                </a>
            </div>
        </footer>
    )
}