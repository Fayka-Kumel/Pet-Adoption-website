const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    availability,
    areaOfInterest,
    experience,
    motivation,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !email ||
    !availability ||
    !areaOfInterest ||
    !motivation
  ) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await pool.query(
      `INSERT INTO volunteers
       (first_name, last_name, email, phone, availability, area_of_interest, experience, motivation)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
      [
        firstName,
        lastName,
        email,
        phone,
        availability,
        areaOfInterest,
        experience,
        motivation,
      ],
    );

    res.status(201).json({ message: "Volunteer application submitted" });
  } catch (err) {
    console.error("POSTGRES ERROR 👉", err);
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

module.exports = router;
