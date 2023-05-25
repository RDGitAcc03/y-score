const {
    getUserByEmailModel,
    getUserByIdModel,
  } = require("../models/usersModel");
  const bcrypt = require("bcrypt");
  const jwt = require("jsonwebtoken");
  
  function passwordsMatch(req, res, next) {
    if (req.body.password === req.body.repassword) {
      next();
      return;
    }
  
    res.status(400).send("Password don't match");
  }
  
  async function doesUserExist(req, res, next) {
    const user = await getUserByEmailModel(req.body.email);
    if (user) {
      res.status(400).send("User Already Exists");
      return;
    }
    next();
  }
  
  async function hashPwd(req, res, next) {
    const saltRounds = 10;
    if (req.body.password) {
      bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
          res.status(500).send(err.message);
          return;
        }
        req.body.password = hash;
        next();
      });
    } else {
      const { userId } = req.body;
      const user = await getUserByIdModel(userId);
      req.body.password = user.password;
      next();
    }
  }
  
  async function isExistingUser(req, res, next) {
    const user = await getUserByEmailModel(req.body.email);
    if (user) {
      req.body.user = user;
      next();
      return;
    }
    res.status(400).send("User with this email does not exist");
  }
  
  async function verifyPwd(req, res, next) {
    const { user } = req.body;
    const id = user._id;
    bcrypt.compare(req.body.password, user.password, (err, result) => {
      if (err) {
        res.status(500).send(err.message);
        return;
      }
      if (result) {
        const token = jwt.sign({ id }, process.env.JWT_SECRET, {
          expiresIn: "2h",
        });
        req.body.token = token;
        next();
        return;
      } else {
        res.status(400).send("Incorrrect Password Or Email!");
      }
    });
  }
  
async function auth(req, res, next) {
    const { token } = req.cookies;
    if (!token) {
      res.status(401).send("Token Required");
      return;
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send("Invalid Token");
        return;
      }
      if (decoded) {
        req.body.userId = decoded.id;
        next();
        return;
      }
    });
  }
  

  
  module.exports = {
    passwordsMatch,
    doesUserExist,
    hashPwd,
    isExistingUser,
    verifyPwd,
    auth,
  };
  