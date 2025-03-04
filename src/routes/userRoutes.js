const express = require("express");
const bcrypt = require("bcryptjs");
const UserCollection = require("../models/userModel");
const BookingCollection = require("../models/ShowBookingModel");
const routes = express.Router();
const { verifyToken } = require("../config/auth");
const chalk = require("chalk");

const {
  register,
  login,
  getMe,
  deleteUser,
  updateUser,
} = require("../controllers/userController");

routes.post("/register", register);

routes.post("/login", login);

routes.use(verifyToken);

routes.get("/me", getMe);

routes.delete("/:id", deleteUser);

routes.put("/:id", updateUser);

module.exports = routes;
