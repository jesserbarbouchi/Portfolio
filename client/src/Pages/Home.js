import React from 'react';
import profilePic from '../assets/img/profilepic.jpg';
import '../css/home.css';

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">
          Hi,<br />
          I am <span className="home__title-color">Jasser</span> <span className="home__title-color">Barbouchi</span><br />
          a <span className="home__title-color">Full-Stack Developer</span>
        </h1>
        <p className="home__description">
          I have a passion for creating dynamic and user-friendly web applications. With experience in various technologies, I am always eager to learn more. In my free time, I enjoy exploring new technologies, contributing to open-source projects, and working on personal projects to enhance my skills.
        </p>
        <a href="/contact" className="button">Contact</a>
      </div>

      <div className="home__social">
        <a
          href="https://linkedin.com/in/jasser-barbouchi-939a33228"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-linkedin'></i>
        </a>
        <a
          href="https://github.com/jesserbarbouchi"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-github'></i>
        </a>
        <a
          href="https://twitter.com/your_twitter_handle"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-twitter'></i>
        </a>
        <a
          href="https://instagram.com/your_instagram_handle"
          className="home__social-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className='bx bxl-instagram'></i>
        </a>
      </div>

      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
