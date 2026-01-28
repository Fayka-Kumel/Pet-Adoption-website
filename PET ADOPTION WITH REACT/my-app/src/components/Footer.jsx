import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/image/images/Logo.png" alt="Logo" />
          <p>
            Pawsome is a dedicated pet adoption platform connecting lovable
            animals with forever homes. Join us in making a difference, one
            paw at a time.
          </p>
        </div>

        <div className="links">
          <h3>Quick Links</h3>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/available-pets">Available Pets</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/volunteer">Become a volunteer</Link></li>
          </ul>
        </div>

        <div className="contact-options">
          <h3>Contact Us</h3>
          <p>📍 123 Pet Adoption Street, Addis Ababa</p>
          <p>📞 09-12-34-56-78</p>
          <p>💌 info@pawsomeadopt.com</p>
        </div>

        <div className="footer-card">
          <h3>Ready to change a Life?</h3>
          <p>
            Start your journey today and give a pet the loving home they deserve.
            Together, we can make a difference!
          </p>
          <div className="cta-container">
            <Link to="/available-pets">
              <button className="cta main-cta">Browse Pets</button>
            </Link>
            <Link to="/volunteer">
              <button className="cta secondary-cta">Become a volunteer</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <p>© 2024 Pawsome Pet Adoption. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;