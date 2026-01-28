import React, { useState, useEffect } from "react";

const Volunteer = () => {
  // 1. Scroll to top on load and set Nav highlight
  useEffect(() => {
    window.scrollTo(0, 0);
    document.querySelectorAll(".nav-link").forEach(link => {
      if (link.pathname === window.location.pathname) {
        link.classList.add("selected");
      }
    });
  }, []);

  // 2. Form State
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    availabilities: "",
    experience: "",
    reason: "",
    interests: [] // Array to hold selected checkboxes
  });

  const [errors, setErrors] = useState({});

  // 3. Handle Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 4. Handle Checkbox Changes
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    let updatedInterests = [...formData.interests];

    if (checked) {
      updatedInterests.push(value);
    } else {
      updatedInterests = updatedInterests.filter((item) => item !== value);
    }
    setFormData({ ...formData, interests: updatedInterests });
  };

  // 5. Validation Logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.fname.trim()) tempErrors.fname = "First name is required.";
    if (!formData.lname.trim()) tempErrors.lname = "Last name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(formData.email)) tempErrors.email = "Enter a valid email.";
    if (!/^09-\d{2}-\d{2}-\d{2}-\d{2}$/.test(formData.phone)) tempErrors.phone = "Format: 09-12-34-56-78.";
    if (!formData.availabilities.trim()) tempErrors.availabilities = "Please specify availability.";
    if (formData.interests.length === 0) tempErrors.interests = "Select at least one area of interest.";
    if (!formData.experience.trim()) tempErrors.experience = "Mention experience or write 'None'.";
    if (!formData.reason.trim()) tempErrors.reason = "Please tell us why you want to volunteer.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("🎉 Thank you for applying to volunteer! We’ll get back to you soon.");
      // Reset form
      setFormData({
        fname: "", lname: "", email: "", phone: "",
        availabilities: "", experience: "", reason: "", interests: []
      });
      setErrors({});
      e.target.reset();
    }
  };

  return (
    <div id="volunteer-body">
      <div id="first">
        <div id="volunteer-paragraph">
          <h2 style={{ fontSize: "50px" }}>
            Become a <span style={{ color: "rgb(146,138,255)" }}>volunteer</span>
          </h2>
          <p>Join our passionate team of volunteers and make a difference in the lives of pets. Whether you have a few hours a week or want a more involved role, we have opportunities for everyone!</p>
          <button onClick={() => document.getElementById('fifth-form').scrollIntoView({ behavior: 'smooth' })}>
            Apply Now
          </button>
        </div>

        <div id="first-imgs">
          <img src="image/volunteer images/dog1.jpeg" alt="dog" />
          <img src="image/volunteer images/cat1.jpg" alt="cat" />
          <img src="image/volunteer images/dog2.jpeg" alt="dog" />
          <img src="image/volunteer images/cat2.png" alt="cat" />
        </div>
      </div>

      <div id="second">
        <h2 style={{ marginTop: "60px" }}>Why Volunteer with us?</h2>
        <p>The rewards of volunteering go both ways</p>
        <div id="volunteering-reasons">
          <div>
            <img src="image/volunteer images/heart.png" alt="heart" />
            <h4>Make a Difference</h4>
            <p>Directly impact the lives of animals in need</p>
          </div>
          <div>
            <img src="image/volunteer images/group.png" alt="people" />
            <h4>Join Our Community</h4>
            <p>Connect with fellow animal lovers</p>
          </div>
          <div>
            <img src="image/volunteer images/experience.png" alt="experience" />
            <h4>Gain Experience</h4>
            <p>Learn valuable skills in animal care</p>
          </div>
          <div>
            <img src="image/volunteer images/give.png" alt="give" />
            <h4>Feel Fulfilled</h4>
            <p>Experience the joy of helping animals</p>
          </div>
        </div>
      </div>

      <div id="third">
        <h2>Volunteer opportunities</h2>
        <p>Find the perfect role that matches your interest and role</p>
        <div id="volunteer-opportunities">
          {[
            { img: "heart.png", title: "Pet Caretaker", desc: "Help with daily care, feeding, and playtime." },
            { img: "paw.png", title: "Dog Walker", desc: "Take our energetic dogs for walks and outdoor activities." },
            { img: "event.png", title: "Event Coordinator", desc: "Assist in organizing adoption events and fundraisers." },
            { img: "house.png", title: "Foster Parent", desc: "Provide temporary homes for pets awaiting adoption." },
            { img: "group.png", title: "Social Media Helper", desc: "Help showcase our pets online." },
            { img: "experience.png", title: "Administrative Support", desc: "Assist with paperwork, scheduling, and office tasks." },
          ].map((op, index) => (
            <div key={index}>
              <img src={`image/volunteer images/${op.img}`} alt={op.title} />
              <h4>{op.title}</h4>
              <p>{op.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div id="fourth">
        <div id="h-and-p">
          <h2>Volunteer Requirements</h2>
          <p>Simple qualifications to join our team</p>
        </div>
        <div id="requirements">
          <div id="requirements1">
            <ul>
              <li>Must be 18 years or older (16+ with parental consent)</li>
              <li>Ability to follow instructions and work as part of a team</li>
              <li>Physical ability to handle pets safely</li>
            </ul>
          </div>
          <div id="requirements2">
            <ul>
              <li>Genuine love for animals and commitment to their welfare</li>
              <li>Reliable and able to commit to a regular schedule</li>
              <li>Pass a background check (for certain roles)</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="fifth">
        <div style={{ textAlign: "center" }}>
          <h2>Apply To Volunteer</h2>
          <p>Fill out the form below and we'll get back to you soon</p>
        </div>
        <div id="fifth-form">
          <form onSubmit={handleSubmit}>
            <div id="first-part">
              <div id="name">
                <label htmlFor="fname">First name:</label><br />
                <input type="text" id="fname" name="fname" placeholder="John" onChange={handleInputChange} />
                {errors.fname && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.fname}</small>}
                
                <br /><label htmlFor="email">Email:</label><br />
                <input type="email" id="email" name="email" placeholder="abc@gmail.com" onChange={handleInputChange} />
                {errors.email && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.email}</small>}
              </div>

              <div id="email&phone">
                <label htmlFor="lname">Last name:</label><br />
                <input type="text" id="lname" name="lname" placeholder="Doe" onChange={handleInputChange} />
                {errors.lname && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.lname}</small>}
                
                <br /><label htmlFor="phone">Phone Number:</label><br />
                <input type="tel" id="phone" name="phone" placeholder="09-12-34-56-78" onChange={handleInputChange} />
                {errors.phone && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.phone}</small>}
              </div>
            </div>

            <div id="availability">
              <br /><label htmlFor="availabilities">Availability:</label><br />
              <input type="text" id="availabilities" name="availabilities" placeholder="eg: Two times a week" onChange={handleInputChange} />
              {errors.availabilities && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.availabilities}</small>}
            </div>

            <p style={{ marginTop: "20px" }}>Areas of Interest:</p>
            <div id="area-of-interest" style={{ marginLeft: "30px" }}>
              {[
                { id: "option1", val: "Caretaker", label: "Pet Caretaker" },
                { id: "option2", val: "eventcoordinator", label: "Event Coordinator" },
                { id: "option3", val: "socialmedia", label: "Social Media" },
                { id: "option4", val: "Dogwalker", label: "Dog Walker" },
                { id: "option5", val: "Fosterparent", label: "Foster Parent" },
                { id: "option6", val: "Adminstrativesupport", label: "Administrative Support" },
              ].map(opt => (
                <div key={opt.id} style={{ marginBottom: "10px" }}>
                  <input type="checkbox" id={opt.id} name="interests" value={opt.val} onChange={handleCheckboxChange} />
                  <label htmlFor={opt.id}> {opt.label}</label>
                </div>
              ))}
              {errors.interests && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.interests}</small>}
            </div>

            <div id="exp-and-reason">
              <br /><label htmlFor="experience">Previous Experience with Animals:</label><br />
              <input type="text" id="experience" name="experience" placeholder="Mention previous experience" onChange={handleInputChange} />
              {errors.experience && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.experience}</small>}

              <br /><label htmlFor="reason">Why Do You Want To Volunteer:</label><br />
              <input type="text" id="reason" name="reason" placeholder="Tell us about your passion" onChange={handleInputChange} />
              {errors.reason && <small className="error-message" style={{ color: "red", display: "block" }}>{errors.reason}</small>}
            </div>

            <input type="submit" id="submit" value="Submit" style={{ marginTop: "20px" }} />
          </form>
        </div>
      </div>

      <div id="sixth">
        <h2>Have Questions?</h2>
        <p>Our volunteer coordinator is here to help answer any questions you may have.</p>
      </div>

      <div id="contact" style={{ display: "flex", justifyContent: "center", gap: "50px", paddingBottom: "50px" }}>
        <div className="contact-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="image/volunteer images/gmail.png" alt="email" width="40" />
          <p>Email<br />pawsome@gmail.com</p>
        </div>
        <div className="contact-item" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img src="image/volunteer images/phone.png" alt="phone" width="40" />
          <p>Phone<br />+2519-12-34-57-89</p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;