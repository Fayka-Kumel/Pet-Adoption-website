const pool = require("../db");

async function handleVisits(req, res) {
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => (body += chunk.toString()));
    req.on("end", async () => {
      try {
        const { firstName, email, phone, preferredDate, preferredTime } =
          JSON.parse(body);

        if (!firstName || !email || !preferredDate || !preferredTime) {
          res.writeHead(400, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ message: "Missing required fields" }),
          );
        }

        await pool.query(
          `INSERT INTO visit_schedules 
           (first_name, email, phone, preferred_date, preferred_time)
           VALUES ($1, $2, $3, $4, $5)`,
          [firstName, email, phone, preferredDate, preferredTime],
        );

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Visit scheduled successfully" }));
      } catch (err) {
        console.error("Visits POST error:", err);
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

module.exports = handleVisits;
