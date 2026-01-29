const express = require("express");
const pool = require("../db");

const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, email, phone, preferredDate, preferredTime } = req.body;

  if (!firstName || !email || !preferredDate || !preferredTime) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    await pool.query(
      `INSERT INTO visit_schedules 
       (first_name, email, phone, preferred_date, preferred_time)
       VALUES ($1, $2, $3, $4, $5)`,
      [firstName, email, phone, preferredDate, preferredTime],
    );

    res.status(201).json({ message: "Visit scheduled successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
