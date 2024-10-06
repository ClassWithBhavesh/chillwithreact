import React from 'react';
import './landing.css'; // Make sure to import the CSS file
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <h1 className="logo">Pawsome GPT</h1>
        <ul className="nav-links">
          <li><Link to="/Features">Features</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <header className="header">
        <h2>Welcome to the Future of Pet Care</h2>
        <p>Let our intelligent assistant help you with your pet's needs 24/7.</p>
        <button className="cta-btn">Get Started</button>
      </header>
      <section className="features" id="features">
        <div className="feature-item">
          <h3>AI-Powered Suggestions</h3>
          <p>Receive custom advice based on your pet's behavior.</p>
        </div>
        <div className="feature-item">
          <h3>24/7 Assistance</h3>
          <p>Get real-time responses to your pet queries, anytime.</p>
        </div>
      </section>
      <footer className="footer" id="contact">
        <p>Contact Us: info@pawsomegpt.com</p>
        <p>&copy; 2024 Pawsome GPT. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
