const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { crop: "Rice" },
    { crop: "Maize" },
    { crop: "Cotton" }
  ]);
});

module.exports = router;
