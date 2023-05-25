const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../schemas/mongooseSchema/userSchema");
const { signUpModel, updateUserInfoModel } = require("../models/usersModel");

async function signup(req, res) {
  const { firstName, lastName, email, dateOfBirth, password, repassword } =
    req.body;
  try {
    const newUser = await User.create({
      firstName,
      lastName,
      dateOfBirth,
      email,
      password,
    });
    const user = await signUpModel(newUser);
    const copyUser = user.toObject();
    delete copyUser.password;
    await res.send(copyUser);
  } catch (err) {
    console.log(err);
  }
}

async function login(req, res) {
  try {
    let { user, token } = req.body;
    user = user.toObject();
    res.cookie("token", token, {
      maxAge: 15151252151251,
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    delete user.password;
    console.log("sending user.. ", user);
    res.send(user);
  } catch (err) {
    console.log(err.message);
  }
}

async function logout(req, res) {
  try {
    if (req.cookies.token) {
      res.clearCookie("token");
    }
    res.send({ ok: true });
  } catch (err) {
    console.log(err.message);
  }
}

async function updateUserInfo(req, res) {
  try {
    const { userId, info } = req.body;
    const userUpdated = await updateUserInfoModel(userId, info);
    console.log("userUpdated", userUpdated)
    if (userUpdated) res.send(userUpdated);
  } catch (err) {
    console.log(err.message);
  }
}

async function getUser(req, res) {
  try {
    const { userId } = req.body;
    const userInfo = await User.findById(userId);
    if (userInfo) res.send(userInfo);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = { signup, login, logout, updateUserInfo, getUser };
