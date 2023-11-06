const express = require("express");
const router = express.Router();

//khai báo router
router.get("/", (req, res) => {
  res.send("Hello Long Nhat !");
});

router.get("/abc", (req, res) => {
  // res.send("check ABC!");
  res.render("sample.ejs");
});

module.exports = router;
