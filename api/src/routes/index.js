const express = require("express");
const router = express.Router();

// controllers
const { Login, Register } = require("../controllers/login");

router.get("/", (req, res) => {
  res.send("index api");
});

router.post("/login", Login);
router.post("/register", Register);

module.exports = router;
