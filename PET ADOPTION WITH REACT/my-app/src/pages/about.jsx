import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div id="about-body">

      {/* First Section */}
      <div id="first-section-about">
        <div id="textabout">
          <h2>About Pawsome Adopt</h2>
          <p>
            We're on a mission to give every pet a loving home and every family
            the joy of pet companionship
          </p>
        </div>

        <div id="about1">
          <div>
            <img src="/image/about images/heart.png" alt="heart" />
            <h2>2500+</h2>
            <p>Pets Rescued</p>
          </div>
          <div>
            <img src="image/about images/group.png" alt="family" />
            <h2>1800+</h2>
            <p>Happy Families</p>
          </div>
          <div>
            <img src="image/about images/shield.png" alt="shield" />
            <h2>15+</h2>
            <p>Years of Service</p>
          </div>
          <div>
            <img src="image/about images/experience.png" alt="experience" />
            <h2>98%</h2>
            <p>Success Rate</p>
          </div>
        </div>

        <div id="paragraph-about">
          <h2>Our Story</h2>
          <p>
            Founded in 2009, PawsomeAdopt began with a simple yet powerful vision:
            to create a world where every pet has a loving home and every family
            experiences the unconditional love of a furry companion.
            <br />
            What started as a small shelter in a converted garage has grown into
            one of the region's most trusted pet adoption organizations. We've
            helped thousands of pets find their forever homes and supported
            countless families in their pet parenting journey.
            <br />
            Our dedicated team of animal lovers, veterinarians, and volunteers
            work tirelessly to ensure every pet receives the care, love, and
            attention they deserve while waiting for their perfect match. We
            believe that adoption is not just about finding a home for a pet—it's
            about creating lifelong bonds and enriching lives.
          </p>
        </div>

        {/* Values and Team */}
        <div id="values-and-team">
          <h2>Our Values</h2>
          <div id="values-about">
            <div>
              <h2>Compassion First</h2>
              <p>
                Every decision we make is guided by compassion for animals and the
                people who love them.
              </p>
            </div>
            <div>
              <h2>Transparency</h2>
              <p>
                We believe in honest communication about each pet's history,
                health, and needs.
              </p>
            </div>
            <div>
              <h2>Community</h2>
              <p>
                Building a supportive community of pet lovers who help each other
                thrive.
              </p>
            </div>
          </div>

          <div>
            <h2 style={{ textAlign: "center", marginTop: "80px" }}>
              Meet Our Teams
            </h2>
          </div>

          <div id="about-teams">
            <div>
              <img src="image/about images/letter-t-.png" alt="T" />
              <h3>Tsion Bekalu</h3>
              <p>Founder and CEO</p>
            </div>
            <div>
              <img src="image/about images/letter-f.png" alt="F" />
              <h3>Fayka Kumel</h3>
              <p>Founder and CEO</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default About;