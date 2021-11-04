const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

module.exports = {
  getUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json({ success: true, users });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  },
  register: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ msg: "Enter all fields!" });
      }
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
        return res.status(400).json({ msg: "User with email already exists!" });
      }

      const salt = await bcrypt.genSalt();
      const passHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        password: passHash,
      });
      const savedUser = await newUser.save();

      res.json(savedUser);
    } catch (err) {
      res.status(500).json({ error });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        res
          .status(400)
          .json({ success: false, error: "Not all fields have been entered!" });
        return;
      }
      const user = await User.findOne({ email: email });
      if (!user) {
        res
          .status(400)
          .json({ msg: "No account with this email has been registered!" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ msg: "Invalid credentials!" });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      res.status(200).json({ success: true, email: email, token: token });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: "Unknown error (status 500)" });
    }
  },
  deleteUser: async (req, res) => {
    try {
      // expects id
      if (!req.body.id) {
        res.status(400).json({ success: false, error: "No id supplied" });
        return;
      }

      // make sure an order exists in the database with that id
      const targetUser = await User.findOne({ _id: req.body.id });
      if (!targetUser) {
        res
          .status(400)
          .json({ success: false, error: "No user exists with that id!" });
        return;
      }

      const deleteResponse = await User.deleteOne({ _id: req.body.id });
      if (!deleteResponse || !deleteResponse) {
        res
          .status(400)
          .json({ success: false, error: "Unable to delete from database" });
        return;
      }

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  },

  deleteAllUsers: async (req, res) => {
    try {
      // HITTING THIS ENDPOINT DELETES ALL USERS
      const deleteResponse = await User.deleteMany({});
      if (!deleteResponse) {
        res
          .status(400)
          .json({ success: false, error: "Error deleting all users." });
        return;
      }
      res.status(200).json({ success: true, deleted: deleteResponse.n });
    } catch (error) {
      res.status(500).json({ success: false, error });
    }
  },
};
