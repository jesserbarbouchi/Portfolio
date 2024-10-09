import React from 'react';

import image1 from '../assets/technologies/React.png';
import image2 from '../assets/technologies/Angular.png';
import image3 from '../assets/technologies/Vuejs.png';
import image4 from '../assets/technologies/axios.png';
import image5 from '../assets/technologies/Bootstrap.png';
import image6 from '../assets/technologies/cs.png';
import image7 from '../assets/technologies/ajax.png';
import image8 from '../assets/technologies/expressjs.png';
import image9 from '../assets/technologies/java.png';
import image10 from '../assets/technologies/js.png';
import image11 from '../assets/technologies/jwt.png';
import image12 from '../assets/technologies/mongodb.png';
import image13 from '../assets/technologies/nodejs.png';
import image14 from '../assets/technologies/nodemailer.png';
import image15 from '../assets/technologies/Oracle.png';
import image16 from '../assets/technologies/php.png';
import image17 from '../assets/technologies/Python.png';
import image18 from '../assets/technologies/reactnative.png';
import image19 from '../assets/technologies/SQL.png';
import image20 from '../assets/technologies/swift.png';
import image21 from '../assets/technologies/typescript.png';

import '../css/technologies.css';

const Technologies = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
  ];

  return (
    <div className="technologies-container">
      <h1 className="page-title">Technologies</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={image} alt={`Technology ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
