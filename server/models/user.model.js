const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter valid email"],
  },
  password: { type: String, required: true, minLength: 3 },
});

module.exports = User = mongoose.model("user", userSchema);
