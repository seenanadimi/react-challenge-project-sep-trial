const express = require("express");
const router = express.Router();
const {
  getUsers,
  login,
  register,
  deleteUser,
  deleteAllUsers,
} = require("../controllers/UserControllers");

router.get("/get-users", getUsers);

router.post("/register", register);

router.post("/delete-user", deleteUser);

// router.post("/delete-all-users", deleteAllUsers);
// login expects email/password
// successful login returns email and a fake token (if we ever want to use it)
router.post("/login", login);

module.exports = router;
