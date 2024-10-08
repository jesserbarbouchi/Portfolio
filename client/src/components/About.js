import React from 'react';
import aboutImage from '../assets/img/about.jpg'; 

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about__container bd-grid">
        <div className="about__img">
          <img src={aboutImage} alt="About" />
        </div>
        <div>
          <h2 className="about__subtitle">I'am Jasser</h2>
          <p className="about__text">I am Jasser Barbouchi a Full-Stack Software Developer. I am a finishing student in AEC Information technology Programmer-Analyst at LaSalle College, Currently looking for a job as a Software Developer where I can apply my skills and knowledge learnt throughout my studies. I did a lot of projects on my own and looking to attain more experience.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
