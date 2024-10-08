import React from 'react';
import aboutImage from '../assets/img/about.jpg'; 
const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImage} alt="About" />
        </div>
        <div>
          <h2 className="about__subtitle">I'am Jasser</h2>
          <p className="about__text">I am Jasser Barbouchi a Full-Stack Software Developer with a passion for creating dynamic and user-friendly web applications. I have experience in various technologies and always eager to learn more.
          In my free time, I enjoy exploring new technologies, contributing to open-source projects, and working on personal projects to improve my skills.
          </p>
        </div>
      </div>
    </section>
    </div>

    </div>
  );
};

export default About;
