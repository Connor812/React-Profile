import React, { useState } from 'react';
import '../styles/contact.css';


export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [formError, setFormError] = useState('');
    const [formSuccess, setFormSuccess] = useState(false);

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

        // All fields are valid, submit form
        console.log('Submitting form', { name, email, message });
        setFormError('');
        setFormSuccess(true);
    }

    return (
        <div className="center">
            <div className='contact-form'>
                <h1>Contact Page</h1>
                <form onSubmit={handleSubmit}>

                    {/* The warnings and success notifications */}

                    {formError && <div className="alert alert-danger">{formError}</div>}
                    {formSuccess && <div className="alert alert-success">Email has been sent!</div>}

                    {/* The name input */}

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Your Name" value={name} onChange={(event) => setName(event.target.value)} />
                    </div>

                    {/* The Email Input */}

                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="email@gamil.com" aria-describedby="emailHelp" value={email} onChange={(event) => setEmail(event.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>

                    {/* The Message Input */}

                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" placeholder="Write Message Here" value={message} onChange={(event) => setMessage(event.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}