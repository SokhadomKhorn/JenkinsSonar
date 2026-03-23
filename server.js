const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ message: "API is running!" });
});

app.get("/search", (req, res) => {
  res.json({ message: "INSIDE SEARCH API" });
});

app.get("/view", (req, res) => {
  res.json({ message: "INSIDE VIEW API" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
