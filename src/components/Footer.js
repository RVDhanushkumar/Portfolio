import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../Styling/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>© 2024 All rights reserved | RVDhanushKumar</p>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/dhanush-awesome/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/RVDhanushkumar" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
            <li><a href="https://www.instagram.com/dhanush_awesome7/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
            <li><a href="mailto:rapetidhanushkumar13@example.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
