const express = require("express");
const { getHomePage, getABC } = require("../controllers/homeController");
const router = express.Router();

//router.Method("/router" , handler)
//khai báo router
router.get("/", getHomePage);
router.get("/abc", getABC);

module.exports = router;
