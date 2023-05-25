const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstName: String, // String is shorthand for {type: String}
    lastName: String,
    dateOfBirth: String,
    email: String,
    password: String,
    fico: String,
    questions: Object,
    data: Object
  },
  { collection: "users" }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
