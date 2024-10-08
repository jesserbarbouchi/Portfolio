import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact__form">
        <div className="contact__inputs">
          <input type="text" className="contact__input" placeholder="Your Name" />
          <input type="email" className="contact__input" placeholder="Your Email" />
        </div>
        <textarea className="contact__input contact__area" placeholder="Your Message"></textarea>
        <button className="button">Send</button>
      </form>
    </section>
  );
};

export default Contact;
