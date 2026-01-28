import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import AvailablePets from './pages/availablepets';
import Contact from './pages/contactus';
import Volunteer from './pages/volunteer';

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/available-pets" element={<AvailablePets />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;