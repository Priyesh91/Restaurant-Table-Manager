const router = require("express").Router();
const path = require("path");

router.get("/tables", function(req, res)
{
  res.sendFile(path.join(__dirname, "../public/tables.html"));
});

router.get("/reserve", function(req, res)
{
  res.sendFile(path.join(__dirname, "../public/reserve.html"));
});

router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;