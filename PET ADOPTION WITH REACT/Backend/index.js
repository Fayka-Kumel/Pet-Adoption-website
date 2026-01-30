const http = require("http");
const pool = require("./db"); // adjust path to your db.js
const handleVisits = require("./routes/visits");
const handleVolunteers = require("./routes/volunteers");

const server = http.createServer((req, res) => {
  // Handle CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  // Routing
  if (req.url.startsWith("/api/visits")) {
    return handleVisits(req, res);
  } else if (req.url.startsWith("/api/volunteers")) {
    return handleVolunteers(req, res);
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(5000, () => {
  console.log("Backend running on port 5000");
});
