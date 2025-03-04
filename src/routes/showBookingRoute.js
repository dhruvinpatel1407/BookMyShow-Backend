const express = require("express");
const BookingCollection = require("../models/ShowBookingModel");
const UserCollection = require("../models/userModel");
const { verifyToken } = require("../config/auth");
const chalk = require("chalk");
const router = express.Router();

const {
  createBooking,
  getLastBooking,
  getAllBookings,
} = require("../controllers/bookingController");
// Apply middleware to all booking routes
router.use(verifyToken);

router.post("/", createBooking);

router.get("/", getLastBooking);

router.get("/all", getAllBookings);

module.exports = router;
