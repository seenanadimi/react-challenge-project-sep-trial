const express = require("express");
const router = express.Router();
const { getUsers, login, register } = require("../controllers/UserControllers");

router.get("/get-users", getUsers);

router.post("/register", register);
// login expects email/password
// successful login returns email and a fake token (if we ever want to use it)
router.post("/login", login);

module.exports = router;
