import React from 'react';
import profileImg from '../../assets/images/profile-picture.jpg'

export default function Home() {
    return (
        <div className='center'>
            <div className='about-me-box'>
                <div className='about-me'>
                    About Me
                </div>
                <img className='profile-img' src={profileImg} alt='profile' />
                <div className='description'>
                    <div>
                        Hello everyone! My name is Connor Savoy and I am from Langton Ontario! I'm currently enrolled at the University of Toronto in a full-stack coding bootcamp. I enrolled in this course because of my love for technology and computers. Coding is an amazing way to expand on those horizons and build something amazing from at first glace, looks likea bunch of mumbo-gumbo.
                    </div>
                    <div>
                        I love the problem solving aspect of coding. It always keeps me on my toes and looking for new inovative ways to write code and solve my problems.
                    </div>
                    <div>
                        As of right now my favourite code to write is back-end server side scripts. I like coding the databases and writing out complex querys to sort and manuver through a database.
                    </div>
                </div>
            </div>
        </div>
    );
}
