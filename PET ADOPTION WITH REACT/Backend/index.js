const express = require("express");
const cors = require("cors");

const visitRoutes = require("./routes/visits");
const volunteerRoutes = require("./routes/volunteers");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/visits", visitRoutes);
app.use("/api/volunteers", volunteerRoutes);

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
