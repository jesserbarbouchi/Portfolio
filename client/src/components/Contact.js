import React, { useState } from 'react';

// Function to validate Canadian phone numbers (format: +1 xxx-xxx-xxxx or (xxx) xxx-xxxx)
const isValidCanadianPhoneNumber = (phoneNumber) => {
  const phoneRegex = /^(\+1\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  return phoneRegex.test(phoneNumber);
};

const Contact = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '', 
    socialMedia: { linkedin: '', github: '', twitter: '' } 
  });
  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['linkedin', 'github', 'twitter'].includes(name)) {
      setFormData({ ...formData, socialMedia: { ...formData.socialMedia, [name]: value } });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    if (formData.phone && !isValidCanadianPhoneNumber(formData.phone)) {
      newErrors.phone = 'Invalid Canadian phone number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    // Prepare the data to be sent to the server
    const dataToSend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        linkedin: formData.socialMedia.linkedin || "null", // Use null if no link is provided
        github: formData.socialMedia.github || "null",
        twitter: formData.socialMedia.twitter || "null",
    };

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend), // Send the flattened object
        });

        const data = await response.json();
        if (response.ok) {
            setFormData({ 
                name: '', 
                email: '', 
                phone: '', 
                message: '', 
                socialMedia: { linkedin: '', github: '', twitter: '' } 
            });
            alert('Message sent successfully!');
        } else {
            console.error('Error from server:', data);
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
          <input type="text" className="contact__input" name="phone" placeholder="Your Phone Number - Ex: 111-222-3333" value={formData.phone} onChange={handleChange} />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>
        <textarea className="contact__input contact__area" name="message" placeholder="Your Message" value={formData.message} onChange={handleChange}></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        
        <div className="social-media">
          <h3>Social Media (Optional):</h3>
          <input type="text" className="contact__input" name="linkedin" placeholder="LinkedIn Profile URL" value={formData.socialMedia.linkedin} onChange={handleChange} />
          <input type="text" className="contact__input" name="github" placeholder="GitHub Profile URL" value={formData.socialMedia.github} onChange={handleChange} />
          <input type="text" className="contact__input" name="twitter" placeholder="Twitter Profile URL" value={formData.socialMedia.twitter} onChange={handleChange} />
        </div>

        <button className="button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
