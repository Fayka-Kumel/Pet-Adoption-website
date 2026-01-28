import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  // Check localStorage for saved theme, otherwise default to light
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  // This effect runs whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <nav>
      {/* Vite serves images from the public folder directly via / */}
      <img src="public/image/images/Logo.png" alt="Logo" />

      <div className="options">
        {/* NavLink automatically handles the "active" class logic */}
        <NavLink to="/" className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"} end>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}>About</NavLink>
        <NavLink to="/available-pets" className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}>Available Pets</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link selected" : "nav-link"}>Contact Us</NavLink>
      </div>

      <div>
        <NavLink to="/volunteer">
          <button className="volunteer">Become a volunteer</button>
        </NavLink>
        <button 
          onClick={() => setIsDark(!isDark)} 
          className="nav-link" 
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginLeft: '1rem', fontSize: '1.2rem' }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;