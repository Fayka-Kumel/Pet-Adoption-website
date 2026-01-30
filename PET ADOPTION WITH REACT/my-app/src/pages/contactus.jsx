import React, { useEffect, useRef } from "react";

const Contact = () => {
  const formRef = useRef(null);

  /* ---------------- NAV LINK HIGHLIGHT ---------------- */
  useEffect(() => {
    document.querySelectorAll(".nav-link").forEach((link) => {
      if (link.pathname === window.location.pathname) {
        link.classList.add("selected");
      }
    });
  }, []);

  /* ---------------- ERROR UTILS (DOM-BASED) ---------------- */
  const showError = (input, message) => {
    clearError(input);
    const error = document.createElement("small");
    error.className = "error-message";
    error.style.color = "red";
    error.style.display = "block";
    error.style.marginTop = "5px";
    error.innerText = message;
    input.insertAdjacentElement("afterend", error);
  };

  const clearError = (input) => {
    const nextEl = input.nextElementSibling;
    if (nextEl && nextEl.classList.contains("error-message")) {
      nextEl.remove();
    }
  };

  /* ---------------- FORM SUBMIT ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Remove old errors
    document.querySelectorAll(".error-message").forEach((el) => el.remove());

    const fname = document.querySelector("#fname");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const date = document.querySelector("#date");
    const time = document.querySelector("#time");

    let valid = true;

    if (fname.value.trim().length < 2) {
      showError(fname, "First name must be at least 2 characters.");
      valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
      showError(email, "Please enter a valid email address.");
      valid = false;
    }

    const phonePattern = /^[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}$/;
    if (!phonePattern.test(phone.value.trim())) {
      showError(phone, "Phone number must follow the format 09-12-34-56-78.");
      valid = false;
    }

    if (!date.value.trim()) {
      showError(date, "Please select a preferred date.");
      valid = false;
    }

    if (!time.value.trim()) {
      showError(time, "Please select a preferred time.");
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await fetch("/api/visits", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fname.value.trim(),
          email: email.value.trim(),
          phone: phone.value.trim(),
          preferredDate: date.value,
          preferredTime: time.value,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Visit scheduled successfully!");
        formRef.current.reset();
      } else {
        alert(`${data.message}`);
      }
    } catch (err) {
      console.error(err);
      alert("Server error. Try again later.");
    }
  };

  return (
    <div id="contact-body">
      <div id="first-text">
        <h2>Get In Touch</h2>
        <p>We'd love to hear from you! Reach out with any questions.</p>
      </div>
      <div id="get-in-touch">
        <div id="contact-form">
          <h2>Schedule Your Pet Visit</h2>

          <form ref={formRef} onSubmit={handleSubmit}>
            <label htmlFor="fname">First name:</label>
            <br></br>
            <input id="fname" name="fname" type="text" placeholder="John" />
            <br></br>

            <label htmlFor="email">Email:</label>
            <br></br>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="abc@gmail.com"
            />
            <br></br>

            <label htmlFor="phone">Phone Number:</label>
            <br></br>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="09-12-34-56-78"
            />
            <br></br>

            <label htmlFor="date">Preferred Date:</label>
            <input
              id="date"
              name="date"
              type="date"
              min={new Date().toISOString().split("T")[0]}
            />

            <label htmlFor="time">Preferred Time:</label>
            <input id="time" name="time" type="time" />

            <button type="submit" id="submit-button">
              Submit
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div id="contact-info">
          <div id="contact-info1">
            <h2>Contact Information</h2>
            <div>
              <img src="image/contact.images/location.png" alt="location" />
              <p>
                Visit Us <br />
                123 Pet Adoption Street,
                <br />
                Addis Ababa
              </p>
            </div>
            <div>
              <img src="image/contact.images/phone.png" alt="phone" />
              <p>
                Call Us <br />
                09-12-34-56-78
                <br />
                09-23-45-67-89
              </p>
            </div>
            <div>
              <img src="image/contact.images/gmail.png" alt="email" />
              <p>
                Email Us <br />
                info@Pawsomeadopt.com
                <br />
                support@Pawsomeadopt.com
              </p>
            </div>
            <div>
              <img src="image/contact.images/clock.png" alt="hours" />
              <p>
                Hours
                <br />
                Monday-Friday: 2am-6pm
                <br />
                Saturday: 10am-4pm
                <br />
                Sunday: closed
              </p>
            </div>
          </div>

          <div id="emergency">
            <h3>Emergency?</h3>
            <p>
              If you've found a stray or injured animal, please call our 24/7
              emergency hotline:
            </p>
            <p id="emergency-second-p">09-12-34-56-78</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
