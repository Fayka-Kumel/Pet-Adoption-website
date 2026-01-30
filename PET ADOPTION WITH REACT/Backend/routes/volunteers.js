const pool = require("../db");

async function handleVolunteers(req, res) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", async () => {
      try {
        const {
          firstName,
          lastName,
          email,
          phone,
          availability,
          areaOfInterest,
          experience,
          motivation,
        } = JSON.parse(body);

        if (
          !firstName ||
          !lastName ||
          !email ||
          !availability ||
          !areaOfInterest ||
          !motivation
        ) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ message: "Missing required fields" }),
          );
        }

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

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Volunteer application submitted" }));
      } catch (err) {
        console.error("POSTGRES ERROR 👉", err);
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(
          JSON.stringify({ message: "Server error", error: err.message }),
        );
      }
    });
  } else {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Method not allowed" }));
  }
}

module.exports = handleVolunteers;
