import React from 'react';
import workImage1 from '../assets/img/work1.jpg'; 
import workImage2 from '../assets/img/work2.jpg'; 
import workImage3 from '../assets/img/work3.jpg'; 

const Work = () => {
  return (
    <section className="work section" id="work">
      <h2 className="section-title">Work Experience</h2>
      <div className="work__container bd-grid">
        <div className="work__item">
          <div className="work__img">
            <img src={workImage1} alt="Smile Direct Club" />
          </div>
          <div className="work__details">
            <h3 className="work__title">Customer Service Representative</h3>
            <span className="work__date">2022 - 2023</span>
            <p className="work__company">Smile Direct Club, USA</p>
            <ul className="work__list">
              <li>Directed inbound calls in phone queues to improve call flow.</li>
              <li>Answered customers' questions and addressed problems and complaints.</li>
              <li>Built customer loyalty by placing follow-up calls for customers who reported product issues.</li>
            </ul>
          </div>
        </div>

        <div className="work__item">
          <div className="work__img">
            <img src={workImage2} alt="KSB" />
          </div>
          <div className="work__details">
            <h3 className="work__title">Salesman</h3>
            <span className="work__date">2020 - 2021</span>
            <p className="work__company">KSB, Tunisia</p>
            <ul className="work__list">
              <li>Proactively pursued leads and converted them into sales.</li>
              <li>Provided excellent customer service to enhance satisfaction and drive repeat business.</li>
              <li>Collaborated with the sales team to improve overall sales strategy.</li>
            </ul>
          </div>
        </div>

        <div className="work__item">
          <div className="work__img">
            <img src={workImage3} alt="SOTRAPIL" />
          </div>
          <div className="work__details">
            <h3 className="work__title">HR Assistant Intern</h3>
            <span className="work__date">2020</span>
            <p className="work__company">SOTRAPIL, Tunisia</p>
            <ul className="work__list">
              <li>Assisted with the recruitment process by screening resumes and scheduling interviews.</li>
              <li>Maintained employee records and updated databases.</li>
              <li>Contributed to various HR projects and initiatives.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
