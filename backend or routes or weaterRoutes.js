const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    temperature: "30°C",
    humidity: "70%"
  });
});

module.exports = router;
