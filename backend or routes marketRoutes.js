const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    { crop: "Rice", price: 2500 },
    { crop: "Maize", price: 2200 }
  ]);
});

module.exports = router;
