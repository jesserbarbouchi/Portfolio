import React from 'react';
import profilePic from '../assets/img/profilepic.jpg';

const Home = () => {
  return (
    <section className="home bd-grid" id="home">
      <div className="home__data">
        <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Jasser Barbouchi</span><br />a Full-Stack Developer</h1>
        <a href="#contact" className="button">Contact</a>
      </div>

      <div className="home__social">
        <a href="https://linkedin.com/in/jasser-barbouchi-939a33228" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
        <a href="https://github.com/jesserbarbouchi" className="home__social-icon"><i className='bx bxl-github'></i></a>
      </div>

      <div className="profile-container">
        <img src={profilePic} alt="Profile" className="profile-img" />
      </div>
    </section>
  );
};

export default Home;
