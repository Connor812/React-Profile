import React, { useState } from 'react';
import '../../styles/contact.css';
import FadeInSection from '../helpers/FadeInProps';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);
    const form = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Check if all fields are filled in
        if (!name || !email || !message) {
            setFormError('Please fill in all fields');
            return;
        }

        // Check if email is valid
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            setFormError('Please enter a valid email address');
            return;
        }

        emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_PUBLIC_KEY
          )
            .then((result) => {
              console.log(result.text);
              setFormSuccess(true);
            }, (error) => {
              console.log(error.text);
            });
        
    }

    return (
        <FadeInSection className="center">
            <div className='contact-form'>
                <h1>Contact Page</h1>
                <form ref={form} onSubmit={handleSubmit}>

                    {/* The warnings and success notifications */}

                    {formError && <div className="alert alert-danger">{formError}</div>}
                    {formSuccess && <div className="alert alert-success">Email has been sent!</div>}

                    {/* The name input */}

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name='from_name' className="form-control" id="name" placeholder="Enter Your Name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>

                    {/* The Email Input */}

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" name="from_email" className="form-control" id="email" placeholder="email@gamil.com" aria-describedby="emailHelp" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* The Message Input */}

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" name="message" id="message" placeholder="Write Message Here" value={message} onChange={(event) => setMessage(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </FadeInSection>
    );
}