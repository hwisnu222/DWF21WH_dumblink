const express = require("express");
const router = express.Router();

// authentification
const { authentication } = require("../middlewares/auth");

// upload
const { uploadFile } = require("../middlewares/upload");

// controllers
const { Login, Register, CheckToken } = require("../controllers/login");

const {
  ViewCount,
  getLink,
  deleteLink,
  addLink,
  updateLink,
  getLinkDetail,
} = require("../controllers/Link");
const { UpdateUser, DeleteUser, getUser } = require("../controllers/User");

router.get("/", (req, res) => {
  res.send("index api");
});

router.post("/login", Login);
router.post("/register", Register);
router.get("/view/:id", ViewCount);
router.put("/update", authentication, UpdateUser);
router.get("/profile", authentication, getUser);
router.get("/auth", authentication, CheckToken);
router.delete("/delete", authentication, DeleteUser);

router.post("/add-link", authentication, uploadFile("imageFile"), addLink);
router.get("/link", authentication, getLink);
router.get("/detail/:id", getLinkDetail);
router.delete("/delete-link/:id", authentication, deleteLink);
router.put("/update-link/:id", authentication, updateLink);

module.exports = router;
