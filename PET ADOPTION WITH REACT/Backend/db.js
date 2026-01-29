const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "pet_adoption",
  password: "53457760t",
  port: 5432,
});

module.exports = pool;
