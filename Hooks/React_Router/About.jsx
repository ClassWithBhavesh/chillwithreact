import React from 'react';
import './About.css'; // Import the CSS file for styling

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Pawsome GPT</h2>
          <p>
            At <span>Pawsome GPT</span>, we’re passionate about making pet care more
            accessible and tailored to every pet owner’s unique needs. Our AI-powered assistant is here to provide
            personalized care solutions, ensuring that your furry friends get the attention they deserve.
          </p>
          <p>
            Whether it’s offering advice, answering questions, or keeping track of your pet’s health,
            our platform is designed to be a reliable companion for you and your pets 24/7.
          </p>
        </div>
        <div className="about-image">
          <img src="https://via.placeholder.com/400" alt="Pet Assistant" />
        </div>
      </div>
    </div>
  );
};

export default About;
