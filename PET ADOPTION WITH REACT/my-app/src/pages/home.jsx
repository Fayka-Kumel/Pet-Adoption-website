import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="body">
      {/* Hero Section */}
      <div className="herosection">
        <div className="herosection-text-container">
          <p className="big-sentence">
            Looking for a <span className="purple-accent-words">good</span> time?
          </p>
          <p>
            Every pet deserves a loving home and every family deserves the joy of
            pet companionship. Browse our adorable pets waiting for their forever
            families and start your journey today!
          </p>

          <div className="cta-container">
            <Link to="/contact" className="cta main-cta">
              Adopt now
              <img src="/image/images/DogPrint.png" alt="Paw image" />
            </Link>
            <Link to="/about" className="cta secondary-cta">
              Learn More</Link>
          </div>

          <div className="experience">
            <div className="experience-element">
              <p className="experience-numbers">2K+</p>
              <p>Pets Adopted</p>
            </div>
            <div className="experience-element">
              <p className="experience-numbers">1.5K+</p>
              <p>Happy Families</p>
            </div>
            <div className="experience-element">
              <p className="experience-numbers">1K+</p>
              <p>Positive Reviews</p>
            </div>
          </div>
        </div>

        <img
          className="herosection-image"
          src="/image/images/Container.png"
          alt="dog and cat"
        />
      </div>

      {/* Why Choose Us */}
      <div className="why-choose-us">
        <p className="section-title">Why Choose Us</p>
        <p>We make pet adoption simple, safe, and joyful</p>
        <div className="why-choose-card">
          <div className="choose-card card">
            <img src="/image/images/Loving Care.png" alt="heart" />
            <p className="card-title">Loving care</p>
            <p>All pets are well-cared for, vaccinated, and ready for their forever families.</p>
          </div>

          <div className="choose-card card">
            <img src="/image/images/Process.png" alt="process" />
            <p className="card-title">Easy Process</p>
            <p>Simple adoption process with guidance every step of the way.</p>
          </div>

          <div className="choose-card card">
            <img src="/image/images/Health.jpg" alt="health" />
            <p className="card-title">Health Guaranteed</p>
            <p>Complete health checks and medical records for every pet.</p>
          </div>

          <div className="choose-card card">
            <img src="/image/images/Support.png" alt="support" />
            <p className="card-title">24/7 Support</p>
            <p>We're here for you and your pet long after adoption.</p>
          </div>
        </div>
      </div>

      {/* Adoption Steps */}
      <div className="how-adoption-work">
        <p className="section-title">How adoption Works?</p>
        <p>Simple steps to find your perfect companion</p>
        <div className="how-adoption-cards">
          <div className="adoption-card card">
            <p className="card-number">01</p>
            <p className="card-title">Browse Pets</p>
            <p>Explore our available pets and find the one that matches your lifestyle.</p>
          </div>

          <div className="adoption-card card">
            <p className="card-number">02</p>
            <p className="card-title">Meet & Greet</p>
            <p>Schedule a visit to meet your potential new family member in person.</p>
          </div>

          <div className="adoption-card card">
            <p className="card-number">03</p>
            <p className="card-title">Application</p>
            <p>Fill out our simple adoption application and provide necessary information.</p>
          </div>

          <div className="adoption-card card">
            <p className="card-number">04</p>
            <p className="card-title">Welcome Home</p>
            <p>Complete the process and bring your new companion home!</p>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="success-stories">
        <p className="section-title">Success Stories</p>
        <p>See how adoption changed lives for the better</p>
        <div className="stories-cards">
          <div className="story-card card">
            <img src="/image/images/max.png" alt="adopted dog" />
            <div className="story-text">
              <p className="story-name">Sarah & Max</p>
              <p className="story-breed">Golden Retriever</p>
              <p className="story-quote">
                "Max has brought so much joy to our family. He's the perfect companion!"
              </p>
            </div>
          </div>

          <div className="story-card card">
            <img src="/image/images/luna.png" alt="adopted cat" />
            <div className="story-text">
              <p className="story-name">John & Luna</p>
              <p className="story-breed">Domestic Shorthair</p>
              <p className="story-quote">
                "Luna is the sweetest cat. She's made our house a home with her cuddles."
              </p>
            </div>
          </div>

          <div className="story-card card">
            <img src="/image/images/charlie.png" alt="adopted dog" />
            <div className="story-text">
              <p className="story-name">Emily & Charlie</p>
              <p className="story-breed">Mixed Breed</p>
              <p className="story-quote">
                "Charlie is amazing with our kids. Best decision we ever made!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;