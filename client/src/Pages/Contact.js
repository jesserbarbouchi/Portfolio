// Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json(); // Parse the response as JSON
        if (response.ok) {
            setFormData({ name: '', email: '', message: '' });
            alert('Message sent successfully!');
        } else {
            console.error('Error from server:', data); // Log error response from server
        }
    } catch (error) {
        console.error('Error sending message:', error);
    }
};


  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__inputs">
          <input type="text" className="contact__input" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
          <input type="email" className="contact__input" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <textarea className="contact__input contact__area" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        <button className="button">Send</button>
      </form>
<div className="social-links">
  <h3>Connect with me:</h3>
  <a href="https://linkedin.com/in/jasser-barbouchi-939a33228" target="_blank" rel="noopener noreferrer">LinkedIn</a>
  <a href="https://github.com/jesserbarbouchi" target="_blank" rel="noopener noreferrer">GitHub</a>
</div>

    </section>
  );
};

export default Contact;
